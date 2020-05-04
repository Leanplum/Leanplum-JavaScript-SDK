/*
 *  Copyright 2020 Leanplum Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at:
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

export default class Leanplum {
    static VERSION: string;
    static setApiPath(apiPath: string): void;
    static setEmail(email: string): void;
    /**
      * Sets the network timeout.
      * @param {number} seconds The timeout in seconds.
      */
    static setNetworkTimeout(seconds: number): void;
    static setAppIdForDevelopmentMode(appId: string, accessKey: string): void;
    static setAppIdForProductionMode(appId: string, accessKey: string): void;
    static setSocketHost(host: string): void;
    static setDeviceId(deviceId: string): void;
    static setAppVersion(versionName: string): void;
    static setDeviceName(deviceName: string): void;
    static setDeviceModel(deviceModel: string): void;
    static setRequestBatching(batchEnabled?: boolean, cooldownSeconds?: number): void;
    static setSystemName(systemName: string): void;
    static setSystemVersion(systemVersion: string): void;
    static setVariables(variables: Record<string, any>): void;
    static setVariantDebugInfoEnabled(variantDebugInfoEnabled: boolean): void;
    static getVariantDebugInfo(): Record<string, any>;
    static getVariables(): any;
    static getVariable(...args: string[]): any;
    static getVariants(): any[];
    static inbox(): LeanplumInbox;
    static addStartResponseHandler(handler: StatusHandler): void;
    static removeStartResponseHandler(handler: StatusHandler): void;
    static addVariablesChangedHandler(handler: SimpleHandler): void;
    static removeVariablesChangedHandler(handler: SimpleHandler): void;
    static forceContentUpdate(callback?: StatusHandler): void;
    static start(userId: string, callback: StatusHandler): void;
    static start(userAttributes?: UserAttributes, callback?: StatusHandler): void;
    static start(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void;
    static startFromCache(userId: string, callback: StatusHandler): void;
    static startFromCache(userAttributes?: UserAttributes, callback?: StatusHandler): void;
    static startFromCache(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void;
    static stop(): void;
    static pauseSession(): void;
    static resumeSession(): void;
    static pauseState(): void;
    static resumeState(): void;
    static setUserId(userId: string): void;
    static setUserAttributes(userAttributes: UserAttributes): void;
    static setUserAttributes(userId: string, userAttributes?: UserAttributes): void;
    static track(event: string, value: number, params: Object): void;
    static track(event: string, params: Object): void;
    static track(event: string, value?: number, info?: string, params?: Object): void;
    static trackPurchase(value: number, currencyCode?: string, params?: Object, event?: string): void;
    static advanceTo(state: string, params?: Object): void;
    static advanceTo(state: string, info?: string, params?: Object): void;
    /**
      * Determines if web push is supported in the browser.
      * @return {Boolean} True if supported, else false.
      */
    static isWebPushSupported(): boolean;
    /**
      * Determines if web push is subscribed.
      * @return {Promise} Resolves if true, rejects if false.
      */
    static isWebPushSubscribed(): Promise<boolean>;
    /**
      * Register the browser for web push.
      * @param  {string}   serviceWorkerUrl The url on your server that hosts the
      *                                     /sw.min.js service worker js file.
      * @return {Promise}                   Resolves if registration successful,
      *                                     otherwise fails.
      */
    static registerForWebPush(serviceWorkerUrl?: string): Promise<boolean>;
    /**
      * Unregisters the browser form web push.
      * @return {Promise}            Resolves on success, otherwise rejects.
      */
    static unregisterFromWebPush(): Promise<void>;
    /**
      * Clears cached values for messages, variables and test assignments.
      * Use sparingly as if the app is updated, you'll have to deal with potentially
      * inconsistent state or user experience.
      */
    static clearUserContent(): void;
    static __destroy(): void;
}

export default class LeanplumInbox {
  constructor(createRequest: CreateRequestFunction, onAction: Function);
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
export class InboxMessage {
  static create(id: string, messageInfo: any): InboxMessage;
  constructor(_id: string, _title: string, _subtitle: string, _timestamp: number, _isRead: boolean, _imageUrl: string, _openAction: Action);
  id(): string;
  title(): string;
  subtitle(): string;
  timestamp(): number;
  isRead(): boolean;
  imageUrl(): string;
  openAction(): Action;
}

export type SimpleHandler = () => void;
export type StatusHandler = (success: boolean) => void;
export type UserAttributes = any;

export type CreateRequestFunction = (action: string, args: ArgsBuilder, options: LeanplumRequestOptions) => void;
interface ChainMessage {
  __name__: 'Chain to Existing Message';
  'Chained message': string;
}
interface OpenURLAction {
  __name__: 'Open URL';
  URL: string;
}
export type Action = ChainMessage | OpenURLAction;
export {};

/**
  * Leanplum ArgsBuilder, use to construct request payload.
  */
export default class ArgsBuilder {
    /**
      * Create a new empty request argument.
      */
    constructor();
    /**
      * Add given key, value to the payload.
      * @param {string} key The key for the value.
      * @param {string|boolean} value The value for given key.
      * @return {ArgsBuilder} Returns an object of ArgsBuilder.
      */
    add(key: string, value?: string | number | boolean | string[]): ArgsBuilder;
    /**
      * Cache the given body.
      * @param  {String} [body] A given body.
      * @return {ArgsBuilder|String} Returns ArgsBuilder if body given, else the
      *                              body.
      */
    body(body?: string): ArgsBuilder | string;
    /**
      * Convenience method to attach given appId and appKey to request.
      * @param  {String} appId The appId to attach.
      * @param  {String} clientKey The appKey to attach.
      * @return {ArgsBuilder} Returns an object of ArgsBuilder.
      */
    attachApiKeys(appId: string, clientKey: string): ArgsBuilder;
    /**
      * Return the arguments.
      * @return {String} Arguments string.
      */
    build(): string;
    /**
      * Return the argument values.
      * @return {Object} The argument values.
      */
    buildDict(): {
        [key: string]: any;
    };
}

export default class LeanplumRequest {
  apiPath: string;
  appId: string;
  batchCooldown: number;
  batchEnabled: boolean;
  clientKey: string;
  deviceId: string;
  userId: string;
  versionName: string;
  request(action: string, params: ArgsBuilder, options?: LeanplumRequestOptions): void;
  /**
    * Sets the network timeout.
    * @param {number} seconds The timeout in seconds.
    */
  setNetworkTimeout(seconds: any): void;
  getLastResponse(response: any): any;
  isResponseSuccess(response: any): boolean;
}
export interface LeanplumRequestOptions {
  success?: Function;
  error?: Function;
  response?: Function;
  queued?: boolean;
  sendNow?: boolean;
  devMode?: boolean;
}

