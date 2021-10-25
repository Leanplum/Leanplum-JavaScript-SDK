import { Action, UserAttributes } from './types/public'
import Constants from './Constants'
import ArgsBuilder from './ArgsBuilder'
import { CreateRequestFunction, Message, MessageVariables } from './types/internal'
import EventEmitter from './EventEmitter'
import Network from './Network'
import isEqual from 'lodash.isequal'
import LocalStorageManager from './LocalStorageManager'
import ValueTransforms from './ValueTransforms'

/* eslint-disable @typescript-eslint/ban-types */

type MessageId = string
type Timestamp = number
type MessageHash = { [key: string]: Message }
// TODO: validation
export type ActionContext = {
  // matches the ActionContext API in Android/iOS
  // https://docs.leanplum.com/reference#section-android-custom-templates
  track: (event?: string, value?: number, info?: string, params?: Object) => void;
  runActionNamed: (actionName: string) => void;
  runTrackedActionNamed: (actionName: string) => void;
}
type TriggerContext =
  // TODO: 'install' trigger for first session
  { trigger: 'start' } |
  { trigger: 'resume' } |
  { trigger: 'userAttribute'; attributes: UserAttributes } |
  { trigger: 'state'; state: string; params?: Record<string, number | string> } |
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
type RenderOptions = {
  isPreview?: boolean;
  context: ActionContext;
  message: MessageVariables;
}
type TrackOptions = {
  event?: string;
  value?: number;
  info?: string;
  params?: Object;
}

