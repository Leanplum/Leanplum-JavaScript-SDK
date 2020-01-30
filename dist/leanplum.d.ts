/*
 *
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
 *  limitations under the License
 **/

export default class Leanplum {
        static _email: string;
        static _deviceName: string;
        static _deviceModel: string;
        static _systemName: string;
        static _systemVersion: string;
        static setApiPath(apiPath: any): void;
        static setEmail(email: any): void;
        /**
            * Sets the network timeout.
            * @param {number} seconds The timeout in seconds.
            */
        static setNetworkTimeout(seconds: any): void;
        static setVariantDebugInfoEnabled(variantDebugInfoEnabled: any): void;
        static getVariantDebugInfo(): {};
        static setAppIdForDevelopmentMode(appId: any, accessKey: any): void;
        static setAppIdForProductionMode(appId: any, accessKey: any): void;
        static setSocketHost(host: any): void;
        static setDeviceId(deviceId: any): void;
        static setAppVersion(versionName: any): void;
        static setDeviceName(deviceName: any): void;
        static setDeviceModel(deviceModel: any): void;
        static setSystemName(systemName: any): void;
        static setSystemVersion(systemVersion: any): void;
        static setVariables(variables: any): void;
        static setRequestBatching(batchEnabled: any, cooldownSeconds: any): void;
        static getVariables(): any;
        static getVariable(...args: any[]): any;
        static getVariants(): any[];
        static addStartResponseHandler(handler: any): void;
        static addVariablesChangedHandler(handler: any): void;
        static removeStartResponseHandler(handler: any): void;
        static removeVariablesChangedHandler(handler: any): void;
        static forceContentUpdate(callback: any): void;
        static start(userId: any, userAttributes: any, callback: any): void;
        static startFromCache(userId: any, userAttributes: any, callback: any): void;
        static stop(): void;
        static pauseSession(): void;
        static resumeSession(): void;
        static pauseState(): void;
        static resumeState(): void;
        static setUserId(userId: any): void;
        static setUserAttributes(userId: any, userAttributes?: any): void;
        static track(event: any, value: any, info: any, params: any): void;
        static advanceTo(state: any, info: any, params: any): void;
        /**
            * Determines if web push is supported in the browser.
            * @return {Boolean} True if supported, else false.
            */
        static isWebPushSupported(): boolean;
        /**
            * Determines if web push is subscribed.
            * @return {Promise} Resolves if true, rejects if false.
            */
        static isWebPushSubscribed(): Promise<unknown>;
        /**
            * Register the browser for web push.
            * @param  {string}   serviceWorkerUrl The url on your server that hosts the
            *                                     /sw.min.js service worker js file.
            * @return {Promise}                   Resolves if registration successful,
            *                                     otherwise fails.
            */
        static registerForWebPush(serviceWorkerUrl: any): Promise<unknown>;
        /**
            * Unregisters the browser form web push.
            * @return {Promise}            Resolves on success, otherwise rejects.
            */
        static unregisterFromWebPush(): Promise<unknown>;
        /**
            * Clears cached values for messages, variables and test assignments.
            * Use sparingly as if the app is updated, you'll have to deal with potentially
            * inconsistent state or user experience.
            */
        static clearUserContent(): void;
}

