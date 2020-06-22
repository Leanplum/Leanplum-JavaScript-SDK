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

import ArgsBuilder from './ArgsBuilder'
import BrowserDetector from './BrowserDetector'
import Constants from './Constants'
import InternalState from './InternalState'
import LeanplumInbox from './LeanplumInbox'
import LeanplumRequest from './LeanplumRequest'
import LeanplumSocket from './LeanplumSocket'
import LocalStorageManager from './LocalStorageManager'
import PushManager from './PushManager'
import Messages from './Messages'
import EventEmitter from './EventEmitter'
import {
  Action,
  EventType,
  Inbox,
  SimpleHandler,
  StatusHandler,
  WebPushOptions,
  UserAttributes,
} from './types/public'
import VarCache from './VarCache'

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

const SESSION_KEY = Constants.DEFAULT_KEYS.SESSION

export default class LeanplumInternal {
  private _events: EventEmitter = new EventEmitter();
  private _browserDetector: BrowserDetector
  private _internalState: InternalState = new InternalState()
  private _lpInbox: Inbox = new LeanplumInbox(
    this.createRequest.bind(this),
    this.onInboxAction.bind(this)
  )
  private _lpRequest: LeanplumRequest = new LeanplumRequest()
  private _varCache: VarCache = new VarCache(this.createRequest.bind(this))
  private _lpSocket: LeanplumSocket = new LeanplumSocket(
    this._varCache,
    this.createRequest.bind(this),
    this._lpRequest.getLastResponse.bind(this._lpRequest),
    this._events
  )
  private _pushManager: PushManager = new PushManager(this.createRequest.bind(this))
  private _webPushOptions: WebPushOptions
  private _messages: Messages = new Messages(
    this._events,
    this.createRequest.bind(this),
  )

  private _email: string
  private _deviceName: string
  private _deviceModel: string
  private _systemName: string
  private _systemVersion: string
  private _sessionLength: number

  constructor(private wnd: Window) {
    this._browserDetector = new BrowserDetector(wnd)
    this._events.on('navigationChange', (url) => this.wnd.location.assign(url))
  }

  setApiPath(apiPath: string): void {
    if (!this._lpRequest.apiPath) {
      return
    }
    this._lpRequest.apiPath = apiPath
  }

  setEmail(email: string): void {
    this._email = email
  }

  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  setNetworkTimeout(seconds: number): void {
    this._lpRequest.setNetworkTimeout(seconds)
    this._lpSocket.setNetworkTimeout(seconds)
  }

  setAppIdForDevelopmentMode(appId: string, accessKey: string): void {
    this._lpRequest.appId = appId
    this._lpRequest.clientKey = accessKey
    this._internalState.devMode = true
  }

  setAppIdForProductionMode(appId: string, accessKey: string): void {
    this._lpRequest.appId = appId
    this._lpRequest.clientKey = accessKey
    this._internalState.devMode = false
  }

  setSocketHost(host: string): void {
    this._lpSocket.setSocketHost(host)
  }

  setDeviceId(deviceId: string): void {
    this._lpRequest.deviceId = deviceId
  }

  setAppVersion(versionName: string): void {
    this._lpRequest.versionName = versionName
  }

  setDeviceName(deviceName: string): void {
    this._deviceName = deviceName
  }

  setDeviceModel(deviceModel: string): void {
    this._deviceModel = deviceModel
  }

  setRequestBatching(batchEnabled?: boolean, cooldownSeconds?: number): void {
    this._lpRequest.batchEnabled = batchEnabled
    this._lpRequest.batchCooldown = cooldownSeconds
  }

  setSystemName(systemName: string): void {
    this._systemName = systemName
  }

  setSystemVersion(systemVersion: string): void {
    this._systemVersion = systemVersion
  }

  setVariables(variables: Record<string, any>): void {
    this._varCache.setVariables(variables)
  }

  setVariantDebugInfoEnabled(variantDebugInfoEnabled: boolean): void {
    this._internalState.variantDebugInfoEnabled = variantDebugInfoEnabled
  }

  getVariantDebugInfo(): Record<string, any> {
    return this._varCache.getVariantDebugInfo()
  }

  getVariables(): any {
    return this._varCache.getVariables()
  }

  getVariable(...args: (string | number)[]): any {
    return this._varCache.getVariable(...args)
  }

  getVariants(): any[] {
    return this._varCache.variants || []
  }

  inbox(): Inbox {
    return this._lpInbox
  }

  on(eventName: EventType, handler: Function): void {
    this._events.on(eventName, handler)
  }

