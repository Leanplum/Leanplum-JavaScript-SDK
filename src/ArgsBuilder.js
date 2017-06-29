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
import Constants from './Constants'

/**
 * Leanplum ArgsBuilder, use to construct request payload.
 */
class ArgsBuilder {
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
   * @param {string} value The value for given key.
   * @return {ArgsBuilder} Returns an object of ArgsBuilder.
   */
  add(key, value) {
    if (typeof(value) === 'undefined') {
      return this
    }
    if (this.argString) {
      this.argString += '&'
    }
    this.argString += key + '=' + encodeURIComponent(value)
    this.argValues[key] = value
    return this
  }

  /**
   * Cache the given body.
   * @param  {String} body A given body.
   * @return {ArgsBuilder/String} Returns Argsbuilder if body given, else the
   *                              body.
   */
  body(body) {
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
  attachApiKeys(appId, clientKey) {
    return this.add(Constants.PARAMS.APP_ID, appId)
        .add(Constants.PARAMS.CLIENT, Constants.CLIENT)
        .add(Constants.PARAMS.CLIENT_KEY, clientKey)
  }

  /**
   * Return the arguments.
   * @return {String} Arguments string.
   */
  build() {
    return this.argString
  }

  /**
   * Return the argument values.
   * @return {Object} The argument values.
   */
  buildDict() {
    return this.argValues
  }
}


module.exports = ArgsBuilder
