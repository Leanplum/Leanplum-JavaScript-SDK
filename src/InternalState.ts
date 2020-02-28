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
  private _devMode: boolean = false

  private _variablesChangedHandlers: Function[] = []
  private _hasReceivedDiffs: boolean = false

  private _hasStarted: boolean = false
  private _startHandlers: Function[] = []
  private _startSuccessful: boolean = false
  private _variantDebugInfoEnabled: boolean = false

  public get devMode(): boolean {
    return this._devMode
  }

  public set devMode(value: boolean) {
    this._devMode = value
  }

  public get hasReceivedDiffs(): boolean {
    return this._hasReceivedDiffs
  }

  public set hasReceivedDiffs(value: boolean) {
    this._hasReceivedDiffs = value
  }

  public get hasStarted(): boolean {
    return this._hasStarted
  }

  public set hasStarted(value: boolean) {
    this._hasStarted = value
  }

  public get startSuccessful(): boolean {
    return this._startSuccessful
  }

  public set startSuccessful(value: boolean) {
    this._startSuccessful = value
  }

  public get variantDebugInfoEnabled(): boolean {
    return this._variantDebugInfoEnabled
  }

  public set variantDebugInfoEnabled(value: boolean) {
    this._variantDebugInfoEnabled = value
  }

  public addStartResponseHandler(handler) {
    this._startHandlers.push(handler)
    if (this._hasStarted) {
      handler(this._startSuccessful)
    }
  }

  public removeStartResponseHandler(handler) {
    let idx = this._startHandlers.indexOf(handler)
    if (idx >= 0) {
      this._startHandlers.splice(idx, 1)
    }
  }

  public triggerStartHandlers() {
    for (let i = 0; i < this._startHandlers.length; i++) {
      this._startHandlers[i](this._startSuccessful)
    }
  }

  public addVariablesChangedHandler(handler) {
    this._variablesChangedHandlers.push(handler)
    if (this._hasReceivedDiffs) {
      handler()
    }
  }

  public removeVariablesChangedHandler(handler) {
    let idx = this._variablesChangedHandlers.indexOf(handler)
    if (idx >= 0) {
      this._variablesChangedHandlers.splice(idx, 1)
    }
  }

  public triggerVariablesChangedHandlers() {
    for (let i = 0; i < this._variablesChangedHandlers.length; i++) {
      this._variablesChangedHandlers[i]()
    }
  }

  public setVariantDebugInfoEnabled(variantDebugInfoEnabled: boolean) {
    this._variantDebugInfoEnabled = variantDebugInfoEnabled
  }

}
