(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["leanplum"] = factory();
	else
		root["leanplum"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    METHODS: {
        START: 'start',
        STOP: 'stop',
        ADVANCE: 'advance',
        TRACK: 'track',
        PAUSE_SESSION: 'pauseSession',
        RESUME_SESSION: 'resumeSession',
        PAUSE_STATE: 'pauseState',
        RESUME_STATE: 'resumeState',
        DOWNLOAD_FILE: 'downloadFile',
        MULTI: 'multi',
        SET_VARS: 'setVars',
        GET_VARS: 'getVars',
        SET_USER_ATTRIBUTES: 'setUserAttributes',
        UPLOAD_FILE: 'uploadFile',
        REGISTER_DEVICE: 'registerDevice'
    },

    SDK_VERSION: '1.1.10',

    CLIENT: 'js',

    PARAMS: {
        ACTION: 'action',
        APP_ID: 'appId',
        CLIENT: 'client',
        CLIENT_KEY: 'clientKey',
        DEVICE_ID: 'deviceId',
        SDK_VERSION: 'sdkVersion',
        USER_ID: 'userId',
        NEW_USER_ID: 'newUserId',
        DEV_MODE: 'devMode',
        VERSION_NAME: 'versionName',
        SYSTEM_NAME: 'systemName',
        SYSTEM_VERSION: 'systemVersion',
        BROWSER_NAME: 'browserName',
        BROWSER_VERSION: 'browserVersion',
        DEVICE_NAME: 'deviceName',
        DEVICE_MODEL: 'deviceModel',
        USER_ATTRIBUTES: 'userAttributes',
        LOCALE: 'locale',
        COUNTRY: 'country',
        REGION: 'region',
        CITY: 'city',
        LOCATION: 'location',
        STATE: 'state',
        INFO: 'info',
        EVENT: 'event',
        VALUE: 'value',
        FILENAME: 'filename',
        TIME: 'time',
        DATA: 'data',
        VARS: 'vars',
        FILE: 'file',
        SIZE: 'size',
        VARIATION: 'variation',
        HASH: 'hash',
        EMAIL: 'email',
        VARIABLES: 'vars',
        PARAMS: 'params',
        INCLUDE_DEFAULTS: 'includeDefaults'
    },

    KEYS: {
        IS_REGISTERED: 'isRegistered',
        LATEST_VERSION: 'latestVersion',
        VARS: 'vars',
        VARIANTS: 'variants',
        ACTION_METADATA: 'actionMetadata',
        TOKEN: 'token'
    },

    DEFAULT_KEYS: {
        COUNT: '__leanplum_unsynced',
        ITEM: '__leanplum_unsynced_',
        VARIABLES: '__leanplum_variables',
        VARIANTS: '__leanplum_variants',
        ACTION_METADATA: '__leanplum_action_metadata',
        TOKEN: '__leanplum_token',
        DEVICE_ID: '__leanplum_device_id',
        USER_ID: '__leanplum_user_id'
    },

    VALUES: {
        DETECT: '(detect)'
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _requestQueue = [];
var _networkTimeoutSeconds = 10;

/**
 * Ajax functions from:
 *
 * Parse JavaScript SDK
 * Version: 1.1.5
 * Built: Mon Oct 01 2012 17:57:13
 * http://parse.com
 *
 * Copyright 2012 Parse, Inc.
 * The Parse JavaScript SDK is freely distributable under the MIT license.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

var Request = function () {
  function Request() {
    _classCallCheck(this, Request);
  }

  _createClass(Request, null, [{
    key: 'setNetworkTimeout',

    /**
     * Sets the network timeout.
     * @param {number} seconds The timeout in seconds.
     */
    value: function setNetworkTimeout(seconds) {
      _networkTimeoutSeconds = seconds;
    }
  }, {
    key: 'ajax',
    value: function ajax(method, url, data, success, error, queued, plainText) {
      if (queued) {
        if (Request._runningRequest) {
          // eslint-disable-next-line prefer-rest-params
          return Request._enqueueRequest(arguments);
        }
        Request._runningRequest = true;
      }

      if (typeof XDomainRequest !== 'undefined') {
        if (location.protocol === 'http:' && url.indexOf('https:') == 0) {
          url = 'http:' + url.substring(6);
        }
        // eslint-disable-next-line prefer-rest-params
        return Request._ajaxIE8.apply(null, arguments);
      }

      var handled = false;

      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (handled) {
            return;
          }
          handled = true;

          var response = void 0;
          var ranCallback = false;
          if (plainText) {
            response = xhr.responseText;
          } else {
            try {
              response = JSON.parse(xhr.responseText);
            } catch (e) {
              setTimeout(function () {
                if (error) {
                  error(null, xhr);
                }
              }, 0);
              ranCallback = true;
            }
          }

          if (!ranCallback) {
            if (xhr.status >= 200 && xhr.status < 300) {
              setTimeout(function () {
                if (success) {
                  success(response, xhr);
                }
              }, 0);
            } else {
              setTimeout(function () {
                if (error) {
                  error(response, xhr);
                }
              }, 0);
            }
          }

          if (queued) {
            Request._runningRequest = false;
            Request._dequeueRequest();
          }
        }
      };
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', 'text/plain'); // Avoid pre-flight.
      xhr.send(data);
      setTimeout(function () {
        if (!handled) {
          xhr.abort();
        }
      }, _networkTimeoutSeconds * 1000);
    }
  }, {
    key: '_ajaxIE8',
    value: function _ajaxIE8(method, url, data, success, error, queued, plainText) {
      var xdr = new XDomainRequest();
      xdr.onload = function () {
        var response = void 0;
        var ranCallback = false;
        if (plainText) {
          response = xdr.responseText;
        } else {
          try {
            response = JSON.parse(xdr.responseText);
          } catch (e) {
            setTimeout(function () {
              if (error) {
                error(null, xdr);
              }
            }, 0);
            ranCallback = true;
          }
        }
        if (!ranCallback) {
          setTimeout(function () {
            if (success) {
              success(response, xdr);
            }
          }, 0);
        }
        if (queued) {
          Request._runningRequest = false;
          Request._dequeueRequest();
        }
      };
      xdr.onerror = xdr.ontimeout = function () {
        setTimeout(function () {
          if (error) {
            error(null, xdr);
          }
        }, 0);
        if (queued) {
          Request._runningRequest = false;
          Request._dequeueRequest();
        }
      };
      xdr.onprogress = function () {};
      xdr.open(method, url);
      xdr.timeout = _networkTimeoutSeconds * 1000;
      xdr.send(data);
    }
  }, {
    key: '_enqueueRequest',
    value: function _enqueueRequest(args) {
      _requestQueue.push(args);
    }
  }, {
    key: '_dequeueRequest',
    value: function _dequeueRequest() {
      var args = _requestQueue.shift();
      if (args) {
        Request.ajax.apply(null, args);
      }
    }
  }]);

  return Request;
}();

