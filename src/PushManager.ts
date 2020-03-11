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

import isEqual from 'lodash/isEqual'
import ArgsBuilder from './ArgsBuilder'
import Constants from './Constants'
import LocalStorageManager from './LocalStorageManager'

const APPLICATION_SERVER_PUBLIC_KEY =
    'BInWPpWntfR39rgXSP04pqdmEdDGa50z6zqbMvxyxJCwzXIuSpSh8C888-CfJ82WELl7Xe8cjA' +
    'nfCt-3vK0Ci68'

let isSubscribed = false
let serviceWorkerRegistration = null

/**
 * Push Manager handles the registration and subscription for web push.
 */
export default class PushManager {
  public constructor(
    private createRequest: (action: string, args: ArgsBuilder, options: any) => void
  ) { }

  /**
   * Whether or not web push is supported in the browser.
   * @return {Boolean} True if supported, else false.
   */
  public isWebPushSupported(): boolean {
    return navigator && navigator.serviceWorker && 'serviceWorker' in navigator &&
        'PushManager' in window
  }

  /**
   * Whether or not the browser is subscribed to web push notifications.
   * @return {Promise} True if subscribed, else false.
   */
  public isWebPushSubscribed(): Promise<boolean> {
    if (!this.isWebPushSupported()) {
      return new Promise((resolve) => {
        resolve(false)
      })
    }
    return this.getServiceWorkerRegistration()
        .then((registration) => {
          return new Promise((resolve) => {
            if (!registration) {
              resolve(false)
            } else {
              /** @namespace registration.pushManager The push manager object of the browser. **/
              /** @namespace registration.pushManager.getSubscription **/
              registration.pushManager.getSubscription()
                  .then((subscription) => {
                    isSubscribed = subscription !== null
                    if (isSubscribed) {
                      this.updateNewSubscriptionOnServer(subscription)
                    }
                    resolve(isSubscribed)
                  })
            }
          })
        })
  }

  /**
   * Register for WebPush.
   * @param  {String}   serviceWorkerUrl The url that serves the service worker
   *                                     on your domain.
   * @param  {Function} callback         The callback to be called with result.
   * @return {object} nothing
   */
  public register(serviceWorkerUrl, callback): void {
    if (!this.isWebPushSupported()) {
      console.log('Leanplum: Push messaging is not supported.')
      return callback(false)
    }
    navigator.serviceWorker.register(
        serviceWorkerUrl ? serviceWorkerUrl : '/sw.min.js', null)
        .then((registration) => {
          serviceWorkerRegistration = registration

          // Set the initial subscription value
          serviceWorkerRegistration.pushManager.getSubscription()
              .then((subscription) => {
                isSubscribed = !(subscription === null)
                if (isSubscribed) {
                  this.updateNewSubscriptionOnServer(subscription)
                }
                if (callback) {
                  return callback(isSubscribed)
                }
              })
        })
        .catch((error) => {
          console.log('Leanplum: Service Worker Error: ', error)
        })
  }

  /**
   * Subscribe the user(browser) to push.
   * @return {Promise} Resolves if subscription successful, otherwise rejects.
   */
  public subscribeUser(): Promise<boolean> {
    const applicationServerKey = this.urlB64ToUint8Array(APPLICATION_SERVER_PUBLIC_KEY)
    return new Promise((resolve, reject) => {
      /** @namespace serviceWorkerRegistration.pushManager.subscribe Subscribe to push. **/
      return serviceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey
      })
          .then((subscription) => {
            if (subscription) {
              this.updateNewSubscriptionOnServer(subscription)
              isSubscribed = true
              return resolve(isSubscribed)
            }
            isSubscribed = false
            return reject()
          })
          .catch((err) => {
            return reject(`Leanplum: Failed to subscribe the user: ${err}`)
          })
    })
  }

  /**
   * Unsubscribe the user(browser) from push.
   * @return {Promise} Resolves if unsubscribed, otherwise rejects.
   */
  public unsubscribeUser(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.isWebPushSubscribed().then((subscribed) => {
        if (!subscribed) {
          return resolve()
        }

        serviceWorkerRegistration.pushManager.getSubscription()
            .then((subscription) => {
              if (subscription) {
                /** @namespace serviceWorkerRegistration.pushManager.unsubscribe Unsubscribe to
                 *  push. **/
                return subscription.unsubscribe()
              }
              return reject()
            })
            .catch((error) => {
              reject(`Leanplum: Error unsubscribing: ${error}`)
            })
            .then((success) => {
              if (success) {
                isSubscribed = false
                return resolve()
              }
              return reject()
            })
      }, () => {
        return reject()
      })
    })
  }

  /**
   * Retrieves the service worker registration object from browser.
   * @return {object} Returns the registration or null.
   */
  private getServiceWorkerRegistration(): Promise<ServiceWorkerRegistration> {
    return new Promise((resolve) => {
      if (serviceWorkerRegistration) {
        resolve(serviceWorkerRegistration)
      } else {
        /** @namespace navigator.serviceWorker.getRegistration Retrieves the  push registration
         * from the browser. **/
        navigator.serviceWorker.getRegistration().then((registration) => {
          serviceWorkerRegistration = registration
          resolve(registration)
        })
      }
    })
  }

  /**
   * Encodes a base64 url string to an uint8 arrary.
   * @param  {string} base64String [description]
   * @return {Uint8Array}              [description]
   */
  private urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4)
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }

    return outputArray
  }

  /**
   * [prepareSubscription description]
   * @param  {object} subscription The raw subscription from browser.
   * @param  {Function} subscription.getKey The subscription key.
   * @param  {string} subscription.endpoint The subscription key.
   * @return {object} The subscription object to be sent to server.
   */
  private prepareSubscription(subscription) {
    let apply = Function.prototype.apply
    let key = subscription.getKey ? subscription.getKey('p256dh') : ''
    let auth = subscription.getKey ? subscription.getKey('auth') : ''
    // noinspection ES6ModulesDependencies
    let keyAscii = btoa(apply.call(String.fromCharCode, null, new Uint8Array(key)))
    // noinspection ES6ModulesDependencies
    let authAscii = btoa(apply.call(String.fromCharCode, null, new Uint8Array(auth)))

    return {
      endpoint: subscription.endpoint,
      key: keyAscii,
      auth: authAscii
    }
  }

  /**
   * Send a new subscription object to the Leanplum server.
   * @param {object} subscription The subscription.
   */
  private updateNewSubscriptionOnServer(subscription) {
    if (subscription) {
      let preparedSubscription = this.prepareSubscription(subscription)
      let preparedSubscriptionString = JSON.stringify(preparedSubscription)
      let existingSubscriptionString = LocalStorageManager.getFromLocalStorage(
          Constants.DEFAULT_KEYS.PUSH_SUBSCRIPTION)

      if (!isEqual(existingSubscriptionString, preparedSubscriptionString)) {
        LocalStorageManager.saveToLocalStorage(
          Constants.DEFAULT_KEYS.PUSH_SUBSCRIPTION,
          preparedSubscriptionString
        )
        this.setSubscription(preparedSubscriptionString)
      }
    }
  }

  /**
   * Send the subscription to the Leanplum server.
   * @param {String/Object} subscription The subscription string.
   */
  private setSubscription(subscription) {
    if (!subscription) {
      return
    }

    const args = new ArgsBuilder().add(Constants.PARAMS.WEB_PUSH_SUBSCRIPTION, subscription)

    this.createRequest(Constants.METHODS.SET_DEVICE_ATTRIBUTES, args, {
      queued: false,
      sendNow: true
    })
  }
}
