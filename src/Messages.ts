import { Action, UserAttributes } from './types/public'
import Constants from './Constants'
import ArgsBuilder from './ArgsBuilder'
import { CreateRequestFunction, Message, MessageVariables } from './types/internal'
import EventEmitter from './EventEmitter'
import isEqual from 'lodash.isequal'
import LocalStorageManager from './LocalStorageManager'

type MessageId = string
type Timestamp = number
type MessageHash = { [key: string]: Message }
type ActionContext = {
  // matches the ActionContext API in Android/iOS
  // https://docs.leanplum.com/reference#section-android-custom-templates
  track: (event?: string) => void;
  runActionNamed: (actionName: string) => void;
  runTrackedActionNamed: (actionName: string) => void;
}
type TriggerContext =
  { trigger: 'start' } |
  { trigger: 'resume' } |
  { trigger: 'userAttribute'; attributes: UserAttributes } |
  { trigger: 'state'; state: string } |
  { trigger: 'event'; eventName: string; params?: Record<string, number | string> }
type FilterConfig = {
  verb: 'AND' | 'OR';
  children: Array<{
    subject: string;
    verb: string;
    noun: string | number;
    objects?: Array<string | number>;
  }>;
}

class OccurrenceTracker {
  recordOccurrence(id: MessageId): void {
    const sessionOccurrences = (this.session[id] || 0) + 1
    this.session[id] = sessionOccurrences

    const occurrences = (this.occurrences[id] || [])
    occurrences.push(Date.now())
    this.occurrences[id] = occurrences

    this.save()
  }

  recordTriggerOccurrence(id: MessageId): number {
    const triggerOccurrences = this.triggers[id] || []
    triggerOccurrences.push(Date.now())
    this.triggers[id] = triggerOccurrences

    this.save()

    return triggerOccurrences.length
  }

  getSessionOccurranceCount(id: MessageId): number {
    return this.session[id] || 0
  }

  getOccurrences(id: MessageId): Array<Timestamp> {
    return this.occurrences[id] || []
  }

  clearSession(): void {
    this.session = {}
  }

  load(): void {
    const cache = LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.MESSAGE_OCCURRENCES)
    if (cache) {
      const json = JSON.parse(cache)
      this.session = json.session
      this.triggers = json.triggers
      this.occurrences = json.occurrences
    }
  }

  save(): void {
    const key = Constants.DEFAULT_KEYS.MESSAGE_OCCURRENCES
    LocalStorageManager.saveToLocalStorage(key, JSON.stringify({
      session: this.session,
      triggers: this.triggers,
      occurrences: this.occurrences,
    }))
  }

  private session: { [key: string]: number } = {}
  private triggers: { [key: string]: Array<Timestamp> } = {}
  private occurrences: { [key: string]: Array<Timestamp> } = {}
}

const verbToInterval = (verb: string): number => {
  const SECOND = 1000
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE
  const DAY = 24 * HOUR
  switch (verb) {
    case 'limitSecond': return SECOND
    case 'limitMinute': return MINUTE
    case 'limitHour': return HOUR
    case 'limitDay': return DAY
  }
}

export default class Messages {
  private _files: { [key: string]: string } = {}
  private _messageCache: MessageHash = {}
  private occurrenceTracker = new OccurrenceTracker()

  constructor(
    private events: EventEmitter,
    private createRequest: CreateRequestFunction
  ) {
    events.on('previewRequest', this.onMessagePreview.bind(this))
    events.on('messagesReceived', this.onMessagesReceived.bind(this))
    events.on('filesReceived', this.onFilesReceived.bind(this))

    events.on('start', () => {
      this.occurrenceTracker.clearSession()
      this.onTrigger({ trigger: 'start' })
    })
    events.on('resume', () => {
      const key = Constants.DEFAULT_KEYS.MESSAGE_CACHE
      const cache = LocalStorageManager.getFromLocalStorage(key)
      this._messageCache = cache ? JSON.parse(cache) : this._messageCache

      this.occurrenceTracker.load()

      this.onTrigger({ trigger: 'resume' })
    })
    events.on('track', (args) => {
      this.onTrigger({
        trigger: 'event',
        eventName: args.eventName,
        params: args.params || {},
      })
    })
    events.on('advanceState', (args) =>
      this.onTrigger({ trigger: 'state', state: args.state }))
    events.on('setUserAttribute', (attributes) =>
      this.onTrigger({ trigger: 'userAttribute', attributes })
    )
  }