type MessageFrame = HTMLIFrameElement & {
  metadata: RenderOptions;
  contentWindow: Window & { messageId: string };
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
  private _messageCache: MessageHash = {}
  private occurrenceTracker = new OccurrenceTracker()

  constructor(
    private events: EventEmitter,
    private createRequest: CreateRequestFunction,
    private getFileUrl: (filename: string) => string
  ) {
    events.on('previewRequest', this.onMessagePreview.bind(this))
    events.on('messagesReceived', this.onMessagesReceived.bind(this))

    events.on('start', () => {
      this.occurrenceTracker.load()
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
      this.onTrigger({
        trigger: 'state',
        state: args.state,
        params: args.params || {},
      }))
    events.on('setUserAttribute', (attributes) =>
      this.onTrigger({ trigger: 'userAttribute', attributes })
    )
  }

  private _showRichIAM = false

  enableRichInAppMessages(enabled: boolean): void {
    this._showRichIAM = enabled
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

    this.handleMessage({
      isPreview: true,

      message: {
        messageId: message.messageId,
        ...vars,
      },

      context,
    })
  }

  onMessagesReceived(receivedMessages): void {
    const messages = receivedMessages || {}
    this._messageCache = messages
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.MESSAGE_CACHE, JSON.stringify(messages))
  }

  shouldShowMessage(id: string, message, context: TriggerContext): boolean {
    const now = Date.now()

    const matchesTrigger = this.matchesTrigger(message.whenTriggers, context)
    const matchesUnless = this.matchesTrigger(message.unlessTriggers, context)
    if (!matchesTrigger || matchesUnless) {
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
    const vars = this.addDefaults({ ...message.vars })

    const context: ActionContext = {
      track: (event?: string, value?: number, info?: string, params?: Object) => {
        this.occurrenceTracker.recordOccurrence(id)
        this.trackMessage(id, { event, value, info, params })
      },
      runActionNamed: (actionName: string): void => this.onAction(vars[actionName], id),
      runTrackedActionNamed: (actionName: string): void => {
        const event = actionName.replace(/ action$/, '')
        this.trackMessage(id, { event }, () => this.onAction(vars[actionName], id))
      },
    }

    this.handleMessage({
      context,
      message: {
        messageId: id,
        ...vars,
      },
    })
  }

  processMessageEvent(messageId: string, eventUrl: string): void {
    const iframe = document.getElementById(`lp-message-${messageId}`) as MessageFrame
    if (!iframe) {
      console.log('message closed, skipping event processing')
      return
    }

    const [event, query = ''] = eventUrl.replace(/^http:\/\/leanplum\//, '').split('?')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = query.split('&').reduce((acc, param) => {
      const [key, value] = param.split('=')
      acc[key] = decodeURIComponent(value)
      return acc
    }, {})
    const { message, context } = iframe.metadata

    switch (event) {
      case 'loadFinished':
        iframe.style.visibility = 'visible'
        iframe.style.left = '0'
        if (message['HTML Height'] > 0) {
          const width = message['HTML Width']
          iframe.style.height = `${message['HTML Height']}px`
          iframe.style.width = width
          iframe.style.left = `calc((100% - ${width}) / 2)`

          const anchorProp = message['HTML Align'].toLowerCase()
          const altProp = anchorProp === 'top' ? 'bottom' : 'top'
          iframe.style[anchorProp] = '0'
          iframe.style[altProp] = ''
        } else {
          iframe.style.top = '0'
        }

        context.track()
        break
      case 'track':
        context.track(
          params.event,
          parseFloat(params.value),
          params.parameters,
          params.info
        )
        break
      case 'runAction':
      case 'runTrackedAction':
        context[`${event}Named`](params.action)
        // fall through and close
      case 'close':
        iframe.metadata = null
        iframe.parentNode.removeChild(iframe)
        break
    }
  }

  handleMessage(options: RenderOptions): void {
    if (this._showRichIAM && options.message.__name__ === 'HTML') {
      this.resolveFiles(options.message)
      const templateName = options.message['Template'] || ''
      new Network().ajax(
        'get',
        templateName.replace('-10.html', '-11.html'),
        '',
        template => this.renderRichInAppMessage(template, options),
        () => { /* skip rendering on error */ },
        false,
        true
      )
    } else {
      this.events.emit('showMessage', this.resolveFields(options))
    }
  }

  private renderRichInAppMessage(template: string, options: RenderOptions): void {
    const messageId = options.message.messageId
    const vars = JSON.stringify(options.message)
    const iframe = document.createElement('iframe') as MessageFrame
    iframe.setAttribute('id', `lp-message-${messageId}`)
    iframe.style.cssText = [
      'border-width: 0',
      'position: fixed',
      'top: -100%',
      'left: -100%',
      'width: 100%',
      'height: 100%',
      'visibility: hidden',
      'z-index: 100000',
    ].join(';')
    document.body.appendChild(iframe)

    // pass message info
    iframe.metadata = options
    iframe.contentWindow.messageId = messageId

    const content = template
      .replace('##Vars##', vars)
      .replace('<body>', `<body><script>window.messageId='${messageId}'</script>`)
    if ('srcdoc' in iframe) {
      iframe.srcdoc = content
    } else {
      const doc = iframe.contentWindow.document
      doc.open()
      doc.write(content)
      doc.close()
    }
  }

  trackMessage(
    messageId: string,
    trackOptions: TrackOptions = { event: null },
    response: Function = () => { /* noop */ }
  ): void {
    const args = new ArgsBuilder()
      .add(Constants.PARAMS.MESSAGE_ID, messageId)

    const defined = (x): boolean => typeof x !== 'undefined'

    if (trackOptions.event) {
      args.add(Constants.PARAMS.EVENT, trackOptions.event)
    }

    if (defined(trackOptions.value)) {
      args.add(Constants.PARAMS.VALUE, trackOptions.value || 0.0)
    }

    if (defined(trackOptions.info)) {
      args.add(Constants.PARAMS.INFO, trackOptions.info)
    }

    if (defined(trackOptions.params)) {
      args.add(Constants.PARAMS.PARAMS, JSON.stringify(trackOptions.params))
    }

    this.createRequest(Constants.METHODS.TRACK, args, {
      queued: true,
      sendNow: true,
      response,
    })
  }

  onAction(action: Action, parentMessageId = ''): void {
    if (!action) {
      return
    }

    const messages = this._messageCache
    if (action.__name__ === 'Chain to Existing Message') {
      const chainedMessageId = action['Chained message']
      const message = messages[chainedMessageId]
      if (message.action === 'Open URL') {
        this.trackMessage(chainedMessageId, { event: 'View' }, () => this.onAction(message.vars, chainedMessageId))
      } else if (message.action === 'Register For Push') {
        this.events.emit('registerForPush')
      } else {
        this.showMessage(chainedMessageId, message)
      }

      return
    }

    // handle app function
    const processAction = (): void => {
      const name = action.__name__
      if (action.__name__ === 'Open URL') {
        this.events.emit('navigationChange', action.URL)
      } else if (action.__name__ === 'Register For Push') {
        this.events.emit('registerForPush')
      } else if (name) {
        // embedded chained message
        this.showMessage(parentMessageId, {
          messageId: parentMessageId,
          action: name,
          vars: action as any, // eslint-disable-line
        })
      }
    }
    const messageId = this.messageIdFromAction(action)
    if (messageId) {
      this.trackMessage(messageId, { event: null }, processAction)
    } else {
      processAction()
    }
  }

  private getMessages(): MessageHash {
    return this._messageCache || {}
  }

  private addDefaults(vars: MessageVariables): MessageVariables {
    const kinds = this.getMessages().actionDefinitions || {}
    const defaults = kinds[vars.__name__]

    if (!defaults) {
      return vars
    }

    function useDefaults(obj: MessageVariables, defaultValues: MessageVariables): MessageVariables {
      for (const key of Object.keys(defaultValues)) {
        const value = defaultValues[key]
        if (typeof value === 'object') {
          obj[key] = useDefaults(obj[key] || {}, value)
        } else if (typeof obj[key] === 'undefined') {
          obj[key] = value
        }
      }
      return obj
    }

    return useDefaults({ ...vars }, defaults.values)
  }

  private resolveFiles(vars: MessageVariables): MessageVariables {
    const filePrefix = /^__file__/
    for (const key in vars) {
      if (filePrefix.test(key)) {
        const name = key.replace(filePrefix, '')
        vars[name] = this.getFileUrl(vars[key])
      } else if (typeof vars[key] === 'object') {
        vars[key] = this.resolveFiles(vars[key])
      }
    }

    return vars
  }

  private resolveFields(vars: MessageVariables): MessageVariables {
    const colorSuffix = /\bcolor/i
    const filePrefix = /^__file__/
    for (const key in vars) {
      if (filePrefix.test(key)) {
        const name = key.replace(filePrefix, '')
        vars[name + ' URL'] = this.getFileUrl(vars[key])
      } else if (colorSuffix.test(key)) {
        vars[key] = ValueTransforms.decodeColor(vars[key])
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

    const ignoreCaseEquals = (a, b): boolean =>
      a.toString().localeCompare(b.toString(), undefined, { sensitivity: 'accent' }) === 0

    const matchesTriggers = (contextNoun: string, params, trigger): boolean => {
      const matchesNoun = contextNoun === trigger.noun
      if (trigger.verb === 'triggers') {
        return matchesNoun
      } else if (trigger.verb === 'triggersWithParameter') {
        const [parameter, value] = trigger.objects
        const containsParam = parameter in params
        const matchesParam = containsParam && ignoreCaseEquals(value, params[parameter])
        return matchesNoun && matchesParam
      }
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

          return matchesTriggers(context.eventName, context.params, trigger)
        case 'userAttribute':
          if (subject !== 'userAttribute') {
            return false
          }

          const containsAttribute = trigger.noun in context.attributes
          if (trigger.verb === 'changes') {
            return containsAttribute
          } else if (trigger.verb === 'changesTo') {
            if (!containsAttribute) {
              return false
            }
            const contextValue = context.attributes[trigger.noun]
            return trigger.objects.some(value => {
              if (value === null && contextValue === null) {
                return true
              }
              return value && contextValue && ignoreCaseEquals(value, contextValue)
            })
          }
          break
        case 'state':
          if (subject !== 'state') {
            return false
          }

          return matchesTriggers(context.state, context.params, trigger)
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
        } else if (verb === 'limitUser') {
          const occurrences = this.occurrenceTracker.getOccurrences(id).length
          return occurrences + 1 <= noun
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
