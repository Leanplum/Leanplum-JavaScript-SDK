(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Leanplum"] = factory();
	else
		root["Leanplum"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(21);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.Constants = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
      SET_DEVICE_ATTRIBUTES: 'setDeviceAttributes',
      UPLOAD_FILE: 'uploadFile',
      REGISTER_DEVICE: 'registerDevice'
    },

    SDK_VERSION: '1.7.0-iflix',

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
      INCLUDE_DEFAULTS: 'includeDefaults',
      INCLUDE_VARIANT_DEBUG_INFO: 'includeVariantDebugInfo',
      WEB_PUSH_SUBSCRIPTION: 'webPushSubscription',
      MESSAGE_ID: 'messageId'
    },

    KEYS: {
      IS_REGISTERED: 'isRegistered',
      LATEST_VERSION: 'latestVersion',
      VARS: 'vars',
      VARIANTS: 'variants',
      VARIANT_DEBUG_INFO: 'variantDebugInfo',
      ACTION_METADATA: 'actionMetadata',
      TOKEN: 'token',
      MESSAGES: 'messages'
    },

    DEFAULT_KEYS: {
      COUNT: '__leanplum_unsynced',
      ITEM: '__leanplum_unsynced_',
      VARIABLES: '__leanplum_variables',
      VARIANTS: '__leanplum_variants',
      VARIANT_DEBUG_INFO: '__leanplum_variant_debug_info',
      ACTION_METADATA: '__leanplum_action_metadata',
      TOKEN: '__leanplum_token',
      DEVICE_ID: '__leanplum_device_id',
      USER_ID: '__leanplum_user_id',
      PUSH_SUBSCRIPTION: '__leanplum_push_subscription',
      MESSAGE_VIEW: '__leanplum_messages_view'
    },

    VALUES: {
      DETECT: '(detect)'
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(53),
    getValue = __webpack_require__(66);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants);
    global.ArgsBuilder = mod.exports;
  }
})(this, function (module, exports, _Constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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
     * @param {string|boolean} value The value for given key.
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
        var encodedUriComponent = encodeURIComponent(value);
        this.argString += key + '=' + encodedUriComponent;
        this.argValues[key] = value;
        return this;
      }
    }, {
      key: 'body',
      value: function body(_body) {
        if (_body) {
          this._body = _body;
          return this;
        }
        return this._body;
      }
    }, {
      key: 'attachApiKeys',
      value: function attachApiKeys(appId, clientKey) {
        return this.add(_Constants2.default.PARAMS.APP_ID, appId).add(_Constants2.default.PARAMS.CLIENT, _Constants2.default.CLIENT).add(_Constants2.default.PARAMS.CLIENT_KEY, clientKey);
      }
    }, {
      key: 'build',
      value: function build() {
        return this.argString;
      }
    }, {
      key: 'buildDict',
      value: function buildDict() {
        return this.argValues;
      }
    }]);

    return ArgsBuilder;
  }();

  exports.default = ArgsBuilder;
  module.exports = exports['default'];
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(12), __webpack_require__(18), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./ArgsBuilder'), require('./InternalState'), require('./Network'), require('./LocalStorageManager'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.ArgsBuilder, global.InternalState, global.Network, global.LocalStorageManager);
    global.LeanplumRequest = mod.exports;
  }
})(this, function (module, exports, _Constants, _ArgsBuilder, _InternalState, _Network, _LocalStorageManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _InternalState2 = _interopRequireDefault(_InternalState);

  var _Network2 = _interopRequireDefault(_Network);

  var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var lastRequestTime = undefined;
  var cooldownTimeout = null;

  var LeanplumRequest = function () {
    function LeanplumRequest() {
      _classCallCheck(this, LeanplumRequest);
    }

    _createClass(LeanplumRequest, null, [{
      key: 'request',
      value: function request(action, params, options) {
        options = options || {};
        params = params || new _ArgsBuilder2.default();

        // Get or create device ID and user ID.
        if (!LeanplumRequest.deviceId) {
          LeanplumRequest.deviceId = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID);
        }
        if (!LeanplumRequest.deviceId) {
          var id = '';
          var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + '0123456789';
          for (var i = 0; i < 16; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          LeanplumRequest.deviceId = id;
          _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID, id);
        }
        if (!LeanplumRequest.userId) {
          LeanplumRequest.userId = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID);
          if (!LeanplumRequest.userId) {
            LeanplumRequest.userId = LeanplumRequest.deviceId;
          }
        }
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, LeanplumRequest.userId);

        var argsBuilder = params.attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.DEVICE_ID, LeanplumRequest.deviceId).add(_Constants2.default.PARAMS.USER_ID, LeanplumRequest.userId).add(_Constants2.default.PARAMS.ACTION, action).add(_Constants2.default.PARAMS.VERSION_NAME, LeanplumRequest.versionName).add(_Constants2.default.PARAMS.DEV_MODE, _InternalState2.default.devMode).add(_Constants2.default.PARAMS.TIME, (new Date().getTime() / 1000).toString());
        var success = options.success || options.response;
        var error = options.error || options.response;

        if (!LeanplumRequest.appId || !LeanplumRequest.clientKey) {
          var err = 'Leanplum App ID and client key are not set. Make sure you ' + 'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' + 'before issuing API calls.';
          console.error(err);
          if (error) error(err);
          return;
        }

        if (params.body()) {
          _Network2.default.ajax('POST', LeanplumRequest.apiPath + '?' + argsBuilder.build(), params.body(), success, error, options.queued);
          return;
        }

        var sendNow = _InternalState2.default.devMode || options.sendNow || !LeanplumRequest.batchEnabled;

        var sendUnsentRequests = function sendUnsentRequests() {
          var requestsToSend = LeanplumRequest.popUnsentRequests();
          if (requestsToSend.length > 0) {
            var requestData = JSON.stringify({
              'data': requestsToSend
            });
            var multiRequestArgs = new _ArgsBuilder2.default().attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.ACTION, _Constants2.default.METHODS.MULTI).add(_Constants2.default.PARAMS.TIME, (new Date().getTime() / 1000).toString().toString()).build();
            _Network2.default.ajax('POST', LeanplumRequest.apiPath + '?' + multiRequestArgs, requestData, success, error, options.queued);
          }
        };

        // Deal with cooldown.
        if (!sendNow && LeanplumRequest.batchCooldown) {
          var now = new Date().getTime() / 1000;
          if (!lastRequestTime || now - lastRequestTime >= LeanplumRequest.batchCooldown) {
            sendNow = true;
            lastRequestTime = now;
          } else if (!cooldownTimeout) {
            cooldownTimeout = setTimeout(function () {
              cooldownTimeout = null;
              lastRequestTime = new Date().getTime() / 1000;
              sendUnsentRequests();
            }, (LeanplumRequest.batchCooldown - (now - lastRequestTime)) * 1000);
          }
        }

        LeanplumRequest.saveRequestForLater(argsBuilder.buildDict());
        if (sendNow) {
          sendUnsentRequests();
        }
      }
    }, {
      key: 'generateRequestUrl',
      value: function generateRequestUrl(action, queryParams) {
        queryParams = queryParams || new _ArgsBuilder2.default();

        // Get or create device ID and user ID.
        if (!LeanplumRequest.deviceId) {
          LeanplumRequest.deviceId = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID);
        }
        if (!LeanplumRequest.deviceId) {
          var id = '';
          var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + '0123456789';
          for (var i = 0; i < 16; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          LeanplumRequest.deviceId = id;
          _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID, id);
        }
        if (!LeanplumRequest.userId) {
          LeanplumRequest.userId = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID);
          if (!LeanplumRequest.userId) {
            LeanplumRequest.userId = LeanplumRequest.deviceId;
          }
        }
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, LeanplumRequest.userId);

        var argsBuilder = queryParams.attachApiKeys(LeanplumRequest.appId, LeanplumRequest.clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.DEVICE_ID, LeanplumRequest.deviceId).add(_Constants2.default.PARAMS.USER_ID, LeanplumRequest.userId).add(_Constants2.default.PARAMS.ACTION, action).add(_Constants2.default.PARAMS.VERSION_NAME, LeanplumRequest.versionName).add(_Constants2.default.PARAMS.DEV_MODE, _InternalState2.default.devMode).add(_Constants2.default.PARAMS.TIME, (new Date().getTime() / 1000).toString());

        if (!LeanplumRequest.appId || !LeanplumRequest.clientKey) {
          var err = 'Leanplum App ID and client key are not set. Make sure you ' + 'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' + 'before issuing API calls.';
          console.error(err);
          throw new Error(err);
        }

        return LeanplumRequest.apiPath + '?' + argsBuilder.build();
      }
    }, {
      key: 'setNetworkTimeout',
      value: function setNetworkTimeout(seconds) {
        _Network2.default.setNetworkTimeout(seconds);
      }
    }, {
      key: 'saveRequestForLater',
      value: function saveRequestForLater(args) {
        var count = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT) || 0;
        var itemKey = _Constants2.default.DEFAULT_KEYS.ITEM + count;
        _LocalStorageManager2.default.saveToLocalStorage(itemKey, JSON.stringify(args));
        count++;
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT, count);
      }
    }, {
      key: 'popUnsentRequests',
      value: function popUnsentRequests() {
        var requestData = [];
        var count = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT) || 0;
        _LocalStorageManager2.default.removeFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT);
        for (var i = 0; i < count; i++) {
          var itemKey = _Constants2.default.DEFAULT_KEYS.ITEM + i;
          try {
            var requestArgs = JSON.parse(_LocalStorageManager2.default.getFromLocalStorage(itemKey));
            requestData.push(requestArgs);
          } catch (ignored) {// eslint-disable-next-line no-empty
          }
          _LocalStorageManager2.default.removeFromLocalStorage(itemKey);
        }
        return requestData;
      }
    }, {
      key: 'numResponses',
      value: function numResponses(response) {
        if (!response || !response.response) {
          return 0;
        }
        return response.response.length;
      }
    }, {
      key: 'getResponseAt',
      value: function getResponseAt(response, index) {
        if (!response || !response.response) {
          return null;
        }
        return response.response[index];
      }
    }, {
      key: 'getLastResponse',
      value: function getLastResponse(response) {
        var count = LeanplumRequest.numResponses(response);
        if (count > 0) {
          return LeanplumRequest.getResponseAt(response, count - 1);
        } else {
          return null;
        }
      }
    }, {
      key: 'isResponseSuccess',
      value: function isResponseSuccess(response) {
        if (!response) {
          return false;
        }
        return !!response.success;
      }
    }, {
      key: 'getResponseError',
      value: function getResponseError(response) {
        if (!response) {
          return null;
        }
        var error = response.error;
        if (!error) {
          return null;
        }
        return error.message;
      }
    }]);

    return LeanplumRequest;
  }();

  LeanplumRequest.apiPath = 'https://www.leanplum.com/api';
  LeanplumRequest.batchEnabled = true;
  LeanplumRequest.batchCooldown = 5;
  exports.default = LeanplumRequest;
  module.exports = exports['default'];
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.LocalStorageManager = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var localStorageEnabled = void 0;
  var alternateLocalStorage = {};

  var LocalStorageManager = function () {
    function LocalStorageManager() {
      _classCallCheck(this, LocalStorageManager);
    }

    _createClass(LocalStorageManager, null, [{
      key: "getFromLocalStorage",
      value: function getFromLocalStorage(key) {
        if (localStorageEnabled === false) {
          return alternateLocalStorage[key];
        }
        return localStorage[key];
      }
    }, {
      key: "saveToLocalStorage",
      value: function saveToLocalStorage(key, value) {
        if (localStorageEnabled === false) {
          alternateLocalStorage[key] = value;
          return;
        }
        try {
          localStorage[key] = value;
        } catch (e) {
          localStorageEnabled = false;
          alternateLocalStorage[key] = value;
        }
      }
    }, {
      key: "removeFromLocalStorage",
      value: function removeFromLocalStorage(key) {
        if (localStorageEnabled === false) {
          delete alternateLocalStorage[key];
          return;
        }
        try {
          localStorage.removeItem(key);
        } catch (e) {
          localStorageEnabled = false;
          delete alternateLocalStorage[key];
        }
      }
    }]);

    return LocalStorageManager;
  }();

  exports.default = LocalStorageManager;
  module.exports = exports["default"];
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(76),
    listCacheDelete = __webpack_require__(77),
    listCacheGet = __webpack_require__(78),
    listCacheHas = __webpack_require__(79),
    listCacheSet = __webpack_require__(80);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(23);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(15),
    getRawTag = __webpack_require__(63),
    objectToString = __webpack_require__(89);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(73);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.InternalState = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var InternalState = function () {
    function InternalState() {
      _classCallCheck(this, InternalState);
    }

    _createClass(InternalState, null, [{
      key: "addStartResponseHandler",
      value: function addStartResponseHandler(handler) {
        InternalState.startHandlers.push(handler);
        if (InternalState.hasStarted) {
          handler(InternalState.startSuccessful);
        }
      }
    }, {
      key: "removeStartResponseHandler",
      value: function removeStartResponseHandler(handler) {
        var idx = InternalState.startHandlers.indexOf(handler);
        if (idx >= 0) {
          InternalState.startHandlers.splice(idx, 1);
        }
      }
    }, {
      key: "triggerStartHandlers",
      value: function triggerStartHandlers() {
        for (var i = 0; i < InternalState.startHandlers.length; i++) {
          InternalState.startHandlers[i](InternalState.startSuccessful);
        }
      }
    }, {
      key: "addVariablesChangedHandler",
      value: function addVariablesChangedHandler(handler) {
        InternalState.variablesChangedHandlers.push(handler);
        if (InternalState.hasReceivedDiffs) {
          handler();
        }
      }
    }, {
      key: "removeVariablesChangedHandler",
      value: function removeVariablesChangedHandler(handler) {
        var idx = InternalState.variablesChangedHandlers.indexOf(handler);
        if (idx >= 0) {
          InternalState.variablesChangedHandlers.splice(idx, 1);
        }
      }
    }, {
      key: "triggerVariablesChangedHandlers",
      value: function triggerVariablesChangedHandlers() {
        for (var i = 0; i < InternalState.variablesChangedHandlers.length; i++) {
          InternalState.variablesChangedHandlers[i]();
        }
      }
    }, {
      key: "setVariantDebugInfoEnabled",
      value: function setVariantDebugInfoEnabled(variantDebugInfoEnabled) {
        InternalState.variantDebugInfoEnabled = variantDebugInfoEnabled;
      }
    }]);

    return InternalState;
  }();

  InternalState.devMode = false;
  InternalState.variablesChangedHandlers = [];
  InternalState.hasReceivedDiffs = false;
  InternalState.startHandlers = [];
  InternalState.hasStarted = false;
  InternalState.startSuccessful = false;
  InternalState.variantDebugInfoEnabled = false;
  exports.default = InternalState;
  module.exports = exports["default"];
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(12), __webpack_require__(3), __webpack_require__(5), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./InternalState'), require('./ArgsBuilder'), require('./LocalStorageManager'), require('./LeanplumRequest'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.InternalState, global.ArgsBuilder, global.LocalStorageManager, global.LeanplumRequest);
    global.VarCache = mod.exports;
  }
})(this, function (module, exports, _Constants, _InternalState, _ArgsBuilder, _LocalStorageManager, _LeanplumRequest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  var _InternalState2 = _interopRequireDefault(_InternalState);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

  var _LeanplumRequest2 = _interopRequireDefault(_LeanplumRequest);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var VarCache = function () {
    function VarCache() {
      _classCallCheck(this, VarCache);
    }

    _createClass(VarCache, null, [{
      key: 'applyDiffs',
      value: function applyDiffs(diffs, variants, actionMetadata) {
        VarCache.diffs = diffs;
        VarCache.variants = variants;
        VarCache.actionMetadata = actionMetadata;
        _InternalState2.default.hasReceivedDiffs = true;
        VarCache.merged = VarCache.mergeHelper(VarCache.variables, diffs);
        VarCache.saveDiffs();
        if (VarCache.onUpdate) {
          VarCache.onUpdate();
        }
      }
    }, {
      key: 'loadDiffs',
      value: function loadDiffs() {
        try {
          VarCache.applyDiffs(JSON.parse(_LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIABLES) || null), JSON.parse(_LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANTS) || null), JSON.parse(_LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.ACTION_METADATA) || null));
          VarCache.token = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.TOKEN);
          VarCache.variantDebugInfo = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANT_DEBUG_INFO);
        } catch (e) {
          console.log('Leanplum: Invalid diffs: ' + e);
        }
      }
    }, {
      key: 'saveDiffs',
      value: function saveDiffs() {
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIABLES, JSON.stringify(VarCache.diffs || {}));
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANTS, JSON.stringify(VarCache.variants || []));
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.ACTION_METADATA, JSON.stringify(VarCache.actionMetadata || {}));
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANT_DEBUG_INFO, JSON.stringify(VarCache.variantDebugInfo || {}));
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.TOKEN, VarCache.token);
      }
    }, {
      key: 'addMessageView',
      value: function addMessageView(messageId) {
        var messageView = VarCache.getMessagesView()[messageId];
        if (messageView === undefined) {
          VarCache.messagesView[messageId] = [];
        }
        var messageViewPerSession = VarCache.messagesViewPerSession[messageId] || [];

        var now = Date.now();
        messageViewPerSession.push({ t: now });
        VarCache.messagesView[messageId].push({ t: now });
        _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.MESSAGE_VIEW, JSON.stringify(VarCache.messagesView || {}));
      }
    }, {
      key: 'getMessagesView',
      value: function getMessagesView(session) {
        if (session) {
          return VarCache.messagesViewPerSession;
        }
        if (VarCache.messagesView === undefined) {
          VarCache.messagesView = JSON.parse(_LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.MESSAGE_VIEW) || '{}');
        }
        return VarCache.messagesView;
      }
    }, {
      key: 'getMessageView',
      value: function getMessageView(messageId, session) {
        return VarCache.getMessagesView(session)[messageId] || [];
      }
    }, {
      key: 'setVariables',
      value: function setVariables(variables) {
        VarCache.variables = variables;
      }
    }, {
      key: 'getVariables',
      value: function getVariables() {
        return VarCache.merged !== undefined ? VarCache.merged : VarCache.variables;
      }
    }, {
      key: 'getVariantDebugInfo',
      value: function getVariantDebugInfo() {
        return VarCache.variantDebugInfo;
      }
    }, {
      key: 'sendVariables',
      value: function sendVariables() {
        var body = {};
        body[_Constants2.default.PARAMS.VARIABLES] = VarCache.variables;
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.SET_VARS, new _ArgsBuilder2.default().body(JSON.stringify(body)), {
          sendNow: true
        });
      }
    }, {
      key: 'mergeHelper',
      value: function mergeHelper(vars, diff) {
        if (typeof diff === 'number' || typeof diff === 'boolean' || typeof diff === 'string') {
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
                // This seems to be best practice: https://github.com/eslint/eslint/issues/7071
                // eslint-disable-next-line prefer-reflect
                if ({}.hasOwnProperty.call(obj, attr)) {
                  f(attr);
                }
              }
            }
          };
        };
        var varsIterator = objIterator(vars);
        var diffIterator = objIterator(diff);

        // Infer that the diffs is an array if the vars value doesn't exist to tell us the type.
        var isArray = false;
        if (vars === null) {
          if (!(diff instanceof Array)) {
            isArray = null;
            for (var attribute in diff) {
              if (!diff.hasOwnProperty(attribute)) {
                continue;
              }
              if (isArray === null) {
                isArray = true;
              }
              if (!(typeof attribute === 'string')) {
                isArray = false;
                break;
              }
              if (attribute.length < 3 || attribute.charAt(0) !== '[' || attribute.charAt(attribute.length - 1) !== ']') {
                isArray = false;
                break;
              }
              var varSubscript = attribute.substring(1, attribute.length - 1);
              if (!parseInt(varSubscript).toString() === varSubscript) {
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
            _merged[subscript] = VarCache.mergeHelper(_merged[subscript], diffValue);
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
          merged[attr] = VarCache.mergeHelper(vars !== null ? vars[attr] : null, diff[attr]);
        });
        return merged;
      }
    }, {
      key: 'clearUserContent',
      value: function clearUserContent() {
        VarCache.diffs = undefined;
        VarCache.variables = null;
        VarCache.variants = [];
        VarCache.variantDebugInfo = {};
        VarCache.merged = undefined;
      }
    }]);

    return VarCache;
  }();

  VarCache.diffs = undefined;
  VarCache.variables = null;
  VarCache.variants = [];
  VarCache.variantDebugInfo = {};
  VarCache.merged = undefined;
  VarCache.onUpdate = undefined;
  VarCache.token = '';
  VarCache.actionMetadata = {};
  VarCache.messagesView = undefined;
  VarCache.messagesViewPerSession = [];
  exports.default = VarCache;
  module.exports = exports['default'];
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.Events = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    var topics = {};

    return {
      subscribe: function subscribe(topic, listener) {
        if (!topics.hasOwnProperty.call(topics, topic)) topics[topic] = [];

        var index = topics[topic].push(listener) - 1;

        return {
          remove: function remove() {
            delete topics[topic][index];
          }
        };
      },
      publish: function publish(topic, info) {
        if (!topics.hasOwnProperty.call(topics, topic)) return;

        topics[topic].forEach(function (item) {
          item(info != undefined ? info : {});
        });
      }
    };
  }();

  module.exports = exports["default"];
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.Network = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var requestQueue = [];
  var networkTimeoutSeconds = 10;

  var Network = function () {
    function Network() {
      _classCallCheck(this, Network);
    }

    _createClass(Network, null, [{
      key: 'setNetworkTimeout',
      value: function setNetworkTimeout(seconds) {
        networkTimeoutSeconds = seconds;
      }
    }, {
      key: 'ajax',
      value: function ajax(method, url, data, success, error, queued, plainText) {
        if (queued) {
          if (Network.runningRequest) {
            // eslint-disable-next-line prefer-rest-params
            return Network.enqueueRequest(arguments);
          }
          Network.runningRequest = true;
        }

        /** @namespace XDomainRequest **/
        /** @namespace location **/
        if (typeof XDomainRequest !== 'undefined') {
          if (location.protocol === 'http:' && url.indexOf('https:') === 0) {
            url = 'http:' + url.substring(6);
          }
          // eslint-disable-next-line prefer-rest-params
          return Reflect.apply(Network.ajaxIE8, null, arguments);
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
              Network.runningRequest = false;
              Network.dequeueRequest();
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
        }, networkTimeoutSeconds * 1000);
      }
    }, {
      key: 'ajaxIE8',
      value: function ajaxIE8(method, url, data, success, error, queued, plainText) {
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
            Network.runningRequest = false;
            Network.dequeueRequest();
          }
        };
        xdr.onerror = xdr.ontimeout = function () {
          setTimeout(function () {
            if (error) {
              error(null, xdr);
            }
          }, 0);
          if (queued) {
            Network.runningRequest = false;
            Network.dequeueRequest();
          }
        };
        xdr.onprogress = function () {};
        xdr.open(method, url);
        xdr.timeout = networkTimeoutSeconds * 1000;
        xdr.send(data);
      }
    }, {
      key: 'enqueueRequest',
      value: function enqueueRequest(requestArguments) {
        requestQueue.push(requestArguments);
      }
    }, {
      key: 'dequeueRequest',
      value: function dequeueRequest() {
        var args = requestQueue.shift();
        if (args) {
          Reflect.apply(Network.ajax, null, args);
        }
      }
    }]);

    return Network;
  }();

  exports.default = Network;
  module.exports = exports['default'];
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(81),
    mapCacheDelete = __webpack_require__(82),
    mapCacheGet = __webpack_require__(83),
    mapCacheHas = __webpack_require__(84),
    mapCacheSet = __webpack_require__(85);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(41),
    arraySome = __webpack_require__(48),
    cacheHas = __webpack_require__(58);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(104)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0),
    stubFalse = __webpack_require__(103);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(51);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObject = __webpack_require__(28);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(54),
    baseUnary = __webpack_require__(57),
    nodeUtil = __webpack_require__(88);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./VarCache'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.VarCache);
    global.ActionManager = mod.exports;
  }
})(this, function (module, exports, _VarCache) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _VarCache2 = _interopRequireDefault(_VarCache);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  /** private
   * return true if message pass one trigger/verb condition
   * @param params {Object}
   * @param message
   * @returns {Boolean}
   */
  var filterByTriggers = function filterByTriggers() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (message) {
      var triggers = message.whenTriggers && message.whenTriggers.children;
      if (!params.triggers || !triggers) {
        return false;
      }

      var filteredByTriggers = triggers.filter(function (trigger) {
        return params.triggers.includes(trigger.subject);
      });

      if (!filteredByTriggers.length) {
        return false;
      }
      var verbFilter = filterByVerbs(params);
      if (!verbFilter) {
        return false;
      }
      filteredByTriggers = filteredByTriggers.filter(verbFilter);

      if (!filteredByTriggers.length) {
        return false;
      }

      return true;
    };
  };

  /** private
   * return true if trigger pass verb/noun/objects condition
   * @param params {Object}
   * @param trigger {Object}
   * @returns {Boolean}
   */
  var filterByVerbs = function filterByVerbs(params) {
    return function (trigger) {
      if (trigger.verb === '') {
        return true;
      }
      var evaluator = triggerVerbEvaluators[trigger.verb];
      if (!evaluator(trigger, params.noun, params.objects)) {
        return false;
      }
      return true;
    };
  };

  /** prrivate
   * return true if message pass all limits
   * @param now {Date.now()}
   * @param message {Object}
   * @returns {Boolean}
   */
  var filterByLimits = function filterByLimits(now) {
    return function (message) {
      var limits = message.whenLimits && message.whenLimits.children;
      if (!limits || limits.length < 1) {
        return true;
      }
      return limits.every(function (limit) {
        var verbEvaluator = limitVerbEvaluators[limit.verb];
        if (!verbEvaluator) {
          return false;
        }
        return verbEvaluator(message.id, limit.noun, limit.objects[0], now);
      });
    };
  };

  /** private
   * return the amount of ocurence of messageView since 'since'
   * @param since {Number}
   * @param messageView {Array}
   * @returns {function(*, *): *}
   */
  var countMessageViewsByLimit = function countMessageViewsByLimit(since) {
    return function (iterator, messageView) {
      if (messageView.t > since) {
        iterator += 1;
      }
      return iterator;
    };
  };
  /** private
   * return true if no limits are defined or if now is in the range
   * @param now {Date.now()}
   * @param limitTime {Object}
   * @returns {Boolean}
   */
  var filterByLimitTimes = function filterByLimitTimes(now) {
    return function (limitTime) {
      return (!limitTime.startTime || limitTime.startTime < now) && (!limitTime.endTime || limitTime.endTime > now);
    };
  };

  /** private
   * provide evaluators for filterByVerbs
   */
  var triggerVerbEvaluators = {
    triggers: function triggers(trigger, noun) {
      return noun === trigger.noun;
    },
    triggersWithParameter: function triggersWithParameter(trigger, noun, params) {
      return noun === trigger.noun && params.paramValue === trigger.objects[params.paramName];
    },
    changesTo: function changesTo(trigger, noun, params) {
      return noun === trigger.noun && params.to === trigger.objects[0];
    },
    changesFromTo: function changesFromTo(trigger, noun, params) {
      return noun === trigger.noun && params.from === trigger.objects[0] && params.to === trigger.objects[1];
    }

    /** private
     * provide evaluators for filterByLimit
     */
  };var limitVerbEvaluators = {
    limitUser: function limitUser(messageId, maxView) {
      return _VarCache2.default.getMessageView(messageId).length < maxView;
    },
    limitMonth: function limitMonth(messageId, maxView, amount, now) {
      var since = now - amount * 30 * 24 * 60 * 60 * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitWeek: function limitWeek(messageId, maxView, amount, now) {
      var since = now - amount * 7 * 24 * 60 * 60 * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitDay: function limitDay(messageId, maxView, amount, now) {
      var since = now - amount * 24 * 60 * 60 * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitHour: function limitHour(messageId, maxView, amount, now) {
      var since = now - amount * 60 * 60 * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitMinute: function limitMinute(messageId, maxView, amount, now) {
      var since = now - amount * 60 * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitSecond: function limitSecond(messageId, maxView, amount, now) {
      var since = now - amount * 1000;
      return _VarCache2.default.getMessageView(messageId).reduce(countMessageViewsByLimit(since), 0) < maxView;
    },
    limitSession: function limitSession(messageId, maxView) {
      return _VarCache2.default.getMessageView(messageId, true).length < maxView;
    }
  };

  var ActionManager = function () {
    function ActionManager() {
      _classCallCheck(this, ActionManager);
    }

    _createClass(ActionManager, null, [{
      key: 'filterMessages',
      value: function filterMessages(messages) {
        var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var verb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var noun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};


        var now = Date.now();

        var filteredMessages = Object.entries(messages).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              id = _ref2[0],
              message = _ref2[1];

          return _extends({ id: id }, message);
        });

        filteredMessages = filteredMessages.filter(filterByTriggers({
          triggers: [trigger]
        })).filter(filterByLimits(now)).filter(filterByLimitTimes(now));
        return filteredMessages;
      }
    }]);

    return ActionManager;
  }();

  exports.default = ActionManager;
  module.exports = exports['default'];
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.BrowserDetector = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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
  }, { // for newer Netscape (6+)
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
  }, { // for older Netscape (4-)
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
  /**
   * Helper class to detect which browser client is using.
   */

  var BrowserDetector = function () {
    /**
     * Initializes the object with current browser settings.
     */
    function BrowserDetector() {
      _classCallCheck(this, BrowserDetector);

      this.browser = this._searchString(dataBrowser) || 'Unknown Browser';
      this.version = this._searchVersion(navigator.userAgent) || this._searchVersion(navigator.appVersion) || 'Unknown Version';
      this.OS = this._searchString(dataOS) || 'Unknown OS';
    }

    /**
     * Matches the client's system to the predefined system list.
     * @param {object} data The data object to scan.
     * @return {string} The found identity string.
     */


    _createClass(BrowserDetector, [{
      key: '_searchString',
      value: function _searchString(data) {
        for (var i = 0; i < data.length; i++) {
          var dataString = data[i].string;
          var dataProp = data[i].prop;
          this.versionSearchString = data[i].versionSearch || data[i].identity;
          if (dataString) {
            if (dataString.indexOf(data[i].subString) !== -1) {
              return data[i].identity;
            }
          } else if (dataProp) {
            return data[i].identity;
          }
        }
      }
    }, {
      key: '_searchVersion',
      value: function _searchVersion(dataString) {
        if (!dataString) {
          return -1;
        }
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
          return -1;
        }
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
      }
    }]);

    return BrowserDetector;
  }();

  exports.default = BrowserDetector;
  module.exports = exports['default'];
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(36), __webpack_require__(13), __webpack_require__(4), __webpack_require__(25), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./ArgsBuilder'), require('./SocketIoClient'), require('./VarCache'), require('./LeanplumRequest'), require('lodash/isEqual'), require('./Events'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.ArgsBuilder, global.SocketIoClient, global.VarCache, global.LeanplumRequest, global.isEqual, global.Events);
    global.LeanplumSocket = mod.exports;
  }
})(this, function (module, exports, _Constants, _ArgsBuilder, _SocketIoClient, _VarCache, _LeanplumRequest, _isEqual, _Events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _SocketIoClient2 = _interopRequireDefault(_SocketIoClient);

  var _VarCache2 = _interopRequireDefault(_VarCache);

  var _LeanplumRequest2 = _interopRequireDefault(_LeanplumRequest);

  var _isEqual2 = _interopRequireDefault(_isEqual);

  var _Events2 = _interopRequireDefault(_Events);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var LeanplumSocket = function () {
    function LeanplumSocket() {
      _classCallCheck(this, LeanplumSocket);
    }

    _createClass(LeanplumSocket, null, [{
      key: 'connect',
      value: function connect() {
        if (!WebSocket) {
          console.log('Your browser doesn\'t support WebSockets.');
          return;
        }

        var client = new _SocketIoClient2.default();
        var authSent = false;
        client.onopen = function () {
          if (!authSent) {
            console.log('Leanplum: Connected to development server.');
            var args = {};
            args[_Constants2.default.PARAMS.APP_ID] = _LeanplumRequest2.default.appId;
            args[_Constants2.default.PARAMS.DEVICE_ID] = _LeanplumRequest2.default.deviceId;
            client.send('auth', args);
            authSent = true;
          }
        };
        client.onerror = function (event) {
          console.log('Leanplum: Socket error', event);
        };
        /**
         *
         * @param event
         * @param args
         * @param args[].email
         */
        client.onmessage = function (event, args) {
          if (event === 'updateVars') {
            _LeanplumRequest2.default.request(_Constants2.default.METHODS.GET_VARS, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false), {
              queued: false,
              sendNow: true,
              response: function response(_response) {
                var getVarsResponse = _LeanplumRequest2.default.getLastResponse(_response);
                var values = getVarsResponse[_Constants2.default.KEYS.VARS];
                var variants = getVarsResponse[_Constants2.default.KEYS.VARIANTS];
                var actionMetadata = getVarsResponse[_Constants2.default.KEYS.ACTION_METADATA];
                if (!(0, _isEqual2.default)(values, _VarCache2.default.diffs)) {
                  _VarCache2.default.applyDiffs(values, variants, actionMetadata);
                }
              }
            });
          } else if (event === 'getVariables') {
            _VarCache2.default.sendVariables();
            client.send('getContentResponse', {
              'updated': true
            });
          } else if (event === 'getActions') {
            // Unsupported in JavaScript SDK.
            client.send('getContentResponse', {
              'updated': false
            });
          } else if (event === 'registerDevice') {
            // eslint-disable-next-line no-alert
            alert('Your device has been registered to ' + args[0].email + '.');
          } else if (event === 'trigger') {
            _Events2.default.publish('websocket/trigger', {
              args: args
            });
          }
        };
        client.onclose = function () {
          console.log('Leanplum: Disconnected to development server.');
          authSent = false;
        };
        client.connect(LeanplumSocket.socketHost);
        setInterval(function () {
          if (!client.connected && !client.connecting) {
            client.connect(LeanplumSocket.socketHost);
          }
        }, 5000);
      }
    }]);

    return LeanplumSocket;
  }();

  LeanplumSocket.socketHost = 'dev.leanplum.com';
  exports.default = LeanplumSocket;
  module.exports = exports['default'];
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(25), __webpack_require__(5), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./ArgsBuilder'), require('lodash/isEqual'), require('./LocalStorageManager'), require('./LeanplumRequest'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.ArgsBuilder, global.isEqual, global.LocalStorageManager, global.LeanplumRequest);
    global.PushManager = mod.exports;
  }
})(this, function (module, exports, _Constants, _ArgsBuilder, _isEqual, _LocalStorageManager, _LeanplumRequest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _isEqual2 = _interopRequireDefault(_isEqual);

  var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

  var _LeanplumRequest2 = _interopRequireDefault(_LeanplumRequest);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var APPLICATION_SERVER_PUBLIC_KEY = 'BInWPpWntfR39rgXSP04pqdmEdDGa50z6zqbMvxyxJCwzXIuSpSh8C888-CfJ82WELl7Xe8cjA' + 'nfCt-3vK0Ci68';

  var isSubscribed = false;
  var serviceWorkerRegistration = null;

  /**
   * Push Manager handles the registration and subscription for web push.
   */

  var PushManager = function () {
    function PushManager() {
      _classCallCheck(this, PushManager);
    }

    _createClass(PushManager, null, [{
      key: 'isWebPushSupported',
      value: function isWebPushSupported() {
        return navigator && navigator.serviceWorker && 'serviceWorker' in navigator && 'PushManager' in window;
      }
    }, {
      key: 'isWebPushSubscribed',
      value: function isWebPushSubscribed() {
        if (!PushManager.isWebPushSupported()) {
          return new Promise(function (resolve) {
            resolve(false);
          });
        }
        return PushManager.getServiceWorkerRegistration().then(function (registration) {
          return new Promise(function (resolve) {
            if (!registration) {
              resolve(false);
            } else {
              /** @namespace registration.pushManager The push manager object of the browser. **/
              /** @namespace registration.pushManager.getSubscription **/
              registration.pushManager.getSubscription().then(function (subscription) {
                isSubscribed = subscription !== null;
                if (isSubscribed) {
                  PushManager.updateNewSubscriptionOnServer(subscription);
                }
                resolve(isSubscribed);
              });
            }
          });
        });
      }
    }, {
      key: 'register',
      value: function register(serviceWorkerUrl, callback) {
        if (!PushManager.isWebPushSupported()) {
          console.log('Leanplum: Push messaging is not supported.');
          return callback(false);
        }
        navigator.serviceWorker.register(serviceWorkerUrl ? serviceWorkerUrl : '/sw.min.js', null).then(function (registration) {
          serviceWorkerRegistration = registration;

          var serviceWorker = void 0;
          if (registration.installing) {
            serviceWorker = registration.installing;
          } else if (registration.waiting) {
            serviceWorker = registration.waiting;
          } else if (registration.active) {
            serviceWorker = registration.active;
          }

          if (!serviceWorker) {
            return;
          }

          var subscribe = function subscribe() {
            // Set the initial subscription value
            serviceWorkerRegistration.pushManager.getSubscription().then(function (subscription) {
              isSubscribed = !(subscription === null);
              if (isSubscribed) {
                PushManager.updateNewSubscriptionOnServer(subscription);
              }
              if (callback) {
                return callback(isSubscribed);
              }
            });
          };

          if (serviceWorker.state === 'activated') {
            return subscribe();
          }

          serviceWorker.addEventListener('statechange', function (event) {
            if (event.target.state !== 'activated') {
              return;
            }

            subscribe();
          });
        }).catch(function (error) {
          console.log('Leanplum: Service Worker Error: ', error);
        });
      }
    }, {
      key: 'subscribeUser',
      value: function subscribeUser() {
        var applicationServerKey = PushManager.urlB64ToUint8Array(APPLICATION_SERVER_PUBLIC_KEY);
        return new Promise(function (resolve, reject) {
          /** @namespace serviceWorkerRegistration.pushManager.subscribe Subscribe to push. **/
          return serviceWorkerRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerKey
          }).then(function (subscription) {
            if (subscription) {
              PushManager.updateNewSubscriptionOnServer(subscription);
              isSubscribed = true;
              return resolve(isSubscribed);
            }
            isSubscribed = false;
            return reject();
          }).catch(function (err) {
            return reject('Leanplum: Failed to subscribe the user: ' + err);
          });
        });
      }
    }, {
      key: 'unsubscribeUser',
      value: function unsubscribeUser() {
        return new Promise(function (resolve, reject) {
          PushManager.isWebPushSubscribed().then(function (subscribed) {
            if (!subscribed) {
              return resolve();
            }

            serviceWorkerRegistration.pushManager.getSubscription().then(function (subscription) {
              if (subscription) {
                /** @namespace serviceWorkerRegistration.pushManager.unsubscribe Unsubscribe to
                 *  push. **/
                return subscription.unsubscribe();
              }
              return reject();
            }).catch(function (error) {
              reject('Leanplum: Error unsubscribing: ' + error);
            }).then(function (success) {
              if (success) {
                isSubscribed = false;
                return resolve();
              }
              return reject();
            });
          }, function (error) {
            return reject();
          });
        });
      }
    }, {
      key: 'getServiceWorkerRegistration',
      value: function getServiceWorkerRegistration() {
        return new Promise(function (resolve) {
          if (serviceWorkerRegistration) {
            resolve(serviceWorkerRegistration);
          } else {
            /** @namespace navigator.serviceWorker.getRegistration Retrieves the  push registration
             * from the browser. **/
            navigator.serviceWorker.getRegistration().then(function (registration) {
              serviceWorkerRegistration = registration;
              resolve(registration);
            });
          }
        });
      }
    }, {
      key: 'urlB64ToUint8Array',
      value: function urlB64ToUint8Array(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
      }
    }, {
      key: 'prepareSubscription',
      value: function prepareSubscription(subscription) {
        var key = subscription.getKey ? subscription.getKey('p256dh') : '';
        var auth = subscription.getKey ? subscription.getKey('auth') : '';
        // noinspection ES6ModulesDependencies
        var keyAscii = btoa(Reflect.apply(String.fromCharCode, null, new Uint8Array(key)));
        // noinspection ES6ModulesDependencies
        var authAscii = btoa(Reflect.apply(String.fromCharCode, null, new Uint8Array(auth)));
        return {
          endpoint: subscription.endpoint,
          key: keyAscii,
          auth: authAscii
        };
      }
    }, {
      key: 'updateNewSubscriptionOnServer',
      value: function updateNewSubscriptionOnServer(subscription) {
        if (subscription) {
          var preparedSubscription = PushManager.prepareSubscription(subscription);
          var preparedSubscriptionString = JSON.stringify(preparedSubscription);
          var existingSubscriptionString = _LocalStorageManager2.default.getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.PUSH_SUBSCRIPTION);
          if (!(0, _isEqual2.default)(existingSubscriptionString, preparedSubscriptionString)) {
            _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.PUSH_SUBSCRIPTION, preparedSubscriptionString);
            PushManager.setSubscription(preparedSubscriptionString);
          }
        }
      }
    }, {
      key: 'setSubscription',
      value: function setSubscription(subscription) {
        if (!subscription) {
          return;
        }
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.SET_DEVICE_ATTRIBUTES, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.WEB_PUSH_SUBSCRIPTION, subscription), {
          queued: false,
          sendNow: true
        });
      }
    }]);

    return PushManager;
  }();

  exports.default = PushManager;
  module.exports = exports['default'];
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(12), __webpack_require__(3), __webpack_require__(32), __webpack_require__(34), __webpack_require__(31), __webpack_require__(5), __webpack_require__(13), __webpack_require__(4), __webpack_require__(33), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./InternalState'), require('./ArgsBuilder'), require('./BrowserDetector'), require('./PushManager'), require('./ActionManager'), require('./LocalStorageManager'), require('./VarCache'), require('./LeanplumRequest'), require('./LeanplumSocket'), require('./Events'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.InternalState, global.ArgsBuilder, global.BrowserDetector, global.PushManager, global.ActionManager, global.LocalStorageManager, global.VarCache, global.LeanplumRequest, global.LeanplumSocket, global.Events);
    global.Leanplum = mod.exports;
  }
})(this, function (module, exports, _Constants, _InternalState, _ArgsBuilder, _BrowserDetector, _PushManager, _ActionManager, _LocalStorageManager, _VarCache, _LeanplumRequest, _LeanplumSocket, _Events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  var _InternalState2 = _interopRequireDefault(_InternalState);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _BrowserDetector2 = _interopRequireDefault(_BrowserDetector);

  var _PushManager2 = _interopRequireDefault(_PushManager);

  var _ActionManager2 = _interopRequireDefault(_ActionManager);

  var _LocalStorageManager2 = _interopRequireDefault(_LocalStorageManager);

  var _VarCache2 = _interopRequireDefault(_VarCache);

  var _LeanplumRequest2 = _interopRequireDefault(_LeanplumRequest);

  var _LeanplumSocket2 = _interopRequireDefault(_LeanplumSocket);

  var _Events2 = _interopRequireDefault(_Events);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _browserDetector = new _BrowserDetector2.default();

  /**
   * @preserve Leanplum Javascript SDK.
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
      value: function setApiPath(apiPath) {
        if (!_LeanplumRequest2.default.apiPath) {
          return;
        }
        _LeanplumRequest2.default.apiPath = apiPath;
      }
    }, {
      key: 'setEmail',
      value: function setEmail(email) {
        Leanplum._email = email;
      }
    }, {
      key: 'setNetworkTimeout',
      value: function setNetworkTimeout(seconds) {
        _LeanplumRequest2.default.setNetworkTimeout(seconds);
      }
    }, {
      key: 'setVariantDebugInfoEnabled',
      value: function setVariantDebugInfoEnabled(variantDebugInfoEnabled) {
        _InternalState2.default.setVariantDebugInfoEnabled(variantDebugInfoEnabled);
      }
    }, {
      key: 'getVariantDebugInfo',
      value: function getVariantDebugInfo() {
        return _VarCache2.default.getVariantDebugInfo();
      }
    }, {
      key: 'setAppIdForDevelopmentMode',
      value: function setAppIdForDevelopmentMode(appId, accessKey) {
        _LeanplumRequest2.default.appId = appId;
        _LeanplumRequest2.default.clientKey = accessKey;
        _InternalState2.default.devMode = true;
      }
    }, {
      key: 'setAppIdForProductionMode',
      value: function setAppIdForProductionMode(appId, accessKey) {
        _LeanplumRequest2.default.appId = appId;
        _LeanplumRequest2.default.clientKey = accessKey;
        _InternalState2.default.devMode = false;
      }
    }, {
      key: 'setSocketHost',
      value: function setSocketHost(host) {
        _LeanplumSocket2.default.socketHost = host;
      }
    }, {
      key: 'setDeviceId',
      value: function setDeviceId(deviceId) {
        _LeanplumRequest2.default.deviceId = deviceId;
      }
    }, {
      key: 'setAppVersion',
      value: function setAppVersion(versionName) {
        _LeanplumRequest2.default.versionName = versionName;
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
        _VarCache2.default.setVariables(variables);
      }
    }, {
      key: 'setRequestBatching',
      value: function setRequestBatching(batchEnabled, cooldownSeconds) {
        _LeanplumRequest2.default.batchEnabled = batchEnabled;
        _LeanplumRequest2.default.batchCooldown = cooldownSeconds;
      }
    }, {
      key: 'getVariables',
      value: function getVariables() {
        return _VarCache2.default.getVariables();
      }
    }, {
      key: 'getVariable',
      value: function getVariable() {
        var current = Leanplum.getVariables();

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        for (var i = 0; i < args.length; i++) {
          current = current[args[i]];
        }
        return current;
      }
    }, {
      key: 'getVariants',
      value: function getVariants() {
        return _VarCache2.default.variants || [];
      }
    }, {
      key: 'addStartResponseHandler',
      value: function addStartResponseHandler(handler) {
        _InternalState2.default.addStartResponseHandler(handler);
      }
    }, {
      key: 'addVariablesChangedHandler',
      value: function addVariablesChangedHandler(handler) {
        _InternalState2.default.addVariablesChangedHandler(handler);
      }
    }, {
      key: 'removeStartResponseHandler',
      value: function removeStartResponseHandler(handler) {
        _InternalState2.default.removeStartResponseHandler(handler);
      }
    }, {
      key: 'removeVariablesChangedHandler',
      value: function removeVariablesChangedHandler(handler) {
        _InternalState2.default.removeVariablesChangedHandler(handler);
      }
    }, {
      key: 'forceContentUpdate',
      value: function forceContentUpdate(callback) {
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.GET_VARS, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false).add(_Constants2.default.PARAMS.INCLUDE_VARIANT_DEBUG_INFO, _InternalState2.default.variantDebugInfoEnabled), {
          queued: false,
          sendNow: true,
          response: function response(_response) {
            var getVarsResponse = _LeanplumRequest2.default.getLastResponse(_response);
            var isSuccess = _LeanplumRequest2.default.isResponseSuccess(getVarsResponse);
            if (isSuccess) {
              _VarCache2.default.applyDiffs(getVarsResponse[_Constants2.default.KEYS.VARS], getVarsResponse[_Constants2.default.KEYS.VARIANTS], getVarsResponse[_Constants2.default.KEYS.ACTION_METADATA]);
              _VarCache2.default.variantDebugInfo = getVarsResponse[_Constants2.default.KEYS.VARIANT_DEBUG_INFO];
            }
            if (callback) {
              callback(isSuccess);
            }
          }
        });
      }
    }, {
      key: 'start',
      value: function start(userId, userAttributes, callback) {
        // Overloads.
        if (typeof userId === 'function') {
          callback = userId;
          userAttributes = {};
          userId = null;
        } else if ((typeof userId === 'undefined' ? 'undefined' : _typeof(userId)) === 'object' && userId !== null && userId !== undefined) {
          callback = userAttributes;
          userAttributes = userId;
          userId = null;
        } else if (typeof userAttributes === 'function') {
          callback = userAttributes;
          userAttributes = {};
        }
        _LeanplumRequest2.default.userId = userId;
        if (callback) {
          Leanplum.addStartResponseHandler(callback);
        }

        _VarCache2.default.onUpdate = function () {
          _InternalState2.default.triggerVariablesChangedHandlers();
        };

        var args = new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.USER_ATTRIBUTES, JSON.stringify(userAttributes)).add(_Constants2.default.PARAMS.COUNTRY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.REGION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.CITY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.LOCATION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.SYSTEM_NAME, Leanplum._systemName || _browserDetector.OS).add(_Constants2.default.PARAMS.SYSTEM_VERSION, (Leanplum._systemVersion || '').toString()).add(_Constants2.default.PARAMS.BROWSER_NAME, _browserDetector.browser).add(_Constants2.default.PARAMS.BROWSER_VERSION, _browserDetector.version.toString()).add(_Constants2.default.PARAMS.LOCALE, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.DEVICE_NAME, Leanplum._deviceName || _browserDetector.browser + ' ' + _browserDetector.version).add(_Constants2.default.PARAMS.DEVICE_MODEL, Leanplum._deviceModel || 'Web Browser').add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false).add(_Constants2.default.PARAMS.INCLUDE_VARIANT_DEBUG_INFO, _InternalState2.default.variantDebugInfoEnabled);

        // Issue request.
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.START, args, {
          queued: true,
          sendNow: true,
          response: function response(_response2) {
            _InternalState2.default.hasStarted = true;
            var startResponse = _LeanplumRequest2.default.getLastResponse(_response2);
            if (_LeanplumRequest2.default.isResponseSuccess(startResponse)) {
              _InternalState2.default.startSuccessful = true;
              if (_InternalState2.default.devMode) {
                var latestVersion = startResponse[_Constants2.default.KEYS.LATEST_VERSION];
                if (latestVersion) {
                  console.log('A newer version of Leanplum, ' + latestVersion + ', is available. Go to' + 'leanplum.com to download it.');
                }
                _LeanplumSocket2.default.connect();
              }

              _VarCache2.default.applyDiffs(startResponse[_Constants2.default.KEYS.VARS], startResponse[_Constants2.default.KEYS.VARIANTS], startResponse[_Constants2.default.KEYS.ACTION_METADATA]);
              _VarCache2.default.variantDebugInfo = startResponse[_Constants2.default.KEYS.VARIANT_DEBUG_INFO];
              _VarCache2.default.token = startResponse[_Constants2.default.KEYS.TOKEN];

              _Events2.default.publish('start/messages', {
                messages: Leanplum.getFilteredResults(startResponse[_Constants2.default.KEYS.MESSAGES], 'start')
              });
            } else {
              _InternalState2.default.startSuccessful = false;
              _VarCache2.default.loadDiffs();
            }
            _InternalState2.default.triggerStartHandlers();
          }
        });
      }
    }, {
      key: 'getFilteredResults',
      value: function getFilteredResults() {
        var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var verb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var noun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

        if (messages === null) {
          return [];
        }
        return _ActionManager2.default.filterMessages(messages, trigger, verb, noun, params);
      }
    }, {
      key: 'startFromCache',
      value: function startFromCache(userId, userAttributes, callback) {
        // Overloads.
        if (typeof userId === 'function') {
          callback = userId;
          // noinspection JSUnusedAssignment
          userAttributes = {};
          userId = null;
        } else if ((typeof userId === 'undefined' ? 'undefined' : _typeof(userId)) === 'object' && userId !== null && userId !== undefined) {
          callback = userAttributes;
          // noinspection JSUnusedAssignment
          userAttributes = userId;
          userId = null;
        } else if (typeof userAttributes === 'function') {
          callback = userAttributes;
          // noinspection JSUnusedAssignment
          userAttributes = {};
        }
        _LeanplumRequest2.default.userId = userId;
        if (callback) {
          Leanplum.addStartResponseHandler(callback);
        }

        _InternalState2.default.hasStarted = true;
        _InternalState2.default.startSuccessful = true;
        if (_InternalState2.default.devMode) {
          _LeanplumSocket2.default.connect();
        }
        _VarCache2.default.loadDiffs();
        _InternalState2.default.triggerStartHandlers();
      }
    }, {
      key: 'stop',
      value: function stop() {
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.STOP, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: 'pauseSession',
      value: function pauseSession() {
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.PAUSE_SESSION, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: 'resumeSession',
      value: function resumeSession() {
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.RESUME_SESSION, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: 'pauseState',
      value: function pauseState() {
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.PAUSE_STATE, undefined, {
          queued: true
        });
      }
    }, {
      key: 'resumeState',
      value: function resumeState() {
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.RESUME_STATE, undefined, {
          queued: true
        });
      }
    }, {
      key: 'setUserId',
      value: function setUserId(userId) {
        Leanplum.setUserAttributes(userId);
      }
    }, {
      key: 'setUserAttributes',
      value: function setUserAttributes(userId, userAttributes) {
        if (userAttributes === undefined) {
          if ((typeof userId === 'undefined' ? 'undefined' : _typeof(userId)) === 'object') {
            userAttributes = userId;
            userId = undefined;
          } else if (typeof userId !== 'string') {
            console.log('Leanplum: setUserAttributes expects a string or an ' + 'object');
            return;
          }
        }
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.SET_USER_ATTRIBUTES, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.USER_ATTRIBUTES, userAttributes ? JSON.stringify(userAttributes) : undefined).add(_Constants2.default.PARAMS.NEW_USER_ID, userId), {
          queued: true
        });
        if (userId) {
          _LeanplumRequest2.default.userId = userId;
          _LocalStorageManager2.default.saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, _LeanplumRequest2.default.userId);
        }
      }
    }, {
      key: 'getFileUrl',
      value: function getFileUrl(fileName) {
        // noinspection Annotator
        return _LeanplumRequest2.default.generateRequestUrl(_Constants2.default.METHODS.DOWNLOAD_FILE, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.FILENAME, fileName));
      }
    }, {
      key: 'trackMessage',
      value: function trackMessage(event, messageId) {
        if (event === '') {
          _VarCache2.default.addMessageView(messageId); // track view track event is '' aka 'View'
        }
        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.TRACK, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.EVENT, event).add(_Constants2.default.PARAMS.MESSAGE_ID, messageId), {
          queued: true
        });
      }
    }, {
      key: 'track',
      value: function track(event, value, info, params) {
        // Overloads.
        // object && !null && !undefined -> params
        // string -> info, params
        // *, object && !null && !undefined -> value, params
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && value !== undefined) {
          params = value;
          info = undefined;
          value = undefined;
        } else if (typeof value === 'string') {
          params = info;
          info = value;
          value = undefined;
        } else if ((typeof info === 'undefined' ? 'undefined' : _typeof(info)) === 'object' && info !== null && info !== undefined) {
          params = info;
          info = undefined;
        }

        _Events2.default.publish('track', {
          event: event,
          params: params
        });

        // noinspection Annotator
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.TRACK, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.EVENT, event).add(_Constants2.default.PARAMS.VALUE, value || 0.0).add(_Constants2.default.PARAMS.INFO, info).add(_Constants2.default.PARAMS.PARAMS, JSON.stringify(params)), {
          queued: true
        });
      }
    }, {
      key: 'advanceTo',
      value: function advanceTo(state, info, params) {
        // Overloads.
        // string|null|undefined, * -> info, params
        // object && !null && !undefined -> params
        if ((typeof info === 'undefined' ? 'undefined' : _typeof(info)) === 'object' && info !== null && info !== undefined) {
          params = info;
          info = undefined;
        }

        _LeanplumRequest2.default.request(_Constants2.default.METHODS.ADVANCE, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.STATE, state).add(_Constants2.default.PARAMS.INFO, info).add(_Constants2.default.PARAMS.PARAMS, JSON.stringify(params)), {
          queued: true
        });
      }
    }, {
      key: 'isWebPushSupported',
      value: function isWebPushSupported() {
        return _PushManager2.default.isWebPushSupported();
      }
    }, {
      key: 'isWebPushSubscribed',
      value: function isWebPushSubscribed() {
        return _PushManager2.default.isWebPushSubscribed();
      }
    }, {
      key: 'registerForWebPush',
      value: function registerForWebPush(serviceWorkerUrl) {
        return new Promise(function (resolve, reject) {
          if (_PushManager2.default.isWebPushSupported()) {
            return _PushManager2.default.register(serviceWorkerUrl, function (isSubscribed) {
              if (isSubscribed) {
                return resolve(true);
              }
              return _PushManager2.default.subscribeUser();
            });
          } else {
            return reject('Leanplum: WebPush is not supported.');
          }
        });
      }
    }, {
      key: 'unregisterFromWebPush',
      value: function unregisterFromWebPush() {
        return _PushManager2.default.unsubscribeUser();
      }
    }, {
      key: 'clearUserContent',
      value: function clearUserContent() {
        _VarCache2.default.clearUserContent();
      }
    }, {
      key: 'getEvents',
      value: function getEvents() {
        return _Events2.default;
      }
    }]);

    return Leanplum;
  }();

  exports.default = Leanplum;
  module.exports = exports['default'];
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Network'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Network);
    global.SocketIoClient = mod.exports;
  }
})(this, function (module, exports, _Network) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Network2 = _interopRequireDefault(_Network);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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
        // eslint-disable-next-line consistent-this
        var self = this;
        self.connecting = true;
        _Network2.default.ajax('POST', 'https://' + socketHost + '/socket.io/1', '', function (line) {
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
            var messageParts = event.data.split(':');
            var code = parseInt(messageParts[0]);
            if (code === 2) {
              self.socket.send('2::');
            } else if (code === 5) {
              var messageId = messageParts[1];
              var data = JSON.parse(messageParts.slice(3).join(':'));
              var messageEvent = data.name;
              var args = data.args;
              if (messageId) {
                self.socket.send('6:::' + messageId);
              }
              if (self.onmessage) {
                self.onmessage(messageEvent, args);
              }
            } else if (code === 7) {
              console.log('Socket error: ' + event.data);
            }
          };
          self.socket.onerror = function (event) {
            self.socket.close();
            if (self.onerror) {
              self.onerror(event);
            }
          };
        }, null, false, true // null, queued, plainText
        );
      }
    }, {
      key: 'send',
      value: function send(name, args) {
        if (!this.connected) {
          console.log('Leanplum: Socket is not connected.');
          return;
        }
        var argsJson = JSON.stringify({
          name: name,
          args: args
        });
        this.socket.send('5:::' + argsJson);
      }
    }]);

    return SocketIoClient;
  }();

  exports.default = SocketIoClient;
  module.exports = exports['default'];
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(67),
    hashDelete = __webpack_require__(68),
    hashGet = __webpack_require__(69),
    hashHas = __webpack_require__(70),
    hashSet = __webpack_require__(71);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(19),
    setCacheAdd = __webpack_require__(91),
    setCacheHas = __webpack_require__(92);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    stackClear = __webpack_require__(94),
    stackDelete = __webpack_require__(95),
    stackGet = __webpack_require__(96),
    stackHas = __webpack_require__(97),
    stackSet = __webpack_require__(98);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(56),
    isArguments = __webpack_require__(99),
    isArray = __webpack_require__(16),
    isBuffer = __webpack_require__(24),
    isIndex = __webpack_require__(72),
    isTypedArray = __webpack_require__(29);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(47),
    isArray = __webpack_require__(16);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObjectLike = __webpack_require__(11);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(52),
    isObjectLike = __webpack_require__(11);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(42),
    equalArrays = __webpack_require__(20),
    equalByTag = __webpack_require__(60),
    equalObjects = __webpack_require__(61),
    getTag = __webpack_require__(65),
    isArray = __webpack_require__(16),
    isBuffer = __webpack_require__(24),
    isTypedArray = __webpack_require__(29);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(26),
    isMasked = __webpack_require__(74),
    isObject = __webpack_require__(28),
    toSource = __webpack_require__(22);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isLength = __webpack_require__(27),
    isObjectLike = __webpack_require__(11);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(75),
    nativeKeys = __webpack_require__(87);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(15),
    Uint8Array = __webpack_require__(43),
    eq = __webpack_require__(23),
    equalArrays = __webpack_require__(20),
    mapToArray = __webpack_require__(86),
    setToArray = __webpack_require__(93);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(62);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(49),
    getSymbols = __webpack_require__(64),
    keys = __webpack_require__(101);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(15);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(45),
    stubArray = __webpack_require__(102);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(37),
    Map = __webpack_require__(14),
    Promise = __webpack_require__(39),
    Set = __webpack_require__(40),
    WeakMap = __webpack_require__(44),
    baseGetTag = __webpack_require__(8),
    toSource = __webpack_require__(22);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(59);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(38),
    ListCache = __webpack_require__(6),
    Map = __webpack_require__(14);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(90);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(21);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 89 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    Map = __webpack_require__(14),
    MapCache = __webpack_require__(19);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(50),
    isObjectLike = __webpack_require__(11);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(26),
    isLength = __webpack_require__(27);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(46),
    baseKeys = __webpack_require__(55),
    isArrayLike = __webpack_require__(100);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzYWU2NWQ3ZDc2MjA1NTY1ZmY4NyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnRlcm5hbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9WYXJDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQnJvd3NlckRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVNvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHVzaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYW5wbHVtLmpzIiwid2VicGFjazovLy8uL3NyYy9Tb2NrZXRJb0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiTUVUSE9EUyIsIlNUQVJUIiwiU1RPUCIsIkFEVkFOQ0UiLCJUUkFDSyIsIlBBVVNFX1NFU1NJT04iLCJSRVNVTUVfU0VTU0lPTiIsIlBBVVNFX1NUQVRFIiwiUkVTVU1FX1NUQVRFIiwiRE9XTkxPQURfRklMRSIsIk1VTFRJIiwiU0VUX1ZBUlMiLCJHRVRfVkFSUyIsIlNFVF9VU0VSX0FUVFJJQlVURVMiLCJTRVRfREVWSUNFX0FUVFJJQlVURVMiLCJVUExPQURfRklMRSIsIlJFR0lTVEVSX0RFVklDRSIsIlNES19WRVJTSU9OIiwiQ0xJRU5UIiwiUEFSQU1TIiwiQUNUSU9OIiwiQVBQX0lEIiwiQ0xJRU5UX0tFWSIsIkRFVklDRV9JRCIsIlVTRVJfSUQiLCJORVdfVVNFUl9JRCIsIkRFVl9NT0RFIiwiVkVSU0lPTl9OQU1FIiwiU1lTVEVNX05BTUUiLCJTWVNURU1fVkVSU0lPTiIsIkJST1dTRVJfTkFNRSIsIkJST1dTRVJfVkVSU0lPTiIsIkRFVklDRV9OQU1FIiwiREVWSUNFX01PREVMIiwiVVNFUl9BVFRSSUJVVEVTIiwiTE9DQUxFIiwiQ09VTlRSWSIsIlJFR0lPTiIsIkNJVFkiLCJMT0NBVElPTiIsIlNUQVRFIiwiSU5GTyIsIkVWRU5UIiwiVkFMVUUiLCJGSUxFTkFNRSIsIlRJTUUiLCJEQVRBIiwiVkFSUyIsIkZJTEUiLCJTSVpFIiwiVkFSSUFUSU9OIiwiSEFTSCIsIkVNQUlMIiwiVkFSSUFCTEVTIiwiSU5DTFVERV9ERUZBVUxUUyIsIklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPIiwiV0VCX1BVU0hfU1VCU0NSSVBUSU9OIiwiTUVTU0FHRV9JRCIsIktFWVMiLCJJU19SRUdJU1RFUkVEIiwiTEFURVNUX1ZFUlNJT04iLCJWQVJJQU5UUyIsIlZBUklBTlRfREVCVUdfSU5GTyIsIkFDVElPTl9NRVRBREFUQSIsIlRPS0VOIiwiTUVTU0FHRVMiLCJERUZBVUxUX0tFWVMiLCJDT1VOVCIsIklURU0iLCJQVVNIX1NVQlNDUklQVElPTiIsIk1FU1NBR0VfVklFVyIsIlZBTFVFUyIsIkRFVEVDVCIsIkFyZ3NCdWlsZGVyIiwiYXJnU3RyaW5nIiwiYXJnVmFsdWVzIiwia2V5IiwidmFsdWUiLCJlbmNvZGVkVXJpQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsIl9ib2R5IiwiYXBwSWQiLCJjbGllbnRLZXkiLCJhZGQiLCJsYXN0UmVxdWVzdFRpbWUiLCJ1bmRlZmluZWQiLCJjb29sZG93blRpbWVvdXQiLCJMZWFucGx1bVJlcXVlc3QiLCJhY3Rpb24iLCJwYXJhbXMiLCJvcHRpb25zIiwiZGV2aWNlSWQiLCJnZXRGcm9tTG9jYWxTdG9yYWdlIiwiaWQiLCJwb3NzaWJsZSIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzYXZlVG9Mb2NhbFN0b3JhZ2UiLCJ1c2VySWQiLCJhcmdzQnVpbGRlciIsImF0dGFjaEFwaUtleXMiLCJ2ZXJzaW9uTmFtZSIsImRldk1vZGUiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZXJyb3IiLCJlcnIiLCJjb25zb2xlIiwiYWpheCIsImFwaVBhdGgiLCJidWlsZCIsInF1ZXVlZCIsInNlbmROb3ciLCJiYXRjaEVuYWJsZWQiLCJzZW5kVW5zZW50UmVxdWVzdHMiLCJyZXF1ZXN0c1RvU2VuZCIsInBvcFVuc2VudFJlcXVlc3RzIiwicmVxdWVzdERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwibXVsdGlSZXF1ZXN0QXJncyIsImJhdGNoQ29vbGRvd24iLCJub3ciLCJzZXRUaW1lb3V0Iiwic2F2ZVJlcXVlc3RGb3JMYXRlciIsImJ1aWxkRGljdCIsInF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJzZWNvbmRzIiwic2V0TmV0d29ya1RpbWVvdXQiLCJhcmdzIiwiY291bnQiLCJpdGVtS2V5IiwicmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSIsInJlcXVlc3RBcmdzIiwicGFyc2UiLCJwdXNoIiwiaWdub3JlZCIsImluZGV4IiwibnVtUmVzcG9uc2VzIiwiZ2V0UmVzcG9uc2VBdCIsIm1lc3NhZ2UiLCJsb2NhbFN0b3JhZ2VFbmFibGVkIiwiYWx0ZXJuYXRlTG9jYWxTdG9yYWdlIiwiTG9jYWxTdG9yYWdlTWFuYWdlciIsImxvY2FsU3RvcmFnZSIsImUiLCJyZW1vdmVJdGVtIiwiSW50ZXJuYWxTdGF0ZSIsImhhbmRsZXIiLCJzdGFydEhhbmRsZXJzIiwiaGFzU3RhcnRlZCIsInN0YXJ0U3VjY2Vzc2Z1bCIsImlkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJ2YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMiLCJoYXNSZWNlaXZlZERpZmZzIiwidmFyaWFudERlYnVnSW5mb0VuYWJsZWQiLCJWYXJDYWNoZSIsImRpZmZzIiwidmFyaWFudHMiLCJhY3Rpb25NZXRhZGF0YSIsIm1lcmdlZCIsIm1lcmdlSGVscGVyIiwidmFyaWFibGVzIiwic2F2ZURpZmZzIiwib25VcGRhdGUiLCJhcHBseURpZmZzIiwidG9rZW4iLCJ2YXJpYW50RGVidWdJbmZvIiwibG9nIiwibWVzc2FnZUlkIiwibWVzc2FnZVZpZXciLCJnZXRNZXNzYWdlc1ZpZXciLCJtZXNzYWdlc1ZpZXciLCJtZXNzYWdlVmlld1BlclNlc3Npb24iLCJtZXNzYWdlc1ZpZXdQZXJTZXNzaW9uIiwidCIsInNlc3Npb24iLCJyZXF1ZXN0IiwidmFycyIsImRpZmYiLCJvYmpJdGVyYXRvciIsIm9iaiIsImYiLCJBcnJheSIsImF0dHIiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ2YXJzSXRlcmF0b3IiLCJkaWZmSXRlcmF0b3IiLCJpc0FycmF5IiwiYXR0cmlidXRlIiwidmFyU3Vic2NyaXB0Iiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJzdWJzY3JpcHQiLCJkaWZmVmFsdWUiLCJ0b3BpY3MiLCJzdWJzY3JpYmUiLCJ0b3BpYyIsImxpc3RlbmVyIiwicmVtb3ZlIiwicHVibGlzaCIsImluZm8iLCJmb3JFYWNoIiwiaXRlbSIsInJlcXVlc3RRdWV1ZSIsIm5ldHdvcmtUaW1lb3V0U2Vjb25kcyIsIk5ldHdvcmsiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwicGxhaW5UZXh0IiwicnVubmluZ1JlcXVlc3QiLCJlbnF1ZXVlUmVxdWVzdCIsImFyZ3VtZW50cyIsIlhEb21haW5SZXF1ZXN0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsIlJlZmxlY3QiLCJhcHBseSIsImFqYXhJRTgiLCJoYW5kbGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmFuQ2FsbGJhY2siLCJyZXNwb25zZVRleHQiLCJzdGF0dXMiLCJkZXF1ZXVlUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImFib3J0IiwieGRyIiwib25sb2FkIiwib25lcnJvciIsIm9udGltZW91dCIsIm9ucHJvZ3Jlc3MiLCJ0aW1lb3V0IiwicmVxdWVzdEFyZ3VtZW50cyIsInNoaWZ0IiwiZmlsdGVyQnlUcmlnZ2VycyIsInRyaWdnZXJzIiwid2hlblRyaWdnZXJzIiwiY2hpbGRyZW4iLCJmaWx0ZXJlZEJ5VHJpZ2dlcnMiLCJmaWx0ZXIiLCJ0cmlnZ2VyIiwiaW5jbHVkZXMiLCJzdWJqZWN0IiwidmVyYkZpbHRlciIsImZpbHRlckJ5VmVyYnMiLCJ2ZXJiIiwiZXZhbHVhdG9yIiwidHJpZ2dlclZlcmJFdmFsdWF0b3JzIiwibm91biIsIm9iamVjdHMiLCJmaWx0ZXJCeUxpbWl0cyIsImxpbWl0cyIsIndoZW5MaW1pdHMiLCJldmVyeSIsImxpbWl0IiwidmVyYkV2YWx1YXRvciIsImxpbWl0VmVyYkV2YWx1YXRvcnMiLCJjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQiLCJzaW5jZSIsIml0ZXJhdG9yIiwiZmlsdGVyQnlMaW1pdFRpbWVzIiwibGltaXRUaW1lIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInRyaWdnZXJzV2l0aFBhcmFtZXRlciIsInBhcmFtVmFsdWUiLCJwYXJhbU5hbWUiLCJjaGFuZ2VzVG8iLCJ0byIsImNoYW5nZXNGcm9tVG8iLCJmcm9tIiwibGltaXRVc2VyIiwibWF4VmlldyIsImdldE1lc3NhZ2VWaWV3IiwibGltaXRNb250aCIsImFtb3VudCIsInJlZHVjZSIsImxpbWl0V2VlayIsImxpbWl0RGF5IiwibGltaXRIb3VyIiwibGltaXRNaW51dGUiLCJsaW1pdFNlY29uZCIsImxpbWl0U2Vzc2lvbiIsIkFjdGlvbk1hbmFnZXIiLCJtZXNzYWdlcyIsImZpbHRlcmVkTWVzc2FnZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZGF0YUJyb3dzZXIiLCJzdHJpbmciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdWJTdHJpbmciLCJpZGVudGl0eSIsInZlcnNpb25TZWFyY2giLCJ2ZW5kb3IiLCJwcm9wIiwid2luZG93Iiwib3BlcmEiLCJkYXRhT1MiLCJwbGF0Zm9ybSIsIkJyb3dzZXJEZXRlY3RvciIsImJyb3dzZXIiLCJfc2VhcmNoU3RyaW5nIiwidmVyc2lvbiIsIl9zZWFyY2hWZXJzaW9uIiwiYXBwVmVyc2lvbiIsIk9TIiwiZGF0YVN0cmluZyIsImRhdGFQcm9wIiwidmVyc2lvblNlYXJjaFN0cmluZyIsInBhcnNlRmxvYXQiLCJMZWFucGx1bVNvY2tldCIsIldlYlNvY2tldCIsImNsaWVudCIsImF1dGhTZW50Iiwib25vcGVuIiwiZXZlbnQiLCJvbm1lc3NhZ2UiLCJnZXRWYXJzUmVzcG9uc2UiLCJnZXRMYXN0UmVzcG9uc2UiLCJ2YWx1ZXMiLCJzZW5kVmFyaWFibGVzIiwiYWxlcnQiLCJlbWFpbCIsIm9uY2xvc2UiLCJjb25uZWN0Iiwic29ja2V0SG9zdCIsInNldEludGVydmFsIiwiY29ubmVjdGVkIiwiY29ubmVjdGluZyIsIkFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZIiwiaXNTdWJzY3JpYmVkIiwic2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsIlB1c2hNYW5hZ2VyIiwic2VydmljZVdvcmtlciIsImlzV2ViUHVzaFN1cHBvcnRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJwdXNoTWFuYWdlciIsImdldFN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbiIsInVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyIiwic2VydmljZVdvcmtlclVybCIsImNhbGxiYWNrIiwicmVnaXN0ZXIiLCJpbnN0YWxsaW5nIiwid2FpdGluZyIsImFjdGl2ZSIsInN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImNhdGNoIiwiYXBwbGljYXRpb25TZXJ2ZXJLZXkiLCJ1cmxCNjRUb1VpbnQ4QXJyYXkiLCJyZWplY3QiLCJ1c2VyVmlzaWJsZU9ubHkiLCJpc1dlYlB1c2hTdWJzY3JpYmVkIiwic3Vic2NyaWJlZCIsInVuc3Vic2NyaWJlIiwiZ2V0UmVnaXN0cmF0aW9uIiwiYmFzZTY0U3RyaW5nIiwicGFkZGluZyIsInJlcGVhdCIsImJhc2U2NCIsInJlcGxhY2UiLCJyYXdEYXRhIiwiYXRvYiIsIm91dHB1dEFycmF5IiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJnZXRLZXkiLCJhdXRoIiwia2V5QXNjaWkiLCJidG9hIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXV0aEFzY2lpIiwiZW5kcG9pbnQiLCJwcmVwYXJlZFN1YnNjcmlwdGlvbiIsInByZXBhcmVTdWJzY3JpcHRpb24iLCJwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZyIsImV4aXN0aW5nU3Vic2NyaXB0aW9uU3RyaW5nIiwic2V0U3Vic2NyaXB0aW9uIiwiX2Jyb3dzZXJEZXRlY3RvciIsIkxlYW5wbHVtIiwiX2VtYWlsIiwic2V0VmFyaWFudERlYnVnSW5mb0VuYWJsZWQiLCJnZXRWYXJpYW50RGVidWdJbmZvIiwiYWNjZXNzS2V5IiwiaG9zdCIsImRldmljZU5hbWUiLCJfZGV2aWNlTmFtZSIsImRldmljZU1vZGVsIiwiX2RldmljZU1vZGVsIiwic3lzdGVtTmFtZSIsIl9zeXN0ZW1OYW1lIiwic3lzdGVtVmVyc2lvbiIsIl9zeXN0ZW1WZXJzaW9uIiwic2V0VmFyaWFibGVzIiwiY29vbGRvd25TZWNvbmRzIiwiZ2V0VmFyaWFibGVzIiwiY3VycmVudCIsImFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyIiwiYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIiLCJyZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlciIsInJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyIiwiaXNTdWNjZXNzIiwiaXNSZXNwb25zZVN1Y2Nlc3MiLCJ1c2VyQXR0cmlidXRlcyIsInRyaWdnZXJWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMiLCJzdGFydFJlc3BvbnNlIiwibGF0ZXN0VmVyc2lvbiIsImdldEZpbHRlcmVkUmVzdWx0cyIsImxvYWREaWZmcyIsInRyaWdnZXJTdGFydEhhbmRsZXJzIiwiZmlsdGVyTWVzc2FnZXMiLCJzZXRVc2VyQXR0cmlidXRlcyIsImZpbGVOYW1lIiwiZ2VuZXJhdGVSZXF1ZXN0VXJsIiwiYWRkTWVzc2FnZVZpZXciLCJzdWJzY3JpYmVVc2VyIiwidW5zdWJzY3JpYmVVc2VyIiwiY2xlYXJVc2VyQ29udGVudCIsIlNvY2tldElvQ2xpZW50Iiwic2VsZiIsImxpbmUiLCJwYXJ0cyIsInNwbGl0IiwiaGVhcnRiZWF0Iiwic29ja2V0IiwiaGVhcnRiZWF0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWVzc2FnZVBhcnRzIiwiY29kZSIsInNsaWNlIiwiam9pbiIsIm1lc3NhZ2VFdmVudCIsIm5hbWUiLCJjbG9zZSIsImFyZ3NKc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNTZTtBQUNiQSxhQUFTO0FBQ1BDLGFBQU8sT0FEQTtBQUVQQyxZQUFNLE1BRkM7QUFHUEMsZUFBUyxTQUhGO0FBSVBDLGFBQU8sT0FKQTtBQUtQQyxxQkFBZSxjQUxSO0FBTVBDLHNCQUFnQixlQU5UO0FBT1BDLG1CQUFhLFlBUE47QUFRUEMsb0JBQWMsYUFSUDtBQVNQQyxxQkFBZSxjQVRSO0FB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9HQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ1pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzdCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDdEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDWkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDZkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDN0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDZEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQixFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCLEVBQUU7QUFDbEU7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImxlYW5wbHVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTGVhbnBsdW1cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTGVhbnBsdW1cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2FlNjVkN2Q3NjIwNTU2NWZmODciLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIE1FVEhPRFM6IHtcbiAgICBTVEFSVDogJ3N0YXJ0JyxcbiAgICBTVE9QOiAnc3RvcCcsXG4gICAgQURWQU5DRTogJ2FkdmFuY2UnLFxuICAgIFRSQUNLOiAndHJhY2snLFxuICAgIFBBVVNFX1NFU1NJT046ICdwYXVzZVNlc3Npb24nLFxuICAgIFJFU1VNRV9TRVNTSU9OOiAncmVzdW1lU2Vzc2lvbicsXG4gICAgUEFVU0VfU1RBVEU6ICdwYXVzZVN0YXRlJyxcbiAgICBSRVNVTUVfU1RBVEU6ICdyZXN1bWVTdGF0ZScsXG4gICAgRE9XTkxPQURfRklMRTogJ2Rvd25sb2FkRmlsZScsXG4gICAgTVVMVEk6ICdtdWx0aScsXG4gICAgU0VUX1ZBUlM6ICdzZXRWYXJzJyxcbiAgICBHRVRfVkFSUzogJ2dldFZhcnMnLFxuICAgIFNFVF9VU0VSX0FUVFJJQlVURVM6ICdzZXRVc2VyQXR0cmlidXRlcycsXG4gICAgU0VUX0RFVklDRV9BVFRSSUJVVEVTOiAnc2V0RGV2aWNlQXR0cmlidXRlcycsXG4gICAgVVBMT0FEX0ZJTEU6ICd1cGxvYWRGaWxlJyxcbiAgICBSRUdJU1RFUl9ERVZJQ0U6ICdyZWdpc3RlckRldmljZSdcbiAgfSxcblxuICBTREtfVkVSU0lPTjogJzEuNy4wLWlmbGl4JyxcblxuICBDTElFTlQ6ICdqcycsXG5cbiAgUEFSQU1TOiB7XG4gICAgQUNUSU9OOiAnYWN0aW9uJyxcbiAgICBBUFBfSUQ6ICdhcHBJZCcsXG4gICAgQ0xJRU5UOiAnY2xpZW50JyxcbiAgICBDTElFTlRfS0VZOiAnY2xpZW50S2V5JyxcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VJZCcsXG4gICAgU0RLX1ZFUlNJT046ICdzZGtWZXJzaW9uJyxcbiAgICBVU0VSX0lEOiAndXNlcklkJyxcbiAgICBORVdfVVNFUl9JRDogJ25ld1VzZXJJZCcsXG4gICAgREVWX01PREU6ICdkZXZNb2RlJyxcbiAgICBWRVJTSU9OX05BTUU6ICd2ZXJzaW9uTmFtZScsXG4gICAgU1lTVEVNX05BTUU6ICdzeXN0ZW1OYW1lJyxcbiAgICBTWVNURU1fVkVSU0lPTjogJ3N5c3RlbVZlcnNpb24nLFxuICAgIEJST1dTRVJfTkFNRTogJ2Jyb3dzZXJOYW1lJyxcbiAgICBCUk9XU0VSX1ZFUlNJT046ICdicm93c2VyVmVyc2lvbicsXG4gICAgREVWSUNFX05BTUU6ICdkZXZpY2VOYW1lJyxcbiAgICBERVZJQ0VfTU9ERUw6ICdkZXZpY2VNb2RlbCcsXG4gICAgVVNFUl9BVFRSSUJVVEVTOiAndXNlckF0dHJpYnV0ZXMnLFxuICAgIExPQ0FMRTogJ2xvY2FsZScsXG4gICAgQ09VTlRSWTogJ2NvdW50cnknLFxuICAgIFJFR0lPTjogJ3JlZ2lvbicsXG4gICAgQ0lUWTogJ2NpdHknLFxuICAgIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICAgIFNUQVRFOiAnc3RhdGUnLFxuICAgIElORk86ICdpbmZvJyxcbiAgICBFVkVOVDogJ2V2ZW50JyxcbiAgICBWQUxVRTogJ3ZhbHVlJyxcbiAgICBGSUxFTkFNRTogJ2ZpbGVuYW1lJyxcbiAgICBUSU1FOiAndGltZScsXG4gICAgREFUQTogJ2RhdGEnLFxuICAgIFZBUlM6ICd2YXJzJyxcbiAgICBGSUxFOiAnZmlsZScsXG4gICAgU0laRTogJ3NpemUnLFxuICAgIFZBUklBVElPTjogJ3ZhcmlhdGlvbicsXG4gICAgSEFTSDogJ2hhc2gnLFxuICAgIEVNQUlMOiAnZW1haWwnLFxuICAgIFZBUklBQkxFUzogJ3ZhcnMnLFxuICAgIFBBUkFNUzogJ3BhcmFtcycsXG4gICAgSU5DTFVERV9ERUZBVUxUUzogJ2luY2x1ZGVEZWZhdWx0cycsXG4gICAgSU5DTFVERV9WQVJJQU5UX0RFQlVHX0lORk86ICdpbmNsdWRlVmFyaWFudERlYnVnSW5mbycsXG4gICAgV0VCX1BVU0hfU1VCU0NSSVBUSU9OOiAnd2ViUHVzaFN1YnNjcmlwdGlvbicsXG4gICAgTUVTU0FHRV9JRDogJ21lc3NhZ2VJZCdcbiAgfSxcblxuICBLRVlTOiB7XG4gICAgSVNfUkVHSVNURVJFRDogJ2lzUmVnaXN0ZXJlZCcsXG4gICAgTEFURVNUX1ZFUlNJT046ICdsYXRlc3RWZXJzaW9uJyxcbiAgICBWQVJTOiAndmFycycsXG4gICAgVkFSSUFOVFM6ICd2YXJpYW50cycsXG4gICAgVkFSSUFOVF9ERUJVR19JTkZPOiAndmFyaWFudERlYnVnSW5mbycsXG4gICAgQUNUSU9OX01FVEFEQVRBOiAnYWN0aW9uTWV0YWRhdGEnLFxuICAgIFRPS0VOOiAndG9rZW4nLFxuICAgIE1FU1NBR0VTOiAnbWVzc2FnZXMnXG4gIH0sXG5cbiAgREVGQVVMVF9LRVlTOiB7XG4gICAgQ09VTlQ6ICdfX2xlYW5wbHVtX3Vuc3luY2VkJyxcbiAgICBJVEVNOiAnX19sZWFucGx1bV91bnN5bmNlZF8nLFxuICAgIFZBUklBQkxFUzogJ19fbGVhbnBsdW1fdmFyaWFibGVzJyxcbiAgICBWQVJJQU5UUzogJ19fbGVhbnBsdW1fdmFyaWFudHMnLFxuICAgIFZBUklBTlRfREVCVUdfSU5GTzogJ19fbGVhbnBsdW1fdmFyaWFudF9kZWJ1Z19pbmZvJyxcbiAgICBBQ1RJT05fTUVUQURBVEE6ICdfX2xlYW5wbHVtX2FjdGlvbl9tZXRhZGF0YScsXG4gICAgVE9LRU46ICdfX2xlYW5wbHVtX3Rva2VuJyxcbiAgICBERVZJQ0VfSUQ6ICdfX2xlYW5wbHVtX2RldmljZV9pZCcsXG4gICAgVVNFUl9JRDogJ19fbGVhbnBsdW1fdXNlcl9pZCcsXG4gICAgUFVTSF9TVUJTQ1JJUFRJT046ICdfX2xlYW5wbHVtX3B1c2hfc3Vic2NyaXB0aW9uJyxcbiAgICBNRVNTQUdFX1ZJRVc6ICdfX2xlYW5wbHVtX21lc3NhZ2VzX3ZpZXcnLFxuICB9LFxuXG4gIFZBTFVFUzoge1xuICAgIERFVEVDVDogJyhkZXRlY3QpJ1xuICB9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy5qcyIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5cbi8qKlxuICogTGVhbnBsdW0gQXJnc0J1aWxkZXIsIHVzZSB0byBjb25zdHJ1Y3QgcmVxdWVzdCBwYXlsb2FkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmdzQnVpbGRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZW1wdHkgcmVxdWVzdCBhcmd1bWVudC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJnU3RyaW5nID0gJydcbiAgICB0aGlzLmFyZ1ZhbHVlcyA9IHt9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGdpdmVuIGtleSwgdmFsdWUgdG8gdGhlIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSB2YWx1ZSBUaGUgdmFsdWUgZm9yIGdpdmVuIGtleS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYWRkKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgaWYgKHRoaXMuYXJnU3RyaW5nKSB7XG4gICAgICB0aGlzLmFyZ1N0cmluZyArPSAnJidcbiAgICB9XG4gICAgbGV0IGVuY29kZWRVcmlDb21wb25lbnQgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXG4gICAgdGhpcy5hcmdTdHJpbmcgKz0gYCR7a2V5fT0ke2VuY29kZWRVcmlDb21wb25lbnR9YFxuICAgIHRoaXMuYXJnVmFsdWVzW2tleV0gPSB2YWx1ZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvKipcbiAgICogQ2FjaGUgdGhlIGdpdmVuIGJvZHkuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW2JvZHldIEEgZ2l2ZW4gYm9keS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ8U3RyaW5nfSBSZXR1cm5zIEFyZ3NCdWlsZGVyIGlmIGJvZHkgZ2l2ZW4sIGVsc2UgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5cbiAgICovXG4gIGJvZHkoYm9keSkge1xuICAgIGlmIChib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5ID0gYm9keVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2JvZHlcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gYXR0YWNoIGdpdmVuIGFwcElkIGFuZCBhcHBLZXkgdG8gcmVxdWVzdC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBhcHBJZCBUaGUgYXBwSWQgdG8gYXR0YWNoLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNsaWVudEtleSBUaGUgYXBwS2V5IHRvIGF0dGFjaC5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYXR0YWNoQXBpS2V5cyhhcHBJZCwgY2xpZW50S2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKENvbnN0YW50cy5QQVJBTVMuQVBQX0lELCBhcHBJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVCwgQ29uc3RhbnRzLkNMSUVOVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVF9LRVksIGNsaWVudEtleSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGFyZ3VtZW50cy5cbiAgICogQHJldHVybiB7U3RyaW5nfSBBcmd1bWVudHMgc3RyaW5nLlxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJnU3RyaW5nXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBhcmd1bWVudCB2YWx1ZXMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGFyZ3VtZW50IHZhbHVlcy5cbiAgICovXG4gIGJ1aWxkRGljdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcmdWYWx1ZXNcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vTmV0d29yaydcbmltcG9ydCBMb2NhbFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vTG9jYWxTdG9yYWdlTWFuYWdlcidcblxubGV0IGxhc3RSZXF1ZXN0VGltZSA9IHVuZGVmaW5lZFxubGV0IGNvb2xkb3duVGltZW91dCA9IG51bGxcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW1SZXF1ZXN0IHtcblxuICBzdGF0aWMgYXBpUGF0aCA9ICdodHRwczovL3d3dy5sZWFucGx1bS5jb20vYXBpJ1xuICBzdGF0aWMgYmF0Y2hFbmFibGVkID0gdHJ1ZVxuICBzdGF0aWMgYmF0Y2hDb29sZG93biA9IDVcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvblxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25zLnN1Y2Nlc3NcbiAgICogQHBhcmFtIG9wdGlvbnMuZXJyb3JcbiAgICogQHBhcmFtIG9wdGlvbnMucmVzcG9uc2VcbiAgICogQHBhcmFtIG9wdGlvbnMucXVldWVkXG4gICAqIEBwYXJhbSBvcHRpb25zLnNlbmROb3dcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyByZXF1ZXN0KGFjdGlvbiwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgbmV3IEFyZ3NCdWlsZGVyKClcblxuICAgIC8vIEdldCBvciBjcmVhdGUgZGV2aWNlIElEIGFuZCB1c2VyIElELlxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPVxuICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpIHtcbiAgICAgIGxldCBpZCA9ICcnXG4gICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgK1xuICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlkICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKVxuICAgICAgfVxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID0gaWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuREVWSUNFX0lELCBpZClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QudXNlcklkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRClcbiAgICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcblxuICAgIGxldCBhcmdzQnVpbGRlciA9IHBhcmFtc1xuICAgICAgICAuYXR0YWNoQXBpS2V5cyhMZWFucGx1bVJlcXVlc3QuYXBwSWQsIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX0lELCBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQUNUSU9OLCBhY3Rpb24pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5WRVJTSU9OX05BTUUsIExlYW5wbHVtUmVxdWVzdC52ZXJzaW9uTmFtZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVl9NT0RFLCBJbnRlcm5hbFN0YXRlLmRldk1vZGUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5USU1FLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpKVxuICAgIGxldCBzdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzIHx8IG9wdGlvbnMucmVzcG9uc2VcbiAgICBsZXQgZXJyb3IgPSBvcHRpb25zLmVycm9yIHx8IG9wdGlvbnMucmVzcG9uc2VcblxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmFwcElkIHx8ICFMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5KSB7XG4gICAgICBsZXQgZXJyID0gJ0xlYW5wbHVtIEFwcCBJRCBhbmQgY2xpZW50IGtleSBhcmUgbm90IHNldC4gTWFrZSBzdXJlIHlvdSAnICtcbiAgICAgICAgICAnYXJlIGNhbGxpbmcgc2V0QXBwSWRGb3JEZXZlbG9wbWVudE1vZGUgb3Igc2V0QXBwSWRGb3JQcm9kdWN0aW9uTW9kZSAnICtcbiAgICAgICAgICAnYmVmb3JlIGlzc3VpbmcgQVBJIGNhbGxzLidcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgaWYgKGVycm9yKSBlcnJvcihlcnIpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmJvZHkoKSkge1xuICAgICAgTmV0d29yay5hamF4KCdQT1NUJywgYCR7TGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGh9PyR7YXJnc0J1aWxkZXIuYnVpbGQoKX1gLFxuICAgICAgICAgIHBhcmFtcy5ib2R5KCksIHN1Y2Nlc3MsIGVycm9yLCBvcHRpb25zLnF1ZXVlZClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBzZW5kTm93ID0gSW50ZXJuYWxTdGF0ZS5kZXZNb2RlIHx8IG9wdGlvbnMuc2VuZE5vdyB8fCAhTGVhbnBsdW1SZXF1ZXN0LmJhdGNoRW5hYmxlZFxuXG4gICAgbGV0IHNlbmRVbnNlbnRSZXF1ZXN0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHJlcXVlc3RzVG9TZW5kID0gTGVhbnBsdW1SZXF1ZXN0LnBvcFVuc2VudFJlcXVlc3RzKClcbiAgICAgIGlmIChyZXF1ZXN0c1RvU2VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAnZGF0YSc6IHJlcXVlc3RzVG9TZW5kXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBtdWx0aVJlcXVlc3RBcmdzID0gbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hdHRhY2hBcGlLZXlzKExlYW5wbHVtUmVxdWVzdC5hcHBJZCwgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSlcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkFDVElPTiwgQ29uc3RhbnRzLk1FVEhPRFMuTVVMVEkpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVElNRSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkudG9TdHJpbmcoKS50b1N0cmluZygpKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgTmV0d29yay5hamF4KCdQT1NUJywgYCR7TGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGh9PyR7bXVsdGlSZXF1ZXN0QXJnc31gLCByZXF1ZXN0RGF0YSwgc3VjY2VzcywgZXJyb3IsXG4gICAgICAgICAgICBvcHRpb25zLnF1ZXVlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWFsIHdpdGggY29vbGRvd24uXG4gICAgaWYgKCFzZW5kTm93ICYmIExlYW5wbHVtUmVxdWVzdC5iYXRjaENvb2xkb3duKSB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXG4gICAgICBpZiAoIWxhc3RSZXF1ZXN0VGltZSB8fFxuICAgICAgICAgIG5vdyAtIGxhc3RSZXF1ZXN0VGltZSA+PSBMZWFucGx1bVJlcXVlc3QuYmF0Y2hDb29sZG93bikge1xuICAgICAgICBzZW5kTm93ID0gdHJ1ZVxuICAgICAgICBsYXN0UmVxdWVzdFRpbWUgPSBub3dcbiAgICAgIH0gZWxzZSBpZiAoIWNvb2xkb3duVGltZW91dCkge1xuICAgICAgICBjb29sZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvb2xkb3duVGltZW91dCA9IG51bGxcbiAgICAgICAgICBsYXN0UmVxdWVzdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICAgICAgICBzZW5kVW5zZW50UmVxdWVzdHMoKVxuICAgICAgICB9LCAoTGVhbnBsdW1SZXF1ZXN0LmJhdGNoQ29vbGRvd24gLSAobm93IC0gbGFzdFJlcXVlc3RUaW1lKSkgKiAxMDAwKVxuICAgICAgfVxuICAgIH1cblxuICAgIExlYW5wbHVtUmVxdWVzdC5zYXZlUmVxdWVzdEZvckxhdGVyKGFyZ3NCdWlsZGVyLmJ1aWxkRGljdCgpKVxuICAgIGlmIChzZW5kTm93KSB7XG4gICAgICBzZW5kVW5zZW50UmVxdWVzdHMoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZVJlcXVlc3RVcmwoYWN0aW9uLCBxdWVyeVBhcmFtcykge1xuICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMgfHwgbmV3IEFyZ3NCdWlsZGVyKClcblxuICAgIC8vIEdldCBvciBjcmVhdGUgZGV2aWNlIElEIGFuZCB1c2VyIElELlxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPVxuICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpIHtcbiAgICAgIGxldCBpZCA9ICcnXG4gICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgK1xuICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlkICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKVxuICAgICAgfVxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID0gaWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuREVWSUNFX0lELCBpZClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QudXNlcklkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRClcbiAgICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcblxuICAgIGxldCBhcmdzQnVpbGRlciA9IHF1ZXJ5UGFyYW1zXG4gICAgICAgIC5hdHRhY2hBcGlLZXlzKExlYW5wbHVtUmVxdWVzdC5hcHBJZCwgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNES19WRVJTSU9OLCBDb25zdGFudHMuU0RLX1ZFUlNJT04pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfSUQsIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfSUQsIExlYW5wbHVtUmVxdWVzdC51c2VySWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5BQ1RJT04sIGFjdGlvbilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlZFUlNJT05fTkFNRSwgTGVhbnBsdW1SZXF1ZXN0LnZlcnNpb25OYW1lKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWX01PREUsIEludGVybmFsU3RhdGUuZGV2TW9kZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlRJTUUsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApLnRvU3RyaW5nKCkpXG5cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5hcHBJZCB8fCAhTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSkge1xuICAgICAgbGV0IGVyciA9ICdMZWFucGx1bSBBcHAgSUQgYW5kIGNsaWVudCBrZXkgYXJlIG5vdCBzZXQuIE1ha2Ugc3VyZSB5b3UgJyArXG4gICAgICAgICAgJ2FyZSBjYWxsaW5nIHNldEFwcElkRm9yRGV2ZWxvcG1lbnRNb2RlIG9yIHNldEFwcElkRm9yUHJvZHVjdGlvbk1vZGUgJyArXG4gICAgICAgICAgJ2JlZm9yZSBpc3N1aW5nIEFQSSBjYWxscy4nXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke0xlYW5wbHVtUmVxdWVzdC5hcGlQYXRofT8ke2FyZ3NCdWlsZGVyLmJ1aWxkKCl9YFxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgTmV0d29yay5zZXROZXR3b3JrVGltZW91dChzZWNvbmRzKVxuICB9XG5cbiAgc3RhdGljIHNhdmVSZXF1ZXN0Rm9yTGF0ZXIoYXJncykge1xuICAgIGxldCBjb3VudCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKSB8fCAwXG4gICAgbGV0IGl0ZW1LZXkgPSBDb25zdGFudHMuREVGQVVMVF9LRVlTLklURU0gKyBjb3VudFxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKGl0ZW1LZXksIEpTT04uc3RyaW5naWZ5KGFyZ3MpKVxuICAgIGNvdW50KytcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5ULCBjb3VudClcbiAgfVxuXG4gIHN0YXRpYyBwb3BVbnNlbnRSZXF1ZXN0cygpIHtcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBbXVxuICAgIGxldCBjb3VudCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKSB8fCAwXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQ09VTlQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbUtleSA9IENvbnN0YW50cy5ERUZBVUxUX0tFWVMuSVRFTSArIGlcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXF1ZXN0QXJncyA9IEpTT04ucGFyc2UoTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKGl0ZW1LZXkpKVxuICAgICAgICByZXF1ZXN0RGF0YS5wdXNoKHJlcXVlc3RBcmdzKVxuICAgICAgfSBjYXRjaCAoaWdub3JlZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICAgIH1cbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShpdGVtS2V5KVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdERhdGFcbiAgfVxuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8gUmVzcG9uc2UgcGFyc2luZyAvLy8vLy8vLy8vLy8vLy8vLy9cblxuICBzdGF0aWMgbnVtUmVzcG9uc2VzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UucmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5yZXNwb25zZS5sZW5ndGhcbiAgfVxuXG4gIHN0YXRpYyBnZXRSZXNwb25zZUF0KHJlc3BvbnNlLCBpbmRleCkge1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UucmVzcG9uc2VbaW5kZXhdXG4gIH1cblxuICBzdGF0aWMgZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgbGV0IGNvdW50ID0gTGVhbnBsdW1SZXF1ZXN0Lm51bVJlc3BvbnNlcyhyZXNwb25zZSlcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICByZXR1cm4gTGVhbnBsdW1SZXF1ZXN0LmdldFJlc3BvbnNlQXQocmVzcG9uc2UsIGNvdW50IC0gMSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNSZXNwb25zZVN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuICEhcmVzcG9uc2Uuc3VjY2Vzc1xuICB9XG5cbiAgc3RhdGljIGdldFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgZXJyb3IgPSByZXNwb25zZS5lcnJvclxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5sZXQgbG9jYWxTdG9yYWdlRW5hYmxlZFxubGV0IGFsdGVybmF0ZUxvY2FsU3RvcmFnZSA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZU1hbmFnZXIge1xuICBzdGF0aWMgZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV1cbiAgfVxuXG4gIHN0YXRpYyBzYXZlVG9Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9jYWxTdG9yYWdlRW5hYmxlZCA9IGZhbHNlXG4gICAgICBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICBkZWxldGUgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZUVuYWJsZWQgPSBmYWxzZVxuICAgICAgZGVsZXRlIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTG9jYWxTdG9yYWdlTWFuYWdlci5qcyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJuYWxTdGF0ZSB7XG4gIHN0YXRpYyBkZXZNb2RlID0gZmFsc2VcblxuICBzdGF0aWMgdmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzID0gW11cbiAgc3RhdGljIGhhc1JlY2VpdmVkRGlmZnMgPSBmYWxzZVxuXG4gIHN0YXRpYyBzdGFydEhhbmRsZXJzID0gW11cbiAgc3RhdGljIGhhc1N0YXJ0ZWQgPSBmYWxzZVxuICBzdGF0aWMgc3RhcnRTdWNjZXNzZnVsID0gZmFsc2VcbiAgc3RhdGljIHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkID0gZmFsc2VcblxuICBzdGF0aWMgYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVycy5wdXNoKGhhbmRsZXIpXG4gICAgaWYgKEludGVybmFsU3RhdGUuaGFzU3RhcnRlZCkge1xuICAgICAgaGFuZGxlcihJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIGxldCBpZHggPSBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKVxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLnNwbGljZShpZHgsIDEpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRyaWdnZXJTdGFydEhhbmRsZXJzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnNbaV0oSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5wdXNoKGhhbmRsZXIpXG4gICAgaWYgKEludGVybmFsU3RhdGUuaGFzUmVjZWl2ZWREaWZmcykge1xuICAgICAgaGFuZGxlcigpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBsZXQgaWR4ID0gSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKVxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdHJpZ2dlclZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzW2ldKClcbiAgICAgIH1cbiAgfVxuXG4gICAgc3RhdGljIHNldFZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS52YXJpYW50RGVidWdJbmZvRW5hYmxlZCA9IHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ludGVybmFsU3RhdGUuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEludGVybmFsU3RhdGUgZnJvbSAnLi9JbnRlcm5hbFN0YXRlJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgTG9jYWxTdG9yYWdlTWFuYWdlciBmcm9tICcuL0xvY2FsU3RvcmFnZU1hbmFnZXInXG5pbXBvcnQgTGVhbnBsdW1SZXF1ZXN0IGZyb20gJy4vTGVhbnBsdW1SZXF1ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJDYWNoZSB7XG4gIHN0YXRpYyBkaWZmcyA9IHVuZGVmaW5lZFxuICBzdGF0aWMgdmFyaWFibGVzID0gbnVsbFxuICBzdGF0aWMgdmFyaWFudHMgPSBbXVxuICBzdGF0aWMgdmFyaWFudERlYnVnSW5mbyA9IHt9XG4gIHN0YXRpYyBtZXJnZWQgPSB1bmRlZmluZWRcbiAgc3RhdGljIG9uVXBkYXRlID0gdW5kZWZpbmVkXG4gIHN0YXRpYyB0b2tlbiA9ICcnXG4gIHN0YXRpYyBhY3Rpb25NZXRhZGF0YSA9IHt9XG4gIHN0YXRpYyBtZXNzYWdlc1ZpZXcgPSB1bmRlZmluZWRcbiAgc3RhdGljIG1lc3NhZ2VzVmlld1BlclNlc3Npb24gPSBbXVxuXG4gIHN0YXRpYyBhcHBseURpZmZzKGRpZmZzLCB2YXJpYW50cywgYWN0aW9uTWV0YWRhdGEpIHtcbiAgICBWYXJDYWNoZS5kaWZmcyA9IGRpZmZzXG4gICAgVmFyQ2FjaGUudmFyaWFudHMgPSB2YXJpYW50c1xuICAgIFZhckNhY2hlLmFjdGlvbk1ldGFkYXRhID0gYWN0aW9uTWV0YWRhdGFcbiAgICBJbnRlcm5hbFN0YXRlLmhhc1JlY2VpdmVkRGlmZnMgPSB0cnVlXG4gICAgVmFyQ2FjaGUubWVyZ2VkID0gVmFyQ2FjaGUubWVyZ2VIZWxwZXIoVmFyQ2FjaGUudmFyaWFibGVzLCBkaWZmcylcbiAgICBWYXJDYWNoZS5zYXZlRGlmZnMoKVxuICAgIGlmIChWYXJDYWNoZS5vblVwZGF0ZSkge1xuICAgICAgVmFyQ2FjaGUub25VcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBsb2FkRGlmZnMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIFZhckNhY2hlLmFwcGx5RGlmZnMoXG4gICAgICAgICAgSlNPTi5wYXJzZShMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFCTEVTKSB8fCBudWxsKSxcbiAgICAgICAgICBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UUykgfHwgbnVsbCksXG4gICAgICAgICAgSlNPTi5wYXJzZShMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQUNUSU9OX01FVEFEQVRBKSB8fCBudWxsKSlcbiAgICAgIFZhckNhY2hlLnRva2VuID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVE9LRU4pXG4gICAgICBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFOVF9ERUJVR19JTkZPKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBMZWFucGx1bTogSW52YWxpZCBkaWZmczogJHtlfWApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNhdmVEaWZmcygpIHtcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShcbiAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQUJMRVMsIEpTT04uc3RyaW5naWZ5KFZhckNhY2hlLmRpZmZzIHx8IHt9KSlcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShcbiAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UUywgSlNPTi5zdHJpbmdpZnkoVmFyQ2FjaGUudmFyaWFudHMgfHwgW10pXG4gICAgKVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQUNUSU9OX01FVEFEQVRBLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShWYXJDYWNoZS5hY3Rpb25NZXRhZGF0YSB8fCB7fSkpXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UX0RFQlVHX0lORk8sXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gfHwge30pKVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVE9LRU4sIFZhckNhY2hlLnRva2VuKVxuICB9XG5cbiAgLyoqXG4gICAqIHJlY29yZCB2aWV3IG1lc3NhZ2UgaW4gbG9jYWwgc3RvcmFnZSBhbmQgIGluIG1lbW9yeSAoYWthIHNlc3Npb24pXG4gICAqIEBwYXJhbSBtZXNzYWdlSWRcbiAgICovXG4gIHN0YXRpYyBhZGRNZXNzYWdlVmlldyhtZXNzYWdlSWQpe1xuICAgIGNvbnN0IG1lc3NhZ2VWaWV3ID0gVmFyQ2FjaGUuZ2V0TWVzc2FnZXNWaWV3KClbbWVzc2FnZUlkXVxuICAgIGlmIChtZXNzYWdlVmlldyA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIFZhckNhY2hlLm1lc3NhZ2VzVmlld1ttZXNzYWdlSWRdID0gW11cbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZVZpZXdQZXJTZXNzaW9uID1WYXJDYWNoZS5tZXNzYWdlc1ZpZXdQZXJTZXNzaW9uW21lc3NhZ2VJZF0gfHwgW11cblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBtZXNzYWdlVmlld1BlclNlc3Npb24ucHVzaCh7dDpub3d9KVxuICAgIFZhckNhY2hlLm1lc3NhZ2VzVmlld1ttZXNzYWdlSWRdLnB1c2goe3Q6bm93fSlcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLk1FU1NBR0VfVklFVyxKU09OLnN0cmluZ2lmeShcbiAgICAgIFZhckNhY2hlLm1lc3NhZ2VzVmlldyB8fCB7fSkpXG4gIH1cblxuXG5cbiAgLyoqXG4gICAqIGdldCBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG1lc3NhZ2VWaWV3cyB3aXRoIG1lc3NhZ2VJZCBhcyBrZXksIHBlciBzZXNzaW9uIG9yIGZyb20gc3RhcnRcbiAgICogQHBhcmFtIHNlc3Npb24ge0Jvb2xlYW59XG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0TWVzc2FnZXNWaWV3KHNlc3Npb24pe1xuICAgIGlmKHNlc3Npb24pe1xuICAgICAgcmV0dXJuIFZhckNhY2hlLm1lc3NhZ2VzVmlld1BlclNlc3Npb25cbiAgICB9XG4gICAgaWYoVmFyQ2FjaGUubWVzc2FnZXNWaWV3ID09PSB1bmRlZmluZWQpe1xuICAgICAgVmFyQ2FjaGUubWVzc2FnZXNWaWV3ID0gSlNPTi5wYXJzZShcbiAgICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuTUVTU0FHRV9WSUVXKSB8fCAne30nKVxuICAgIH1cbiAgICByZXR1cm4gVmFyQ2FjaGUubWVzc2FnZXNWaWV3XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGFsbCB2aWV3IGZvciBhIGdpdmVuIG1lc3NhZ2UgZWl0aGVyIGZvcm0gdGhlIHN0YXJ0IG9yIHBlciBzZXNzaW9uXG4gICAqIEBwYXJhbSBtZXNzYWdlSWRcbiAgICogQHBhcmFtIHNlc3Npb24ge0Jvb2xlYW59XG4gICAqIEByZXR1cm5zIHsqfEFycmF5fVxuICAgKi9cbiAgc3RhdGljIGdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCwgc2Vzc2lvbil7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VzVmlldyhzZXNzaW9uKVttZXNzYWdlSWRdIHx8IFtdXG4gIH1cbiAgc3RhdGljIHNldFZhcmlhYmxlcyh2YXJpYWJsZXMpIHtcbiAgICBWYXJDYWNoZS52YXJpYWJsZXMgPSB2YXJpYWJsZXNcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLm1lcmdlZCAhPT0gdW5kZWZpbmVkID8gVmFyQ2FjaGUubWVyZ2VkIDogVmFyQ2FjaGUudmFyaWFibGVzXG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFudERlYnVnSW5mbygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mb1xuICB9XG5cbiAgc3RhdGljIHNlbmRWYXJpYWJsZXMoKSB7XG4gICAgbGV0IGJvZHkgPSB7fVxuICAgIGJvZHlbQ29uc3RhbnRzLlBBUkFNUy5WQVJJQUJMRVNdID0gVmFyQ2FjaGUudmFyaWFibGVzXG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU0VUX1ZBUlMsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpLmJvZHkoSlNPTi5zdHJpbmdpZnkoYm9keSkpLCB7XG4gICAgICAgICAgc2VuZE5vdzogdHJ1ZVxuICAgICAgICB9KVxuICB9XG5cbiAgc3RhdGljIG1lcmdlSGVscGVyKHZhcnMsIGRpZmYpIHtcbiAgICBpZiAodHlwZW9mIGRpZmYgPT09ICdudW1iZXInIHx8IHR5cGVvZiBkaWZmID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIGRpZmYgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZGlmZlxuICAgIH1cbiAgICBpZiAoZGlmZiA9PT0gbnVsbCB8fCBkaWZmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB2YXJzXG4gICAgfVxuXG4gICAgbGV0IG9iakl0ZXJhdG9yID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZihvYmpbaV0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlZW1zIHRvIGJlIGJlc3QgcHJhY3RpY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy83MDcxXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlZmxlY3RcbiAgICAgICAgICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgYXR0cikpIHtcbiAgICAgICAgICAgICAgZihhdHRyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdmFyc0l0ZXJhdG9yID0gb2JqSXRlcmF0b3IodmFycylcbiAgICBsZXQgZGlmZkl0ZXJhdG9yID0gb2JqSXRlcmF0b3IoZGlmZilcblxuICAgIC8vIEluZmVyIHRoYXQgdGhlIGRpZmZzIGlzIGFuIGFycmF5IGlmIHRoZSB2YXJzIHZhbHVlIGRvZXNuJ3QgZXhpc3QgdG8gdGVsbCB1cyB0aGUgdHlwZS5cbiAgICBsZXQgaXNBcnJheSA9IGZhbHNlXG4gICAgaWYgKHZhcnMgPT09IG51bGwpIHtcbiAgICAgIGlmICghKGRpZmYgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgaXNBcnJheSA9IG51bGxcbiAgICAgICAgZm9yIChsZXQgYXR0cmlidXRlIGluIGRpZmYpIHtcbiAgICAgICAgICBpZiAoIWRpZmYuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzQXJyYXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghKHR5cGVvZiBhdHRyaWJ1dGUgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXR0cmlidXRlLmxlbmd0aCA8IDMgfHwgYXR0cmlidXRlLmNoYXJBdCgwKSAhPT0gJ1snIHx8XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZS5jaGFyQXQoYXR0cmlidXRlLmxlbmd0aCAtIDEpICE9PSAnXScpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHZhclN1YnNjcmlwdCA9IGF0dHJpYnV0ZS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlLmxlbmd0aCAtIDEpXG4gICAgICAgICAgaWYgKCFwYXJzZUludCh2YXJTdWJzY3JpcHQpLnRvU3RyaW5nKCkgPT09IHZhclN1YnNjcmlwdCkge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lcmdlIGFycmF5cy5cbiAgICBpZiAodmFycyBpbnN0YW5jZW9mIEFycmF5IHx8IGlzQXJyYXkpIHtcbiAgICAgIGxldCBtZXJnZWQgPSBbXVxuICAgICAgdmFyc0l0ZXJhdG9yKGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgICAgbWVyZ2VkLnB1c2goYXR0cilcbiAgICAgIH0pXG4gICAgICBkaWZmSXRlcmF0b3IoZnVuY3Rpb24odmFyU3Vic2NyaXB0KSB7XG4gICAgICAgIGxldCBzdWJzY3JpcHQgPVxuICAgICAgICAgICAgcGFyc2VJbnQodmFyU3Vic2NyaXB0LnN1YnN0cmluZygxLCB2YXJTdWJzY3JpcHQubGVuZ3RoIC0gMSkpXG4gICAgICAgIGxldCBkaWZmVmFsdWUgPSBkaWZmW3ZhclN1YnNjcmlwdF1cbiAgICAgICAgd2hpbGUgKHN1YnNjcmlwdCA+PSBtZXJnZWQubGVuZ3RoKSB7XG4gICAgICAgICAgbWVyZ2VkLnB1c2gobnVsbClcbiAgICAgICAgfVxuICAgICAgICBtZXJnZWRbc3Vic2NyaXB0XSA9IFZhckNhY2hlLm1lcmdlSGVscGVyKG1lcmdlZFtzdWJzY3JpcHRdLCBkaWZmVmFsdWUpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIG1lcmdlZFxuICAgIH1cblxuICAgIC8vIE1lcmdlIGRpY3Rpb25hcmllcy5cbiAgICBsZXQgbWVyZ2VkID0ge31cbiAgICB2YXJzSXRlcmF0b3IoZnVuY3Rpb24oYXR0cikge1xuICAgICAgaWYgKGRpZmZbYXR0cl0gPT09IG51bGwgfHwgZGlmZlthdHRyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lcmdlZFthdHRyXSA9IHZhcnNbYXR0cl1cbiAgICAgIH1cbiAgICB9KVxuICAgIGRpZmZJdGVyYXRvcihmdW5jdGlvbihhdHRyKSB7XG4gICAgICBtZXJnZWRbYXR0cl0gPSBWYXJDYWNoZS5tZXJnZUhlbHBlcih2YXJzICE9PSBudWxsID8gdmFyc1thdHRyXSA6IG51bGwsXG4gICAgICAgICAgZGlmZlthdHRyXSlcbiAgICB9KVxuICAgIHJldHVybiBtZXJnZWRcbiAgfVxuXG4gIHN0YXRpYyBjbGVhclVzZXJDb250ZW50KCkge1xuICAgIFZhckNhY2hlLmRpZmZzID0gdW5kZWZpbmVkXG4gICAgVmFyQ2FjaGUudmFyaWFibGVzID0gbnVsbFxuICAgIFZhckNhY2hlLnZhcmlhbnRzID0gW11cbiAgICBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvID0ge31cbiAgICBWYXJDYWNoZS5tZXJnZWQgPSB1bmRlZmluZWRcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmFyQ2FjaGUuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKXtcbiAgdmFyIHRvcGljcyA9IHt9XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKHRvcGljLCBsaXN0ZW5lcikge1xuICAgICAgaWYoIXRvcGljcy5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRvcGljcywgdG9waWMpKSB0b3BpY3NbdG9waWNdID0gW11cblxuICAgICAgdmFyIGluZGV4ID0gdG9waWNzW3RvcGljXS5wdXNoKGxpc3RlbmVyKSAtIDFcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWxldGUgdG9waWNzW3RvcGljXVtpbmRleF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24odG9waWMsIGluZm8pIHtcbiAgICAgIGlmKCF0b3BpY3MuaGFzT3duUHJvcGVydHkuY2FsbCh0b3BpY3MsIHRvcGljKSkgcmV0dXJuXG5cbiAgICAgIHRvcGljc1t0b3BpY10uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBcdFx0aXRlbShpbmZvICE9IHVuZGVmaW5lZCA/IGluZm8gOiB7fSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KSgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXZlbnRzLmpzIiwiLyoqXG4gKiBBamF4IGZ1bmN0aW9ucyBmcm9tOlxuICpcbiAqIFBhcnNlIEphdmFTY3JpcHQgU0RLXG4gKiBWZXJzaW9uOiAxLjEuNVxuICogQnVpbHQ6IE1vbiBPY3QgMDEgMjAxMiAxNzo1NzoxM1xuICogaHR0cDovL3BhcnNlLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDEyIFBhcnNlLCBJbmMuXG4gKiBUaGUgUGFyc2UgSmF2YVNjcmlwdCBTREsgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmxldCByZXF1ZXN0UXVldWUgPSBbXVxubGV0IG5ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IDEwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xuICAvKipcbiAgICogU2V0cyB0aGUgbmV0d29yayB0aW1lb3V0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyBUaGUgdGltZW91dCBpbiBzZWNvbmRzLlxuICAgKi9cbiAgc3RhdGljIHNldE5ldHdvcmtUaW1lb3V0KHNlY29uZHMpIHtcbiAgICBuZXR3b3JrVGltZW91dFNlY29uZHMgPSBzZWNvbmRzXG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBhamF4IHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgVGhlIGh0dHAgbWV0aG9kLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gb3Blbi5cbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXlCdWZmZXJ8QmxvYnxEb2N1bWVudHxGb3JtRGF0YX0gZGF0YSBUaGUgZGF0YSB0byBiZSBzZW50IGluIGJvZHkuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1Y2Nlc3MgQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gc3VjY2Vzcy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZXJyb3IuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVldWVkIFdoZXRoZXIgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIHF1ZXVlZCBvciBpbW1lZGlhdGVseSBzZW50LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwbGFpblRleHRdIFdoZXRoZXIgdGhlIHJlc3BvbnNlIHNob3VsZCBiZSByZXR1cm5lZCBhcyBwbGFpbiB0ZXh0IG9yIGpzb24uXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzdGF0aWMgYWpheChtZXRob2QsIHVybCwgZGF0YSwgc3VjY2VzcywgZXJyb3IsIHF1ZXVlZCwgcGxhaW5UZXh0KSB7XG4gICAgaWYgKHF1ZXVlZCkge1xuICAgICAgaWYgKE5ldHdvcmsucnVubmluZ1JlcXVlc3QpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICByZXR1cm4gTmV0d29yay5lbnF1ZXVlUmVxdWVzdChhcmd1bWVudHMpXG4gICAgICB9XG4gICAgICBOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8qKiBAbmFtZXNwYWNlIFhEb21haW5SZXF1ZXN0ICoqL1xuICAgIC8qKiBAbmFtZXNwYWNlIGxvY2F0aW9uICoqL1xuICAgIGlmICh0eXBlb2YgWERvbWFpblJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAobG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwOicgJiYgdXJsLmluZGV4T2YoJ2h0dHBzOicpID09PSAwKSB7XG4gICAgICAgIHVybCA9IGBodHRwOiR7dXJsLnN1YnN0cmluZyg2KX1gXG4gICAgICB9XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICByZXR1cm4gUmVmbGVjdC5hcHBseShOZXR3b3JrLmFqYXhJRTgsIG51bGwsIGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlZCA9IGZhbHNlXG5cbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVkID0gdHJ1ZVxuXG4gICAgICAgIGxldCByZXNwb25zZVxuICAgICAgICBsZXQgcmFuQ2FsbGJhY2sgPSBmYWxzZVxuICAgICAgICBpZiAocGxhaW5UZXh0KSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yKG51bGwsIHhocilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICAgIHJhbkNhbGxiYWNrID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmFuQ2FsbGJhY2spIHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlLCB4aHIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yKHJlc3BvbnNlLCB4aHIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXVlZCkge1xuICAgICAgICAgIE5ldHdvcmsucnVubmluZ1JlcXVlc3QgPSBmYWxzZVxuICAgICAgICAgIE5ldHdvcmsuZGVxdWV1ZVJlcXVlc3QoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKVxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbicpIC8vIEF2b2lkIHByZS1mbGlnaHQuXG4gICAgeGhyLnNlbmQoZGF0YSlcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYW5kbGVkKSB7XG4gICAgICAgIHhoci5hYm9ydCgpXG4gICAgICB9XG4gICAgfSwgbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMClcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIGFqYXggcmVxdWVzdCBmb3IgSUU4LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIFRoZSBodHRwIG1ldGhvZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG9wZW4uXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5QnVmZmVyfEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF9IGRhdGEgVGhlIGRhdGEgdG8gYmUgc2VudCBpbiBib2R5LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVycm9yIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGVycm9yLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHF1ZXVlZCBXaGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBxdWV1ZWQgb3IgaW1tZWRpYXRlbHkgc2VudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBwbGFpblRleHQgV2hldGhlciB0aGUgcmVzcG9uc2Ugc2hvdWxkIGJlIHJldHVybmVkIGFzIHBsYWluIHRleHQgb3IganNvbi5cbiAgICovXG4gIHN0YXRpYyBhamF4SUU4KG1ldGhvZCwgdXJsLCBkYXRhLCBzdWNjZXNzLCBlcnJvciwgcXVldWVkLCBwbGFpblRleHQpIHtcbiAgICBsZXQgeGRyID0gbmV3IFhEb21haW5SZXF1ZXN0KClcbiAgICB4ZHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgcmVzcG9uc2VcbiAgICAgIGxldCByYW5DYWxsYmFjayA9IGZhbHNlXG4gICAgICBpZiAocGxhaW5UZXh0KSB7XG4gICAgICAgIHJlc3BvbnNlID0geGRyLnJlc3BvbnNlVGV4dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoeGRyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3IobnVsbCwgeGRyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDApXG4gICAgICAgICAgcmFuQ2FsbGJhY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghcmFuQ2FsbGJhY2spIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSwgeGRyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMClcbiAgICAgIH1cbiAgICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgICAgTmV0d29yay5ydW5uaW5nUmVxdWVzdCA9IGZhbHNlXG4gICAgICAgIE5ldHdvcmsuZGVxdWV1ZVJlcXVlc3QoKVxuICAgICAgfVxuICAgIH1cbiAgICB4ZHIub25lcnJvciA9IHhkci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGVycm9yKG51bGwsIHhkcilcbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgICAgTmV0d29yay5ydW5uaW5nUmVxdWVzdCA9IGZhbHNlXG4gICAgICAgIE5ldHdvcmsuZGVxdWV1ZVJlcXVlc3QoKVxuICAgICAgfVxuICAgIH1cbiAgICB4ZHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgIH1cbiAgICB4ZHIub3BlbihtZXRob2QsIHVybClcbiAgICB4ZHIudGltZW91dCA9IG5ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDBcbiAgICB4ZHIuc2VuZChkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIHJlcXVlc3QgdG8gdGhlIHJlcXVlc3QgcXVldWUuXG4gICAqIEBwYXJhbSB7QXJndW1lbnRzfSByZXF1ZXN0QXJndW1lbnRzIFRoZSByZXF1ZXN0IGFyZ3VtZW50cyBmcm9tIHRoZSBpbml0aWFsIG1ldGhvZCBjYWxsLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIGVucXVldWVSZXF1ZXN0KHJlcXVlc3RBcmd1bWVudHMpIHtcbiAgICByZXF1ZXN0UXVldWUucHVzaChyZXF1ZXN0QXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHJlcXVlc3QgZnJvbSB0aGUgcmVxdWVzdCBxdWV1ZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBkZXF1ZXVlUmVxdWVzdCgpIHtcbiAgICBsZXQgYXJncyA9IHJlcXVlc3RRdWV1ZS5zaGlmdCgpXG4gICAgaWYgKGFyZ3MpIHtcbiAgICAgIFJlZmxlY3QuYXBwbHkoTmV0d29yay5hamF4LCBudWxsLCBhcmdzKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL05ldHdvcmsuanMiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZVxuICogZXF1aXZhbGVudC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGFyaW5nIGFycmF5cywgYXJyYXkgYnVmZmVycywgYm9vbGVhbnMsXG4gKiBkYXRlIG9iamVjdHMsIGVycm9yIG9iamVjdHMsIG1hcHMsIG51bWJlcnMsIGBPYmplY3RgIG9iamVjdHMsIHJlZ2V4ZXMsXG4gKiBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWQgYXJyYXlzLiBgT2JqZWN0YCBvYmplY3RzIGFyZSBjb21wYXJlZFxuICogYnkgdGhlaXIgb3duLCBub3QgaW5oZXJpdGVkLCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIEZ1bmN0aW9ucyBhbmQgRE9NXG4gKiBub2RlcyBhcmUgY29tcGFyZWQgYnkgc3RyaWN0IGVxdWFsaXR5LCBpLmUuIGA9PT1gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmlzRXF1YWwob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogb2JqZWN0ID09PSBvdGhlcjtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRXF1YWwodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNMZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEhhbmRsZXMgSW4tYXBwIG1lc3NhZ2UgZmlsdGVyaW5nXG4gKi9cbmltcG9ydCBWYXJDYWNoZSBmcm9tIFwiLi9WYXJDYWNoZVwiO1xuXG4vKiogcHJpdmF0ZVxuICogcmV0dXJuIHRydWUgaWYgbWVzc2FnZSBwYXNzIG9uZSB0cmlnZ2VyL3ZlcmIgY29uZGl0aW9uXG4gKiBAcGFyYW0gcGFyYW1zIHtPYmplY3R9XG4gKiBAcGFyYW0gbWVzc2FnZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGZpbHRlckJ5VHJpZ2dlcnMgPSAocGFyYW1zPXt9KSA9PiAobWVzc2FnZSkgPT4ge1xuICBjb25zdCB0cmlnZ2VycyA9IG1lc3NhZ2Uud2hlblRyaWdnZXJzICYmIG1lc3NhZ2Uud2hlblRyaWdnZXJzLmNoaWxkcmVuXG4gIGlmKCFwYXJhbXMudHJpZ2dlcnMgfHwgIXRyaWdnZXJzKXtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGxldCBmaWx0ZXJlZEJ5VHJpZ2dlcnMgPSB0cmlnZ2Vycy5maWx0ZXIoKHRyaWdnZXIpID0+IChcbiAgICBwYXJhbXMudHJpZ2dlcnMuaW5jbHVkZXModHJpZ2dlci5zdWJqZWN0KSlcbiAgKVxuXG4gIGlmICghZmlsdGVyZWRCeVRyaWdnZXJzLmxlbmd0aCl7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgdmVyYkZpbHRlciA9IGZpbHRlckJ5VmVyYnMocGFyYW1zKVxuICBpZighdmVyYkZpbHRlcil7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZmlsdGVyZWRCeVRyaWdnZXJzID0gZmlsdGVyZWRCeVRyaWdnZXJzLmZpbHRlcih2ZXJiRmlsdGVyKVxuXG4gIGlmKCFmaWx0ZXJlZEJ5VHJpZ2dlcnMubGVuZ3RoKXtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKiBwcml2YXRlXG4gKiByZXR1cm4gdHJ1ZSBpZiB0cmlnZ2VyIHBhc3MgdmVyYi9ub3VuL29iamVjdHMgY29uZGl0aW9uXG4gKiBAcGFyYW0gcGFyYW1zIHtPYmplY3R9XG4gKiBAcGFyYW0gdHJpZ2dlciB7T2JqZWN0fVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGZpbHRlckJ5VmVyYnMgPSAocGFyYW1zKSA9PiAodHJpZ2dlcikgPT4ge1xuICBpZih0cmlnZ2VyLnZlcmIgPT09ICcnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBldmFsdWF0b3IgPSB0cmlnZ2VyVmVyYkV2YWx1YXRvcnNbdHJpZ2dlci52ZXJiXVxuICBpZiggIWV2YWx1YXRvcih0cmlnZ2VyLCBwYXJhbXMubm91biwgcGFyYW1zLm9iamVjdHMpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqIHBycml2YXRlXG4gKiByZXR1cm4gdHJ1ZSBpZiBtZXNzYWdlIHBhc3MgYWxsIGxpbWl0c1xuICogQHBhcmFtIG5vdyB7RGF0ZS5ub3coKX1cbiAqIEBwYXJhbSBtZXNzYWdlIHtPYmplY3R9XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgZmlsdGVyQnlMaW1pdHMgID0gKG5vdykgPT4gKG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgbGltaXRzID0gbWVzc2FnZS53aGVuTGltaXRzICYmIG1lc3NhZ2Uud2hlbkxpbWl0cy5jaGlsZHJlblxuICBpZighbGltaXRzIHx8IGxpbWl0cy5sZW5ndGggPCAxKXtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBsaW1pdHMuZXZlcnkoKGxpbWl0KSA9PiB7XG4gICAgICBjb25zdCB2ZXJiRXZhbHVhdG9yID0gbGltaXRWZXJiRXZhbHVhdG9yc1tsaW1pdC52ZXJiXVxuICAgICAgaWYgKCF2ZXJiRXZhbHVhdG9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZlcmJFdmFsdWF0b3IobWVzc2FnZS5pZCwgbGltaXQubm91biwgbGltaXQub2JqZWN0c1swXSwgbm93KVxuICAgIH1cbiAgKVxufVxuXG4vKiogcHJpdmF0ZVxuICogcmV0dXJuIHRoZSBhbW91bnQgb2Ygb2N1cmVuY2Ugb2YgbWVzc2FnZVZpZXcgc2luY2UgJ3NpbmNlJ1xuICogQHBhcmFtIHNpbmNlIHtOdW1iZXJ9XG4gKiBAcGFyYW0gbWVzc2FnZVZpZXcge0FycmF5fVxuICogQHJldHVybnMge2Z1bmN0aW9uKCosICopOiAqfVxuICovXG5jb25zdCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQgPSAoc2luY2UpID0+IChpdGVyYXRvcixtZXNzYWdlVmlldykgPT4ge1xuICBpZihtZXNzYWdlVmlldy50ID4gc2luY2Upe1xuICAgIGl0ZXJhdG9yKz0xXG4gIH1cbiAgcmV0dXJuIGl0ZXJhdG9yXG59XG4vKiogcHJpdmF0ZVxuICogcmV0dXJuIHRydWUgaWYgbm8gbGltaXRzIGFyZSBkZWZpbmVkIG9yIGlmIG5vdyBpcyBpbiB0aGUgcmFuZ2VcbiAqIEBwYXJhbSBub3cge0RhdGUubm93KCl9XG4gKiBAcGFyYW0gbGltaXRUaW1lIHtPYmplY3R9XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgZmlsdGVyQnlMaW1pdFRpbWVzID0gKG5vdykgPT4gKGxpbWl0VGltZSkgPT4ge1xuICByZXR1cm4gKCFsaW1pdFRpbWUuc3RhcnRUaW1lIHx8IGxpbWl0VGltZS5zdGFydFRpbWUgPCBub3cpICYmXG4gICAgKCFsaW1pdFRpbWUuZW5kVGltZSB8fCBsaW1pdFRpbWUuZW5kVGltZSA+IG5vdyApXG59XG5cbi8qKiBwcml2YXRlXG4gKiBwcm92aWRlIGV2YWx1YXRvcnMgZm9yIGZpbHRlckJ5VmVyYnNcbiAqL1xuY29uc3QgdHJpZ2dlclZlcmJFdmFsdWF0b3JzID0ge1xuICB0cmlnZ2VyczogKHRyaWdnZXIsIG5vdW4pID0+IHtcbiAgICByZXR1cm4gbm91biA9PT0gdHJpZ2dlci5ub3VuXG4gIH0sXG4gIHRyaWdnZXJzV2l0aFBhcmFtZXRlcjogKHRyaWdnZXIsIG5vdW4sIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBub3VuID09PSB0cmlnZ2VyLm5vdW4gJiYgcGFyYW1zLnBhcmFtVmFsdWUgPT09IHRyaWdnZXIub2JqZWN0c1twYXJhbXMucGFyYW1OYW1lXVxuICB9LFxuICBjaGFuZ2VzVG86ICh0cmlnZ2VyLCBub3VuLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbm91biA9PT0gdHJpZ2dlci5ub3VuICYmIHBhcmFtcy50byA9PT0gdHJpZ2dlci5vYmplY3RzWzBdXG4gIH0sXG4gIGNoYW5nZXNGcm9tVG86ICh0cmlnZ2VyLCBub3VuLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbm91biA9PT0gdHJpZ2dlci5ub3VuICYmXG4gICAgICBwYXJhbXMuZnJvbSA9PT0gdHJpZ2dlci5vYmplY3RzWzBdICYmXG4gICAgICBwYXJhbXMudG8gPT09IHRyaWdnZXIub2JqZWN0c1sxXVxuICB9XG59XG5cbi8qKiBwcml2YXRlXG4gKiBwcm92aWRlIGV2YWx1YXRvcnMgZm9yIGZpbHRlckJ5TGltaXRcbiAqL1xuY29uc3QgbGltaXRWZXJiRXZhbHVhdG9ycyA9IHtcbiAgbGltaXRVc2VyOiAobWVzc2FnZUlkLCBtYXhWaWV3KSA9PiB7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCkubGVuZ3RoIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdE1vbnRoOiAobWVzc2FnZUlkLCBtYXhWaWV3LGFtb3VudCxub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDMwICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdFdlZWs6IChtZXNzYWdlSWQsIG1heFZpZXcsYW1vdW50LG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogNyAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwwKSA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXREYXk6IChtZXNzYWdlSWQsIG1heFZpZXcsYW1vdW50LG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgIHJldHVybiBWYXJDYWNoZS5nZXRNZXNzYWdlVmlldyhtZXNzYWdlSWQpXG4gICAgICAucmVkdWNlKCBjb3VudE1lc3NhZ2VWaWV3c0J5TGltaXQoc2luY2UpLDApIDwgbWF4Vmlld1xuICB9LFxuICBsaW1pdEhvdXI6IChtZXNzYWdlSWQsIG1heFZpZXcsYW1vdW50LG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogNjAgKiA2MCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwwKSA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXRNaW51dGU6IChtZXNzYWdlSWQsIG1heFZpZXcsYW1vdW50LG5vdykgPT4ge1xuICAgIGNvbnN0IHNpbmNlID0gbm93IC0gYW1vdW50ICogNjAgKiAxMDAwXG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZClcbiAgICAgIC5yZWR1Y2UoIGNvdW50TWVzc2FnZVZpZXdzQnlMaW1pdChzaW5jZSksMCkgPCBtYXhWaWV3XG4gIH0sXG4gIGxpbWl0U2Vjb25kOiAobWVzc2FnZUlkLCBtYXhWaWV3LGFtb3VudCxub3cpID0+IHtcbiAgICBjb25zdCBzaW5jZSA9IG5vdyAtIGFtb3VudCAqIDEwMDBcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0TWVzc2FnZVZpZXcobWVzc2FnZUlkKVxuICAgICAgLnJlZHVjZSggY291bnRNZXNzYWdlVmlld3NCeUxpbWl0KHNpbmNlKSwwKSA8IG1heFZpZXdcbiAgfSxcbiAgbGltaXRTZXNzaW9uOiAobWVzc2FnZUlkLCBtYXhWaWV3KSA9PiB7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldE1lc3NhZ2VWaWV3KG1lc3NhZ2VJZCx0cnVlKS5sZW5ndGggPCBtYXhWaWV3XG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbk1hbmFnZXIge1xuXG4gIC8qKiBwdWJsaWNcbiAgICogcmV0dXJuIGFuIGFycmF5IG9mIGZpbHRlcmVkIG1lc3NhZ2VcbiAgICogQHBhcmFtIG1lc3NhZ2VzIHtPYmplY3R9XG4gICAqIEBwYXJhbSB0cmlnZ2VyIHtTdHJpbmd9XG4gICAqIEBwYXJhbSB2ZXJiIHtTdHJpbmd9XG4gICAqIEBwYXJhbSBub3VuIHtTdHJpbmd9XG4gICAqIEBwYXJhbSBwYXJhbXMge3tcbiAgICogIGZyb20/OnN0cmluZyxcbiAgICogIHRvPzpzdHJpbmcsXG4gICAqICBwYXJhbVZhbHVlPzpTdHJpbmcsXG4gICAqICBwYXJhbU5hbWU/OlN0cmluZyxcbiAgICogfX1cbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIGZpbHRlck1lc3NhZ2VzKG1lc3NhZ2VzLCB0cmlnZ2VyPScnLCB2ZXJiPW51bGwsIG5vdW49JycsIHBhcmFtcz17fSkge1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuXG4gICAgbGV0IGZpbHRlcmVkTWVzc2FnZXMgPSBPYmplY3QuZW50cmllcyhtZXNzYWdlcylcbiAgICAgIC5tYXAoKFtpZCwgbWVzc2FnZV0pID0+ICh7IGlkLCAuLi5tZXNzYWdlIH0pKVxuXG4gICAgZmlsdGVyZWRNZXNzYWdlcyA9IGZpbHRlcmVkTWVzc2FnZXNcbiAgICAgIC5maWx0ZXIoZmlsdGVyQnlUcmlnZ2VycyhcbiAgICAgICAge1xuICAgICAgICAgIHRyaWdnZXJzOlt0cmlnZ2VyXVxuICAgICAgICB9XG4gICAgICAgICkpXG4gICAgICAuZmlsdGVyKGZpbHRlckJ5TGltaXRzKG5vdykpXG4gICAgICAuZmlsdGVyKGZpbHRlckJ5TGltaXRUaW1lcyhub3cpKVxuICAgIHJldHVybiBmaWx0ZXJlZE1lc3NhZ2VzXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY3Rpb25NYW5hZ2VyLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmNvbnN0IGRhdGFCcm93c2VyID0gW3tcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdDaHJvbWUnLFxuICBpZGVudGl0eTogJ0Nocm9tZSdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdPbW5pV2ViJyxcbiAgdmVyc2lvblNlYXJjaDogJ09tbmlXZWIvJyxcbiAgaWRlbnRpdHk6ICdPbW5pV2ViJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ0FwcGxlJyxcbiAgaWRlbnRpdHk6ICdTYWZhcmknLFxuICB2ZXJzaW9uU2VhcmNoOiAnVmVyc2lvbidcbn0sIHtcbiAgcHJvcDogd2luZG93Lm9wZXJhLFxuICBpZGVudGl0eTogJ09wZXJhJyxcbiAgdmVyc2lvblNlYXJjaDogJ1ZlcnNpb24nXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnaUNhYicsXG4gIGlkZW50aXR5OiAnaUNhYidcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdLREUnLFxuICBpZGVudGl0eTogJ0tvbnF1ZXJvcidcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdGaXJlZm94JyxcbiAgaWRlbnRpdHk6ICdGaXJlZm94J1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ0NhbWlubycsXG4gIGlkZW50aXR5OiAnQ2FtaW5vJ1xufSwgeyAvLyBmb3IgbmV3ZXIgTmV0c2NhcGUgKDYrKVxuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ05ldHNjYXBlJyxcbiAgaWRlbnRpdHk6ICdOZXRzY2FwZSdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdNU0lFJyxcbiAgaWRlbnRpdHk6ICdFeHBsb3JlcicsXG4gIHZlcnNpb25TZWFyY2g6ICdNU0lFJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ0dlY2tvJyxcbiAgaWRlbnRpdHk6ICdNb3ppbGxhJyxcbiAgdmVyc2lvblNlYXJjaDogJ3J2J1xufSwgeyAvLyBmb3Igb2xkZXIgTmV0c2NhcGUgKDQtKVxuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ01vemlsbGEnLFxuICBpZGVudGl0eTogJ05ldHNjYXBlJyxcbiAgdmVyc2lvblNlYXJjaDogJ01vemlsbGEnXG59XVxuXG5jb25zdCBkYXRhT1MgPSBbe1xuICBzdHJpbmc6IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgc3ViU3RyaW5nOiAnV2luJyxcbiAgaWRlbnRpdHk6ICdXaW5kb3dzJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgc3ViU3RyaW5nOiAnTWFjJyxcbiAgaWRlbnRpdHk6ICdNYWMgT1MnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnaVBob25lJyxcbiAgaWRlbnRpdHk6ICdpT1MnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnBsYXRmb3JtLFxuICBzdWJTdHJpbmc6ICdMaW51eCcsXG4gIGlkZW50aXR5OiAnTGludXgnXG59XVxuXG4vLyBCcm93c2VyIGRldGVjdGlvbi4gU291cmNlOiBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL2RldGVjdC5odG1sXG4vKipcbiAqIEhlbHBlciBjbGFzcyB0byBkZXRlY3Qgd2hpY2ggYnJvd3NlciBjbGllbnQgaXMgdXNpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJEZXRlY3RvciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgb2JqZWN0IHdpdGggY3VycmVudCBicm93c2VyIHNldHRpbmdzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5icm93c2VyID0gdGhpcy5fc2VhcmNoU3RyaW5nKGRhdGFCcm93c2VyKSB8fCAnVW5rbm93biBCcm93c2VyJ1xuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMuX3NlYXJjaFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCkgfHxcbiAgICAgICAgdGhpcy5fc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IuYXBwVmVyc2lvbikgfHwgJ1Vua25vd24gVmVyc2lvbidcbiAgICB0aGlzLk9TID0gdGhpcy5fc2VhcmNoU3RyaW5nKGRhdGFPUykgfHwgJ1Vua25vd24gT1MnXG4gIH1cblxuICAvKipcbiAgICogTWF0Y2hlcyB0aGUgY2xpZW50J3Mgc3lzdGVtIHRvIHRoZSBwcmVkZWZpbmVkIHN5c3RlbSBsaXN0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSBvYmplY3QgdG8gc2Nhbi5cbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgZm91bmQgaWRlbnRpdHkgc3RyaW5nLlxuICAgKi9cbiAgX3NlYXJjaFN0cmluZyhkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YVN0cmluZyA9IGRhdGFbaV0uc3RyaW5nXG4gICAgICBsZXQgZGF0YVByb3AgPSBkYXRhW2ldLnByb3BcbiAgICAgIHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyA9IGRhdGFbaV0udmVyc2lvblNlYXJjaCB8fCBkYXRhW2ldLmlkZW50aXR5XG4gICAgICBpZiAoZGF0YVN0cmluZykge1xuICAgICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKGRhdGFbaV0uc3ViU3RyaW5nKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRhdGFQcm9wKSB7XG4gICAgICAgIHJldHVybiBkYXRhW2ldLmlkZW50aXR5XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIGdpdmVuIHN5c3RlbS5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFTdHJpbmcgVGhlIGRhdGEgb2JqZWN0IHRvIHNjYW4uXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGZvdW5kIG51bWJlci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZWFyY2hWZXJzaW9uKGRhdGFTdHJpbmcpIHtcbiAgICBpZiAoIWRhdGFTdHJpbmcpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBsZXQgaW5kZXggPSBkYXRhU3RyaW5nLmluZGV4T2YodGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhU3RyaW5nLnN1YnN0cmluZyhpbmRleCArIHRoaXMudmVyc2lvblNlYXJjaFN0cmluZy5sZW5ndGggKyAxKSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Jyb3dzZXJEZXRlY3Rvci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBTb2NrZXRJb0NsaWVudCBmcm9tICcuL1NvY2tldElvQ2xpZW50J1xuaW1wb3J0IFZhckNhY2hlIGZyb20gJy4vVmFyQ2FjaGUnXG5pbXBvcnQgTGVhbnBsdW1SZXF1ZXN0IGZyb20gJy4vTGVhbnBsdW1SZXF1ZXN0J1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vRXZlbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFucGx1bVNvY2tldCB7XG5cbiAgc3RhdGljIHNvY2tldEhvc3QgPSAnZGV2LmxlYW5wbHVtLmNvbSdcblxuICBzdGF0aWMgY29ubmVjdCgpIHtcbiAgICBpZiAoIVdlYlNvY2tldCkge1xuICAgICAgY29uc29sZS5sb2coJ1lvdXIgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCBXZWJTb2NrZXRzLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgY2xpZW50ID0gbmV3IFNvY2tldElvQ2xpZW50KClcbiAgICBsZXQgYXV0aFNlbnQgPSBmYWxzZVxuICAgIGNsaWVudC5vbm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghYXV0aFNlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBDb25uZWN0ZWQgdG8gZGV2ZWxvcG1lbnQgc2VydmVyLicpXG4gICAgICAgIGxldCBhcmdzID0ge31cbiAgICAgICAgYXJnc1tDb25zdGFudHMuUEFSQU1TLkFQUF9JRF0gPSBMZWFucGx1bVJlcXVlc3QuYXBwSWRcbiAgICAgICAgYXJnc1tDb25zdGFudHMuUEFSQU1TLkRFVklDRV9JRF0gPSBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWRcbiAgICAgICAgY2xpZW50LnNlbmQoJ2F1dGgnLCBhcmdzKVxuICAgICAgICBhdXRoU2VudCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgY2xpZW50Lm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBTb2NrZXQgZXJyb3InLCBldmVudClcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqIEBwYXJhbSBhcmdzW10uZW1haWxcbiAgICAgKi9cbiAgICBjbGllbnQub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQsIGFyZ3MpIHtcbiAgICAgIGlmIChldmVudCA9PT0gJ3VwZGF0ZVZhcnMnKSB7XG4gICAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLkdFVF9WQVJTLFxuICAgICAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5DTFVERV9ERUZBVUxUUywgZmFsc2UpLCB7XG4gICAgICAgICAgICAgIHF1ZXVlZDogZmFsc2UsXG4gICAgICAgICAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICAgICAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGxldCBnZXRWYXJzUmVzcG9uc2UgPSBMZWFucGx1bVJlcXVlc3QuZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSU11cbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFudHMgPSBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVFNdXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbk1ldGFkYXRhID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLkFDVElPTl9NRVRBREFUQV1cbiAgICAgICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsdWVzLCBWYXJDYWNoZS5kaWZmcykpIHtcbiAgICAgICAgICAgICAgICAgIFZhckNhY2hlLmFwcGx5RGlmZnModmFsdWVzLCB2YXJpYW50cywgYWN0aW9uTWV0YWRhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdnZXRWYXJpYWJsZXMnKSB7XG4gICAgICAgIFZhckNhY2hlLnNlbmRWYXJpYWJsZXMoKVxuICAgICAgICBjbGllbnQuc2VuZCgnZ2V0Q29udGVudFJlc3BvbnNlJywge1xuICAgICAgICAgICd1cGRhdGVkJzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ2dldEFjdGlvbnMnKSB7XG4gICAgICAgIC8vIFVuc3VwcG9ydGVkIGluIEphdmFTY3JpcHQgU0RLLlxuICAgICAgICBjbGllbnQuc2VuZCgnZ2V0Q29udGVudFJlc3BvbnNlJywge1xuICAgICAgICAgICd1cGRhdGVkJzogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdyZWdpc3RlckRldmljZScpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgICAgIGFsZXJ0KGBZb3VyIGRldmljZSBoYXMgYmVlbiByZWdpc3RlcmVkIHRvICR7YXJnc1swXS5lbWFpbH0uYClcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICd0cmlnZ2VyJykge1xuICAgICAgICBldmVudHMucHVibGlzaCgnd2Vic29ja2V0L3RyaWdnZXInLCB7XG4gICAgICAgICAgYXJnc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBjbGllbnQub25jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBEaXNjb25uZWN0ZWQgdG8gZGV2ZWxvcG1lbnQgc2VydmVyLicpXG4gICAgICBhdXRoU2VudCA9IGZhbHNlXG4gICAgfVxuICAgIGNsaWVudC5jb25uZWN0KExlYW5wbHVtU29ja2V0LnNvY2tldEhvc3QpXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWNsaWVudC5jb25uZWN0ZWQgJiYgIWNsaWVudC5jb25uZWN0aW5nKSB7XG4gICAgICAgIGNsaWVudC5jb25uZWN0KExlYW5wbHVtU29ja2V0LnNvY2tldEhvc3QpXG4gICAgICB9XG4gICAgfSwgNTAwMClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xlYW5wbHVtU29ja2V0LmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnXG5pbXBvcnQgTG9jYWxTdG9yYWdlTWFuYWdlciBmcm9tICcuL0xvY2FsU3RvcmFnZU1hbmFnZXInXG5pbXBvcnQgTGVhbnBsdW1SZXF1ZXN0IGZyb20gJy4vTGVhbnBsdW1SZXF1ZXN0J1xuXG5jb25zdCBBUFBMSUNBVElPTl9TRVJWRVJfUFVCTElDX0tFWSA9XG4gICAgJ0JJbldQcFdudGZSMzlyZ1hTUDA0cHFkbUVkREdhNTB6NnpxYk12eHl4SkN3elhJdVNwU2g4Qzg4OC1DZko4MldFTGw3WGU4Y2pBJyArXG4gICAgJ25mQ3QtM3ZLMENpNjgnXG5cbmxldCBpc1N1YnNjcmliZWQgPSBmYWxzZVxubGV0IHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24gPSBudWxsXG5cbi8qKlxuICogUHVzaCBNYW5hZ2VyIGhhbmRsZXMgdGhlIHJlZ2lzdHJhdGlvbiBhbmQgc3Vic2NyaXB0aW9uIGZvciB3ZWIgcHVzaC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVzaE1hbmFnZXIge1xuICAvKipcbiAgICogV2hldGhlciBvciBub3Qgd2ViIHB1c2ggaXMgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIHN1cHBvcnRlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlciAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yICYmXG4gICAgICAgICdQdXNoTWFuYWdlcicgaW4gd2luZG93XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIGJyb3dzZXIgaXMgc3Vic2NyaWJlZCB0byB3ZWIgcHVzaCBub3RpZmljYXRpb25zLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBUcnVlIGlmIHN1YnNjcmliZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3Vic2NyaWJlZCgpIHtcbiAgICBpZiAoIVB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSlcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBQdXNoTWFuYWdlci5nZXRTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLyoqIEBuYW1lc3BhY2UgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyIFRoZSBwdXNoIG1hbmFnZXIgb2JqZWN0IG9mIHRoZSBicm93c2VyLiAqKi9cbiAgICAgICAgICAgICAgLyoqIEBuYW1lc3BhY2UgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbiAqKi9cbiAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpXG4gICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gc3Vic2NyaXB0aW9uICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBQdXNoTWFuYWdlci51cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpc1N1YnNjcmliZWQpXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgZm9yIFdlYlB1c2guXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICBzZXJ2aWNlV29ya2VyVXJsIFRoZSB1cmwgdGhhdCBzZXJ2ZXMgdGhlIHNlcnZpY2Ugd29ya2VyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uIHlvdXIgZG9tYWluLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAgICAgICBUaGUgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdpdGggcmVzdWx0LlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IG5vdGhpbmdcbiAgICovXG4gIHN0YXRpYyByZWdpc3RlcihzZXJ2aWNlV29ya2VyVXJsLCBjYWxsYmFjaykge1xuICAgIGlmICghUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3VwcG9ydGVkKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogUHVzaCBtZXNzYWdpbmcgaXMgbm90IHN1cHBvcnRlZC4nKVxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGZhbHNlKVxuICAgIH1cbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcbiAgICAgICAgc2VydmljZVdvcmtlclVybCA/IHNlcnZpY2VXb3JrZXJVcmwgOiAnL3N3Lm1pbi5qcycsIG51bGwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25cblxuICAgICAgICAgIGxldCBzZXJ2aWNlV29ya2VyXG4gICAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlV29ya2VyID0gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmdcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlZ2lzdHJhdGlvbi53YWl0aW5nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlV29ya2VyID0gcmVnaXN0cmF0aW9uLndhaXRpbmdcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlZ2lzdHJhdGlvbi5hY3RpdmUpIHtcbiAgICAgICAgICAgIHNlcnZpY2VXb3JrZXIgPSByZWdpc3RyYXRpb24uYWN0aXZlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFzZXJ2aWNlV29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBzdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIGluaXRpYWwgc3Vic2NyaXB0aW9uIHZhbHVlXG4gICAgICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9ICEoc3Vic2NyaXB0aW9uID09PSBudWxsKVxuICAgICAgICAgICAgICAgIGlmIChpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgUHVzaE1hbmFnZXIudXBkYXRlTmV3U3Vic2NyaXB0aW9uT25TZXJ2ZXIoc3Vic2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGlzU3Vic2NyaWJlZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlcnZpY2VXb3JrZXIuc3RhdGUgPT09ICdhY3RpdmF0ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlKClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnN0YXRlICE9PSAnYWN0aXZhdGVkJykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3Vic2NyaWJlKClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFNlcnZpY2UgV29ya2VyIEVycm9yOiAnLCBlcnJvcilcbiAgICAgICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdGhlIHVzZXIoYnJvd3NlcikgdG8gcHVzaC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVzb2x2ZXMgaWYgc3Vic2NyaXB0aW9uIHN1Y2Nlc3NmdWwsIG90aGVyd2lzZSByZWplY3RzLlxuICAgKi9cbiAgc3RhdGljIHN1YnNjcmliZVVzZXIoKSB7XG4gICAgY29uc3QgYXBwbGljYXRpb25TZXJ2ZXJLZXkgPSBQdXNoTWFuYWdlci51cmxCNjRUb1VpbnQ4QXJyYXkoQVBQTElDQVRJT05fU0VSVkVSX1BVQkxJQ19LRVkpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLyoqIEBuYW1lc3BhY2Ugc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5zdWJzY3JpYmUgU3Vic2NyaWJlIHRvIHB1c2guICoqL1xuICAgICAgcmV0dXJuIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuc3Vic2NyaWJlKHtcbiAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxuICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleVxuICAgICAgfSlcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgUHVzaE1hbmFnZXIudXBkYXRlTmV3U3Vic2NyaXB0aW9uT25TZXJ2ZXIoc3Vic2NyaXB0aW9uKVxuICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSB0cnVlXG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGlzU3Vic2NyaWJlZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KClcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoYExlYW5wbHVtOiBGYWlsZWQgdG8gc3Vic2NyaWJlIHRoZSB1c2VyOiAke2Vycn1gKVxuICAgICAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSB0aGUgdXNlcihicm93c2VyKSBmcm9tIHB1c2guXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIGlmIHVuc3Vic2NyaWJlZCwgb3RoZXJ3aXNlIHJlamVjdHMuXG4gICAqL1xuICBzdGF0aWMgdW5zdWJzY3JpYmVVc2VyKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBQdXNoTWFuYWdlci5pc1dlYlB1c2hTdWJzY3JpYmVkKCkudGhlbigoc3Vic2NyaWJlZCkgPT4ge1xuICAgICAgICBpZiAoIXN1YnNjcmliZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIC8qKiBAbmFtZXNwYWNlIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIudW5zdWJzY3JpYmUgVW5zdWJzY3JpYmUgdG9cbiAgICAgICAgICAgICAgICAgKiAgcHVzaC4gKiovXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChgTGVhbnBsdW06IEVycm9yIHVuc3Vic2NyaWJpbmc6ICR7ZXJyb3J9YClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihzdWNjZXNzKSB7XG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIG9iamVjdCBmcm9tIGJyb3dzZXIuXG4gICAqIEByZXR1cm4ge29iamVjdH0gUmV0dXJucyB0aGUgcmVnaXN0cmF0aW9uIG9yIG51bGwuXG4gICAqL1xuICBzdGF0aWMgZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKSB7XG4gICAgICAgIHJlc29sdmUoc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBAbmFtZXNwYWNlIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbiBSZXRyaWV2ZXMgdGhlICBwdXNoIHJlZ2lzdHJhdGlvblxuICAgICAgICAgKiBmcm9tIHRoZSBicm93c2VyLiAqKi9cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uKCkudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvblxuICAgICAgICAgIHJlc29sdmUocmVnaXN0cmF0aW9uKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRW5jb2RlcyBhIGJhc2U2NCB1cmwgc3RyaW5nIHRvIGFuIHVpbnQ4IGFycmFyeS5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBiYXNlNjRTdHJpbmcgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fSAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgc3RhdGljIHVybEI2NFRvVWludDhBcnJheShiYXNlNjRTdHJpbmcpIHtcbiAgICBjb25zdCBwYWRkaW5nID0gJz0nLnJlcGVhdCgoNCAtIGJhc2U2NFN0cmluZy5sZW5ndGggJSA0KSAlIDQpXG4gICAgY29uc3QgYmFzZTY0ID0gKGJhc2U2NFN0cmluZyArIHBhZGRpbmcpXG4gICAgICAgIC5yZXBsYWNlKC8tL2csICcrJylcbiAgICAgICAgLnJlcGxhY2UoL18vZywgJy8nKVxuXG4gICAgY29uc3QgcmF3RGF0YSA9IHdpbmRvdy5hdG9iKGJhc2U2NClcbiAgICBjb25zdCBvdXRwdXRBcnJheSA9IG5ldyBVaW50OEFycmF5KHJhd0RhdGEubGVuZ3RoKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdEYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICBvdXRwdXRBcnJheVtpXSA9IHJhd0RhdGEuY2hhckNvZGVBdChpKVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0QXJyYXlcbiAgfVxuXG4gIC8qKlxuICAgKiBbcHJlcGFyZVN1YnNjcmlwdGlvbiBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7b2JqZWN0fSBzdWJzY3JpcHRpb24gVGhlIHJhdyBzdWJzY3JpcHRpb24gZnJvbSBicm93c2VyLlxuICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gc3Vic2NyaXB0aW9uLmdldEtleSBUaGUgc3Vic2NyaXB0aW9uIGtleS5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBzdWJzY3JpcHRpb24uZW5kcG9pbnQgVGhlIHN1YnNjcmlwdGlvbiBrZXkuXG4gICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gYmUgc2VudCB0byBzZXJ2ZXIuXG4gICAqL1xuICBzdGF0aWMgcHJlcGFyZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICBsZXQga2V5ID0gc3Vic2NyaXB0aW9uLmdldEtleSA/IHN1YnNjcmlwdGlvbi5nZXRLZXkoJ3AyNTZkaCcpIDogJydcbiAgICBsZXQgYXV0aCA9IHN1YnNjcmlwdGlvbi5nZXRLZXkgPyBzdWJzY3JpcHRpb24uZ2V0S2V5KCdhdXRoJykgOiAnJ1xuICAgIC8vIG5vaW5zcGVjdGlvbiBFUzZNb2R1bGVzRGVwZW5kZW5jaWVzXG4gICAgbGV0IGtleUFzY2lpID0gYnRvYShSZWZsZWN0LmFwcGx5KFN0cmluZy5mcm9tQ2hhckNvZGUsIG51bGwsIG5ldyBVaW50OEFycmF5KGtleSkpKVxuICAgIC8vIG5vaW5zcGVjdGlvbiBFUzZNb2R1bGVzRGVwZW5kZW5jaWVzXG4gICAgbGV0IGF1dGhBc2NpaSA9IGJ0b2EoUmVmbGVjdC5hcHBseShTdHJpbmcuZnJvbUNoYXJDb2RlLCBudWxsLCBuZXcgVWludDhBcnJheShhdXRoKSkpXG4gICAgcmV0dXJuIHtcbiAgICAgIGVuZHBvaW50OiBzdWJzY3JpcHRpb24uZW5kcG9pbnQsXG4gICAgICBrZXk6IGtleUFzY2lpLFxuICAgICAgYXV0aDogYXV0aEFzY2lpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBuZXcgc3Vic2NyaXB0aW9uIG9iamVjdCB0byB0aGUgTGVhbnBsdW0gc2VydmVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3Vic2NyaXB0aW9uIFRoZSBzdWJzY3JpcHRpb24uXG4gICAqL1xuICBzdGF0aWMgdXBkYXRlTmV3U3Vic2NyaXB0aW9uT25TZXJ2ZXIoc3Vic2NyaXB0aW9uKSB7XG4gICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgbGV0IHByZXBhcmVkU3Vic2NyaXB0aW9uID0gUHVzaE1hbmFnZXIucHJlcGFyZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pXG4gICAgICBsZXQgcHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwcmVwYXJlZFN1YnNjcmlwdGlvbilcbiAgICAgIGxldCBleGlzdGluZ1N1YnNjcmlwdGlvblN0cmluZyA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlBVU0hfU1VCU0NSSVBUSU9OKVxuICAgICAgaWYgKCFpc0VxdWFsKGV4aXN0aW5nU3Vic2NyaXB0aW9uU3RyaW5nLCBwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZykpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5QVVNIX1NVQlNDUklQVElPTixcbiAgICAgICAgICAgIHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nKVxuICAgICAgICBQdXNoTWFuYWdlci5zZXRTdWJzY3JpcHRpb24ocHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgdGhlIHN1YnNjcmlwdGlvbiB0byB0aGUgTGVhbnBsdW0gc2VydmVyLlxuICAgKiBAcGFyYW0ge1N0cmluZy9PYmplY3R9IHN1YnNjcmlwdGlvbiBUaGUgc3Vic2NyaXB0aW9uIHN0cmluZy5cbiAgICovXG4gIHN0YXRpYyBzZXRTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TRVRfREVWSUNFX0FUVFJJQlVURVMsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpLmFkZChDb25zdGFudHMuUEFSQU1TLldFQl9QVVNIX1NVQlNDUklQVElPTixcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiksIHtcbiAgICAgICAgICBxdWV1ZWQ6IGZhbHNlLFxuICAgICAgICAgIHNlbmROb3c6IHRydWVcbiAgICAgICAgfVxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1B1c2hNYW5hZ2VyLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgSW50ZXJuYWxTdGF0ZSBmcm9tICcuL0ludGVybmFsU3RhdGUnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBCcm93c2VyRGV0ZWN0b3IgZnJvbSAnLi9Ccm93c2VyRGV0ZWN0b3InXG5pbXBvcnQgUHVzaE1hbmFnZXIgZnJvbSAnLi9QdXNoTWFuYWdlcidcbmltcG9ydCBBY3Rpb25NYW5hZ2VyIGZyb20gJy4vQWN0aW9uTWFuYWdlcidcbmltcG9ydCBMb2NhbFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vTG9jYWxTdG9yYWdlTWFuYWdlcidcbmltcG9ydCBWYXJDYWNoZSBmcm9tICcuL1ZhckNhY2hlJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcbmltcG9ydCBMZWFucGx1bVNvY2tldCBmcm9tICcuL0xlYW5wbHVtU29ja2V0J1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL0V2ZW50cydcblxubGV0IF9icm93c2VyRGV0ZWN0b3IgPSBuZXcgQnJvd3NlckRldGVjdG9yKClcblxuLyoqXG4gKiBAcHJlc2VydmUgTGVhbnBsdW0gSmF2YXNjcmlwdCBTREsuXG4gKiBDb3B5cmlnaHQgMjAxNiwgTGVhbnBsdW0sIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBZb3UgbWF5IG5vdCBkaXN0cmlidXRlIHRoaXMgc291cmNlIGNvZGUgd2l0aG91dCBwcmlvciB3cml0dGVuIHBlcm1pc3Npb25cbiAqIGZyb20gTGVhbnBsdW0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYW5wbHVtIHtcblxuICBzdGF0aWMgc2V0QXBpUGF0aChhcGlQYXRoKSB7XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuYXBpUGF0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIExlYW5wbHVtUmVxdWVzdC5hcGlQYXRoID0gYXBpUGF0aFxuICB9XG5cbiAgc3RhdGljIHNldEVtYWlsKGVtYWlsKSB7XG4gICAgTGVhbnBsdW0uX2VtYWlsID0gZW1haWxcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBuZXR3b3JrIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIFRoZSB0aW1lb3V0IGluIHNlY29uZHMuXG4gICAqL1xuICBzdGF0aWMgc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcykge1xuICAgIExlYW5wbHVtUmVxdWVzdC5zZXROZXR3b3JrVGltZW91dChzZWNvbmRzKVxuICB9XG5cbiAgc3RhdGljIHNldFZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5zZXRWYXJpYW50RGVidWdJbmZvRW5hYmxlZCh2YXJpYW50RGVidWdJbmZvRW5hYmxlZClcbiAgfTtcblxuICBzdGF0aWMgZ2V0VmFyaWFudERlYnVnSW5mbygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUuZ2V0VmFyaWFudERlYnVnSW5mbygpXG4gIH07XG5cbiAgc3RhdGljIHNldEFwcElkRm9yRGV2ZWxvcG1lbnRNb2RlKGFwcElkLCBhY2Nlc3NLZXkpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QuYXBwSWQgPSBhcHBJZFxuICAgIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkgPSBhY2Nlc3NLZXlcbiAgICBJbnRlcm5hbFN0YXRlLmRldk1vZGUgPSB0cnVlXG4gIH1cblxuICBzdGF0aWMgc2V0QXBwSWRGb3JQcm9kdWN0aW9uTW9kZShhcHBJZCwgYWNjZXNzS2V5KSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmFwcElkID0gYXBwSWRcbiAgICBMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5ID0gYWNjZXNzS2V5XG4gICAgSW50ZXJuYWxTdGF0ZS5kZXZNb2RlID0gZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBzZXRTb2NrZXRIb3N0KGhvc3QpIHtcbiAgICBMZWFucGx1bVNvY2tldC5zb2NrZXRIb3N0ID0gaG9zdFxuICB9XG5cbiAgc3RhdGljIHNldERldmljZUlkKGRldmljZUlkKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID0gZGV2aWNlSWRcbiAgfVxuXG4gIHN0YXRpYyBzZXRBcHBWZXJzaW9uKHZlcnNpb25OYW1lKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnZlcnNpb25OYW1lID0gdmVyc2lvbk5hbWVcbiAgfVxuXG4gIHN0YXRpYyBzZXREZXZpY2VOYW1lKGRldmljZU5hbWUpIHtcbiAgICBMZWFucGx1bS5fZGV2aWNlTmFtZSA9IGRldmljZU5hbWVcbiAgfVxuXG4gIHN0YXRpYyBzZXREZXZpY2VNb2RlbChkZXZpY2VNb2RlbCkge1xuICAgIExlYW5wbHVtLl9kZXZpY2VNb2RlbCA9IGRldmljZU1vZGVsXG4gIH1cblxuICBzdGF0aWMgc2V0U3lzdGVtTmFtZShzeXN0ZW1OYW1lKSB7XG4gICAgTGVhbnBsdW0uX3N5c3RlbU5hbWUgPSBzeXN0ZW1OYW1lXG4gIH1cblxuICBzdGF0aWMgc2V0U3lzdGVtVmVyc2lvbihzeXN0ZW1WZXJzaW9uKSB7XG4gICAgTGVhbnBsdW0uX3N5c3RlbVZlcnNpb24gPSBzeXN0ZW1WZXJzaW9uXG4gIH1cblxuICBzdGF0aWMgc2V0VmFyaWFibGVzKHZhcmlhYmxlcykge1xuICAgIFZhckNhY2hlLnNldFZhcmlhYmxlcyh2YXJpYWJsZXMpXG4gIH1cblxuICBzdGF0aWMgc2V0UmVxdWVzdEJhdGNoaW5nKGJhdGNoRW5hYmxlZCwgY29vbGRvd25TZWNvbmRzKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmJhdGNoRW5hYmxlZCA9IGJhdGNoRW5hYmxlZFxuICAgIExlYW5wbHVtUmVxdWVzdC5iYXRjaENvb2xkb3duID0gY29vbGRvd25TZWNvbmRzXG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS5nZXRWYXJpYWJsZXMoKVxuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhYmxlKC4uLmFyZ3MpIHtcbiAgICBsZXQgY3VycmVudCA9IExlYW5wbHVtLmdldFZhcmlhYmxlcygpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudFthcmdzW2ldXVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFxuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhbnRzKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS52YXJpYW50cyB8fCBbXVxuICB9XG5cbiAgc3RhdGljIGFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUuYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcilcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5yZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgZm9yY2VDb250ZW50VXBkYXRlKGNhbGxiYWNrKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuR0VUX1ZBUlMsXG4gICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfREVGQVVMVFMsIGZhbHNlKVxuICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPLCBJbnRlcm5hbFN0YXRlLnZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKSwge1xuICAgICAgICBxdWV1ZWQ6IGZhbHNlLFxuICAgICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgICByZXNwb25zZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgbGV0IGdldFZhcnNSZXNwb25zZSA9IExlYW5wbHVtUmVxdWVzdC5nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgIGxldCBpc1N1Y2Nlc3MgPSBMZWFucGx1bVJlcXVlc3QuaXNSZXNwb25zZVN1Y2Nlc3MoZ2V0VmFyc1Jlc3BvbnNlKTtcbiAgICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKFxuICAgICAgICAgICAgICBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSU10sXG4gICAgICAgICAgICAgIGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UU10sXG4gICAgICAgICAgICAgIGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdKVxuICAgICAgICAgICAgVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mbyA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UX0RFQlVHX0lORk9dXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soaXNTdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgc3RhdGljIHN0YXJ0KHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMsIGNhbGxiYWNrKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIGlmICh0eXBlb2YgdXNlcklkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJJZFxuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ29iamVjdCcgJiYgdXNlcklkICE9PSBudWxsICYmXG4gICAgICAgIHVzZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHVzZXJJZFxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9XG4gICAgfVxuICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSB1c2VySWRcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIExlYW5wbHVtLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGNhbGxiYWNrKVxuICAgIH1cblxuICAgIFZhckNhY2hlLm9uVXBkYXRlID0gZnVuY3Rpb24oKXtcbiAgICAgIEludGVybmFsU3RhdGUudHJpZ2dlclZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycygpXG4gICAgfVxuXG4gICAgbGV0IGFyZ3MgPSBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9BVFRSSUJVVEVTLCBKU09OLnN0cmluZ2lmeSh1c2VyQXR0cmlidXRlcykpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DT1VOVFJZLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlJFR0lPTiwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DSVRZLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkxPQ0FUSU9OLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNZU1RFTV9OQU1FLCBMZWFucGx1bS5fc3lzdGVtTmFtZSB8fCBfYnJvd3NlckRldGVjdG9yLk9TKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU1lTVEVNX1ZFUlNJT04sIChMZWFucGx1bS5fc3lzdGVtVmVyc2lvbiB8fCAnJykudG9TdHJpbmcoKSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkJST1dTRVJfTkFNRSwgX2Jyb3dzZXJEZXRlY3Rvci5icm93c2VyKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQlJPV1NFUl9WRVJTSU9OLCBfYnJvd3NlckRldGVjdG9yLnZlcnNpb24udG9TdHJpbmcoKSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkxPQ0FMRSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfTkFNRSwgTGVhbnBsdW0uX2RldmljZU5hbWUgfHxcbiAgICAgICAgICAgIGAke19icm93c2VyRGV0ZWN0b3IuYnJvd3Nlcn0gJHtfYnJvd3NlckRldGVjdG9yLnZlcnNpb259YClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVklDRV9NT0RFTCwgTGVhbnBsdW0uX2RldmljZU1vZGVsIHx8ICdXZWIgQnJvd3NlcicpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX0RFRkFVTFRTLCBmYWxzZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPLCBJbnRlcm5hbFN0YXRlLnZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKTtcblxuICAgIC8vIElzc3VlIHJlcXVlc3QuXG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU1RBUlQsIGFyZ3MsIHtcbiAgICAgIHF1ZXVlZDogdHJ1ZSxcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICByZXNwb25zZTogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgSW50ZXJuYWxTdGF0ZS5oYXNTdGFydGVkID0gdHJ1ZVxuICAgICAgICBsZXQgc3RhcnRSZXNwb25zZSA9IExlYW5wbHVtUmVxdWVzdC5nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgIGlmIChMZWFucGx1bVJlcXVlc3QuaXNSZXNwb25zZVN1Y2Nlc3Moc3RhcnRSZXNwb25zZSkpIHtcbiAgICAgICAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bCA9IHRydWVcbiAgICAgICAgICBpZiAoSW50ZXJuYWxTdGF0ZS5kZXZNb2RlKSB7XG4gICAgICAgICAgICBsZXQgbGF0ZXN0VmVyc2lvbiA9IHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuTEFURVNUX1ZFUlNJT05dXG4gICAgICAgICAgICBpZiAobGF0ZXN0VmVyc2lvbikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQSBuZXdlciB2ZXJzaW9uIG9mIExlYW5wbHVtLCAke2xhdGVzdFZlcnNpb259LCBpcyBhdmFpbGFibGUuIEdvIHRvYCArXG4gICAgICAgICAgICAgICAgICAnbGVhbnBsdW0uY29tIHRvIGRvd25sb2FkIGl0LicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMZWFucGx1bVNvY2tldC5jb25uZWN0KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdLFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRTXSxcbiAgICAgICAgICAgICAgc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdKTtcbiAgICAgICAgICBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvID0gc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UX0RFQlVHX0lORk9dXG4gICAgICAgICAgVmFyQ2FjaGUudG9rZW4gPSBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlRPS0VOXVxuXG4gICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3N0YXJ0L21lc3NhZ2VzJywge1xuICAgICAgICAgICAgbWVzc2FnZXM6IExlYW5wbHVtLmdldEZpbHRlcmVkUmVzdWx0cyhzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLk1FU1NBR0VTXSwgJ3N0YXJ0JylcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsID0gZmFsc2VcbiAgICAgICAgICBWYXJDYWNoZS5sb2FkRGlmZnMoKVxuICAgICAgICB9XG4gICAgICAgIEludGVybmFsU3RhdGUudHJpZ2dlclN0YXJ0SGFuZGxlcnMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgLyoqXG4gICAqIHJldHVybiBhbiBhcnJheSBvZiBmaWx0ZXJlZCBtZXNzYWdlXG4gICAqIEBwYXJhbSBtZXNzYWdlcyB7T2JqZWN0fSB0aGUgbWVzc2FnZSByZXNwb25zZSBmcm9tIGxwIHNlcnZlclxuICAgKiBAcGFyYW0gdHJpZ2dlciB7U3RyaW5nfSB0aGUgdHJpZ2dlciB3ZSB3YW50IHRvIGNoZWNrIGFnYWluc3RcbiAgICogQHBhcmFtIHZlcmIge1N0cmluZ30gbmVjZXNzYXJ5IGZvciBzb21lIGV2ZW50XG4gICAqIEBwYXJhbSBub3VuIHtTdHJpbmd9IG5lY2Vzc2FyeSBmb3Igc29tZSBldmVudFxuICAgKiBAcGFyYW0gcGFyYW1zIHtPYmplY3R9IHsgIG5lY2Vzc2FyeSBmb3Igc29tZSBldmVudFxuICAgKiAgZnJvbT86c3RyaW5nLFxuICAgKiAgdG8/OnN0cmluZyxcbiAgICogIHBhcmFtVmFsdWU/OlN0cmluZyxcbiAgICogIHBhcmFtTmFtZT86U3RyaW5nLFxuICAgKiB9XG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBnZXRGaWx0ZXJlZFJlc3VsdHMobWVzc2FnZXM9e30sIHRyaWdnZXI9JycsIHZlcmI9JycsIG5vdW49JycsIHBhcmFtcz17fSkge1xuICAgIGlmKG1lc3NhZ2VzID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgcmV0dXJuIEFjdGlvbk1hbmFnZXIuZmlsdGVyTWVzc2FnZXMobWVzc2FnZXMsIHRyaWdnZXIsIHZlcmIsIG5vdW4sIHBhcmFtcylcbiAgfVxuICBzdGF0aWMgc3RhcnRGcm9tQ2FjaGUodXNlcklkLCB1c2VyQXR0cmlidXRlcywgY2FsbGJhY2spIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlcklkXG4gICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRBc3NpZ25tZW50XG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9XG4gICAgICB1c2VySWQgPSBudWxsXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdXNlcklkID09PSAnb2JqZWN0JyAmJiB1c2VySWQgIT09IG51bGwgJiZcbiAgICAgICAgdXNlcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlckF0dHJpYnV0ZXNcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEFzc2lnbm1lbnRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0gdXNlcklkXG4gICAgICB1c2VySWQgPSBudWxsXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdXNlckF0dHJpYnV0ZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlckF0dHJpYnV0ZXNcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEFzc2lnbm1lbnRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge31cbiAgICB9XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IHVzZXJJZFxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgTGVhbnBsdW0uYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIoY2FsbGJhY2spXG4gICAgfVxuXG4gICAgSW50ZXJuYWxTdGF0ZS5oYXNTdGFydGVkID0gdHJ1ZVxuICAgIEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsID0gdHJ1ZVxuICAgIGlmIChJbnRlcm5hbFN0YXRlLmRldk1vZGUpIHtcbiAgICAgIExlYW5wbHVtU29ja2V0LmNvbm5lY3QoKVxuICAgIH1cbiAgICBWYXJDYWNoZS5sb2FkRGlmZnMoKVxuICAgIEludGVybmFsU3RhdGUudHJpZ2dlclN0YXJ0SGFuZGxlcnMoKVxuICB9XG5cbiAgc3RhdGljIHN0b3AoKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU1RPUCwgdW5kZWZpbmVkLCB7XG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBwYXVzZVNlc3Npb24oKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUEFVU0VfU0VTU0lPTiwgdW5kZWZpbmVkLCB7XG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyByZXN1bWVTZXNzaW9uKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlJFU1VNRV9TRVNTSU9OLCB1bmRlZmluZWQsIHtcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHBhdXNlU3RhdGUoKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUEFVU0VfU1RBVEUsIHVuZGVmaW5lZCwge1xuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyByZXN1bWVTdGF0ZSgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5SRVNVTUVfU1RBVEUsIHVuZGVmaW5lZCwge1xuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBzZXRVc2VySWQodXNlcklkKSB7XG4gICAgTGVhbnBsdW0uc2V0VXNlckF0dHJpYnV0ZXModXNlcklkKVxuICB9XG5cbiAgc3RhdGljIHNldFVzZXJBdHRyaWJ1dGVzKHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMpIHtcbiAgICBpZiAodXNlckF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHVzZXJBdHRyaWJ1dGVzID0gdXNlcklkXG4gICAgICAgIHVzZXJJZCA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdXNlcklkICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IHNldFVzZXJBdHRyaWJ1dGVzIGV4cGVjdHMgYSBzdHJpbmcgb3IgYW4gJyArXG4gICAgICAgICAgICAnb2JqZWN0JylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNFVF9VU0VSX0FUVFJJQlVURVMsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9BVFRSSUJVVEVTLFxuICAgICAgICAgICAgICAgIHVzZXJBdHRyaWJ1dGVzID8gSlNPTi5zdHJpbmdpZnkodXNlckF0dHJpYnV0ZXMpIDogdW5kZWZpbmVkKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLk5FV19VU0VSX0lELCB1c2VySWQpLCB7XG4gICAgICAgICAgcXVldWVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IHVzZXJJZFxuICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRGaWxlVXJsKGZpbGVOYW1lKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgIHJldHVybiBMZWFucGx1bVJlcXVlc3RcbiAgICAgICAgLmdlbmVyYXRlUmVxdWVzdFVybChcbiAgICAgICAgICBDb25zdGFudHMuTUVUSE9EUy5ET1dOTE9BRF9GSUxFLFxuICAgICAgICAgIG5ldyBBcmdzQnVpbGRlcigpLmFkZChDb25zdGFudHMuUEFSQU1TLkZJTEVOQU1FLCBmaWxlTmFtZSlcbiAgICAgICAgKVxuICB9XG5cbiAgc3RhdGljIHRyYWNrTWVzc2FnZShldmVudCwgbWVzc2FnZUlkKSB7XG4gICAgaWYoZXZlbnQgPT09ICcnKSB7XG4gICAgICBWYXJDYWNoZS5hZGRNZXNzYWdlVmlldyhtZXNzYWdlSWQpIC8vIHRyYWNrIHZpZXcgdHJhY2sgZXZlbnQgaXMgJycgYWthICdWaWV3J1xuICAgIH1cbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuVFJBQ0ssXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuRVZFTlQsIGV2ZW50KVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLk1FU1NBR0VfSUQsIG1lc3NhZ2VJZCksIHtcbiAgICAgICAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgICAgICB9KVxuICB9XG5cbiAgc3RhdGljIHRyYWNrKGV2ZW50LCB2YWx1ZSwgaW5mbywgcGFyYW1zKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIC8vIG9iamVjdCAmJiAhbnVsbCAmJiAhdW5kZWZpbmVkIC0+IHBhcmFtc1xuICAgIC8vIHN0cmluZyAtPiBpbmZvLCBwYXJhbXNcbiAgICAvLyAqLCBvYmplY3QgJiYgIW51bGwgJiYgIXVuZGVmaW5lZCAtPiB2YWx1ZSwgcGFyYW1zXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gdmFsdWVcbiAgICAgIGluZm8gPSB1bmRlZmluZWRcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJhbXMgPSBpbmZvXG4gICAgICBpbmZvID0gdmFsdWVcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5mbyA9PT0gJ29iamVjdCcgJiYgaW5mbyAhPT0gbnVsbCAmJiBpbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcyA9IGluZm9cbiAgICAgIGluZm8gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBldmVudHMucHVibGlzaCgndHJhY2snLCB7XG4gICAgICBldmVudCxcbiAgICAgIHBhcmFtc1xuICAgIH0pXG5cbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5UUkFDSyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5FVkVOVCwgZXZlbnQpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVkFMVUUsIHZhbHVlIHx8IDAuMClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkZPLCBpbmZvKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlBBUkFNUywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSksIHtcbiAgICAgICAgICBxdWV1ZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBhZHZhbmNlVG8oc3RhdGUsIGluZm8sIHBhcmFtcykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICAvLyBzdHJpbmd8bnVsbHx1bmRlZmluZWQsICogLT4gaW5mbywgcGFyYW1zXG4gICAgLy8gb2JqZWN0ICYmICFudWxsICYmICF1bmRlZmluZWQgLT4gcGFyYW1zXG4gICAgaWYgKHR5cGVvZiBpbmZvID09PSAnb2JqZWN0JyAmJiBpbmZvICE9PSBudWxsICYmIGluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gaW5mb1xuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLkFEVkFOQ0UsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNUQVRFLCBzdGF0ZSlcbiAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5GTywgaW5mbylcbiAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuUEFSQU1TLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKSwge1xuICAgICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgd2ViIHB1c2ggaXMgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIHN1cHBvcnRlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpXG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB3ZWIgcHVzaCBpcyBzdWJzY3JpYmVkLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyBpZiB0cnVlLCByZWplY3RzIGlmIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzV2ViUHVzaFN1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1YnNjcmliZWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoZSBicm93c2VyIGZvciB3ZWIgcHVzaC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAgIHNlcnZpY2VXb3JrZXJVcmwgVGhlIHVybCBvbiB5b3VyIHNlcnZlciB0aGF0IGhvc3RzIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3cubWluLmpzIHNlcnZpY2Ugd29ya2VyIGpzIGZpbGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgICAgICAgICAgICAgIFJlc29sdmVzIGlmIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcndpc2UgZmFpbHMuXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXJGb3JXZWJQdXNoKHNlcnZpY2VXb3JrZXJVcmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpKSB7XG4gICAgICAgIHJldHVybiBQdXNoTWFuYWdlci5yZWdpc3RlcihzZXJ2aWNlV29ya2VyVXJsLCAoaXNTdWJzY3JpYmVkKSA9PiB7XG4gICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFB1c2hNYW5hZ2VyLnN1YnNjcmliZVVzZXIoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdCgnTGVhbnBsdW06IFdlYlB1c2ggaXMgbm90IHN1cHBvcnRlZC4nKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgdGhlIGJyb3dzZXIgZm9ybSB3ZWIgcHVzaC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgICAgICBSZXNvbHZlcyBvbiBzdWNjZXNzLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN0YXRpYyB1bnJlZ2lzdGVyRnJvbVdlYlB1c2goKSB7XG4gICAgcmV0dXJuIFB1c2hNYW5hZ2VyLnVuc3Vic2NyaWJlVXNlcigpXG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGNhY2hlZCB2YWx1ZXMgZm9yIG1lc3NhZ2VzLCB2YXJpYWJsZXMgYW5kIHRlc3QgYXNzaWdubWVudHMuXG4gICAqIFVzZSBzcGFyaW5nbHkgYXMgaWYgdGhlIGFwcCBpcyB1cGRhdGVkLCB5b3UnbGwgaGF2ZSB0byBkZWFsIHdpdGggcG90ZW50aWFsbHlcbiAgICogaW5jb25zaXN0ZW50IHN0YXRlIG9yIHVzZXIgZXhwZXJpZW5jZS5cbiAgICovXG4gIHN0YXRpYyBjbGVhclVzZXJDb250ZW50KCkge1xuICAgIFZhckNhY2hlLmNsZWFyVXNlckNvbnRlbnQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwdWIvc3ViIGV2ZW50cyBtYW5hZ2VyLlxuICAgKlxuICAgKiBAUmV0dXJuIHsgcHVibGlzaDogKHRvcGljLCBhcmdzKSA9PiB7fSwgc3Vic2NyaWJlOiAodG9waWMsIGNhbGxiYWNrKSA9PiB7fSB9XG4gICAqL1xuICBzdGF0aWMgZ2V0RXZlbnRzICgpIHtcbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bS5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vTmV0d29yaydcblxuLyoqXG4gKiBTb2NrZXQuaW8gMS4wIGNsaWVudCBjbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ja2V0SW9DbGllbnQge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBuZXcgU29ja2V0SW9DbGllbnQsIG5vdCBjb25uZWN0ZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2VcbiAgICB0aGlzLmNvbm5lY3RpbmcgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3RzIHRvIHRoZSBnaXZlbiBzb2NrZXRIb3N0LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHNvY2tldEhvc3QgVGhlIGhvc3QgdG8gY29ubmVjdCB0by5cbiAgICovXG4gIGNvbm5lY3Qoc29ja2V0SG9zdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXRoaXNcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbm5lY3RpbmcgPSB0cnVlXG4gICAgUmVxdWVzdC5hamF4KCdQT1NUJywgYGh0dHBzOi8vJHtzb2NrZXRIb3N0fS9zb2NrZXQuaW8vMWAsICcnLFxuICAgICAgICBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgbGV0IHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICAgICAgbGV0IHNlc3Npb24gPSBwYXJ0c1swXVxuICAgICAgICAgIGxldCBoZWFydGJlYXQgPSBwYXJzZUludChwYXJ0c1sxXSkgLyAyICogMTAwMFxuICAgICAgICAgIHNlbGYuc29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3NzOi8vJHtzb2NrZXRIb3N0fS9zb2NrZXQuaW8vMS93ZWJzb2NrZXQvJHtzZXNzaW9ufWApXG4gICAgICAgICAgbGV0IGhlYXJ0YmVhdEludGVydmFsID0gbnVsbFxuICAgICAgICAgIHNlbGYuc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RpbmcgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKHNlbGYub25vcGVuKSB7XG4gICAgICAgICAgICAgIHNlbGYub25vcGVuKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYXJ0YmVhdEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYuc29ja2V0LnNlbmQoJzI6OjonKVxuICAgICAgICAgICAgfSwgaGVhcnRiZWF0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IGZhbHNlXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGhlYXJ0YmVhdEludGVydmFsKVxuICAgICAgICAgICAgaWYgKHNlbGYub25jbG9zZSkge1xuICAgICAgICAgICAgICBzZWxmLm9uY2xvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VQYXJ0cyA9IGV2ZW50LmRhdGEuc3BsaXQoJzonKVxuICAgICAgICAgICAgbGV0IGNvZGUgPSBwYXJzZUludChtZXNzYWdlUGFydHNbMF0pXG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gMikge1xuICAgICAgICAgICAgICBzZWxmLnNvY2tldC5zZW5kKCcyOjonKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSA1KSB7XG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlUGFydHNbMV1cbiAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2VQYXJ0cy5zbGljZSgzKS5qb2luKCc6JykpXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlRXZlbnQgPSBkYXRhLm5hbWVcbiAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBkYXRhLmFyZ3NcbiAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VJZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnNlbmQoYDY6Ojoke21lc3NhZ2VJZH1gKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZWxmLm9ubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHNlbGYub25tZXNzYWdlKG1lc3NhZ2VFdmVudCwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSA3KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTb2NrZXQgZXJyb3I6ICR7ZXZlbnQuZGF0YX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHNlbGYuc29ja2V0LmNsb3NlKClcbiAgICAgICAgICAgIGlmIChzZWxmLm9uZXJyb3IpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbmVycm9yKGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgbnVsbCwgZmFsc2UsIHRydWUgLy8gbnVsbCwgcXVldWVkLCBwbGFpblRleHRcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgZ2l2ZW4gZXZlbnQgd2l0aCBhcmd1bWVudHMgdG8gdGhlIHNlcnZlci5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIGV2ZW50LlxuICAgKiBAcGFyYW0gIHsqfSBhcmdzIEFyZ3VtZW50cyB0byBzZW5kLlxuICAgKi9cbiAgc2VuZChuYW1lLCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBTb2NrZXQgaXMgbm90IGNvbm5lY3RlZC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBhcmdzSnNvbiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWUsXG4gICAgICBhcmdzXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5zZW5kKGA1Ojo6JHthcmdzSnNvbn1gKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU29ja2V0SW9DbGllbnQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fSGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19ub2RlVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==