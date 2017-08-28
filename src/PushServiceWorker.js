/*
 *
 *  Push Notifications codelab
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
const ACTION_NAME_KEY = '__name__'
const OPEN_URL_ACTION = 'Open URL'
const ARG_URL = 'URL'

let openActions = {}

self.addEventListener('push', function (event) {
  let jsonString = event.data && event.data.text() ? event.data.text() : null

  if (!jsonString) {
    console.log('Leanplum: Push received without payload, skipping display.')
    return
  }

  let options = JSON.parse(jsonString)
  if (!options || !options.title || !options.tag) {
    console.log('Leanplum: No options, title or tag/id received, skipping ' +
        'display.')
    return
  }

  // Extract open action url. We only support open url action for now.
  if (options.data && options.data.openAction &&
      options.data.openAction.hasOwnProperty(ACTION_NAME_KEY) &&
      options.data.openAction[ACTION_NAME_KEY] === OPEN_URL_ACTION &&
      options.data.openAction.hasOwnProperty(ARG_URL)) {
    openActions[options.tag] = options.data.openAction[ARG_URL]
  }

  // Extract title and delete from options.
  let title = options.title
  delete options.title

  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', function (event) {
  console.log('Leanplum: [Service Worker] Notification click received.')

  event.notification.close()

  if (!event.notification || !event.notification.tag) {
    console.log('Leanplum: No notification or tag/id received, skipping open ' +
        'action.')
    return
  }

  let notificationId = event.notification.tag
  let openActionUrl = openActions[notificationId]
  if (!openActionUrl) {
    console.log('Leanplum: [Service Worker] No action defined, doing nothing.')
    return
  }

  delete openActions.notificationId

  event.waitUntil(clients.openWindow(openActionUrl))
})
