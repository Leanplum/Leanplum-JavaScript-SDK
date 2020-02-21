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
 *
 */
import Constants from './Constants'
import InternalState from './InternalState'
import ArgsBuilder from './ArgsBuilder'
import BrowserDetector from './BrowserDetector'
import PushManager from './PushManager'
import LocalStorageManager from './LocalStorageManager'
import VarCache from './VarCache'
import LeanplumRequest from './LeanplumRequest'
import LeanplumSocket from './LeanplumSocket'

let _browserDetector = new BrowserDetector();

type StatusHandler = (success: boolean) => void;
type SimpleHandler = () => void;
type UserAttributes = any;

export default class Leanplum {
  private static _varCache: VarCache = new VarCache()

  static _email: string
  static _deviceName: string
  static _deviceModel: string
  static _systemName: string
  static _systemVersion: string

  static setApiPath(apiPath: string) {
    if (!LeanplumRequest.apiPath) {
      return
    }
    LeanplumRequest.apiPath = apiPath
  }

  static setEmail(email: string) {
    Leanplum._email = email
  }

  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  static setNetworkTimeout(seconds: number) {
    LeanplumRequest.setNetworkTimeout(seconds)
  }

  static setVariantDebugInfoEnabled(variantDebugInfoEnabled: boolean) {
    InternalState.setVariantDebugInfoEnabled(variantDebugInfoEnabled)
  };

  static getVariantDebugInfo() {
    return Leanplum._varCache.getVariantDebugInfo()
  };

  static setAppIdForDevelopmentMode(appId: string, accessKey: string) {
    LeanplumRequest.appId = appId
    LeanplumRequest.clientKey = accessKey
    InternalState.devMode = true
  }

  static setAppIdForProductionMode(appId: string, accessKey: string) {
    LeanplumRequest.appId = appId
    LeanplumRequest.clientKey = accessKey
    InternalState.devMode = false
  }

  static setSocketHost(host: string) {
    LeanplumSocket.socketHost = host
  }

  static setDeviceId(deviceId: string) {
    LeanplumRequest.deviceId = deviceId
  }

  static setAppVersion(versionName: string) {
    LeanplumRequest.versionName = versionName
  }

  static setDeviceName(deviceName: string) {
    Leanplum._deviceName = deviceName
  }

  static setDeviceModel(deviceModel: string) {
    Leanplum._deviceModel = deviceModel
  }

  static setSystemName(systemName: string) {
    Leanplum._systemName = systemName
  }

  static setSystemVersion(systemVersion: string) {
    Leanplum._systemVersion = systemVersion
  }

  static setVariables(variables: Object) {
    Leanplum._varCache.setVariables(variables)
  }

  static setRequestBatching(batchEnabled?: boolean, cooldownSeconds?: number) {
    LeanplumRequest.batchEnabled = batchEnabled
    LeanplumRequest.batchCooldown = cooldownSeconds
  }

  static getVariables() {
    return Leanplum._varCache.getVariables()
  }

  static getVariable(...args: string[]) {
    let current = Leanplum.getVariables()
    for (let i = 0; i < args.length; i++) {
      current = current[args[i]]
    }
    return current
  }

  static getVariants() {
    return Leanplum._varCache.variants || []
  }

  static addStartResponseHandler(handler: StatusHandler) {
    InternalState.addStartResponseHandler(handler)
  }

  static __destroy() {
    LeanplumRequest.apiPath = 'https://www.leanplum.com/api'
    LeanplumRequest.batchEnabled = true
    LeanplumRequest.batchCooldown = 5
    LeanplumRequest.deviceId = undefined
    LeanplumRequest.userId = undefined
    LeanplumRequest.appId = undefined
    LeanplumRequest.clientKey = undefined
    LeanplumRequest.versionName = undefined

    InternalState.devMode = false
    InternalState.variablesChangedHandlers = []
    InternalState.hasReceivedDiffs = false
    InternalState.startHandlers = []
    InternalState.hasStarted = false
    InternalState.startSuccessful = false
    InternalState.variantDebugInfoEnabled = false
  }

  static addVariablesChangedHandler(handler: SimpleHandler) {
    InternalState.addVariablesChangedHandler(handler)
  }

  static removeStartResponseHandler(handler: StatusHandler) {
    InternalState.removeStartResponseHandler(handler)
  }

  static removeVariablesChangedHandler(handler: SimpleHandler) {
    InternalState.removeVariablesChangedHandler(handler)
  }

  static forceContentUpdate(callback?: StatusHandler) {
    LeanplumRequest.request(Constants.METHODS.GET_VARS,
      new ArgsBuilder()
      .add(Constants.PARAMS.INCLUDE_DEFAULTS, false)
      .add(Constants.PARAMS.INCLUDE_VARIANT_DEBUG_INFO, InternalState.variantDebugInfoEnabled), {
        queued: false,
        sendNow: true,
        response: function (response) {
          let getVarsResponse = LeanplumRequest.getLastResponse(response);
          let isSuccess = LeanplumRequest.isResponseSuccess(getVarsResponse);
          if (isSuccess) {
            Leanplum._varCache.applyDiffs(
              getVarsResponse[Constants.KEYS.VARS],
              getVarsResponse[Constants.KEYS.VARIANTS],
              getVarsResponse[Constants.KEYS.ACTION_METADATA])
            Leanplum._varCache.setVariantDebugInfo(getVarsResponse[Constants.KEYS.VARIANT_DEBUG_INFO])
          }

          if (callback) {
            callback(isSuccess);
          }
        },
      }
      );
  }