  off(eventName: EventType, handler: Function): void {
    this._events.off(eventName, handler)
  }

  onInboxAction(messageId: string, action?: Action): void {
    this._messages.trackMessage(
      messageId,
      'Open',
      () => action && this._messages.onAction(action)
    )
  }

  // TODO(breaking change): replace with events and remove stateful handlers
  addStartResponseHandler(handler: StatusHandler): void {
    this._internalState.addStartResponseHandler(handler)
  }

  removeStartResponseHandler(handler: StatusHandler): void {
    this._internalState.removeStartResponseHandler(handler)
  }

  addVariablesChangedHandler(handler: SimpleHandler): void {
    this._varCache.addVariablesChangedHandler(handler)
  }

  removeVariablesChangedHandler(handler: SimpleHandler): void {
    this._varCache.removeVariablesChangedHandler(handler)
  }

  forceContentUpdate(callback?: StatusHandler): void {
    const args = new ArgsBuilder()
      .add(Constants.PARAMS.INCLUDE_DEFAULTS, false)
      .add(Constants.PARAMS.INCLUDE_VARIANT_DEBUG_INFO, this._internalState.variantDebugInfoEnabled)

    this.createRequest(Constants.METHODS.GET_VARS, args, {
      queued: false,
      sendNow: true,
      response: (response) => {
        const getVarsResponse = this._lpRequest.getLastResponse(response)
        const isSuccess = this._lpRequest.isResponseSuccess(getVarsResponse)
        if (isSuccess) {
          this._varCache.applyDiffs(
            getVarsResponse[Constants.KEYS.VARS],
            getVarsResponse[Constants.KEYS.VARIANTS],
            getVarsResponse[Constants.KEYS.ACTION_METADATA])
          this._varCache.setVariantDebugInfo(getVarsResponse[Constants.KEYS.VARIANT_DEBUG_INFO])

          this._events.emit('messagesReceived', getVarsResponse[Constants.KEYS.MESSAGES])
        }

        if (callback) {
          callback(isSuccess)
        }
      },
    })
  }

  useSessionLength(seconds: number): void {
    this._sessionLength = seconds
  }

