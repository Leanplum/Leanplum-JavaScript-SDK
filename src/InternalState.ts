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

export default class InternalState {
  private startHandlers: Function[] = []

  public devMode: boolean = false
  public hasStarted: boolean = false
  public startSuccessful: boolean = false
  public variantDebugInfoEnabled: boolean = false

  public addStartResponseHandler(handler) {
    this.startHandlers.push(handler)
    if (this.hasStarted) {
      handler(this.startSuccessful)
    }
  }

  public removeStartResponseHandler(handler) {
    let idx = this.startHandlers.indexOf(handler)
    if (idx >= 0) {
      this.startHandlers.splice(idx, 1)
    }
  }

  public triggerStartHandlers() {
    for (let i = 0; i < this.startHandlers.length; i++) {
      this.startHandlers[i](this.startSuccessful)
    }
  }
}