  static start(userId: string, callback: StatusHandler): void;
  static start(userAttributes?: UserAttributes, callback?: StatusHandler): void;
  static start(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void;
  static start(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void {
    if (typeof userId === 'function') {
      callback = userId
      userAttributes = {}
      userId = null
    } else if (typeof userId === 'object' && userId !== null && userId !== undefined) {
      callback = userAttributes
      userAttributes = userId
      userId = null
    } else if (typeof userAttributes === 'function') {
      callback = userAttributes
      userAttributes = {}
    }
    LeanplumRequest.userId = userId
    if (callback) {
      Leanplum.addStartResponseHandler(callback)
    }

    Leanplum._varCache.onUpdate = function() {
      InternalState.triggerVariablesChangedHandlers()
    }

    let args = new ArgsBuilder()
        .add(Constants.PARAMS.USER_ATTRIBUTES, JSON.stringify(userAttributes))
        .add(Constants.PARAMS.COUNTRY, Constants.VALUES.DETECT)
        .add(Constants.PARAMS.REGION, Constants.VALUES.DETECT)
        .add(Constants.PARAMS.CITY, Constants.VALUES.DETECT)
        .add(Constants.PARAMS.LOCATION, Constants.VALUES.DETECT)
        .add(Constants.PARAMS.SYSTEM_NAME, Leanplum._systemName || _browserDetector.OS)
        .add(Constants.PARAMS.SYSTEM_VERSION, (Leanplum._systemVersion || '').toString())
        .add(Constants.PARAMS.BROWSER_NAME, _browserDetector.browser)
        .add(Constants.PARAMS.BROWSER_VERSION, _browserDetector.version.toString())
        .add(Constants.PARAMS.LOCALE, Constants.VALUES.DETECT)
        .add(Constants.PARAMS.DEVICE_NAME, Leanplum._deviceName ||
            `${_browserDetector.browser} ${_browserDetector.version}`)
        .add(Constants.PARAMS.DEVICE_MODEL, Leanplum._deviceModel || 'Web Browser')
        .add(Constants.PARAMS.INCLUDE_DEFAULTS, false)
        .add(Constants.PARAMS.INCLUDE_VARIANT_DEBUG_INFO, InternalState.variantDebugInfoEnabled);

    // Issue request.
    // noinspection Annotator
    LeanplumRequest.request(Constants.METHODS.START, args, {
      queued: true,
      sendNow: true,
      response: function(response) {
        InternalState.hasStarted = true
        let startResponse = LeanplumRequest.getLastResponse(response)
        if (LeanplumRequest.isResponseSuccess(startResponse)) {
          InternalState.startSuccessful = true

          if (InternalState.devMode) {
            let latestVersion = startResponse[Constants.KEYS.LATEST_VERSION]
            if (latestVersion) {
              console.log(`A newer version of Leanplum, ${latestVersion}, is available.
Use "npm update leanplum-sdk" or go to https://docs.leanplum.com/reference#javascript-setup to download it.`)
            }
            LeanplumSocket.connect(Leanplum._varCache)
          }

          Leanplum._varCache.applyDiffs(
              startResponse[Constants.KEYS.VARS],
              startResponse[Constants.KEYS.VARIANTS],
              startResponse[Constants.KEYS.ACTION_METADATA]);
          Leanplum._varCache.setVariantDebugInfo(startResponse[Constants.KEYS.VARIANT_DEBUG_INFO])
          Leanplum._varCache.token = startResponse[Constants.KEYS.TOKEN]
        } else {
          InternalState.startSuccessful = false
          Leanplum._varCache.loadDiffs()
        }
        InternalState.triggerStartHandlers()
      }
    })
  }

  static startFromCache(userId: string, callback: StatusHandler): void;
  static startFromCache(userAttributes?: UserAttributes, callback?: StatusHandler): void;
  static startFromCache(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void;
  static startFromCache(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void {
    if (typeof userId === 'function') {
      callback = userId
      userAttributes = {}
      userId = null
    } else if (typeof userId === 'object' && userId !== null && userId !== undefined) {
      callback = userAttributes
      userAttributes = userId
      userId = null
    } else if (typeof userAttributes === 'function') {
      callback = userAttributes
      userAttributes = {}
    }
    LeanplumRequest.userId = userId
    if (callback) {
      Leanplum.addStartResponseHandler(callback)
    }

    InternalState.hasStarted = true
    InternalState.startSuccessful = true
    if (InternalState.devMode) {
      LeanplumSocket.connect(Leanplum._varCache)
    }
    Leanplum._varCache.loadDiffs()
    InternalState.triggerStartHandlers()
  }

  static stop() {
    // noinspection Annotator
      LeanplumRequest.request(Constants.METHODS.STOP, undefined, {
      sendNow: true,
      queued: true
    })
  }

  static pauseSession() {
    // noinspection Annotator
      LeanplumRequest.request(Constants.METHODS.PAUSE_SESSION, undefined, {
      sendNow: true,
      queued: true
    })
  }

  static resumeSession() {
    // noinspection Annotator
      LeanplumRequest.request(Constants.METHODS.RESUME_SESSION, undefined, {
      sendNow: true,
      queued: true
    })
  }

  static pauseState() {
    // noinspection Annotator
      LeanplumRequest.request(Constants.METHODS.PAUSE_STATE, undefined, {
      queued: true
    })
  }

  static resumeState() {
    // noinspection Annotator
      LeanplumRequest.request(Constants.METHODS.RESUME_STATE, undefined, {
      queued: true
    })
  }

  static setUserId(userId: string) {
    Leanplum.setUserAttributes(userId)
  }

  static setUserAttributes(userId: string, userAttributes?: UserAttributes) {
    if (userAttributes === undefined) {
      if (typeof userId === 'object') {
        userAttributes = userId
        userId = undefined
      } else if (typeof userId !== 'string') {
        console.log('Leanplum: setUserAttributes expects a string or an ' +
            'object')
        return
      }
    }
    // noinspection Annotator
      LeanplumRequest.request(Constants.METHODS.SET_USER_ATTRIBUTES,
        new ArgsBuilder()
            .add(Constants.PARAMS.USER_ATTRIBUTES,
                userAttributes ? JSON.stringify(userAttributes) : undefined)
            .add(Constants.PARAMS.NEW_USER_ID, userId), {
          queued: true
        })
    if (userId) {
      LeanplumRequest.userId = userId
      LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.USER_ID, LeanplumRequest.userId)
    }
  }

  static track(event: string, value: number, params: Object): void;
  static track(event: string, params: Object): void;
  static track(event: string, value?: number, info?: string, params?: Object): void;
  static track(event: string, value?: number, info?: string, params?: Object): void {
    if (typeof value === 'object' && value !== null && value !== undefined) {
      params = value
      info = undefined
      value = undefined
    } else if (typeof value === 'string') {
      params = info
      info = value
      value = undefined
    } else if (typeof info === 'object' && info !== null && info !== undefined) {
      params = info
      info = undefined
    }
    // noinspection Annotator
      LeanplumRequest.request(Constants.METHODS.TRACK,
        new ArgsBuilder()
            .add(Constants.PARAMS.EVENT, event)
            .add(Constants.PARAMS.VALUE, value || 0.0)
            .add(Constants.PARAMS.INFO, info)
            .add(Constants.PARAMS.PARAMS, JSON.stringify(params)), {
          queued: true
        })
  }

  static advanceTo(state: string, params?: Object): void;
  static advanceTo(state: string, info?: string, params?: Object): void;
  static advanceTo(state: string, info?: string, params?: Object): void {
    if (typeof info === 'object' && info !== null && info !== undefined) {
      params = info
      info = undefined
    }

    LeanplumRequest.request(Constants.METHODS.ADVANCE,
        new ArgsBuilder()
          .add(Constants.PARAMS.STATE, state)
          .add(Constants.PARAMS.INFO, info)
          .add(Constants.PARAMS.PARAMS, JSON.stringify(params)), {
        queued: true
    })
  }

  /**
   * Determines if web push is supported in the browser.
   * @return {Boolean} True if supported, else false.
   */
  static isWebPushSupported(): boolean {
    return PushManager.isWebPushSupported()
  }

  /**
   * Determines if web push is subscribed.
   * @return {Promise} Resolves if true, rejects if false.
   */
  static isWebPushSubscribed(): Promise<boolean> {
    return PushManager.isWebPushSubscribed()
  }

  /**
   * Register the browser for web push.
   * @param  {string}   serviceWorkerUrl The url on your server that hosts the
   *                                     /sw.min.js service worker js file.
   * @return {Promise}                   Resolves if registration successful,
   *                                     otherwise fails.
   */
  static registerForWebPush(serviceWorkerUrl?: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (PushManager.isWebPushSupported()) {
        return PushManager.register(serviceWorkerUrl, (isSubscribed) => {
          if (isSubscribed) {
            return resolve(true)
          }
          return PushManager.subscribeUser()
        })
      } else {
        return reject('Leanplum: WebPush is not supported.')
      }
    })
  }

  /**
   * Unregisters the browser form web push.
   * @return {Promise}            Resolves on success, otherwise rejects.
   */
  static unregisterFromWebPush(): Promise<string> {
    return PushManager.unsubscribeUser()
  }

  /**
   * Clears cached values for messages, variables and test assignments.
   * Use sparingly as if the app is updated, you'll have to deal with potentially
   * inconsistent state or user experience.
   */
  static clearUserContent(): void {
    Leanplum._varCache.clearUserContent()
  }
}
