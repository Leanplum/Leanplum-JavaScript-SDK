import { CreateRequestFunction } from './types/internal'

export default class LeanplumInbox {
  private messageMap: { [key: string]: any }
  private changeHandlers: Function[] = []

  constructor(
    private createRequest: CreateRequestFunction
  ) { }

  public downloadMessages() {
    this.createRequest('getNewsfeedMessages', undefined, {
      // TODO: queued? sendNow?
      response: (response) => {
        if (!response.success) {
          // TODO: error handling
          return
        }

        this.messageMap = response.response[0].newsfeedMessages;

        this.changeHandlers.forEach(handler => handler())
      }
    })

  }

  //TODO/////
  public read(messageId: string): void {} // Promise?
  public remove(messageId: string): void {} // Promise?
  ///////////
  //
  public onChanged(handler: Function): void {
    this.changeHandlers.push(handler)
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

class InboxMessage {
  static create(id: string, messageInfo: any): InboxMessage {
    return new InboxMessage(
      id,
      messageInfo.messageData?.vars?.Title,
      messageInfo.messageData?.vars?.Subtitle,
      messageInfo.deliveryTimestamp,
      messageInfo.isRead,
      messageInfo.messageData?.vars?.Image
    )
  }

  constructor(
    private _id: string,
    private _title: string,
    private _subtitle: string,
    private _timestamp: number,
    private _isRead: boolean,
    private _imageUrl: string
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
}
