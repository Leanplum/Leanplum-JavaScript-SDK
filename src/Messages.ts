import EventEmitter from './EventEmitter'

export default class Messages {
  private _files: any = {}

  constructor(
    private events: EventEmitter,
    private trackMessage: Function,
    private onAction: Function
  ) {
    events.on('previewRequest', this.onMessagePreview.bind(this))
    events.on('messagesReceived', this.onMessagesReceived.bind(this))
    events.on('filesReceived', this.onFilesReceived.bind(this))
  }

  onFilesReceived(files) {
    if (files) {
      this._files = Object.keys(files).reduce((acc, filename) => {
        acc[filename] = files[filename][""].servingUrl;
        return acc;
      }, {})
    } else {
      this._files = {}
    }
  }

  onMessagePreview(message) {
    const vars = message.action;

    this.events.emit('showMessage', this.resolveFiles({
      isPreview: true,

      message: {
        messageId: message.messageId,
        ...vars,
      },

      context: {
        track: (event?: string) =>
          console.log(`Tracking event '${event}' for ${message.messageId}`),
        runActionNamed: (actionName: string): void =>
          console.log(`Running untracked action '${actionName}'`),
        runTrackedActionNamed: (actionName: string): void =>
          console.log(`Running tracked action '${actionName}'`)
      }
    }))
  }

  onMessagesReceived(messages) {
    const messageIds = Object.keys(messages);

    // TODO: check logic for showing messages from other SDKs
    // https://github.com/Leanplum/Leanplum-Android-SDK/blob/master/AndroidSDKCore/src/main/java/com/leanplum/internal/ActionManager.java#L471-L529
    const processMessage = (id: string, message: any) => {
      console.log('processing message', message);
      // tell user code to render it
      // TODO: resolve colors
      const vars = this.resolveFiles({ ...message.vars });

      const context = {
        // these match the ActionContext API
        // https://docs.leanplum.com/reference#section-android-custom-templates
        track: (event?: string) => this.trackMessage(id, event || null),
        runActionNamed: (actionName: string): void => this.onAction(vars[actionName]),
        runTrackedActionNamed: (actionName: string): void => {
          const event = actionName.replace(/ action$/, '')
          // TODO: figure out correct action name from actionName
          // '.m910545446-Accept'
          this.trackMessage(id, `.m${id}-${event}`, () => this.onAction(vars[actionName]))
        }
      }

      const result = this.events.emit('showMessage', {
        context,
        message: {
          messageId: id,
          ...vars,
        },
      });
    };

    messageIds
      .filter(id => messages[id].action !== 'Open URL')
      // TODO: filter with whenTriggers and whenLimits logic on client-side
      .forEach(id => processMessage(id, messages[id]));
  }

  private resolveFiles(vars: any): any {
    for (const key in vars) {
      const filePrefix = /^__file__/
      if (filePrefix.test(key)) {
        const name = key.replace(filePrefix, '')
        const servingUrl = this._files[vars[key]]
        vars[name + ' URL'] = servingUrl
      } else if (typeof vars[key] === "object") {
        vars[key] = this.resolveFiles(vars[key])
      }
    }

    return vars;
  }
}
