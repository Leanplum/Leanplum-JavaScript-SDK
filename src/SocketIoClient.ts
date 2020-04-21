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

import Network from './Network'

/**
 * Socket.io 1.0 client class.
 */
export default class SocketIoClient {
  private network: Network = new Network()
  private socket: WebSocket | undefined

  public connected = false
  public connecting = false

  public onopen: Function | undefined
  public onclose: Function | undefined
  public onmessage: Function | undefined
  public onerror: Function | undefined

  /**
   * Initializes a new SocketIoClient, not connected by default.
   */
  constructor() {
    this.connected = false
    this.connecting = false
  }

  /**
   * Connects to the given socketHost.
   * @param  {string} socketHost The host to connect to.
   */
  public connect(socketHost): void {
    this.connecting = true
    this.network.ajax('POST', `https://${socketHost}/socket.io/1`, '',
        (line) => {
          const parts = line.split(':')
          const session = parts[0]
          const heartbeat = parseInt(parts[1]) / 2 * 1000
          this.socket = new WebSocket(`wss://${socketHost}/socket.io/1/websocket/${session}`)
          let heartbeatInterval = null
          this.socket.onopen = () => {
            this.connected = true
            this.connecting = false
            if (this.onopen) {
              this.onopen()
            }
            heartbeatInterval = setInterval(() => {
              this.socket.send('2:::')
            }, heartbeat)
          }
          this.socket.onclose = () => {
            this.connected = false
            clearInterval(heartbeatInterval)
            if (this.onclose) {
              this.onclose()
            }
          }
          this.socket.onmessage = (event) => {
            const messageParts = event.data.split(':')
            const code = parseInt(messageParts[0])
            if (code === 2) {
              this.socket.send('2::')
            } else if (code === 5) {
              const messageId = messageParts[1]
              const data = JSON.parse(messageParts.slice(3).join(':'))
              const messageEvent = data.name
              const args = data.args
              if (messageId) {
                this.socket.send(`6:::${messageId}`)
              }
              if (this.onmessage) {
                this.onmessage(messageEvent, args)
              }
            } else if (code === 7) {
              console.log(`Socket error: ${event.data}`)
            }
          }
          this.socket.onerror = (event) => {
            this.socket.close()
            if (this.onerror) {
              self.onerror(event)
            }
          }
        }, null, false, true // null, queued, plainText
    )
  }

  /**
   * Sends given event with arguments to the server.
   * @param  {string} name Name of the event.
   * @param  {*} args Arguments to send.
   */
  public send(name, args): void {
    if (!this.connected) {
      console.log('Leanplum: Socket is not connected.')
      return
    }
    const argsJson = JSON.stringify({
      name,
      args,
    })
    this.socket.send(`5:::${argsJson}`)
  }

  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  public setNetworkTimeout(seconds): void {
    this.network.setNetworkTimeout(seconds)
  }
}
