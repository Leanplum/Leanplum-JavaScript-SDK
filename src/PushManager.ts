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
import EventEmitter from './EventEmitter'
import Constants from './Constants'
import StorageManager from './StorageManager'
import { CreateRequestFunction } from './types/internal'

const APPLICATION_SERVER_PUBLIC_KEY =
  'BInWPpWntfR39rgXSP04pqdmEdDGa50z6zqbMvxyxJCwzXIuSpSh8C888-CfJ82WELl7Xe8cjAnfCt-3vK0Ci68'

/**
 * Push Manager handles the registration and subscription for web push.
 */
export default class PushManager {
  private serviceWorkerRegistration: ServiceWorkerRegistration | null = null

  private get serviceWorker(): ServiceWorkerContainer {
    return window.navigator.serviceWorker
  }

  public constructor(
    private events: EventEmitter,
    private createRequest: CreateRequestFunction
  ) { }

  /**
   * Whether or not web push is supported in the browser.
   * @return {Boolean} True if supported, else false.
   */
  public isWebPushSupported(): boolean {
    return Boolean(
      window?.navigator !== undefined &&
      'serviceWorker' in window.navigator &&
      'PushManager' in window
    )
  }

  /**
   * Whether or not the browser is subscribed to web push notifications.
   * @return {Promise} True if subscribed, else false.
   */
  public async isWebPushSubscribed(clientUrl = ''): Promise<boolean> {
    if (!this.isWebPushSupported()) {
      return false
    }

    const registration = await this.getServiceWorkerRegistration(clientUrl)

    if (!registration) {
      return false
    }

    const subscription = await registration.pushManager.getSubscription()
    const isSubscribed = subscription !== null

    if (isSubscribed) {
      this.updateNewSubscriptionOnServer(subscription)
    }

    return isSubscribed
  }

  /**
   * Register for WebPush.
   * @param  {String}   serviceWorkerUrl The url that serves the service worker on your domain.
   * @param  {Function} callback         The callback to be called with result.
   * @return {Promise} True if subscribed, else false.
   */
  public async register(
    serviceWorkerUrl: string,
    scope: { scope: string } | null,
    callback: (isSubscribed: boolean) => Promise<boolean>
  ): Promise<boolean> {
    if (!this.isWebPushSupported()) {
      console.log('Leanplum: Push messaging is not supported.')
      return callback(false)
    }

    try {
      this.serviceWorkerRegistration = await this.serviceWorker.register(
        serviceWorkerUrl || '/sw.min.js',
        scope
      )

      const subscription = await this.serviceWorkerRegistration.pushManager.getSubscription()
      const isSubscribed = subscription !== null

      if (isSubscribed) {
        this.updateNewSubscriptionOnServer(subscription)
      }

      return callback(isSubscribed)
    } catch (error) {
      console.log('Leanplum: Service Worker Error: ', error)
      return callback(false)
    }
  }

  /**
   * Subscribe the user (browser) to push.
   * @return {Promise} Resolves if subscription successful, otherwise rejects.
   */
  public async subscribeUser(): Promise<boolean> {
    const applicationServerKey = this.urlB64ToUint8Array(APPLICATION_SERVER_PUBLIC_KEY)

    try {
      const subscription = await this.serviceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey,
      })

      if (!subscription) {
        throw new Error()
      }

      this.updateNewSubscriptionOnServer(subscription)
    } catch (error) {
      throw new Error(`Leanplum: Failed to subscribe the user: ${error}`)
    }

    return true
  }

  /**
   * Unsubscribe the user(browser) from push.
   * @return {Promise} Resolves if unsubscribed, otherwise rejects.
   */
  public async unsubscribeUser(clientUrl = ''): Promise<void> {
    const subscribed = await this.isWebPushSubscribed(clientUrl)

    if (subscribed) {
      try {
        const subscription = await this.serviceWorkerRegistration.pushManager.getSubscription()

        if (!subscription) {
          throw new Error()
        }

        await subscription.unsubscribe()
      } catch (error) {
        throw new Error(`Leanplum: Error unsubscribing: ${error}`)
      }
    }
  }

  /**
   * Retrieves the service worker registration object from browser.
   * @return {object} Returns the registration or null.
   */
  private async getServiceWorkerRegistration(clientUrl = ''): Promise<ServiceWorkerRegistration> {
    if (!this.serviceWorkerRegistration) {
      this.serviceWorkerRegistration = await this.serviceWorker.getRegistration(clientUrl)
    }

    return this.serviceWorkerRegistration
  }

  /**
   * Encodes a base64 URL string to an Uint8 array.
   */
  private urlB64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - base64String.length % 4) % 4)
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
    const rawData = this.decodeData(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }

    return outputArray
  }

  /**
   * Send a new subscription object to the Leanplum server.
   * @param {object} subscription The subscription.
   */
  private updateNewSubscriptionOnServer(subscription: PushSubscription): void {
    if (subscription) {
      const preparedSubscription = this.prepareSubscription(subscription)
      const preparedSubscriptionString = JSON.stringify(preparedSubscription)
      const existingSubscriptionString = StorageManager.get(
        Constants.DEFAULT_KEYS.PUSH_SUBSCRIPTION
      ) as string

      if (existingSubscriptionString !== preparedSubscriptionString) {
        this.events.emit('webPushSubscribed')

        StorageManager.save(
          Constants.DEFAULT_KEYS.PUSH_SUBSCRIPTION,
          preparedSubscriptionString
        )
        this.setSubscription(preparedSubscriptionString)
      }
    }
  }

  private prepareSubscription(subscription: PushSubscription): PushSubscriptionMetadata {
    const key = ('getKey' in subscription) ? subscription.getKey('p256dh') : []
    const auth = ('getKey' in subscription) ? subscription.getKey('auth') : []
    const keyAscii = this.encodeData(String.fromCharCode.apply(null, new Uint8Array(key)))
    const authAscii = this.encodeData(String.fromCharCode.apply(null, new Uint8Array(auth)))

    return {
      endpoint: subscription.endpoint,
      key: keyAscii,
      auth: authAscii,
    }
  }

  /**
   * Send the subscription to the Leanplum server.
   * @param {String} subscription The subscription string.
   */
  private setSubscription(subscription: string): void {
    if (subscription) {
      const args = new ArgsBuilder().add(Constants.PARAMS.WEB_PUSH_SUBSCRIPTION, subscription)

      this.createRequest(Constants.METHODS.SET_DEVICE_ATTRIBUTES, args, {
        queued: false,
        sendNow: true,
      })
    }
  }

  private encodeData(data: string): string {
    return window.btoa(data)
  }

  private decodeData(data: string): string {
    return window.atob(data)
  }
}

interface PushSubscriptionMetadata {
  endpoint: string;
  key: string;
  auth: string;
}
