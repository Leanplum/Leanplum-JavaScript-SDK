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
 *
 */

import ArgsBuilder from './ArgsBuilder'
import Constants from './Constants'
import LocalStorageManager from './LocalStorageManager'
import Network from './Network'

export default class LeanplumRequest {
  private cooldownTimeout = null
  private lastRequestTime = undefined
  private network = new Network()

  public apiPath: string = 'https://www.leanplum.com/api'
  public appId: string
  public batchCooldown: number = 5
  public batchEnabled: boolean = true
  public clientKey: string
  public deviceId: string
  public userId: string
  public versionName: string

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
  public request(action: string, params: ArgsBuilder, options: any = {}): void {
    options = options || {}
    params = params || new ArgsBuilder()

    // Get or create device ID and user ID.
    if (!this.deviceId) {
      this.deviceId = this.loadLocal<string>(Constants.DEFAULT_KEYS.DEVICE_ID)
    }

    if (!this.deviceId) {
      let id = ''
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 16; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      this.deviceId = id
      this.saveLocal(Constants.DEFAULT_KEYS.DEVICE_ID, id)
    }

    if (!this.userId) {
      this.userId = this.loadLocal<string>(Constants.DEFAULT_KEYS.USER_ID)
      if (!this.userId) {
        this.userId = this.deviceId
      }
    }

    this.saveLocal(Constants.DEFAULT_KEYS.USER_ID, this.userId)

    let argsBuilder = params
        .attachApiKeys(this.appId, this.clientKey)
        .add(Constants.PARAMS.SDK_VERSION, Constants.SDK_VERSION)
        .add(Constants.PARAMS.DEVICE_ID, this.deviceId)
        .add(Constants.PARAMS.USER_ID, this.userId)
        .add(Constants.PARAMS.ACTION, action)
        .add(Constants.PARAMS.VERSION_NAME, this.versionName)
        .add(Constants.PARAMS.DEV_MODE, options.devMode)
        .add(Constants.PARAMS.TIME, (new Date().getTime() / 1000).toString())
    let success = options.success || options.response
    let error = options.error || options.response

    if (!this.appId || !this.clientKey) {
      let err = 'Leanplum App ID and client key are not set. Make sure you ' +
          'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' +
          'before issuing API calls.'
      console.error(err)
      if (error) error(err)
      return
    }

    if (params.body()) {
      this.network.ajax(
        'POST',
        `${this.apiPath}?${argsBuilder.build()}`,
        params.body(),
        success,
        error,
        options.queued
      )
      return
    }

    let sendNow = options.devMode || options.sendNow || !this.batchEnabled

    const sendUnsentRequests = () => {
      const requestsToSend = this.popUnsentRequests()
      if (requestsToSend.length > 0) {
        const requestData = JSON.stringify({
          'data': requestsToSend
        })
        const multiRequestArgs = new ArgsBuilder()
            .attachApiKeys(this.appId, this.clientKey)
            .add(Constants.PARAMS.SDK_VERSION, Constants.SDK_VERSION)
            .add(Constants.PARAMS.ACTION, Constants.METHODS.MULTI)
            .add(Constants.PARAMS.TIME, (new Date().getTime() / 1000).toString().toString())
            .build()
        this.network.ajax(
          'POST',
          `${this.apiPath}?${multiRequestArgs}`,
          requestData,
          success,
          error,
          options.queued
        )
      }
    }

    // Deal with cooldown.
    if (!sendNow && this.batchCooldown) {
      const now = new Date().getTime() / 1000
      if (!this.lastRequestTime || now - this.lastRequestTime >= this.batchCooldown) {
        sendNow = true
        this.lastRequestTime = now
      } else if (!this.cooldownTimeout) {
        this.cooldownTimeout = setTimeout(() => {
          this.cooldownTimeout = null
          this.lastRequestTime = new Date().getTime() / 1000
          sendUnsentRequests()
        }, (this.batchCooldown - (now - this.lastRequestTime)) * 1000)
      }
    }

    this.saveRequestForLater(argsBuilder.buildDict())

    if (sendNow) {
      sendUnsentRequests()
    }
  }

  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  public setNetworkTimeout(seconds) {
    this.network.setNetworkTimeout(seconds)
  }

  public getLastResponse(response) {
    const count = response?.response?.length ?? 0
    return (count > 0) ? response?.response?.[count - 1] : null
  }

  public isResponseSuccess(response): boolean {
    return Boolean(response?.success)
  }

  private saveRequestForLater(args) {
    let count = this.loadLocal<number>(Constants.DEFAULT_KEYS.COUNT) || 0
    let itemKey = Constants.DEFAULT_KEYS.ITEM + count
    this.saveLocal(itemKey, JSON.stringify(args))
    count++
    this.saveLocal(Constants.DEFAULT_KEYS.COUNT, count)
  }

  private popUnsentRequests() {
    const requestData = []
    const count = this.loadLocal<number>(Constants.DEFAULT_KEYS.COUNT) || 0

    this.removeLocal(Constants.DEFAULT_KEYS.COUNT)

    for (let i = 0; i < count; i++) {
      const itemKey = Constants.DEFAULT_KEYS.ITEM + i

      try {
        requestData.push(JSON.parse(this.loadLocal<string>(itemKey)))
      } catch (ignored) { // eslint-disable-next-line no-empty
      }

      this.removeLocal(itemKey)
    }

    return requestData
  }

  private loadLocal<T>(key: string): T {
    return LocalStorageManager.getFromLocalStorage(key)
  }

  private saveLocal<T>(key: string, value: T): void {
    LocalStorageManager.saveToLocalStorage(key, value)
  }

  private removeLocal(key: string): void {
    LocalStorageManager.removeFromLocalStorage(key)
  }
}
