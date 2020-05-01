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

import Constants from './Constants'

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Leanplum ArgsBuilder, use to construct request payload.
 */
export default class ArgsBuilder {
  private argString: string
  private argValues: { [key: string]: any }
  private _body: string

  /**
   * Create a new empty request argument.
   */
  constructor() {
    this.argString = ''
    this.argValues = {}
  }

  /**
   * Add given key, value to the payload.
   * @param {string} key The key for the value.
   * @param {string|boolean} value The value for given key.
   * @return {ArgsBuilder} Returns an object of ArgsBuilder.
   */
  add(key: string, value?: string | number | boolean | string[]): ArgsBuilder {
    if (typeof value === 'undefined') {
      return this
    }

    if (this.argString) {
      this.argString += '&'
    }

    let val: string = ''
    if (value instanceof Array) {
      val = JSON.stringify(value)
    } else {
      val = encodeURIComponent(value)
    }

    this.argString += `${key}=${val}`
    this.argValues[key] = value

    return this
  }

  /**
   * Cache the given body.
   * @param  {String} [body] A given body.
   * @return {ArgsBuilder|String} Returns ArgsBuilder if body given, else the
   *                              body.
   */
  body(body?: string): ArgsBuilder | string {
    if (body) {
      this._body = body
      return this
    }

    return this._body
  }

  /**
   * Convenience method to attach given appId and appKey to request.
   * @param  {String} appId The appId to attach.
   * @param  {String} clientKey The appKey to attach.
   * @return {ArgsBuilder} Returns an object of ArgsBuilder.
   */
  attachApiKeys(appId: string, clientKey: string): ArgsBuilder {
    return this.add(Constants.PARAMS.APP_ID, appId)
        .add(Constants.PARAMS.CLIENT, Constants.CLIENT)
        .add(Constants.PARAMS.CLIENT_KEY, clientKey)
  }

  /**
   * Return the arguments.
   * @return {String} Arguments string.
   */
  build(): string {
    return this.argString
  }

  /**
   * Return the argument values.
   * @return {Object} The argument values.
   */
  buildDict(): { [key: string]: any } {
    return this.argValues
  }
}