  onFilesReceived(files): void {
    if (files) {
      this._files = Object.keys(files).reduce((acc, filename) => {
        acc[filename] = files[filename][''].servingUrl
        return acc
      }, {})
    } else {
      this._files = {}
    }
  }

  onTrigger(context: TriggerContext): void {
    const messages = this.getMessages()
    const messageIds = Object.keys(messages)

    messageIds
      .filter(id => this.shouldShowMessage(id, messages[id], context))
      .slice(0, 1) // TODO: choose randomly
      .forEach(id => this.showMessage(id, messages[id]))
  }

  onMessagePreview(message): void {
    const vars = message.action

    const context: ActionContext = {
      track: (event?: string) => {
        const eventInfo = event ? `event '${event}'` : 'impression'
        console.log(`Tracking ${eventInfo} for ${message.messageId}`)
      },
      runActionNamed: (actionName: string): void =>
        console.log(`Running untracked action '${actionName}'`),
      runTrackedActionNamed: (actionName: string): void =>
        console.log(`Running tracked action '${actionName}'`),
    }

    this.events.emit('showMessage', this.resolveFields({
      isPreview: true,

      message: {
        messageId: message.messageId,
        ...vars,
      },

      context,
    }))
  }

  onMessagesReceived(receivedMessages): void {
    const messages = receivedMessages || {}
    this._messageCache = messages
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.MESSAGE_CACHE, JSON.stringify(messages))
  }

  shouldShowMessage(id: string, message, context: TriggerContext): boolean {
    const now = Date.now()

    if (!this.matchesTrigger(message.whenTriggers, context)) {
      return false
    }

    const triggersCount = this.occurrenceTracker.recordTriggerOccurrence(id)

    if (!this.matchesLimits(id, message.whenLimits, triggersCount)) {
      return false
    }

    if (message.startTime && message.endTime) {
      const outsideActivePeriod = now < message.startTime || message.endTime < now
      if (outsideActivePeriod) {
        return false
      }
    }

    return true
  }

  private showMessage(id: string, message: Message): void {
    const vars = this.resolveFields(this.addDefaults({ ...message.vars }))

    const context: ActionContext = {
      track: (event?: string) => {
        this.occurrenceTracker.recordOccurrence(id)
        this.trackMessage(id, event || null)
      },
      runActionNamed: (actionName: string): void => this.onAction(vars[actionName]),
      runTrackedActionNamed: (actionName: string): void => {
        const event = actionName.replace(/ action$/, '')
        this.trackMessage(id, event, () => this.onAction(vars[actionName]))
      },
    }

    this.events.emit('showMessage', {
      context,
      message: {
        messageId: id,
        ...vars,
      },
    })
  }

  trackMessage(
    messageId: string,
    event: string = null,
    response: Function = () => { /* noop */ }
  ): void {
    const args = new ArgsBuilder()
      .add(Constants.PARAMS.MESSAGE_ID, messageId)

    if (event) {
      args.add(Constants.PARAMS.EVENT, event)
    }

    this.createRequest(Constants.METHODS.TRACK, args, {
      queued: true,
      sendNow: true,
      response,
    })
  }

  onAction(action: Action): void {
    if (!action) {
      return
    }

    const messages = this._messageCache
    if (action && action.__name__ === 'Chain to Existing Message') {
      const chainedMessageId = action['Chained message']
      const message = messages[chainedMessageId]
      if (message.action === 'Open URL') {
        this.trackMessage(chainedMessageId, 'View', () => this.onAction(message.vars))
      } else {
        this.showMessage(chainedMessageId, message)
      }

      return
    }

    // handle app function
    const processAction = (): void => {
      if (action.__name__ === 'Open URL') {
        this.events.emit('navigationChange', action.URL)
      }
    }
    const messageId = this.messageIdFromAction(action)
    if (messageId) {
      this.trackMessage(messageId, null, processAction)
    } else {
      processAction()
    }
  }

  private getMessages(): MessageHash {
    return this._messageCache || {}
  }

  private colorToHex(color: number): string {
    const b = color & 0xff; color >>= 8
    const g = color & 0xff; color >>= 8
    const r = color & 0xff; color >>= 8
    const a = (color & 0xff) / 255
    return `rgba(${r},${g},${b},${a})`
  }

  private addDefaults(vars: MessageVariables): MessageVariables {
    const kinds = this.getMessages().actionDefinitions || {}
    const defaults = kinds[vars.__name__]

    if (!defaults) {
      return vars
    }

    function useDefaults(obj: MessageVariables, defaultValues: MessageVariables): MessageVariables {
      for (const key in defaultValues) {
        const value = defaultValues[key]
        if (typeof value === 'object') {
          obj[key] = useDefaults(obj[key] || {}, value)
        } else if (!obj[key]) {
          obj[key] = value
        }
      }
      return obj
    }

    return useDefaults({ ...vars }, defaults.values)
  }

  private resolveFields(vars: MessageVariables): MessageVariables {
    // TODO: determine types from action definitions (definition.kinds[key])
    const colorSuffix = /\bcolor/i
    const filePrefix = /^__file__/
    for (const key in vars) {
      if (filePrefix.test(key)) {
        const name = key.replace(filePrefix, '')
        const servingUrl = this._files[vars[key]]
        vars[name + ' URL'] = servingUrl
      } else if (colorSuffix.test(key)) {
        vars[key] = this.colorToHex(vars[key])
      } else if (typeof vars[key] === 'object') {
        vars[key] = this.resolveFields(vars[key])
      }
    }

    return vars
  }

  private messageIdFromAction(action: Action): string {
    const messages = this._messageCache
    const vars = { ...action }
    delete vars['parentCampaignId']

    for (const id of Object.keys(messages)) {
      const message = messages[id]
      if (message.parentCampaignId !== action.parentCampaignId) {
        continue
      }
      if (isEqual(message.vars, vars)) {
        return id
      }
    }
  }

  private matchesTrigger(whenTriggers: FilterConfig, context: TriggerContext): boolean {
    if (!whenTriggers) {
      return false
    }

    return whenTriggers.children.some((trigger) => {
      const subject = trigger.subject
      switch (context.trigger) {
        case 'start': return subject === 'start' || subject === 'resume'
        case 'resume': return subject === 'resume'
        case 'event':
          if (subject !== 'event') {
            return false
          }

          const matchesEventName = context.eventName === trigger.noun
          if (trigger.verb === 'triggers') {
            return matchesEventName
          } else if (trigger.verb === 'triggersWithParameter') {
            const [parameter, value] = trigger.objects
            return matchesEventName && context.params[parameter] === value
          }
          break
        case 'userAttribute':
          if (subject !== 'userAttribute') {
            return false
          }

          if (trigger.verb === 'changes') {
            return trigger.noun in context.attributes
          } else if (trigger.verb === 'changesTo') {
            const [ value ] = trigger.objects
            return context.attributes[trigger.noun] === value
          }
          break
        case 'state':
          if (subject !== 'state') {
            return false
          }
          return trigger.verb === 'triggers' && trigger.noun === context.state
          break
      }
      return false
    })
  }

  private matchesLimits(id: string, whenLimits: FilterConfig, triggerOccurrences: number): boolean {
    if (!whenLimits) {
      return true
    }

    return whenLimits.children.every((limit) => {
      const { subject, verb } = limit
      const noun = parseInt(limit.noun.toString())
      if (subject === 'times') {
        if (verb === 'limitSession') {
          const sessionOccurrences = this.occurrenceTracker.getSessionOccurranceCount(id)
          return sessionOccurrences + 1 === noun
        } else {
          // X in Y (seconds|minutes|days|hours)
          const perInterval = parseInt(limit.objects[0].toString()) || 1
          const timeSlot = verbToInterval(verb) * perInterval
          const occurrences = this.occurrenceTracker.getOccurrences(id)
          const count = occurrences.length

          if (count < noun) {
            return true
          } else {
            const slice = occurrences.slice(count - noun, count)
            // check the time of the first of the last N occurrences
            return slice[0] < Date.now() - timeSlot
          }
        }
      } else if (subject === 'onNthOccurrence') {
        return triggerOccurrences === noun
      } else if (subject === 'everyNthOccurrence') {
        return (triggerOccurrences % noun) === 0
      }
      return false
    })
  }
}
