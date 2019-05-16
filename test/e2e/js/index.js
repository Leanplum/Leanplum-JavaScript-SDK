"use strict";

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
var REMOTE_APP_ID = 'app_BWTRIgOs0OoevDfSsBtabRiGffu5wOFU3mkxIxA7NBs';
var REMOTE_KEY = 'dev_Bx8i3Bbz1OJBTBAu63NIifr3UwWqUBU5OhHtywo58RY';
Leanplum.setAppIdForDevelopmentMode(REMOTE_APP_ID, REMOTE_KEY);
Leanplum.start();
Leanplum.pauseState();
Leanplum.resumeState();
Leanplum.addStartResponseHandler(function () {
  console.log('My variants:');
  console.log(Leanplum.getVariants());
});
setTimeout(function () {
  Leanplum.setUserAttributes('u1', {
    'Gender': 'Male',
    'Age': 24
  });
  Leanplum.advanceTo('Level 1', undefined, {
    'coins': 100
  });
}, 15000);
//# sourceMappingURL=index.js.map
