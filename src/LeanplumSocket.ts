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

import isEqual from 'lodash.isequal'
import ArgsBuilder from './ArgsBuilder'
import Constants from './Constants'
import SocketIoClient from './SocketIoClient'
import { CreateRequestFunction } from './types/internal'
import VarCache from './VarCache'

export default class LeanplumSocket {
  private networkTimeoutSeconds = 10
  private socketClient: SocketIoClient | null = null
  private socketHost = 'dev.leanplum.com'

  public connect(
    cache: VarCache,
    auth: { appId: string; deviceId: string },
    createRequest: CreateRequestFunction,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getLastResponse: (response: any) => any
  ): void {
    if (!WebSocket) {
      console.log('Your browser doesn\'t support WebSockets.')
      return
    }

    let authSent = false
    this.socketClient = new SocketIoClient()

    this.socketClient.setNetworkTimeout(this.networkTimeoutSeconds)

    this.socketClient.onopen = () => {
      if (!authSent) {
        console.log('Leanplum: Connected to development server.')
        this.socketClient.send('auth', {
          [Constants.PARAMS.APP_ID]: auth.appId,
          [Constants.PARAMS.DEVICE_ID]: auth.deviceId,
        })
        authSent = true
      }
    }

    this.socketClient.onerror = (event) => {
      console.log('Leanplum: Socket error', event)
    }

    this.socketClient.onmessage = (event: string, args: { email: string }[]) => {
      if (event === 'updateVars') {
        const args = new ArgsBuilder().add(Constants.PARAMS.INCLUDE_DEFAULTS, false)
        createRequest(Constants.METHODS.GET_VARS, args, {
          queued: false,
          sendNow: true,
          response: function(response) {
            const getVarsResponse = getLastResponse(response)
            const values = getVarsResponse[Constants.KEYS.VARS]
            const variants = getVarsResponse[Constants.KEYS.VARIANTS]
            const actionMetadata = getVarsResponse[Constants.KEYS.ACTION_METADATA]
            if (!isEqual(values, cache.diffs)) {
              cache.applyDiffs(values, variants, actionMetadata)
            }
          },
        })
      } else if (event === 'getVariables') {
        cache.sendVariables()
        this.socketClient.send('getContentResponse', {
          'updated': true,
        })
      } else if (event === 'getActions') {
        // Unsupported in JavaScript SDK.
        this.socketClient.send('getContentResponse', {
          'updated': false,
        })
      } else if (event === 'registerDevice') {
        // eslint-disable-next-line no-alert
        alert(`Your device has been registered to ${args[0].email}.`)
      } else if (event === 'trigger') {
        // TODO: pass as real event to user code
        // TODO: properties are weird, translate to camelCase?
        const action = (args && args[0] as any).action;
        const messageHandler = (window as any).Leanplum.onShowMessage;
        if (messageHandler) {
          messageHandler(action);
        }
      } else {
        console.log('Received unsupported event: ', event);
      }
    }

    this.socketClient.onclose = () => {
      console.log('Leanplum: Disconnected from development server.')
      authSent = false
    }

    this.socketClient.connect(this.socketHost)

    setInterval(() => {
      if (!this.socketClient.connected && !this.socketClient.connecting) {
        this.socketClient.connect(this.socketHost)
      }
    }, 5000)
  }

  public setSocketHost(value: string): void {
    this.socketHost = value
  }

  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  public setNetworkTimeout(seconds): void {
    this.networkTimeoutSeconds = seconds
    this.socketClient?.setNetworkTimeout(seconds)
  }
}