module.exports = Request;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Constants = __webpack_require__(0);

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Leanplum ArgsBuilder, use to construct request payload.
 */
var ArgsBuilder = function () {
  /**
   * Create a new empty request argument.
   */
  function ArgsBuilder() {
    _classCallCheck(this, ArgsBuilder);

    this.argString = '';
    this.argValues = {};
  }

  /**
   * Add given key, value to the payload.
   * @param {string} key The key for the value.
   * @param {string} value The value for given key.
   * @return {ArgsBuilder} Returns an object of ArgsBuilder.
   */


  _createClass(ArgsBuilder, [{
    key: 'add',
    value: function add(key, value) {
      if (typeof value === 'undefined') {
        return this;
      }
      if (this.argString) {
        this.argString += '&';
      }
      this.argString += key + '=' + encodeURIComponent(value);
      this.argValues[key] = value;
      return this;
    }
  }, {
    key: 'body',


    /**
     * Cache the given body.
     * @param  {String} body A given body.
     * @return {ArgsBuilder/String} Returns Argsbuilder if body given, else the
     *                              body.
     */
    value: function body(_body) {
      if (_body) {
        this._body = _body;
        return this;
      }
      return this._body;
    }
  }, {
    key: 'attachApiKeys',


    /**
     * Convenience method to attach given appId and appKey to request.
     * @param  {String} appId The appId to attach.
     * @param  {String} clientKey The appKey to attach.
     * @return {ArgsBuilder} Returns an object of ArgsBuilder.
     */
    value: function attachApiKeys(appId, clientKey) {
      return this.add(_Constants2.default.PARAMS.APP_ID, appId).add(_Constants2.default.PARAMS.CLIENT, _Constants2.default.CLIENT).add(_Constants2.default.PARAMS.CLIENT_KEY, clientKey);
    }
  }, {
    key: 'build',


    /**
     * Return the arguments.
     * @return {String} Arguments string.
     */
    value: function build() {
      return this.argString;
    }
  }, {
    key: 'buildDict',


    /**
     * Return the argument values.
     * @return {Object} The argument values.
     */
    value: function buildDict() {
      return this.argValues;
    }
  }]);

  return ArgsBuilder;
}();

;

