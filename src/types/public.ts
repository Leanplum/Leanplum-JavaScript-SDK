/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Inbox {
  downloadMessages(): void;
  markAsRead(messageId: string): void;
  read(messageId: string): void;
  remove(messageId: string): void;
  onChanged(handler: Function): void;
  count(): number;
  unreadCount(): number;
  allMessages(): InboxMessage[];
  unreadMessages(): InboxMessage[];
  messageIds(): string[];
  message(id: string): InboxMessage;
}

export interface InboxMessage {
  id(): string;
  title(): string;
  subtitle(): string;
  data(): Record<string, string | number>;
  timestamp(): number;
  isRead(): boolean;
  imageUrl(): string;
  openAction(): Action;
}

export interface ChainMessage {
  __name__: 'Chain to Existing Message';
  parentCampaignId?: number;
  'Chained message': string;
}

export interface OpenURLAction {
  __name__: 'Open URL';
  parentCampaignId?: number;
  URL: string;
}

export interface RegisterForPushAction {
  __name__: 'Register For Push';
  parentCampaignId?: number;
}

export type Action = ChainMessage | OpenURLAction | RegisterForPushAction

export type SimpleHandler = () => void

export type StatusHandler = (success: boolean) => void

export type UserAttributes = any

export type EventType = 'start' | 'resume' | 'track' | 'setUserAttribute' | 'advanceState' | 'showMessage' | 'openUrl'

export interface WebPushOptions {
  serviceWorkerUrl?: string;
  scope?: string;
}
