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

import ArgsBuilder from './ArgsBuilder'
import Constants from './Constants'
import LocalStorageManager from './LocalStorageManager'
import Network from './Network'

let lastRequestTime = undefined
let cooldownTimeout = null

export default class LeanplumRequest {

  static apiPath: string = 'https://www.leanplum.com/api'
  static batchEnabled: boolean = true
  static batchCooldown: number = 5


  static deviceId: string
  static userId: string
  static appId: string
  static clientKey: string
  static versionName: string

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
   * @param options.devMode
   * @private
   */
  static request(action: string, params: ArgsBuilder, options: any = {}) {
    options = options || {}
    params = params || new ArgsBuilder()

    // Get or create device ID and user ID.
    if (!LeanplumRequest.deviceId) {
      LeanplumRequest.deviceId =
          LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.DEVICE_ID)
    }

    if (!LeanplumRequest.deviceId) {
      let id = ''
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 16; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      LeanplumRequest.deviceId = id
      LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.DEVICE_ID, id)
    }

    if (!LeanplumRequest.userId) {
      LeanplumRequest.userId = LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.USER_ID)
      if (!LeanplumRequest.userId) {
        LeanplumRequest.userId = LeanplumRequest.deviceId
      }
    }

    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.USER_ID, LeanplumRequest.userId)

    let argsBuilder = params
        .attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey)
        .add(Constants.PARAMS.SDK_VERSION, Constants.SDK_VERSION)
        .add(Constants.PARAMS.DEVICE_ID, LeanplumRequest.deviceId)
        .add(Constants.PARAMS.USER_ID, LeanplumRequest.userId)
        .add(Constants.PARAMS.ACTION, action)
        .add(Constants.PARAMS.VERSION_NAME, LeanplumRequest.versionName)
        .add(Constants.PARAMS.DEV_MODE, options.devMode)
        .add(Constants.PARAMS.TIME, (new Date().getTime() / 1000).toString())
    let success = options.success || options.response
    let error = options.error || options.response

    if (!LeanplumRequest.appId || !LeanplumRequest.clientKey) {
      let err = 'Leanplum App ID and client key are not set. Make sure you ' +
          'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' +
          'before issuing API calls.'
      console.error(err)
      if (error) error(err)
      return
    }

    if (params.body()) {
      Network.ajax('POST', `${LeanplumRequest.apiPath}?${argsBuilder.build()}`,
          params.body(), success, error, options.queued)
      return
    }

    let sendNow = options.devMode || options.sendNow || !LeanplumRequest.batchEnabled

    let sendUnsentRequests = function() {
      let requestsToSend = LeanplumRequest.popUnsentRequests()
      if (requestsToSend.length > 0) {
        let requestData = JSON.stringify({
          'data': requestsToSend
        })
        let multiRequestArgs = new ArgsBuilder()
            .attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey)
            .add(Constants.PARAMS.SDK_VERSION, Constants.SDK_VERSION)
            .add(Constants.PARAMS.ACTION, Constants.METHODS.MULTI)
            .add(Constants.PARAMS.TIME, (new Date().getTime() / 1000).toString().toString())
            .build()
        Network.ajax('POST', `${LeanplumRequest.apiPath}?${multiRequestArgs}`, requestData, success, error,
            options.queued)
      }
    }

    // Deal with cooldown.
    if (!sendNow && LeanplumRequest.batchCooldown) {
      let now = new Date().getTime() / 1000
      if (!lastRequestTime ||
          now - lastRequestTime >= LeanplumRequest.batchCooldown) {
        sendNow = true
        lastRequestTime = now
      } else if (!cooldownTimeout) {
        cooldownTimeout = setTimeout(function() {
          cooldownTimeout = null
          lastRequestTime = new Date().getTime() / 1000
          sendUnsentRequests()
        }, (LeanplumRequest.batchCooldown - (now - lastRequestTime)) * 1000)
      }
    }

    LeanplumRequest.saveRequestForLater(argsBuilder.buildDict())
    if (sendNow) {
      sendUnsentRequests()
    }
  }

  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  static setNetworkTimeout(seconds) {
    Network.setNetworkTimeout(seconds)
  }

  static saveRequestForLater(args) {
    let count = LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.COUNT) || 0
    let itemKey = Constants.DEFAULT_KEYS.ITEM + count
    LocalStorageManager.saveToLocalStorage(itemKey, JSON.stringify(args))
    count++
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.COUNT, count)
  }

  static popUnsentRequests() {
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

  // //////////////// Response parsing //////////////////

  static numResponses(response) {
    if (!response || !response.response) {
      return 0
    }
    return response.response.length
  }

  static getResponseAt(response, index) {
    if (!response || !response.response) {
      return null
    }
    return response.response[index]
  }

  static getLastResponse(response) {
    let count = LeanplumRequest.numResponses(response)
    if (count > 0) {
      return LeanplumRequest.getResponseAt(response, count - 1)
    } else {
      return null
    }
  }

  static isResponseSuccess(response) {
    if (!response) {
      return false
    }
    return !!response.success
  }

  static getResponseError(response) {
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
