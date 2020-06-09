import { Action } from './types/public'
import Constants from './Constants'
import ArgsBuilder from './ArgsBuilder'
import { CreateRequestFunction, Message, MessageVariables } from './types/internal'
import EventEmitter from './EventEmitter'
import isEqual from 'lodash.isequal'
import LocalStorageManager from './LocalStorageManager'

type MessageHash = { [key: string]: Message }

const verbToInterval = (verb: string): number => {
  const SECOND = 1000
  const MINUTE = 60*SECOND
  const HOUR = 60*MINUTE
  const DAY = 24*HOUR
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
  private _messageHistory = {
    session: {},
    triggers: {},
    occurrences: {},
  }

  constructor(
    private events: EventEmitter,
    private createRequest: CreateRequestFunction
  ) {
    events.on('previewRequest', this.onMessagePreview.bind(this))
    events.on('messagesReceived', this.onMessagesReceived.bind(this))
    events.on('filesReceived', this.onFilesReceived.bind(this))

    events.on('start', (args) => {
      this._messageHistory.session = {}
      this.onTrigger('start', args)
    })
    events.on('resume', (args) => {
      const cache = LocalStorageManager.getFromLocalStorage('__leanplum__message_cache')
      if (cache) {
        this._messageCache = JSON.parse(cache)
      }

      const history = LocalStorageManager.getFromLocalStorage('__leanplum__message_occurrences')
      if (history) {
        this._messageHistory = JSON.parse(history)
      }
      this.onTrigger('resume', args)
    })
    events.on('track', this.onTrigger.bind(this, 'trackEvent'))
    //events.on('advanceState', this.onTrigger.bind(this, 'advanceState'))
    //events.on('setUserAttribute', this.onTrigger.bind(this, 'setUserAttribute'))
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

  onTrigger(event, args): void {
    const messages = this.getMessages()
    const messageIds = Object.keys(messages)

    // TODO: enable all message triggers
    // TODO: extract to triggerContextFrom(event, args), handle event args
    const triggerContext = {
      subject: event,
      verb: '',
    }
    if (event === 'trackEvent') {
      Object.assign(triggerContext, {
        subject: 'event',
        verb: 'triggers',
        noun: args.eventName,
      })
    }

    messageIds
      .filter(id => this.shouldShowMessage(id, messages[id], triggerContext))
      .slice(0, 1)
      .forEach(id => this.showMessage(id, messages[id]))
  }

  onMessagePreview(message): void {
    const vars = message.action

    this.events.emit('showMessage', this.resolveFields({
      isPreview: true,

      message: {
        messageId: message.messageId,
        ...vars,
      },

      context: {
        track: (event?: string) => {
          const eventInfo = event ? `event '${event}'` : 'impression'
          console.log(`Tracking ${eventInfo} for ${message.messageId}`)
        },
        runActionNamed: (actionName: string): void =>
          console.log(`Running untracked action '${actionName}'`),
        runTrackedActionNamed: (actionName: string): void =>
          console.log(`Running tracked action '${actionName}'`),
      },
    }))
  }

  onMessagesReceived(receivedMessages): void {
    const messages = receivedMessages || {}
    this._messageCache = messages
    LocalStorageManager.saveToLocalStorage('__leanplum__message_cache', JSON.stringify(messages))
  }

  shouldShowMessage(id: string, message, triggerContext): boolean {
    const now = Date.now()

    if (!message.whenTriggers) {
      return false
    }

    // TODO: compile trigggers to function, add full support
    const { subject, noun } = triggerContext
    const matchesTrigger = message.whenTriggers.children.some((trigger) => {
      return trigger.subject === subject && trigger.noun === noun
    })
    if (!matchesTrigger) {
      return false
    }

    // record trigger occurrence
    const triggerOccurrences = this._messageHistory.triggers[id] || []
    triggerOccurrences.push(now)
    this._messageHistory.triggers[id] = triggerOccurrences
    this.persistMessageHistory()

    // TODO: compile limits to function
    const whenLimits = message.whenLimits
    const matchesLimits = !whenLimits || whenLimits.children.every((limit) => {
      const { subject, verb, noun } = limit
      if (subject === 'times') {
        if (verb === 'limitSession') {
          const sessionOcurrences = (this._messageHistory.session[id] || 0) + 1
          return sessionOcurrences === noun
        } else {
          // X in Y (seconds|minutes|days|hours)
          const perInterval = limit.objects[0] || 1
          const timeSlot = verbToInterval(verb) * perInterval
          const occurrences = this._messageHistory.occurrences[id] || []
          const count = occurrences.length

          if (count < noun) {
            return true
          } else {
            const slice = occurrences.slice(count - noun, count)
            // check the time of the first of the last N occurrences
            return slice[0] < now - timeSlot
          }
        }
      } else if (subject === 'onNthOccurrence') {
        return triggerOccurrences.length === noun
      } else if (subject === 'everyNthOccurrence') {
        return (triggerOccurrences.length % noun) === 0
      }
      return false
    })
    if (!matchesLimits) {
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
    const vars = this.resolveFields({ ...message.vars })

    const context = {
      // these match the ActionContext API
      // https://docs.leanplum.com/reference#section-android-custom-templates
      track: (event?: string) => {
        // record occurrences
        const history = this._messageHistory
        const sessionOcurrences = (history.session[id] || 0) + 1
        history.session[id] = sessionOcurrences

        const occurrences = (history.occurrences[id] || [])
        occurrences.push(Date.now())
        history.occurrences[id] = occurrences

        this.persistMessageHistory()

        // track open
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

  private resolveFields(vars: MessageVariables): MessageVariables {
    // TODO: determine types from action definitions (definition.kinds[key])
    // TODO: get default values from action definitions
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

  private persistMessageHistory(): void {
    LocalStorageManager.saveToLocalStorage('__leanplum__message_occurrences', JSON.stringify(this._messageHistory))
  }
}