module.exports = ArgsBuilder;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dataBrowser = [{
  string: navigator.userAgent,
  subString: 'Chrome',
  identity: 'Chrome'
}, {
  string: navigator.userAgent,
  subString: 'OmniWeb',
  versionSearch: 'OmniWeb/',
  identity: 'OmniWeb'
}, {
  string: navigator.vendor,
  subString: 'Apple',
  identity: 'Safari',
  versionSearch: 'Version'
}, {
  prop: window.opera,
  identity: 'Opera',
  versionSearch: 'Version'
}, {
  string: navigator.vendor,
  subString: 'iCab',
  identity: 'iCab'
}, {
  string: navigator.vendor,
  subString: 'KDE',
  identity: 'Konqueror'
}, {
  string: navigator.userAgent,
  subString: 'Firefox',
  identity: 'Firefox'
}, {
  string: navigator.vendor,
  subString: 'Camino',
  identity: 'Camino'
}, { // for newer Netscapes (6+)
  string: navigator.userAgent,
  subString: 'Netscape',
  identity: 'Netscape'
}, {
  string: navigator.userAgent,
  subString: 'MSIE',
  identity: 'Explorer',
  versionSearch: 'MSIE'
}, {
  string: navigator.userAgent,
  subString: 'Gecko',
  identity: 'Mozilla',
  versionSearch: 'rv'
}, { // for older Netscapes (4-)
  string: navigator.userAgent,
  subString: 'Mozilla',
  identity: 'Netscape',
  versionSearch: 'Mozilla'
}];

var dataOS = [{
  string: navigator.platform,
  subString: 'Win',
  identity: 'Windows'
}, {
  string: navigator.platform,
  subString: 'Mac',
  identity: 'Mac OS'
}, {
  string: navigator.userAgent,
  subString: 'iPhone',
  identity: 'iOS'
}, {
  string: navigator.platform,
  subString: 'Linux',
  identity: 'Linux'
}];

// Browser detection. Source: http://www.quirksmode.org/js/detect.html

