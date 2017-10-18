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
import ArgsBuilder from './ArgsBuilder'
import BrowserDetector from './BrowserDetector'
import SocketIoClient from './SocketIoClient'
import Request from './Network'
import isEqual from 'lodash/isEqual'
import PushManager from './PushManager'
import LocalStorageManager from './LocalStorageManager'

let _variablesChangedHandlers = []
let _variants = []
let _startHandlers = []
let _actionMetadata = {}
let _token = ''
let _batchEnabled = true
let _batchCooldown = 5
let _apiPath = 'https://www.leanplum.com/api'
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
    if (!apiPath) {
      return
    }
    _apiPath = apiPath
  }

  static setEmail(email) {
    Leanplum._email = email
  }

  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  static setNetworkTimeout(seconds) {
    Request.setNetworkTimeout(seconds)
  }

  static setAppIdForDevelopmentMode(appId, accessKey) {
    Leanplum._appId = appId
    Leanplum._clientKey = accessKey
    Leanplum._devMode = true
  }

  static setAppIdForProductionMode(appId, accessKey) {
    Leanplum._appId = appId
    Leanplum._clientKey = accessKey
    Leanplum._devMode = false
  }

  static setSocketHost(host) {
    _socketHost = host
  }

  static setDeviceId(deviceId) {
    Leanplum._deviceId = deviceId
  }

  static setAppVersion(versionName) {
    Leanplum._versionName = versionName
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
    Leanplum._variables = variables
  }

  static setRequestBatching(batchEnabled, cooldownSeconds) {
    _batchEnabled = batchEnabled
    _batchCooldown = cooldownSeconds
  }

  static getVariables() {
    return Leanplum._merged !== undefined ? Leanplum._merged : Leanplum._variables
  }

  static getVariable(...args) {
    let current = Leanplum.getVariables()
    for (let i = 0; i < args.length; i++) {
      current = current[args[i]]
    }
    return current
  }

  static getVariants() {
    return _variants || []
  }

  static addStartResponseHandler(handler) {
    _startHandlers.push(handler)
    if (Leanplum._hasStarted) {
      handler(Leanplum._startSuccessful)
    }
  }

  static addVariablesChangedHandler(handler) {
    _variablesChangedHandlers.push(handler)
    if (Leanplum._hasReceivedDiffs) {
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
    Leanplum._userId = userId
    if (callback) {
      Leanplum.addStartResponseHandler(callback)
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
    Leanplum._request(Constants.METHODS.START, args, {
      queued: true,
      sendNow: true,
      response: function(response) {
        Leanplum._hasStarted = true
        let startResponse = Leanplum._getLastResponse(response)
        if (Leanplum._isResponseSuccess(startResponse)) {
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

          Leanplum._setContent(
              startResponse[Constants.KEYS.VARS],
              startResponse[Constants.KEYS.VARIANTS],
              startResponse[Constants.KEYS.ACTION_METADATA])
          _token = startResponse[Constants.KEYS.TOKEN]
        } else {
          Leanplum._startSuccessful = false
          Leanplum._loadDiffs()
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
    Leanplum._userId = userId
    if (callback) {
      Leanplum.addStartResponseHandler(callback)
    }

    Leanplum._hasStarted = true
    Leanplum._startSuccessful = true
    if (Leanplum._devMode) {
      if (WebSocket) {
        Leanplum._socketIOConnect()
      } else {
        console.log('Your browser doesn\'t support WebSockets.')
      }
    }
    Leanplum._loadDiffs()
    for (let i = 0; i < _startHandlers.length; i++) {
      _startHandlers[i](Leanplum._startSuccessful)
    }
  }

  static stop() {
    Leanplum._request(Constants.METHODS.STOP, undefined, {
      sendNow: true,
      queued: true
    })
  }

  static pauseSession() {
    Leanplum._request(Constants.METHODS.PAUSE_SESSION, undefined, {
      sendNow: true,
      queued: true
    })
  }

  static resumeSession() {
    Leanplum._request(Constants.METHODS.RESUME_SESSION, undefined, {
      sendNow: true,
      queued: true
    })
  }

  static pauseState() {
    Leanplum._request(Constants.METHODS.PAUSE_STATE, undefined, {
      queued: true
    })
  }

  static resumeState() {
    Leanplum._request(Constants.METHODS.RESUME_STATE, undefined, {
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
    Leanplum._request(Constants.METHODS.SET_USER_ATTRIBUTES,
        new ArgsBuilder()
            .add(Constants.PARAMS.USER_ATTRIBUTES,
                userAttributes ? JSON.stringify(userAttributes) : undefined)
            .add(Constants.PARAMS.NEW_USER_ID, userId), {
          queued: true
        })
    if (userId) {
      Leanplum._userId = userId
      LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.USER_ID, Leanplum._userId)
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
    Leanplum._request(Constants.METHODS.TRACK,
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

    Leanplum._request(Constants.METHODS.ADVANCE,
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

  /**
   * Send the subscription to the Leanplum server.
   * @param {String/Object} subscription The subscription string.
   */
  static _setSubscription(subscription) {
    if (!subscription) {
      return
    }
    Leanplum._request(Constants.METHODS.SET_DEVICE_ATTRIBUTES,
        new ArgsBuilder().add(Constants.PARAMS.WEB_PUSH_SUBSCRIPTION,
            subscription), {
          queued: false,
          sendNow: true
        }
    )
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
        args[Constants.PARAMS.APP_ID] = Leanplum._appId
        args[Constants.PARAMS.DEVICE_ID] = Leanplum._deviceId
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
        Leanplum._request(Constants.METHODS.GET_VARS,
            new ArgsBuilder()
                .add(Constants.PARAMS.INCLUDE_DEFAULTS, false), {
              queued: false,
              sendNow: true,
              response: function(response) {
                let getVarsResponse = Leanplum._getLastResponse(response)
                let values = getVarsResponse[Constants.KEYS.VARS]
                let variants = getVarsResponse[Constants.KEYS.VARIANTS]
                let actionMetadata = getVarsResponse[Constants.KEYS.ACTION_METADATA]
                if (!isEqual(values, Leanplum._diffs)) {
                  Leanplum._setContent(values, variants, actionMetadata)
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

  // Leanplum utility methods.

  static _setContent(diffs, variants, actionMetadata) {
    Leanplum._diffs = diffs
    _variants = variants
    _actionMetadata = actionMetadata
    Leanplum._hasReceivedDiffs = true
    Leanplum._merged = Leanplum._mergeHelper(Leanplum._variables, diffs)
    Leanplum._saveDiffs()
    for (let i = 0; i < _variablesChangedHandlers.length; i++) {
      _variablesChangedHandlers[i]()
    }
  }

  static _mergeHelper(vars, diff) {
    if (typeof diff === 'number' || typeof diff === 'boolean' || typeof diff === 'string') {
      return diff
    }
    if (diff === null || diff === undefined) {
      return vars
    }

    let objIterator = function(obj) {
      return function(f) {
        if (obj instanceof Array) {
          for (let i = 0; i < obj.length; i++) {
            f(obj[i])
          }
        } else {
          for (let attr in obj) {
            // This seems to be best practice: https://github.com/eslint/eslint/issues/7071
            // eslint-disable-next-line prefer-reflect
            if ({}.hasOwnProperty.call(obj, attr)) {
              f(attr)
            }
          }
        }
      }
    }
    let varsIterator = objIterator(vars)
    let diffIterator = objIterator(diff)

    // Infer that the diffs is an array if the vars value doesn't exist to tell us the type.
    let isArray = false
    if (vars === null) {
      if (!(diff instanceof Array)) {
        isArray = null
        for (let attribute in diff) {
          if (!diff.hasOwnProperty(attribute)) {
            continue
          }
          if (isArray === null) {
            isArray = true
          }
          if (!(typeof attribute === 'string')) {
            isArray = false
            break
          }
          if (attribute.length < 3 || attribute.charAt(0) !== '[' ||
              attribute.charAt(attribute.length - 1) !== ']') {
            isArray = false
            break
          }
          let varSubscript = attribute.substring(1, attribute.length - 1)
          if (!parseInt(varSubscript).toString() === varSubscript) {
            isArray = false
            break
          }
        }
      }
    }

    // Merge arrays.
    if (vars instanceof Array || isArray) {
      let merged = []
      varsIterator(function(attr) {
        merged.push(attr)
      })
      diffIterator(function(varSubscript) {
        let subscript =
            parseInt(varSubscript.substring(1, varSubscript.length - 1))
        let diffValue = diff[varSubscript]
        while (subscript >= merged.length) {
          merged.push(null)
        }
        merged[subscript] = Leanplum._mergeHelper(merged[subscript], diffValue)
      })
      return merged
    }

    // Merge dictionaries.
    let merged = {}
    varsIterator(function(attr) {
      if (diff[attr] === null || diff[attr] === undefined) {
        merged[attr] = vars[attr]
      }
    })
    diffIterator(function(attr) {
      merged[attr] = Leanplum._mergeHelper(vars !== null ? vars[attr] : null,
          diff[attr])
    })
    return merged
  }

  static _sendVariables() {
    let body = {}
    body[Constants.PARAMS.VARIABLES] = Leanplum._variables
    Leanplum._request(Constants.METHODS.SET_VARS,
        new ArgsBuilder().body(JSON.stringify(body)), {
          sendNow: true
        })
  }

  static _loadDiffs() {
    try {
      Leanplum._setContent(
          JSON.parse(LocalStorageManager.getFromLocalStorage(
              Constants.DEFAULT_KEYS.VARIABLES) || null),
          JSON.parse(LocalStorageManager.getFromLocalStorage(
              Constants.DEFAULT_KEYS.VARIANTS) || null),
          JSON.parse(LocalStorageManager.getFromLocalStorage(
              Constants.DEFAULT_KEYS.ACTION_METADATA) || null))
      _token = LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.TOKEN)
    } catch (e) {
      console.log(`Leanplum: Invalid diffs: ${e}`)
    }
  }

  static _saveDiffs() {
    LocalStorageManager.saveToLocalStorage(
        Constants.DEFAULT_KEYS.VARIABLES, JSON.stringify(Leanplum._diffs || {}))
    LocalStorageManager.saveToLocalStorage(
        Constants.DEFAULT_KEYS.VARIANTS, JSON.stringify(_variants || [])
    )
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.ACTION_METADATA,
        JSON.stringify(_actionMetadata || {}))
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.TOKEN, _token)
  }

  static _saveRequestForLater(args) {
    let count = LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.COUNT) || 0
    let itemKey = Constants.DEFAULT_KEYS.ITEM + count
    LocalStorageManager.saveToLocalStorage(itemKey, JSON.stringify(args))
    count++
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.COUNT, count)
  }

  static _popUnsentRequests() {
    let requestData = []
    let count = LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.COUNT) || 0
    LocalStorageManager.removeFromLocalStorage(Constants.DEFAULT_KEYS.COUNT)
    for (let i = 0; i < count; i++) {
      let itemKey = Constants.DEFAULT_KEYS.ITEM + i
      try {
        let requestArgs = JSON.parse(LocalStorageManager.getFromLocalStorage(itemKey))
        requestData.push(requestArgs)
      } catch (ignored) { // eslint-disable-next-line no-empty
      }
      LocalStorageManager.removeFromLocalStorage(itemKey)
    }
    return requestData
  }

  /**
   *
   * @param action
   * @param params
   * @param options
   * @param options.success
   * @param options.error
   * @param options.response
   * @param options.queued
   * @param options.sendNow
   * @private
   */
  static _request(action, params, options) {
    options = options || {}
    params = params || new ArgsBuilder()

    // Get or create device ID and user ID.
    if (!Leanplum._deviceId) {
      Leanplum._deviceId =
          LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.DEVICE_ID)
    }
    if (!Leanplum._deviceId) {
      let id = ''
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' +
          '0123456789'
      for (let i = 0; i < 16; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      Leanplum._deviceId = id
      LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.DEVICE_ID, id)
    }
    if (!Leanplum._userId) {
      Leanplum._userId = LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.USER_ID)
      if (!Leanplum._userId) {
        Leanplum._userId = Leanplum._deviceId
      }
    }
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.USER_ID, Leanplum._userId)

    let argsBuilder = params
        .attachApiKeys(Leanplum._appId, Leanplum._clientKey)
        .add(Constants.PARAMS.SDK_VERSION, Constants.SDK_VERSION)
        .add(Constants.PARAMS.DEVICE_ID, Leanplum._deviceId)
        .add(Constants.PARAMS.USER_ID, Leanplum._userId)
        .add(Constants.PARAMS.ACTION, action)
        .add(Constants.PARAMS.VERSION_NAME, Leanplum._versionName)
        .add(Constants.PARAMS.DEV_MODE, Leanplum._devMode)
        .add(Constants.PARAMS.TIME, (new Date().getTime() / 1000).toString())
    let success = options.success || options.response
    let error = options.error || options.response

    if (!Leanplum._appId || !Leanplum._clientKey) {
      let err = 'Leanplum App ID and client key are not set. Make sure you ' +
          'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' +
          'before issuing API calls.'
      console.error(err)
      if (error) error(err)
      return
    }

    if (params.body()) {
      Request.ajax('POST', `${_apiPath}?${argsBuilder.build()}`,
          params.body(), success, error, options.queued)
      return
    }

    let sendNow = Leanplum._devMode || options.sendNow || !_batchEnabled

    let sendUnsentRequests = function() {
      let requestsToSend = Leanplum._popUnsentRequests()
      if (requestsToSend.length > 0) {
        let requestData = JSON.stringify({
          'data': requestsToSend
        })
        let multiRequestArgs = new ArgsBuilder()
            .attachApiKeys(Leanplum._appId, Leanplum._clientKey)
            .add(Constants.PARAMS.SDK_VERSION, Constants.SDK_VERSION)
            .add(Constants.PARAMS.ACTION, Constants.METHODS.MULTI)
            .add(Constants.PARAMS.TIME, (new Date().getTime() / 1000).toString().toString())
            .build()
        Request.ajax('POST', `${_apiPath}?${multiRequestArgs}`, requestData, success, error,
            options.queued)
      }
    }

    // Deal with cooldown.
    if (!sendNow && _batchCooldown) {
      let now = new Date().getTime() / 1000
      if (!Leanplum._lastRequestTime ||
          now - Leanplum._lastRequestTime >= _batchCooldown) {
        sendNow = true
        Leanplum._lastRequestTime = now
      } else if (!Leanplum._cooldownTimeout) {
        Leanplum._cooldownTimeout = setTimeout(function() {
          Leanplum._cooldownTimeout = null
          Leanplum._lastRequestTime = new Date().getTime() / 1000
          sendUnsentRequests()
        }, (_batchCooldown -
            (now - Leanplum._lastRequestTime)) * 1000)
      }
    }

    Leanplum._saveRequestForLater(argsBuilder.buildDict())
    if (sendNow) {
      sendUnsentRequests()
    }
  }

  // //////////////// Response parsing //////////////////

  static _numResponses(response) {
    if (!response || !response.response) {
      return 0
    }
    return response.response.length
  }

  static _getResponseAt(response, index) {
    if (!response || !response.response) {
      return null
    }
    return response.response[index]
  }

  static _getLastResponse(response) {
    let count = Leanplum._numResponses(response)
    if (count > 0) {
      return Leanplum._getResponseAt(response, count - 1)
    } else {
      return null
    }
  }

  static _isResponseSuccess(response) {
    if (!response) {
      return false
    }
    return !!response.success
  }

  static _getResponseError(response) {
    if (!response) {
      return null
    }
    let error = response.error
    if (!error) {
      return null
    }
    return error.message
  }
}
