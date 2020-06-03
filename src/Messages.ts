import { Message, MessageVariables } from './types/internal'
import EventEmitter from './EventEmitter'

export default class Messages {
  private _files: { [key: string]: string } = {}

  constructor(
    private events: EventEmitter,
    private trackMessage: Function,
    private onAction: Function
  ) {
    events.on('previewRequest', this.onMessagePreview.bind(this))
    events.on('messagesReceived', this.onMessagesReceived.bind(this))
    events.on('filesReceived', this.onFilesReceived.bind(this))
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

  onMessagesReceived(messages): void {
    const messageIds = Object.keys(messages)

    messageIds
      // TODO: process whenTriggers and whenLimits logic on client-side
      .filter(id => messages[id].whenTriggers)
      .forEach(id => this.showMessage(id, messages[id]))
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
}
