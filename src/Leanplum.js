/*
 *
 *  Copyright 2017 Leanplum Inc. All rights reserved.
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

let _browserDetector = new BrowserDetector()

/**
 * @preserve Leanplum Javascript SDK.
 * Copyright 2016, Leanplum, Inc. All rights reserved.
 *
 * You may not distribute this source code without prior written permission
 * from Leanplum.
 */
export default class Leanplum {

  static setApiPath(apiPath) {
    if (!LeanplumRequest.apiPath) {
      return
    }
    LeanplumRequest.apiPath = apiPath
  }

  static setEmail(email) {
    Leanplum._email = email
  }

  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  static setNetworkTimeout(seconds) {
    LeanplumRequest.setNetworkTimeout(seconds)
  }

  static setAppIdForDevelopmentMode(appId, accessKey) {
    LeanplumRequest.appId = appId
    LeanplumRequest.clientKey = accessKey
    InternalState.devMode = true
  }

  static setAppIdForProductionMode(appId, accessKey) {
    LeanplumRequest.appId = appId
    LeanplumRequest.clientKey = accessKey
    InternalState.devMode = false
  }

  static setSocketHost(host) {
    LeanplumSocket.socketHost = host
  }

  static setDeviceId(deviceId) {
    LeanplumRequest.deviceId = deviceId
  }

  static setAppVersion(versionName) {
    LeanplumRequest.versionName = versionName
  }

  static setDeviceName(deviceName) {
    Leanplum._deviceName = deviceName
  }

  static setDeviceModel(deviceModel) {
    Leanplum._deviceModel = deviceModel
  }

  static setSystemName(systemName) {
    Leanplum._systemName = systemName
  }

  static setSystemVersion(systemVersion) {
    Leanplum._systemVersion = systemVersion
  }

  static setVariables(variables) {
    VarCache.setVariables(variables)
  }

  static setRequestBatching(batchEnabled, cooldownSeconds) {
    LeanplumRequest.batchEnabled = batchEnabled
    LeanplumRequest.batchCooldown = cooldownSeconds
  }

  static getVariables() {
    return VarCache.getVariables()
  }

  static getVariable(...args) {
    let current = Leanplum.getVariables()
    for (let i = 0; i < args.length; i++) {
      current = current[args[i]]
    }
    return current
  }

  static getVariants() {
    return VarCache.variants || []
  }

  static addStartResponseHandler(handler) {
    InternalState.addStartResponseHandler(handler)
  }

  static addVariablesChangedHandler(handler) {
    InternalState.addVariablesChangedHandler(handler)
  }

  static removeStartResponseHandler(handler) {
    InternalState.removeStartResponseHandler(handler)
  }

  static removeVariablesChangedHandler(handler) {
    InternalState.removeVariablesChangedHandler(handler)
  }

  static start(userId, userAttributes, callback) {
    // Overloads.
    if (typeof userId === 'function') {
      callback = userId
      userAttributes = {}
      userId = null
    } else if (typeof userId === 'object' && userId !== null &&
        userId !== undefined) {
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

    VarCache.onUpdate = function(){
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
              console.log(`A newer version of Leanplum, ${latestVersion}, is available. Go to` +
                  'leanplum.com to download it.')
            }
            LeanplumSocket.connect()
          }

          VarCache.applyDiffs(
              startResponse[Constants.KEYS.VARS],
              startResponse[Constants.KEYS.VARIANTS],
              startResponse[Constants.KEYS.ACTION_METADATA])
          VarCache.token = startResponse[Constants.KEYS.TOKEN]
        } else {
          InternalState.startSuccessful = false
          VarCache.loadDiffs()
        }
        InternalState.triggerStartHandlers()
      }
    })
  }

  static startFromCache(userId, userAttributes, callback) {
    // Overloads.
    if (typeof userId === 'function') {
      callback = userId
      // noinspection JSUnusedAssignment
      userAttributes = {}
      userId = null
    } else if (typeof userId === 'object' && userId !== null &&
        userId !== undefined) {
      callback = userAttributes
      // noinspection JSUnusedAssignment
      userAttributes = userId
      userId = null
    } else if (typeof userAttributes === 'function') {
      callback = userAttributes
      // noinspection JSUnusedAssignment
      userAttributes = {}
    }
    LeanplumRequest.userId = userId
    if (callback) {
      Leanplum.addStartResponseHandler(callback)
    }

    InternalState.hasStarted = true
    InternalState.startSuccessful = true
    if (InternalState.devMode) {
      LeanplumSocket.connect()
    }
    VarCache.loadDiffs()
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

  static setUserId(userId) {
    Leanplum.setUserAttributes(userId)
  }

  static setUserAttributes(userId, userAttributes) {
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

  static track(event, value, info, params) {
    // Overloads.
    // object && !null && !undefined -> params
    // string -> info, params
    // *, object && !null && !undefined -> value, params
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

  static advanceTo(state, info, params) {
    // Overloads.
    // string|null|undefined, * -> info, params
    // object && !null && !undefined -> params
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
  static isWebPushSupported() {
    return PushManager.isWebPushSupported()
  }

  /**
   * Determines if web push is subscribed.
   * @return {Promise} Resolves if true, rejects if false.
   */
  static isWebPushSubscribed() {
    return PushManager.isWebPushSubscribed()
  }

  /**
   * Register the browser for web push.
   * @param  {string}   serviceWorkerUrl The url on your server that hosts the
   *                                     /sw.min.js service worker js file.
   * @return {Promise}                   Resolves if registration successful,
   *                                     otherwise fails.
   */
  static registerForWebPush(serviceWorkerUrl) {
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
  static unregisterFromWebPush() {
    return PushManager.unsubscribeUser()
  }
}
