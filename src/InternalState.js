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

export default class InternalState {
  static devMode = false

  static variablesChangedHandlers = []
  static hasReceivedDiffs = false

  static startHandlers = []
  static hasStarted = false
  static startSuccessful = false

  static addStartResponseHandler(handler) {
    InternalState.startHandlers.push(handler)
    if (InternalState.hasStarted) {
      handler(InternalState.startSuccessful)
    }
  }

  static removeStartResponseHandler(handler) {
    let idx = InternalState.startHandlers.indexOf(handler)
    if (idx >= 0) {
      InternalState.startHandlers.splice(idx, 1)
    }
  }

  static triggerStartHandlers() {
    for (let i = 0; i < InternalState.startHandlers.length; i++) {
      InternalState.startHandlers[i](InternalState.startSuccessful)
    }
  }

  static addVariablesChangedHandler(handler) {
    InternalState.variablesChangedHandlers.push(handler)
    if (InternalState.hasReceivedDiffs) {
      handler()
    }
  }

  static removeVariablesChangedHandler(handler) {
    let idx = InternalState.variablesChangedHandlers.indexOf(handler)
    if (idx >= 0) {
      InternalState.variablesChangedHandlers.splice(idx, 1)
    }
  }

  static triggerVariablesChangedHandlers() {
    for (let i = 0; i < InternalState.variablesChangedHandlers.length; i++) {
        InternalState.variablesChangedHandlers[i]()
      }
  }
}