var BrowserDetector = function () {
  function BrowserDetector() {
    _classCallCheck(this, BrowserDetector);

    this.browser = this.searchString(dataBrowser) || 'An unknown browser';
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'an unknown version';
    this.OS = this.searchString(dataOS) || 'an unknown OS';
  }

  _createClass(BrowserDetector, [{
    key: 'searchString',
    value: function searchString(data) {
      for (var i = 0; i < data.length; i++) {
        var dataString = data[i].string;
        var dataProp = data[i].prop;
        this.versionSearchString = data[i].versionSearch || data[i].identity;
        if (dataString) {
          if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
        } else if (dataProp) return data[i].identity;
      }
    }
  }, {
    key: 'searchVersion',
    value: function searchVersion(dataString) {
      if (!dataString) {
        return;
      }
      var index = dataString.indexOf(this.versionSearchString);
      if (index == -1) {
        return;
      }
      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
  }]);

  return BrowserDetector;
}();

module.exports = BrowserDetector;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Request = __webpack_require__(1);

var _Request2 = _interopRequireDefault(_Request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Socket.io 1.0 client class.
 */
var SocketIoClient = function () {
  /**
   * Initializes a new SocketIoClient, not connected by default.
   */
  function SocketIoClient() {
    _classCallCheck(this, SocketIoClient);

    this.connected = false;
    this.connecting = false;
  }

  /**
   * Connects to the given socketHost.
   * @param  {string} socketHost The host to connect to.
   */


  _createClass(SocketIoClient, [{
    key: 'connect',
    value: function connect(socketHost) {
      var self = this;
      self.connecting = true;
      _Request2.default.ajax('POST', 'https://' + socketHost + '/socket.io/1', '', function (line) {
        var parts = line.split(':');
        var session = parts[0];
        var heartbeat = parseInt(parts[1]) / 2 * 1000;
        self.socket = new WebSocket('wss://' + socketHost + '/socket.io/1/websocket/' + session);
        var heartbeatInterval = null;
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
          var parts = event.data.split(':');
          var code = parseInt(parts[0]);
          if (code == 2) {
            self.socket.send('2::');
          } else if (code == 5) {
            var messageId = parts[1];
            var data = JSON.parse(parts.slice(3).join(':'));
            var _event = data['name'];
            var args = data['args'];
            if (messageId) {
              self.socket.send('6:::' + messageId);
            }
            if (self.onmessage) {
              self.onmessage(_event, args);
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
    }
  }, {
    key: 'send',


    /**
     * Sends given event with arguments to the server.
     * @param  {string} name Name of the event.
     * @param  {any} args Arguments to send.
     */
    value: function send(name, args) {
      if (!this.connected) {
        console.log('Leanplum: Socket is not connected.');
        return;
      }
      this.socket.send('5:::' + JSON.stringify({
        'name': name,
        'args': args
      }));
    }
  }]);

  return SocketIoClient;
}();

module.exports = SocketIoClient;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Constants = __webpack_require__(0);

var _Constants2 = _interopRequireDefault(_Constants);

var _ArgsBuilder = __webpack_require__(2);

var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

var _BrowserDetector = __webpack_require__(3);

var _BrowserDetector2 = _interopRequireDefault(_BrowserDetector);

var _SocketIoClient = __webpack_require__(4);

var _SocketIoClient2 = _interopRequireDefault(_SocketIoClient);

var _Request = __webpack_require__(1);

var _Request2 = _interopRequireDefault(_Request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _variablesChangedHandlers = [];
var _variants = [];
var _startHandlers = [];
var _actionMetadata = {};
var _token = '';
var _batchEnabled = true;
var _batchCooldown = 5;
var _apiPath = 'https://www.leanplum.com/api';
var _socketHost = 'dev.leanplum.com';
var _localStorageEnabled = undefined;
var _alternateLocalStorage = {};
var _browserDetector = new _BrowserDetector2.default();

/**
 * @preserve Leanplum Javascript SDK v1.1.10.
 * Copyright 2016, Leanplum, Inc. All rights reserved.
 *
 * You may not distribute this source code without prior written permission
 * from Leanplum.
 */

var Leanplum = function () {
  function Leanplum() {
    _classCallCheck(this, Leanplum);
  }

  _createClass(Leanplum, null, [{
    key: 'setApiPath',

    // ***************************************************************************
    // Public Methods
    // ***************************************************************************
    value: function setApiPath(_apiPath) {
      if (!_apiPath || _apiPath.isEmpty()) {
        return;
      }
      _apiPath = _apiPath;
    }
  }, {
    key: 'setEmail',
    value: function setEmail(email) {
      Leanplum._email = email;
    }
  }, {
    key: 'setNetworkTimeout',


    /**
     * Sets the network timeout.
     * @param {number} seconds The timeout in seconds.
     */
    value: function setNetworkTimeout(seconds) {
      _Request2.default.setNetworkTimeout(seconds);
    }
  }, {
    key: 'setAppIdForDevelopmentMode',
    value: function setAppIdForDevelopmentMode(appId, accessKey) {
      Leanplum._appId = appId;
      Leanplum._clientKey = accessKey;
      Leanplum._devMode = true;
    }
  }, {
    key: 'setAppIdForProductionMode',
    value: function setAppIdForProductionMode(appId, accessKey) {
      Leanplum._appId = appId;
      Leanplum._clientKey = accessKey;
      Leanplum._devMode = false;
    }
  }, {
    key: 'setSocketHost',
    value: function setSocketHost(host) {
      _socketHost = host;
    }
  }, {
    key: 'setDeviceId',
    value: function setDeviceId(deviceId) {
      Leanplum._deviceId = deviceId;
    }
  }, {
    key: 'setAppVersion',
    value: function setAppVersion(versionName) {
      Leanplum._versionName = versionName;
    }
  }, {
    key: 'setDeviceName',
    value: function setDeviceName(deviceName) {
      Leanplum._deviceName = deviceName;
    }
  }, {
    key: 'setDeviceModel',
    value: function setDeviceModel(deviceModel) {
      Leanplum._deviceModel = deviceModel;
    }
  }, {
    key: 'setSystemName',
    value: function setSystemName(systemName) {
      Leanplum._systemName = systemName;
    }
  }, {
    key: 'setSystemVersion',
    value: function setSystemVersion(systemVersion) {
      Leanplum._systemVersion = systemVersion;
    }
  }, {
    key: 'setVariables',
    value: function setVariables(variables) {
      Leanplum._variables = variables;
    }
  }, {
    key: 'setRequestBatching',
    value: function setRequestBatching(batchEnabled, cooldownSeconds) {
      _batchEnabled = batchEnabled;
      _batchCooldown = cooldownSeconds;
    }
  }, {
    key: 'getVariables',
    value: function getVariables(variables) {
      return Leanplum._merged !== undefined ? Leanplum._merged : Leanplum._variables;
    }
  }, {
    key: 'getVariable',
    value: function getVariable(args) {
      var current = exports['getVariables']();
      for (var i = 0; i < arguments.length; i++) {
        current = current[arguments.i];
      }
      return current;
    }
  }, {
    key: 'getVariants',
    value: function getVariants() {
      return _variants || [];
    }
  }, {
    key: 'addStartResponseHandler',
    value: function addStartResponseHandler(handler) {
      _startHandlers.push(handler);
      if (Leanplum._hasStarted) {
        handler(Leanplum._startSuccessful);
      }
    }
  }, {
    key: 'addVariablesChangedHandler',
    value: function addVariablesChangedHandler(handler) {
      _variablesChangedHandlers.push(handler);
      if (Leanplum._hasReceivedDiffs) {
        handler();
      }
    }
  }, {
    key: 'removeStartResponseHandler',
    value: function removeStartResponseHandler(handler) {
      var idx = _startHandlers.indexOf(handler);
      if (idx >= 0) {
        _startHandlers.splice(idx, 1);
      }
    }
  }, {
    key: 'removeVariablesChangedHandler',
    value: function removeVariablesChangedHandler(handler) {
      var idx = _variablesChangedHandlers.indexOf(handler);
      if (idx >= 0) {
        _variablesChangedHandlers.splice(idx, 1);
      }
    }
  }, {
    key: 'start',
    value: function start(userId, userAttributes, callback) {
      // Overloads.
      if (typeof userId == 'function') {
        callback = userId;
        userAttributes = {};
        userId = null;
      } else if ((typeof userId === 'undefined' ? 'undefined' : _typeof(userId)) == 'object' && userId !== null && userId !== undefined) {
        callback = userAttributes;
        userAttributes = userId;
        userId = null;
      } else if (typeof userAttributes == 'function') {
        callback = userAttributes;
        userAttributes = {};
      }
      Leanplum._userId = userId;
      if (callback) {
        Leanplum.addStartResponseHandler(callback);
      }

      // Issue request.
      Leanplum._request(_Constants2.default.METHODS.START, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.USER_ATTRIBUTES, JSON.stringify(userAttributes)).add(_Constants2.default.PARAMS.COUNTRY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.REGION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.CITY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.LOCATION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.SYSTEM_NAME, Leanplum._systemName || _browserDetector.OS).add(_Constants2.default.PARAMS.SYSTEM_VERSION, '' + (Leanplum._systemVersion || '')).add(_Constants2.default.PARAMS.BROWSER_NAME, _browserDetector.browser).add(_Constants2.default.PARAMS.BROWSER_VERSION, '' + _browserDetector.version).add(_Constants2.default.PARAMS.LOCALE, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.DEVICE_NAME, Leanplum._deviceName || _browserDetector.browser + ' ' + _browserDetector.version).add(_Constants2.default.PARAMS.DEVICE_MODEL, Leanplum._deviceModel || 'Web Browser').add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false)
      // TODO: referer
      , {
        queued: true,
        sendNow: true,
        response: function response(_response) {
          Leanplum._hasStarted = true;
          var startResponse = Leanplum._getLastResponse(_response);
          if (Leanplum._isResponseSuccess(startResponse)) {
            Leanplum._startSuccessful = true;

            if (Leanplum._devMode) {
              var latestVersion = startResponse[_Constants2.default.KEYS.LATEST_VERSION];
              if (latestVersion) {
                console.log('A newer version of Leanplum, ' + latestVersion + ', is available. ' + 'Go to leanplum.com to download it.');
              }
              if (WebSocket) {
                Leanplum._socketIOConnect();
              } else {
                console.log('Your browser doesn\'t support WebSockets.');
              }
            }

            Leanplum._setContent(startResponse[_Constants2.default.KEYS.VARS], startResponse[_Constants2.default.KEYS.VARIANTS], startResponse[_Constants2.default.KEYS.ACTION_METADATA]);
            _token = startResponse[_Constants2.default.KEYS.TOKEN];
          } else {
            Leanplum._startSuccessful = false;
            Leanplum._loadDiffs();
          }
          for (var i = 0; i < _startHandlers.length; i++) {
            _startHandlers[i](Leanplum._startSuccessful);
          }
        }
      });
    }
  }, {
    key: 'startFromCache',
    value: function startFromCache(userId, userAttributes, callback) {
      // Overloads.
      if (typeof userId == 'function') {
        callback = userId;
        userAttributes = {};
        userId = null;
      } else if ((typeof userId === 'undefined' ? 'undefined' : _typeof(userId)) == 'object' && userId !== null && userId !== undefined) {
        callback = userAttributes;
        userAttributes = userId;
        userId = null;
      } else if (typeof userAttributes == 'function') {
        callback = userAttributes;
        userAttributes = {};
      }
      Leanplum._userId = userId;
      if (callback) {
        Leanplum.addStartResponseHandler(callback);
      }

      Leanplum._hasStarted = true;
      Leanplum._startSuccessful = true;
      if (Leanplum._devMode) {
        if (WebSocket) {
          Leanplum._socketIOConnect();
        } else {
          console.log('Your browser doesn\'t support WebSockets.');
        }
      }
      Leanplum._loadDiffs();
      for (var i = 0; i < _startHandlers.length; i++) {
        _startHandlers[i](Leanplum._startSuccessful);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      Leanplum._request(_Constants2.default.METHODS.STOP, undefined, {
        sendNow: true,
        queued: true
      });
    }
  }, {
    key: 'pauseSession',
    value: function pauseSession() {
      Leanplum._request(_Constants2.default.METHODS.PAUSE_SESSION, undefined, {
        sendNow: true,
        queued: true
      });
    }
  }, {
    key: 'resumeSession',
    value: function resumeSession() {
      Leanplum._request(_Constants2.default.METHODS.RESUME_SESSION, undefined, {
        sendNow: true,
        queued: true
      });
    }
  }, {
    key: 'pauseState',
    value: function pauseState() {
      Leanplum._request(_Constants2.default.METHODS.PAUSE_STATE, undefined, {
        queued: true
      });
    }
  }, {
    key: 'resumeState',
    value: function resumeState() {
      Leanplum._request(_Constants2.default.METHODS.RESUME_STATE, undefined, {
        queued: true
      });
    }
  }, {
    key: 'setUserId',
    value: function setUserId(userId) {
      exports['setUserAttributes'](userId);
    }
  }, {
    key: 'setUserAttributes',
    value: function setUserAttributes(userId, userAttributes) {
      if (userAttributes === undefined) {
        if ((typeof userId === 'undefined' ? 'undefined' : _typeof(userId)) == 'object') {
          userAttributes = userId;
          userId = undefined;
        } else if (typeof userId != 'string') {
          console.log('Leanplum: setUserAttributes expects a string or an ' + 'object');
          return;
        }
      }
      Leanplum._request(_Constants2.default.METHODS.SET_USER_ATTRIBUTES, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.USER_ATTRIBUTES, userAttributes ? JSON.stringify(userAttributes) : undefined).add(_Constants2.default.PARAMS.NEW_USER_ID, userId), {
        queued: true
      });
      if (userId) {
        Leanplum._userId = userId;
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, Leanplum._userId);
      }
    }
  }, {
    key: 'track',
    value: function track(event, value, info, params) {
      // Overloads.
      // object && !null && !undefined -> params
      // string -> info, params
      // *, object && !null && !undefined -> value, params
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && value !== null && value !== undefined) {
        params = value;
        info = undefined;
        value = undefined;
      } else if (typeof value == 'string') {
        params = info;
        info = value;
        value = undefined;
      } else if ((typeof info === 'undefined' ? 'undefined' : _typeof(info)) == 'object' && info !== null && info !== undefined) {
        params = info;
        info = undefined;
      }

      Leanplum._request(_Constants2.default.METHODS.TRACK, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.EVENT, event).add(_Constants2.default.PARAMS.VALUE, value || 0.0).add(_Constants2.default.PARAMS.INFO, info).add(_Constants2.default.PARAMS.PARAMS, JSON.stringify(params)), {
        queued: true
      });
    }
  }, {
    key: 'advanceTo',
    value: function advanceTo(state, info, params) {
      // Overloads.
      // string|null|undefined, * -> info, params
      // object && !null && !undefined -> params
      if ((typeof info === 'undefined' ? 'undefined' : _typeof(info)) == 'object' && info !== null && info !== undefined) {
        params = info;
        info = undefined;
      }

      Leanplum._request(_Constants2.default.METHODS.ADVANCE, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.STATE, state).add(_Constants2.default.PARAMS.INFO, info).add(_Constants2.default.PARAMS.PARAMS, JSON.stringify(params)), {
        queued: true
      });
    }
  }, {
    key: '_socketIOConnect',


    // ***************************************************************************
    // Private Methods
    // ***************************************************************************

    value: function _socketIOConnect() {
      var client = new _SocketIoClient2.default();
      var authSent = false;
      client.onopen = function () {
        if (!authSent) {
          console.log('Leanplum: Connected to development server.');
          var args = {};
          args[_Constants2.default.PARAMS.APP_ID] = Leanplum._appId;
          args[_Constants2.default.PARAMS.DEVICE_ID] = Leanplum._deviceId;
          client.send('auth', args);
          authSent = true;
        }
      };
      client.onerror = function (event) {
        console.log('Leanplum: Socket error', event);
      };
      client.onmessage = function (event, args) {
        if (event == 'updateVars') {
          Leanplum._request(_Constants2.default.METHODS.GET_VARS, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false), {
            queued: false,
            sendNow: true,
            response: function response(_response2) {
              var getVarsResponse = Leanplum._getLastResponse(_response2);
              var values = getVarsResponse[_Constants2.default.KEYS.VARS];
              var variants = getVarsResponse[_Constants2.default.KEYS.VARIANTS];
              var actionMetadata = getVarsResponse[_Constants2.default.KEYS.ACTION_METADATA];
              if (!_.isEqual(values, Leanplum._diffs)) {
                Leanplum._setContent(values, variants, actionMetadata);
              }
            }
          });
        } else if (event == 'getVariables') {
          Leanplum.sendVariables();
          client.send('getContentResponse', {
            'updated': true
          });
        } else if (event == 'getActions') {
          // Unsupported in JavaScript SDK.
          client.send('getContentResponse', {
            'updated': false
          });
        } else if (event == 'registerDevice') {
          alert('Your device has been registered to ' + args[0]['email'] + '.');
        }
      };
      client.onclose = function () {
        console.log('Leanplum: Disconnected to development server.');
        authSent = false;
      };
      client.connect(_socketHost);
      setInterval(function () {
        if (!client.connected && !client.connecting) {
          client.connect(_socketHost);
        }
      }, 5000);
    }
  }, {
    key: '_setContent',


    // Leanplum utility methods.

    value: function _setContent(diffs, variants, actionMetadata) {
      Leanplum._diffs = diffs;
      _variants = variants;
      _actionMetadata = actionMetadata;
      Leanplum._hasReceivedDiffs = true;
      Leanplum._merged = Leanplum._mergeHelper(Leanplum._variables, diffs);
      Leanplum._saveDiffs();
      for (var i = 0; i < _variablesChangedHandlers.length; i++) {
        _variablesChangedHandlers[i]();
      }
    }
  }, {
    key: '_mergeHelper',
    value: function _mergeHelper(vars, diff) {
      if (typeof diff == 'number' || typeof diff == 'boolean' || typeof diff == 'string') {
        return diff;
      }
      if (diff === null || diff === undefined) {
        return vars;
      }

      var objIterator = function objIterator(obj) {
        return function (f) {
          if (obj instanceof Array) {
            for (var i = 0; i < obj.length; i++) {
              f(obj[i]);
            }
          } else {
            for (var attr in obj) {
              if ({}.hasOwnProperty.call(obj, attr)) {
                f(attr);
              }
            }
          }
        };
      };
      var varsIterator = objIterator(vars);
      var diffIterator = objIterator(diff);

      // Infer that the diffs is an array if the vars value doesn't exist to tell
      // us the type.
      var isArray = false;
      if (vars == null) {
        if (!(diff instanceof Array)) {
          isArray = null;
          for (var attr in diff) {
            if (isArray === null) {
              isArray = true;
            }
            if (!(typeof attr == 'string')) {
              isArray = false;
              break;
            }
            if (attr.length < 3 || attr.charAt(0) != '[' || attr.charAt(attr.length - 1) != ']') {
              isArray = false;
              break;
            }
            var varSubscript = attr.substring(1, attr.length - 1);
            if (!('' + parseInt(varSubscript)) == varSubscript) {
              isArray = false;
              break;
            }
          }
        }
      }

      // Merge arrays.
      if (vars instanceof Array || isArray) {
        var _merged = [];
        varsIterator(function (attr) {
          _merged.push(attr);
        });
        diffIterator(function (varSubscript) {
          var subscript = parseInt(varSubscript.substring(1, varSubscript.length - 1));
          var diffValue = diff[varSubscript];
          while (subscript >= _merged.length) {
            _merged.push(null);
          }
          _merged[subscript] = Leanplum._mergeHelper(_merged[subscript], diffValue);
        });
        return _merged;
      }

      // Merge dictionaries.
      var merged = {};
      varsIterator(function (attr) {
        if (diff[attr] === null || diff[attr] === undefined) {
          merged[attr] = vars[attr];
        }
      });
      diffIterator(function (attr) {
        merged[attr] = Leanplum._mergeHelper(vars != null ? vars[attr] : null, diff[attr]);
      });
      return merged;
    }
  }, {
    key: '_sendVariables',
    value: function _sendVariables() {
      var body = {};
      body[_Constants2.default.PARAMS.VARIABLES] = Leanplum._variables;
      Leanplum._request(_Constants2.default.METHODS.SET_VARS, new _ArgsBuilder2.default().body(JSON.stringify(body)), {
        sendNow: true
      });
    }
  }, {
    key: '_loadDiffs',
    value: function _loadDiffs() {
      try {
        Leanplum._setContent(JSON.parse(Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIABLES) || null), JSON.parse(Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANTS) || null), JSON.parse(Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.ACTION_METADATA) || null));
        _token = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.TOKEN);
      } catch (e) {
        console.log('Leanplum: Invalid diffs: ' + e);
      }
    }
  }, {
    key: '_saveDiffs',
    value: function _saveDiffs() {
      Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIABLES, JSON.stringify(Leanplum._diffs || {}));
      Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANTS, JSON.stringify(_variants || []));
      Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.ACTION_METADATA, JSON.stringify(_actionMetadata || {}));
      Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.TOKEN, _token);
    }
  }, {
    key: '_saveRequestForLater',
    value: function _saveRequestForLater(args) {
      var count = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT) || 0;
      var itemKey = _Constants2.default.DEFAULT_KEYS.ITEM + count;
      Leanplum._saveToLocalStorage(itemKey, JSON.stringify(args));
      count++;
      Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT, count);
    }
  }, {
    key: '_popUnsentRequests',
    value: function _popUnsentRequests() {
      var requestData = [];
      var count = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT) || 0;
      Leanplum._removeFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT);
      for (var i = 0; i < count; i++) {
        var itemKey = _Constants2.default.DEFAULT_KEYS.ITEM + i;
        try {
          var requestArgs = JSON.parse(Leanplum._getFromLocalStorage(itemKey));
          requestData.push(requestArgs);
        } catch (e) {}
        Leanplum._removeFromLocalStorage(itemKey);
      }
      return requestData;
    }
  }, {
    key: '_request',
    value: function _request(action, params, options) {
      options = options || {};
      params = params || new _ArgsBuilder2.default();

      // Get or create device ID and user ID.
      if (!Leanplum._deviceId) {
        Leanplum._deviceId = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID);
      }
      if (!Leanplum._deviceId) {
        var id = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + '0123456789';
        for (var i = 0; i < 16; i++) {
          id += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        Leanplum._deviceId = id;
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID, id);
      }
      if (!Leanplum._userId) {
        Leanplum._userId = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID);
        if (!Leanplum._userId) {
          Leanplum._userId = Leanplum._deviceId;
        }
      }
      Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, Leanplum._userId);

      var argsBuilder = params.attachApiKeys(Leanplum._appId, Leanplum._clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.DEVICE_ID, Leanplum._deviceId).add(_Constants2.default.PARAMS.USER_ID, Leanplum._userId).add(_Constants2.default.PARAMS.ACTION, action).add(_Constants2.default.PARAMS.VERSION_NAME, Leanplum._versionName).add(_Constants2.default.PARAMS.DEV_MODE, Leanplum._devMode).add(_Constants2.default.PARAMS.TIME, '' + new Date().getTime() / 1000);
      var success = options.success || options.response;
      var error = options.error || options.response;

      if (!Leanplum._appId || !Leanplum._clientKey) {
        var err = 'Leanplum App ID and client key are not set. Make sure you ' + 'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' + 'before issuing API calls.';
        console.error(err);
        if (error) error(err);
        return;
      }

      if (params.body()) {
        _Request2.default.ajax('POST', _apiPath + '?' + argsBuilder.build(), params.body(), success, error, options.queued);
        return;
      }

      var sendNow = Leanplum._devMode || options.sendNow || !_batchEnabled;

      var sendUnsentRequests = function sendUnsentRequests() {
        var requestsToSend = Leanplum._popUnsentRequests();
        if (requestsToSend.length > 0) {
          var requestData = JSON.stringify({
            'data': requestsToSend
          });
          var multiRequestArgs = new _ArgsBuilder2.default().attachApiKeys(Leanplum._appId, Leanplum._clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.ACTION, _Constants2.default.METHODS.MULTI).add(_Constants2.default.PARAMS.TIME, '' + new Date().getTime() / 1000).build();
          _Request2.default.ajax('POST', _apiPath + '?' + multiRequestArgs, requestData, success, error, options.queued);
        }
      };

      // Deal with cooldown.
      if (!sendNow && _batchCooldown) {
        var now = new Date().getTime() / 1000;
        if (!Leanplum._lastRequestTime || now - Leanplum._lastRequestTime >= _batchCooldown) {
          sendNow = true;
          Leanplum._lastRequestTime = now;
        } else {
          if (!Leanplum._cooldownTimeout) {
            Leanplum._cooldownTimeout = setTimeout(function () {
              Leanplum._cooldownTimeout = null;
              Leanplum._lastRequestTime = new Date().getTime() / 1000;
              sendUnsentRequests();
            }, (_batchCooldown - (now - Leanplum._lastRequestTime)) * 1000);
          }
        }
      }

      Leanplum._saveRequestForLater(argsBuilder.buildDict());
      if (sendNow) {
        sendUnsentRequests();
      }
    }
  }, {
    key: '_numResponses',


    // //////////////// Response parsing //////////////////

    value: function _numResponses(response) {
      if (!response || !response['response']) {
        return 0;
      }
      return response['response'].length;
    }
  }, {
    key: '_getResponseAt',
    value: function _getResponseAt(response, index) {
      if (!response || !response['response']) {
        return null;
      }
      return response['response'][index];
    }
  }, {
    key: '_getLastResponse',
    value: function _getLastResponse(response) {
      var count = Leanplum._numResponses(response);
      if (count > 0) {
        return Leanplum._getResponseAt(response, count - 1);
      } else {
        return null;
      }
    }
  }, {
    key: '_isResponseSuccess',
    value: function _isResponseSuccess(response) {
      if (!response) {
        return false;
      }
      return response['success'] ? true : false;
    }
  }, {
    key: '_getResponseError',
    value: function _getResponseError(response) {
      if (!response) {
        return null;
      }
      var error = response['error'];
      if (!error) {
        return null;
      }
      return error['message'];
    }
  }, {
    key: '_getFromLocalStorage',
    value: function _getFromLocalStorage(key) {
      if (_localStorageEnabled === false) {
        return _alternateLocalStorage[key];
      }
      return localStorage[key];
    }
  }, {
    key: '_saveToLocalStorage',
    value: function _saveToLocalStorage(key, value) {
      if (_localStorageEnabled === false) {
        _alternateLocalStorage[key] = value;
        return;
      }
      try {
        localStorage[key] = value;
      } catch (e) {
        _localStorageEnabled = false;
        Leanplum._saveToLocalStorage(key, value);
      }
    }
  }, {
    key: '_removeFromLocalStorage',
    value: function _removeFromLocalStorage(key) {
      if (_localStorageEnabled === false) {
        delete _alternateLocalStorage[key];
        return;
      }
      try {
        localStorage.removeItem(key);
      } catch (e) {
        _localStorageEnabled = false;
        Leanplum._removeFromLocalStorage(key);
      }
    }
  }]);

  return Leanplum;
}();

module.exports = Leanplum;

/***/ })
/******/ ]);
});