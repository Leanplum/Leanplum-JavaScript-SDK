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
import Request from "./Request";

/**
 * Socket.io 1.0 client class.
 */
class SocketIoClient {
  /**
   * Initializes a new SocketIoClient, not connected by default.
   */
  constructor() {
    this.connected = false;
    this.connecting = false;
  }

  /**
   * Connects to the given socketHost.
   * @param  {string} socketHost The host to connect to.
   */
  connect(socketHost) {
    let self = this;
    self.connecting = true;
    Request.ajax('POST', 'https://' + socketHost + '/socket.io/1', '',
        function (line) {
          let parts = line.split(':');
          let session = parts[0];
          let heartbeat = parseInt(parts[1]) / 2 * 1000;
          self.socket = new WebSocket('wss://' + socketHost +
              '/socket.io/1/websocket/' + session);
          let heartbeatInterval = null;
          self.socket.onopen = function () {
            self.connected = true;
            self.connecting = false;
            if (self.onopen) {
              self.onopen();
            }
            heartbeatInterval = setInterval(function () {
              self.socket.send('2:::');
            }, heartbeat);
          };
          self.socket.onclose = function () {
            self.connected = false;
            clearInterval(heartbeatInterval);
            if (self.onclose) {
              self.onclose();
            }
          };
          self.socket.onmessage = function (event) {
            let parts = event.data.split(':');
            let code = parseInt(parts[0]);
            if (code == 2) {
              self.socket.send('2::');
            } else if (code == 5) {
              let messageId = parts[1];
              let data = JSON.parse(parts.slice(3).join(':'));
              let event = data['name'];
              let args = data['args'];
              if (messageId) {
                self.socket.send('6:::' + messageId);
              }
              if (self.onmessage) {
                self.onmessage(event, args);
              }
            } else if (code == 7) {
              console.log('Socket error: ' + event.data);
            }
          };
          self.socket.onerror = function (event) {
            self.socket.close();
            if (self.onerror) {
              self.onerror(event);
            }
          };
        }, null, false, true // nullm, queued, plainText
    );
  };

  /**
   * Sends given event with arguments to the server.
   * @param  {string} name Name of the event.
   * @param  {any} args Arguments to send.
   */
  send(name, args) {
    if (!this.connected) {
      console.log('Leanplum: Socket is not connected.');
      return;
    }
    this.socket.send('5:::' + JSON.stringify({
          'name': name,
          'args': args,
        }));
  };

}

module.exports = SocketIoClient;
