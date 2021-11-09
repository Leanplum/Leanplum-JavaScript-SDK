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
import { CreateRequestFunction, Message } from './types/internal'
import VarCache from './VarCache'
import EventEmitter from './EventEmitter'

type RegisterMessage = { email: string }
type DevServerMessage = RegisterMessage | Message

export default class LeanplumSocket {
  private networkTimeoutSeconds = 10
  private socketClient: SocketIoClient | null = null
  private socketHost = 'dev.leanplum.com'

  constructor(
    private cache: VarCache,
    private createRequest: CreateRequestFunction,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private getLastResponse: (response: any) => any,
    private events: EventEmitter,
  ) { }

  public connect(
    auth: { appId: string; deviceId: string }
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

    this.socketClient.onmessage = this.onMessageReceived.bind(this)

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

  public onMessageReceived(event: string, args: Array<DevServerMessage>): void {
    if (event === 'updateVars') {
      const args = new ArgsBuilder().add(Constants.PARAMS.INCLUDE_DEFAULTS, false)
      this.createRequest(Constants.METHODS.GET_VARS, args, {
        queued: false,
        sendNow: true,
        response: (response) => {
          const getVarsResponse = this.getLastResponse(response)
          const values = getVarsResponse[Constants.KEYS.VARS]
          const variants = getVarsResponse[Constants.KEYS.VARIANTS]
          const actionDefinitions = getVarsResponse[Constants.KEYS.ACTION_DEFINITIONS]
          if (!isEqual(values, this.cache.diffs)) {
            this.cache.applyDiffs(values, variants, actionDefinitions)
          }
        },
      })
    } else if (event === 'getVariables') {
      this.cache.sendVariables()
      this.socketClient.send('getContentResponse', {
        'updated': true,
      })
    } else if (event === 'getActions') {
      const updated = this.cache.sendActions()
      this.socketClient.send('getContentResponse', {
        updated,
      })
    } else if (event === 'registerDevice') {
      const message = args[0] as RegisterMessage
      // eslint-disable-next-line no-alert
      alert(`Your device has been registered to ${message.email}.`)
    } else if (event === 'trigger') {
      const message = args[0] as Message
      this.events.emit('previewRequest', message)
    }
  }
}
