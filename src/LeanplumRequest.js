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
let _batchEnabled = true
let _batchCooldown = 5
let _apiPath = 'https://www.leanplum.com/api'

class LeanplumRequest {
  static setBatchEnabled(batchEnabled) {
    _batchEnabled = batchEnabled
  }

  static setBatchCooldown(batchCooldown) {
    _batchCooldown = batchCooldown
  }

  static setApiPath(apiPath) {
    _apiPath = apiPath
  }

  static _request(action, params, options) {
    options = options || {}
    params = params || new ArgsBuilder()

    // Get or create device ID and user ID.
    if (!Leanplum._deviceId) {
      Leanplum._deviceId =
          Leanplum._getFromLocalStorage(Constants.DEFAULT_KEYS.DEVICE_ID)
    }
    if (!Leanplum._deviceId) {
      let id = ''
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' +
          '0123456789'
      for (let i = 0; i < 16; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      Leanplum._deviceId = id
      Leanplum._saveToLocalStorage(Constants.DEFAULT_KEYS.DEVICE_ID, id)
    }
    if (!Leanplum._userId) {
      Leanplum._userId = Leanplum._getFromLocalStorage(Constants.DEFAULT_KEYS.USER_ID)
      if (!Leanplum._userId) {
        Leanplum._userId = Leanplum._deviceId
      }
    }
    Leanplum._saveToLocalStorage(Constants.DEFAULT_KEYS.USER_ID, Leanplum._userId)

    let argsBuilder = params
        .attachApiKeys(Leanplum._appId, Leanplum._clientKey)
        .add(Constants.PARAMS.SDK_VERSION, Constants.SDK_VERSION)
        .add(Constants.PARAMS.DEVICE_ID, Leanplum._deviceId)
        .add(Constants.PARAMS.USER_ID, Leanplum._userId)
        .add(Constants.PARAMS.ACTION, action)
        .add(Constants.PARAMS.VERSION_NAME, Leanplum._versionName)
        .add(Constants.PARAMS.DEV_MODE, Leanplum._devMode)
        .add(Constants.PARAMS.TIME, '' + (new Date().getTime() / 1000))
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
      Request.ajax('POST', _apiPath + '?' + argsBuilder.build(),
          params.body(), success, error, options.queued)
      return
    }

    let sendNow = (Leanplum._devMode || options.sendNow ||
    !_batchEnabled)

    let sendUnsentRequests = function () {
      let requestsToSend = Leanplum._popUnsentRequests()
      if (requestsToSend.length > 0) {
        let requestData = JSON.stringify({
          'data': requestsToSend
        })
        let multiRequestArgs = new ArgsBuilder()
            .attachApiKeys(Leanplum._appId, Leanplum._clientKey)
            .add(Constants.PARAMS.SDK_VERSION, Constants.SDK_VERSION)
            .add(Constants.PARAMS.ACTION, Constants.METHODS.MULTI)
            .add(Constants.PARAMS.TIME, '' + (new Date().getTime() / 1000))
            .build()
        Request.ajax('POST', _apiPath + '?' + multiRequestArgs, requestData,
            success, error, options.queued)
      }
    }

    // Deal with cooldown.
    if (!sendNow && _batchCooldown) {
      let now = new Date().getTime() / 1000
      if (!Leanplum._lastRequestTime ||
          now - Leanplum._lastRequestTime >= _batchCooldown) {
        sendNow = true
        Leanplum._lastRequestTime = now
      } else {
        if (!Leanplum._cooldownTimeout) {
          Leanplum._cooldownTimeout = setTimeout(function () {
            Leanplum._cooldownTimeout = null
            Leanplum._lastRequestTime = new Date().getTime() / 1000
            sendUnsentRequests()
          }, (_batchCooldown -
              (now - Leanplum._lastRequestTime)) * 1000)
        }
      }
    }

    Leanplum._saveRequestForLater(argsBuilder.buildDict())
    if (sendNow) {
      sendUnsentRequests()
    }
  }
}
