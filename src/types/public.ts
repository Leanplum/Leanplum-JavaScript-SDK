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
  timestamp(): number;
  isRead(): boolean;
  imageUrl(): string;
  openAction(): Action;
}

export interface ChainMessage {
  __name__: 'Chain to Existing Message';
  'Chained message': string;
}

export interface OpenURLAction {
  __name__: 'Open URL';
  URL: string;
}

export type Action = ChainMessage | OpenURLAction

export type SimpleHandler = () => void

export type StatusHandler = (success: boolean) => void

export type UserAttributes = any

export interface WebPushOptions {
  serviceWorkerUrl?: string;
  scope?: string;
}
