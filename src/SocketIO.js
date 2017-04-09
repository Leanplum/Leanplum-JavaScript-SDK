  let SocketIOClient = function() {
    this.connected = false;
    this.connecting = false;
  };
  SocketIOClient.prototype.emit = function(name, args) {
    this.socket.send('5:::' + JSON.stringify({
      'name': name,
      'args': args,
    }));
  };
  SocketIOClient.prototype.connect = function() {
    let self = this;
    self.connecting = true;
    Leanplum._ajax('POST', 'https://' + SOCKET_HOST + '/socket.io/1', '',
      function(line) {
        let parts = line.split(':');
        let session = parts[0];
        let heartbeat = parseInt(parts[1]) / 2 * 1000;
        self.socket = new WebSocket('wss://' + SOCKET_HOST +
          '/socket.io/1/websocket/' + session);
        let heartbeatInterval = null;
        self.socket.onopen = function() {
          self.connected = true;
          self.connecting = false;
          if (self.onopen) {
            self.onopen();
          }
          heartbeatInterval = setInterval(function() {
            self.socket.send('2:::');
          }, heartbeat);
        };
        self.socket.onclose = function() {
          self.connected = false;
          clearInterval(heartbeatInterval);
          if (self.onclose) {
            self.onclose();
          }
        };
        self.socket.onmessage = function(event) {
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
        self.socket.onerror = function(event) {
          self.socket.close();
          if (self.onerror) {
            self.onerror(event);
          }
        };
      }, null, false, true // nullm, queued, plainText
    );
  };
