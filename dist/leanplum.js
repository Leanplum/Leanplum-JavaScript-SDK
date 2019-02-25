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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
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

    SDK_VERSION: '1.5.0-iflix',

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
      PUSH_SUBSCRIPTION: '__leanplum_push_subscription'
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

var baseIsNative = __webpack_require__(52),
    getValue = __webpack_require__(65);

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

var listCacheClear = __webpack_require__(75),
    listCacheDelete = __webpack_require__(76),
    listCacheGet = __webpack_require__(77),
    listCacheHas = __webpack_require__(78),
    listCacheSet = __webpack_require__(79);

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

var Symbol = __webpack_require__(14),
    getRawTag = __webpack_require__(62),
    objectToString = __webpack_require__(88);

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

var isKeyable = __webpack_require__(72);

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

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
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
  exports.default = VarCache;
  module.exports = exports['default'];
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

var mapCacheClear = __webpack_require__(80),
    mapCacheDelete = __webpack_require__(81),
    mapCacheGet = __webpack_require__(82),
    mapCacheHas = __webpack_require__(83),
    mapCacheSet = __webpack_require__(84);

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

var SetCache = __webpack_require__(40),
    arraySome = __webpack_require__(47),
    cacheHas = __webpack_require__(57);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(103)))

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
    stubFalse = __webpack_require__(102);

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

var baseIsEqual = __webpack_require__(50);

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

