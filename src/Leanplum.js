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
import SocketIoClient from './SocketIoClient'
import isEqual from 'lodash/isEqual'
import PushManager from './PushManager'
import LocalStorageManager from './LocalStorageManager'
import VarCache from './VarCache'
import LeanplumRequest from './LeanplumRequest'

let _variablesChangedHandlers = []
let _startHandlers = []

let _socketHost = 'dev.leanplum.com'
let _browserDetector = new BrowserDetector()

/**
 * @preserve Leanplum Javascript SDK.
 * Copyright 2016, Leanplum, Inc. All rights reserved.
 *
 * You may not distribute this source code without prior written permission
 * from Leanplum.
 */
export default class Leanplum {
  // ***************************************************************************
  // Public Methods
  // ***************************************************************************
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
    _socketHost = host
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
    _startHandlers.push(handler)
    if (Leanplum._hasStarted) {
      handler(Leanplum._startSuccessful)
    }
  }

  static addVariablesChangedHandler(handler) {
    _variablesChangedHandlers.push(handler)
    if (VarCache.hasReceivedDiffs) {
      handler()
    }
  }

  static removeStartResponseHandler(handler) {
    let idx = _startHandlers.indexOf(handler)
    if (idx >= 0) {
      _startHandlers.splice(idx, 1)
    }
  }

  static removeVariablesChangedHandler(handler) {
    let idx = _variablesChangedHandlers.indexOf(handler)
    if (idx >= 0) {
      _variablesChangedHandlers.splice(idx, 1)
    }
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
      for (let i = 0; i < _variablesChangedHandlers.length; i++) {
        _variablesChangedHandlers[i]()
      }
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
    LeanplumRequest.request(Constants.METHODS.START, args, {
      queued: true,
      sendNow: true,
      response: function(response) {
        Leanplum._hasStarted = true
        let startResponse = LeanplumRequest.getLastResponse(response)
        if (LeanplumRequest.isResponseSuccess(startResponse)) {
          Leanplum._startSuccessful = true

          if (Leanplum._devMode) {
            let latestVersion = startResponse[Constants.KEYS.LATEST_VERSION]
            if (latestVersion) {
              console.log(`A newer version of Leanplum, ${latestVersion}, is available. Go to` +
                  'leanplum.com to download it.')
            }
            if (WebSocket) {
              Leanplum._socketIOConnect()
            } else {
              console.log('Your browser doesn\'t support WebSockets.')
            }
          }

          VarCache.applyDiffs(
              startResponse[Constants.KEYS.VARS],
              startResponse[Constants.KEYS.VARIANTS],
              startResponse[Constants.KEYS.ACTION_METADATA])
          VarCache.token = startResponse[Constants.KEYS.TOKEN]
        } else {
          Leanplum._startSuccessful = false
          VarCache.loadDiffs()
        }
        for (let i = 0; i < _startHandlers.length; i++) {
          _startHandlers[i](Leanplum._startSuccessful)
        }
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

    Leanplum._hasStarted = true
    Leanplum._startSuccessful = true
    if (InternalState.devMode) {
      if (WebSocket) {
        Leanplum._socketIOConnect()
      } else {
        console.log('Your browser doesn\'t support WebSockets.')
      }
    }
    VarCache.loadDiffs()
    for (let i = 0; i < _startHandlers.length; i++) {
      _startHandlers[i](Leanplum._startSuccessful)
    }
  }

  static stop() {
    LeanplumRequest.request(Constants.METHODS.STOP, undefined, {
      sendNow: true,
      queued: true
    })
  }

  static pauseSession() {
    LeanplumRequest.request(Constants.METHODS.PAUSE_SESSION, undefined, {
      sendNow: true,
      queued: true
    })
  }

  static resumeSession() {
    LeanplumRequest.request(Constants.METHODS.RESUME_SESSION, undefined, {
      sendNow: true,
      queued: true
    })
  }

  static pauseState() {
    LeanplumRequest.request(Constants.METHODS.PAUSE_STATE, undefined, {
      queued: true
    })
  }

  static resumeState() {
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

  // ***************************************************************************
  // Private Methods
  // ***************************************************************************
  static _socketIOConnect() {
    let client = new SocketIoClient()
    let authSent = false
    client.onopen = function() {
      if (!authSent) {
        console.log('Leanplum: Connected to development server.')
        let args = {}
        args[Constants.PARAMS.APP_ID] = LeanplumRequest.appId
        args[Constants.PARAMS.DEVICE_ID] = LeanplumRequest.deviceId
        client.send('auth', args)
        authSent = true
      }
    }
    client.onerror = function(event) {
      console.log('Leanplum: Socket error', event)
    }
    /**
     *
     * @param event
     * @param args
     * @param args[].email
     */
    client.onmessage = function(event, args) {
      if (event === 'updateVars') {
        LeanplumRequest.request(Constants.METHODS.GET_VARS,
            new ArgsBuilder()
                .add(Constants.PARAMS.INCLUDE_DEFAULTS, false), {
              queued: false,
              sendNow: true,
              response: function(response) {
                let getVarsResponse = LeanplumRequest.getLastResponse(response)
                let values = getVarsResponse[Constants.KEYS.VARS]
                let variants = getVarsResponse[Constants.KEYS.VARIANTS]
                let actionMetadata = getVarsResponse[Constants.KEYS.ACTION_METADATA]
                if (!isEqual(values, VarCache.diffs)) {
                  VarCache.applyDiffs(values, variants, actionMetadata)
                }
              }
            }
        )
      } else if (event === 'getVariables') {
        Leanplum._sendVariables()
        client.send('getContentResponse', {
          'updated': true
        })
      } else if (event === 'getActions') {
        // Unsupported in JavaScript SDK.
        client.send('getContentResponse', {
          'updated': false
        })
      } else if (event === 'registerDevice') {
        // eslint-disable-next-line no-alert
        alert(`Your device has been registered to ${args[0].email}.`)
      }
    }
    client.onclose = function() {
      console.log('Leanplum: Disconnected to development server.')
      authSent = false
    }
    client.connect(_socketHost)
    setInterval(function() {
      if (!client.connected && !client.connecting) {
        client.connect(_socketHost)
      }
    }, 5000)
  }
}
