import { Action } from './types/public'
import Constants from './Constants'
import ArgsBuilder from './ArgsBuilder'
import { CreateRequestFunction, Message, MessageVariables } from './types/internal'
import EventEmitter from './EventEmitter'
import isEqual from 'lodash.isequal'

export default class Messages {
  private _files: { [key: string]: string } = {}
  private _messageCache: { [key: string]: any } = {}

  constructor(
    private events: EventEmitter,
    private createRequest: CreateRequestFunction
  ) {
    events.on('previewRequest', this.onMessagePreview.bind(this))
    events.on('messagesReceived', this.onMessagesReceived.bind(this))
    events.on('filesReceived', this.onFilesReceived.bind(this))

    events.on('start', this.onTrigger.bind(this, 'start'))
    //events.on('resume', this.onResume)
    events.on('trigger', this.onTrigger.bind(this, 'trigger'))
    //events.on('advanceState', this.onAdvanceState)
    //events.on('setUserAttribute', this.onSetUserAttribute)
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

  onTrigger(event, args) {
    const messages = this.getMessages()
    const messageIds = Object.keys(messages)

    // TODO: extract to triggerContextFrom(event, args), handle event args
    const triggerContext = {
      subject: event,
      verb: '',
    }
    if (event === 'trigger') {
      Object.assign(triggerContext, {
        subject: 'event',
        verb: 'triggers',
        noun: args.eventName,
      })
    }

    messageIds
      .filter(id => this.shouldShowMessage(messages[id], triggerContext))
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
  }

  shouldShowMessage(message, triggerContext): boolean {
    // TODO: process whenTriggers and whenLimits logic on client-side
    // https://github.com/Leanplum/Leanplum-Android-SDK/blob/4a795596830d45f5cae2402c25ef32a2f94c6676/AndroidSDKCore/src/main/java/com/leanplum/internal/ActionManager.java#L240-L282
    if (!message.whenTriggers) {
      return false
    }

    // TODO: compile trigggers to function
    const { subject, noun } = triggerContext
    const matchesTrigger = message.whenTriggers.children.some((trigger) => {
      return trigger.subject === subject && trigger.noun === noun
    })
    if (!matchesTrigger) {
      return false
    }

    if (message.startTime && message.endTime) {
      const now = Date.now()
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
      track: (event?: string) => this.trackMessage(id, event || null),
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

  private getMessages(): any {
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
}
