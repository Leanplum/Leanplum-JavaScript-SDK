import { CreateRequestFunction } from './types/internal'
import ArgsBuilder from './ArgsBuilder'

export default class LeanplumInbox {
  private messageMap: { [key: string]: any } = {}
  private changeHandlers: Function[] = []
  private actionHandlers: Function[] = []

  constructor(
    private createRequest: CreateRequestFunction
  ) { }

  public downloadMessages() {
    this.createRequest('getNewsfeedMessages', undefined, {
      // TODO: queued? sendNow?
      response: (data) => {
        this.messageMap = data.response[0].newsfeedMessages;

        this.triggerChangeHandlers()
      }
    })

  }

  public read(messageId: string): void {
    const message = this.messageMap[messageId];

    if (!message || message.isRead) {
      return
    }

    message.isRead = true
    this.triggerChangeHandlers()

    const args = new ArgsBuilder()
    args.add('newsfeedMessageId', messageId)
    this.createRequest('markNewsfeedMessageAsRead', args, {})

    const inboxMessage = this.message(messageId);
    if (inboxMessage.openAction()) {
      this.triggerActionHandlers(inboxMessage.openAction());
    }
  }

  public remove(messageId: string): void {
    const message = this.messageMap[messageId];

    if (!message) {
      return
    }

    delete this.messageMap[messageId]
    this.triggerChangeHandlers()

    const args = new ArgsBuilder()
    args.add('newsfeedMessageId', messageId)
    this.createRequest('deleteNewsfeedMessage', args, {})
  }

  public onChanged(handler: Function): void {
    this.changeHandlers.push(handler)
  }

  private triggerChangeHandlers(): void {
    this.changeHandlers.forEach(handler => handler())
  }

  public onAction(handler: Function): void {
    this.actionHandlers.push(handler)
  }

  private triggerActionHandlers(action: Action): void {
    this.actionHandlers.forEach(handler => handler(action))
  }

  public count(): number {
    return Object.values(this.messageMap).length
  }
  public unreadCount(): number {
    return Object.values(this.messageMap).filter(x => !x.isRead).length
  }
  private messages(filter: Function) {
    const result = []
    for (let id in this.messageMap) {
      const data = this.messageMap[id]
      if (filter(data)) {
        result.push(InboxMessage.create(id, data))
      }
    }
    return result
  }
  public allMessages(): InboxMessage[] {
    return this.messages(() => true)
  }
  public unreadMessages(): InboxMessage[] {
    return this.messages((x) => !x.isRead)
  }
  public messageIds(): string[] {
    return Object.keys(this.messageMap)
  }
  public message(id: string): InboxMessage {
    const message = this.messageMap[id]
    if (!message) {
      return null
    }
    return InboxMessage.create(id, message)
  }
}

// Open action, used in messages
type Action = any;

class InboxMessage {
  static create(id: string, messageInfo: any): InboxMessage {
    return new InboxMessage(
      id,
      messageInfo.messageData?.vars?.Title,
      messageInfo.messageData?.vars?.Subtitle,
      messageInfo.deliveryTimestamp,
      messageInfo.isRead,
      messageInfo.messageData?.vars?.Image,
      messageInfo.messageData?.vars?.['Open action']
    )
  }

  constructor(
    private _id: string,
    private _title: string,
    private _subtitle: string,
    private _timestamp: number,
    private _isRead: boolean,
    private _imageUrl: string,
    private _openAction: Action
  ) { }

  public id(): string {
    return this._id
  }
  public title(): string {
    return this._title
  }
  public subtitle(): string {
    return this._subtitle
  }
  public timestamp(): number {
    return this._timestamp
  }
  public isRead(): boolean {
    return this._isRead
  }
  public imageUrl(): string {
    return this._imageUrl
  }
  public openAction(): Action {
    return this._openAction
  }
}
