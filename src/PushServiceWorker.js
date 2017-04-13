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
const TITLE = 'Leanplum WebPush';
const CLICK_URL = 'https://www.leanplum.com/';
const ICON_URL = 'https://www.leanplum.com/favicon.ico';
const TEXT_FALLBACK = 'WebPush payload requires serverside encryption, which ' +
  'is currently being implemented.';
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  let text = event.data && event.data.text() ? event.data.text() :
    TEXT_FALLBACK;

  event.waitUntil(self.registration.showNotification(TITLE, {
    body: text,
    icon: ICON_URL,
  }));
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(clients.openWindow(CLICK_URL));
});
