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
 *
 *  Original File:
 *
 *  Push Notifications CodeLab
 *  Copyright 2015 Google Inc. All rights reserved.
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
/* eslint-disable no-var */


declare function importScripts(url: string): void;
declare var clients: {
  openWindow(url: string): any;
}
declare var registration: {
  showNotification(title: string, options: any): any;
}

importScripts('https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js')

const ACTION_NAME_KEY = '__name__'
const OPEN_URL_ACTION = 'Open URL'
const ARG_URL = 'URL'

const openActions = {}

/**
 * Triggered on push message received.
 * @param {object} event The push payload that the browser received.
 */
function pushListener(event): void {
  const jsonString = event.data && event.data.text() ? event.data.text() : null

  if (!jsonString) {
    console.log('Leanplum: Push received without payload, skipping display.')
    return
  }

  // noinspection JSCheckFunctionSignatures
  const options = JSON.parse(jsonString)

  /** @namespace options.title The title of the push notification. **/
  /** @namespace options.tag The id of the push notification **/
  if (!options || !options.title || !options.tag) {
    console.log('Leanplum: No options, title or tag/id received, skipping ' +
        'display.')
    return
  }

  // Extract open action url. We only support open url action for now.
  /** @namespace options.data.openAction The openAction of the push notification. **/
  if (options.data && options.data.openAction &&
      options.data.openAction.hasOwnProperty(ACTION_NAME_KEY) &&
      options.data.openAction[ACTION_NAME_KEY] === OPEN_URL_ACTION &&
      options.data.openAction.hasOwnProperty(ARG_URL)) {
    openActions[options.tag] = options.data.openAction[ARG_URL]
  }

  // Extract title and delete from options.
  const title = options.title
  delete options.title
  /** @namespace self.registration **/
  /** @namespace self.registration.showNotification **/
  event.waitUntil(self.registration.showNotification(title, options))
}

/**
 * Callback that handles clicks on the notification.
 * @param {object} event The notification event object.
 * @param {object} event.notification The notification object.
 * @param {function} event.waitUntil The browser will keep the service worker running until the
 * promise you passed in has settled.
 */
function notificationClickListener(event): void {
  console.log('Leanplum: [Service Worker] Notification click received.')

  event.notification.close()

  if (!event.notification || !event.notification.tag) {
    console.log('Leanplum: No notification or tag/id received, skipping open action.')
    return
  }

  const notificationId = event.notification.tag
  const openActionUrl = openActions[notificationId]
  if (!openActionUrl) {
    console.log('Leanplum: [Service Worker] No action defined, doing nothing.')
    return
  }

  delete openActions[notificationId]

  /** @namespace clients.openWindow **/
  event.waitUntil(clients.openWindow(openActionUrl))
}

self.addEventListener('push', pushListener)
self.addEventListener('notificationclick', notificationClickListener)