var baseIsTypedArray = __webpack_require__(53),
    baseUnary = __webpack_require__(56),
    nodeUtil = __webpack_require__(87);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(35), __webpack_require__(17), __webpack_require__(4), __webpack_require__(25), __webpack_require__(16)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(12), __webpack_require__(3), __webpack_require__(31), __webpack_require__(33), __webpack_require__(5), __webpack_require__(17), __webpack_require__(4), __webpack_require__(32), __webpack_require__(16)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./InternalState'), require('./ArgsBuilder'), require('./BrowserDetector'), require('./PushManager'), require('./LocalStorageManager'), require('./VarCache'), require('./LeanplumRequest'), require('./LeanplumSocket'), require('./Events'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.InternalState, global.ArgsBuilder, global.BrowserDetector, global.PushManager, global.LocalStorageManager, global.VarCache, global.LeanplumRequest, global.LeanplumSocket, global.Events);
    global.Leanplum = mod.exports;
  }
})(this, function (module, exports, _Constants, _InternalState, _ArgsBuilder, _BrowserDetector, _PushManager, _LocalStorageManager, _VarCache, _LeanplumRequest, _LeanplumSocket, _Events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Constants2 = _interopRequireDefault(_Constants);

  var _InternalState2 = _interopRequireDefault(_InternalState);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _BrowserDetector2 = _interopRequireDefault(_BrowserDetector);

  var _PushManager2 = _interopRequireDefault(_PushManager);

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
                messages: startResponse[_Constants2.default.KEYS.MESSAGES]
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(66),
    hashDelete = __webpack_require__(67),
    hashGet = __webpack_require__(68),
    hashHas = __webpack_require__(69),
    hashSet = __webpack_require__(70);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(19),
    setCacheAdd = __webpack_require__(90),
    setCacheHas = __webpack_require__(91);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    stackClear = __webpack_require__(93),
    stackDelete = __webpack_require__(94),
    stackGet = __webpack_require__(95),
    stackHas = __webpack_require__(96),
    stackSet = __webpack_require__(97);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(55),
    isArguments = __webpack_require__(98),
    isArray = __webpack_require__(15),
    isBuffer = __webpack_require__(24),
    isIndex = __webpack_require__(71),
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
/* 46 */
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
/* 47 */
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(46),
    isArray = __webpack_require__(15);

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
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(51),
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(41),
    equalArrays = __webpack_require__(20),
    equalByTag = __webpack_require__(59),
    equalObjects = __webpack_require__(60),
    getTag = __webpack_require__(64),
    isArray = __webpack_require__(15),
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(26),
    isMasked = __webpack_require__(73),
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
/* 53 */
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(74),
    nativeKeys = __webpack_require__(86);

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
/* 55 */
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
/* 56 */
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
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    Uint8Array = __webpack_require__(42),
    eq = __webpack_require__(23),
    equalArrays = __webpack_require__(20),
    mapToArray = __webpack_require__(85),
    setToArray = __webpack_require__(92);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(61);

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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(48),
    getSymbols = __webpack_require__(63),
    keys = __webpack_require__(100);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14);

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(44),
    stubArray = __webpack_require__(101);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(36),
    Map = __webpack_require__(13),
    Promise = __webpack_require__(38),
    Set = __webpack_require__(39),
    WeakMap = __webpack_require__(43),
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
/* 65 */
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
/* 66 */
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
/* 67 */
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
/* 68 */
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
/* 69 */
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
/* 70 */
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
/* 71 */
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
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(58);

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
/* 74 */
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
/* 75 */
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
/* 76 */
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
/* 77 */
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
/* 78 */
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
/* 79 */
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(37),
    ListCache = __webpack_require__(6),
    Map = __webpack_require__(13);

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
/* 81 */
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
/* 82 */
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
/* 83 */
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
/* 84 */
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
/* 85 */
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(89);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 87 */
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
/* 88 */
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
/* 89 */
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
/* 90 */
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
/* 91 */
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
/* 92 */
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
/* 93 */
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
/* 94 */
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
/* 95 */
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
/* 96 */
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    Map = __webpack_require__(13),
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(49),
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
/* 99 */
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(45),
    baseKeys = __webpack_require__(54),
    isArrayLike = __webpack_require__(99);

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
/* 101 */
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
/* 102 */
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
/* 103 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMmUwYTE1ZTkzYzViYjNjNTEwMCIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnRlcm5hbFN0YXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZhckNhY2hlLmpzIiwid2VicGFjazovLy8uL3NyYy9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQnJvd3NlckRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVNvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHVzaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYW5wbHVtLmpzIiwid2VicGFjazovLy8uL3NyYy9Tb2NrZXRJb0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiTUVUSE9EUyIsIlNUQVJUIiwiU1RPUCIsIkFEVkFOQ0UiLCJUUkFDSyIsIlBBVVNFX1NFU1NJT04iLCJSRVNVTUVfU0VTU0lPTiIsIlBBVVNFX1NUQVRFIiwiUkVTVU1FX1NUQVRFIiwiRE9XTkxPQURfRklMRSIsIk1VTFRJIiwiU0VUX1ZBUlMiLCJHRVRfVkFSUyIsIlNFVF9VU0VSX0FUVFJJQlVURVMiLCJTRVRfREVWSUNFX0FUVFJJQlVURVMiLCJVUExPQURfRklMRSIsIlJFR0lTVEVSX0RFVklDRSIsIlNES19WRVJTSU9OIiwiQ0xJRU5UIiwiUEFSQU1TIiwiQUNUSU9OIiwiQVBQX0lEIiwiQ0xJRU5UX0tFWSIsIkRFVklDRV9JRCIsIlVTRVJfSUQiLCJORVdfVVNFUl9JRCIsIkRFVl9NT0RFIiwiVkVSU0lPTl9OQU1FIiwiU1lTVEVNX05BTUUiLCJTWVNURU1fVkVSU0lPTiIsIkJST1dTRVJfTkFNRSIsIkJST1dTRVJfVkVSU0lPTiIsIkRFVklDRV9OQU1FIiwiREVWSUNFX01PREVMIiwiVVNFUl9BVFRSSUJVVEVTIiwiTE9DQUxFIiwiQ09VTlRSWSIsIlJFR0lPTiIsIkNJVFkiLCJMT0NBVElPTiIsIlNUQVRFIiwiSU5GTyIsIkVWRU5UIiwiVkFMVUUiLCJGSUxFTkFNRSIsIlRJTUUiLCJEQVRBIiwiVkFSUyIsIkZJTEUiLCJTSVpFIiwiVkFSSUFUSU9OIiwiSEFTSCIsIkVNQUlMIiwiVkFSSUFCTEVTIiwiSU5DTFVERV9ERUZBVUxUUyIsIklOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPIiwiV0VCX1BVU0hfU1VCU0NSSVBUSU9OIiwiTUVTU0FHRV9JRCIsIktFWVMiLCJJU19SRUdJU1RFUkVEIiwiTEFURVNUX1ZFUlNJT04iLCJWQVJJQU5UUyIsIlZBUklBTlRfREVCVUdfSU5GTyIsIkFDVElPTl9NRVRBREFUQSIsIlRPS0VOIiwiTUVTU0FHRVMiLCJERUZBVUxUX0tFWVMiLCJDT1VOVCIsIklURU0iLCJQVVNIX1NVQlNDUklQVElPTiIsIlZBTFVFUyIsIkRFVEVDVCIsIkFyZ3NCdWlsZGVyIiwiYXJnU3RyaW5nIiwiYXJnVmFsdWVzIiwia2V5IiwidmFsdWUiLCJlbmNvZGVkVXJpQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsIl9ib2R5IiwiYXBwSWQiLCJjbGllbnRLZXkiLCJhZGQiLCJDb25zdGFudHMiLCJsYXN0UmVxdWVzdFRpbWUiLCJ1bmRlZmluZWQiLCJjb29sZG93blRpbWVvdXQiLCJMZWFucGx1bVJlcXVlc3QiLCJhY3Rpb24iLCJwYXJhbXMiLCJvcHRpb25zIiwiZGV2aWNlSWQiLCJMb2NhbFN0b3JhZ2VNYW5hZ2VyIiwiZ2V0RnJvbUxvY2FsU3RvcmFnZSIsImlkIiwicG9zc2libGUiLCJpIiwiY2hhckF0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwidXNlcklkIiwiYXJnc0J1aWxkZXIiLCJhdHRhY2hBcGlLZXlzIiwidmVyc2lvbk5hbWUiLCJJbnRlcm5hbFN0YXRlIiwiZGV2TW9kZSIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsImVyciIsImNvbnNvbGUiLCJOZXR3b3JrIiwiYWpheCIsImFwaVBhdGgiLCJidWlsZCIsInF1ZXVlZCIsInNlbmROb3ciLCJiYXRjaEVuYWJsZWQiLCJzZW5kVW5zZW50UmVxdWVzdHMiLCJyZXF1ZXN0c1RvU2VuZCIsInBvcFVuc2VudFJlcXVlc3RzIiwicmVxdWVzdERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwibXVsdGlSZXF1ZXN0QXJncyIsImJhdGNoQ29vbGRvd24iLCJub3ciLCJzZXRUaW1lb3V0Iiwic2F2ZVJlcXVlc3RGb3JMYXRlciIsImJ1aWxkRGljdCIsInF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJzZWNvbmRzIiwic2V0TmV0d29ya1RpbWVvdXQiLCJhcmdzIiwiY291bnQiLCJpdGVtS2V5IiwicmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSIsInJlcXVlc3RBcmdzIiwicGFyc2UiLCJwdXNoIiwiaWdub3JlZCIsImluZGV4IiwibnVtUmVzcG9uc2VzIiwiZ2V0UmVzcG9uc2VBdCIsIm1lc3NhZ2UiLCJsb2NhbFN0b3JhZ2VFbmFibGVkIiwiYWx0ZXJuYXRlTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZSIsInJlbW92ZUl0ZW0iLCJoYW5kbGVyIiwic3RhcnRIYW5kbGVycyIsImhhc1N0YXJ0ZWQiLCJzdGFydFN1Y2Nlc3NmdWwiLCJpZHgiLCJpbmRleE9mIiwic3BsaWNlIiwidmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzIiwiaGFzUmVjZWl2ZWREaWZmcyIsInZhcmlhbnREZWJ1Z0luZm9FbmFibGVkIiwidG9waWNzIiwic3Vic2NyaWJlIiwidG9waWMiLCJsaXN0ZW5lciIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJlbW92ZSIsInB1Ymxpc2giLCJpbmZvIiwiZm9yRWFjaCIsIml0ZW0iLCJWYXJDYWNoZSIsImRpZmZzIiwidmFyaWFudHMiLCJhY3Rpb25NZXRhZGF0YSIsIm1lcmdlZCIsIm1lcmdlSGVscGVyIiwidmFyaWFibGVzIiwic2F2ZURpZmZzIiwib25VcGRhdGUiLCJhcHBseURpZmZzIiwidG9rZW4iLCJ2YXJpYW50RGVidWdJbmZvIiwibG9nIiwicmVxdWVzdCIsInZhcnMiLCJkaWZmIiwib2JqSXRlcmF0b3IiLCJvYmoiLCJmIiwiQXJyYXkiLCJhdHRyIiwidmFyc0l0ZXJhdG9yIiwiZGlmZkl0ZXJhdG9yIiwiaXNBcnJheSIsImF0dHJpYnV0ZSIsInZhclN1YnNjcmlwdCIsInN1YnN0cmluZyIsInBhcnNlSW50Iiwic3Vic2NyaXB0IiwiZGlmZlZhbHVlIiwicmVxdWVzdFF1ZXVlIiwibmV0d29ya1RpbWVvdXRTZWNvbmRzIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInBsYWluVGV4dCIsInJ1bm5pbmdSZXF1ZXN0IiwiZW5xdWV1ZVJlcXVlc3QiLCJhcmd1bWVudHMiLCJYRG9tYWluUmVxdWVzdCIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJSZWZsZWN0IiwiYXBwbHkiLCJhamF4SUU4IiwiaGFuZGxlZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInJhbkNhbGxiYWNrIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzIiwiZGVxdWV1ZVJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJhYm9ydCIsInhkciIsIm9ubG9hZCIsIm9uZXJyb3IiLCJvbnRpbWVvdXQiLCJvbnByb2dyZXNzIiwidGltZW91dCIsInJlcXVlc3RBcmd1bWVudHMiLCJzaGlmdCIsImRhdGFCcm93c2VyIiwic3RyaW5nIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3ViU3RyaW5nIiwiaWRlbnRpdHkiLCJ2ZXJzaW9uU2VhcmNoIiwidmVuZG9yIiwicHJvcCIsIndpbmRvdyIsIm9wZXJhIiwiZGF0YU9TIiwicGxhdGZvcm0iLCJCcm93c2VyRGV0ZWN0b3IiLCJicm93c2VyIiwiX3NlYXJjaFN0cmluZyIsInZlcnNpb24iLCJfc2VhcmNoVmVyc2lvbiIsImFwcFZlcnNpb24iLCJPUyIsImRhdGFTdHJpbmciLCJkYXRhUHJvcCIsInZlcnNpb25TZWFyY2hTdHJpbmciLCJwYXJzZUZsb2F0IiwiTGVhbnBsdW1Tb2NrZXQiLCJXZWJTb2NrZXQiLCJjbGllbnQiLCJTb2NrZXRJb0NsaWVudCIsImF1dGhTZW50Iiwib25vcGVuIiwiZXZlbnQiLCJvbm1lc3NhZ2UiLCJnZXRWYXJzUmVzcG9uc2UiLCJnZXRMYXN0UmVzcG9uc2UiLCJ2YWx1ZXMiLCJzZW5kVmFyaWFibGVzIiwiYWxlcnQiLCJlbWFpbCIsImV2ZW50cyIsIm9uY2xvc2UiLCJjb25uZWN0Iiwic29ja2V0SG9zdCIsInNldEludGVydmFsIiwiY29ubmVjdGVkIiwiY29ubmVjdGluZyIsIkFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZIiwiaXNTdWJzY3JpYmVkIiwic2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsIlB1c2hNYW5hZ2VyIiwic2VydmljZVdvcmtlciIsImlzV2ViUHVzaFN1cHBvcnRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJwdXNoTWFuYWdlciIsImdldFN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbiIsInVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyIiwic2VydmljZVdvcmtlclVybCIsImNhbGxiYWNrIiwicmVnaXN0ZXIiLCJjYXRjaCIsImFwcGxpY2F0aW9uU2VydmVyS2V5IiwidXJsQjY0VG9VaW50OEFycmF5IiwicmVqZWN0IiwidXNlclZpc2libGVPbmx5IiwiaXNXZWJQdXNoU3Vic2NyaWJlZCIsInN1YnNjcmliZWQiLCJ1bnN1YnNjcmliZSIsImdldFJlZ2lzdHJhdGlvbiIsImJhc2U2NFN0cmluZyIsInBhZGRpbmciLCJyZXBlYXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwicmF3RGF0YSIsImF0b2IiLCJvdXRwdXRBcnJheSIsIlVpbnQ4QXJyYXkiLCJjaGFyQ29kZUF0IiwiZ2V0S2V5IiwiYXV0aCIsImtleUFzY2lpIiwiYnRvYSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImF1dGhBc2NpaSIsImVuZHBvaW50IiwicHJlcGFyZWRTdWJzY3JpcHRpb24iLCJwcmVwYXJlU3Vic2NyaXB0aW9uIiwicHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmciLCJleGlzdGluZ1N1YnNjcmlwdGlvblN0cmluZyIsInNldFN1YnNjcmlwdGlvbiIsIl9icm93c2VyRGV0ZWN0b3IiLCJMZWFucGx1bSIsIl9lbWFpbCIsInNldFZhcmlhbnREZWJ1Z0luZm9FbmFibGVkIiwiZ2V0VmFyaWFudERlYnVnSW5mbyIsImFjY2Vzc0tleSIsImhvc3QiLCJkZXZpY2VOYW1lIiwiX2RldmljZU5hbWUiLCJkZXZpY2VNb2RlbCIsIl9kZXZpY2VNb2RlbCIsInN5c3RlbU5hbWUiLCJfc3lzdGVtTmFtZSIsInN5c3RlbVZlcnNpb24iLCJfc3lzdGVtVmVyc2lvbiIsInNldFZhcmlhYmxlcyIsImNvb2xkb3duU2Vjb25kcyIsImdldFZhcmlhYmxlcyIsImN1cnJlbnQiLCJhZGRTdGFydFJlc3BvbnNlSGFuZGxlciIsImFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyIiwicmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIiLCJyZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlciIsImlzU3VjY2VzcyIsImlzUmVzcG9uc2VTdWNjZXNzIiwidXNlckF0dHJpYnV0ZXMiLCJ0cmlnZ2VyVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzIiwic3RhcnRSZXNwb25zZSIsImxhdGVzdFZlcnNpb24iLCJtZXNzYWdlcyIsImxvYWREaWZmcyIsInRyaWdnZXJTdGFydEhhbmRsZXJzIiwic2V0VXNlckF0dHJpYnV0ZXMiLCJmaWxlTmFtZSIsImdlbmVyYXRlUmVxdWVzdFVybCIsIm1lc3NhZ2VJZCIsInN0YXRlIiwic3Vic2NyaWJlVXNlciIsInVuc3Vic2NyaWJlVXNlciIsImNsZWFyVXNlckNvbnRlbnQiLCJzZWxmIiwiUmVxdWVzdCIsImxpbmUiLCJwYXJ0cyIsInNwbGl0Iiwic2Vzc2lvbiIsImhlYXJ0YmVhdCIsInNvY2tldCIsImhlYXJ0YmVhdEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1lc3NhZ2VQYXJ0cyIsImNvZGUiLCJzbGljZSIsImpvaW4iLCJtZXNzYWdlRXZlbnQiLCJuYW1lIiwiY2xvc2UiLCJhcmdzSnNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDU2U7QUFDYkEsYUFBUztBQUNQQyxhQUFPLE9BREE7QUFFUEMsWUFBTSxNQUZDO0FBR1BDLGVBQVMsU0FIRjtBQUlQQyxhQUFPLE9BSkE7QUFLUEMscUJBQWUsY0FMUjtBQU1QQyxzQkFBZ0IsZUFOVDtBQU9QQyxtQkFBYSxZQVBOO0FBUVBDLG9CQUFjLGFBUlA7QUFTUEMscUJBQWUsY0FUUjtBQVVQQyxhQUFPLE9BVkE7QUFXUEMsZ0JBQVUsU0FYSDtBQVlQQyxnQkFBVSxTQVpIO0FBYVBDLDJCQUFxQixtQkFiZDtBQWNQQyw2QkFBdUIscUJBZGhCO0FBZVBDLG1CQUFhLFlBZk47QUFnQlBDLHVCQUFpQjtBQWhCVixLQURJOztBQW9CYkMsaUJBQWEsYUFwQkE7O0FBc0JiQyxZQUFRLElBdEJLOztBQXdCYkMsWUFBUTtBQUNOQyxjQUFRLFFBREY7QUFFTkMsY0FBUSxPQUZGO0FBR05ILGNBQVEsUUFIRjtBQUlOSSxrQkFBWSxXQUpOO0FBS05DLGlCQUFXLFVBTEw7QUFNTk4sbUJBQWEsWUFOUDtBQU9OTyxlQUFTLFFBUEg7QUFRTkMsbUJBQWEsV0FSUDtBQVNOQyxnQkFBVSxTQVRKO0FBVU5DLG9CQUFjLGFBVlI7QUFXTkMsbUJBQWEsWUFYUDtBQVlOQyxzQkFBZ0IsZUFaVjtBQWFOQyxvQkFBYyxhQWJSO0FBY05DLHVCQUFpQixnQkFkWDtBQWVOQyxtQkFBYSxZQWZQO0FBZ0JOQyxvQkFBYyxhQWhCUjtBQWlCTkMsdUJBQWlCLGdCQWpCWDtBQWtCTkMsY0FBUSxRQWxCRjtBQW1CTkMsZUFBUyxTQW5CSDtBQW9CTkMsY0FBUSxRQXBCRjtBQXFCTkMsWUFBTSxNQXJCQTtBQXNCTkMsZ0JBQVUsVUF0Qko7QUF1Qk5DLGFBQU8sT0F2QkQ7QUF3Qk5DLFlBQU0sTUF4QkE7QUF5Qk5DLGFBQU8sT0F6QkQ7QUEwQk5DLGFBQU8sT0ExQkQ7QUEyQk5DLGdCQUFVLFVBM0JKO0FBNEJOQyxZQUFNLE1BNUJBO0FBNkJOQyxZQUFNLE1BN0JBO0FBOEJOQyxZQUFNLE1BOUJBO0FBK0JOQyxZQUFNLE1BL0JBO0FBZ0NOQyxZQUFNLE1BaENBO0FBaUNOQyxpQkFBVyxXQWpDTDtBQWtDTkMsWUFBTSxNQWxDQTtBQW1DTkMsYUFBTyxPQW5DRDtBQW9DTkMsaUJBQVcsTUFwQ0w7QUFxQ05sQyxjQUFRLFFBckNGO0FBc0NObUMsd0JBQWtCLGlCQXRDWjtBQXVDTkMsa0NBQTRCLHlCQXZDdEI7QUF3Q05DLDZCQUF1QixxQkF4Q2pCO0FBeUNOQyxrQkFBWTtBQXpDTixLQXhCSzs7QUFvRWJDLFVBQU07QUFDSkMscUJBQWUsY0FEWDtBQUVKQyxzQkFBZ0IsZUFGWjtBQUdKYixZQUFNLE1BSEY7QUFJSmMsZ0JBQVUsVUFKTjtBQUtKQywwQkFBb0Isa0JBTGhCO0FBTUpDLHVCQUFpQixnQkFOYjtBQU9KQyxhQUFPLE9BUEg7QUFRSkMsZ0JBQVU7QUFSTixLQXBFTzs7QUErRWJDLGtCQUFjO0FBQ1pDLGFBQU8scUJBREs7QUFFWkMsWUFBTSxzQkFGTTtBQUdaZixpQkFBVyxzQkFIQztBQUlaUSxnQkFBVSxxQkFKRTtBQUtaQywwQkFBb0IsK0JBTFI7QUFNWkMsdUJBQWlCLDRCQU5MO0FBT1pDLGFBQU8sa0JBUEs7QUFRWnpDLGlCQUFXLHNCQVJDO0FBU1pDLGVBQVMsb0JBVEc7QUFVWjZDLHlCQUFtQjtBQVZQLEtBL0VEOztBQTRGYkMsWUFBUTtBQUNOQyxjQUFRO0FBREY7QUE1RkssRzs7Ozs7Ozs7QUNqQmY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ09xQkMsVztBQUNuQjs7O0FBR0EsMkJBQWM7QUFBQTs7QUFDWixXQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNEOztBQUVEOzs7Ozs7Ozs7OzBCQU1JQyxHLEVBQUtDLEssRUFBTztBQUNkLFlBQUksT0FBT0EsS0FBUCxLQUFpQixXQUFyQixFQUFrQztBQUNoQyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxZQUFJLEtBQUtILFNBQVQsRUFBb0I7QUFDbEIsZUFBS0EsU0FBTCxJQUFrQixHQUFsQjtBQUNEO0FBQ0QsWUFBSUksc0JBQXNCQyxtQkFBbUJGLEtBQW5CLENBQTFCO0FBQ0EsYUFBS0gsU0FBTCxJQUFxQkUsR0FBckIsU0FBNEJFLG1CQUE1QjtBQUNBLGFBQUtILFNBQUwsQ0FBZUMsR0FBZixJQUFzQkMsS0FBdEI7QUFDQSxlQUFPLElBQVA7QUFDRDs7OzJCQVFJRyxLLEVBQU07QUFDVCxZQUFJQSxLQUFKLEVBQVU7QUFDUixlQUFLQyxLQUFMLEdBQWFELEtBQWI7QUFDQSxpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxlQUFPLEtBQUtDLEtBQVo7QUFDRDs7O29DQVFhQyxLLEVBQU9DLFMsRUFBVztBQUM5QixlQUFPLEtBQUtDLEdBQUwsQ0FBU0Msb0JBQVVqRSxNQUFWLENBQWlCRSxNQUExQixFQUFrQzRELEtBQWxDLEVBQ0ZFLEdBREUsQ0FDRUMsb0JBQVVqRSxNQUFWLENBQWlCRCxNQURuQixFQUMyQmtFLG9CQUFVbEUsTUFEckMsRUFFRmlFLEdBRkUsQ0FFRUMsb0JBQVVqRSxNQUFWLENBQWlCRyxVQUZuQixFQUUrQjRELFNBRi9CLENBQVA7QUFHRDs7OzhCQU1PO0FBQ04sZUFBTyxLQUFLVCxTQUFaO0FBQ0Q7OztrQ0FNVztBQUNWLGVBQU8sS0FBS0MsU0FBWjtBQUNEOzs7Ozs7b0JBcEVrQkYsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyQixNQUFJYSxrQkFBa0JDLFNBQXRCO0FBQ0EsTUFBSUMsa0JBQWtCLElBQXRCOztNQUVxQkMsZTs7Ozs7Ozs4QkFrQkpDLE0sRUFBUUMsTSxFQUFRQyxPLEVBQVM7QUFDdENBLGtCQUFVQSxXQUFXLEVBQXJCO0FBQ0FELGlCQUFTQSxVQUFVLElBQUlsQixxQkFBSixFQUFuQjs7QUFFQTtBQUNBLFlBQUksQ0FBQ2dCLGdCQUFnQkksUUFBckIsRUFBK0I7QUFDN0JKLDBCQUFnQkksUUFBaEIsR0FDSUMsOEJBQW9CQyxtQkFBcEIsQ0FBd0NWLG9CQUFVbEIsWUFBVixDQUF1QjNDLFNBQS9ELENBREo7QUFFRDtBQUNELFlBQUksQ0FBQ2lFLGdCQUFnQkksUUFBckIsRUFBK0I7QUFDN0IsY0FBSUcsS0FBSyxFQUFUO0FBQ0EsY0FBSUMsV0FBVyx5REFDWCxZQURKO0FBRUEsZUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0FBQzNCRixrQkFBTUMsU0FBU0UsTUFBVCxDQUFnQkMsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCTCxTQUFTTSxNQUFwQyxDQUFoQixDQUFOO0FBQ0Q7QUFDRGQsMEJBQWdCSSxRQUFoQixHQUEyQkcsRUFBM0I7QUFDQUYsd0NBQW9CVSxrQkFBcEIsQ0FBdUNuQixvQkFBVWxCLFlBQVYsQ0FBdUIzQyxTQUE5RCxFQUF5RXdFLEVBQXpFO0FBQ0Q7QUFDRCxZQUFJLENBQUNQLGdCQUFnQmdCLE1BQXJCLEVBQTZCO0FBQzNCaEIsMEJBQWdCZ0IsTUFBaEIsR0FBeUJYLDhCQUFvQkMsbUJBQXBCLENBQXdDVixvQkFBVWxCLFlBQVYsQ0FBdUIxQyxPQUEvRCxDQUF6QjtBQUNBLGNBQUksQ0FBQ2dFLGdCQUFnQmdCLE1BQXJCLEVBQTZCO0FBQzNCaEIsNEJBQWdCZ0IsTUFBaEIsR0FBeUJoQixnQkFBZ0JJLFFBQXpDO0FBQ0Q7QUFDRjtBQUNEQyxzQ0FBb0JVLGtCQUFwQixDQUF1Q25CLG9CQUFVbEIsWUFBVixDQUF1QjFDLE9BQTlELEVBQXVFZ0UsZ0JBQWdCZ0IsTUFBdkY7O0FBRUEsWUFBSUMsY0FBY2YsT0FDYmdCLGFBRGEsQ0FDQ2xCLGdCQUFnQlAsS0FEakIsRUFDd0JPLGdCQUFnQk4sU0FEeEMsRUFFYkMsR0FGYSxDQUVUQyxvQkFBVWpFLE1BQVYsQ0FBaUJGLFdBRlIsRUFFcUJtRSxvQkFBVW5FLFdBRi9CLEVBR2JrRSxHQUhhLENBR1RDLG9CQUFVakUsTUFBVixDQUFpQkksU0FIUixFQUdtQmlFLGdCQUFnQkksUUFIbkMsRUFJYlQsR0FKYSxDQUlUQyxvQkFBVWpFLE1BQVYsQ0FBaUJLLE9BSlIsRUFJaUJnRSxnQkFBZ0JnQixNQUpqQyxFQUtickIsR0FMYSxDQUtUQyxvQkFBVWpFLE1BQVYsQ0FBaUJDLE1BTFIsRUFLZ0JxRSxNQUxoQixFQU1iTixHQU5hLENBTVRDLG9CQUFVakUsTUFBVixDQUFpQlEsWUFOUixFQU1zQjZELGdCQUFnQm1CLFdBTnRDLEVBT2J4QixHQVBhLENBT1RDLG9CQUFVakUsTUFBVixDQUFpQk8sUUFQUixFQU9rQmtGLHdCQUFjQyxPQVBoQyxFQVFiMUIsR0FSYSxDQVFUQyxvQkFBVWpFLE1BQVYsQ0FBaUIwQixJQVJSLEVBUWMsQ0FBQyxJQUFJaUUsSUFBSixHQUFXQyxPQUFYLEtBQXVCLElBQXhCLEVBQThCQyxRQUE5QixFQVJkLENBQWxCO0FBU0EsWUFBSUMsVUFBVXRCLFFBQVFzQixPQUFSLElBQW1CdEIsUUFBUXVCLFFBQXpDO0FBQ0EsWUFBSUMsUUFBUXhCLFFBQVF3QixLQUFSLElBQWlCeEIsUUFBUXVCLFFBQXJDOztBQUVBLFlBQUksQ0FBQzFCLGdCQUFnQlAsS0FBakIsSUFBMEIsQ0FBQ08sZ0JBQWdCTixTQUEvQyxFQUEwRDtBQUN4RCxjQUFJa0MsTUFBTSwrREFDTixzRUFETSxHQUVOLDJCQUZKO0FBR0FDLGtCQUFRRixLQUFSLENBQWNDLEdBQWQ7QUFDQSxjQUFJRCxLQUFKLEVBQVdBLE1BQU1DLEdBQU47QUFDWDtBQUNEOztBQUVELFlBQUkxQixPQUFPWCxJQUFQLEVBQUosRUFBbUI7QUFDakJ1Qyw0QkFBUUMsSUFBUixDQUFhLE1BQWIsRUFBd0IvQixnQkFBZ0JnQyxPQUF4QyxTQUFtRGYsWUFBWWdCLEtBQVosRUFBbkQsRUFDSS9CLE9BQU9YLElBQVAsRUFESixFQUNtQmtDLE9BRG5CLEVBQzRCRSxLQUQ1QixFQUNtQ3hCLFFBQVErQixNQUQzQztBQUVBO0FBQ0Q7O0FBRUQsWUFBSUMsVUFBVWYsd0JBQWNDLE9BQWQsSUFBeUJsQixRQUFRZ0MsT0FBakMsSUFBNEMsQ0FBQ25DLGdCQUFnQm9DLFlBQTNFOztBQUVBLFlBQUlDLHFCQUFxQixTQUFyQkEsa0JBQXFCLEdBQVc7QUFDbEMsY0FBSUMsaUJBQWlCdEMsZ0JBQWdCdUMsaUJBQWhCLEVBQXJCO0FBQ0EsY0FBSUQsZUFBZXhCLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDN0IsZ0JBQUkwQixjQUFjQyxLQUFLQyxTQUFMLENBQWU7QUFDL0Isc0JBQVFKO0FBRHVCLGFBQWYsQ0FBbEI7QUFHQSxnQkFBSUssbUJBQW1CLElBQUkzRCxxQkFBSixHQUNsQmtDLGFBRGtCLENBQ0psQixnQkFBZ0JQLEtBRFosRUFDbUJPLGdCQUFnQk4sU0FEbkMsRUFFbEJDLEdBRmtCLENBRWRDLG9CQUFVakUsTUFBVixDQUFpQkYsV0FGSCxFQUVnQm1FLG9CQUFVbkUsV0FGMUIsRUFHbEJrRSxHQUhrQixDQUdkQyxvQkFBVWpFLE1BQVYsQ0FBaUJDLE1BSEgsRUFHV2dFLG9CQUFVcEYsT0FBVixDQUFrQlUsS0FIN0IsRUFJbEJ5RSxHQUprQixDQUlkQyxvQkFBVWpFLE1BQVYsQ0FBaUIwQixJQUpILEVBSVMsQ0FBQyxJQUFJaUUsSUFBSixHQUFXQyxPQUFYLEtBQXVCLElBQXhCLEVBQThCQyxRQUE5QixHQUF5Q0EsUUFBekMsRUFKVCxFQUtsQlMsS0FMa0IsRUFBdkI7QUFNQUgsOEJBQVFDLElBQVIsQ0FBYSxNQUFiLEVBQXdCL0IsZ0JBQWdCZ0MsT0FBeEMsU0FBbURXLGdCQUFuRCxFQUF1RUgsV0FBdkUsRUFBb0ZmLE9BQXBGLEVBQTZGRSxLQUE3RixFQUNJeEIsUUFBUStCLE1BRFo7QUFFRDtBQUNGLFNBZkQ7O0FBaUJBO0FBQ0EsWUFBSSxDQUFDQyxPQUFELElBQVluQyxnQkFBZ0I0QyxhQUFoQyxFQUErQztBQUM3QyxjQUFJQyxNQUFNLElBQUl2QixJQUFKLEdBQVdDLE9BQVgsS0FBdUIsSUFBakM7QUFDQSxjQUFJLENBQUMxQixlQUFELElBQ0FnRCxNQUFNaEQsZUFBTixJQUF5QkcsZ0JBQWdCNEMsYUFEN0MsRUFDNEQ7QUFDMURULHNCQUFVLElBQVY7QUFDQXRDLDhCQUFrQmdELEdBQWxCO0FBQ0QsV0FKRCxNQUlPLElBQUksQ0FBQzlDLGVBQUwsRUFBc0I7QUFDM0JBLDhCQUFrQitDLFdBQVcsWUFBVztBQUN0Qy9DLGdDQUFrQixJQUFsQjtBQUNBRixnQ0FBa0IsSUFBSXlCLElBQUosR0FBV0MsT0FBWCxLQUF1QixJQUF6QztBQUNBYztBQUNELGFBSmlCLEVBSWYsQ0FBQ3JDLGdCQUFnQjRDLGFBQWhCLElBQWlDQyxNQUFNaEQsZUFBdkMsQ0FBRCxJQUE0RCxJQUo3QyxDQUFsQjtBQUtEO0FBQ0Y7O0FBRURHLHdCQUFnQitDLG1CQUFoQixDQUFvQzlCLFlBQVkrQixTQUFaLEVBQXBDO0FBQ0EsWUFBSWIsT0FBSixFQUFhO0FBQ1hFO0FBQ0Q7QUFDRjs7O3lDQUV5QnBDLE0sRUFBUWdELFcsRUFBYTtBQUM3Q0Esc0JBQWNBLGVBQWUsSUFBSWpFLHFCQUFKLEVBQTdCOztBQUVBO0FBQ0EsWUFBSSxDQUFDZ0IsZ0JBQWdCSSxRQUFyQixFQUErQjtBQUM3QkosMEJBQWdCSSxRQUFoQixHQUNJQyw4QkFBb0JDLG1CQUFwQixDQUF3Q1Ysb0JBQVVsQixZQUFWLENBQXVCM0MsU0FBL0QsQ0FESjtBQUVEO0FBQ0QsWUFBSSxDQUFDaUUsZ0JBQWdCSSxRQUFyQixFQUErQjtBQUM3QixjQUFJRyxLQUFLLEVBQVQ7QUFDQSxjQUFJQyxXQUFXLHlEQUNYLFlBREo7QUFFQSxlQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxFQUFwQixFQUF3QkEsR0FBeEIsRUFBNkI7QUFDM0JGLGtCQUFNQyxTQUFTRSxNQUFULENBQWdCQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0JMLFNBQVNNLE1BQXBDLENBQWhCLENBQU47QUFDRDtBQUNEZCwwQkFBZ0JJLFFBQWhCLEdBQTJCRyxFQUEzQjtBQUNBRix3Q0FBb0JVLGtCQUFwQixDQUF1Q25CLG9CQUFVbEIsWUFBVixDQUF1QjNDLFNBQTlELEVBQXlFd0UsRUFBekU7QUFDRDtBQUNELFlBQUksQ0FBQ1AsZ0JBQWdCZ0IsTUFBckIsRUFBNkI7QUFDM0JoQiwwQkFBZ0JnQixNQUFoQixHQUF5QlgsOEJBQW9CQyxtQkFBcEIsQ0FBd0NWLG9CQUFVbEIsWUFBVixDQUF1QjFDLE9BQS9ELENBQXpCO0FBQ0EsY0FBSSxDQUFDZ0UsZ0JBQWdCZ0IsTUFBckIsRUFBNkI7QUFDM0JoQiw0QkFBZ0JnQixNQUFoQixHQUF5QmhCLGdCQUFnQkksUUFBekM7QUFDRDtBQUNGO0FBQ0RDLHNDQUFvQlUsa0JBQXBCLENBQXVDbkIsb0JBQVVsQixZQUFWLENBQXVCMUMsT0FBOUQsRUFBdUVnRSxnQkFBZ0JnQixNQUF2Rjs7QUFFQSxZQUFJQyxjQUFjZ0MsWUFDYi9CLGFBRGEsQ0FDQ2xCLGdCQUFnQlAsS0FEakIsRUFDd0JPLGdCQUFnQk4sU0FEeEMsRUFFYkMsR0FGYSxDQUVUQyxvQkFBVWpFLE1BQVYsQ0FBaUJGLFdBRlIsRUFFcUJtRSxvQkFBVW5FLFdBRi9CLEVBR2JrRSxHQUhhLENBR1RDLG9CQUFVakUsTUFBVixDQUFpQkksU0FIUixFQUdtQmlFLGdCQUFnQkksUUFIbkMsRUFJYlQsR0FKYSxDQUlUQyxvQkFBVWpFLE1BQVYsQ0FBaUJLLE9BSlIsRUFJaUJnRSxnQkFBZ0JnQixNQUpqQyxFQUtickIsR0FMYSxDQUtUQyxvQkFBVWpFLE1BQVYsQ0FBaUJDLE1BTFIsRUFLZ0JxRSxNQUxoQixFQU1iTixHQU5hLENBTVRDLG9CQUFVakUsTUFBVixDQUFpQlEsWUFOUixFQU1zQjZELGdCQUFnQm1CLFdBTnRDLEVBT2J4QixHQVBhLENBT1RDLG9CQUFVakUsTUFBVixDQUFpQk8sUUFQUixFQU9rQmtGLHdCQUFjQyxPQVBoQyxFQVFiMUIsR0FSYSxDQVFUQyxvQkFBVWpFLE1BQVYsQ0FBaUIwQixJQVJSLEVBUWMsQ0FBQyxJQUFJaUUsSUFBSixHQUFXQyxPQUFYLEtBQXVCLElBQXhCLEVBQThCQyxRQUE5QixFQVJkLENBQWxCOztBQVVBLFlBQUksQ0FBQ3hCLGdCQUFnQlAsS0FBakIsSUFBMEIsQ0FBQ08sZ0JBQWdCTixTQUEvQyxFQUEwRDtBQUN4RCxjQUFJa0MsTUFBTSwrREFDTixzRUFETSxHQUVOLDJCQUZKO0FBR0FDLGtCQUFRRixLQUFSLENBQWNDLEdBQWQ7QUFDQSxnQkFBTSxJQUFJc0IsS0FBSixDQUFVdEIsR0FBVixDQUFOO0FBQ0Q7O0FBRUQsZUFBVTVCLGdCQUFnQmdDLE9BQTFCLFNBQXFDZixZQUFZZ0IsS0FBWixFQUFyQztBQUNEOzs7d0NBTXdCa0IsTyxFQUFTO0FBQ2hDckIsMEJBQVFzQixpQkFBUixDQUEwQkQsT0FBMUI7QUFDRDs7OzBDQUUwQkUsSSxFQUFNO0FBQy9CLFlBQUlDLFFBQVFqRCw4QkFBb0JDLG1CQUFwQixDQUF3Q1Ysb0JBQVVsQixZQUFWLENBQXVCQyxLQUEvRCxLQUF5RSxDQUFyRjtBQUNBLFlBQUk0RSxVQUFVM0Qsb0JBQVVsQixZQUFWLENBQXVCRSxJQUF2QixHQUE4QjBFLEtBQTVDO0FBQ0FqRCxzQ0FBb0JVLGtCQUFwQixDQUF1Q3dDLE9BQXZDLEVBQWdEZCxLQUFLQyxTQUFMLENBQWVXLElBQWYsQ0FBaEQ7QUFDQUM7QUFDQWpELHNDQUFvQlUsa0JBQXBCLENBQXVDbkIsb0JBQVVsQixZQUFWLENBQXVCQyxLQUE5RCxFQUFxRTJFLEtBQXJFO0FBQ0Q7OzswQ0FFMEI7QUFDekIsWUFBSWQsY0FBYyxFQUFsQjtBQUNBLFlBQUljLFFBQVFqRCw4QkFBb0JDLG1CQUFwQixDQUF3Q1Ysb0JBQVVsQixZQUFWLENBQXVCQyxLQUEvRCxLQUF5RSxDQUFyRjtBQUNBMEIsc0NBQW9CbUQsc0JBQXBCLENBQTJDNUQsb0JBQVVsQixZQUFWLENBQXVCQyxLQUFsRTtBQUNBLGFBQUssSUFBSThCLElBQUksQ0FBYixFQUFnQkEsSUFBSTZDLEtBQXBCLEVBQTJCN0MsR0FBM0IsRUFBZ0M7QUFDOUIsY0FBSThDLFVBQVUzRCxvQkFBVWxCLFlBQVYsQ0FBdUJFLElBQXZCLEdBQThCNkIsQ0FBNUM7QUFDQSxjQUFJO0FBQ0YsZ0JBQUlnRCxjQUFjaEIsS0FBS2lCLEtBQUwsQ0FBV3JELDhCQUFvQkMsbUJBQXBCLENBQXdDaUQsT0FBeEMsQ0FBWCxDQUFsQjtBQUNBZix3QkFBWW1CLElBQVosQ0FBaUJGLFdBQWpCO0FBQ0QsV0FIRCxDQUdFLE9BQU9HLE9BQVAsRUFBZ0IsQ0FBRTtBQUNuQjtBQUNEdkQsd0NBQW9CbUQsc0JBQXBCLENBQTJDRCxPQUEzQztBQUNEO0FBQ0QsZUFBT2YsV0FBUDtBQUNEOzs7bUNBSW1CZCxRLEVBQVU7QUFDNUIsWUFBSSxDQUFDQSxRQUFELElBQWEsQ0FBQ0EsU0FBU0EsUUFBM0IsRUFBcUM7QUFDbkMsaUJBQU8sQ0FBUDtBQUNEO0FBQ0QsZUFBT0EsU0FBU0EsUUFBVCxDQUFrQlosTUFBekI7QUFDRDs7O29DQUVvQlksUSxFQUFVbUMsSyxFQUFPO0FBQ3BDLFlBQUksQ0FBQ25DLFFBQUQsSUFBYSxDQUFDQSxTQUFTQSxRQUEzQixFQUFxQztBQUNuQyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxlQUFPQSxTQUFTQSxRQUFULENBQWtCbUMsS0FBbEIsQ0FBUDtBQUNEOzs7c0NBRXNCbkMsUSxFQUFVO0FBQy9CLFlBQUk0QixRQUFRdEQsZ0JBQWdCOEQsWUFBaEIsQ0FBNkJwQyxRQUE3QixDQUFaO0FBQ0EsWUFBSTRCLFFBQVEsQ0FBWixFQUFlO0FBQ2IsaUJBQU90RCxnQkFBZ0IrRCxhQUFoQixDQUE4QnJDLFFBQTlCLEVBQXdDNEIsUUFBUSxDQUFoRCxDQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7Ozt3Q0FFd0I1QixRLEVBQVU7QUFDakMsWUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYixpQkFBTyxLQUFQO0FBQ0Q7QUFDRCxlQUFPLENBQUMsQ0FBQ0EsU0FBU0QsT0FBbEI7QUFDRDs7O3VDQUV1QkMsUSxFQUFVO0FBQ2hDLFlBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2IsaUJBQU8sSUFBUDtBQUNEO0FBQ0QsWUFBSUMsUUFBUUQsU0FBU0MsS0FBckI7QUFDQSxZQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLGlCQUFPLElBQVA7QUFDRDtBQUNELGVBQU9BLE1BQU1xQyxPQUFiO0FBQ0Q7Ozs7OztBQXpPa0JoRSxpQixDQUVaZ0MsTyxHQUFVLDhCO0FBRkVoQyxpQixDQUdab0MsWSxHQUFlLEk7QUFISHBDLGlCLENBSVo0QyxhLEdBQWdCLEM7b0JBSko1QyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsTUFBSWlFLDRCQUFKO0FBQ0EsTUFBSUMsd0JBQXdCLEVBQTVCOztNQUVxQjdELG1COzs7Ozs7OzBDQUNRbEIsRyxFQUFLO0FBQzlCLFlBQUk4RSx3QkFBd0IsS0FBNUIsRUFBbUM7QUFDakMsaUJBQU9DLHNCQUFzQi9FLEdBQXRCLENBQVA7QUFDRDtBQUNELGVBQU9nRixhQUFhaEYsR0FBYixDQUFQO0FBQ0Q7Ozt5Q0FFeUJBLEcsRUFBS0MsSyxFQUFPO0FBQ3BDLFlBQUk2RSx3QkFBd0IsS0FBNUIsRUFBbUM7QUFDakNDLGdDQUFzQi9FLEdBQXRCLElBQTZCQyxLQUE3QjtBQUNBO0FBQ0Q7QUFDRCxZQUFJO0FBQ0YrRSx1QkFBYWhGLEdBQWIsSUFBb0JDLEtBQXBCO0FBQ0QsU0FGRCxDQUVFLE9BQU9nRixDQUFQLEVBQVU7QUFDVkgsZ0NBQXNCLEtBQXRCO0FBQ0FDLGdDQUFzQi9FLEdBQXRCLElBQTZCQyxLQUE3QjtBQUNEO0FBQ0Y7Ozs2Q0FFNkJELEcsRUFBSztBQUNqQyxZQUFJOEUsd0JBQXdCLEtBQTVCLEVBQW1DO0FBQ2pDLGlCQUFPQyxzQkFBc0IvRSxHQUF0QixDQUFQO0FBQ0E7QUFDRDtBQUNELFlBQUk7QUFDRmdGLHVCQUFhRSxVQUFiLENBQXdCbEYsR0FBeEI7QUFDRCxTQUZELENBRUUsT0FBT2lGLENBQVAsRUFBVTtBQUNWSCxnQ0FBc0IsS0FBdEI7QUFDQSxpQkFBT0Msc0JBQXNCL0UsR0FBdEIsQ0FBUDtBQUNEO0FBQ0Y7Ozs7OztvQkFoQ2tCa0IsbUI7Ozs7Ozs7O0FDckJyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ1ZxQmUsYTs7Ozs7Ozs4Q0FXWWtELE8sRUFBUztBQUN0Q2xELHNCQUFjbUQsYUFBZCxDQUE0QlosSUFBNUIsQ0FBaUNXLE9BQWpDO0FBQ0EsWUFBSWxELGNBQWNvRCxVQUFsQixFQUE4QjtBQUM1QkYsa0JBQVFsRCxjQUFjcUQsZUFBdEI7QUFDRDtBQUNGOzs7aURBRWlDSCxPLEVBQVM7QUFDekMsWUFBSUksTUFBTXRELGNBQWNtRCxhQUFkLENBQTRCSSxPQUE1QixDQUFvQ0wsT0FBcEMsQ0FBVjtBQUNBLFlBQUlJLE9BQU8sQ0FBWCxFQUFjO0FBQ1p0RCx3QkFBY21ELGFBQWQsQ0FBNEJLLE1BQTVCLENBQW1DRixHQUFuQyxFQUF3QyxDQUF4QztBQUNEO0FBQ0Y7Ozs2Q0FFNkI7QUFDNUIsYUFBSyxJQUFJakUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJVyxjQUFjbUQsYUFBZCxDQUE0QnpELE1BQWhELEVBQXdETCxHQUF4RCxFQUE2RDtBQUMzRFcsd0JBQWNtRCxhQUFkLENBQTRCOUQsQ0FBNUIsRUFBK0JXLGNBQWNxRCxlQUE3QztBQUNEO0FBQ0Y7OztpREFFaUNILE8sRUFBUztBQUN6Q2xELHNCQUFjeUQsd0JBQWQsQ0FBdUNsQixJQUF2QyxDQUE0Q1csT0FBNUM7QUFDQSxZQUFJbEQsY0FBYzBELGdCQUFsQixFQUFvQztBQUNsQ1I7QUFDRDtBQUNGOzs7b0RBRW9DQSxPLEVBQVM7QUFDNUMsWUFBSUksTUFBTXRELGNBQWN5RCx3QkFBZCxDQUF1Q0YsT0FBdkMsQ0FBK0NMLE9BQS9DLENBQVY7QUFDQSxZQUFJSSxPQUFPLENBQVgsRUFBYztBQUNadEQsd0JBQWN5RCx3QkFBZCxDQUF1Q0QsTUFBdkMsQ0FBOENGLEdBQTlDLEVBQW1ELENBQW5EO0FBQ0Q7QUFDRjs7O3dEQUV3QztBQUN2QyxhQUFLLElBQUlqRSxJQUFJLENBQWIsRUFBZ0JBLElBQUlXLGNBQWN5RCx3QkFBZCxDQUF1Qy9ELE1BQTNELEVBQW1FTCxHQUFuRSxFQUF3RTtBQUNwRVcsd0JBQWN5RCx3QkFBZCxDQUF1Q3BFLENBQXZDO0FBQ0Q7QUFDSjs7O2lEQUVtQ3NFLHVCLEVBQXlCO0FBQzNEM0Qsc0JBQWMyRCx1QkFBZCxHQUF3Q0EsdUJBQXhDO0FBQ0Q7Ozs7OztBQXJEa0IzRCxlLENBQ1pDLE8sR0FBVSxLO0FBREVELGUsQ0FHWnlELHdCLEdBQTJCLEU7QUFIZnpELGUsQ0FJWjBELGdCLEdBQW1CLEs7QUFKUDFELGUsQ0FNWm1ELGEsR0FBZ0IsRTtBQU5KbkQsZSxDQU9ab0QsVSxHQUFhLEs7QUFQRHBELGUsQ0FRWnFELGUsR0FBa0IsSztBQVJOckQsZSxDQVNaMkQsdUIsR0FBMEIsSztvQkFUZDNELGE7Ozs7Ozs7O0FDbEJyQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkN6QmdCLFlBQVU7QUFDeEIsUUFBSTRELFNBQVMsRUFBYjs7QUFFQSxXQUFPO0FBQ0xDLGlCQUFXLG1CQUFTQyxLQUFULEVBQWdCQyxRQUFoQixFQUEwQjtBQUNuQyxZQUFHLENBQUNILE9BQU9JLGNBQVAsQ0FBc0JDLElBQXRCLENBQTJCTCxNQUEzQixFQUFtQ0UsS0FBbkMsQ0FBSixFQUErQ0YsT0FBT0UsS0FBUCxJQUFnQixFQUFoQjs7QUFFL0MsWUFBSXJCLFFBQVFtQixPQUFPRSxLQUFQLEVBQWN2QixJQUFkLENBQW1Cd0IsUUFBbkIsSUFBK0IsQ0FBM0M7O0FBRUEsZUFBTztBQUNMRyxrQkFBUSxrQkFBVztBQUNqQixtQkFBT04sT0FBT0UsS0FBUCxFQUFjckIsS0FBZCxDQUFQO0FBQ0Q7QUFISSxTQUFQO0FBS0QsT0FYSTtBQVlMMEIsZUFBUyxpQkFBU0wsS0FBVCxFQUFnQk0sSUFBaEIsRUFBc0I7QUFDN0IsWUFBRyxDQUFDUixPQUFPSSxjQUFQLENBQXNCQyxJQUF0QixDQUEyQkwsTUFBM0IsRUFBbUNFLEtBQW5DLENBQUosRUFBK0M7O0FBRS9DRixlQUFPRSxLQUFQLEVBQWNPLE9BQWQsQ0FBc0IsVUFBU0MsSUFBVCxFQUFlO0FBQ25DQSxlQUFLRixRQUFRMUYsU0FBUixHQUFvQjBGLElBQXBCLEdBQTJCLEVBQWhDO0FBQ0QsU0FGRDtBQUdEO0FBbEJJLEtBQVA7QUFvQkQsR0F2QmMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUN3Qk1HLFE7Ozs7Ozs7aUNBVURDLEssRUFBT0MsUSxFQUFVQyxjLEVBQWdCO0FBQ2pESCxpQkFBU0MsS0FBVCxHQUFpQkEsS0FBakI7QUFDQUQsaUJBQVNFLFFBQVQsR0FBb0JBLFFBQXBCO0FBQ0FGLGlCQUFTRyxjQUFULEdBQTBCQSxjQUExQjtBQUNBMUUsZ0NBQWMwRCxnQkFBZCxHQUFpQyxJQUFqQztBQUNBYSxpQkFBU0ksTUFBVCxHQUFrQkosU0FBU0ssV0FBVCxDQUFxQkwsU0FBU00sU0FBOUIsRUFBeUNMLEtBQXpDLENBQWxCO0FBQ0FELGlCQUFTTyxTQUFUO0FBQ0EsWUFBSVAsU0FBU1EsUUFBYixFQUF1QjtBQUNyQlIsbUJBQVNRLFFBQVQ7QUFDRDtBQUNGOzs7a0NBRWtCO0FBQ2pCLFlBQUk7QUFDRlIsbUJBQVNTLFVBQVQsQ0FDSTNELEtBQUtpQixLQUFMLENBQVdyRCw4QkFBb0JDLG1CQUFwQixDQUNQVixvQkFBVWxCLFlBQVYsQ0FBdUJiLFNBRGhCLEtBQzhCLElBRHpDLENBREosRUFHSTRFLEtBQUtpQixLQUFMLENBQVdyRCw4QkFBb0JDLG1CQUFwQixDQUNQVixvQkFBVWxCLFlBQVYsQ0FBdUJMLFFBRGhCLEtBQzZCLElBRHhDLENBSEosRUFLSW9FLEtBQUtpQixLQUFMLENBQVdyRCw4QkFBb0JDLG1CQUFwQixDQUNQVixvQkFBVWxCLFlBQVYsQ0FBdUJILGVBRGhCLEtBQ29DLElBRC9DLENBTEo7QUFPQW9ILG1CQUFTVSxLQUFULEdBQWlCaEcsOEJBQW9CQyxtQkFBcEIsQ0FBd0NWLG9CQUFVbEIsWUFBVixDQUF1QkYsS0FBL0QsQ0FBakI7QUFDQW1ILG1CQUFTVyxnQkFBVCxHQUE0QmpHLDhCQUFvQkMsbUJBQXBCLENBQXdDVixvQkFBVWxCLFlBQVYsQ0FBdUJKLGtCQUEvRCxDQUE1QjtBQUNELFNBVkQsQ0FVRSxPQUFPOEYsQ0FBUCxFQUFVO0FBQ1Z2QyxrQkFBUTBFLEdBQVIsK0JBQXdDbkMsQ0FBeEM7QUFDRDtBQUNGOzs7a0NBRWtCO0FBQ2pCL0Qsc0NBQW9CVSxrQkFBcEIsQ0FDSW5CLG9CQUFVbEIsWUFBVixDQUF1QmIsU0FEM0IsRUFDc0M0RSxLQUFLQyxTQUFMLENBQWVpRCxTQUFTQyxLQUFULElBQWtCLEVBQWpDLENBRHRDO0FBRUF2RixzQ0FBb0JVLGtCQUFwQixDQUNJbkIsb0JBQVVsQixZQUFWLENBQXVCTCxRQUQzQixFQUNxQ29FLEtBQUtDLFNBQUwsQ0FBZWlELFNBQVNFLFFBQVQsSUFBcUIsRUFBcEMsQ0FEckM7QUFHQXhGLHNDQUFvQlUsa0JBQXBCLENBQXVDbkIsb0JBQVVsQixZQUFWLENBQXVCSCxlQUE5RCxFQUNJa0UsS0FBS0MsU0FBTCxDQUFlaUQsU0FBU0csY0FBVCxJQUEyQixFQUExQyxDQURKO0FBRUF6RixzQ0FBb0JVLGtCQUFwQixDQUF1Q25CLG9CQUFVbEIsWUFBVixDQUF1Qkosa0JBQTlELEVBQ0ltRSxLQUFLQyxTQUFMLENBQWVpRCxTQUFTVyxnQkFBVCxJQUE2QixFQUE1QyxDQURKO0FBRUFqRyxzQ0FBb0JVLGtCQUFwQixDQUF1Q25CLG9CQUFVbEIsWUFBVixDQUF1QkYsS0FBOUQsRUFBcUVtSCxTQUFTVSxLQUE5RTtBQUNEOzs7bUNBRW1CSixTLEVBQVc7QUFDN0JOLGlCQUFTTSxTQUFULEdBQXFCQSxTQUFyQjtBQUNEOzs7cUNBRXFCO0FBQ3BCLGVBQU9OLFNBQVNJLE1BQVQsS0FBb0JqRyxTQUFwQixHQUFnQzZGLFNBQVNJLE1BQXpDLEdBQWtESixTQUFTTSxTQUFsRTtBQUNEOzs7NENBRTRCO0FBQzNCLGVBQU9OLFNBQVNXLGdCQUFoQjtBQUNEOzs7c0NBRXNCO0FBQ3JCLFlBQUkvRyxPQUFPLEVBQVg7QUFDQUEsYUFBS0ssb0JBQVVqRSxNQUFWLENBQWlCa0MsU0FBdEIsSUFBbUM4SCxTQUFTTSxTQUE1QztBQUNBakcsa0NBQWdCd0csT0FBaEIsQ0FBd0I1RyxvQkFBVXBGLE9BQVYsQ0FBa0JXLFFBQTFDLEVBQ0ksSUFBSTZELHFCQUFKLEdBQWtCTyxJQUFsQixDQUF1QmtELEtBQUtDLFNBQUwsQ0FBZW5ELElBQWYsQ0FBdkIsQ0FESixFQUNrRDtBQUM1QzRDLG1CQUFTO0FBRG1DLFNBRGxEO0FBSUQ7OztrQ0FFa0JzRSxJLEVBQU1DLEksRUFBTTtBQUM3QixZQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsSUFBNEIsT0FBT0EsSUFBUCxLQUFnQixTQUE1QyxJQUF5RCxPQUFPQSxJQUFQLEtBQWdCLFFBQTdFLEVBQXVGO0FBQ3JGLGlCQUFPQSxJQUFQO0FBQ0Q7QUFDRCxZQUFJQSxTQUFTLElBQVQsSUFBaUJBLFNBQVM1RyxTQUE5QixFQUF5QztBQUN2QyxpQkFBTzJHLElBQVA7QUFDRDs7QUFFRCxZQUFJRSxjQUFjLFNBQWRBLFdBQWMsQ0FBU0MsR0FBVCxFQUFjO0FBQzlCLGlCQUFPLFVBQVNDLENBQVQsRUFBWTtBQUNqQixnQkFBSUQsZUFBZUUsS0FBbkIsRUFBMEI7QUFDeEIsbUJBQUssSUFBSXJHLElBQUksQ0FBYixFQUFnQkEsSUFBSW1HLElBQUk5RixNQUF4QixFQUFnQ0wsR0FBaEMsRUFBcUM7QUFDbkNvRyxrQkFBRUQsSUFBSW5HLENBQUosQ0FBRjtBQUNEO0FBQ0YsYUFKRCxNQUlPO0FBQ0wsbUJBQUssSUFBSXNHLElBQVQsSUFBaUJILEdBQWpCLEVBQXNCO0FBQ3BCO0FBQ0E7QUFDQSxvQkFBSSxHQUFHeEIsY0FBSCxDQUFrQkMsSUFBbEIsQ0FBdUJ1QixHQUF2QixFQUE0QkcsSUFBNUIsQ0FBSixFQUF1QztBQUNyQ0Ysb0JBQUVFLElBQUY7QUFDRDtBQUNGO0FBQ0Y7QUFDRixXQWREO0FBZUQsU0FoQkQ7QUFpQkEsWUFBSUMsZUFBZUwsWUFBWUYsSUFBWixDQUFuQjtBQUNBLFlBQUlRLGVBQWVOLFlBQVlELElBQVosQ0FBbkI7O0FBRUE7QUFDQSxZQUFJUSxVQUFVLEtBQWQ7QUFDQSxZQUFJVCxTQUFTLElBQWIsRUFBbUI7QUFDakIsY0FBSSxFQUFFQyxnQkFBZ0JJLEtBQWxCLENBQUosRUFBOEI7QUFDNUJJLHNCQUFVLElBQVY7QUFDQSxpQkFBSyxJQUFJQyxTQUFULElBQXNCVCxJQUF0QixFQUE0QjtBQUMxQixrQkFBSSxDQUFDQSxLQUFLdEIsY0FBTCxDQUFvQitCLFNBQXBCLENBQUwsRUFBcUM7QUFDbkM7QUFDRDtBQUNELGtCQUFJRCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCQSwwQkFBVSxJQUFWO0FBQ0Q7QUFDRCxrQkFBSSxFQUFFLE9BQU9DLFNBQVAsS0FBcUIsUUFBdkIsQ0FBSixFQUFzQztBQUNwQ0QsMEJBQVUsS0FBVjtBQUNBO0FBQ0Q7QUFDRCxrQkFBSUMsVUFBVXJHLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0JxRyxVQUFVekcsTUFBVixDQUFpQixDQUFqQixNQUF3QixHQUFoRCxJQUNBeUcsVUFBVXpHLE1BQVYsQ0FBaUJ5RyxVQUFVckcsTUFBVixHQUFtQixDQUFwQyxNQUEyQyxHQUQvQyxFQUNvRDtBQUNsRG9HLDBCQUFVLEtBQVY7QUFDQTtBQUNEO0FBQ0Qsa0JBQUlFLGVBQWVELFVBQVVFLFNBQVYsQ0FBb0IsQ0FBcEIsRUFBdUJGLFVBQVVyRyxNQUFWLEdBQW1CLENBQTFDLENBQW5CO0FBQ0Esa0JBQUksQ0FBQ3dHLFNBQVNGLFlBQVQsRUFBdUI1RixRQUF2QixFQUFELEtBQXVDNEYsWUFBM0MsRUFBeUQ7QUFDdkRGLDBCQUFVLEtBQVY7QUFDQTtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVEO0FBQ0EsWUFBSVQsZ0JBQWdCSyxLQUFoQixJQUF5QkksT0FBN0IsRUFBc0M7QUFDcEMsY0FBSW5CLFVBQVMsRUFBYjtBQUNBaUIsdUJBQWEsVUFBU0QsSUFBVCxFQUFlO0FBQzFCaEIsb0JBQU9wQyxJQUFQLENBQVlvRCxJQUFaO0FBQ0QsV0FGRDtBQUdBRSx1QkFBYSxVQUFTRyxZQUFULEVBQXVCO0FBQ2xDLGdCQUFJRyxZQUNBRCxTQUFTRixhQUFhQyxTQUFiLENBQXVCLENBQXZCLEVBQTBCRCxhQUFhdEcsTUFBYixHQUFzQixDQUFoRCxDQUFULENBREo7QUFFQSxnQkFBSTBHLFlBQVlkLEtBQUtVLFlBQUwsQ0FBaEI7QUFDQSxtQkFBT0csYUFBYXhCLFFBQU9qRixNQUEzQixFQUFtQztBQUNqQ2lGLHNCQUFPcEMsSUFBUCxDQUFZLElBQVo7QUFDRDtBQUNEb0Msb0JBQU93QixTQUFQLElBQW9CNUIsU0FBU0ssV0FBVCxDQUFxQkQsUUFBT3dCLFNBQVAsQ0FBckIsRUFBd0NDLFNBQXhDLENBQXBCO0FBQ0QsV0FSRDtBQVNBLGlCQUFPekIsT0FBUDtBQUNEOztBQUVEO0FBQ0EsWUFBSUEsU0FBUyxFQUFiO0FBQ0FpQixxQkFBYSxVQUFTRCxJQUFULEVBQWU7QUFDMUIsY0FBSUwsS0FBS0ssSUFBTCxNQUFlLElBQWYsSUFBdUJMLEtBQUtLLElBQUwsTUFBZWpILFNBQTFDLEVBQXFEO0FBQ25EaUcsbUJBQU9nQixJQUFQLElBQWVOLEtBQUtNLElBQUwsQ0FBZjtBQUNEO0FBQ0YsU0FKRDtBQUtBRSxxQkFBYSxVQUFTRixJQUFULEVBQWU7QUFDMUJoQixpQkFBT2dCLElBQVAsSUFBZXBCLFNBQVNLLFdBQVQsQ0FBcUJTLFNBQVMsSUFBVCxHQUFnQkEsS0FBS00sSUFBTCxDQUFoQixHQUE2QixJQUFsRCxFQUNYTCxLQUFLSyxJQUFMLENBRFcsQ0FBZjtBQUVELFNBSEQ7QUFJQSxlQUFPaEIsTUFBUDtBQUNEOzs7eUNBRXlCO0FBQ3hCSixpQkFBU0MsS0FBVCxHQUFpQjlGLFNBQWpCO0FBQ0E2RixpQkFBU00sU0FBVCxHQUFxQixJQUFyQjtBQUNBTixpQkFBU0UsUUFBVCxHQUFvQixFQUFwQjtBQUNBRixpQkFBU1csZ0JBQVQsR0FBNEIsRUFBNUI7QUFDQVgsaUJBQVNJLE1BQVQsR0FBa0JqRyxTQUFsQjtBQUNEOzs7Ozs7QUF4S2tCNkYsVSxDQUNaQyxLLEdBQVE5RixTO0FBREk2RixVLENBRVpNLFMsR0FBWSxJO0FBRkFOLFUsQ0FHWkUsUSxHQUFXLEU7QUFIQ0YsVSxDQUlaVyxnQixHQUFtQixFO0FBSlBYLFUsQ0FLWkksTSxHQUFTakcsUztBQUxHNkYsVSxDQU1aUSxRLEdBQVdyRyxTO0FBTkM2RixVLENBT1pVLEssR0FBUSxFO0FBUElWLFUsQ0FRWkcsYyxHQUFpQixFO29CQVJMSCxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxNQUFJOEIsZUFBZSxFQUFuQjtBQUNBLE1BQUlDLHdCQUF3QixFQUE1Qjs7TUFFcUI1RixPOzs7Ozs7O3dDQUtNcUIsTyxFQUFTO0FBQ2hDdUUsZ0NBQXdCdkUsT0FBeEI7QUFDRDs7OzJCQWFXd0UsTSxFQUFRQyxHLEVBQUtDLEksRUFBTXBHLE8sRUFBU0UsSyxFQUFPTyxNLEVBQVE0RixTLEVBQVc7QUFDaEUsWUFBSTVGLE1BQUosRUFBWTtBQUNWLGNBQUlKLFFBQVFpRyxjQUFaLEVBQTRCO0FBQzFCO0FBQ0EsbUJBQU9qRyxRQUFRa0csY0FBUixDQUF1QkMsU0FBdkIsQ0FBUDtBQUNEO0FBQ0RuRyxrQkFBUWlHLGNBQVIsR0FBeUIsSUFBekI7QUFDRDs7QUFFRDtBQUNBO0FBQ0EsWUFBSSxPQUFPRyxjQUFQLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3pDLGNBQUlDLFNBQVNDLFFBQVQsS0FBc0IsT0FBdEIsSUFBaUNSLElBQUlqRCxPQUFKLENBQVksUUFBWixNQUEwQixDQUEvRCxFQUFrRTtBQUNoRWlELDRCQUFjQSxJQUFJUCxTQUFKLENBQWMsQ0FBZCxDQUFkO0FBQ0Q7QUFDRDtBQUNBLGlCQUFPZ0IsUUFBUUMsS0FBUixDQUFjeEcsUUFBUXlHLE9BQXRCLEVBQStCLElBQS9CLEVBQXFDTixTQUFyQyxDQUFQO0FBQ0Q7O0FBRUQsWUFBSU8sVUFBVSxLQUFkOztBQUVBLFlBQUlDLE1BQU0sSUFBSUMsY0FBSixFQUFWO0FBQ0FELFlBQUlFLGtCQUFKLEdBQXlCLFlBQVc7QUFDbEMsY0FBSUYsSUFBSUcsVUFBSixLQUFtQixDQUF2QixFQUEwQjtBQUN4QixnQkFBSUosT0FBSixFQUFhO0FBQ1g7QUFDRDtBQUNEQSxzQkFBVSxJQUFWOztBQUVBLGdCQUFJOUcsaUJBQUo7QUFDQSxnQkFBSW1ILGNBQWMsS0FBbEI7QUFDQSxnQkFBSWYsU0FBSixFQUFlO0FBQ2JwRyx5QkFBVytHLElBQUlLLFlBQWY7QUFDRCxhQUZELE1BRU87QUFDTCxrQkFBSTtBQUNGcEgsMkJBQVdlLEtBQUtpQixLQUFMLENBQVcrRSxJQUFJSyxZQUFmLENBQVg7QUFDRCxlQUZELENBRUUsT0FBTzFFLENBQVAsRUFBVTtBQUNWdEIsMkJBQVcsWUFBVztBQUNwQixzQkFBSW5CLEtBQUosRUFBVztBQUNUQSwwQkFBTSxJQUFOLEVBQVk4RyxHQUFaO0FBQ0Q7QUFDRixpQkFKRCxFQUlHLENBSkg7QUFLQUksOEJBQWMsSUFBZDtBQUNEO0FBQ0Y7O0FBRUQsZ0JBQUksQ0FBQ0EsV0FBTCxFQUFrQjtBQUNoQixrQkFBSUosSUFBSU0sTUFBSixJQUFjLEdBQWQsSUFBcUJOLElBQUlNLE1BQUosR0FBYSxHQUF0QyxFQUEyQztBQUN6Q2pHLDJCQUFXLFlBQVc7QUFDcEIsc0JBQUlyQixPQUFKLEVBQWE7QUFDWEEsNEJBQVFDLFFBQVIsRUFBa0IrRyxHQUFsQjtBQUNEO0FBQ0YsaUJBSkQsRUFJRyxDQUpIO0FBS0QsZUFORCxNQU1PO0FBQ0wzRiwyQkFBVyxZQUFXO0FBQ3BCLHNCQUFJbkIsS0FBSixFQUFXO0FBQ1RBLDBCQUFNRCxRQUFOLEVBQWdCK0csR0FBaEI7QUFDRDtBQUNGLGlCQUpELEVBSUcsQ0FKSDtBQUtEO0FBQ0Y7O0FBRUQsZ0JBQUl2RyxNQUFKLEVBQVk7QUFDVkosc0JBQVFpRyxjQUFSLEdBQXlCLEtBQXpCO0FBQ0FqRyxzQkFBUWtILGNBQVI7QUFDRDtBQUNGO0FBQ0YsU0E3Q0Q7QUE4Q0FQLFlBQUlRLElBQUosQ0FBU3RCLE1BQVQsRUFBaUJDLEdBQWpCLEVBQXNCLElBQXRCO0FBQ0FhLFlBQUlTLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLFlBQXJDLEVBckVnRSxDQXFFYjtBQUNuRFQsWUFBSVUsSUFBSixDQUFTdEIsSUFBVDtBQUNBL0UsbUJBQVcsWUFBVztBQUNwQixjQUFJLENBQUMwRixPQUFMLEVBQWM7QUFDWkMsZ0JBQUlXLEtBQUo7QUFDRDtBQUNGLFNBSkQsRUFJRzFCLHdCQUF3QixJQUozQjtBQUtEOzs7OEJBWWNDLE0sRUFBUUMsRyxFQUFLQyxJLEVBQU1wRyxPLEVBQVNFLEssRUFBT08sTSxFQUFRNEYsUyxFQUFXO0FBQ25FLFlBQUl1QixNQUFNLElBQUluQixjQUFKLEVBQVY7QUFDQW1CLFlBQUlDLE1BQUosR0FBYSxZQUFXO0FBQ3RCLGNBQUk1SCxpQkFBSjtBQUNBLGNBQUltSCxjQUFjLEtBQWxCO0FBQ0EsY0FBSWYsU0FBSixFQUFlO0FBQ2JwRyx1QkFBVzJILElBQUlQLFlBQWY7QUFDRCxXQUZELE1BRU87QUFDTCxnQkFBSTtBQUNGcEgseUJBQVdlLEtBQUtpQixLQUFMLENBQVcyRixJQUFJUCxZQUFmLENBQVg7QUFDRCxhQUZELENBRUUsT0FBTzFFLENBQVAsRUFBVTtBQUNWdEIseUJBQVcsWUFBVztBQUNwQixvQkFBSW5CLEtBQUosRUFBVztBQUNUQSx3QkFBTSxJQUFOLEVBQVkwSCxHQUFaO0FBQ0Q7QUFDRixlQUpELEVBSUcsQ0FKSDtBQUtBUiw0QkFBYyxJQUFkO0FBQ0Q7QUFDRjtBQUNELGNBQUksQ0FBQ0EsV0FBTCxFQUFrQjtBQUNoQi9GLHVCQUFXLFlBQVc7QUFDcEIsa0JBQUlyQixPQUFKLEVBQWE7QUFDWEEsd0JBQVFDLFFBQVIsRUFBa0IySCxHQUFsQjtBQUNEO0FBQ0YsYUFKRCxFQUlHLENBSkg7QUFLRDtBQUNELGNBQUluSCxNQUFKLEVBQVk7QUFDVkosb0JBQVFpRyxjQUFSLEdBQXlCLEtBQXpCO0FBQ0FqRyxvQkFBUWtILGNBQVI7QUFDRDtBQUNGLFNBNUJEO0FBNkJBSyxZQUFJRSxPQUFKLEdBQWNGLElBQUlHLFNBQUosR0FBZ0IsWUFBVztBQUN2QzFHLHFCQUFXLFlBQVc7QUFDcEIsZ0JBQUluQixLQUFKLEVBQVc7QUFDVEEsb0JBQU0sSUFBTixFQUFZMEgsR0FBWjtBQUNEO0FBQ0YsV0FKRCxFQUlHLENBSkg7QUFLQSxjQUFJbkgsTUFBSixFQUFZO0FBQ1ZKLG9CQUFRaUcsY0FBUixHQUF5QixLQUF6QjtBQUNBakcsb0JBQVFrSCxjQUFSO0FBQ0Q7QUFDRixTQVZEO0FBV0FLLFlBQUlJLFVBQUosR0FBaUIsWUFBVyxDQUMzQixDQUREO0FBRUFKLFlBQUlKLElBQUosQ0FBU3RCLE1BQVQsRUFBaUJDLEdBQWpCO0FBQ0F5QixZQUFJSyxPQUFKLEdBQWNoQyx3QkFBd0IsSUFBdEM7QUFDQTJCLFlBQUlGLElBQUosQ0FBU3RCLElBQVQ7QUFDRDs7O3FDQU9xQjhCLGdCLEVBQWtCO0FBQ3RDbEMscUJBQWE5RCxJQUFiLENBQWtCZ0csZ0JBQWxCO0FBQ0Q7Ozt1Q0FNdUI7QUFDdEIsWUFBSXRHLE9BQU9vRSxhQUFhbUMsS0FBYixFQUFYO0FBQ0EsWUFBSXZHLElBQUosRUFBVTtBQUNSZ0Ysa0JBQVFDLEtBQVIsQ0FBY3hHLFFBQVFDLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDc0IsSUFBbEM7QUFDRDtBQUNGOzs7Ozs7b0JBL0trQnZCLE87Ozs7Ozs7O0FDdkJyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDcENBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQU0rSCxjQUFjLENBQUM7QUFDbkJDLFlBQVFDLFVBQVVDLFNBREM7QUFFbkJDLGVBQVcsUUFGUTtBQUduQkMsY0FBVTtBQUhTLEdBQUQsRUFJakI7QUFDREosWUFBUUMsVUFBVUMsU0FEakI7QUFFREMsZUFBVyxTQUZWO0FBR0RFLG1CQUFlLFVBSGQ7QUFJREQsY0FBVTtBQUpULEdBSmlCLEVBU2pCO0FBQ0RKLFlBQVFDLFVBQVVLLE1BRGpCO0FBRURILGVBQVcsT0FGVjtBQUdEQyxjQUFVLFFBSFQ7QUFJREMsbUJBQWU7QUFKZCxHQVRpQixFQWNqQjtBQUNERSxVQUFNQyxPQUFPQyxLQURaO0FBRURMLGNBQVUsT0FGVDtBQUdEQyxtQkFBZTtBQUhkLEdBZGlCLEVBa0JqQjtBQUNETCxZQUFRQyxVQUFVSyxNQURqQjtBQUVESCxlQUFXLE1BRlY7QUFHREMsY0FBVTtBQUhULEdBbEJpQixFQXNCakI7QUFDREosWUFBUUMsVUFBVUssTUFEakI7QUFFREgsZUFBVyxLQUZWO0FBR0RDLGNBQVU7QUFIVCxHQXRCaUIsRUEwQmpCO0FBQ0RKLFlBQVFDLFVBQVVDLFNBRGpCO0FBRURDLGVBQVcsU0FGVjtBQUdEQyxjQUFVO0FBSFQsR0ExQmlCLEVBOEJqQjtBQUNESixZQUFRQyxVQUFVSyxNQURqQjtBQUVESCxlQUFXLFFBRlY7QUFHREMsY0FBVTtBQUhULEdBOUJpQixFQWtDakIsRUFBRTtBQUNISixZQUFRQyxVQUFVQyxTQURqQjtBQUVEQyxlQUFXLFVBRlY7QUFHREMsY0FBVTtBQUhULEdBbENpQixFQXNDakI7QUFDREosWUFBUUMsVUFBVUMsU0FEakI7QUFFREMsZUFBVyxNQUZWO0FBR0RDLGNBQVUsVUFIVDtBQUlEQyxtQkFBZTtBQUpkLEdBdENpQixFQTJDakI7QUFDREwsWUFBUUMsVUFBVUMsU0FEakI7QUFFREMsZUFBVyxPQUZWO0FBR0RDLGNBQVUsU0FIVDtBQUlEQyxtQkFBZTtBQUpkLEdBM0NpQixFQWdEakIsRUFBRTtBQUNITCxZQUFRQyxVQUFVQyxTQURqQjtBQUVEQyxlQUFXLFNBRlY7QUFHREMsY0FBVSxVQUhUO0FBSURDLG1CQUFlO0FBSmQsR0FoRGlCLENBQXBCOztBQXVEQSxNQUFNSyxTQUFTLENBQUM7QUFDZFYsWUFBUUMsVUFBVVUsUUFESjtBQUVkUixlQUFXLEtBRkc7QUFHZEMsY0FBVTtBQUhJLEdBQUQsRUFJWjtBQUNESixZQUFRQyxVQUFVVSxRQURqQjtBQUVEUixlQUFXLEtBRlY7QUFHREMsY0FBVTtBQUhULEdBSlksRUFRWjtBQUNESixZQUFRQyxVQUFVQyxTQURqQjtBQUVEQyxlQUFXLFFBRlY7QUFHREMsY0FBVTtBQUhULEdBUlksRUFZWjtBQUNESixZQUFRQyxVQUFVVSxRQURqQjtBQUVEUixlQUFXLE9BRlY7QUFHREMsY0FBVTtBQUhULEdBWlksQ0FBZjs7QUFrQkE7QUFDQTs7OztNQUdxQlEsZTtBQUNuQjs7O0FBR0EsK0JBQWM7QUFBQTs7QUFDWixXQUFLQyxPQUFMLEdBQWUsS0FBS0MsYUFBTCxDQUFtQmYsV0FBbkIsS0FBbUMsaUJBQWxEO0FBQ0EsV0FBS2dCLE9BQUwsR0FBZSxLQUFLQyxjQUFMLENBQW9CZixVQUFVQyxTQUE5QixLQUNYLEtBQUtjLGNBQUwsQ0FBb0JmLFVBQVVnQixVQUE5QixDQURXLElBQ2tDLGlCQURqRDtBQUVBLFdBQUtDLEVBQUwsR0FBVSxLQUFLSixhQUFMLENBQW1CSixNQUFuQixLQUE4QixZQUF4QztBQUNEOztBQUVEOzs7Ozs7Ozs7b0NBS2MzQyxJLEVBQU07QUFDbEIsYUFBSyxJQUFJcEgsSUFBSSxDQUFiLEVBQWdCQSxJQUFJb0gsS0FBSy9HLE1BQXpCLEVBQWlDTCxHQUFqQyxFQUFzQztBQUNwQyxjQUFJd0ssYUFBYXBELEtBQUtwSCxDQUFMLEVBQVFxSixNQUF6QjtBQUNBLGNBQUlvQixXQUFXckQsS0FBS3BILENBQUwsRUFBUTRKLElBQXZCO0FBQ0EsZUFBS2MsbUJBQUwsR0FBMkJ0RCxLQUFLcEgsQ0FBTCxFQUFRMEosYUFBUixJQUF5QnRDLEtBQUtwSCxDQUFMLEVBQVF5SixRQUE1RDtBQUNBLGNBQUllLFVBQUosRUFBZ0I7QUFDZCxnQkFBSUEsV0FBV3RHLE9BQVgsQ0FBbUJrRCxLQUFLcEgsQ0FBTCxFQUFRd0osU0FBM0IsTUFBMEMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoRCxxQkFBT3BDLEtBQUtwSCxDQUFMLEVBQVF5SixRQUFmO0FBQ0Q7QUFDRixXQUpELE1BSU8sSUFBSWdCLFFBQUosRUFBYztBQUNuQixtQkFBT3JELEtBQUtwSCxDQUFMLEVBQVF5SixRQUFmO0FBQ0Q7QUFDRjtBQUNGOzs7cUNBUWNlLFUsRUFBWTtBQUN6QixZQUFJLENBQUNBLFVBQUwsRUFBaUI7QUFDZixpQkFBTyxDQUFDLENBQVI7QUFDRDtBQUNELFlBQUlwSCxRQUFRb0gsV0FBV3RHLE9BQVgsQ0FBbUIsS0FBS3dHLG1CQUF4QixDQUFaO0FBQ0EsWUFBSXRILFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLGlCQUFPLENBQUMsQ0FBUjtBQUNEO0FBQ0QsZUFBT3VILFdBQVdILFdBQVc1RCxTQUFYLENBQXFCeEQsUUFBUSxLQUFLc0gsbUJBQUwsQ0FBeUJySyxNQUFqQyxHQUEwQyxDQUEvRCxDQUFYLENBQVA7QUFDRDs7Ozs7O29CQTlDa0I0SixlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ3BFQVcsYzs7Ozs7OztnQ0FJRjtBQUNmLFlBQUksQ0FBQ0MsU0FBTCxFQUFnQjtBQUNkekosa0JBQVEwRSxHQUFSLENBQVksMkNBQVo7QUFDQTtBQUNEOztBQUVELFlBQUlnRixTQUFTLElBQUlDLHdCQUFKLEVBQWI7QUFDQSxZQUFJQyxXQUFXLEtBQWY7QUFDQUYsZUFBT0csTUFBUCxHQUFnQixZQUFXO0FBQ3pCLGNBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2I1SixvQkFBUTBFLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLGdCQUFJbEQsT0FBTyxFQUFYO0FBQ0FBLGlCQUFLekQsb0JBQVVqRSxNQUFWLENBQWlCRSxNQUF0QixJQUFnQ21FLDBCQUFnQlAsS0FBaEQ7QUFDQTRELGlCQUFLekQsb0JBQVVqRSxNQUFWLENBQWlCSSxTQUF0QixJQUFtQ2lFLDBCQUFnQkksUUFBbkQ7QUFDQW1MLG1CQUFPcEMsSUFBUCxDQUFZLE1BQVosRUFBb0I5RixJQUFwQjtBQUNBb0ksdUJBQVcsSUFBWDtBQUNEO0FBQ0YsU0FURDtBQVVBRixlQUFPaEMsT0FBUCxHQUFpQixVQUFTb0MsS0FBVCxFQUFnQjtBQUMvQjlKLGtCQUFRMEUsR0FBUixDQUFZLHdCQUFaLEVBQXNDb0YsS0FBdEM7QUFDRCxTQUZEO0FBR0E7Ozs7OztBQU1BSixlQUFPSyxTQUFQLEdBQW1CLFVBQVNELEtBQVQsRUFBZ0J0SSxJQUFoQixFQUFzQjtBQUN2QyxjQUFJc0ksVUFBVSxZQUFkLEVBQTRCO0FBQzFCM0wsc0NBQWdCd0csT0FBaEIsQ0FBd0I1RyxvQkFBVXBGLE9BQVYsQ0FBa0JZLFFBQTFDLEVBQ0ksSUFBSTRELHFCQUFKLEdBQ0tXLEdBREwsQ0FDU0Msb0JBQVVqRSxNQUFWLENBQWlCbUMsZ0JBRDFCLEVBQzRDLEtBRDVDLENBREosRUFFd0Q7QUFDbERvRSxzQkFBUSxLQUQwQztBQUVsREMsdUJBQVMsSUFGeUM7QUFHbERULHdCQUFVLGtCQUFTQSxTQUFULEVBQW1CO0FBQzNCLG9CQUFJbUssa0JBQWtCN0wsMEJBQWdCOEwsZUFBaEIsQ0FBZ0NwSyxTQUFoQyxDQUF0QjtBQUNBLG9CQUFJcUssU0FBU0YsZ0JBQWdCak0sb0JBQVUxQixJQUFWLENBQWVYLElBQS9CLENBQWI7QUFDQSxvQkFBSXNJLFdBQVdnRyxnQkFBZ0JqTSxvQkFBVTFCLElBQVYsQ0FBZUcsUUFBL0IsQ0FBZjtBQUNBLG9CQUFJeUgsaUJBQWlCK0YsZ0JBQWdCak0sb0JBQVUxQixJQUFWLENBQWVLLGVBQS9CLENBQXJCO0FBQ0Esb0JBQUksQ0FBQyx1QkFBUXdOLE1BQVIsRUFBZ0JwRyxtQkFBU0MsS0FBekIsQ0FBTCxFQUFzQztBQUNwQ0QscUNBQVNTLFVBQVQsQ0FBb0IyRixNQUFwQixFQUE0QmxHLFFBQTVCLEVBQXNDQyxjQUF0QztBQUNEO0FBQ0Y7QUFYaUQsYUFGeEQ7QUFnQkQsV0FqQkQsTUFpQk8sSUFBSTZGLFVBQVUsY0FBZCxFQUE4QjtBQUNuQ2hHLCtCQUFTcUcsYUFBVDtBQUNBVCxtQkFBT3BDLElBQVAsQ0FBWSxvQkFBWixFQUFrQztBQUNoQyx5QkFBVztBQURxQixhQUFsQztBQUdELFdBTE0sTUFLQSxJQUFJd0MsVUFBVSxZQUFkLEVBQTRCO0FBQ2pDO0FBQ0FKLG1CQUFPcEMsSUFBUCxDQUFZLG9CQUFaLEVBQWtDO0FBQ2hDLHlCQUFXO0FBRHFCLGFBQWxDO0FBR0QsV0FMTSxNQUtBLElBQUl3QyxVQUFVLGdCQUFkLEVBQWdDO0FBQ3JDO0FBQ0FNLDBEQUE0QzVJLEtBQUssQ0FBTCxFQUFRNkksS0FBcEQ7QUFDRCxXQUhNLE1BR0EsSUFBSVAsVUFBVSxTQUFkLEVBQXlCO0FBQzlCUSw2QkFBTzVHLE9BQVAsQ0FBZSxtQkFBZixFQUFvQztBQUNsQ2xDO0FBRGtDLGFBQXBDO0FBR0Q7QUFDRixTQXBDRDtBQXFDQWtJLGVBQU9hLE9BQVAsR0FBaUIsWUFBVztBQUMxQnZLLGtCQUFRMEUsR0FBUixDQUFZLCtDQUFaO0FBQ0FrRixxQkFBVyxLQUFYO0FBQ0QsU0FIRDtBQUlBRixlQUFPYyxPQUFQLENBQWVoQixlQUFlaUIsVUFBOUI7QUFDQUMsb0JBQVksWUFBVztBQUNyQixjQUFJLENBQUNoQixPQUFPaUIsU0FBUixJQUFxQixDQUFDakIsT0FBT2tCLFVBQWpDLEVBQTZDO0FBQzNDbEIsbUJBQU9jLE9BQVAsQ0FBZWhCLGVBQWVpQixVQUE5QjtBQUNEO0FBQ0YsU0FKRCxFQUlHLElBSkg7QUFLRDs7Ozs7O0FBOUVrQmpCLGdCLENBRVppQixVLEdBQWEsa0I7b0JBRkRqQixjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCLE1BQU1xQixnQ0FDRiwrRUFDQSxlQUZKOztBQUlBLE1BQUlDLGVBQWUsS0FBbkI7QUFDQSxNQUFJQyw0QkFBNEIsSUFBaEM7O0FBRUE7Ozs7TUFHcUJDLFc7Ozs7Ozs7MkNBS1M7QUFDMUIsZUFBTzlDLGFBQWFBLFVBQVUrQyxhQUF2QixJQUF3QyxtQkFBbUIvQyxTQUEzRCxJQUNILGlCQUFpQk8sTUFEckI7QUFFRDs7OzRDQU00QjtBQUMzQixZQUFJLENBQUN1QyxZQUFZRSxrQkFBWixFQUFMLEVBQXVDO0FBQ3JDLGlCQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUJBLG9CQUFRLEtBQVI7QUFDRCxXQUZNLENBQVA7QUFHRDtBQUNELGVBQU9KLFlBQVlLLDRCQUFaLEdBQ0ZDLElBREUsQ0FDRyxVQUFTQyxZQUFULEVBQXVCO0FBQzNCLGlCQUFPLElBQUlKLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUIsZ0JBQUksQ0FBQ0csWUFBTCxFQUFtQjtBQUNqQkgsc0JBQVEsS0FBUjtBQUNELGFBRkQsTUFFTztBQUNMO0FBQ0E7QUFDQUcsMkJBQWFDLFdBQWIsQ0FBeUJDLGVBQXpCLEdBQ0tILElBREwsQ0FDVSxVQUFTSSxZQUFULEVBQXVCO0FBQzNCWiwrQkFBZVksaUJBQWlCLElBQWhDO0FBQ0Esb0JBQUlaLFlBQUosRUFBa0I7QUFDaEJFLDhCQUFZVyw2QkFBWixDQUEwQ0QsWUFBMUM7QUFDRDtBQUNETix3QkFBUU4sWUFBUjtBQUNELGVBUEw7QUFRRDtBQUNGLFdBZk0sQ0FBUDtBQWdCRCxTQWxCRSxDQUFQO0FBbUJEOzs7K0JBU2VjLGdCLEVBQWtCQyxRLEVBQVU7QUFDMUMsWUFBSSxDQUFDYixZQUFZRSxrQkFBWixFQUFMLEVBQXVDO0FBQ3JDbEwsa0JBQVEwRSxHQUFSLENBQVksNENBQVo7QUFDQSxpQkFBT21ILFNBQVMsS0FBVCxDQUFQO0FBQ0Q7QUFDRDNELGtCQUFVK0MsYUFBVixDQUF3QmEsUUFBeEIsQ0FDSUYsbUJBQW1CQSxnQkFBbkIsR0FBc0MsWUFEMUMsRUFDd0QsSUFEeEQsRUFFS04sSUFGTCxDQUVVLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0JSLHNDQUE0QlEsWUFBNUI7O0FBRUE7QUFDQVIsb0NBQTBCUyxXQUExQixDQUFzQ0MsZUFBdEMsR0FDS0gsSUFETCxDQUNVLFVBQVNJLFlBQVQsRUFBdUI7QUFDM0JaLDJCQUFlLEVBQUVZLGlCQUFpQixJQUFuQixDQUFmO0FBQ0EsZ0JBQUlaLFlBQUosRUFBa0I7QUFDaEJFLDBCQUFZVyw2QkFBWixDQUEwQ0QsWUFBMUM7QUFDRDtBQUNELGdCQUFJRyxRQUFKLEVBQWM7QUFDWixxQkFBT0EsU0FBU2YsWUFBVCxDQUFQO0FBQ0Q7QUFDRixXQVRMO0FBVUQsU0FoQkwsRUFpQktpQixLQWpCTCxDQWlCVyxVQUFTak0sS0FBVCxFQUFnQjtBQUNyQkUsa0JBQVEwRSxHQUFSLENBQVksa0NBQVosRUFBZ0Q1RSxLQUFoRDtBQUNELFNBbkJMO0FBb0JEOzs7c0NBTXNCO0FBQ3JCLFlBQU1rTSx1QkFBdUJoQixZQUFZaUIsa0JBQVosQ0FBK0JwQiw2QkFBL0IsQ0FBN0I7QUFDQSxlQUFPLElBQUlNLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCYyxNQUFsQixFQUEwQjtBQUMzQztBQUNBLGlCQUFPbkIsMEJBQTBCUyxXQUExQixDQUFzQ3BJLFNBQXRDLENBQWdEO0FBQ3JEK0ksNkJBQWlCLElBRG9DO0FBRXJESDtBQUZxRCxXQUFoRCxFQUlGVixJQUpFLENBSUcsVUFBU0ksWUFBVCxFQUF1QjtBQUMzQixnQkFBSUEsWUFBSixFQUFrQjtBQUNoQlYsMEJBQVlXLDZCQUFaLENBQTBDRCxZQUExQztBQUNBWiw2QkFBZSxJQUFmO0FBQ0EscUJBQU9NLFFBQVFOLFlBQVIsQ0FBUDtBQUNEO0FBQ0RBLDJCQUFlLEtBQWY7QUFDQSxtQkFBT29CLFFBQVA7QUFDRCxXQVpFLEVBYUZILEtBYkUsQ0FhSSxVQUFTaE0sR0FBVCxFQUFjO0FBQ25CLG1CQUFPbU0sb0RBQWtEbk0sR0FBbEQsQ0FBUDtBQUNELFdBZkUsQ0FBUDtBQWdCRCxTQWxCTSxDQUFQO0FBbUJEOzs7d0NBTXdCO0FBQ3ZCLGVBQU8sSUFBSW9MLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVjLE1BQVYsRUFBcUI7QUFDdENsQixzQkFBWW9CLG1CQUFaLEdBQWtDZCxJQUFsQyxDQUF1QyxVQUFDZSxVQUFELEVBQWdCO0FBQ3JELGdCQUFJLENBQUNBLFVBQUwsRUFBaUI7QUFDZixxQkFBT2pCLFNBQVA7QUFDRDs7QUFFREwsc0NBQTBCUyxXQUExQixDQUFzQ0MsZUFBdEMsR0FDS0gsSUFETCxDQUNVLFVBQVNJLFlBQVQsRUFBdUI7QUFDM0Isa0JBQUlBLFlBQUosRUFBa0I7QUFDaEI7O0FBRUEsdUJBQU9BLGFBQWFZLFdBQWIsRUFBUDtBQUNEO0FBQ0QscUJBQU9KLFFBQVA7QUFDRCxhQVJMLEVBU0tILEtBVEwsQ0FTVyxVQUFTak0sS0FBVCxFQUFnQjtBQUNyQm9NLHlEQUF5Q3BNLEtBQXpDO0FBQ0QsYUFYTCxFQVlLd0wsSUFaTCxDQVlVLFVBQVMxTCxPQUFULEVBQWtCO0FBQ3RCLGtCQUFJQSxPQUFKLEVBQWE7QUFDWGtMLCtCQUFlLEtBQWY7QUFDQSx1QkFBT00sU0FBUDtBQUNEO0FBQ0QscUJBQU9jLFFBQVA7QUFDRCxhQWxCTDtBQW1CRCxXQXhCRCxFQXdCRyxVQUFDcE0sS0FBRCxFQUFXO0FBQ1osbUJBQU9vTSxRQUFQO0FBQ0QsV0ExQkQ7QUEyQkQsU0E1Qk0sQ0FBUDtBQTZCRDs7O3FEQU1xQztBQUNwQyxlQUFPLElBQUlmLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUIsY0FBSUwseUJBQUosRUFBK0I7QUFDN0JLLG9CQUFRTCx5QkFBUjtBQUNELFdBRkQsTUFFTztBQUNMOztBQUVBN0Msc0JBQVUrQyxhQUFWLENBQXdCc0IsZUFBeEIsR0FBMENqQixJQUExQyxDQUErQyxVQUFDQyxZQUFELEVBQWtCO0FBQy9EUiwwQ0FBNEJRLFlBQTVCO0FBQ0FILHNCQUFRRyxZQUFSO0FBQ0QsYUFIRDtBQUlEO0FBQ0YsU0FYTSxDQUFQO0FBWUQ7Ozt5Q0FPeUJpQixZLEVBQWM7QUFDdEMsWUFBTUMsVUFBVSxJQUFJQyxNQUFKLENBQVcsQ0FBQyxJQUFJRixhQUFhdk4sTUFBYixHQUFzQixDQUEzQixJQUFnQyxDQUEzQyxDQUFoQjtBQUNBLFlBQU0wTixTQUFTLENBQUNILGVBQWVDLE9BQWhCLEVBQ1ZHLE9BRFUsQ0FDRixJQURFLEVBQ0ksR0FESixFQUVWQSxPQUZVLENBRUYsSUFGRSxFQUVJLEdBRkosQ0FBZjs7QUFJQSxZQUFNQyxVQUFVcEUsT0FBT3FFLElBQVAsQ0FBWUgsTUFBWixDQUFoQjtBQUNBLFlBQU1JLGNBQWMsSUFBSUMsVUFBSixDQUFlSCxRQUFRNU4sTUFBdkIsQ0FBcEI7O0FBRUEsYUFBSyxJQUFJTCxJQUFJLENBQWIsRUFBZ0JBLElBQUlpTyxRQUFRNU4sTUFBNUIsRUFBb0MsRUFBRUwsQ0FBdEMsRUFBeUM7QUFDdkNtTyxzQkFBWW5PLENBQVosSUFBaUJpTyxRQUFRSSxVQUFSLENBQW1Cck8sQ0FBbkIsQ0FBakI7QUFDRDtBQUNELGVBQU9tTyxXQUFQO0FBQ0Q7OzswQ0FTMEJyQixZLEVBQWM7QUFDdkMsWUFBSXBPLE1BQU1vTyxhQUFhd0IsTUFBYixHQUFzQnhCLGFBQWF3QixNQUFiLENBQW9CLFFBQXBCLENBQXRCLEdBQXNELEVBQWhFO0FBQ0EsWUFBSUMsT0FBT3pCLGFBQWF3QixNQUFiLEdBQXNCeEIsYUFBYXdCLE1BQWIsQ0FBb0IsTUFBcEIsQ0FBdEIsR0FBb0QsRUFBL0Q7QUFDQTtBQUNBLFlBQUlFLFdBQVdDLEtBQUs3RyxRQUFRQyxLQUFSLENBQWM2RyxPQUFPQyxZQUFyQixFQUFtQyxJQUFuQyxFQUF5QyxJQUFJUCxVQUFKLENBQWUxUCxHQUFmLENBQXpDLENBQUwsQ0FBZjtBQUNBO0FBQ0EsWUFBSWtRLFlBQVlILEtBQUs3RyxRQUFRQyxLQUFSLENBQWM2RyxPQUFPQyxZQUFyQixFQUFtQyxJQUFuQyxFQUF5QyxJQUFJUCxVQUFKLENBQWVHLElBQWYsQ0FBekMsQ0FBTCxDQUFoQjtBQUNBLGVBQU87QUFDTE0sb0JBQVUvQixhQUFhK0IsUUFEbEI7QUFFTG5RLGVBQUs4UCxRQUZBO0FBR0xELGdCQUFNSztBQUhELFNBQVA7QUFLRDs7O29EQU1vQzlCLFksRUFBYztBQUNqRCxZQUFJQSxZQUFKLEVBQWtCO0FBQ2hCLGNBQUlnQyx1QkFBdUIxQyxZQUFZMkMsbUJBQVosQ0FBZ0NqQyxZQUFoQyxDQUEzQjtBQUNBLGNBQUlrQyw2QkFBNkJoTixLQUFLQyxTQUFMLENBQWU2TSxvQkFBZixDQUFqQztBQUNBLGNBQUlHLDZCQUE2QnJQLDhCQUFvQkMsbUJBQXBCLENBQzdCVixvQkFBVWxCLFlBQVYsQ0FBdUJHLGlCQURNLENBQWpDO0FBRUEsY0FBSSxDQUFDLHVCQUFRNlEsMEJBQVIsRUFBb0NELDBCQUFwQyxDQUFMLEVBQXNFO0FBQ3BFcFAsMENBQW9CVSxrQkFBcEIsQ0FBdUNuQixvQkFBVWxCLFlBQVYsQ0FBdUJHLGlCQUE5RCxFQUNJNFEsMEJBREo7QUFFQTVDLHdCQUFZOEMsZUFBWixDQUE0QkYsMEJBQTVCO0FBQ0Q7QUFDRjtBQUNGOzs7c0NBTXNCbEMsWSxFQUFjO0FBQ25DLFlBQUksQ0FBQ0EsWUFBTCxFQUFtQjtBQUNqQjtBQUNEO0FBQ0R2TixrQ0FBZ0J3RyxPQUFoQixDQUF3QjVHLG9CQUFVcEYsT0FBVixDQUFrQmMscUJBQTFDLEVBQ0ksSUFBSTBELHFCQUFKLEdBQWtCVyxHQUFsQixDQUFzQkMsb0JBQVVqRSxNQUFWLENBQWlCcUMscUJBQXZDLEVBQ0l1UCxZQURKLENBREosRUFFdUI7QUFDakJyTCxrQkFBUSxLQURTO0FBRWpCQyxtQkFBUztBQUZRLFNBRnZCO0FBT0Q7Ozs7OztvQkF2T2tCMEssVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckIsTUFBSStDLG1CQUFtQixJQUFJbEYseUJBQUosRUFBdkI7O0FBRUE7Ozs7Ozs7O01BT3FCbUYsUTs7Ozs7OztpQ0FFRDdOLE8sRUFBUztBQUN6QixZQUFJLENBQUNoQywwQkFBZ0JnQyxPQUFyQixFQUE4QjtBQUM1QjtBQUNEO0FBQ0RoQyxrQ0FBZ0JnQyxPQUFoQixHQUEwQkEsT0FBMUI7QUFDRDs7OytCQUVla0ssSyxFQUFPO0FBQ3JCMkQsaUJBQVNDLE1BQVQsR0FBa0I1RCxLQUFsQjtBQUNEOzs7d0NBTXdCL0ksTyxFQUFTO0FBQ2hDbkQsa0NBQWdCb0QsaUJBQWhCLENBQWtDRCxPQUFsQztBQUNEOzs7aURBRWlDNEIsdUIsRUFBeUI7QUFDekQzRCxnQ0FBYzJPLDBCQUFkLENBQXlDaEwsdUJBQXpDO0FBQ0Q7Ozs0Q0FFNEI7QUFDM0IsZUFBT1ksbUJBQVNxSyxtQkFBVCxFQUFQO0FBQ0Q7OztpREFFaUN2USxLLEVBQU93USxTLEVBQVc7QUFDbERqUSxrQ0FBZ0JQLEtBQWhCLEdBQXdCQSxLQUF4QjtBQUNBTyxrQ0FBZ0JOLFNBQWhCLEdBQTRCdVEsU0FBNUI7QUFDQTdPLGdDQUFjQyxPQUFkLEdBQXdCLElBQXhCO0FBQ0Q7OztnREFFZ0M1QixLLEVBQU93USxTLEVBQVc7QUFDakRqUSxrQ0FBZ0JQLEtBQWhCLEdBQXdCQSxLQUF4QjtBQUNBTyxrQ0FBZ0JOLFNBQWhCLEdBQTRCdVEsU0FBNUI7QUFDQTdPLGdDQUFjQyxPQUFkLEdBQXdCLEtBQXhCO0FBQ0Q7OztvQ0FFb0I2TyxJLEVBQU07QUFDekI3RSxpQ0FBZWlCLFVBQWYsR0FBNEI0RCxJQUE1QjtBQUNEOzs7a0NBRWtCOVAsUSxFQUFVO0FBQzNCSixrQ0FBZ0JJLFFBQWhCLEdBQTJCQSxRQUEzQjtBQUNEOzs7b0NBRW9CZSxXLEVBQWE7QUFDaENuQixrQ0FBZ0JtQixXQUFoQixHQUE4QkEsV0FBOUI7QUFDRDs7O29DQUVvQmdQLFUsRUFBWTtBQUMvQk4saUJBQVNPLFdBQVQsR0FBdUJELFVBQXZCO0FBQ0Q7OztxQ0FFcUJFLFcsRUFBYTtBQUNqQ1IsaUJBQVNTLFlBQVQsR0FBd0JELFdBQXhCO0FBQ0Q7OztvQ0FFb0JFLFUsRUFBWTtBQUMvQlYsaUJBQVNXLFdBQVQsR0FBdUJELFVBQXZCO0FBQ0Q7Ozt1Q0FFdUJFLGEsRUFBZTtBQUNyQ1osaUJBQVNhLGNBQVQsR0FBMEJELGFBQTFCO0FBQ0Q7OzttQ0FFbUJ4SyxTLEVBQVc7QUFDN0JOLDJCQUFTZ0wsWUFBVCxDQUFzQjFLLFNBQXRCO0FBQ0Q7Ozt5Q0FFeUI3RCxZLEVBQWN3TyxlLEVBQWlCO0FBQ3ZENVEsa0NBQWdCb0MsWUFBaEIsR0FBK0JBLFlBQS9CO0FBQ0FwQyxrQ0FBZ0I0QyxhQUFoQixHQUFnQ2dPLGVBQWhDO0FBQ0Q7OztxQ0FFcUI7QUFDcEIsZUFBT2pMLG1CQUFTa0wsWUFBVCxFQUFQO0FBQ0Q7OztvQ0FFMkI7QUFDMUIsWUFBSUMsVUFBVWpCLFNBQVNnQixZQUFULEVBQWQ7O0FBRDBCLDBDQUFOeE4sSUFBTTtBQUFOQSxjQUFNO0FBQUE7O0FBRTFCLGFBQUssSUFBSTVDLElBQUksQ0FBYixFQUFnQkEsSUFBSTRDLEtBQUt2QyxNQUF6QixFQUFpQ0wsR0FBakMsRUFBc0M7QUFDcENxUSxvQkFBVUEsUUFBUXpOLEtBQUs1QyxDQUFMLENBQVIsQ0FBVjtBQUNEO0FBQ0QsZUFBT3FRLE9BQVA7QUFDRDs7O29DQUVvQjtBQUNuQixlQUFPbkwsbUJBQVNFLFFBQVQsSUFBcUIsRUFBNUI7QUFDRDs7OzhDQUU4QnZCLE8sRUFBUztBQUN0Q2xELGdDQUFjMlAsdUJBQWQsQ0FBc0N6TSxPQUF0QztBQUNEOzs7aURBRWlDQSxPLEVBQVM7QUFDekNsRCxnQ0FBYzRQLDBCQUFkLENBQXlDMU0sT0FBekM7QUFDRDs7O2lEQUVpQ0EsTyxFQUFTO0FBQ3pDbEQsZ0NBQWM2UCwwQkFBZCxDQUF5QzNNLE9BQXpDO0FBQ0Q7OztvREFFb0NBLE8sRUFBUztBQUM1Q2xELGdDQUFjOFAsNkJBQWQsQ0FBNEM1TSxPQUE1QztBQUNEOzs7eUNBRXlCb0osUSxFQUFVO0FBQ2xDMU4sa0NBQWdCd0csT0FBaEIsQ0FBd0I1RyxvQkFBVXBGLE9BQVYsQ0FBa0JZLFFBQTFDLEVBQ0UsSUFBSTRELHFCQUFKLEdBQ0NXLEdBREQsQ0FDS0Msb0JBQVVqRSxNQUFWLENBQWlCbUMsZ0JBRHRCLEVBQ3dDLEtBRHhDLEVBRUM2QixHQUZELENBRUtDLG9CQUFVakUsTUFBVixDQUFpQm9DLDBCQUZ0QixFQUVrRHFELHdCQUFjMkQsdUJBRmhFLENBREYsRUFHNEY7QUFDeEY3QyxrQkFBUSxLQURnRjtBQUV4RkMsbUJBQVMsSUFGK0U7QUFHeEZULG9CQUFVLGtCQUFVQSxTQUFWLEVBQW9CO0FBQzVCLGdCQUFJbUssa0JBQWtCN0wsMEJBQWdCOEwsZUFBaEIsQ0FBZ0NwSyxTQUFoQyxDQUF0QjtBQUNBLGdCQUFJeVAsWUFBWW5SLDBCQUFnQm9SLGlCQUFoQixDQUFrQ3ZGLGVBQWxDLENBQWhCO0FBQ0EsZ0JBQUlzRixTQUFKLEVBQWU7QUFDYnhMLGlDQUFTUyxVQUFULENBQ0V5RixnQkFBZ0JqTSxvQkFBVTFCLElBQVYsQ0FBZVgsSUFBL0IsQ0FERixFQUVFc08sZ0JBQWdCak0sb0JBQVUxQixJQUFWLENBQWVHLFFBQS9CLENBRkYsRUFHRXdOLGdCQUFnQmpNLG9CQUFVMUIsSUFBVixDQUFlSyxlQUEvQixDQUhGO0FBSUFvSCxpQ0FBU1csZ0JBQVQsR0FBNEJ1RixnQkFBZ0JqTSxvQkFBVTFCLElBQVYsQ0FBZUksa0JBQS9CLENBQTVCO0FBQ0Q7QUFDRCxnQkFBSW9QLFFBQUosRUFBYztBQUNaQSx1QkFBU3lELFNBQVQ7QUFDRDtBQUNGO0FBaEJ1RixTQUg1RjtBQXNCRDs7OzRCQUVZblEsTSxFQUFRcVEsYyxFQUFnQjNELFEsRUFBVTtBQUM3QztBQUNBLFlBQUksT0FBTzFNLE1BQVAsS0FBa0IsVUFBdEIsRUFBa0M7QUFDaEMwTSxxQkFBVzFNLE1BQVg7QUFDQXFRLDJCQUFpQixFQUFqQjtBQUNBclEsbUJBQVMsSUFBVDtBQUNELFNBSkQsTUFJTyxJQUFJLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBbEIsSUFBOEJBLFdBQVcsSUFBekMsSUFDUEEsV0FBV2xCLFNBRFIsRUFDbUI7QUFDeEI0TixxQkFBVzJELGNBQVg7QUFDQUEsMkJBQWlCclEsTUFBakI7QUFDQUEsbUJBQVMsSUFBVDtBQUNELFNBTE0sTUFLQSxJQUFJLE9BQU9xUSxjQUFQLEtBQTBCLFVBQTlCLEVBQTBDO0FBQy9DM0QscUJBQVcyRCxjQUFYO0FBQ0FBLDJCQUFpQixFQUFqQjtBQUNEO0FBQ0RyUixrQ0FBZ0JnQixNQUFoQixHQUF5QkEsTUFBekI7QUFDQSxZQUFJME0sUUFBSixFQUFjO0FBQ1ptQyxtQkFBU2tCLHVCQUFULENBQWlDckQsUUFBakM7QUFDRDs7QUFFRC9ILDJCQUFTUSxRQUFULEdBQW9CLFlBQVU7QUFDNUIvRSxrQ0FBY2tRLCtCQUFkO0FBQ0QsU0FGRDs7QUFJQSxZQUFJak8sT0FBTyxJQUFJckUscUJBQUosR0FDTlcsR0FETSxDQUNGQyxvQkFBVWpFLE1BQVYsQ0FBaUJlLGVBRGYsRUFDZ0MrRixLQUFLQyxTQUFMLENBQWUyTyxjQUFmLENBRGhDLEVBRU4xUixHQUZNLENBRUZDLG9CQUFVakUsTUFBVixDQUFpQmlCLE9BRmYsRUFFd0JnRCxvQkFBVWQsTUFBVixDQUFpQkMsTUFGekMsRUFHTlksR0FITSxDQUdGQyxvQkFBVWpFLE1BQVYsQ0FBaUJrQixNQUhmLEVBR3VCK0Msb0JBQVVkLE1BQVYsQ0FBaUJDLE1BSHhDLEVBSU5ZLEdBSk0sQ0FJRkMsb0JBQVVqRSxNQUFWLENBQWlCbUIsSUFKZixFQUlxQjhDLG9CQUFVZCxNQUFWLENBQWlCQyxNQUp0QyxFQUtOWSxHQUxNLENBS0ZDLG9CQUFVakUsTUFBVixDQUFpQm9CLFFBTGYsRUFLeUI2QyxvQkFBVWQsTUFBVixDQUFpQkMsTUFMMUMsRUFNTlksR0FOTSxDQU1GQyxvQkFBVWpFLE1BQVYsQ0FBaUJTLFdBTmYsRUFNNEJ5VCxTQUFTVyxXQUFULElBQXdCWixpQkFBaUI1RSxFQU5yRSxFQU9OckwsR0FQTSxDQU9GQyxvQkFBVWpFLE1BQVYsQ0FBaUJVLGNBUGYsRUFPK0IsQ0FBQ3dULFNBQVNhLGNBQVQsSUFBMkIsRUFBNUIsRUFBZ0NsUCxRQUFoQyxFQVAvQixFQVFON0IsR0FSTSxDQVFGQyxvQkFBVWpFLE1BQVYsQ0FBaUJXLFlBUmYsRUFRNkJzVCxpQkFBaUJqRixPQVI5QyxFQVNOaEwsR0FUTSxDQVNGQyxvQkFBVWpFLE1BQVYsQ0FBaUJZLGVBVGYsRUFTZ0NxVCxpQkFBaUIvRSxPQUFqQixDQUF5QnJKLFFBQXpCLEVBVGhDLEVBVU43QixHQVZNLENBVUZDLG9CQUFVakUsTUFBVixDQUFpQmdCLE1BVmYsRUFVdUJpRCxvQkFBVWQsTUFBVixDQUFpQkMsTUFWeEMsRUFXTlksR0FYTSxDQVdGQyxvQkFBVWpFLE1BQVYsQ0FBaUJhLFdBWGYsRUFXNEJxVCxTQUFTTyxXQUFULElBQzVCUixpQkFBaUJqRixPQURXLFNBQ0FpRixpQkFBaUIvRSxPQVo3QyxFQWFObEwsR0FiTSxDQWFGQyxvQkFBVWpFLE1BQVYsQ0FBaUJjLFlBYmYsRUFhNkJvVCxTQUFTUyxZQUFULElBQXlCLGFBYnRELEVBY04zUSxHQWRNLENBY0ZDLG9CQUFVakUsTUFBVixDQUFpQm1DLGdCQWRmLEVBY2lDLEtBZGpDLEVBZU42QixHQWZNLENBZUZDLG9CQUFVakUsTUFBVixDQUFpQm9DLDBCQWZmLEVBZTJDcUQsd0JBQWMyRCx1QkFmekQsQ0FBWDs7QUFpQkE7QUFDQTtBQUNFL0Usa0NBQWdCd0csT0FBaEIsQ0FBd0I1RyxvQkFBVXBGLE9BQVYsQ0FBa0JDLEtBQTFDLEVBQWlENEksSUFBakQsRUFBdUQ7QUFDdkRuQixrQkFBUSxJQUQrQztBQUV2REMsbUJBQVMsSUFGOEM7QUFHdkRULG9CQUFVLGtCQUFTQSxVQUFULEVBQW1CO0FBQzNCTixvQ0FBY29ELFVBQWQsR0FBMkIsSUFBM0I7QUFDQSxnQkFBSStNLGdCQUFnQnZSLDBCQUFnQjhMLGVBQWhCLENBQWdDcEssVUFBaEMsQ0FBcEI7QUFDQSxnQkFBSTFCLDBCQUFnQm9SLGlCQUFoQixDQUFrQ0csYUFBbEMsQ0FBSixFQUFzRDtBQUNwRG5RLHNDQUFjcUQsZUFBZCxHQUFnQyxJQUFoQztBQUNBLGtCQUFJckQsd0JBQWNDLE9BQWxCLEVBQTJCO0FBQ3pCLG9CQUFJbVEsZ0JBQWdCRCxjQUFjM1Isb0JBQVUxQixJQUFWLENBQWVFLGNBQTdCLENBQXBCO0FBQ0Esb0JBQUlvVCxhQUFKLEVBQW1CO0FBQ2pCM1AsMEJBQVEwRSxHQUFSLENBQVksa0NBQWdDaUwsYUFBaEMsNkJBQ1IsOEJBREo7QUFFRDtBQUNEbkcseUNBQWVnQixPQUFmO0FBQ0Q7O0FBRUQxRyxpQ0FBU1MsVUFBVCxDQUNJbUwsY0FBYzNSLG9CQUFVMUIsSUFBVixDQUFlWCxJQUE3QixDQURKLEVBRUlnVSxjQUFjM1Isb0JBQVUxQixJQUFWLENBQWVHLFFBQTdCLENBRkosRUFHSWtULGNBQWMzUixvQkFBVTFCLElBQVYsQ0FBZUssZUFBN0IsQ0FISjtBQUlBb0gsaUNBQVNXLGdCQUFULEdBQTRCaUwsY0FBYzNSLG9CQUFVMUIsSUFBVixDQUFlSSxrQkFBN0IsQ0FBNUI7QUFDQXFILGlDQUFTVSxLQUFULEdBQWlCa0wsY0FBYzNSLG9CQUFVMUIsSUFBVixDQUFlTSxLQUE3QixDQUFqQjs7QUFFQTJOLCtCQUFPNUcsT0FBUCxDQUFlLGdCQUFmLEVBQWlDO0FBQy9Ca00sMEJBQVVGLGNBQWMzUixvQkFBVTFCLElBQVYsQ0FBZU8sUUFBN0I7QUFEcUIsZUFBakM7QUFHRCxhQXJCRCxNQXFCTztBQUNMMkMsc0NBQWNxRCxlQUFkLEdBQWdDLEtBQWhDO0FBQ0FrQixpQ0FBUytMLFNBQVQ7QUFDRDtBQUNEdFEsb0NBQWN1USxvQkFBZDtBQUNEO0FBaENzRCxTQUF2RDtBQWtDSDs7O3FDQUVxQjNRLE0sRUFBUXFRLGMsRUFBZ0IzRCxRLEVBQVU7QUFDdEQ7QUFDQSxZQUFJLE9BQU8xTSxNQUFQLEtBQWtCLFVBQXRCLEVBQWtDO0FBQ2hDME0scUJBQVcxTSxNQUFYO0FBQ0E7QUFDQXFRLDJCQUFpQixFQUFqQjtBQUNBclEsbUJBQVMsSUFBVDtBQUNELFNBTEQsTUFLTyxJQUFJLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBbEIsSUFBOEJBLFdBQVcsSUFBekMsSUFDUEEsV0FBV2xCLFNBRFIsRUFDbUI7QUFDeEI0TixxQkFBVzJELGNBQVg7QUFDQTtBQUNBQSwyQkFBaUJyUSxNQUFqQjtBQUNBQSxtQkFBUyxJQUFUO0FBQ0QsU0FOTSxNQU1BLElBQUksT0FBT3FRLGNBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDL0MzRCxxQkFBVzJELGNBQVg7QUFDQTtBQUNBQSwyQkFBaUIsRUFBakI7QUFDRDtBQUNEclIsa0NBQWdCZ0IsTUFBaEIsR0FBeUJBLE1BQXpCO0FBQ0EsWUFBSTBNLFFBQUosRUFBYztBQUNabUMsbUJBQVNrQix1QkFBVCxDQUFpQ3JELFFBQWpDO0FBQ0Q7O0FBRUR0TSxnQ0FBY29ELFVBQWQsR0FBMkIsSUFBM0I7QUFDQXBELGdDQUFjcUQsZUFBZCxHQUFnQyxJQUFoQztBQUNBLFlBQUlyRCx3QkFBY0MsT0FBbEIsRUFBMkI7QUFDekJnSyxtQ0FBZWdCLE9BQWY7QUFDRDtBQUNEMUcsMkJBQVMrTCxTQUFUO0FBQ0F0USxnQ0FBY3VRLG9CQUFkO0FBQ0Q7Ozs2QkFFYTtBQUNaO0FBQ0UzUixrQ0FBZ0J3RyxPQUFoQixDQUF3QjVHLG9CQUFVcEYsT0FBVixDQUFrQkUsSUFBMUMsRUFBZ0RvRixTQUFoRCxFQUEyRDtBQUMzRHFDLG1CQUFTLElBRGtEO0FBRTNERCxrQkFBUTtBQUZtRCxTQUEzRDtBQUlIOzs7cUNBRXFCO0FBQ3BCO0FBQ0VsQyxrQ0FBZ0J3RyxPQUFoQixDQUF3QjVHLG9CQUFVcEYsT0FBVixDQUFrQkssYUFBMUMsRUFBeURpRixTQUF6RCxFQUFvRTtBQUNwRXFDLG1CQUFTLElBRDJEO0FBRXBFRCxrQkFBUTtBQUY0RCxTQUFwRTtBQUlIOzs7c0NBRXNCO0FBQ3JCO0FBQ0VsQyxrQ0FBZ0J3RyxPQUFoQixDQUF3QjVHLG9CQUFVcEYsT0FBVixDQUFrQk0sY0FBMUMsRUFBMERnRixTQUExRCxFQUFxRTtBQUNyRXFDLG1CQUFTLElBRDREO0FBRXJFRCxrQkFBUTtBQUY2RCxTQUFyRTtBQUlIOzs7bUNBRW1CO0FBQ2xCO0FBQ0VsQyxrQ0FBZ0J3RyxPQUFoQixDQUF3QjVHLG9CQUFVcEYsT0FBVixDQUFrQk8sV0FBMUMsRUFBdUQrRSxTQUF2RCxFQUFrRTtBQUNsRW9DLGtCQUFRO0FBRDBELFNBQWxFO0FBR0g7OztvQ0FFb0I7QUFDbkI7QUFDRWxDLGtDQUFnQndHLE9BQWhCLENBQXdCNUcsb0JBQVVwRixPQUFWLENBQWtCUSxZQUExQyxFQUF3RDhFLFNBQXhELEVBQW1FO0FBQ25Fb0Msa0JBQVE7QUFEMkQsU0FBbkU7QUFHSDs7O2dDQUVnQmxCLE0sRUFBUTtBQUN2QjZPLGlCQUFTK0IsaUJBQVQsQ0FBMkI1USxNQUEzQjtBQUNEOzs7d0NBRXdCQSxNLEVBQVFxUSxjLEVBQWdCO0FBQy9DLFlBQUlBLG1CQUFtQnZSLFNBQXZCLEVBQWtDO0FBQ2hDLGNBQUksUUFBT2tCLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBdEIsRUFBZ0M7QUFDOUJxUSw2QkFBaUJyUSxNQUFqQjtBQUNBQSxxQkFBU2xCLFNBQVQ7QUFDRCxXQUhELE1BR08sSUFBSSxPQUFPa0IsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUNyQ2Esb0JBQVEwRSxHQUFSLENBQVksd0RBQ1IsUUFESjtBQUVBO0FBQ0Q7QUFDRjtBQUNEO0FBQ0V2RyxrQ0FBZ0J3RyxPQUFoQixDQUF3QjVHLG9CQUFVcEYsT0FBVixDQUFrQmEsbUJBQTFDLEVBQ0UsSUFBSTJELHFCQUFKLEdBQ0tXLEdBREwsQ0FDU0Msb0JBQVVqRSxNQUFWLENBQWlCZSxlQUQxQixFQUVRMlUsaUJBQWlCNU8sS0FBS0MsU0FBTCxDQUFlMk8sY0FBZixDQUFqQixHQUFrRHZSLFNBRjFELEVBR0tILEdBSEwsQ0FHU0Msb0JBQVVqRSxNQUFWLENBQWlCTSxXQUgxQixFQUd1QytFLE1BSHZDLENBREYsRUFJa0Q7QUFDOUNrQixrQkFBUTtBQURzQyxTQUpsRDtBQU9GLFlBQUlsQixNQUFKLEVBQVk7QUFDVmhCLG9DQUFnQmdCLE1BQWhCLEdBQXlCQSxNQUF6QjtBQUNBWCx3Q0FBb0JVLGtCQUFwQixDQUF1Q25CLG9CQUFVbEIsWUFBVixDQUF1QjFDLE9BQTlELEVBQXVFZ0UsMEJBQWdCZ0IsTUFBdkY7QUFDRDtBQUNGOzs7aUNBRWlCNlEsUSxFQUFVO0FBQzFCO0FBQ0EsZUFBTzdSLDBCQUNGOFIsa0JBREUsQ0FFRGxTLG9CQUFVcEYsT0FBVixDQUFrQlMsYUFGakIsRUFHRCxJQUFJK0QscUJBQUosR0FBa0JXLEdBQWxCLENBQXNCQyxvQkFBVWpFLE1BQVYsQ0FBaUJ5QixRQUF2QyxFQUFpRHlVLFFBQWpELENBSEMsQ0FBUDtBQUtEOzs7bUNBRW1CbEcsSyxFQUFPb0csUyxFQUFXO0FBQ2xDO0FBQ0EvUixrQ0FBZ0J3RyxPQUFoQixDQUF3QjVHLG9CQUFVcEYsT0FBVixDQUFrQkksS0FBMUMsRUFDSSxJQUFJb0UscUJBQUosR0FDS1csR0FETCxDQUNTQyxvQkFBVWpFLE1BQVYsQ0FBaUJ1QixLQUQxQixFQUNpQ3lPLEtBRGpDLEVBRUtoTSxHQUZMLENBRVNDLG9CQUFVakUsTUFBVixDQUFpQnNDLFVBRjFCLEVBRXNDOFQsU0FGdEMsQ0FESixFQUdzRDtBQUM5QzdQLGtCQUFRO0FBRHNDLFNBSHREO0FBTUg7Ozs0QkFFWXlKLEssRUFBT3ZNLEssRUFBT29HLEksRUFBTXRGLE0sRUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUksUUFBT2QsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFqQixJQUE2QkEsVUFBVSxJQUF2QyxJQUErQ0EsVUFBVVUsU0FBN0QsRUFBd0U7QUFDdEVJLG1CQUFTZCxLQUFUO0FBQ0FvRyxpQkFBTzFGLFNBQVA7QUFDQVYsa0JBQVFVLFNBQVI7QUFDRCxTQUpELE1BSU8sSUFBSSxPQUFPVixLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQ3BDYyxtQkFBU3NGLElBQVQ7QUFDQUEsaUJBQU9wRyxLQUFQO0FBQ0FBLGtCQUFRVSxTQUFSO0FBQ0QsU0FKTSxNQUlBLElBQUksUUFBTzBGLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBaEIsSUFBNEJBLFNBQVMsSUFBckMsSUFBNkNBLFNBQVMxRixTQUExRCxFQUFxRTtBQUMxRUksbUJBQVNzRixJQUFUO0FBQ0FBLGlCQUFPMUYsU0FBUDtBQUNEO0FBQ0Q7QUFDRUUsa0NBQWdCd0csT0FBaEIsQ0FBd0I1RyxvQkFBVXBGLE9BQVYsQ0FBa0JJLEtBQTFDLEVBQ0UsSUFBSW9FLHFCQUFKLEdBQ0tXLEdBREwsQ0FDU0Msb0JBQVVqRSxNQUFWLENBQWlCdUIsS0FEMUIsRUFDaUN5TyxLQURqQyxFQUVLaE0sR0FGTCxDQUVTQyxvQkFBVWpFLE1BQVYsQ0FBaUJ3QixLQUYxQixFQUVpQ2lDLFNBQVMsR0FGMUMsRUFHS08sR0FITCxDQUdTQyxvQkFBVWpFLE1BQVYsQ0FBaUJzQixJQUgxQixFQUdnQ3VJLElBSGhDLEVBSUs3RixHQUpMLENBSVNDLG9CQUFVakUsTUFBVixDQUFpQkEsTUFKMUIsRUFJa0M4RyxLQUFLQyxTQUFMLENBQWV4QyxNQUFmLENBSmxDLENBREYsRUFLNkQ7QUFDekRnQyxrQkFBUTtBQURpRCxTQUw3RDtBQVFIOzs7Z0NBRWdCOFAsSyxFQUFPeE0sSSxFQUFNdEYsTSxFQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFlBQUksUUFBT3NGLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBaEIsSUFBNEJBLFNBQVMsSUFBckMsSUFBNkNBLFNBQVMxRixTQUExRCxFQUFxRTtBQUNuRUksbUJBQVNzRixJQUFUO0FBQ0FBLGlCQUFPMUYsU0FBUDtBQUNEOztBQUVERSxrQ0FBZ0J3RyxPQUFoQixDQUF3QjVHLG9CQUFVcEYsT0FBVixDQUFrQkcsT0FBMUMsRUFDSSxJQUFJcUUscUJBQUosR0FDR1csR0FESCxDQUNPQyxvQkFBVWpFLE1BQVYsQ0FBaUJxQixLQUR4QixFQUMrQmdWLEtBRC9CLEVBRUdyUyxHQUZILENBRU9DLG9CQUFVakUsTUFBVixDQUFpQnNCLElBRnhCLEVBRThCdUksSUFGOUIsRUFHRzdGLEdBSEgsQ0FHT0Msb0JBQVVqRSxNQUFWLENBQWlCQSxNQUh4QixFQUdnQzhHLEtBQUtDLFNBQUwsQ0FBZXhDLE1BQWYsQ0FIaEMsQ0FESixFQUk2RDtBQUN6RGdDLGtCQUFRO0FBRGlELFNBSjdEO0FBT0Q7OzsyQ0FNMkI7QUFDMUIsZUFBTzJLLHNCQUFZRSxrQkFBWixFQUFQO0FBQ0Q7Ozs0Q0FNNEI7QUFDM0IsZUFBT0Ysc0JBQVlvQixtQkFBWixFQUFQO0FBQ0Q7Ozt5Q0FTeUJSLGdCLEVBQWtCO0FBQzFDLGVBQU8sSUFBSVQsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVWMsTUFBVixFQUFxQjtBQUN0QyxjQUFJbEIsc0JBQVlFLGtCQUFaLEVBQUosRUFBc0M7QUFDcEMsbUJBQU9GLHNCQUFZYyxRQUFaLENBQXFCRixnQkFBckIsRUFBdUMsVUFBQ2QsWUFBRCxFQUFrQjtBQUM5RCxrQkFBSUEsWUFBSixFQUFrQjtBQUNoQix1QkFBT00sUUFBUSxJQUFSLENBQVA7QUFDRDtBQUNELHFCQUFPSixzQkFBWW9GLGFBQVosRUFBUDtBQUNELGFBTE0sQ0FBUDtBQU1ELFdBUEQsTUFPTztBQUNMLG1CQUFPbEUsT0FBTyxxQ0FBUCxDQUFQO0FBQ0Q7QUFDRixTQVhNLENBQVA7QUFZRDs7OzhDQU04QjtBQUM3QixlQUFPbEIsc0JBQVlxRixlQUFaLEVBQVA7QUFDRDs7O3lDQU95QjtBQUN4QnZNLDJCQUFTd00sZ0JBQVQ7QUFDRDs7O2tDQU9tQjtBQUNsQixlQUFPaEcsZ0JBQVA7QUFDRDs7Ozs7O29CQXhia0IwRCxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ2RBckUsYztBQUNuQjs7O0FBR0EsOEJBQWM7QUFBQTs7QUFDWixXQUFLZ0IsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFdBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDRDs7QUFFRDs7Ozs7Ozs7OEJBSVFILFUsRUFBWTtBQUNsQjtBQUNBLFlBQUk4RixPQUFPLElBQVg7QUFDQUEsYUFBSzNGLFVBQUwsR0FBa0IsSUFBbEI7QUFDQTRGLDBCQUFRdFEsSUFBUixDQUFhLE1BQWIsZUFBZ0N1SyxVQUFoQyxtQkFBMEQsRUFBMUQsRUFDSSxVQUFTZ0csSUFBVCxFQUFlO0FBQ2IsY0FBSUMsUUFBUUQsS0FBS0UsS0FBTCxDQUFXLEdBQVgsQ0FBWjtBQUNBLGNBQUlDLFVBQVVGLE1BQU0sQ0FBTixDQUFkO0FBQ0EsY0FBSUcsWUFBWXBMLFNBQVNpTCxNQUFNLENBQU4sQ0FBVCxJQUFxQixDQUFyQixHQUF5QixJQUF6QztBQUNBSCxlQUFLTyxNQUFMLEdBQWMsSUFBSXJILFNBQUosWUFBdUJnQixVQUF2QiwrQkFBMkRtRyxPQUEzRCxDQUFkO0FBQ0EsY0FBSUcsb0JBQW9CLElBQXhCO0FBQ0FSLGVBQUtPLE1BQUwsQ0FBWWpILE1BQVosR0FBcUIsWUFBVztBQUM5QjBHLGlCQUFLNUYsU0FBTCxHQUFpQixJQUFqQjtBQUNBNEYsaUJBQUszRixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsZ0JBQUkyRixLQUFLMUcsTUFBVCxFQUFpQjtBQUNmMEcsbUJBQUsxRyxNQUFMO0FBQ0Q7QUFDRGtILGdDQUFvQnJHLFlBQVksWUFBVztBQUN6QzZGLG1CQUFLTyxNQUFMLENBQVl4SixJQUFaLENBQWlCLE1BQWpCO0FBQ0QsYUFGbUIsRUFFakJ1SixTQUZpQixDQUFwQjtBQUdELFdBVEQ7QUFVQU4sZUFBS08sTUFBTCxDQUFZdkcsT0FBWixHQUFzQixZQUFXO0FBQy9CZ0csaUJBQUs1RixTQUFMLEdBQWlCLEtBQWpCO0FBQ0FxRywwQkFBY0QsaUJBQWQ7QUFDQSxnQkFBSVIsS0FBS2hHLE9BQVQsRUFBa0I7QUFDaEJnRyxtQkFBS2hHLE9BQUw7QUFDRDtBQUNGLFdBTkQ7QUFPQWdHLGVBQUtPLE1BQUwsQ0FBWS9HLFNBQVosR0FBd0IsVUFBU0QsS0FBVCxFQUFnQjtBQUN0QyxnQkFBSW1ILGVBQWVuSCxNQUFNOUQsSUFBTixDQUFXMkssS0FBWCxDQUFpQixHQUFqQixDQUFuQjtBQUNBLGdCQUFJTyxPQUFPekwsU0FBU3dMLGFBQWEsQ0FBYixDQUFULENBQVg7QUFDQSxnQkFBSUMsU0FBUyxDQUFiLEVBQWdCO0FBQ2RYLG1CQUFLTyxNQUFMLENBQVl4SixJQUFaLENBQWlCLEtBQWpCO0FBQ0QsYUFGRCxNQUVPLElBQUk0SixTQUFTLENBQWIsRUFBZ0I7QUFDckIsa0JBQUloQixZQUFZZSxhQUFhLENBQWIsQ0FBaEI7QUFDQSxrQkFBSWpMLE9BQU9wRixLQUFLaUIsS0FBTCxDQUFXb1AsYUFBYUUsS0FBYixDQUFtQixDQUFuQixFQUFzQkMsSUFBdEIsQ0FBMkIsR0FBM0IsQ0FBWCxDQUFYO0FBQ0Esa0JBQUlDLGVBQWVyTCxLQUFLc0wsSUFBeEI7QUFDQSxrQkFBSTlQLE9BQU93RSxLQUFLeEUsSUFBaEI7QUFDQSxrQkFBSTBPLFNBQUosRUFBZTtBQUNiSyxxQkFBS08sTUFBTCxDQUFZeEosSUFBWixVQUF3QjRJLFNBQXhCO0FBQ0Q7QUFDRCxrQkFBSUssS0FBS3hHLFNBQVQsRUFBb0I7QUFDbEJ3RyxxQkFBS3hHLFNBQUwsQ0FBZXNILFlBQWYsRUFBNkI3UCxJQUE3QjtBQUNEO0FBQ0YsYUFYTSxNQVdBLElBQUkwUCxTQUFTLENBQWIsRUFBZ0I7QUFDckJsUixzQkFBUTBFLEdBQVIsb0JBQTZCb0YsTUFBTTlELElBQW5DO0FBQ0Q7QUFDRixXQW5CRDtBQW9CQXVLLGVBQUtPLE1BQUwsQ0FBWXBKLE9BQVosR0FBc0IsVUFBU29DLEtBQVQsRUFBZ0I7QUFDcEN5RyxpQkFBS08sTUFBTCxDQUFZUyxLQUFaO0FBQ0EsZ0JBQUloQixLQUFLN0ksT0FBVCxFQUFrQjtBQUNoQjZJLG1CQUFLN0ksT0FBTCxDQUFhb0MsS0FBYjtBQUNEO0FBQ0YsV0FMRDtBQU1ELFNBbERMLEVBa0RPLElBbERQLEVBa0RhLEtBbERiLEVBa0RvQixJQWxEcEIsQ0FrRHlCO0FBbER6QjtBQW9ERDs7OzJCQU9Jd0gsSSxFQUFNOVAsSSxFQUFNO0FBQ2YsWUFBSSxDQUFDLEtBQUttSixTQUFWLEVBQXFCO0FBQ25CM0ssa0JBQVEwRSxHQUFSLENBQVksb0NBQVo7QUFDQTtBQUNEO0FBQ0QsWUFBSThNLFdBQVc1USxLQUFLQyxTQUFMLENBQWU7QUFDNUJ5USxvQkFENEI7QUFFNUI5UDtBQUY0QixTQUFmLENBQWY7QUFJQSxhQUFLc1AsTUFBTCxDQUFZeEosSUFBWixVQUF3QmtLLFFBQXhCO0FBQ0Q7Ozs7OztvQkF0RmtCN0gsYzs7Ozs7Ozs7QUN2QnJCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0JBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMxQkE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE1BQU07QUFDakIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJsZWFucGx1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkxlYW5wbHVtXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxlYW5wbHVtXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEyZTBhMTVlOTNjNWJiM2M1MTAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBNRVRIT0RTOiB7XG4gICAgU1RBUlQ6ICdzdGFydCcsXG4gICAgU1RPUDogJ3N0b3AnLFxuICAgIEFEVkFOQ0U6ICdhZHZhbmNlJyxcbiAgICBUUkFDSzogJ3RyYWNrJyxcbiAgICBQQVVTRV9TRVNTSU9OOiAncGF1c2VTZXNzaW9uJyxcbiAgICBSRVNVTUVfU0VTU0lPTjogJ3Jlc3VtZVNlc3Npb24nLFxuICAgIFBBVVNFX1NUQVRFOiAncGF1c2VTdGF0ZScsXG4gICAgUkVTVU1FX1NUQVRFOiAncmVzdW1lU3RhdGUnLFxuICAgIERPV05MT0FEX0ZJTEU6ICdkb3dubG9hZEZpbGUnLFxuICAgIE1VTFRJOiAnbXVsdGknLFxuICAgIFNFVF9WQVJTOiAnc2V0VmFycycsXG4gICAgR0VUX1ZBUlM6ICdnZXRWYXJzJyxcbiAgICBTRVRfVVNFUl9BVFRSSUJVVEVTOiAnc2V0VXNlckF0dHJpYnV0ZXMnLFxuICAgIFNFVF9ERVZJQ0VfQVRUUklCVVRFUzogJ3NldERldmljZUF0dHJpYnV0ZXMnLFxuICAgIFVQTE9BRF9GSUxFOiAndXBsb2FkRmlsZScsXG4gICAgUkVHSVNURVJfREVWSUNFOiAncmVnaXN0ZXJEZXZpY2UnXG4gIH0sXG5cbiAgU0RLX1ZFUlNJT046ICcxLjUuMC1pZmxpeCcsXG5cbiAgQ0xJRU5UOiAnanMnLFxuXG4gIFBBUkFNUzoge1xuICAgIEFDVElPTjogJ2FjdGlvbicsXG4gICAgQVBQX0lEOiAnYXBwSWQnLFxuICAgIENMSUVOVDogJ2NsaWVudCcsXG4gICAgQ0xJRU5UX0tFWTogJ2NsaWVudEtleScsXG4gICAgREVWSUNFX0lEOiAnZGV2aWNlSWQnLFxuICAgIFNES19WRVJTSU9OOiAnc2RrVmVyc2lvbicsXG4gICAgVVNFUl9JRDogJ3VzZXJJZCcsXG4gICAgTkVXX1VTRVJfSUQ6ICduZXdVc2VySWQnLFxuICAgIERFVl9NT0RFOiAnZGV2TW9kZScsXG4gICAgVkVSU0lPTl9OQU1FOiAndmVyc2lvbk5hbWUnLFxuICAgIFNZU1RFTV9OQU1FOiAnc3lzdGVtTmFtZScsXG4gICAgU1lTVEVNX1ZFUlNJT046ICdzeXN0ZW1WZXJzaW9uJyxcbiAgICBCUk9XU0VSX05BTUU6ICdicm93c2VyTmFtZScsXG4gICAgQlJPV1NFUl9WRVJTSU9OOiAnYnJvd3NlclZlcnNpb24nLFxuICAgIERFVklDRV9OQU1FOiAnZGV2aWNlTmFtZScsXG4gICAgREVWSUNFX01PREVMOiAnZGV2aWNlTW9kZWwnLFxuICAgIFVTRVJfQVRUUklCVVRFUzogJ3VzZXJBdHRyaWJ1dGVzJyxcbiAgICBMT0NBTEU6ICdsb2NhbGUnLFxuICAgIENPVU5UUlk6ICdjb3VudHJ5JyxcbiAgICBSRUdJT046ICdyZWdpb24nLFxuICAgIENJVFk6ICdjaXR5JyxcbiAgICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgICBTVEFURTogJ3N0YXRlJyxcbiAgICBJTkZPOiAnaW5mbycsXG4gICAgRVZFTlQ6ICdldmVudCcsXG4gICAgVkFMVUU6ICd2YWx1ZScsXG4gICAgRklMRU5BTUU6ICdmaWxlbmFtZScsXG4gICAgVElNRTogJ3RpbWUnLFxuICAgIERBVEE6ICdkYXRhJyxcbiAgICBWQVJTOiAndmFycycsXG4gICAgRklMRTogJ2ZpbGUnLFxuICAgIFNJWkU6ICdzaXplJyxcbiAgICBWQVJJQVRJT046ICd2YXJpYXRpb24nLFxuICAgIEhBU0g6ICdoYXNoJyxcbiAgICBFTUFJTDogJ2VtYWlsJyxcbiAgICBWQVJJQUJMRVM6ICd2YXJzJyxcbiAgICBQQVJBTVM6ICdwYXJhbXMnLFxuICAgIElOQ0xVREVfREVGQVVMVFM6ICdpbmNsdWRlRGVmYXVsdHMnLFxuICAgIElOQ0xVREVfVkFSSUFOVF9ERUJVR19JTkZPOiAnaW5jbHVkZVZhcmlhbnREZWJ1Z0luZm8nLFxuICAgIFdFQl9QVVNIX1NVQlNDUklQVElPTjogJ3dlYlB1c2hTdWJzY3JpcHRpb24nLFxuICAgIE1FU1NBR0VfSUQ6ICdtZXNzYWdlSWQnXG4gIH0sXG5cbiAgS0VZUzoge1xuICAgIElTX1JFR0lTVEVSRUQ6ICdpc1JlZ2lzdGVyZWQnLFxuICAgIExBVEVTVF9WRVJTSU9OOiAnbGF0ZXN0VmVyc2lvbicsXG4gICAgVkFSUzogJ3ZhcnMnLFxuICAgIFZBUklBTlRTOiAndmFyaWFudHMnLFxuICAgIFZBUklBTlRfREVCVUdfSU5GTzogJ3ZhcmlhbnREZWJ1Z0luZm8nLFxuICAgIEFDVElPTl9NRVRBREFUQTogJ2FjdGlvbk1ldGFkYXRhJyxcbiAgICBUT0tFTjogJ3Rva2VuJyxcbiAgICBNRVNTQUdFUzogJ21lc3NhZ2VzJ1xuICB9LFxuXG4gIERFRkFVTFRfS0VZUzoge1xuICAgIENPVU5UOiAnX19sZWFucGx1bV91bnN5bmNlZCcsXG4gICAgSVRFTTogJ19fbGVhbnBsdW1fdW5zeW5jZWRfJyxcbiAgICBWQVJJQUJMRVM6ICdfX2xlYW5wbHVtX3ZhcmlhYmxlcycsXG4gICAgVkFSSUFOVFM6ICdfX2xlYW5wbHVtX3ZhcmlhbnRzJyxcbiAgICBWQVJJQU5UX0RFQlVHX0lORk86ICdfX2xlYW5wbHVtX3ZhcmlhbnRfZGVidWdfaW5mbycsXG4gICAgQUNUSU9OX01FVEFEQVRBOiAnX19sZWFucGx1bV9hY3Rpb25fbWV0YWRhdGEnLFxuICAgIFRPS0VOOiAnX19sZWFucGx1bV90b2tlbicsXG4gICAgREVWSUNFX0lEOiAnX19sZWFucGx1bV9kZXZpY2VfaWQnLFxuICAgIFVTRVJfSUQ6ICdfX2xlYW5wbHVtX3VzZXJfaWQnLFxuICAgIFBVU0hfU1VCU0NSSVBUSU9OOiAnX19sZWFucGx1bV9wdXNoX3N1YnNjcmlwdGlvbidcbiAgfSxcblxuICBWQUxVRVM6IHtcbiAgICBERVRFQ1Q6ICcoZGV0ZWN0KSdcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy5qcyIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5cbi8qKlxuICogTGVhbnBsdW0gQXJnc0J1aWxkZXIsIHVzZSB0byBjb25zdHJ1Y3QgcmVxdWVzdCBwYXlsb2FkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmdzQnVpbGRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZW1wdHkgcmVxdWVzdCBhcmd1bWVudC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJnU3RyaW5nID0gJydcbiAgICB0aGlzLmFyZ1ZhbHVlcyA9IHt9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGdpdmVuIGtleSwgdmFsdWUgdG8gdGhlIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSB2YWx1ZSBUaGUgdmFsdWUgZm9yIGdpdmVuIGtleS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYWRkKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgaWYgKHRoaXMuYXJnU3RyaW5nKSB7XG4gICAgICB0aGlzLmFyZ1N0cmluZyArPSAnJidcbiAgICB9XG4gICAgbGV0IGVuY29kZWRVcmlDb21wb25lbnQgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXG4gICAgdGhpcy5hcmdTdHJpbmcgKz0gYCR7a2V5fT0ke2VuY29kZWRVcmlDb21wb25lbnR9YFxuICAgIHRoaXMuYXJnVmFsdWVzW2tleV0gPSB2YWx1ZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvKipcbiAgICogQ2FjaGUgdGhlIGdpdmVuIGJvZHkuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW2JvZHldIEEgZ2l2ZW4gYm9keS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ8U3RyaW5nfSBSZXR1cm5zIEFyZ3NCdWlsZGVyIGlmIGJvZHkgZ2l2ZW4sIGVsc2UgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5cbiAgICovXG4gIGJvZHkoYm9keSkge1xuICAgIGlmIChib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5ID0gYm9keVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2JvZHlcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gYXR0YWNoIGdpdmVuIGFwcElkIGFuZCBhcHBLZXkgdG8gcmVxdWVzdC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBhcHBJZCBUaGUgYXBwSWQgdG8gYXR0YWNoLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNsaWVudEtleSBUaGUgYXBwS2V5IHRvIGF0dGFjaC5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYXR0YWNoQXBpS2V5cyhhcHBJZCwgY2xpZW50S2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKENvbnN0YW50cy5QQVJBTVMuQVBQX0lELCBhcHBJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVCwgQ29uc3RhbnRzLkNMSUVOVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVF9LRVksIGNsaWVudEtleSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGFyZ3VtZW50cy5cbiAgICogQHJldHVybiB7U3RyaW5nfSBBcmd1bWVudHMgc3RyaW5nLlxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJnU3RyaW5nXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBhcmd1bWVudCB2YWx1ZXMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGFyZ3VtZW50IHZhbHVlcy5cbiAgICovXG4gIGJ1aWxkRGljdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcmdWYWx1ZXNcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vTmV0d29yaydcbmltcG9ydCBMb2NhbFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vTG9jYWxTdG9yYWdlTWFuYWdlcidcblxubGV0IGxhc3RSZXF1ZXN0VGltZSA9IHVuZGVmaW5lZFxubGV0IGNvb2xkb3duVGltZW91dCA9IG51bGxcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW1SZXF1ZXN0IHtcblxuICBzdGF0aWMgYXBpUGF0aCA9ICdodHRwczovL3d3dy5sZWFucGx1bS5jb20vYXBpJ1xuICBzdGF0aWMgYmF0Y2hFbmFibGVkID0gdHJ1ZVxuICBzdGF0aWMgYmF0Y2hDb29sZG93biA9IDVcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvblxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25zLnN1Y2Nlc3NcbiAgICogQHBhcmFtIG9wdGlvbnMuZXJyb3JcbiAgICogQHBhcmFtIG9wdGlvbnMucmVzcG9uc2VcbiAgICogQHBhcmFtIG9wdGlvbnMucXVldWVkXG4gICAqIEBwYXJhbSBvcHRpb25zLnNlbmROb3dcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyByZXF1ZXN0KGFjdGlvbiwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgbmV3IEFyZ3NCdWlsZGVyKClcblxuICAgIC8vIEdldCBvciBjcmVhdGUgZGV2aWNlIElEIGFuZCB1c2VyIElELlxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPVxuICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpIHtcbiAgICAgIGxldCBpZCA9ICcnXG4gICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgK1xuICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlkICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKVxuICAgICAgfVxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID0gaWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuREVWSUNFX0lELCBpZClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QudXNlcklkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRClcbiAgICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcblxuICAgIGxldCBhcmdzQnVpbGRlciA9IHBhcmFtc1xuICAgICAgICAuYXR0YWNoQXBpS2V5cyhMZWFucGx1bVJlcXVlc3QuYXBwSWQsIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX0lELCBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQUNUSU9OLCBhY3Rpb24pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5WRVJTSU9OX05BTUUsIExlYW5wbHVtUmVxdWVzdC52ZXJzaW9uTmFtZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVl9NT0RFLCBJbnRlcm5hbFN0YXRlLmRldk1vZGUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5USU1FLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpKVxuICAgIGxldCBzdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzIHx8IG9wdGlvbnMucmVzcG9uc2VcbiAgICBsZXQgZXJyb3IgPSBvcHRpb25zLmVycm9yIHx8IG9wdGlvbnMucmVzcG9uc2VcblxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmFwcElkIHx8ICFMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5KSB7XG4gICAgICBsZXQgZXJyID0gJ0xlYW5wbHVtIEFwcCBJRCBhbmQgY2xpZW50IGtleSBhcmUgbm90IHNldC4gTWFrZSBzdXJlIHlvdSAnICtcbiAgICAgICAgICAnYXJlIGNhbGxpbmcgc2V0QXBwSWRGb3JEZXZlbG9wbWVudE1vZGUgb3Igc2V0QXBwSWRGb3JQcm9kdWN0aW9uTW9kZSAnICtcbiAgICAgICAgICAnYmVmb3JlIGlzc3VpbmcgQVBJIGNhbGxzLidcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgaWYgKGVycm9yKSBlcnJvcihlcnIpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmJvZHkoKSkge1xuICAgICAgTmV0d29yay5hamF4KCdQT1NUJywgYCR7TGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGh9PyR7YXJnc0J1aWxkZXIuYnVpbGQoKX1gLFxuICAgICAgICAgIHBhcmFtcy5ib2R5KCksIHN1Y2Nlc3MsIGVycm9yLCBvcHRpb25zLnF1ZXVlZClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBzZW5kTm93ID0gSW50ZXJuYWxTdGF0ZS5kZXZNb2RlIHx8IG9wdGlvbnMuc2VuZE5vdyB8fCAhTGVhbnBsdW1SZXF1ZXN0LmJhdGNoRW5hYmxlZFxuXG4gICAgbGV0IHNlbmRVbnNlbnRSZXF1ZXN0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHJlcXVlc3RzVG9TZW5kID0gTGVhbnBsdW1SZXF1ZXN0LnBvcFVuc2VudFJlcXVlc3RzKClcbiAgICAgIGlmIChyZXF1ZXN0c1RvU2VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAnZGF0YSc6IHJlcXVlc3RzVG9TZW5kXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBtdWx0aVJlcXVlc3RBcmdzID0gbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hdHRhY2hBcGlLZXlzKExlYW5wbHVtUmVxdWVzdC5hcHBJZCwgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSlcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkFDVElPTiwgQ29uc3RhbnRzLk1FVEhPRFMuTVVMVEkpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVElNRSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkudG9TdHJpbmcoKS50b1N0cmluZygpKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgTmV0d29yay5hamF4KCdQT1NUJywgYCR7TGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGh9PyR7bXVsdGlSZXF1ZXN0QXJnc31gLCByZXF1ZXN0RGF0YSwgc3VjY2VzcywgZXJyb3IsXG4gICAgICAgICAgICBvcHRpb25zLnF1ZXVlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWFsIHdpdGggY29vbGRvd24uXG4gICAgaWYgKCFzZW5kTm93ICYmIExlYW5wbHVtUmVxdWVzdC5iYXRjaENvb2xkb3duKSB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXG4gICAgICBpZiAoIWxhc3RSZXF1ZXN0VGltZSB8fFxuICAgICAgICAgIG5vdyAtIGxhc3RSZXF1ZXN0VGltZSA+PSBMZWFucGx1bVJlcXVlc3QuYmF0Y2hDb29sZG93bikge1xuICAgICAgICBzZW5kTm93ID0gdHJ1ZVxuICAgICAgICBsYXN0UmVxdWVzdFRpbWUgPSBub3dcbiAgICAgIH0gZWxzZSBpZiAoIWNvb2xkb3duVGltZW91dCkge1xuICAgICAgICBjb29sZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvb2xkb3duVGltZW91dCA9IG51bGxcbiAgICAgICAgICBsYXN0UmVxdWVzdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICAgICAgICBzZW5kVW5zZW50UmVxdWVzdHMoKVxuICAgICAgICB9LCAoTGVhbnBsdW1SZXF1ZXN0LmJhdGNoQ29vbGRvd24gLSAobm93IC0gbGFzdFJlcXVlc3RUaW1lKSkgKiAxMDAwKVxuICAgICAgfVxuICAgIH1cblxuICAgIExlYW5wbHVtUmVxdWVzdC5zYXZlUmVxdWVzdEZvckxhdGVyKGFyZ3NCdWlsZGVyLmJ1aWxkRGljdCgpKVxuICAgIGlmIChzZW5kTm93KSB7XG4gICAgICBzZW5kVW5zZW50UmVxdWVzdHMoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZVJlcXVlc3RVcmwoYWN0aW9uLCBxdWVyeVBhcmFtcykge1xuICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMgfHwgbmV3IEFyZ3NCdWlsZGVyKClcblxuICAgIC8vIEdldCBvciBjcmVhdGUgZGV2aWNlIElEIGFuZCB1c2VyIElELlxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPVxuICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpIHtcbiAgICAgIGxldCBpZCA9ICcnXG4gICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgK1xuICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlkICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKVxuICAgICAgfVxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID0gaWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuREVWSUNFX0lELCBpZClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QudXNlcklkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRClcbiAgICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcblxuICAgIGxldCBhcmdzQnVpbGRlciA9IHF1ZXJ5UGFyYW1zXG4gICAgICAgIC5hdHRhY2hBcGlLZXlzKExlYW5wbHVtUmVxdWVzdC5hcHBJZCwgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNES19WRVJTSU9OLCBDb25zdGFudHMuU0RLX1ZFUlNJT04pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfSUQsIExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfSUQsIExlYW5wbHVtUmVxdWVzdC51c2VySWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5BQ1RJT04sIGFjdGlvbilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlZFUlNJT05fTkFNRSwgTGVhbnBsdW1SZXF1ZXN0LnZlcnNpb25OYW1lKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWX01PREUsIEludGVybmFsU3RhdGUuZGV2TW9kZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlRJTUUsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApLnRvU3RyaW5nKCkpXG5cbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5hcHBJZCB8fCAhTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSkge1xuICAgICAgbGV0IGVyciA9ICdMZWFucGx1bSBBcHAgSUQgYW5kIGNsaWVudCBrZXkgYXJlIG5vdCBzZXQuIE1ha2Ugc3VyZSB5b3UgJyArXG4gICAgICAgICAgJ2FyZSBjYWxsaW5nIHNldEFwcElkRm9yRGV2ZWxvcG1lbnRNb2RlIG9yIHNldEFwcElkRm9yUHJvZHVjdGlvbk1vZGUgJyArXG4gICAgICAgICAgJ2JlZm9yZSBpc3N1aW5nIEFQSSBjYWxscy4nXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke0xlYW5wbHVtUmVxdWVzdC5hcGlQYXRofT8ke2FyZ3NCdWlsZGVyLmJ1aWxkKCl9YFxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgTmV0d29yay5zZXROZXR3b3JrVGltZW91dChzZWNvbmRzKVxuICB9XG5cbiAgc3RhdGljIHNhdmVSZXF1ZXN0Rm9yTGF0ZXIoYXJncykge1xuICAgIGxldCBjb3VudCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKSB8fCAwXG4gICAgbGV0IGl0ZW1LZXkgPSBDb25zdGFudHMuREVGQVVMVF9LRVlTLklURU0gKyBjb3VudFxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKGl0ZW1LZXksIEpTT04uc3RyaW5naWZ5KGFyZ3MpKVxuICAgIGNvdW50KytcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5ULCBjb3VudClcbiAgfVxuXG4gIHN0YXRpYyBwb3BVbnNlbnRSZXF1ZXN0cygpIHtcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBbXVxuICAgIGxldCBjb3VudCA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKSB8fCAwXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQ09VTlQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbUtleSA9IENvbnN0YW50cy5ERUZBVUxUX0tFWVMuSVRFTSArIGlcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXF1ZXN0QXJncyA9IEpTT04ucGFyc2UoTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKGl0ZW1LZXkpKVxuICAgICAgICByZXF1ZXN0RGF0YS5wdXNoKHJlcXVlc3RBcmdzKVxuICAgICAgfSBjYXRjaCAoaWdub3JlZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICAgIH1cbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShpdGVtS2V5KVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdERhdGFcbiAgfVxuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8gUmVzcG9uc2UgcGFyc2luZyAvLy8vLy8vLy8vLy8vLy8vLy9cblxuICBzdGF0aWMgbnVtUmVzcG9uc2VzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UucmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5yZXNwb25zZS5sZW5ndGhcbiAgfVxuXG4gIHN0YXRpYyBnZXRSZXNwb25zZUF0KHJlc3BvbnNlLCBpbmRleCkge1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UucmVzcG9uc2VbaW5kZXhdXG4gIH1cblxuICBzdGF0aWMgZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgbGV0IGNvdW50ID0gTGVhbnBsdW1SZXF1ZXN0Lm51bVJlc3BvbnNlcyhyZXNwb25zZSlcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICByZXR1cm4gTGVhbnBsdW1SZXF1ZXN0LmdldFJlc3BvbnNlQXQocmVzcG9uc2UsIGNvdW50IC0gMSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNSZXNwb25zZVN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuICEhcmVzcG9uc2Uuc3VjY2Vzc1xuICB9XG5cbiAgc3RhdGljIGdldFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgZXJyb3IgPSByZXNwb25zZS5lcnJvclxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5sZXQgbG9jYWxTdG9yYWdlRW5hYmxlZFxubGV0IGFsdGVybmF0ZUxvY2FsU3RvcmFnZSA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZU1hbmFnZXIge1xuICBzdGF0aWMgZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV1cbiAgfVxuXG4gIHN0YXRpYyBzYXZlVG9Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9jYWxTdG9yYWdlRW5hYmxlZCA9IGZhbHNlXG4gICAgICBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICBkZWxldGUgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZUVuYWJsZWQgPSBmYWxzZVxuICAgICAgZGVsZXRlIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTG9jYWxTdG9yYWdlTWFuYWdlci5qcyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJuYWxTdGF0ZSB7XG4gIHN0YXRpYyBkZXZNb2RlID0gZmFsc2VcblxuICBzdGF0aWMgdmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzID0gW11cbiAgc3RhdGljIGhhc1JlY2VpdmVkRGlmZnMgPSBmYWxzZVxuXG4gIHN0YXRpYyBzdGFydEhhbmRsZXJzID0gW11cbiAgc3RhdGljIGhhc1N0YXJ0ZWQgPSBmYWxzZVxuICBzdGF0aWMgc3RhcnRTdWNjZXNzZnVsID0gZmFsc2VcbiAgc3RhdGljIHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkID0gZmFsc2VcblxuICBzdGF0aWMgYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVycy5wdXNoKGhhbmRsZXIpXG4gICAgaWYgKEludGVybmFsU3RhdGUuaGFzU3RhcnRlZCkge1xuICAgICAgaGFuZGxlcihJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIGxldCBpZHggPSBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKVxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLnNwbGljZShpZHgsIDEpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRyaWdnZXJTdGFydEhhbmRsZXJzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnNbaV0oSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5wdXNoKGhhbmRsZXIpXG4gICAgaWYgKEludGVybmFsU3RhdGUuaGFzUmVjZWl2ZWREaWZmcykge1xuICAgICAgaGFuZGxlcigpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBsZXQgaWR4ID0gSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKVxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdHJpZ2dlclZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzW2ldKClcbiAgICAgIH1cbiAgfVxuXG4gICAgc3RhdGljIHNldFZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS52YXJpYW50RGVidWdJbmZvRW5hYmxlZCA9IHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ludGVybmFsU3RhdGUuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKXtcbiAgdmFyIHRvcGljcyA9IHt9XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKHRvcGljLCBsaXN0ZW5lcikge1xuICAgICAgaWYoIXRvcGljcy5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRvcGljcywgdG9waWMpKSB0b3BpY3NbdG9waWNdID0gW11cblxuICAgICAgdmFyIGluZGV4ID0gdG9waWNzW3RvcGljXS5wdXNoKGxpc3RlbmVyKSAtIDFcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWxldGUgdG9waWNzW3RvcGljXVtpbmRleF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24odG9waWMsIGluZm8pIHtcbiAgICAgIGlmKCF0b3BpY3MuaGFzT3duUHJvcGVydHkuY2FsbCh0b3BpY3MsIHRvcGljKSkgcmV0dXJuXG5cbiAgICAgIHRvcGljc1t0b3BpY10uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBcdFx0aXRlbShpbmZvICE9IHVuZGVmaW5lZCA/IGluZm8gOiB7fSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KSgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXZlbnRzLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyQ2FjaGUge1xuICBzdGF0aWMgZGlmZnMgPSB1bmRlZmluZWRcbiAgc3RhdGljIHZhcmlhYmxlcyA9IG51bGxcbiAgc3RhdGljIHZhcmlhbnRzID0gW11cbiAgc3RhdGljIHZhcmlhbnREZWJ1Z0luZm8gPSB7fVxuICBzdGF0aWMgbWVyZ2VkID0gdW5kZWZpbmVkXG4gIHN0YXRpYyBvblVwZGF0ZSA9IHVuZGVmaW5lZFxuICBzdGF0aWMgdG9rZW4gPSAnJ1xuICBzdGF0aWMgYWN0aW9uTWV0YWRhdGEgPSB7fVxuXG4gIHN0YXRpYyBhcHBseURpZmZzKGRpZmZzLCB2YXJpYW50cywgYWN0aW9uTWV0YWRhdGEpIHtcbiAgICBWYXJDYWNoZS5kaWZmcyA9IGRpZmZzXG4gICAgVmFyQ2FjaGUudmFyaWFudHMgPSB2YXJpYW50c1xuICAgIFZhckNhY2hlLmFjdGlvbk1ldGFkYXRhID0gYWN0aW9uTWV0YWRhdGFcbiAgICBJbnRlcm5hbFN0YXRlLmhhc1JlY2VpdmVkRGlmZnMgPSB0cnVlXG4gICAgVmFyQ2FjaGUubWVyZ2VkID0gVmFyQ2FjaGUubWVyZ2VIZWxwZXIoVmFyQ2FjaGUudmFyaWFibGVzLCBkaWZmcylcbiAgICBWYXJDYWNoZS5zYXZlRGlmZnMoKVxuICAgIGlmIChWYXJDYWNoZS5vblVwZGF0ZSkge1xuICAgICAgVmFyQ2FjaGUub25VcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBsb2FkRGlmZnMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIFZhckNhY2hlLmFwcGx5RGlmZnMoXG4gICAgICAgICAgSlNPTi5wYXJzZShMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFCTEVTKSB8fCBudWxsKSxcbiAgICAgICAgICBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UUykgfHwgbnVsbCksXG4gICAgICAgICAgSlNPTi5wYXJzZShMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQUNUSU9OX01FVEFEQVRBKSB8fCBudWxsKSlcbiAgICAgIFZhckNhY2hlLnRva2VuID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVE9LRU4pXG4gICAgICBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFOVF9ERUJVR19JTkZPKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBMZWFucGx1bTogSW52YWxpZCBkaWZmczogJHtlfWApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNhdmVEaWZmcygpIHtcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShcbiAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQUJMRVMsIEpTT04uc3RyaW5naWZ5KFZhckNhY2hlLmRpZmZzIHx8IHt9KSlcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShcbiAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UUywgSlNPTi5zdHJpbmdpZnkoVmFyQ2FjaGUudmFyaWFudHMgfHwgW10pXG4gICAgKVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQUNUSU9OX01FVEFEQVRBLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShWYXJDYWNoZS5hY3Rpb25NZXRhZGF0YSB8fCB7fSkpXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UX0RFQlVHX0lORk8sXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gfHwge30pKVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVE9LRU4sIFZhckNhY2hlLnRva2VuKVxuICB9XG5cbiAgc3RhdGljIHNldFZhcmlhYmxlcyh2YXJpYWJsZXMpIHtcbiAgICBWYXJDYWNoZS52YXJpYWJsZXMgPSB2YXJpYWJsZXNcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLm1lcmdlZCAhPT0gdW5kZWZpbmVkID8gVmFyQ2FjaGUubWVyZ2VkIDogVmFyQ2FjaGUudmFyaWFibGVzXG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFudERlYnVnSW5mbygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUudmFyaWFudERlYnVnSW5mb1xuICB9XG5cbiAgc3RhdGljIHNlbmRWYXJpYWJsZXMoKSB7XG4gICAgbGV0IGJvZHkgPSB7fVxuICAgIGJvZHlbQ29uc3RhbnRzLlBBUkFNUy5WQVJJQUJMRVNdID0gVmFyQ2FjaGUudmFyaWFibGVzXG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU0VUX1ZBUlMsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpLmJvZHkoSlNPTi5zdHJpbmdpZnkoYm9keSkpLCB7XG4gICAgICAgICAgc2VuZE5vdzogdHJ1ZVxuICAgICAgICB9KVxuICB9XG5cbiAgc3RhdGljIG1lcmdlSGVscGVyKHZhcnMsIGRpZmYpIHtcbiAgICBpZiAodHlwZW9mIGRpZmYgPT09ICdudW1iZXInIHx8IHR5cGVvZiBkaWZmID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIGRpZmYgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZGlmZlxuICAgIH1cbiAgICBpZiAoZGlmZiA9PT0gbnVsbCB8fCBkaWZmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB2YXJzXG4gICAgfVxuXG4gICAgbGV0IG9iakl0ZXJhdG9yID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZihvYmpbaV0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlZW1zIHRvIGJlIGJlc3QgcHJhY3RpY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy83MDcxXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlZmxlY3RcbiAgICAgICAgICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgYXR0cikpIHtcbiAgICAgICAgICAgICAgZihhdHRyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdmFyc0l0ZXJhdG9yID0gb2JqSXRlcmF0b3IodmFycylcbiAgICBsZXQgZGlmZkl0ZXJhdG9yID0gb2JqSXRlcmF0b3IoZGlmZilcblxuICAgIC8vIEluZmVyIHRoYXQgdGhlIGRpZmZzIGlzIGFuIGFycmF5IGlmIHRoZSB2YXJzIHZhbHVlIGRvZXNuJ3QgZXhpc3QgdG8gdGVsbCB1cyB0aGUgdHlwZS5cbiAgICBsZXQgaXNBcnJheSA9IGZhbHNlXG4gICAgaWYgKHZhcnMgPT09IG51bGwpIHtcbiAgICAgIGlmICghKGRpZmYgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgaXNBcnJheSA9IG51bGxcbiAgICAgICAgZm9yIChsZXQgYXR0cmlidXRlIGluIGRpZmYpIHtcbiAgICAgICAgICBpZiAoIWRpZmYuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzQXJyYXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghKHR5cGVvZiBhdHRyaWJ1dGUgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXR0cmlidXRlLmxlbmd0aCA8IDMgfHwgYXR0cmlidXRlLmNoYXJBdCgwKSAhPT0gJ1snIHx8XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZS5jaGFyQXQoYXR0cmlidXRlLmxlbmd0aCAtIDEpICE9PSAnXScpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHZhclN1YnNjcmlwdCA9IGF0dHJpYnV0ZS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlLmxlbmd0aCAtIDEpXG4gICAgICAgICAgaWYgKCFwYXJzZUludCh2YXJTdWJzY3JpcHQpLnRvU3RyaW5nKCkgPT09IHZhclN1YnNjcmlwdCkge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lcmdlIGFycmF5cy5cbiAgICBpZiAodmFycyBpbnN0YW5jZW9mIEFycmF5IHx8IGlzQXJyYXkpIHtcbiAgICAgIGxldCBtZXJnZWQgPSBbXVxuICAgICAgdmFyc0l0ZXJhdG9yKGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgICAgbWVyZ2VkLnB1c2goYXR0cilcbiAgICAgIH0pXG4gICAgICBkaWZmSXRlcmF0b3IoZnVuY3Rpb24odmFyU3Vic2NyaXB0KSB7XG4gICAgICAgIGxldCBzdWJzY3JpcHQgPVxuICAgICAgICAgICAgcGFyc2VJbnQodmFyU3Vic2NyaXB0LnN1YnN0cmluZygxLCB2YXJTdWJzY3JpcHQubGVuZ3RoIC0gMSkpXG4gICAgICAgIGxldCBkaWZmVmFsdWUgPSBkaWZmW3ZhclN1YnNjcmlwdF1cbiAgICAgICAgd2hpbGUgKHN1YnNjcmlwdCA+PSBtZXJnZWQubGVuZ3RoKSB7XG4gICAgICAgICAgbWVyZ2VkLnB1c2gobnVsbClcbiAgICAgICAgfVxuICAgICAgICBtZXJnZWRbc3Vic2NyaXB0XSA9IFZhckNhY2hlLm1lcmdlSGVscGVyKG1lcmdlZFtzdWJzY3JpcHRdLCBkaWZmVmFsdWUpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIG1lcmdlZFxuICAgIH1cblxuICAgIC8vIE1lcmdlIGRpY3Rpb25hcmllcy5cbiAgICBsZXQgbWVyZ2VkID0ge31cbiAgICB2YXJzSXRlcmF0b3IoZnVuY3Rpb24oYXR0cikge1xuICAgICAgaWYgKGRpZmZbYXR0cl0gPT09IG51bGwgfHwgZGlmZlthdHRyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lcmdlZFthdHRyXSA9IHZhcnNbYXR0cl1cbiAgICAgIH1cbiAgICB9KVxuICAgIGRpZmZJdGVyYXRvcihmdW5jdGlvbihhdHRyKSB7XG4gICAgICBtZXJnZWRbYXR0cl0gPSBWYXJDYWNoZS5tZXJnZUhlbHBlcih2YXJzICE9PSBudWxsID8gdmFyc1thdHRyXSA6IG51bGwsXG4gICAgICAgICAgZGlmZlthdHRyXSlcbiAgICB9KVxuICAgIHJldHVybiBtZXJnZWRcbiAgfVxuXG4gIHN0YXRpYyBjbGVhclVzZXJDb250ZW50KCkge1xuICAgIFZhckNhY2hlLmRpZmZzID0gdW5kZWZpbmVkXG4gICAgVmFyQ2FjaGUudmFyaWFibGVzID0gbnVsbFxuICAgIFZhckNhY2hlLnZhcmlhbnRzID0gW11cbiAgICBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvID0ge31cbiAgICBWYXJDYWNoZS5tZXJnZWQgPSB1bmRlZmluZWRcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmFyQ2FjaGUuanMiLCIvKipcbiAqIEFqYXggZnVuY3Rpb25zIGZyb206XG4gKlxuICogUGFyc2UgSmF2YVNjcmlwdCBTREtcbiAqIFZlcnNpb246IDEuMS41XG4gKiBCdWlsdDogTW9uIE9jdCAwMSAyMDEyIDE3OjU3OjEzXG4gKiBodHRwOi8vcGFyc2UuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTIgUGFyc2UsIEluYy5cbiAqIFRoZSBQYXJzZSBKYXZhU2NyaXB0IFNESyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxubGV0IHJlcXVlc3RRdWV1ZSA9IFtdXG5sZXQgbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gMTBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBuZXR3b3JrIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIFRoZSB0aW1lb3V0IGluIHNlY29uZHMuXG4gICAqL1xuICBzdGF0aWMgc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcykge1xuICAgIG5ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IHNlY29uZHNcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIGFqYXggcmVxdWVzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBUaGUgaHR0cCBtZXRob2QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBvcGVuLlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheUJ1ZmZlcnxCbG9ifERvY3VtZW50fEZvcm1EYXRhfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHNlbnQgaW4gYm9keS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2VzcyBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlcnJvciBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBlcnJvci5cbiAgICogQHBhcmFtIHtib29sZWFufSBxdWV1ZWQgV2hldGhlciB0aGUgcmVxdWVzdCBzaG91bGQgYmUgcXVldWVkIG9yIGltbWVkaWF0ZWx5IHNlbnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BsYWluVGV4dF0gV2hldGhlciB0aGUgcmVzcG9uc2Ugc2hvdWxkIGJlIHJldHVybmVkIGFzIHBsYWluIHRleHQgb3IganNvbi5cbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHN0YXRpYyBhamF4KG1ldGhvZCwgdXJsLCBkYXRhLCBzdWNjZXNzLCBlcnJvciwgcXVldWVkLCBwbGFpblRleHQpIHtcbiAgICBpZiAocXVldWVkKSB7XG4gICAgICBpZiAoTmV0d29yay5ydW5uaW5nUmVxdWVzdCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgIHJldHVybiBOZXR3b3JrLmVucXVldWVSZXF1ZXN0KGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICAgIE5ldHdvcmsucnVubmluZ1JlcXVlc3QgPSB0cnVlXG4gICAgfVxuXG4gICAgLyoqIEBuYW1lc3BhY2UgWERvbWFpblJlcXVlc3QgKiovXG4gICAgLyoqIEBuYW1lc3BhY2UgbG9jYXRpb24gKiovXG4gICAgaWYgKHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHA6JyAmJiB1cmwuaW5kZXhPZignaHR0cHM6JykgPT09IDApIHtcbiAgICAgICAgdXJsID0gYGh0dHA6JHt1cmwuc3Vic3RyaW5nKDYpfWBcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgIHJldHVybiBSZWZsZWN0LmFwcGx5KE5ldHdvcmsuYWpheElFOCwgbnVsbCwgYXJndW1lbnRzKVxuICAgIH1cblxuICAgIGxldCBoYW5kbGVkID0gZmFsc2VcblxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGhhbmRsZWQgPSB0cnVlXG5cbiAgICAgICAgbGV0IHJlc3BvbnNlXG4gICAgICAgIGxldCByYW5DYWxsYmFjayA9IGZhbHNlXG4gICAgICAgIGlmIChwbGFpblRleHQpIHtcbiAgICAgICAgICByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IobnVsbCwgeGhyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgcmFuQ2FsbGJhY2sgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyYW5DYWxsYmFjaykge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UsIHhocilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IocmVzcG9uc2UsIHhocilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgICAgTmV0d29yay5ydW5uaW5nUmVxdWVzdCA9IGZhbHNlXG4gICAgICAgICAgTmV0d29yay5kZXF1ZXVlUmVxdWVzdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluJykgLy8gQXZvaWQgcHJlLWZsaWdodC5cbiAgICB4aHIuc2VuZChkYXRhKVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWhhbmRsZWQpIHtcbiAgICAgICAgeGhyLmFib3J0KClcbiAgICAgIH1cbiAgICB9LCBuZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYWpheCByZXF1ZXN0IGZvciBJRTguXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgVGhlIGh0dHAgbWV0aG9kLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gb3Blbi5cbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXlCdWZmZXJ8QmxvYnxEb2N1bWVudHxGb3JtRGF0YX0gZGF0YSBUaGUgZGF0YSB0byBiZSBzZW50IGluIGJvZHkuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1Y2Nlc3MgQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gc3VjY2Vzcy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZXJyb3IuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVldWVkIFdoZXRoZXIgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIHF1ZXVlZCBvciBpbW1lZGlhdGVseSBzZW50LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsYWluVGV4dCBXaGV0aGVyIHRoZSByZXNwb25zZSBzaG91bGQgYmUgcmV0dXJuZWQgYXMgcGxhaW4gdGV4dCBvciBqc29uLlxuICAgKi9cbiAgc3RhdGljIGFqYXhJRTgobWV0aG9kLCB1cmwsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yLCBxdWV1ZWQsIHBsYWluVGV4dCkge1xuICAgIGxldCB4ZHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKVxuICAgIHhkci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCByZXNwb25zZVxuICAgICAgbGV0IHJhbkNhbGxiYWNrID0gZmFsc2VcbiAgICAgIGlmIChwbGFpblRleHQpIHtcbiAgICAgICAgcmVzcG9uc2UgPSB4ZHIucmVzcG9uc2VUZXh0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4ZHIucmVzcG9uc2VUZXh0KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcihudWxsLCB4ZHIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMClcbiAgICAgICAgICByYW5DYWxsYmFjayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFyYW5DYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlLCB4ZHIpXG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKVxuICAgICAgfVxuICAgICAgaWYgKHF1ZXVlZCkge1xuICAgICAgICBOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0ID0gZmFsc2VcbiAgICAgICAgTmV0d29yay5kZXF1ZXVlUmVxdWVzdCgpXG4gICAgICB9XG4gICAgfVxuICAgIHhkci5vbmVycm9yID0geGRyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZXJyb3IobnVsbCwgeGRyKVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgICAgaWYgKHF1ZXVlZCkge1xuICAgICAgICBOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0ID0gZmFsc2VcbiAgICAgICAgTmV0d29yay5kZXF1ZXVlUmVxdWVzdCgpXG4gICAgICB9XG4gICAgfVxuICAgIHhkci5vbnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgfVxuICAgIHhkci5vcGVuKG1ldGhvZCwgdXJsKVxuICAgIHhkci50aW1lb3V0ID0gbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMFxuICAgIHhkci5zZW5kKGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgcmVxdWVzdCB0byB0aGUgcmVxdWVzdCBxdWV1ZS5cbiAgICogQHBhcmFtIHtBcmd1bWVudHN9IHJlcXVlc3RBcmd1bWVudHMgVGhlIHJlcXVlc3QgYXJndW1lbnRzIGZyb20gdGhlIGluaXRpYWwgbWV0aG9kIGNhbGwuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgZW5xdWV1ZVJlcXVlc3QocmVxdWVzdEFyZ3VtZW50cykge1xuICAgIHJlcXVlc3RRdWV1ZS5wdXNoKHJlcXVlc3RBcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgcmVxdWVzdCBmcm9tIHRoZSByZXF1ZXN0IHF1ZXVlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIGRlcXVldWVSZXF1ZXN0KCkge1xuICAgIGxldCBhcmdzID0gcmVxdWVzdFF1ZXVlLnNoaWZ0KClcbiAgICBpZiAoYXJncykge1xuICAgICAgUmVmbGVjdC5hcHBseShOZXR3b3JrLmFqYXgsIG51bGwsIGFyZ3MpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTmV0d29yay5qcyIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbEFycmF5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9lcS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucyxcbiAqIGRhdGUgb2JqZWN0cywgZXJyb3Igb2JqZWN0cywgbWFwcywgbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcyxcbiAqIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZCBhcnJheXMuIGBPYmplY3RgIG9iamVjdHMgYXJlIGNvbXBhcmVkXG4gKiBieSB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRnVuY3Rpb25zIGFuZCBET01cbiAqIG5vZGVzIGFyZSBjb21wYXJlZCBieSBzdHJpY3QgZXF1YWxpdHksIGkuZS4gYD09PWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBvYmplY3QgPT09IG90aGVyO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5jb25zdCBkYXRhQnJvd3NlciA9IFt7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnQ2hyb21lJyxcbiAgaWRlbnRpdHk6ICdDaHJvbWUnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnT21uaVdlYicsXG4gIHZlcnNpb25TZWFyY2g6ICdPbW5pV2ViLycsXG4gIGlkZW50aXR5OiAnT21uaVdlYidcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdBcHBsZScsXG4gIGlkZW50aXR5OiAnU2FmYXJpJyxcbiAgdmVyc2lvblNlYXJjaDogJ1ZlcnNpb24nXG59LCB7XG4gIHByb3A6IHdpbmRvdy5vcGVyYSxcbiAgaWRlbnRpdHk6ICdPcGVyYScsXG4gIHZlcnNpb25TZWFyY2g6ICdWZXJzaW9uJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ2lDYWInLFxuICBpZGVudGl0eTogJ2lDYWInXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnS0RFJyxcbiAgaWRlbnRpdHk6ICdLb25xdWVyb3InXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnRmlyZWZveCcsXG4gIGlkZW50aXR5OiAnRmlyZWZveCdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdDYW1pbm8nLFxuICBpZGVudGl0eTogJ0NhbWlubydcbn0sIHsgLy8gZm9yIG5ld2VyIE5ldHNjYXBlICg2KylcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdOZXRzY2FwZScsXG4gIGlkZW50aXR5OiAnTmV0c2NhcGUnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnTVNJRScsXG4gIGlkZW50aXR5OiAnRXhwbG9yZXInLFxuICB2ZXJzaW9uU2VhcmNoOiAnTVNJRSdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdHZWNrbycsXG4gIGlkZW50aXR5OiAnTW96aWxsYScsXG4gIHZlcnNpb25TZWFyY2g6ICdydidcbn0sIHsgLy8gZm9yIG9sZGVyIE5ldHNjYXBlICg0LSlcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdNb3ppbGxhJyxcbiAgaWRlbnRpdHk6ICdOZXRzY2FwZScsXG4gIHZlcnNpb25TZWFyY2g6ICdNb3ppbGxhJ1xufV1cblxuY29uc3QgZGF0YU9TID0gW3tcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ1dpbicsXG4gIGlkZW50aXR5OiAnV2luZG93cydcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ01hYycsXG4gIGlkZW50aXR5OiAnTWFjIE9TJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ2lQaG9uZScsXG4gIGlkZW50aXR5OiAnaU9TJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgc3ViU3RyaW5nOiAnTGludXgnLFxuICBpZGVudGl0eTogJ0xpbnV4J1xufV1cblxuLy8gQnJvd3NlciBkZXRlY3Rpb24uIFNvdXJjZTogaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9kZXRlY3QuaHRtbFxuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gZGV0ZWN0IHdoaWNoIGJyb3dzZXIgY2xpZW50IGlzIHVzaW5nLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyRGV0ZWN0b3Ige1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCB3aXRoIGN1cnJlbnQgYnJvd3NlciBzZXR0aW5ncy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuX3NlYXJjaFN0cmluZyhkYXRhQnJvd3NlcikgfHwgJ1Vua25vd24gQnJvd3NlcidcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLl9zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8XG4gICAgICAgIHRoaXMuX3NlYXJjaFZlcnNpb24obmF2aWdhdG9yLmFwcFZlcnNpb24pIHx8ICdVbmtub3duIFZlcnNpb24nXG4gICAgdGhpcy5PUyA9IHRoaXMuX3NlYXJjaFN0cmluZyhkYXRhT1MpIHx8ICdVbmtub3duIE9TJ1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdGNoZXMgdGhlIGNsaWVudCdzIHN5c3RlbSB0byB0aGUgcHJlZGVmaW5lZCBzeXN0ZW0gbGlzdC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgb2JqZWN0IHRvIHNjYW4uXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGZvdW5kIGlkZW50aXR5IHN0cmluZy5cbiAgICovXG4gIF9zZWFyY2hTdHJpbmcoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRhdGFTdHJpbmcgPSBkYXRhW2ldLnN0cmluZ1xuICAgICAgbGV0IGRhdGFQcm9wID0gZGF0YVtpXS5wcm9wXG4gICAgICB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcgPSBkYXRhW2ldLnZlcnNpb25TZWFyY2ggfHwgZGF0YVtpXS5pZGVudGl0eVxuICAgICAgaWYgKGRhdGFTdHJpbmcpIHtcbiAgICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZihkYXRhW2ldLnN1YlN0cmluZykgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkYXRhUHJvcCkge1xuICAgICAgICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBzeXN0ZW0uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhU3RyaW5nIFRoZSBkYXRhIG9iamVjdCB0byBzY2FuLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmb3VuZCBudW1iZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2VhcmNoVmVyc2lvbihkYXRhU3RyaW5nKSB7XG4gICAgaWYgKCFkYXRhU3RyaW5nKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gZGF0YVN0cmluZy5pbmRleE9mKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZylcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcoaW5kZXggKyB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcubGVuZ3RoICsgMSkpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Ccm93c2VyRGV0ZWN0b3IuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgU29ja2V0SW9DbGllbnQgZnJvbSAnLi9Tb2NrZXRJb0NsaWVudCdcbmltcG9ydCBWYXJDYWNoZSBmcm9tICcuL1ZhckNhY2hlJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL0V2ZW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW1Tb2NrZXQge1xuXG4gIHN0YXRpYyBzb2NrZXRIb3N0ID0gJ2Rldi5sZWFucGx1bS5jb20nXG5cbiAgc3RhdGljIGNvbm5lY3QoKSB7XG4gICAgaWYgKCFXZWJTb2NrZXQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdZb3VyIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgV2ViU29ja2V0cy4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGNsaWVudCA9IG5ldyBTb2NrZXRJb0NsaWVudCgpXG4gICAgbGV0IGF1dGhTZW50ID0gZmFsc2VcbiAgICBjbGllbnQub25vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWF1dGhTZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogQ29ubmVjdGVkIHRvIGRldmVsb3BtZW50IHNlcnZlci4nKVxuICAgICAgICBsZXQgYXJncyA9IHt9XG4gICAgICAgIGFyZ3NbQ29uc3RhbnRzLlBBUkFNUy5BUFBfSURdID0gTGVhbnBsdW1SZXF1ZXN0LmFwcElkXG4gICAgICAgIGFyZ3NbQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfSURdID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICAgIGNsaWVudC5zZW5kKCdhdXRoJywgYXJncylcbiAgICAgICAgYXV0aFNlbnQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIGNsaWVudC5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogU29ja2V0IGVycm9yJywgZXZlbnQpXG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKiBAcGFyYW0gYXJnc1tdLmVtYWlsXG4gICAgICovXG4gICAgY2xpZW50Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50LCBhcmdzKSB7XG4gICAgICBpZiAoZXZlbnQgPT09ICd1cGRhdGVWYXJzJykge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5HRVRfVkFSUyxcbiAgICAgICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfREVGQVVMVFMsIGZhbHNlKSwge1xuICAgICAgICAgICAgICBxdWV1ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgICAgICAgICByZXNwb25zZTogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2V0VmFyc1Jlc3BvbnNlID0gTGVhbnBsdW1SZXF1ZXN0LmdldExhc3RSZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdXG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhbnRzID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRTXVxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25NZXRhZGF0YSA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdXG4gICAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsKHZhbHVlcywgVmFyQ2FjaGUuZGlmZnMpKSB7XG4gICAgICAgICAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKHZhbHVlcywgdmFyaWFudHMsIGFjdGlvbk1ldGFkYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnZ2V0VmFyaWFibGVzJykge1xuICAgICAgICBWYXJDYWNoZS5zZW5kVmFyaWFibGVzKClcbiAgICAgICAgY2xpZW50LnNlbmQoJ2dldENvbnRlbnRSZXNwb25zZScsIHtcbiAgICAgICAgICAndXBkYXRlZCc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdnZXRBY3Rpb25zJykge1xuICAgICAgICAvLyBVbnN1cHBvcnRlZCBpbiBKYXZhU2NyaXB0IFNESy5cbiAgICAgICAgY2xpZW50LnNlbmQoJ2dldENvbnRlbnRSZXNwb25zZScsIHtcbiAgICAgICAgICAndXBkYXRlZCc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAncmVnaXN0ZXJEZXZpY2UnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgICAgICBhbGVydChgWW91ciBkZXZpY2UgaGFzIGJlZW4gcmVnaXN0ZXJlZCB0byAke2FyZ3NbMF0uZW1haWx9LmApXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAndHJpZ2dlcicpIHtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3dlYnNvY2tldC90cmlnZ2VyJywge1xuICAgICAgICAgIGFyZ3NcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY2xpZW50Lm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogRGlzY29ubmVjdGVkIHRvIGRldmVsb3BtZW50IHNlcnZlci4nKVxuICAgICAgYXV0aFNlbnQgPSBmYWxzZVxuICAgIH1cbiAgICBjbGllbnQuY29ubmVjdChMZWFucGx1bVNvY2tldC5zb2NrZXRIb3N0KVxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFjbGllbnQuY29ubmVjdGVkICYmICFjbGllbnQuY29ubmVjdGluZykge1xuICAgICAgICBjbGllbnQuY29ubmVjdChMZWFucGx1bVNvY2tldC5zb2NrZXRIb3N0KVxuICAgICAgfVxuICAgIH0sIDUwMDApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bVNvY2tldC5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcblxuY29uc3QgQVBQTElDQVRJT05fU0VSVkVSX1BVQkxJQ19LRVkgPVxuICAgICdCSW5XUHBXbnRmUjM5cmdYU1AwNHBxZG1FZERHYTUwejZ6cWJNdnh5eEpDd3pYSXVTcFNoOEM4ODgtQ2ZKODJXRUxsN1hlOGNqQScgK1xuICAgICduZkN0LTN2SzBDaTY4J1xuXG5sZXQgaXNTdWJzY3JpYmVkID0gZmFsc2VcbmxldCBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gbnVsbFxuXG4vKipcbiAqIFB1c2ggTWFuYWdlciBoYW5kbGVzIHRoZSByZWdpc3RyYXRpb24gYW5kIHN1YnNjcmlwdGlvbiBmb3Igd2ViIHB1c2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1c2hNYW5hZ2VyIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHdlYiBwdXNoIGlzIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlci5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBzdXBwb3J0ZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciAmJlxuICAgICAgICAnUHVzaE1hbmFnZXInIGluIHdpbmRvd1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBicm93c2VyIGlzIHN1YnNjcmliZWQgdG8gd2ViIHB1c2ggbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gVHJ1ZSBpZiBzdWJzY3JpYmVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzV2ViUHVzaFN1YnNjcmliZWQoKSB7XG4gICAgaWYgKCFQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gUHVzaE1hbmFnZXIuZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbigpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8qKiBAbmFtZXNwYWNlIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlciBUaGUgcHVzaCBtYW5hZ2VyIG9iamVjdCBvZiB0aGUgYnJvd3Nlci4gKiovXG4gICAgICAgICAgICAgIC8qKiBAbmFtZXNwYWNlIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24gKiovXG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IHN1YnNjcmlwdGlvbiAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgUHVzaE1hbmFnZXIudXBkYXRlTmV3U3Vic2NyaXB0aW9uT25TZXJ2ZXIoc3Vic2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGZvciBXZWJQdXNoLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgc2VydmljZVdvcmtlclVybCBUaGUgdXJsIHRoYXQgc2VydmVzIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB5b3VyIGRvbWFpbi5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgICAgVGhlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aXRoIHJlc3VsdC5cbiAgICogQHJldHVybiB7b2JqZWN0fSBub3RoaW5nXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXIoc2VydmljZVdvcmtlclVybCwgY2FsbGJhY2spIHtcbiAgICBpZiAoIVB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpKSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFB1c2ggbWVzc2FnaW5nIGlzIG5vdCBzdXBwb3J0ZWQuJylcbiAgICAgIHJldHVybiBjYWxsYmFjayhmYWxzZSlcbiAgICB9XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXG4gICAgICAgIHNlcnZpY2VXb3JrZXJVcmwgPyBzZXJ2aWNlV29ya2VyVXJsIDogJy9zdy5taW4uanMnLCBudWxsKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uXG5cbiAgICAgICAgICAvLyBTZXQgdGhlIGluaXRpYWwgc3Vic2NyaXB0aW9uIHZhbHVlXG4gICAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSAhKHN1YnNjcmlwdGlvbiA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICBQdXNoTWFuYWdlci51cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGlzU3Vic2NyaWJlZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogU2VydmljZSBXb3JrZXIgRXJyb3I6ICcsIGVycm9yKVxuICAgICAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0aGUgdXNlcihicm93c2VyKSB0byBwdXNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyBpZiBzdWJzY3JpcHRpb24gc3VjY2Vzc2Z1bCwgb3RoZXJ3aXNlIHJlamVjdHMuXG4gICAqL1xuICBzdGF0aWMgc3Vic2NyaWJlVXNlcigpIHtcbiAgICBjb25zdCBhcHBsaWNhdGlvblNlcnZlcktleSA9IFB1c2hNYW5hZ2VyLnVybEI2NFRvVWludDhBcnJheShBUFBMSUNBVElPTl9TRVJWRVJfUFVCTElDX0tFWSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvKiogQG5hbWVzcGFjZSBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSBTdWJzY3JpYmUgdG8gcHVzaC4gKiovXG4gICAgICByZXR1cm4gc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXG4gICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5XG4gICAgICB9KVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICBQdXNoTWFuYWdlci51cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pXG4gICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IHRydWVcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChgTGVhbnBsdW06IEZhaWxlZCB0byBzdWJzY3JpYmUgdGhlIHVzZXI6ICR7ZXJyfWApXG4gICAgICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIHRoZSB1c2VyKGJyb3dzZXIpIGZyb20gcHVzaC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVzb2x2ZXMgaWYgdW5zdWJzY3JpYmVkLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN0YXRpYyB1bnN1YnNjcmliZVVzZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1YnNjcmliZWQoKS50aGVuKChzdWJzY3JpYmVkKSA9PiB7XG4gICAgICAgIGlmICghc3Vic2NyaWJlZCkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgLyoqIEBuYW1lc3BhY2Ugc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci51bnN1YnNjcmliZSBVbnN1YnNjcmliZSB0b1xuICAgICAgICAgICAgICAgICAqICBwdXNoLiAqKi9cbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGBMZWFucGx1bTogRXJyb3IgdW5zdWJzY3JpYmluZzogJHtlcnJvcn1gKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlamVjdCgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gb2JqZWN0IGZyb20gYnJvd3Nlci5cbiAgICogQHJldHVybiB7b2JqZWN0fSBSZXR1cm5zIHRoZSByZWdpc3RyYXRpb24gb3IgbnVsbC5cbiAgICovXG4gIHN0YXRpYyBnZXRTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24pIHtcbiAgICAgICAgcmVzb2x2ZShzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIEBuYW1lc3BhY2UgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uIFJldHJpZXZlcyB0aGUgIHB1c2ggcmVnaXN0cmF0aW9uXG4gICAgICAgICAqIGZyb20gdGhlIGJyb3dzZXIuICoqL1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oKS50aGVuKChyZWdpc3RyYXRpb24pID0+IHtcbiAgICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uXG4gICAgICAgICAgcmVzb2x2ZShyZWdpc3RyYXRpb24pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGVzIGEgYmFzZTY0IHVybCBzdHJpbmcgdG8gYW4gdWludDggYXJyYXJ5LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2U2NFN0cmluZyBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzdGF0aWMgdXJsQjY0VG9VaW50OEFycmF5KGJhc2U2NFN0cmluZykge1xuICAgIGNvbnN0IHBhZGRpbmcgPSAnPScucmVwZWF0KCg0IC0gYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpICUgNClcbiAgICBjb25zdCBiYXNlNjQgPSAoYmFzZTY0U3RyaW5nICsgcGFkZGluZylcbiAgICAgICAgLnJlcGxhY2UoLy0vZywgJysnKVxuICAgICAgICAucmVwbGFjZSgvXy9nLCAnLycpXG5cbiAgICBjb25zdCByYXdEYXRhID0gd2luZG93LmF0b2IoYmFzZTY0KVxuICAgIGNvbnN0IG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpXG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRBcnJheVxuICB9XG5cbiAgLyoqXG4gICAqIFtwcmVwYXJlU3Vic2NyaXB0aW9uIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHN1YnNjcmlwdGlvbiBUaGUgcmF3IHN1YnNjcmlwdGlvbiBmcm9tIGJyb3dzZXIuXG4gICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBzdWJzY3JpcHRpb24uZ2V0S2V5IFRoZSBzdWJzY3JpcHRpb24ga2V5LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHN1YnNjcmlwdGlvbi5lbmRwb2ludCBUaGUgc3Vic2NyaXB0aW9uIGtleS5cbiAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgc3Vic2NyaXB0aW9uIG9iamVjdCB0byBiZSBzZW50IHRvIHNlcnZlci5cbiAgICovXG4gIHN0YXRpYyBwcmVwYXJlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgIGxldCBrZXkgPSBzdWJzY3JpcHRpb24uZ2V0S2V5ID8gc3Vic2NyaXB0aW9uLmdldEtleSgncDI1NmRoJykgOiAnJ1xuICAgIGxldCBhdXRoID0gc3Vic2NyaXB0aW9uLmdldEtleSA/IHN1YnNjcmlwdGlvbi5nZXRLZXkoJ2F1dGgnKSA6ICcnXG4gICAgLy8gbm9pbnNwZWN0aW9uIEVTNk1vZHVsZXNEZXBlbmRlbmNpZXNcbiAgICBsZXQga2V5QXNjaWkgPSBidG9hKFJlZmxlY3QuYXBwbHkoU3RyaW5nLmZyb21DaGFyQ29kZSwgbnVsbCwgbmV3IFVpbnQ4QXJyYXkoa2V5KSkpXG4gICAgLy8gbm9pbnNwZWN0aW9uIEVTNk1vZHVsZXNEZXBlbmRlbmNpZXNcbiAgICBsZXQgYXV0aEFzY2lpID0gYnRvYShSZWZsZWN0LmFwcGx5KFN0cmluZy5mcm9tQ2hhckNvZGUsIG51bGwsIG5ldyBVaW50OEFycmF5KGF1dGgpKSlcbiAgICByZXR1cm4ge1xuICAgICAgZW5kcG9pbnQ6IHN1YnNjcmlwdGlvbi5lbmRwb2ludCxcbiAgICAgIGtleToga2V5QXNjaWksXG4gICAgICBhdXRoOiBhdXRoQXNjaWlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIG5ldyBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIHRoZSBMZWFucGx1bSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdWJzY3JpcHRpb24gVGhlIHN1YnNjcmlwdGlvbi5cbiAgICovXG4gIHN0YXRpYyB1cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICBsZXQgcHJlcGFyZWRTdWJzY3JpcHRpb24gPSBQdXNoTWFuYWdlci5wcmVwYXJlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbilcbiAgICAgIGxldCBwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHByZXBhcmVkU3Vic2NyaXB0aW9uKVxuICAgICAgbGV0IGV4aXN0aW5nU3Vic2NyaXB0aW9uU3RyaW5nID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuUFVTSF9TVUJTQ1JJUFRJT04pXG4gICAgICBpZiAoIWlzRXF1YWwoZXhpc3RpbmdTdWJzY3JpcHRpb25TdHJpbmcsIHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nKSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlBVU0hfU1VCU0NSSVBUSU9OLFxuICAgICAgICAgICAgcHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcpXG4gICAgICAgIFB1c2hNYW5hZ2VyLnNldFN1YnNjcmlwdGlvbihwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZCB0aGUgc3Vic2NyaXB0aW9uIHRvIHRoZSBMZWFucGx1bSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nL09iamVjdH0gc3Vic2NyaXB0aW9uIFRoZSBzdWJzY3JpcHRpb24gc3RyaW5nLlxuICAgKi9cbiAgc3RhdGljIHNldFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNFVF9ERVZJQ0VfQVRUUklCVVRFUyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKCkuYWRkKENvbnN0YW50cy5QQVJBTVMuV0VCX1BVU0hfU1VCU0NSSVBUSU9OLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uKSwge1xuICAgICAgICAgIHF1ZXVlZDogZmFsc2UsXG4gICAgICAgICAgc2VuZE5vdzogdHJ1ZVxuICAgICAgICB9XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUHVzaE1hbmFnZXIuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IEJyb3dzZXJEZXRlY3RvciBmcm9tICcuL0Jyb3dzZXJEZXRlY3RvcidcbmltcG9ydCBQdXNoTWFuYWdlciBmcm9tICcuL1B1c2hNYW5hZ2VyJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuaW1wb3J0IFZhckNhY2hlIGZyb20gJy4vVmFyQ2FjaGUnXG5pbXBvcnQgTGVhbnBsdW1SZXF1ZXN0IGZyb20gJy4vTGVhbnBsdW1SZXF1ZXN0J1xuaW1wb3J0IExlYW5wbHVtU29ja2V0IGZyb20gJy4vTGVhbnBsdW1Tb2NrZXQnXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vRXZlbnRzJ1xuXG5sZXQgX2Jyb3dzZXJEZXRlY3RvciA9IG5ldyBCcm93c2VyRGV0ZWN0b3IoKVxuXG4vKipcbiAqIEBwcmVzZXJ2ZSBMZWFucGx1bSBKYXZhc2NyaXB0IFNESy5cbiAqIENvcHlyaWdodCAyMDE2LCBMZWFucGx1bSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFlvdSBtYXkgbm90IGRpc3RyaWJ1dGUgdGhpcyBzb3VyY2UgY29kZSB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvblxuICogZnJvbSBMZWFucGx1bS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW0ge1xuXG4gIHN0YXRpYyBzZXRBcGlQYXRoKGFwaVBhdGgpIHtcbiAgICBpZiAoIUxlYW5wbHVtUmVxdWVzdC5hcGlQYXRoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGggPSBhcGlQYXRoXG4gIH1cblxuICBzdGF0aWMgc2V0RW1haWwoZW1haWwpIHtcbiAgICBMZWFucGx1bS5fZW1haWwgPSBlbWFpbFxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnNldE5ldHdvcmtUaW1lb3V0KHNlY29uZHMpXG4gIH1cblxuICBzdGF0aWMgc2V0VmFyaWFudERlYnVnSW5mb0VuYWJsZWQodmFyaWFudERlYnVnSW5mb0VuYWJsZWQpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnNldFZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKHZhcmlhbnREZWJ1Z0luZm9FbmFibGVkKVxuICB9O1xuXG4gIHN0YXRpYyBnZXRWYXJpYW50RGVidWdJbmZvKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS5nZXRWYXJpYW50RGVidWdJbmZvKClcbiAgfTtcblxuICBzdGF0aWMgc2V0QXBwSWRGb3JEZXZlbG9wbWVudE1vZGUoYXBwSWQsIGFjY2Vzc0tleSkge1xuICAgIExlYW5wbHVtUmVxdWVzdC5hcHBJZCA9IGFwcElkXG4gICAgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSA9IGFjY2Vzc0tleVxuICAgIEludGVybmFsU3RhdGUuZGV2TW9kZSA9IHRydWVcbiAgfVxuXG4gIHN0YXRpYyBzZXRBcHBJZEZvclByb2R1Y3Rpb25Nb2RlKGFwcElkLCBhY2Nlc3NLZXkpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QuYXBwSWQgPSBhcHBJZFxuICAgIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkgPSBhY2Nlc3NLZXlcbiAgICBJbnRlcm5hbFN0YXRlLmRldk1vZGUgPSBmYWxzZVxuICB9XG5cbiAgc3RhdGljIHNldFNvY2tldEhvc3QoaG9zdCkge1xuICAgIExlYW5wbHVtU29ja2V0LnNvY2tldEhvc3QgPSBob3N0XG4gIH1cblxuICBzdGF0aWMgc2V0RGV2aWNlSWQoZGV2aWNlSWQpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPSBkZXZpY2VJZFxuICB9XG5cbiAgc3RhdGljIHNldEFwcFZlcnNpb24odmVyc2lvbk5hbWUpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QudmVyc2lvbk5hbWUgPSB2ZXJzaW9uTmFtZVxuICB9XG5cbiAgc3RhdGljIHNldERldmljZU5hbWUoZGV2aWNlTmFtZSkge1xuICAgIExlYW5wbHVtLl9kZXZpY2VOYW1lID0gZGV2aWNlTmFtZVxuICB9XG5cbiAgc3RhdGljIHNldERldmljZU1vZGVsKGRldmljZU1vZGVsKSB7XG4gICAgTGVhbnBsdW0uX2RldmljZU1vZGVsID0gZGV2aWNlTW9kZWxcbiAgfVxuXG4gIHN0YXRpYyBzZXRTeXN0ZW1OYW1lKHN5c3RlbU5hbWUpIHtcbiAgICBMZWFucGx1bS5fc3lzdGVtTmFtZSA9IHN5c3RlbU5hbWVcbiAgfVxuXG4gIHN0YXRpYyBzZXRTeXN0ZW1WZXJzaW9uKHN5c3RlbVZlcnNpb24pIHtcbiAgICBMZWFucGx1bS5fc3lzdGVtVmVyc2lvbiA9IHN5c3RlbVZlcnNpb25cbiAgfVxuXG4gIHN0YXRpYyBzZXRWYXJpYWJsZXModmFyaWFibGVzKSB7XG4gICAgVmFyQ2FjaGUuc2V0VmFyaWFibGVzKHZhcmlhYmxlcylcbiAgfVxuXG4gIHN0YXRpYyBzZXRSZXF1ZXN0QmF0Y2hpbmcoYmF0Y2hFbmFibGVkLCBjb29sZG93blNlY29uZHMpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QuYmF0Y2hFbmFibGVkID0gYmF0Y2hFbmFibGVkXG4gICAgTGVhbnBsdW1SZXF1ZXN0LmJhdGNoQ29vbGRvd24gPSBjb29sZG93blNlY29uZHNcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLmdldFZhcmlhYmxlcygpXG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFibGUoLi4uYXJncykge1xuICAgIGxldCBjdXJyZW50ID0gTGVhbnBsdW0uZ2V0VmFyaWFibGVzKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50W2FyZ3NbaV1dXG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFudHMoKSB7XG4gICAgcmV0dXJuIFZhckNhY2hlLnZhcmlhbnRzIHx8IFtdXG4gIH1cblxuICBzdGF0aWMgYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUuYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcilcbiAgfVxuXG4gIHN0YXRpYyBhZGRWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5hZGRWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnJlbW92ZVN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUucmVtb3ZlVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcilcbiAgfVxuXG4gIHN0YXRpYyBmb3JjZUNvbnRlbnRVcGRhdGUoY2FsbGJhY2spIHtcbiAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5HRVRfVkFSUyxcbiAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5DTFVERV9ERUZBVUxUUywgZmFsc2UpXG4gICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5DTFVERV9WQVJJQU5UX0RFQlVHX0lORk8sIEludGVybmFsU3RhdGUudmFyaWFudERlYnVnSW5mb0VuYWJsZWQpLCB7XG4gICAgICAgIHF1ZXVlZDogZmFsc2UsXG4gICAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBsZXQgZ2V0VmFyc1Jlc3BvbnNlID0gTGVhbnBsdW1SZXF1ZXN0LmdldExhc3RSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgbGV0IGlzU3VjY2VzcyA9IExlYW5wbHVtUmVxdWVzdC5pc1Jlc3BvbnNlU3VjY2VzcyhnZXRWYXJzUmVzcG9uc2UpO1xuICAgICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgIFZhckNhY2hlLmFwcGx5RGlmZnMoXG4gICAgICAgICAgICAgIGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJTXSxcbiAgICAgICAgICAgICAgZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRTXSxcbiAgICAgICAgICAgICAgZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLkFDVElPTl9NRVRBREFUQV0pXG4gICAgICAgICAgICBWYXJDYWNoZS52YXJpYW50RGVidWdJbmZvID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRfREVCVUdfSU5GT11cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhpc1N1Y2Nlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBzdGF0aWMgc3RhcnQodXNlcklkLCB1c2VyQXR0cmlidXRlcywgY2FsbGJhY2spIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlcklkXG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9XG4gICAgICB1c2VySWQgPSBudWxsXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdXNlcklkID09PSAnb2JqZWN0JyAmJiB1c2VySWQgIT09IG51bGwgJiZcbiAgICAgICAgdXNlcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlckF0dHJpYnV0ZXNcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0gdXNlcklkXG4gICAgICB1c2VySWQgPSBudWxsXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdXNlckF0dHJpYnV0ZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlckF0dHJpYnV0ZXNcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge31cbiAgICB9XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IHVzZXJJZFxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgTGVhbnBsdW0uYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIoY2FsbGJhY2spXG4gICAgfVxuXG4gICAgVmFyQ2FjaGUub25VcGRhdGUgPSBmdW5jdGlvbigpe1xuICAgICAgSW50ZXJuYWxTdGF0ZS50cmlnZ2VyVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzKClcbiAgICB9XG5cbiAgICBsZXQgYXJncyA9IG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0FUVFJJQlVURVMsIEpTT04uc3RyaW5naWZ5KHVzZXJBdHRyaWJ1dGVzKSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNPVU5UUlksIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuUkVHSU9OLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNJVFksIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuTE9DQVRJT04sIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU1lTVEVNX05BTUUsIExlYW5wbHVtLl9zeXN0ZW1OYW1lIHx8IF9icm93c2VyRGV0ZWN0b3IuT1MpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TWVNURU1fVkVSU0lPTiwgKExlYW5wbHVtLl9zeXN0ZW1WZXJzaW9uIHx8ICcnKS50b1N0cmluZygpKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQlJPV1NFUl9OQU1FLCBfYnJvd3NlckRldGVjdG9yLmJyb3dzZXIpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5CUk9XU0VSX1ZFUlNJT04sIF9icm93c2VyRGV0ZWN0b3IudmVyc2lvbi50b1N0cmluZygpKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuTE9DQUxFLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVklDRV9OQU1FLCBMZWFucGx1bS5fZGV2aWNlTmFtZSB8fFxuICAgICAgICAgICAgYCR7X2Jyb3dzZXJEZXRlY3Rvci5icm93c2VyfSAke19icm93c2VyRGV0ZWN0b3IudmVyc2lvbn1gKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX01PREVMLCBMZWFucGx1bS5fZGV2aWNlTW9kZWwgfHwgJ1dlYiBCcm93c2VyJylcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfREVGQVVMVFMsIGZhbHNlKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5DTFVERV9WQVJJQU5UX0RFQlVHX0lORk8sIEludGVybmFsU3RhdGUudmFyaWFudERlYnVnSW5mb0VuYWJsZWQpO1xuXG4gICAgLy8gSXNzdWUgcmVxdWVzdC5cbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TVEFSVCwgYXJncywge1xuICAgICAgcXVldWVkOiB0cnVlLFxuICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBJbnRlcm5hbFN0YXRlLmhhc1N0YXJ0ZWQgPSB0cnVlXG4gICAgICAgIGxldCBzdGFydFJlc3BvbnNlID0gTGVhbnBsdW1SZXF1ZXN0LmdldExhc3RSZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgaWYgKExlYW5wbHVtUmVxdWVzdC5pc1Jlc3BvbnNlU3VjY2VzcyhzdGFydFJlc3BvbnNlKSkge1xuICAgICAgICAgIEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsID0gdHJ1ZVxuICAgICAgICAgIGlmIChJbnRlcm5hbFN0YXRlLmRldk1vZGUpIHtcbiAgICAgICAgICAgIGxldCBsYXRlc3RWZXJzaW9uID0gc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5MQVRFU1RfVkVSU0lPTl1cbiAgICAgICAgICAgIGlmIChsYXRlc3RWZXJzaW9uKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBIG5ld2VyIHZlcnNpb24gb2YgTGVhbnBsdW0sICR7bGF0ZXN0VmVyc2lvbn0sIGlzIGF2YWlsYWJsZS4gR28gdG9gICtcbiAgICAgICAgICAgICAgICAgICdsZWFucGx1bS5jb20gdG8gZG93bmxvYWQgaXQuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExlYW5wbHVtU29ja2V0LmNvbm5lY3QoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFZhckNhY2hlLmFwcGx5RGlmZnMoXG4gICAgICAgICAgICAgIHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSU10sXG4gICAgICAgICAgICAgIHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVFNdLFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLkFDVElPTl9NRVRBREFUQV0pO1xuICAgICAgICAgIFZhckNhY2hlLnZhcmlhbnREZWJ1Z0luZm8gPSBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRfREVCVUdfSU5GT11cbiAgICAgICAgICBWYXJDYWNoZS50b2tlbiA9IHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVE9LRU5dXG5cbiAgICAgICAgICBldmVudHMucHVibGlzaCgnc3RhcnQvbWVzc2FnZXMnLCB7XG4gICAgICAgICAgICBtZXNzYWdlczogc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5NRVNTQUdFU11cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsID0gZmFsc2VcbiAgICAgICAgICBWYXJDYWNoZS5sb2FkRGlmZnMoKVxuICAgICAgICB9XG4gICAgICAgIEludGVybmFsU3RhdGUudHJpZ2dlclN0YXJ0SGFuZGxlcnMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgc3RhcnRGcm9tQ2FjaGUodXNlcklkLCB1c2VyQXR0cmlidXRlcywgY2FsbGJhY2spIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlcklkXG4gICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRBc3NpZ25tZW50XG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9XG4gICAgICB1c2VySWQgPSBudWxsXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdXNlcklkID09PSAnb2JqZWN0JyAmJiB1c2VySWQgIT09IG51bGwgJiZcbiAgICAgICAgdXNlcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlckF0dHJpYnV0ZXNcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEFzc2lnbm1lbnRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0gdXNlcklkXG4gICAgICB1c2VySWQgPSBudWxsXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdXNlckF0dHJpYnV0ZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gdXNlckF0dHJpYnV0ZXNcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEFzc2lnbm1lbnRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge31cbiAgICB9XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IHVzZXJJZFxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgTGVhbnBsdW0uYWRkU3RhcnRSZXNwb25zZUhhbmRsZXIoY2FsbGJhY2spXG4gICAgfVxuXG4gICAgSW50ZXJuYWxTdGF0ZS5oYXNTdGFydGVkID0gdHJ1ZVxuICAgIEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsID0gdHJ1ZVxuICAgIGlmIChJbnRlcm5hbFN0YXRlLmRldk1vZGUpIHtcbiAgICAgIExlYW5wbHVtU29ja2V0LmNvbm5lY3QoKVxuICAgIH1cbiAgICBWYXJDYWNoZS5sb2FkRGlmZnMoKVxuICAgIEludGVybmFsU3RhdGUudHJpZ2dlclN0YXJ0SGFuZGxlcnMoKVxuICB9XG5cbiAgc3RhdGljIHN0b3AoKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU1RPUCwgdW5kZWZpbmVkLCB7XG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBwYXVzZVNlc3Npb24oKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUEFVU0VfU0VTU0lPTiwgdW5kZWZpbmVkLCB7XG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyByZXN1bWVTZXNzaW9uKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlJFU1VNRV9TRVNTSU9OLCB1bmRlZmluZWQsIHtcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHBhdXNlU3RhdGUoKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUEFVU0VfU1RBVEUsIHVuZGVmaW5lZCwge1xuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyByZXN1bWVTdGF0ZSgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5SRVNVTUVfU1RBVEUsIHVuZGVmaW5lZCwge1xuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBzZXRVc2VySWQodXNlcklkKSB7XG4gICAgTGVhbnBsdW0uc2V0VXNlckF0dHJpYnV0ZXModXNlcklkKVxuICB9XG5cbiAgc3RhdGljIHNldFVzZXJBdHRyaWJ1dGVzKHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMpIHtcbiAgICBpZiAodXNlckF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHVzZXJBdHRyaWJ1dGVzID0gdXNlcklkXG4gICAgICAgIHVzZXJJZCA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdXNlcklkICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IHNldFVzZXJBdHRyaWJ1dGVzIGV4cGVjdHMgYSBzdHJpbmcgb3IgYW4gJyArXG4gICAgICAgICAgICAnb2JqZWN0JylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNFVF9VU0VSX0FUVFJJQlVURVMsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9BVFRSSUJVVEVTLFxuICAgICAgICAgICAgICAgIHVzZXJBdHRyaWJ1dGVzID8gSlNPTi5zdHJpbmdpZnkodXNlckF0dHJpYnV0ZXMpIDogdW5kZWZpbmVkKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLk5FV19VU0VSX0lELCB1c2VySWQpLCB7XG4gICAgICAgICAgcXVldWVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCA9IHVzZXJJZFxuICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRGaWxlVXJsKGZpbGVOYW1lKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgIHJldHVybiBMZWFucGx1bVJlcXVlc3RcbiAgICAgICAgLmdlbmVyYXRlUmVxdWVzdFVybChcbiAgICAgICAgICBDb25zdGFudHMuTUVUSE9EUy5ET1dOTE9BRF9GSUxFLFxuICAgICAgICAgIG5ldyBBcmdzQnVpbGRlcigpLmFkZChDb25zdGFudHMuUEFSQU1TLkZJTEVOQU1FLCBmaWxlTmFtZSlcbiAgICAgICAgKVxuICB9XG5cbiAgc3RhdGljIHRyYWNrTWVzc2FnZShldmVudCwgbWVzc2FnZUlkKSB7XG4gICAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5UUkFDSyxcbiAgICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuRVZFTlQsIGV2ZW50KVxuICAgICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuTUVTU0FHRV9JRCwgbWVzc2FnZUlkKSwge1xuICAgICAgICAgICAgICBxdWV1ZWQ6IHRydWVcbiAgICAgICAgICB9KVxuICB9XG5cbiAgc3RhdGljIHRyYWNrKGV2ZW50LCB2YWx1ZSwgaW5mbywgcGFyYW1zKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIC8vIG9iamVjdCAmJiAhbnVsbCAmJiAhdW5kZWZpbmVkIC0+IHBhcmFtc1xuICAgIC8vIHN0cmluZyAtPiBpbmZvLCBwYXJhbXNcbiAgICAvLyAqLCBvYmplY3QgJiYgIW51bGwgJiYgIXVuZGVmaW5lZCAtPiB2YWx1ZSwgcGFyYW1zXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gdmFsdWVcbiAgICAgIGluZm8gPSB1bmRlZmluZWRcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJhbXMgPSBpbmZvXG4gICAgICBpbmZvID0gdmFsdWVcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5mbyA9PT0gJ29iamVjdCcgJiYgaW5mbyAhPT0gbnVsbCAmJiBpbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcyA9IGluZm9cbiAgICAgIGluZm8gPSB1bmRlZmluZWRcbiAgICB9XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuVFJBQ0ssXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuRVZFTlQsIGV2ZW50KVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlZBTFVFLCB2YWx1ZSB8fCAwLjApXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5GTywgaW5mbylcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5QQVJBTVMsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpLCB7XG4gICAgICAgICAgcXVldWVkOiB0cnVlXG4gICAgICAgIH0pXG4gIH1cblxuICBzdGF0aWMgYWR2YW5jZVRvKHN0YXRlLCBpbmZvLCBwYXJhbXMpIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgLy8gc3RyaW5nfG51bGx8dW5kZWZpbmVkLCAqIC0+IGluZm8sIHBhcmFtc1xuICAgIC8vIG9iamVjdCAmJiAhbnVsbCAmJiAhdW5kZWZpbmVkIC0+IHBhcmFtc1xuICAgIGlmICh0eXBlb2YgaW5mbyA9PT0gJ29iamVjdCcgJiYgaW5mbyAhPT0gbnVsbCAmJiBpbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcyA9IGluZm9cbiAgICAgIGluZm8gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5BRFZBTkNFLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TVEFURSwgc3RhdGUpXG4gICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklORk8sIGluZm8pXG4gICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlBBUkFNUywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSksIHtcbiAgICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHdlYiBwdXNoIGlzIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlci5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBzdXBwb3J0ZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiBQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgd2ViIHB1c2ggaXMgc3Vic2NyaWJlZC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVzb2x2ZXMgaWYgdHJ1ZSwgcmVqZWN0cyBpZiBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBQdXNoTWFuYWdlci5pc1dlYlB1c2hTdWJzY3JpYmVkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgYnJvd3NlciBmb3Igd2ViIHB1c2guXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICBzZXJ2aWNlV29ya2VyVXJsIFRoZSB1cmwgb24geW91ciBzZXJ2ZXIgdGhhdCBob3N0cyB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N3Lm1pbi5qcyBzZXJ2aWNlIHdvcmtlciBqcyBmaWxlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICAgICAgICAgICAgICBSZXNvbHZlcyBpZiByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJ3aXNlIGZhaWxzLlxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyRm9yV2ViUHVzaChzZXJ2aWNlV29ya2VyVXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChQdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKSkge1xuICAgICAgICByZXR1cm4gUHVzaE1hbmFnZXIucmVnaXN0ZXIoc2VydmljZVdvcmtlclVybCwgKGlzU3Vic2NyaWJlZCkgPT4ge1xuICAgICAgICAgIGlmIChpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBQdXNoTWFuYWdlci5zdWJzY3JpYmVVc2VyKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3QoJ0xlYW5wbHVtOiBXZWJQdXNoIGlzIG5vdCBzdXBwb3J0ZWQuJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIHRoZSBicm93c2VyIGZvcm0gd2ViIHB1c2guXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgICAgICAgUmVzb2x2ZXMgb24gc3VjY2Vzcywgb3RoZXJ3aXNlIHJlamVjdHMuXG4gICAqL1xuICBzdGF0aWMgdW5yZWdpc3RlckZyb21XZWJQdXNoKCkge1xuICAgIHJldHVybiBQdXNoTWFuYWdlci51bnN1YnNjcmliZVVzZXIoKVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBjYWNoZWQgdmFsdWVzIGZvciBtZXNzYWdlcywgdmFyaWFibGVzIGFuZCB0ZXN0IGFzc2lnbm1lbnRzLlxuICAgKiBVc2Ugc3BhcmluZ2x5IGFzIGlmIHRoZSBhcHAgaXMgdXBkYXRlZCwgeW91J2xsIGhhdmUgdG8gZGVhbCB3aXRoIHBvdGVudGlhbGx5XG4gICAqIGluY29uc2lzdGVudCBzdGF0ZSBvciB1c2VyIGV4cGVyaWVuY2UuXG4gICAqL1xuICBzdGF0aWMgY2xlYXJVc2VyQ29udGVudCgpIHtcbiAgICBWYXJDYWNoZS5jbGVhclVzZXJDb250ZW50KClcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHViL3N1YiBldmVudHMgbWFuYWdlci5cbiAgICpcbiAgICogQFJldHVybiB7IHB1Ymxpc2g6ICh0b3BpYywgYXJncykgPT4ge30sIHN1YnNjcmliZTogKHRvcGljLCBjYWxsYmFjaykgPT4ge30gfVxuICAgKi9cbiAgc3RhdGljIGdldEV2ZW50cyAoKSB7XG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGVhbnBsdW0uanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuXG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuL05ldHdvcmsnXG5cbi8qKlxuICogU29ja2V0LmlvIDEuMCBjbGllbnQgY2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvY2tldElvQ2xpZW50IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGEgbmV3IFNvY2tldElvQ2xpZW50LCBub3QgY29ubmVjdGVkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlXG4gICAgdGhpcy5jb25uZWN0aW5nID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0cyB0byB0aGUgZ2l2ZW4gc29ja2V0SG9zdC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBzb2NrZXRIb3N0IFRoZSBob3N0IHRvIGNvbm5lY3QgdG8uXG4gICAqL1xuICBjb25uZWN0KHNvY2tldEhvc3QpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC10aGlzXG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jb25uZWN0aW5nID0gdHJ1ZVxuICAgIFJlcXVlc3QuYWpheCgnUE9TVCcsIGBodHRwczovLyR7c29ja2V0SG9zdH0vc29ja2V0LmlvLzFgLCAnJyxcbiAgICAgICAgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgIGxldCBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgICAgIGxldCBzZXNzaW9uID0gcGFydHNbMF1cbiAgICAgICAgICBsZXQgaGVhcnRiZWF0ID0gcGFyc2VJbnQocGFydHNbMV0pIC8gMiAqIDEwMDBcbiAgICAgICAgICBzZWxmLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYHdzczovLyR7c29ja2V0SG9zdH0vc29ja2V0LmlvLzEvd2Vic29ja2V0LyR7c2Vzc2lvbn1gKVxuICAgICAgICAgIGxldCBoZWFydGJlYXRJbnRlcnZhbCA9IG51bGxcbiAgICAgICAgICBzZWxmLnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgc2VsZi5jb25uZWN0aW5nID0gZmFsc2VcbiAgICAgICAgICAgIGlmIChzZWxmLm9ub3Blbikge1xuICAgICAgICAgICAgICBzZWxmLm9ub3BlbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFydGJlYXRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZWxmLnNvY2tldC5zZW5kKCcyOjo6JylcbiAgICAgICAgICAgIH0sIGhlYXJ0YmVhdClcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChoZWFydGJlYXRJbnRlcnZhbClcbiAgICAgICAgICAgIGlmIChzZWxmLm9uY2xvc2UpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbmNsb3NlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlUGFydHMgPSBldmVudC5kYXRhLnNwbGl0KCc6JylcbiAgICAgICAgICAgIGxldCBjb2RlID0gcGFyc2VJbnQobWVzc2FnZVBhcnRzWzBdKVxuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDIpIHtcbiAgICAgICAgICAgICAgc2VsZi5zb2NrZXQuc2VuZCgnMjo6JylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNSkge1xuICAgICAgICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZVBhcnRzWzFdXG4gICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlUGFydHMuc2xpY2UoMykuam9pbignOicpKVxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZUV2ZW50ID0gZGF0YS5uYW1lXG4gICAgICAgICAgICAgIGxldCBhcmdzID0gZGF0YS5hcmdzXG4gICAgICAgICAgICAgIGlmIChtZXNzYWdlSWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNvY2tldC5zZW5kKGA2Ojo6JHttZXNzYWdlSWR9YClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoc2VsZi5vbm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9ubWVzc2FnZShtZXNzYWdlRXZlbnQsIGFyZ3MpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU29ja2V0IGVycm9yOiAke2V2ZW50LmRhdGF9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBzZWxmLnNvY2tldC5jbG9zZSgpXG4gICAgICAgICAgICBpZiAoc2VsZi5vbmVycm9yKSB7XG4gICAgICAgICAgICAgIHNlbGYub25lcnJvcihldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIG51bGwsIGZhbHNlLCB0cnVlIC8vIG51bGwsIHF1ZXVlZCwgcGxhaW5UZXh0XG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGdpdmVuIGV2ZW50IHdpdGggYXJndW1lbnRzIHRvIHRoZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBldmVudC5cbiAgICogQHBhcmFtICB7Kn0gYXJncyBBcmd1bWVudHMgdG8gc2VuZC5cbiAgICovXG4gIHNlbmQobmFtZSwgYXJncykge1xuICAgIGlmICghdGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogU29ja2V0IGlzIG5vdCBjb25uZWN0ZWQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgYXJnc0pzb24gPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuYW1lLFxuICAgICAgYXJnc1xuICAgIH0pXG4gICAgdGhpcy5zb2NrZXQuc2VuZChgNTo6OiR7YXJnc0pzb259YClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NvY2tldElvQ2xpZW50LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19Qcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1NldENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N0YWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5U29tZS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzSW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0tleWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbm9kZVV0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0NsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0hhcy5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja1NldC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==