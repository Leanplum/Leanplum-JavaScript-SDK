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
 *  limitations under the License.
 *
 */

import isEqual from 'lodash/isEqual'
import ArgsBuilder from './ArgsBuilder'
import Constants from './Constants'
import LeanplumRequest from './LeanplumRequest'
import SocketIoClient from './SocketIoClient'
import VarCache from './VarCache'

export default class LeanplumSocket {
  private socketHost = 'dev.leanplum.com'

  public connect(
    cache: VarCache,
    auth: { appId: string, deviceId: string },
    createRequest: (action: string, args: ArgsBuilder, options: any) => void,
    getLastResponse: (response: any) => any
  ): void {
    if (!WebSocket) {
      console.log('Your browser doesn\'t support WebSockets.')
      return
    }

    let client = new SocketIoClient()
    let authSent = false

    client.onopen = () => {
      if (!authSent) {
        console.log('Leanplum: Connected to development server.')
        client.send('auth', {
          [Constants.PARAMS.APP_ID]: auth.appId,
          [Constants.PARAMS.DEVICE_ID]: auth.deviceId
        })
        authSent = true
      }
    }

    client.onerror = (event) => {
      console.log('Leanplum: Socket error', event)
    }

    client.onmessage = (event: string, args: { email: string }[]) => {
      if (event === 'updateVars') {
        const args = new ArgsBuilder().add(Constants.PARAMS.INCLUDE_DEFAULTS, false)
        createRequest(Constants.METHODS.GET_VARS, args, {
          queued: false,
          sendNow: true,
          response: function (response) {
            let getVarsResponse = getLastResponse(response)
            let values = getVarsResponse[Constants.KEYS.VARS]
            let variants = getVarsResponse[Constants.KEYS.VARIANTS]
            let actionMetadata = getVarsResponse[Constants.KEYS.ACTION_METADATA]
            if (!isEqual(values, cache.diffs)) {
              cache.applyDiffs(values, variants, actionMetadata)
            }
          }
        })
      } else if (event === 'getVariables') {
        cache.sendVariables()
        client.send('getContentResponse', {
          'updated': true
        })
      } else if (event === 'getActions') {
        // Unsupported in JavaScript SDK.
        client.send('getContentResponse', {
          'updated': false
        })
      } else if (event === 'registerDevice') {
        // eslint-disable-next-line no-alert
        alert(`Your device has been registered to ${args[0].email}.`)
      }
    }

    client.onclose = () => {
      console.log('Leanplum: Disconnected to development server.')
      authSent = false
    }

    client.connect(this.socketHost)

    setInterval(() => {
      if (!client.connected && !client.connecting) {
        client.connect(this.socketHost)
      }
    }, 5000)
  }

  public setSocketHost(value: string): void {
    this.socketHost = value
  }
}
