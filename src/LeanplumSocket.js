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
import ArgsBuilder from './ArgsBuilder'
import SocketIoClient from './SocketIoClient'
import VarCache from './VarCache'
import LeanplumRequest from './LeanplumRequest'
import isEqual from 'lodash/isEqual'
import events from './Events'

export default class LeanplumSocket {

  static socketHost = 'dev.leanplum.com'

  static connect() {
    if (!WebSocket) {
      console.log('Your browser doesn\'t support WebSockets.')
      return
    }

    let client = new SocketIoClient()
    let authSent = false
    client.onopen = function() {
      if (!authSent) {
        console.log('Leanplum: Connected to development server.')
        let args = {}
        args[Constants.PARAMS.APP_ID] = LeanplumRequest.appId
        args[Constants.PARAMS.DEVICE_ID] = LeanplumRequest.deviceId
        client.send('auth', args)
        authSent = true
      }
    }
    client.onerror = function(event) {
      console.log('Leanplum: Socket error', event)
    }
    /**
     *
     * @param event
     * @param args
     * @param args[].email
     */
    client.onmessage = function(event, args) {
      if (event === 'updateVars') {
        LeanplumRequest.request(Constants.METHODS.GET_VARS,
            new ArgsBuilder()
                .add(Constants.PARAMS.INCLUDE_DEFAULTS, false), {
              queued: false,
              sendNow: true,
              response: function(response) {
                let getVarsResponse = LeanplumRequest.getLastResponse(response)
                let values = getVarsResponse[Constants.KEYS.VARS]
                let variants = getVarsResponse[Constants.KEYS.VARIANTS]
                let actionMetadata = getVarsResponse[Constants.KEYS.ACTION_METADATA]
                if (!isEqual(values, VarCache.diffs)) {
                  VarCache.applyDiffs(values, variants, actionMetadata)
                }
              }
            }
        )
      } else if (event === 'getVariables') {
        VarCache.sendVariables()
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
      } else if (event === 'trigger') {
        events.publish('websocket/trigger', {
          args
        })
      }
    }
    client.onclose = function() {
      console.log('Leanplum: Disconnected to development server.')
      authSent = false
    }
    client.connect(LeanplumSocket.socketHost)
    setInterval(function() {
      if (!client.connected && !client.connecting) {
        client.connect(LeanplumSocket.socketHost)
      }
    }, 5000)
  }
}
