import ArgsBuilder from './ArgsBuilder'
import Constants from './Constants'
import { CreateRequestFunction, MessageObject } from './types/internal'
import { Action, Inbox, InboxMessage } from './types/public'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const values = (obj: Record<string,any>): Array<any> =>
  Object.keys(obj).map((key: string) => obj[key])

export default class LeanplumInbox implements Inbox {
  private messageMap: { [key: string]: MessageObject } = {}
  private changeHandlers: Function[] = []

  constructor(
    private createRequest: CreateRequestFunction,
    private onAction: Function
  ) {
    this.load()
  }

  public downloadMessages(): void {
    this.createRequest('getNewsfeedMessages', undefined, {
      queued: true,
      sendNow: true,
      response: (data) => {
        const response = data.response[0]
        if (response && response.newsfeedMessages) {
          this.messageMap = response.newsfeedMessages

          this.triggerChangeHandlers()
        }
      },
    })

  }

  public markAsRead(messageId: string): void {
    const message = this.messageMap[messageId]

    if (!message) {
      return
    }

    if (!message.isRead) {
      message.isRead = true
      this.triggerChangeHandlers()

      const args = new ArgsBuilder()
      args.add('newsfeedMessageId', messageId)
      this.createRequest('markNewsfeedMessageAsRead', args, {})
    }
  }

  public read(messageId: string): void {
    this.markAsRead(messageId)

    const inboxMessage = this.message(messageId)
    const id = messageId.split('##')[0]
    const openAction = inboxMessage?.openAction() || null
    this.onAction(id, openAction)
  }

  public remove(messageId: string): void {
    const message = this.messageMap[messageId]

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
    this.save()
  }

  private save(): void {
    sessionStorage.setItem(
      Constants.DEFAULT_KEYS.INBOX_MESSAGES,
      JSON.stringify(this.messageMap)
    )
  }

  private load(): void {
    const state = sessionStorage.getItem(Constants.DEFAULT_KEYS.INBOX_MESSAGES)
    this.messageMap = JSON.parse(state) || {}
  }

  public count(): number {
    return values(this.messageMap).length
  }
  public unreadCount(): number {
    return values(this.messageMap).filter(x => !x.isRead).length
  }
  private messages(filter: Function): InboxMessage[] {
    const result = []
    for (const id in this.messageMap) {
      const data = this.messageMap[id]
      if (filter(data)) {
        result.push(LeanplumInboxMessage.create(id, data))
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
    return LeanplumInboxMessage.create(id, message)
  }
}

export class LeanplumInboxMessage implements InboxMessage {
  static create(id: string, messageInfo: MessageObject): InboxMessage {
    const parentCampaignId = messageInfo.messageData?.parentCampaignId
    const action = {
      ...messageInfo.messageData?.vars?.[Constants.VALUES.DEFAULT_PUSH_ACTION],
      parentCampaignId,
    }

    return new LeanplumInboxMessage(
      id,
      messageInfo.messageData?.vars?.Title,
      messageInfo.messageData?.vars?.Subtitle,
      messageInfo.deliveryTimestamp,
      messageInfo.isRead,
      messageInfo.messageData?.vars?.Image,
      action
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
