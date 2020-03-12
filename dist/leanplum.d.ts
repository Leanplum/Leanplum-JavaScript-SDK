/*
 *  Copyright 2020 Leanplum Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 **/

type StatusHandler = (success: boolean) => void;
type SimpleHandler = () => void;
type UserAttributes = any;
export default class Leanplum {
    static _email: string;
    static _deviceName: string;
    static _deviceModel: string;
    static _systemName: string;
    static _systemVersion: string;
    static setApiPath(apiPath: string): void;
    static setEmail(email: string): void;
    /**
      * Sets the network timeout.
      * @param {number} seconds The timeout in seconds.
      */
    static setNetworkTimeout(seconds: number): void;
    static setVariantDebugInfoEnabled(variantDebugInfoEnabled: boolean): void;
    static getVariantDebugInfo(): Object;
    static setAppIdForDevelopmentMode(appId: string, accessKey: string): void;
    static setAppIdForProductionMode(appId: string, accessKey: string): void;
    static setSocketHost(host: string): void;
    static setDeviceId(deviceId: string): void;
    static setAppVersion(versionName: string): void;
    static setDeviceName(deviceName: string): void;
    static setDeviceModel(deviceModel: string): void;
    static setSystemName(systemName: string): void;
    static setSystemVersion(systemVersion: string): void;
    static setVariables(variables: Object): void;
    static setRequestBatching(batchEnabled?: boolean, cooldownSeconds?: number): void;
    static getVariables(): any;
    static getVariable(...args: string[]): any;
    static getVariants(): any[];
    static addStartResponseHandler(handler: StatusHandler): void;
    static removeStartResponseHandler(handler: StatusHandler): void;
    static __destroy(): void;
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
    static setUserAttributes(userId: string, userAttributes?: UserAttributes): void;
    static track(event: string, value: number, params: Object): void;
    static track(event: string, params: Object): void;
    static track(event: string, value?: number, info?: string, params?: Object): void;
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
}
export {};