  start(userId: string, callback: StatusHandler): void;
  start(userAttributes?: UserAttributes, callback?: StatusHandler): void;
  start(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void;
  start(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void {
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

    if (this.hasActiveSession()) {
      return this.startFromCache(userId, userAttributes, callback)
    }

    this._lpRequest.userId = userId

    if (callback) {
      this.addStartResponseHandler(callback)
    }

    this._varCache.onUpdate = () => {
      this._varCache.triggerVariablesChangedHandlers()
    }

    const args = new ArgsBuilder()
      .add(Constants.PARAMS.USER_ATTRIBUTES, JSON.stringify(userAttributes))
      .add(Constants.PARAMS.COUNTRY, Constants.VALUES.DETECT)
      .add(Constants.PARAMS.REGION, Constants.VALUES.DETECT)
      .add(Constants.PARAMS.CITY, Constants.VALUES.DETECT)
      .add(Constants.PARAMS.LOCATION, Constants.VALUES.DETECT)
      .add(Constants.PARAMS.SYSTEM_NAME, this._systemName || this._browserDetector.OS)
      .add(Constants.PARAMS.SYSTEM_VERSION, (this._systemVersion || '').toString())
      .add(Constants.PARAMS.BROWSER_NAME, this._browserDetector.browser)
      .add(Constants.PARAMS.BROWSER_VERSION, this._browserDetector.version.toString())
      .add(Constants.PARAMS.LOCALE, Constants.VALUES.DETECT)
      .add(Constants.PARAMS.DEVICE_NAME, this._deviceName ||
          `${this._browserDetector.browser} ${this._browserDetector.version}`)
      .add(Constants.PARAMS.DEVICE_MODEL, this._deviceModel || 'Web Browser')
      .add(Constants.PARAMS.NEWSFEED_MESSAGES, this._lpInbox.messageIds())
      .add(Constants.PARAMS.INCLUDE_DEFAULTS, false)
      .add(Constants.PARAMS.INCLUDE_VARIANT_DEBUG_INFO, this._internalState.variantDebugInfoEnabled)

    this.createRequest(Constants.METHODS.START, args, {
      queued: true,
      sendNow: true,
      response: (response) => {
        this._internalState.hasStarted = true
        const startResponse = this._lpRequest.getLastResponse(response)
        const isSuccess = this._lpRequest.isResponseSuccess(startResponse)
        this._internalState.startSuccessful = isSuccess

        if (isSuccess) {

          this.updateSession()

          this._events.emit('filesReceived', startResponse.fileAttributes)
          const messages = startResponse[Constants.KEYS.MESSAGES]
          if (startResponse.actionDefinitions) {
            messages.actionDefinitions = startResponse.actionDefinitions
          }
          this._events.emit('messagesReceived', messages)

          if (startResponse[Constants.KEYS.SYNC_INBOX]) {
            this._lpInbox.downloadMessages()
          }

          if (this._internalState.devMode) {
            const latestVersion = startResponse[Constants.KEYS.LATEST_VERSION]
            if (latestVersion) {
              console.log(`A newer version of the Leanplum SDK, ${latestVersion}, is available.
Use "npm update leanplum-sdk" or go to https://docs.leanplum.com/reference#javascript-setup to download it.`)
            }
            this.connectSocket()
          }

          this._varCache.applyDiffs(
            startResponse[Constants.KEYS.VARS],
            startResponse[Constants.KEYS.VARIANTS],
            startResponse[Constants.KEYS.ACTION_METADATA])
          this._varCache.setVariantDebugInfo(startResponse[Constants.KEYS.VARIANT_DEBUG_INFO])
          this._varCache.token = startResponse[Constants.KEYS.TOKEN]
        } else {
          this._varCache.loadDiffs()
        }

        this._events.emit('start', { success: isSuccess })
        this._internalState.triggerStartHandlers()
      },
    })
  }

  startFromCache(userId: string, callback: StatusHandler): void;
  startFromCache(userAttributes?: UserAttributes, callback?: StatusHandler): void;
  startFromCache(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void;
  startFromCache(userId?: string, userAttributes?: UserAttributes, callback?: StatusHandler): void {
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

    this.updateSession()

    this._lpRequest.userId = userId

    if (callback) {
      this.addStartResponseHandler(callback)
    }

    this._internalState.hasStarted = true
    this._internalState.startSuccessful = true

    if (this._internalState.devMode) {
      this.connectSocket()
    }

    this._varCache.loadDiffs()
    this._events.emit('resume')
    this._internalState.triggerStartHandlers()
  }

  stop(): void {
    this.createRequest(Constants.METHODS.STOP, undefined, {
      sendNow: true,
      queued: true,
      response: () => {
        LocalStorageManager.removeFromLocalStorage(SESSION_KEY)
      },
    })
  }

  pauseSession(): void {
    this.createRequest(Constants.METHODS.PAUSE_SESSION, undefined, {
      sendNow: true,
      queued: true,
    })
  }

  resumeSession(): void {
    this._events.emit('resume')
    this.createRequest(Constants.METHODS.RESUME_SESSION, undefined, {
      sendNow: true,
      queued: true,
    })
  }

  pauseState(): void {
    this.createRequest(Constants.METHODS.PAUSE_STATE, undefined, {
      queued: true,
    })
  }

  resumeState(): void {
    this.createRequest(Constants.METHODS.RESUME_STATE, undefined, {
      queued: true,
    })
  }

  getUserId(): string {
    return this._lpRequest.userId
  }

  setUserId(userId: string): void {
    this.setUserAttributes(userId)
  }

  setUserAttributes(userAttributes: UserAttributes): void;
  setUserAttributes(userId: string, userAttributes?: UserAttributes): void;
  setUserAttributes(userId: string, userAttributes?: UserAttributes): void {
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

    const args = new ArgsBuilder()
      .add(Constants.PARAMS.USER_ATTRIBUTES,
        userAttributes ? JSON.stringify(userAttributes) : undefined)
      .add(Constants.PARAMS.NEW_USER_ID, userId)

    this._events.emit('setUserAttribute', userAttributes)

    this.createRequest(Constants.METHODS.SET_USER_ATTRIBUTES, args, {
      queued: true,
    })

    if (userId) {
      this._lpRequest.userId = userId
      LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.USER_ID, this._lpRequest.userId)
    }
  }

  track(event: string, value: number, params: Object): void;
  track(event: string, params: Object): void;
  track(event: string, value?: number, info?: string, params?: Object): void;
  track(event: string, value?: number, info?: string, params?: Object): void {
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

    const args = new ArgsBuilder()
      .add(Constants.PARAMS.EVENT, event)
      .add(Constants.PARAMS.VALUE, value || 0.0)
      .add(Constants.PARAMS.INFO, info)
      .add(Constants.PARAMS.PARAMS, JSON.stringify(params))

    this._events.emit('track', { eventName: event, params })

    this.createRequest(Constants.METHODS.TRACK, args, {
      queued: true,
      response: () => this.updateSession(),
    })
  }

  trackPurchase(value: number, currencyCode?: string, params?: Record<string, any>, event = 'Purchase'): void {
    const args = new ArgsBuilder()
      .add(Constants.PARAMS.EVENT, event)
      .add(Constants.PARAMS.VALUE, value || 0.0)
      .add(Constants.PARAMS.PARAMS, JSON.stringify(params))

    if (currencyCode) {
      args.add(Constants.PARAMS.CURRENCY_CODE, currencyCode)
    }

    this._events.emit('track', { eventName: event })

    this.createRequest(Constants.METHODS.TRACK, args, {
      queued: true,
    })
  }

  advanceTo(state: string, params?: Object): void;
  advanceTo(state: string, info?: string, params?: Object): void;
  advanceTo(state: string, info?: string, params?: Object): void {
    if (typeof info === 'object' && info !== null && info !== undefined) {
      params = info
      info = undefined
    }

    const args = new ArgsBuilder()
      .add(Constants.PARAMS.STATE, state)
      .add(Constants.PARAMS.INFO, info)
      .add(Constants.PARAMS.PARAMS, JSON.stringify(params))

    this._events.emit('advanceState', { state, params })

    this.createRequest(Constants.METHODS.ADVANCE, args, {
      queued: true,
    })
  }

  /**
   * Determines if web push is supported in the browser.
   * @return {Boolean} True if supported, else false.
   */
  isWebPushSupported(): boolean {
    return this._pushManager.isWebPushSupported()
  }

  /**
   * Determines if web push is subscribed.
   * @return {Promise} Resolves if true, rejects if false.
   */
  isWebPushSubscribed(): Promise<boolean> {
    return this._pushManager.isWebPushSubscribed()
  }

  setWebPushOptions(options: WebPushOptions): void {
    this._webPushOptions = { ...options }
  }

  /**
   * Register the browser for web push.
   * @param  {string}   serviceWorkerUrl The url on your server that hosts the
   *                                     /sw.min.js service worker js file.
   * @return {Promise}                   Resolves if registration successful,
   *                                     otherwise fails.
   */
  registerForWebPush(serviceWorkerUrl?: string): Promise<boolean> {
    if (this._pushManager.isWebPushSupported()) {
      const subscribe = (isSubscribed): Promise<boolean> => {
        if (isSubscribed) {
          return Promise.resolve(true)
        }
        return this._pushManager.subscribeUser()
      }

      const options = this._webPushOptions
      const workerUrl = serviceWorkerUrl || options.serviceWorkerUrl
      const scope = options && options.scope ? { scope: options.scope } : null

      return this._pushManager.register(workerUrl, scope, subscribe)
    } else {
      return Promise.reject('Leanplum: WebPush is not supported.')
    }
  }

  /**
   * Unregisters the browser form web push.
   * @return {Promise}            Resolves on success, otherwise rejects.
   */
  unregisterFromWebPush(): Promise<void> {
    return this._pushManager.unsubscribeUser()
  }

  /**
   * Clears cached values for messages, variables and test assignments.
   * Use sparingly as if the app is updated, you'll have to deal with potentially
   * inconsistent state or user experience.
   */
  clearUserContent(): void {
    this._varCache.clearUserContent()
  }

  // used by Google Tag Manager to apply commands queued during async script loading
  applyQueue(queue: Array<{ name: string; args: Array<any> }>): void {
    queue.forEach(invocation => this[invocation.name](...invocation.args))
  }

  private createRequest(action: string, args: ArgsBuilder, options: any = {}): void {
    this._lpRequest.request(action, args, {
      devMode: this._internalState.devMode,
      ...options,
    })
  }

  private connectSocket(): void {
    this._lpSocket.connect(
      {
        appId: this._lpRequest.appId,
        deviceId: this._lpRequest.deviceId,
      }
    )
  }

  private hasActiveSession(): boolean {
    if (!this._sessionLength) {
      return false
    }

    const currentTime = Date.now()
    const lastActive = parseInt(LocalStorageManager.getFromLocalStorage(SESSION_KEY))

    if (isNaN(lastActive)) {
      return false
    }

    if (currentTime - lastActive < this._sessionLength * 1000) {
      return true
    }

    return false
  }

  private updateSession(): void {
    LocalStorageManager.saveToLocalStorage(SESSION_KEY, String(Date.now()))
  }
}
