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

import Constants from './Constants'
import LeanplumInternal from './LeanplumInternal'
import {
  Inbox,
  SimpleHandler,
  StatusHandler,
  WebPushOptions,
  UserAttributes,
} from './types/public'

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default class Leanplum {
  private static _lp: LeanplumInternal = new LeanplumInternal(window)

  static VERSION = Constants.SDK_VERSION;

  static setApiPath(apiPath: string): void {
    Leanplum._lp.setApiPath(apiPath)
  }

  static setEmail(email: string): void {
    Leanplum._lp.setEmail(email)
  }

  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  static setNetworkTimeout(seconds: number): void {
    Leanplum._lp.setNetworkTimeout(seconds)
  }

  static setAppIdForDevelopmentMode(appId: string, accessKey: string): void {
    Leanplum._lp.setAppIdForDevelopmentMode(appId, accessKey)
  }

  static setAppIdForProductionMode(appId: string, accessKey: string): void {
    Leanplum._lp.setAppIdForProductionMode(appId, accessKey)
  }

  static setSocketHost(host: string): void {
    Leanplum._lp.setSocketHost(host)
  }

  static setDeviceId(deviceId: string): void {
    Leanplum._lp.setDeviceId(deviceId)
  }

  static setAppVersion(versionName: string): void {
    Leanplum._lp.setAppVersion(versionName)
  }

  static setDeviceName(deviceName: string): void {
    Leanplum._lp.setDeviceName(deviceName)
  }

  static setDeviceModel(deviceModel: string): void {
    Leanplum._lp.setDeviceModel(deviceModel)
  }

  static setRequestBatching(batchEnabled?: boolean, cooldownSeconds?: number): void {
    Leanplum._lp.setRequestBatching(batchEnabled, cooldownSeconds)
  }

  static setSystemName(systemName: string): void {
    Leanplum._lp.setSystemName(systemName)
  }

  static setSystemVersion(systemVersion: string): void {
    Leanplum._lp.setSystemVersion(systemVersion)
  }

  static setVariables(variables: Record<string, any>): void {
    Leanplum._lp.setVariables(variables)
  }

  static setVariantDebugInfoEnabled(variantDebugInfoEnabled: boolean): void {
    Leanplum._lp.setVariantDebugInfoEnabled(variantDebugInfoEnabled)
  }

  static getVariantDebugInfo(): Record<string, any> {
    return Leanplum._lp.getVariantDebugInfo()
  }

  static getVariables(): any {
    return Leanplum._lp.getVariables()
  }

  static getVariable(...args: string[]): any {
    return Leanplum._lp.getVariable(...args)
  }

  static getVariants(): any[] {
    return Leanplum._lp.getVariants()
  }

  static inbox(): Inbox {
    return Leanplum._lp.inbox()
  }

  static addStartResponseHandler(handler: StatusHandler): void {
    Leanplum._lp.addStartResponseHandler(handler)
  }

  static removeStartResponseHandler(handler: StatusHandler): void {
    Leanplum._lp.removeStartResponseHandler(handler)
  }

  static addVariablesChangedHandler(handler: SimpleHandler): void {
    Leanplum._lp.addVariablesChangedHandler(handler)
  }

  static removeVariablesChangedHandler(handler: SimpleHandler): void {
    Leanplum._lp.removeVariablesChangedHandler(handler)
  }

  static forceContentUpdate(callback?: StatusHandler): void {
    Leanplum._lp.forceContentUpdate(callback)
  }

  static useSessionLength(seconds: number): void {
    Leanplum._lp.useSessionLength(seconds)
  }

  static start(userId: string, callback: StatusHandler): void;
  static start(userAttributes?: UserAttributes, callback?: StatusHandler): void;
  static start(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void;
  static start(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void {
    Leanplum._lp.start(userId, userAttributes, callback)
  }

  static startFromCache(userId: string, callback: StatusHandler): void;
  static startFromCache(userAttributes?: UserAttributes, callback?: StatusHandler): void;
  static startFromCache(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void;
  static startFromCache(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void {
    Leanplum._lp.startFromCache(userId, userAttributes, callback)
  }

  static stop(): void {
    Leanplum._lp.stop()
  }

  static pauseSession(): void {
    Leanplum._lp.pauseSession()
  }

  static resumeSession(): void {
    Leanplum._lp.resumeSession()
  }

  static pauseState(): void {
    Leanplum._lp.pauseState()
  }

  static resumeState(): void {
    Leanplum._lp.resumeState()
  }

  static getUserId(): string {
    return this._lp.getUserId()
  }

  static setUserId(userId: string): void {
    Leanplum.setUserAttributes(userId)
  }

  static setUserAttributes(userAttributes: UserAttributes): void;
  static setUserAttributes(userId: string, userAttributes?: UserAttributes): void;
  static setUserAttributes(userId: string, userAttributes?: UserAttributes): void {
    Leanplum._lp.setUserAttributes(userId, userAttributes)
  }

  static track(event: string, value: number, params: Object): void;
  static track(event: string, params: Object): void;
  static track(event: string, value?: number, info?: string, params?: Object): void;
  static track(event: string, value?: number, info?: string, params?: Object): void {
    Leanplum._lp.track(event, value, info, params)
  }

  static trackPurchase(value: number, currencyCode?: string, params?: Object, event = 'Purchase'): void {
    Leanplum._lp.trackPurchase(value, currencyCode, params, event)
  }

  static advanceTo(state: string, params?: Object): void;
  static advanceTo(state: string, info?: string, params?: Object): void;
  static advanceTo(state: string, info?: string, params?: Object): void {
    Leanplum._lp.advanceTo(state, info, params)
  }

  /**
   * Determines if web push is supported in the browser.
   * @return {Boolean} True if supported, else false.
   */
  static isWebPushSupported(): boolean {
    return Leanplum._lp.isWebPushSupported()
  }

  /**
   * Determines if web push is subscribed.
   * @return {Promise} Resolves if true, rejects if false.
   */
  static isWebPushSubscribed(): Promise<boolean> {
    return Leanplum._lp.isWebPushSubscribed()
  }

  static setWebPushOptions(options: WebPushOptions): void {
    return Leanplum._lp.setWebPushOptions(options)
  }

  /**
   * Register the browser for web push.
   * @param  {string}   serviceWorkerUrl The url on your server that hosts the
   *                                     /sw.min.js service worker js file.
   * @return {Promise}                   Resolves if registration successful,
   *                                     otherwise fails.
   */
  static registerForWebPush(serviceWorkerUrl?: string): Promise<boolean> {
    return Leanplum._lp.registerForWebPush(serviceWorkerUrl)
  }

  /**
   * Unregisters the browser form web push.
   * @return {Promise}            Resolves on success, otherwise rejects.
   */
  static unregisterFromWebPush(): Promise<void> {
    return Leanplum._lp.unregisterFromWebPush()
  }

  /**
   * Clears cached values for messages, variables and test assignments.
   * Use sparingly as if the app is updated, you'll have to deal with potentially
   * inconsistent state or user experience.
   */
  static clearUserContent(): void {
    Leanplum._lp.clearUserContent()
  }

  static applyQueue(queue: Array<{ name: string, args: Array<any> }>): void {
    Leanplum._lp.applyQueue(queue)
  }

  static __destroy(): void {
    this._lp = new LeanplumInternal(window)
  }
}
