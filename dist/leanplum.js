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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(20);

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

    SDK_VERSION: '1.2.4',

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
      WEB_PUSH_SUBSCRIPTION: 'webPushSubscription'
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

var baseIsNative = __webpack_require__(51),
    getValue = __webpack_require__(64);

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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(12), __webpack_require__(17), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

var listCacheClear = __webpack_require__(74),
    listCacheDelete = __webpack_require__(75),
    listCacheGet = __webpack_require__(76),
    listCacheHas = __webpack_require__(77),
    listCacheSet = __webpack_require__(78);

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

var eq = __webpack_require__(22);

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
    getRawTag = __webpack_require__(61),
    objectToString = __webpack_require__(87);

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

var isKeyable = __webpack_require__(71);

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
    }]);

    return InternalState;
  }();

  InternalState.devMode = false;
  InternalState.variablesChangedHandlers = [];
  InternalState.hasReceivedDiffs = false;
  InternalState.startHandlers = [];
  InternalState.hasStarted = false;
  InternalState.startSuccessful = false;
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
    }]);

    return VarCache;
  }();

  VarCache.diffs = undefined;
  VarCache.variables = null;
  VarCache.variants = [];
  VarCache.merged = undefined;
  VarCache.onUpdate = undefined;
  VarCache.token = '';
  VarCache.actionMetadata = {};
  exports.default = VarCache;
  module.exports = exports['default'];
});

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(79),
    mapCacheDelete = __webpack_require__(80),
    mapCacheGet = __webpack_require__(81),
    mapCacheHas = __webpack_require__(82),
    mapCacheSet = __webpack_require__(83);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(39),
    arraySome = __webpack_require__(46),
    cacheHas = __webpack_require__(56);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(102)))

/***/ }),
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0),
    stubFalse = __webpack_require__(101);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(49);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObject = __webpack_require__(27);

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
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(52),
    baseUnary = __webpack_require__(55),
    nodeUtil = __webpack_require__(86);

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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(34), __webpack_require__(16), __webpack_require__(4), __webpack_require__(24)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./ArgsBuilder'), require('./SocketIoClient'), require('./VarCache'), require('./LeanplumRequest'), require('lodash/isEqual'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.ArgsBuilder, global.SocketIoClient, global.VarCache, global.LeanplumRequest, global.isEqual);
    global.LeanplumSocket = mod.exports;
  }
})(this, function (module, exports, _Constants, _ArgsBuilder, _SocketIoClient, _VarCache, _LeanplumRequest, _isEqual) {
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(24), __webpack_require__(5), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(12), __webpack_require__(3), __webpack_require__(30), __webpack_require__(32), __webpack_require__(5), __webpack_require__(16), __webpack_require__(4), __webpack_require__(31)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./Constants'), require('./InternalState'), require('./ArgsBuilder'), require('./BrowserDetector'), require('./PushManager'), require('./LocalStorageManager'), require('./VarCache'), require('./LeanplumRequest'), require('./LeanplumSocket'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.Constants, global.InternalState, global.ArgsBuilder, global.BrowserDetector, global.PushManager, global.LocalStorageManager, global.VarCache, global.LeanplumRequest, global.LeanplumSocket);
    global.Leanplum = mod.exports;
  }
})(this, function (module, exports, _Constants, _InternalState, _ArgsBuilder, _BrowserDetector, _PushManager, _LocalStorageManager, _VarCache, _LeanplumRequest, _LeanplumSocket) {
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
        _LeanplumRequest2.default.request(_Constants2.default.METHODS.GET_VARS, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false), {
          queued: false,
          sendNow: true,
          response: function response(_response) {
            var getVarsResponse = _LeanplumRequest2.default.getLastResponse(_response);
            var isSuccess = _LeanplumRequest2.default.isResponseSuccess(getVarsResponse);
            if (isSuccess) {
              _VarCache2.default.applyDiffs(getVarsResponse[_Constants2.default.KEYS.VARS], getVarsResponse[_Constants2.default.KEYS.VARIANTS], getVarsResponse[_Constants2.default.KEYS.ACTION_METADATA]);
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

        var args = new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.USER_ATTRIBUTES, JSON.stringify(userAttributes)).add(_Constants2.default.PARAMS.COUNTRY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.REGION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.CITY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.LOCATION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.SYSTEM_NAME, Leanplum._systemName || _browserDetector.OS).add(_Constants2.default.PARAMS.SYSTEM_VERSION, (Leanplum._systemVersion || '').toString()).add(_Constants2.default.PARAMS.BROWSER_NAME, _browserDetector.browser).add(_Constants2.default.PARAMS.BROWSER_VERSION, _browserDetector.version.toString()).add(_Constants2.default.PARAMS.LOCALE, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.DEVICE_NAME, Leanplum._deviceName || _browserDetector.browser + ' ' + _browserDetector.version).add(_Constants2.default.PARAMS.DEVICE_MODEL, Leanplum._deviceModel || 'Web Browser').add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false);

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
              _VarCache2.default.token = startResponse[_Constants2.default.KEYS.TOKEN];
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
    }]);

    return Leanplum;
  }();

  exports.default = Leanplum;
  module.exports = exports['default'];
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(65),
    hashDelete = __webpack_require__(66),
    hashGet = __webpack_require__(67),
    hashHas = __webpack_require__(68),
    hashSet = __webpack_require__(69);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(18),
    setCacheAdd = __webpack_require__(89),
    setCacheHas = __webpack_require__(90);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    stackClear = __webpack_require__(92),
    stackDelete = __webpack_require__(93),
    stackGet = __webpack_require__(94),
    stackHas = __webpack_require__(95),
    stackSet = __webpack_require__(96);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(54),
    isArguments = __webpack_require__(97),
    isArray = __webpack_require__(15),
    isBuffer = __webpack_require__(23),
    isIndex = __webpack_require__(70),
    isTypedArray = __webpack_require__(28);

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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(45),
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(50),
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(40),
    equalArrays = __webpack_require__(19),
    equalByTag = __webpack_require__(58),
    equalObjects = __webpack_require__(59),
    getTag = __webpack_require__(63),
    isArray = __webpack_require__(15),
    isBuffer = __webpack_require__(23),
    isTypedArray = __webpack_require__(28);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(25),
    isMasked = __webpack_require__(72),
    isObject = __webpack_require__(27),
    toSource = __webpack_require__(21);

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isLength = __webpack_require__(26),
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(73),
    nativeKeys = __webpack_require__(85);

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
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    Uint8Array = __webpack_require__(41),
    eq = __webpack_require__(22),
    equalArrays = __webpack_require__(19),
    mapToArray = __webpack_require__(84),
    setToArray = __webpack_require__(91);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(60);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(47),
    getSymbols = __webpack_require__(62),
    keys = __webpack_require__(99);

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
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(43),
    stubArray = __webpack_require__(100);

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(35),
    Map = __webpack_require__(13),
    Promise = __webpack_require__(37),
    Set = __webpack_require__(38),
    WeakMap = __webpack_require__(42),
    baseGetTag = __webpack_require__(8),
    toSource = __webpack_require__(21);

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
/* 64 */
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
/* 65 */
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
/* 66 */
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
/* 67 */
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
/* 68 */
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
/* 69 */
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
/* 70 */
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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(57);

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
/* 73 */
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
/* 74 */
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
/* 75 */
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
/* 76 */
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
/* 77 */
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
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(36),
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
/* 80 */
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
/* 81 */
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
/* 82 */
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
/* 83 */
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
/* 84 */
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(88);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(20);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)(module)))

/***/ }),
/* 87 */
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
/* 88 */
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
/* 89 */
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
/* 90 */
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
/* 91 */
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
/* 92 */
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
/* 93 */
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
/* 94 */
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
/* 95 */
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    Map = __webpack_require__(13),
    MapCache = __webpack_require__(18);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(48),
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(25),
    isLength = __webpack_require__(26);

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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(44),
    baseKeys = __webpack_require__(53),
    isArrayLike = __webpack_require__(98);

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
/* 100 */
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
/* 101 */
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
/* 102 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzNmEyZmJiMjc4OWM1YzczOGVjYyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnRlcm5hbFN0YXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9WYXJDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jyb3dzZXJEZXRlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGVhbnBsdW1Tb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1B1c2hNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWFucGx1bS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU29ja2V0SW9DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIk1FVEhPRFMiLCJTVEFSVCIsIlNUT1AiLCJBRFZBTkNFIiwiVFJBQ0siLCJQQVVTRV9TRVNTSU9OIiwiUkVTVU1FX1NFU1NJT04iLCJQQVVTRV9TVEFURSIsIlJFU1VNRV9TVEFURSIsIkRPV05MT0FEX0ZJTEUiLCJNVUxUSSIsIlNFVF9WQVJTIiwiR0VUX1ZBUlMiLCJTRVRfVVNFUl9BVFRSSUJVVEVTIiwiU0VUX0RFVklDRV9BVFRSSUJVVEVTIiwiVVBMT0FEX0ZJTEUiLCJSRUdJU1RFUl9ERVZJQ0UiLCJTREtfVkVSU0lPTiIsIkNMSUVOVCIsIlBBUkFNUyIsIkFDVElPTiIsIkFQUF9JRCIsIkNMSUVOVF9LRVkiLCJERVZJQ0VfSUQiLCJVU0VSX0lEIiwiTkVXX1VTRVJfSUQiLCJERVZfTU9ERSIsIlZFUlNJT05fTkFNRSIsIlNZU1RFTV9OQU1FIiwiU1lTVEVNX1ZFUlNJT04iLCJCUk9XU0VSX05BTUUiLCJCUk9XU0VSX1ZFUlNJT04iLCJERVZJQ0VfTkFNRSIsIkRFVklDRV9NT0RFTCIsIlVTRVJfQVRUUklCVVRFUyIsIkxPQ0FMRSIsIkNPVU5UUlkiLCJSRUdJT04iLCJDSVRZIiwiTE9DQVRJT04iLCJTVEFURSIsIklORk8iLCJFVkVOVCIsIlZBTFVFIiwiRklMRU5BTUUiLCJUSU1FIiwiREFUQSIsIlZBUlMiLCJGSUxFIiwiU0laRSIsIlZBUklBVElPTiIsIkhBU0giLCJFTUFJTCIsIlZBUklBQkxFUyIsIklOQ0xVREVfREVGQVVMVFMiLCJXRUJfUFVTSF9TVUJTQ1JJUFRJT04iLCJLRVlTIiwiSVNfUkVHSVNURVJFRCIsIkxBVEVTVF9WRVJTSU9OIiwiVkFSSUFOVFMiLCJBQ1RJT05fTUVUQURBVEEiLCJUT0tFTiIsIkRFRkFVTFRfS0VZUyIsIkNPVU5UIiwiSVRFTSIsIlBVU0hfU1VCU0NSSVBUSU9OIiwiVkFMVUVTIiwiREVURUNUIiwiQXJnc0J1aWxkZXIiLCJhcmdTdHJpbmciLCJhcmdWYWx1ZXMiLCJrZXkiLCJ2YWx1ZSIsImVuY29kZWRVcmlDb21wb25lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJib2R5IiwiX2JvZHkiLCJhcHBJZCIsImNsaWVudEtleSIsImFkZCIsIkNvbnN0YW50cyIsImxhc3RSZXF1ZXN0VGltZSIsInVuZGVmaW5lZCIsImNvb2xkb3duVGltZW91dCIsIkxlYW5wbHVtUmVxdWVzdCIsImFjdGlvbiIsInBhcmFtcyIsIm9wdGlvbnMiLCJkZXZpY2VJZCIsIkxvY2FsU3RvcmFnZU1hbmFnZXIiLCJnZXRGcm9tTG9jYWxTdG9yYWdlIiwiaWQiLCJwb3NzaWJsZSIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzYXZlVG9Mb2NhbFN0b3JhZ2UiLCJ1c2VySWQiLCJhcmdzQnVpbGRlciIsImF0dGFjaEFwaUtleXMiLCJ2ZXJzaW9uTmFtZSIsIkludGVybmFsU3RhdGUiLCJkZXZNb2RlIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImVycm9yIiwiZXJyIiwiY29uc29sZSIsIk5ldHdvcmsiLCJhamF4IiwiYXBpUGF0aCIsImJ1aWxkIiwicXVldWVkIiwic2VuZE5vdyIsImJhdGNoRW5hYmxlZCIsInNlbmRVbnNlbnRSZXF1ZXN0cyIsInJlcXVlc3RzVG9TZW5kIiwicG9wVW5zZW50UmVxdWVzdHMiLCJyZXF1ZXN0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtdWx0aVJlcXVlc3RBcmdzIiwiYmF0Y2hDb29sZG93biIsIm5vdyIsInNldFRpbWVvdXQiLCJzYXZlUmVxdWVzdEZvckxhdGVyIiwiYnVpbGREaWN0Iiwic2Vjb25kcyIsInNldE5ldHdvcmtUaW1lb3V0IiwiYXJncyIsImNvdW50IiwiaXRlbUtleSIsInJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UiLCJyZXF1ZXN0QXJncyIsInBhcnNlIiwicHVzaCIsImlnbm9yZWQiLCJpbmRleCIsIm51bVJlc3BvbnNlcyIsImdldFJlc3BvbnNlQXQiLCJtZXNzYWdlIiwibG9jYWxTdG9yYWdlRW5hYmxlZCIsImFsdGVybmF0ZUxvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImUiLCJyZW1vdmVJdGVtIiwiaGFuZGxlciIsInN0YXJ0SGFuZGxlcnMiLCJoYXNTdGFydGVkIiwic3RhcnRTdWNjZXNzZnVsIiwiaWR4IiwiaW5kZXhPZiIsInNwbGljZSIsInZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycyIsImhhc1JlY2VpdmVkRGlmZnMiLCJWYXJDYWNoZSIsImRpZmZzIiwidmFyaWFudHMiLCJhY3Rpb25NZXRhZGF0YSIsIm1lcmdlZCIsIm1lcmdlSGVscGVyIiwidmFyaWFibGVzIiwic2F2ZURpZmZzIiwib25VcGRhdGUiLCJhcHBseURpZmZzIiwidG9rZW4iLCJsb2ciLCJyZXF1ZXN0IiwidmFycyIsImRpZmYiLCJvYmpJdGVyYXRvciIsIm9iaiIsImYiLCJBcnJheSIsImF0dHIiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ2YXJzSXRlcmF0b3IiLCJkaWZmSXRlcmF0b3IiLCJpc0FycmF5IiwiYXR0cmlidXRlIiwidmFyU3Vic2NyaXB0Iiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJzdWJzY3JpcHQiLCJkaWZmVmFsdWUiLCJyZXF1ZXN0UXVldWUiLCJuZXR3b3JrVGltZW91dFNlY29uZHMiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwicGxhaW5UZXh0IiwicnVubmluZ1JlcXVlc3QiLCJlbnF1ZXVlUmVxdWVzdCIsImFyZ3VtZW50cyIsIlhEb21haW5SZXF1ZXN0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsIlJlZmxlY3QiLCJhcHBseSIsImFqYXhJRTgiLCJoYW5kbGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmFuQ2FsbGJhY2siLCJyZXNwb25zZVRleHQiLCJzdGF0dXMiLCJkZXF1ZXVlUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImFib3J0IiwieGRyIiwib25sb2FkIiwib25lcnJvciIsIm9udGltZW91dCIsIm9ucHJvZ3Jlc3MiLCJ0aW1lb3V0IiwicmVxdWVzdEFyZ3VtZW50cyIsInNoaWZ0IiwiZGF0YUJyb3dzZXIiLCJzdHJpbmciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdWJTdHJpbmciLCJpZGVudGl0eSIsInZlcnNpb25TZWFyY2giLCJ2ZW5kb3IiLCJwcm9wIiwid2luZG93Iiwib3BlcmEiLCJkYXRhT1MiLCJwbGF0Zm9ybSIsIkJyb3dzZXJEZXRlY3RvciIsImJyb3dzZXIiLCJfc2VhcmNoU3RyaW5nIiwidmVyc2lvbiIsIl9zZWFyY2hWZXJzaW9uIiwiYXBwVmVyc2lvbiIsIk9TIiwiZGF0YVN0cmluZyIsImRhdGFQcm9wIiwidmVyc2lvblNlYXJjaFN0cmluZyIsInBhcnNlRmxvYXQiLCJMZWFucGx1bVNvY2tldCIsIldlYlNvY2tldCIsImNsaWVudCIsIlNvY2tldElvQ2xpZW50IiwiYXV0aFNlbnQiLCJvbm9wZW4iLCJldmVudCIsIm9ubWVzc2FnZSIsImdldFZhcnNSZXNwb25zZSIsImdldExhc3RSZXNwb25zZSIsInZhbHVlcyIsInNlbmRWYXJpYWJsZXMiLCJhbGVydCIsImVtYWlsIiwib25jbG9zZSIsImNvbm5lY3QiLCJzb2NrZXRIb3N0Iiwic2V0SW50ZXJ2YWwiLCJjb25uZWN0ZWQiLCJjb25uZWN0aW5nIiwiQVBQTElDQVRJT05fU0VSVkVSX1BVQkxJQ19LRVkiLCJpc1N1YnNjcmliZWQiLCJzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uIiwiUHVzaE1hbmFnZXIiLCJzZXJ2aWNlV29ya2VyIiwiaXNXZWJQdXNoU3VwcG9ydGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJnZXRTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uIiwidGhlbiIsInJlZ2lzdHJhdGlvbiIsInB1c2hNYW5hZ2VyIiwiZ2V0U3Vic2NyaXB0aW9uIiwic3Vic2NyaXB0aW9uIiwidXBkYXRlTmV3U3Vic2NyaXB0aW9uT25TZXJ2ZXIiLCJzZXJ2aWNlV29ya2VyVXJsIiwiY2FsbGJhY2siLCJyZWdpc3RlciIsImNhdGNoIiwiYXBwbGljYXRpb25TZXJ2ZXJLZXkiLCJ1cmxCNjRUb1VpbnQ4QXJyYXkiLCJyZWplY3QiLCJzdWJzY3JpYmUiLCJ1c2VyVmlzaWJsZU9ubHkiLCJpc1dlYlB1c2hTdWJzY3JpYmVkIiwic3Vic2NyaWJlZCIsInVuc3Vic2NyaWJlIiwiZ2V0UmVnaXN0cmF0aW9uIiwiYmFzZTY0U3RyaW5nIiwicGFkZGluZyIsInJlcGVhdCIsImJhc2U2NCIsInJlcGxhY2UiLCJyYXdEYXRhIiwiYXRvYiIsIm91dHB1dEFycmF5IiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJnZXRLZXkiLCJhdXRoIiwia2V5QXNjaWkiLCJidG9hIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXV0aEFzY2lpIiwiZW5kcG9pbnQiLCJwcmVwYXJlZFN1YnNjcmlwdGlvbiIsInByZXBhcmVTdWJzY3JpcHRpb24iLCJwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZyIsImV4aXN0aW5nU3Vic2NyaXB0aW9uU3RyaW5nIiwic2V0U3Vic2NyaXB0aW9uIiwiX2Jyb3dzZXJEZXRlY3RvciIsIkxlYW5wbHVtIiwiX2VtYWlsIiwiYWNjZXNzS2V5IiwiaG9zdCIsImRldmljZU5hbWUiLCJfZGV2aWNlTmFtZSIsImRldmljZU1vZGVsIiwiX2RldmljZU1vZGVsIiwic3lzdGVtTmFtZSIsIl9zeXN0ZW1OYW1lIiwic3lzdGVtVmVyc2lvbiIsIl9zeXN0ZW1WZXJzaW9uIiwic2V0VmFyaWFibGVzIiwiY29vbGRvd25TZWNvbmRzIiwiZ2V0VmFyaWFibGVzIiwiY3VycmVudCIsImFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyIiwiYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIiLCJyZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlciIsInJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyIiwiaXNTdWNjZXNzIiwiaXNSZXNwb25zZVN1Y2Nlc3MiLCJ1c2VyQXR0cmlidXRlcyIsInRyaWdnZXJWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMiLCJzdGFydFJlc3BvbnNlIiwibGF0ZXN0VmVyc2lvbiIsImxvYWREaWZmcyIsInRyaWdnZXJTdGFydEhhbmRsZXJzIiwic2V0VXNlckF0dHJpYnV0ZXMiLCJpbmZvIiwic3RhdGUiLCJzdWJzY3JpYmVVc2VyIiwidW5zdWJzY3JpYmVVc2VyIiwic2VsZiIsIlJlcXVlc3QiLCJsaW5lIiwicGFydHMiLCJzcGxpdCIsInNlc3Npb24iLCJoZWFydGJlYXQiLCJzb2NrZXQiLCJoZWFydGJlYXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtZXNzYWdlUGFydHMiLCJjb2RlIiwibWVzc2FnZUlkIiwic2xpY2UiLCJqb2luIiwibWVzc2FnZUV2ZW50IiwibmFtZSIsImNsb3NlIiwiYXJnc0pzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1NlO0FBQ2JBLGFBQVM7QUFDUEMsYUFBTyxPQURBO0FBRVBDLFlBQU0sTUFGQztBQUdQQyxlQUFTLFNBSEY7QUFJUEMsYUFBTyxPQUpBO0FBS1BDLHFCQUFlLGNBTFI7QUFNUEMsc0JBQWdCLGVBTlQ7QUFPUEMsbUJBQWEsWUFQTjtBQVFQQyxvQkFBYyxhQVJQO0FBU1BDLHFCQUFlLGNBVFI7QUFVUEMsYUFBTyxPQVZBO0FBV1BDLGdCQUFVLFNBWEg7QUFZUEMsZ0JBQVUsU0FaSDtBQWFQQywyQkFBcUIsbUJBYmQ7QUFjUEMsNkJBQXVCLHFCQWRoQjtBQWVQQyxtQkFBYSxZQWZOO0FBZ0JQQyx1QkFBaUI7QUFoQlYsS0FESTs7QUFvQmJDLGlCQUFhLE9BcEJBOztBQXNCYkMsWUFBUSxJQXRCSzs7QUF3QmJDLFlBQVE7QUFDTkMsY0FBUSxRQURGO0FBRU5DLGNBQVEsT0FGRjtBQUdOSCxjQUFRLFFBSEY7QUFJTkksa0JBQVksV0FKTjtBQUtOQyxpQkFBVyxVQUxMO0FBTU5OLG1CQUFhLFlBTlA7QUFPTk8sZUFBUyxRQVBIO0FBUU5DLG1CQUFhLFdBUlA7QUFTTkMsZ0JBQVUsU0FUSjtBQVVOQyxvQkFBYyxhQVZSO0FBV05DLG1CQUFhLFlBWFA7QUFZTkMsc0JBQWdCLGVBWlY7QUFhTkMsb0JBQWMsYUFiUjtBQWNOQyx1QkFBaUIsZ0JBZFg7QUFlTkMsbUJBQWEsWUFmUDtBQWdCTkMsb0JBQWMsYUFoQlI7QUFpQk5DLHVCQUFpQixnQkFqQlg7QUFrQk5DLGNBQVEsUUFsQkY7QUFtQk5DLGVBQVMsU0FuQkg7QUFvQk5DLGNBQVEsUUFwQkY7QUFxQk5DLFlBQU0sTUFyQkE7QUFzQk5DLGdCQUFVLFVBdEJKO0FBdUJOQyxhQUFPLE9BdkJEO0FBd0JOQyxZQUFNLE1BeEJBO0FBeUJOQyxhQUFPLE9BekJEO0FBMEJOQyxhQUFPLE9BMUJEO0FBMkJOQyxnQkFBVSxVQTNCSjtBQTRCTkMsWUFBTSxNQTVCQTtBQTZCTkMsWUFBTSxNQTdCQTtBQThCTkMsWUFBTSxNQTlCQTtBQStCTkMsWUFBTSxNQS9CQTtBQWdDTkMsWUFBTSxNQWhDQTtBQWlDTkMsaUJBQVcsV0FqQ0w7QUFrQ05DLFlBQU0sTUFsQ0E7QUFtQ05DLGFBQU8sT0FuQ0Q7QUFvQ05DLGlCQUFXLE1BcENMO0FBcUNObEMsY0FBUSxRQXJDRjtBQXNDTm1DLHdCQUFrQixpQkF0Q1o7QUF1Q05DLDZCQUF1QjtBQXZDakIsS0F4Qks7O0FBa0ViQyxVQUFNO0FBQ0pDLHFCQUFlLGNBRFg7QUFFSkMsc0JBQWdCLGVBRlo7QUFHSlgsWUFBTSxNQUhGO0FBSUpZLGdCQUFVLFVBSk47QUFLSkMsdUJBQWlCLGdCQUxiO0FBTUpDLGFBQU87QUFOSCxLQWxFTzs7QUEyRWJDLGtCQUFjO0FBQ1pDLGFBQU8scUJBREs7QUFFWkMsWUFBTSxzQkFGTTtBQUdaWCxpQkFBVyxzQkFIQztBQUlaTSxnQkFBVSxxQkFKRTtBQUtaQyx1QkFBaUIsNEJBTEw7QUFNWkMsYUFBTyxrQkFOSztBQU9adEMsaUJBQVcsc0JBUEM7QUFRWkMsZUFBUyxvQkFSRztBQVNaeUMseUJBQW1CO0FBVFAsS0EzRUQ7O0FBdUZiQyxZQUFRO0FBQ05DLGNBQVE7QUFERjtBQXZGSyxHOzs7Ozs7OztBQ2pCZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DT3FCQyxXO0FBQ25COzs7QUFHQSwyQkFBYztBQUFBOztBQUNaLFdBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxXQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7MEJBTUlDLEcsRUFBS0MsSyxFQUFPO0FBQ2QsWUFBSSxPQUFPQSxLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO0FBQ2hDLGlCQUFPLElBQVA7QUFDRDtBQUNELFlBQUksS0FBS0gsU0FBVCxFQUFvQjtBQUNsQixlQUFLQSxTQUFMLElBQWtCLEdBQWxCO0FBQ0Q7QUFDRCxZQUFJSSxzQkFBc0JDLG1CQUFtQkYsS0FBbkIsQ0FBMUI7QUFDQSxhQUFLSCxTQUFMLElBQXFCRSxHQUFyQixTQUE0QkUsbUJBQTVCO0FBQ0EsYUFBS0gsU0FBTCxDQUFlQyxHQUFmLElBQXNCQyxLQUF0QjtBQUNBLGVBQU8sSUFBUDtBQUNEOzs7MkJBUUlHLEssRUFBTTtBQUNULFlBQUlBLEtBQUosRUFBVTtBQUNSLGVBQUtDLEtBQUwsR0FBYUQsS0FBYjtBQUNBLGlCQUFPLElBQVA7QUFDRDtBQUNELGVBQU8sS0FBS0MsS0FBWjtBQUNEOzs7b0NBUWFDLEssRUFBT0MsUyxFQUFXO0FBQzlCLGVBQU8sS0FBS0MsR0FBTCxDQUFTQyxvQkFBVTdELE1BQVYsQ0FBaUJFLE1BQTFCLEVBQWtDd0QsS0FBbEMsRUFDRkUsR0FERSxDQUNFQyxvQkFBVTdELE1BQVYsQ0FBaUJELE1BRG5CLEVBQzJCOEQsb0JBQVU5RCxNQURyQyxFQUVGNkQsR0FGRSxDQUVFQyxvQkFBVTdELE1BQVYsQ0FBaUJHLFVBRm5CLEVBRStCd0QsU0FGL0IsQ0FBUDtBQUdEOzs7OEJBTU87QUFDTixlQUFPLEtBQUtULFNBQVo7QUFDRDs7O2tDQU1XO0FBQ1YsZUFBTyxLQUFLQyxTQUFaO0FBQ0Q7Ozs7OztvQkFwRWtCRixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJCLE1BQUlhLGtCQUFrQkMsU0FBdEI7QUFDQSxNQUFJQyxrQkFBa0IsSUFBdEI7O01BRXFCQyxlOzs7Ozs7OzhCQWtCSkMsTSxFQUFRQyxNLEVBQVFDLE8sRUFBUztBQUN0Q0Esa0JBQVVBLFdBQVcsRUFBckI7QUFDQUQsaUJBQVNBLFVBQVUsSUFBSWxCLHFCQUFKLEVBQW5COztBQUVBO0FBQ0EsWUFBSSxDQUFDZ0IsZ0JBQWdCSSxRQUFyQixFQUErQjtBQUM3QkosMEJBQWdCSSxRQUFoQixHQUNJQyw4QkFBb0JDLG1CQUFwQixDQUF3Q1Ysb0JBQVVsQixZQUFWLENBQXVCdkMsU0FBL0QsQ0FESjtBQUVEO0FBQ0QsWUFBSSxDQUFDNkQsZ0JBQWdCSSxRQUFyQixFQUErQjtBQUM3QixjQUFJRyxLQUFLLEVBQVQ7QUFDQSxjQUFJQyxXQUFXLHlEQUNYLFlBREo7QUFFQSxlQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxFQUFwQixFQUF3QkEsR0FBeEIsRUFBNkI7QUFDM0JGLGtCQUFNQyxTQUFTRSxNQUFULENBQWdCQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0JMLFNBQVNNLE1BQXBDLENBQWhCLENBQU47QUFDRDtBQUNEZCwwQkFBZ0JJLFFBQWhCLEdBQTJCRyxFQUEzQjtBQUNBRix3Q0FBb0JVLGtCQUFwQixDQUF1Q25CLG9CQUFVbEIsWUFBVixDQUF1QnZDLFNBQTlELEVBQXlFb0UsRUFBekU7QUFDRDtBQUNELFlBQUksQ0FBQ1AsZ0JBQWdCZ0IsTUFBckIsRUFBNkI7QUFDM0JoQiwwQkFBZ0JnQixNQUFoQixHQUF5QlgsOEJBQW9CQyxtQkFBcEIsQ0FBd0NWLG9CQUFVbEIsWUFBVixDQUF1QnRDLE9BQS9ELENBQXpCO0FBQ0EsY0FBSSxDQUFDNEQsZ0JBQWdCZ0IsTUFBckIsRUFBNkI7QUFDM0JoQiw0QkFBZ0JnQixNQUFoQixHQUF5QmhCLGdCQUFnQkksUUFBekM7QUFDRDtBQUNGO0FBQ0RDLHNDQUFvQlUsa0JBQXBCLENBQXVDbkIsb0JBQVVsQixZQUFWLENBQXVCdEMsT0FBOUQsRUFBdUU0RCxnQkFBZ0JnQixNQUF2Rjs7QUFFQSxZQUFJQyxjQUFjZixPQUNiZ0IsYUFEYSxDQUNDbEIsZ0JBQWdCUCxLQURqQixFQUN3Qk8sZ0JBQWdCTixTQUR4QyxFQUViQyxHQUZhLENBRVRDLG9CQUFVN0QsTUFBVixDQUFpQkYsV0FGUixFQUVxQitELG9CQUFVL0QsV0FGL0IsRUFHYjhELEdBSGEsQ0FHVEMsb0JBQVU3RCxNQUFWLENBQWlCSSxTQUhSLEVBR21CNkQsZ0JBQWdCSSxRQUhuQyxFQUliVCxHQUphLENBSVRDLG9CQUFVN0QsTUFBVixDQUFpQkssT0FKUixFQUlpQjRELGdCQUFnQmdCLE1BSmpDLEVBS2JyQixHQUxhLENBS1RDLG9CQUFVN0QsTUFBVixDQUFpQkMsTUFMUixFQUtnQmlFLE1BTGhCLEVBTWJOLEdBTmEsQ0FNVEMsb0JBQVU3RCxNQUFWLENBQWlCUSxZQU5SLEVBTXNCeUQsZ0JBQWdCbUIsV0FOdEMsRUFPYnhCLEdBUGEsQ0FPVEMsb0JBQVU3RCxNQUFWLENBQWlCTyxRQVBSLEVBT2tCOEUsd0JBQWNDLE9BUGhDLEVBUWIxQixHQVJhLENBUVRDLG9CQUFVN0QsTUFBVixDQUFpQjBCLElBUlIsRUFRYyxDQUFDLElBQUk2RCxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsSUFBeEIsRUFBOEJDLFFBQTlCLEVBUmQsQ0FBbEI7QUFTQSxZQUFJQyxVQUFVdEIsUUFBUXNCLE9BQVIsSUFBbUJ0QixRQUFRdUIsUUFBekM7QUFDQSxZQUFJQyxRQUFReEIsUUFBUXdCLEtBQVIsSUFBaUJ4QixRQUFRdUIsUUFBckM7O0FBRUEsWUFBSSxDQUFDMUIsZ0JBQWdCUCxLQUFqQixJQUEwQixDQUFDTyxnQkFBZ0JOLFNBQS9DLEVBQTBEO0FBQ3hELGNBQUlrQyxNQUFNLCtEQUNOLHNFQURNLEdBRU4sMkJBRko7QUFHQUMsa0JBQVFGLEtBQVIsQ0FBY0MsR0FBZDtBQUNBLGNBQUlELEtBQUosRUFBV0EsTUFBTUMsR0FBTjtBQUNYO0FBQ0Q7O0FBRUQsWUFBSTFCLE9BQU9YLElBQVAsRUFBSixFQUFtQjtBQUNqQnVDLDRCQUFRQyxJQUFSLENBQWEsTUFBYixFQUF3Qi9CLGdCQUFnQmdDLE9BQXhDLFNBQW1EZixZQUFZZ0IsS0FBWixFQUFuRCxFQUNJL0IsT0FBT1gsSUFBUCxFQURKLEVBQ21Ca0MsT0FEbkIsRUFDNEJFLEtBRDVCLEVBQ21DeEIsUUFBUStCLE1BRDNDO0FBRUE7QUFDRDs7QUFFRCxZQUFJQyxVQUFVZix3QkFBY0MsT0FBZCxJQUF5QmxCLFFBQVFnQyxPQUFqQyxJQUE0QyxDQUFDbkMsZ0JBQWdCb0MsWUFBM0U7O0FBRUEsWUFBSUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsR0FBVztBQUNsQyxjQUFJQyxpQkFBaUJ0QyxnQkFBZ0J1QyxpQkFBaEIsRUFBckI7QUFDQSxjQUFJRCxlQUFleEIsTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUM3QixnQkFBSTBCLGNBQWNDLEtBQUtDLFNBQUwsQ0FBZTtBQUMvQixzQkFBUUo7QUFEdUIsYUFBZixDQUFsQjtBQUdBLGdCQUFJSyxtQkFBbUIsSUFBSTNELHFCQUFKLEdBQ2xCa0MsYUFEa0IsQ0FDSmxCLGdCQUFnQlAsS0FEWixFQUNtQk8sZ0JBQWdCTixTQURuQyxFQUVsQkMsR0FGa0IsQ0FFZEMsb0JBQVU3RCxNQUFWLENBQWlCRixXQUZILEVBRWdCK0Qsb0JBQVUvRCxXQUYxQixFQUdsQjhELEdBSGtCLENBR2RDLG9CQUFVN0QsTUFBVixDQUFpQkMsTUFISCxFQUdXNEQsb0JBQVVoRixPQUFWLENBQWtCVSxLQUg3QixFQUlsQnFFLEdBSmtCLENBSWRDLG9CQUFVN0QsTUFBVixDQUFpQjBCLElBSkgsRUFJUyxDQUFDLElBQUk2RCxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsSUFBeEIsRUFBOEJDLFFBQTlCLEdBQXlDQSxRQUF6QyxFQUpULEVBS2xCUyxLQUxrQixFQUF2QjtBQU1BSCw4QkFBUUMsSUFBUixDQUFhLE1BQWIsRUFBd0IvQixnQkFBZ0JnQyxPQUF4QyxTQUFtRFcsZ0JBQW5ELEVBQXVFSCxXQUF2RSxFQUFvRmYsT0FBcEYsRUFBNkZFLEtBQTdGLEVBQ0l4QixRQUFRK0IsTUFEWjtBQUVEO0FBQ0YsU0FmRDs7QUFpQkE7QUFDQSxZQUFJLENBQUNDLE9BQUQsSUFBWW5DLGdCQUFnQjRDLGFBQWhDLEVBQStDO0FBQzdDLGNBQUlDLE1BQU0sSUFBSXZCLElBQUosR0FBV0MsT0FBWCxLQUF1QixJQUFqQztBQUNBLGNBQUksQ0FBQzFCLGVBQUQsSUFDQWdELE1BQU1oRCxlQUFOLElBQXlCRyxnQkFBZ0I0QyxhQUQ3QyxFQUM0RDtBQUMxRFQsc0JBQVUsSUFBVjtBQUNBdEMsOEJBQWtCZ0QsR0FBbEI7QUFDRCxXQUpELE1BSU8sSUFBSSxDQUFDOUMsZUFBTCxFQUFzQjtBQUMzQkEsOEJBQWtCK0MsV0FBVyxZQUFXO0FBQ3RDL0MsZ0NBQWtCLElBQWxCO0FBQ0FGLGdDQUFrQixJQUFJeUIsSUFBSixHQUFXQyxPQUFYLEtBQXVCLElBQXpDO0FBQ0FjO0FBQ0QsYUFKaUIsRUFJZixDQUFDckMsZ0JBQWdCNEMsYUFBaEIsSUFBaUNDLE1BQU1oRCxlQUF2QyxDQUFELElBQTRELElBSjdDLENBQWxCO0FBS0Q7QUFDRjs7QUFFREcsd0JBQWdCK0MsbUJBQWhCLENBQW9DOUIsWUFBWStCLFNBQVosRUFBcEM7QUFDQSxZQUFJYixPQUFKLEVBQWE7QUFDWEU7QUFDRDtBQUNGOzs7d0NBTXdCWSxPLEVBQVM7QUFDaENuQiwwQkFBUW9CLGlCQUFSLENBQTBCRCxPQUExQjtBQUNEOzs7MENBRTBCRSxJLEVBQU07QUFDL0IsWUFBSUMsUUFBUS9DLDhCQUFvQkMsbUJBQXBCLENBQXdDVixvQkFBVWxCLFlBQVYsQ0FBdUJDLEtBQS9ELEtBQXlFLENBQXJGO0FBQ0EsWUFBSTBFLFVBQVV6RCxvQkFBVWxCLFlBQVYsQ0FBdUJFLElBQXZCLEdBQThCd0UsS0FBNUM7QUFDQS9DLHNDQUFvQlUsa0JBQXBCLENBQXVDc0MsT0FBdkMsRUFBZ0RaLEtBQUtDLFNBQUwsQ0FBZVMsSUFBZixDQUFoRDtBQUNBQztBQUNBL0Msc0NBQW9CVSxrQkFBcEIsQ0FBdUNuQixvQkFBVWxCLFlBQVYsQ0FBdUJDLEtBQTlELEVBQXFFeUUsS0FBckU7QUFDRDs7OzBDQUUwQjtBQUN6QixZQUFJWixjQUFjLEVBQWxCO0FBQ0EsWUFBSVksUUFBUS9DLDhCQUFvQkMsbUJBQXBCLENBQXdDVixvQkFBVWxCLFlBQVYsQ0FBdUJDLEtBQS9ELEtBQXlFLENBQXJGO0FBQ0EwQixzQ0FBb0JpRCxzQkFBcEIsQ0FBMkMxRCxvQkFBVWxCLFlBQVYsQ0FBdUJDLEtBQWxFO0FBQ0EsYUFBSyxJQUFJOEIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMkMsS0FBcEIsRUFBMkIzQyxHQUEzQixFQUFnQztBQUM5QixjQUFJNEMsVUFBVXpELG9CQUFVbEIsWUFBVixDQUF1QkUsSUFBdkIsR0FBOEI2QixDQUE1QztBQUNBLGNBQUk7QUFDRixnQkFBSThDLGNBQWNkLEtBQUtlLEtBQUwsQ0FBV25ELDhCQUFvQkMsbUJBQXBCLENBQXdDK0MsT0FBeEMsQ0FBWCxDQUFsQjtBQUNBYix3QkFBWWlCLElBQVosQ0FBaUJGLFdBQWpCO0FBQ0QsV0FIRCxDQUdFLE9BQU9HLE9BQVAsRUFBZ0IsQ0FBRTtBQUNuQjtBQUNEckQsd0NBQW9CaUQsc0JBQXBCLENBQTJDRCxPQUEzQztBQUNEO0FBQ0QsZUFBT2IsV0FBUDtBQUNEOzs7bUNBSW1CZCxRLEVBQVU7QUFDNUIsWUFBSSxDQUFDQSxRQUFELElBQWEsQ0FBQ0EsU0FBU0EsUUFBM0IsRUFBcUM7QUFDbkMsaUJBQU8sQ0FBUDtBQUNEO0FBQ0QsZUFBT0EsU0FBU0EsUUFBVCxDQUFrQlosTUFBekI7QUFDRDs7O29DQUVvQlksUSxFQUFVaUMsSyxFQUFPO0FBQ3BDLFlBQUksQ0FBQ2pDLFFBQUQsSUFBYSxDQUFDQSxTQUFTQSxRQUEzQixFQUFxQztBQUNuQyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxlQUFPQSxTQUFTQSxRQUFULENBQWtCaUMsS0FBbEIsQ0FBUDtBQUNEOzs7c0NBRXNCakMsUSxFQUFVO0FBQy9CLFlBQUkwQixRQUFRcEQsZ0JBQWdCNEQsWUFBaEIsQ0FBNkJsQyxRQUE3QixDQUFaO0FBQ0EsWUFBSTBCLFFBQVEsQ0FBWixFQUFlO0FBQ2IsaUJBQU9wRCxnQkFBZ0I2RCxhQUFoQixDQUE4Qm5DLFFBQTlCLEVBQXdDMEIsUUFBUSxDQUFoRCxDQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7Ozt3Q0FFd0IxQixRLEVBQVU7QUFDakMsWUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYixpQkFBTyxLQUFQO0FBQ0Q7QUFDRCxlQUFPLENBQUMsQ0FBQ0EsU0FBU0QsT0FBbEI7QUFDRDs7O3VDQUV1QkMsUSxFQUFVO0FBQ2hDLFlBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2IsaUJBQU8sSUFBUDtBQUNEO0FBQ0QsWUFBSUMsUUFBUUQsU0FBU0MsS0FBckI7QUFDQSxZQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLGlCQUFPLElBQVA7QUFDRDtBQUNELGVBQU9BLE1BQU1tQyxPQUFiO0FBQ0Q7Ozs7OztBQTFMa0I5RCxpQixDQUVaZ0MsTyxHQUFVLDhCO0FBRkVoQyxpQixDQUdab0MsWSxHQUFlLEk7QUFISHBDLGlCLENBSVo0QyxhLEdBQWdCLEM7b0JBSko1QyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsTUFBSStELDRCQUFKO0FBQ0EsTUFBSUMsd0JBQXdCLEVBQTVCOztNQUVxQjNELG1COzs7Ozs7OzBDQUNRbEIsRyxFQUFLO0FBQzlCLFlBQUk0RSx3QkFBd0IsS0FBNUIsRUFBbUM7QUFDakMsaUJBQU9DLHNCQUFzQjdFLEdBQXRCLENBQVA7QUFDRDtBQUNELGVBQU84RSxhQUFhOUUsR0FBYixDQUFQO0FBQ0Q7Ozt5Q0FFeUJBLEcsRUFBS0MsSyxFQUFPO0FBQ3BDLFlBQUkyRSx3QkFBd0IsS0FBNUIsRUFBbUM7QUFDakNDLGdDQUFzQjdFLEdBQXRCLElBQTZCQyxLQUE3QjtBQUNBO0FBQ0Q7QUFDRCxZQUFJO0FBQ0Y2RSx1QkFBYTlFLEdBQWIsSUFBb0JDLEtBQXBCO0FBQ0QsU0FGRCxDQUVFLE9BQU84RSxDQUFQLEVBQVU7QUFDVkgsZ0NBQXNCLEtBQXRCO0FBQ0FDLGdDQUFzQjdFLEdBQXRCLElBQTZCQyxLQUE3QjtBQUNEO0FBQ0Y7Ozs2Q0FFNkJELEcsRUFBSztBQUNqQyxZQUFJNEUsd0JBQXdCLEtBQTVCLEVBQW1DO0FBQ2pDLGlCQUFPQyxzQkFBc0I3RSxHQUF0QixDQUFQO0FBQ0E7QUFDRDtBQUNELFlBQUk7QUFDRjhFLHVCQUFhRSxVQUFiLENBQXdCaEYsR0FBeEI7QUFDRCxTQUZELENBRUUsT0FBTytFLENBQVAsRUFBVTtBQUNWSCxnQ0FBc0IsS0FBdEI7QUFDQSxpQkFBT0Msc0JBQXNCN0UsR0FBdEIsQ0FBUDtBQUNEO0FBQ0Y7Ozs7OztvQkFoQ2tCa0IsbUI7Ozs7Ozs7O0FDckJyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ1ZxQmUsYTs7Ozs7Ozs4Q0FVWWdELE8sRUFBUztBQUN0Q2hELHNCQUFjaUQsYUFBZCxDQUE0QlosSUFBNUIsQ0FBaUNXLE9BQWpDO0FBQ0EsWUFBSWhELGNBQWNrRCxVQUFsQixFQUE4QjtBQUM1QkYsa0JBQVFoRCxjQUFjbUQsZUFBdEI7QUFDRDtBQUNGOzs7aURBRWlDSCxPLEVBQVM7QUFDekMsWUFBSUksTUFBTXBELGNBQWNpRCxhQUFkLENBQTRCSSxPQUE1QixDQUFvQ0wsT0FBcEMsQ0FBVjtBQUNBLFlBQUlJLE9BQU8sQ0FBWCxFQUFjO0FBQ1pwRCx3QkFBY2lELGFBQWQsQ0FBNEJLLE1BQTVCLENBQW1DRixHQUFuQyxFQUF3QyxDQUF4QztBQUNEO0FBQ0Y7Ozs2Q0FFNkI7QUFDNUIsYUFBSyxJQUFJL0QsSUFBSSxDQUFiLEVBQWdCQSxJQUFJVyxjQUFjaUQsYUFBZCxDQUE0QnZELE1BQWhELEVBQXdETCxHQUF4RCxFQUE2RDtBQUMzRFcsd0JBQWNpRCxhQUFkLENBQTRCNUQsQ0FBNUIsRUFBK0JXLGNBQWNtRCxlQUE3QztBQUNEO0FBQ0Y7OztpREFFaUNILE8sRUFBUztBQUN6Q2hELHNCQUFjdUQsd0JBQWQsQ0FBdUNsQixJQUF2QyxDQUE0Q1csT0FBNUM7QUFDQSxZQUFJaEQsY0FBY3dELGdCQUFsQixFQUFvQztBQUNsQ1I7QUFDRDtBQUNGOzs7b0RBRW9DQSxPLEVBQVM7QUFDNUMsWUFBSUksTUFBTXBELGNBQWN1RCx3QkFBZCxDQUF1Q0YsT0FBdkMsQ0FBK0NMLE9BQS9DLENBQVY7QUFDQSxZQUFJSSxPQUFPLENBQVgsRUFBYztBQUNacEQsd0JBQWN1RCx3QkFBZCxDQUF1Q0QsTUFBdkMsQ0FBOENGLEdBQTlDLEVBQW1ELENBQW5EO0FBQ0Q7QUFDRjs7O3dEQUV3QztBQUN2QyxhQUFLLElBQUkvRCxJQUFJLENBQWIsRUFBZ0JBLElBQUlXLGNBQWN1RCx3QkFBZCxDQUF1QzdELE1BQTNELEVBQW1FTCxHQUFuRSxFQUF3RTtBQUNwRVcsd0JBQWN1RCx3QkFBZCxDQUF1Q2xFLENBQXZDO0FBQ0Q7QUFDSjs7Ozs7O0FBaERrQlcsZSxDQUNaQyxPLEdBQVUsSztBQURFRCxlLENBR1p1RCx3QixHQUEyQixFO0FBSGZ2RCxlLENBSVp3RCxnQixHQUFtQixLO0FBSlB4RCxlLENBTVppRCxhLEdBQWdCLEU7QUFOSmpELGUsQ0FPWmtELFUsR0FBYSxLO0FBUERsRCxlLENBUVptRCxlLEdBQWtCLEs7b0JBUk5uRCxhOzs7Ozs7OztBQ2xCckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTkE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DRHFCeUQsUTs7Ozs7OztpQ0FTREMsSyxFQUFPQyxRLEVBQVVDLGMsRUFBZ0I7QUFDakRILGlCQUFTQyxLQUFULEdBQWlCQSxLQUFqQjtBQUNBRCxpQkFBU0UsUUFBVCxHQUFvQkEsUUFBcEI7QUFDQUYsaUJBQVNHLGNBQVQsR0FBMEJBLGNBQTFCO0FBQ0E1RCxnQ0FBY3dELGdCQUFkLEdBQWlDLElBQWpDO0FBQ0FDLGlCQUFTSSxNQUFULEdBQWtCSixTQUFTSyxXQUFULENBQXFCTCxTQUFTTSxTQUE5QixFQUF5Q0wsS0FBekMsQ0FBbEI7QUFDQUQsaUJBQVNPLFNBQVQ7QUFDQSxZQUFJUCxTQUFTUSxRQUFiLEVBQXVCO0FBQ3JCUixtQkFBU1EsUUFBVDtBQUNEO0FBQ0Y7OztrQ0FFa0I7QUFDakIsWUFBSTtBQUNGUixtQkFBU1MsVUFBVCxDQUNJN0MsS0FBS2UsS0FBTCxDQUFXbkQsOEJBQW9CQyxtQkFBcEIsQ0FDUFYsb0JBQVVsQixZQUFWLENBQXVCVCxTQURoQixLQUM4QixJQUR6QyxDQURKLEVBR0l3RSxLQUFLZSxLQUFMLENBQVduRCw4QkFBb0JDLG1CQUFwQixDQUNQVixvQkFBVWxCLFlBQVYsQ0FBdUJILFFBRGhCLEtBQzZCLElBRHhDLENBSEosRUFLSWtFLEtBQUtlLEtBQUwsQ0FBV25ELDhCQUFvQkMsbUJBQXBCLENBQ1BWLG9CQUFVbEIsWUFBVixDQUF1QkYsZUFEaEIsS0FDb0MsSUFEL0MsQ0FMSjtBQU9BcUcsbUJBQVNVLEtBQVQsR0FBaUJsRiw4QkFBb0JDLG1CQUFwQixDQUF3Q1Ysb0JBQVVsQixZQUFWLENBQXVCRCxLQUEvRCxDQUFqQjtBQUNELFNBVEQsQ0FTRSxPQUFPeUYsQ0FBUCxFQUFVO0FBQ1ZyQyxrQkFBUTJELEdBQVIsK0JBQXdDdEIsQ0FBeEM7QUFDRDtBQUNGOzs7a0NBRWtCO0FBQ2pCN0Qsc0NBQW9CVSxrQkFBcEIsQ0FDSW5CLG9CQUFVbEIsWUFBVixDQUF1QlQsU0FEM0IsRUFDc0N3RSxLQUFLQyxTQUFMLENBQWVtQyxTQUFTQyxLQUFULElBQWtCLEVBQWpDLENBRHRDO0FBRUF6RSxzQ0FBb0JVLGtCQUFwQixDQUNJbkIsb0JBQVVsQixZQUFWLENBQXVCSCxRQUQzQixFQUNxQ2tFLEtBQUtDLFNBQUwsQ0FBZW1DLFNBQVNFLFFBQVQsSUFBcUIsRUFBcEMsQ0FEckM7QUFHQTFFLHNDQUFvQlUsa0JBQXBCLENBQXVDbkIsb0JBQVVsQixZQUFWLENBQXVCRixlQUE5RCxFQUNJaUUsS0FBS0MsU0FBTCxDQUFlbUMsU0FBU0csY0FBVCxJQUEyQixFQUExQyxDQURKO0FBRUEzRSxzQ0FBb0JVLGtCQUFwQixDQUF1Q25CLG9CQUFVbEIsWUFBVixDQUF1QkQsS0FBOUQsRUFBcUVvRyxTQUFTVSxLQUE5RTtBQUNEOzs7bUNBRW1CSixTLEVBQVc7QUFDN0JOLGlCQUFTTSxTQUFULEdBQXFCQSxTQUFyQjtBQUNEOzs7cUNBRXFCO0FBQ3BCLGVBQU9OLFNBQVNJLE1BQVQsS0FBb0JuRixTQUFwQixHQUFnQytFLFNBQVNJLE1BQXpDLEdBQWtESixTQUFTTSxTQUFsRTtBQUNEOzs7c0NBRXNCO0FBQ3JCLFlBQUk1RixPQUFPLEVBQVg7QUFDQUEsYUFBS0ssb0JBQVU3RCxNQUFWLENBQWlCa0MsU0FBdEIsSUFBbUM0RyxTQUFTTSxTQUE1QztBQUNBbkYsa0NBQWdCeUYsT0FBaEIsQ0FBd0I3RixvQkFBVWhGLE9BQVYsQ0FBa0JXLFFBQTFDLEVBQ0ksSUFBSXlELHFCQUFKLEdBQWtCTyxJQUFsQixDQUF1QmtELEtBQUtDLFNBQUwsQ0FBZW5ELElBQWYsQ0FBdkIsQ0FESixFQUNrRDtBQUM1QzRDLG1CQUFTO0FBRG1DLFNBRGxEO0FBSUQ7OztrQ0FFa0J1RCxJLEVBQU1DLEksRUFBTTtBQUM3QixZQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsSUFBNEIsT0FBT0EsSUFBUCxLQUFnQixTQUE1QyxJQUF5RCxPQUFPQSxJQUFQLEtBQWdCLFFBQTdFLEVBQXVGO0FBQ3JGLGlCQUFPQSxJQUFQO0FBQ0Q7QUFDRCxZQUFJQSxTQUFTLElBQVQsSUFBaUJBLFNBQVM3RixTQUE5QixFQUF5QztBQUN2QyxpQkFBTzRGLElBQVA7QUFDRDs7QUFFRCxZQUFJRSxjQUFjLFNBQWRBLFdBQWMsQ0FBU0MsR0FBVCxFQUFjO0FBQzlCLGlCQUFPLFVBQVNDLENBQVQsRUFBWTtBQUNqQixnQkFBSUQsZUFBZUUsS0FBbkIsRUFBMEI7QUFDeEIsbUJBQUssSUFBSXRGLElBQUksQ0FBYixFQUFnQkEsSUFBSW9GLElBQUkvRSxNQUF4QixFQUFnQ0wsR0FBaEMsRUFBcUM7QUFDbkNxRixrQkFBRUQsSUFBSXBGLENBQUosQ0FBRjtBQUNEO0FBQ0YsYUFKRCxNQUlPO0FBQ0wsbUJBQUssSUFBSXVGLElBQVQsSUFBaUJILEdBQWpCLEVBQXNCO0FBQ3BCO0FBQ0E7QUFDQSxvQkFBSSxHQUFHSSxjQUFILENBQWtCQyxJQUFsQixDQUF1QkwsR0FBdkIsRUFBNEJHLElBQTVCLENBQUosRUFBdUM7QUFDckNGLG9CQUFFRSxJQUFGO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsV0FkRDtBQWVELFNBaEJEO0FBaUJBLFlBQUlHLGVBQWVQLFlBQVlGLElBQVosQ0FBbkI7QUFDQSxZQUFJVSxlQUFlUixZQUFZRCxJQUFaLENBQW5COztBQUVBO0FBQ0EsWUFBSVUsVUFBVSxLQUFkO0FBQ0EsWUFBSVgsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLGNBQUksRUFBRUMsZ0JBQWdCSSxLQUFsQixDQUFKLEVBQThCO0FBQzVCTSxzQkFBVSxJQUFWO0FBQ0EsaUJBQUssSUFBSUMsU0FBVCxJQUFzQlgsSUFBdEIsRUFBNEI7QUFDMUIsa0JBQUksQ0FBQ0EsS0FBS00sY0FBTCxDQUFvQkssU0FBcEIsQ0FBTCxFQUFxQztBQUNuQztBQUNEO0FBQ0Qsa0JBQUlELFlBQVksSUFBaEIsRUFBc0I7QUFDcEJBLDBCQUFVLElBQVY7QUFDRDtBQUNELGtCQUFJLEVBQUUsT0FBT0MsU0FBUCxLQUFxQixRQUF2QixDQUFKLEVBQXNDO0FBQ3BDRCwwQkFBVSxLQUFWO0FBQ0E7QUFDRDtBQUNELGtCQUFJQyxVQUFVeEYsTUFBVixHQUFtQixDQUFuQixJQUF3QndGLFVBQVU1RixNQUFWLENBQWlCLENBQWpCLE1BQXdCLEdBQWhELElBQ0E0RixVQUFVNUYsTUFBVixDQUFpQjRGLFVBQVV4RixNQUFWLEdBQW1CLENBQXBDLE1BQTJDLEdBRC9DLEVBQ29EO0FBQ2xEdUYsMEJBQVUsS0FBVjtBQUNBO0FBQ0Q7QUFDRCxrQkFBSUUsZUFBZUQsVUFBVUUsU0FBVixDQUFvQixDQUFwQixFQUF1QkYsVUFBVXhGLE1BQVYsR0FBbUIsQ0FBMUMsQ0FBbkI7QUFDQSxrQkFBSSxDQUFDMkYsU0FBU0YsWUFBVCxFQUF1Qi9FLFFBQXZCLEVBQUQsS0FBdUMrRSxZQUEzQyxFQUF5RDtBQUN2REYsMEJBQVUsS0FBVjtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQSxZQUFJWCxnQkFBZ0JLLEtBQWhCLElBQXlCTSxPQUE3QixFQUFzQztBQUNwQyxjQUFJcEIsVUFBUyxFQUFiO0FBQ0FrQix1QkFBYSxVQUFTSCxJQUFULEVBQWU7QUFDMUJmLG9CQUFPeEIsSUFBUCxDQUFZdUMsSUFBWjtBQUNELFdBRkQ7QUFHQUksdUJBQWEsVUFBU0csWUFBVCxFQUF1QjtBQUNsQyxnQkFBSUcsWUFDQUQsU0FBU0YsYUFBYUMsU0FBYixDQUF1QixDQUF2QixFQUEwQkQsYUFBYXpGLE1BQWIsR0FBc0IsQ0FBaEQsQ0FBVCxDQURKO0FBRUEsZ0JBQUk2RixZQUFZaEIsS0FBS1ksWUFBTCxDQUFoQjtBQUNBLG1CQUFPRyxhQUFhekIsUUFBT25FLE1BQTNCLEVBQW1DO0FBQ2pDbUUsc0JBQU94QixJQUFQLENBQVksSUFBWjtBQUNEO0FBQ0R3QixvQkFBT3lCLFNBQVAsSUFBb0I3QixTQUFTSyxXQUFULENBQXFCRCxRQUFPeUIsU0FBUCxDQUFyQixFQUF3Q0MsU0FBeEMsQ0FBcEI7QUFDRCxXQVJEO0FBU0EsaUJBQU8xQixPQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxZQUFJQSxTQUFTLEVBQWI7QUFDQWtCLHFCQUFhLFVBQVNILElBQVQsRUFBZTtBQUMxQixjQUFJTCxLQUFLSyxJQUFMLE1BQWUsSUFBZixJQUF1QkwsS0FBS0ssSUFBTCxNQUFlbEcsU0FBMUMsRUFBcUQ7QUFDbkRtRixtQkFBT2UsSUFBUCxJQUFlTixLQUFLTSxJQUFMLENBQWY7QUFDRDtBQUNGLFNBSkQ7QUFLQUkscUJBQWEsVUFBU0osSUFBVCxFQUFlO0FBQzFCZixpQkFBT2UsSUFBUCxJQUFlbkIsU0FBU0ssV0FBVCxDQUFxQlEsU0FBUyxJQUFULEdBQWdCQSxLQUFLTSxJQUFMLENBQWhCLEdBQTZCLElBQWxELEVBQ1hMLEtBQUtLLElBQUwsQ0FEVyxDQUFmO0FBRUQsU0FIRDtBQUlBLGVBQU9mLE1BQVA7QUFDRDs7Ozs7O0FBeEprQkosVSxDQUNaQyxLLEdBQVFoRixTO0FBREkrRSxVLENBRVpNLFMsR0FBWSxJO0FBRkFOLFUsQ0FHWkUsUSxHQUFXLEU7QUFIQ0YsVSxDQUlaSSxNLEdBQVNuRixTO0FBSkcrRSxVLENBS1pRLFEsR0FBV3ZGLFM7QUFMQytFLFUsQ0FNWlUsSyxHQUFRLEU7QUFOSVYsVSxDQU9aRyxjLEdBQWlCLEU7b0JBUExILFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLE1BQUkrQixlQUFlLEVBQW5CO0FBQ0EsTUFBSUMsd0JBQXdCLEVBQTVCOztNQUVxQi9FLE87Ozs7Ozs7d0NBS01tQixPLEVBQVM7QUFDaEM0RCxnQ0FBd0I1RCxPQUF4QjtBQUNEOzs7MkJBYVc2RCxNLEVBQVFDLEcsRUFBS0MsSSxFQUFNdkYsTyxFQUFTRSxLLEVBQU9PLE0sRUFBUStFLFMsRUFBVztBQUNoRSxZQUFJL0UsTUFBSixFQUFZO0FBQ1YsY0FBSUosUUFBUW9GLGNBQVosRUFBNEI7QUFDMUI7QUFDQSxtQkFBT3BGLFFBQVFxRixjQUFSLENBQXVCQyxTQUF2QixDQUFQO0FBQ0Q7QUFDRHRGLGtCQUFRb0YsY0FBUixHQUF5QixJQUF6QjtBQUNEOztBQUVEO0FBQ0E7QUFDQSxZQUFJLE9BQU9HLGNBQVAsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekMsY0FBSUMsU0FBU0MsUUFBVCxLQUFzQixPQUF0QixJQUFpQ1IsSUFBSXRDLE9BQUosQ0FBWSxRQUFaLE1BQTBCLENBQS9ELEVBQWtFO0FBQ2hFc0MsNEJBQWNBLElBQUlQLFNBQUosQ0FBYyxDQUFkLENBQWQ7QUFDRDtBQUNEO0FBQ0EsaUJBQU9nQixRQUFRQyxLQUFSLENBQWMzRixRQUFRNEYsT0FBdEIsRUFBK0IsSUFBL0IsRUFBcUNOLFNBQXJDLENBQVA7QUFDRDs7QUFFRCxZQUFJTyxVQUFVLEtBQWQ7O0FBRUEsWUFBSUMsTUFBTSxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsWUFBSUUsa0JBQUosR0FBeUIsWUFBVztBQUNsQyxjQUFJRixJQUFJRyxVQUFKLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLGdCQUFJSixPQUFKLEVBQWE7QUFDWDtBQUNEO0FBQ0RBLHNCQUFVLElBQVY7O0FBRUEsZ0JBQUlqRyxpQkFBSjtBQUNBLGdCQUFJc0csY0FBYyxLQUFsQjtBQUNBLGdCQUFJZixTQUFKLEVBQWU7QUFDYnZGLHlCQUFXa0csSUFBSUssWUFBZjtBQUNELGFBRkQsTUFFTztBQUNMLGtCQUFJO0FBQ0Z2RywyQkFBV2UsS0FBS2UsS0FBTCxDQUFXb0UsSUFBSUssWUFBZixDQUFYO0FBQ0QsZUFGRCxDQUVFLE9BQU8vRCxDQUFQLEVBQVU7QUFDVnBCLDJCQUFXLFlBQVc7QUFDcEIsc0JBQUluQixLQUFKLEVBQVc7QUFDVEEsMEJBQU0sSUFBTixFQUFZaUcsR0FBWjtBQUNEO0FBQ0YsaUJBSkQsRUFJRyxDQUpIO0FBS0FJLDhCQUFjLElBQWQ7QUFDRDtBQUNGOztBQUVELGdCQUFJLENBQUNBLFdBQUwsRUFBa0I7QUFDaEIsa0JBQUlKLElBQUlNLE1BQUosSUFBYyxHQUFkLElBQXFCTixJQUFJTSxNQUFKLEdBQWEsR0FBdEMsRUFBMkM7QUFDekNwRiwyQkFBVyxZQUFXO0FBQ3BCLHNCQUFJckIsT0FBSixFQUFhO0FBQ1hBLDRCQUFRQyxRQUFSLEVBQWtCa0csR0FBbEI7QUFDRDtBQUNGLGlCQUpELEVBSUcsQ0FKSDtBQUtELGVBTkQsTUFNTztBQUNMOUUsMkJBQVcsWUFBVztBQUNwQixzQkFBSW5CLEtBQUosRUFBVztBQUNUQSwwQkFBTUQsUUFBTixFQUFnQmtHLEdBQWhCO0FBQ0Q7QUFDRixpQkFKRCxFQUlHLENBSkg7QUFLRDtBQUNGOztBQUVELGdCQUFJMUYsTUFBSixFQUFZO0FBQ1ZKLHNCQUFRb0YsY0FBUixHQUF5QixLQUF6QjtBQUNBcEYsc0JBQVFxRyxjQUFSO0FBQ0Q7QUFDRjtBQUNGLFNBN0NEO0FBOENBUCxZQUFJUSxJQUFKLENBQVN0QixNQUFULEVBQWlCQyxHQUFqQixFQUFzQixJQUF0QjtBQUNBYSxZQUFJUyxnQkFBSixDQUFxQixjQUFyQixFQUFxQyxZQUFyQyxFQXJFZ0UsQ0FxRWI7QUFDbkRULFlBQUlVLElBQUosQ0FBU3RCLElBQVQ7QUFDQWxFLG1CQUFXLFlBQVc7QUFDcEIsY0FBSSxDQUFDNkUsT0FBTCxFQUFjO0FBQ1pDLGdCQUFJVyxLQUFKO0FBQ0Q7QUFDRixTQUpELEVBSUcxQix3QkFBd0IsSUFKM0I7QUFLRDs7OzhCQVljQyxNLEVBQVFDLEcsRUFBS0MsSSxFQUFNdkYsTyxFQUFTRSxLLEVBQU9PLE0sRUFBUStFLFMsRUFBVztBQUNuRSxZQUFJdUIsTUFBTSxJQUFJbkIsY0FBSixFQUFWO0FBQ0FtQixZQUFJQyxNQUFKLEdBQWEsWUFBVztBQUN0QixjQUFJL0csaUJBQUo7QUFDQSxjQUFJc0csY0FBYyxLQUFsQjtBQUNBLGNBQUlmLFNBQUosRUFBZTtBQUNidkYsdUJBQVc4RyxJQUFJUCxZQUFmO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsZ0JBQUk7QUFDRnZHLHlCQUFXZSxLQUFLZSxLQUFMLENBQVdnRixJQUFJUCxZQUFmLENBQVg7QUFDRCxhQUZELENBRUUsT0FBTy9ELENBQVAsRUFBVTtBQUNWcEIseUJBQVcsWUFBVztBQUNwQixvQkFBSW5CLEtBQUosRUFBVztBQUNUQSx3QkFBTSxJQUFOLEVBQVk2RyxHQUFaO0FBQ0Q7QUFDRixlQUpELEVBSUcsQ0FKSDtBQUtBUiw0QkFBYyxJQUFkO0FBQ0Q7QUFDRjtBQUNELGNBQUksQ0FBQ0EsV0FBTCxFQUFrQjtBQUNoQmxGLHVCQUFXLFlBQVc7QUFDcEIsa0JBQUlyQixPQUFKLEVBQWE7QUFDWEEsd0JBQVFDLFFBQVIsRUFBa0I4RyxHQUFsQjtBQUNEO0FBQ0YsYUFKRCxFQUlHLENBSkg7QUFLRDtBQUNELGNBQUl0RyxNQUFKLEVBQVk7QUFDVkosb0JBQVFvRixjQUFSLEdBQXlCLEtBQXpCO0FBQ0FwRixvQkFBUXFHLGNBQVI7QUFDRDtBQUNGLFNBNUJEO0FBNkJBSyxZQUFJRSxPQUFKLEdBQWNGLElBQUlHLFNBQUosR0FBZ0IsWUFBVztBQUN2QzdGLHFCQUFXLFlBQVc7QUFDcEIsZ0JBQUluQixLQUFKLEVBQVc7QUFDVEEsb0JBQU0sSUFBTixFQUFZNkcsR0FBWjtBQUNEO0FBQ0YsV0FKRCxFQUlHLENBSkg7QUFLQSxjQUFJdEcsTUFBSixFQUFZO0FBQ1ZKLG9CQUFRb0YsY0FBUixHQUF5QixLQUF6QjtBQUNBcEYsb0JBQVFxRyxjQUFSO0FBQ0Q7QUFDRixTQVZEO0FBV0FLLFlBQUlJLFVBQUosR0FBaUIsWUFBVyxDQUMzQixDQUREO0FBRUFKLFlBQUlKLElBQUosQ0FBU3RCLE1BQVQsRUFBaUJDLEdBQWpCO0FBQ0F5QixZQUFJSyxPQUFKLEdBQWNoQyx3QkFBd0IsSUFBdEM7QUFDQTJCLFlBQUlGLElBQUosQ0FBU3RCLElBQVQ7QUFDRDs7O3FDQU9xQjhCLGdCLEVBQWtCO0FBQ3RDbEMscUJBQWFuRCxJQUFiLENBQWtCcUYsZ0JBQWxCO0FBQ0Q7Ozt1Q0FNdUI7QUFDdEIsWUFBSTNGLE9BQU95RCxhQUFhbUMsS0FBYixFQUFYO0FBQ0EsWUFBSTVGLElBQUosRUFBVTtBQUNScUUsa0JBQVFDLEtBQVIsQ0FBYzNGLFFBQVFDLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDb0IsSUFBbEM7QUFDRDtBQUNGOzs7Ozs7b0JBL0trQnJCLE87Ozs7Ozs7O0FDdkJyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDcENBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQU1rSCxjQUFjLENBQUM7QUFDbkJDLFlBQVFDLFVBQVVDLFNBREM7QUFFbkJDLGVBQVcsUUFGUTtBQUduQkMsY0FBVTtBQUhTLEdBQUQsRUFJakI7QUFDREosWUFBUUMsVUFBVUMsU0FEakI7QUFFREMsZUFBVyxTQUZWO0FBR0RFLG1CQUFlLFVBSGQ7QUFJREQsY0FBVTtBQUpULEdBSmlCLEVBU2pCO0FBQ0RKLFlBQVFDLFVBQVVLLE1BRGpCO0FBRURILGVBQVcsT0FGVjtBQUdEQyxjQUFVLFFBSFQ7QUFJREMsbUJBQWU7QUFKZCxHQVRpQixFQWNqQjtBQUNERSxVQUFNQyxPQUFPQyxLQURaO0FBRURMLGNBQVUsT0FGVDtBQUdEQyxtQkFBZTtBQUhkLEdBZGlCLEVBa0JqQjtBQUNETCxZQUFRQyxVQUFVSyxNQURqQjtBQUVESCxlQUFXLE1BRlY7QUFHREMsY0FBVTtBQUhULEdBbEJpQixFQXNCakI7QUFDREosWUFBUUMsVUFBVUssTUFEakI7QUFFREgsZUFBVyxLQUZWO0FBR0RDLGNBQVU7QUFIVCxHQXRCaUIsRUEwQmpCO0FBQ0RKLFlBQVFDLFVBQVVDLFNBRGpCO0FBRURDLGVBQVcsU0FGVjtBQUdEQyxjQUFVO0FBSFQsR0ExQmlCLEVBOEJqQjtBQUNESixZQUFRQyxVQUFVSyxNQURqQjtBQUVESCxlQUFXLFFBRlY7QUFHREMsY0FBVTtBQUhULEdBOUJpQixFQWtDakIsRUFBRTtBQUNISixZQUFRQyxVQUFVQyxTQURqQjtBQUVEQyxlQUFXLFVBRlY7QUFHREMsY0FBVTtBQUhULEdBbENpQixFQXNDakI7QUFDREosWUFBUUMsVUFBVUMsU0FEakI7QUFFREMsZUFBVyxNQUZWO0FBR0RDLGNBQVUsVUFIVDtBQUlEQyxtQkFBZTtBQUpkLEdBdENpQixFQTJDakI7QUFDREwsWUFBUUMsVUFBVUMsU0FEakI7QUFFREMsZUFBVyxPQUZWO0FBR0RDLGNBQVUsU0FIVDtBQUlEQyxtQkFBZTtBQUpkLEdBM0NpQixFQWdEakIsRUFBRTtBQUNITCxZQUFRQyxVQUFVQyxTQURqQjtBQUVEQyxlQUFXLFNBRlY7QUFHREMsY0FBVSxVQUhUO0FBSURDLG1CQUFlO0FBSmQsR0FoRGlCLENBQXBCOztBQXVEQSxNQUFNSyxTQUFTLENBQUM7QUFDZFYsWUFBUUMsVUFBVVUsUUFESjtBQUVkUixlQUFXLEtBRkc7QUFHZEMsY0FBVTtBQUhJLEdBQUQsRUFJWjtBQUNESixZQUFRQyxVQUFVVSxRQURqQjtBQUVEUixlQUFXLEtBRlY7QUFHREMsY0FBVTtBQUhULEdBSlksRUFRWjtBQUNESixZQUFRQyxVQUFVQyxTQURqQjtBQUVEQyxlQUFXLFFBRlY7QUFHREMsY0FBVTtBQUhULEdBUlksRUFZWjtBQUNESixZQUFRQyxVQUFVVSxRQURqQjtBQUVEUixlQUFXLE9BRlY7QUFHREMsY0FBVTtBQUhULEdBWlksQ0FBZjs7QUFrQkE7QUFDQTs7OztNQUdxQlEsZTtBQUNuQjs7O0FBR0EsK0JBQWM7QUFBQTs7QUFDWixXQUFLQyxPQUFMLEdBQWUsS0FBS0MsYUFBTCxDQUFtQmYsV0FBbkIsS0FBbUMsaUJBQWxEO0FBQ0EsV0FBS2dCLE9BQUwsR0FBZSxLQUFLQyxjQUFMLENBQW9CZixVQUFVQyxTQUE5QixLQUNYLEtBQUtjLGNBQUwsQ0FBb0JmLFVBQVVnQixVQUE5QixDQURXLElBQ2tDLGlCQURqRDtBQUVBLFdBQUtDLEVBQUwsR0FBVSxLQUFLSixhQUFMLENBQW1CSixNQUFuQixLQUE4QixZQUF4QztBQUNEOztBQUVEOzs7Ozs7Ozs7b0NBS2MzQyxJLEVBQU07QUFDbEIsYUFBSyxJQUFJdkcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJdUcsS0FBS2xHLE1BQXpCLEVBQWlDTCxHQUFqQyxFQUFzQztBQUNwQyxjQUFJMkosYUFBYXBELEtBQUt2RyxDQUFMLEVBQVF3SSxNQUF6QjtBQUNBLGNBQUlvQixXQUFXckQsS0FBS3ZHLENBQUwsRUFBUStJLElBQXZCO0FBQ0EsZUFBS2MsbUJBQUwsR0FBMkJ0RCxLQUFLdkcsQ0FBTCxFQUFRNkksYUFBUixJQUF5QnRDLEtBQUt2RyxDQUFMLEVBQVE0SSxRQUE1RDtBQUNBLGNBQUllLFVBQUosRUFBZ0I7QUFDZCxnQkFBSUEsV0FBVzNGLE9BQVgsQ0FBbUJ1QyxLQUFLdkcsQ0FBTCxFQUFRMkksU0FBM0IsTUFBMEMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoRCxxQkFBT3BDLEtBQUt2RyxDQUFMLEVBQVE0SSxRQUFmO0FBQ0Q7QUFDRixXQUpELE1BSU8sSUFBSWdCLFFBQUosRUFBYztBQUNuQixtQkFBT3JELEtBQUt2RyxDQUFMLEVBQVE0SSxRQUFmO0FBQ0Q7QUFDRjtBQUNGOzs7cUNBUWNlLFUsRUFBWTtBQUN6QixZQUFJLENBQUNBLFVBQUwsRUFBaUI7QUFDZixpQkFBTyxDQUFDLENBQVI7QUFDRDtBQUNELFlBQUl6RyxRQUFReUcsV0FBVzNGLE9BQVgsQ0FBbUIsS0FBSzZGLG1CQUF4QixDQUFaO0FBQ0EsWUFBSTNHLFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLGlCQUFPLENBQUMsQ0FBUjtBQUNEO0FBQ0QsZUFBTzRHLFdBQVdILFdBQVc1RCxTQUFYLENBQXFCN0MsUUFBUSxLQUFLMkcsbUJBQUwsQ0FBeUJ4SixNQUFqQyxHQUEwQyxDQUEvRCxDQUFYLENBQVA7QUFDRDs7Ozs7O29CQTlDa0IrSSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNyRUFXLGM7Ozs7Ozs7Z0NBSUY7QUFDZixZQUFJLENBQUNDLFNBQUwsRUFBZ0I7QUFDZDVJLGtCQUFRMkQsR0FBUixDQUFZLDJDQUFaO0FBQ0E7QUFDRDs7QUFFRCxZQUFJa0YsU0FBUyxJQUFJQyx3QkFBSixFQUFiO0FBQ0EsWUFBSUMsV0FBVyxLQUFmO0FBQ0FGLGVBQU9HLE1BQVAsR0FBZ0IsWUFBVztBQUN6QixjQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiL0ksb0JBQVEyRCxHQUFSLENBQVksNENBQVo7QUFDQSxnQkFBSXJDLE9BQU8sRUFBWDtBQUNBQSxpQkFBS3ZELG9CQUFVN0QsTUFBVixDQUFpQkUsTUFBdEIsSUFBZ0MrRCwwQkFBZ0JQLEtBQWhEO0FBQ0EwRCxpQkFBS3ZELG9CQUFVN0QsTUFBVixDQUFpQkksU0FBdEIsSUFBbUM2RCwwQkFBZ0JJLFFBQW5EO0FBQ0FzSyxtQkFBT3BDLElBQVAsQ0FBWSxNQUFaLEVBQW9CbkYsSUFBcEI7QUFDQXlILHVCQUFXLElBQVg7QUFDRDtBQUNGLFNBVEQ7QUFVQUYsZUFBT2hDLE9BQVAsR0FBaUIsVUFBU29DLEtBQVQsRUFBZ0I7QUFDL0JqSixrQkFBUTJELEdBQVIsQ0FBWSx3QkFBWixFQUFzQ3NGLEtBQXRDO0FBQ0QsU0FGRDtBQUdBOzs7Ozs7QUFNQUosZUFBT0ssU0FBUCxHQUFtQixVQUFTRCxLQUFULEVBQWdCM0gsSUFBaEIsRUFBc0I7QUFDdkMsY0FBSTJILFVBQVUsWUFBZCxFQUE0QjtBQUMxQjlLLHNDQUFnQnlGLE9BQWhCLENBQXdCN0Ysb0JBQVVoRixPQUFWLENBQWtCWSxRQUExQyxFQUNJLElBQUl3RCxxQkFBSixHQUNLVyxHQURMLENBQ1NDLG9CQUFVN0QsTUFBVixDQUFpQm1DLGdCQUQxQixFQUM0QyxLQUQ1QyxDQURKLEVBRXdEO0FBQ2xEZ0Usc0JBQVEsS0FEMEM7QUFFbERDLHVCQUFTLElBRnlDO0FBR2xEVCx3QkFBVSxrQkFBU0EsU0FBVCxFQUFtQjtBQUMzQixvQkFBSXNKLGtCQUFrQmhMLDBCQUFnQmlMLGVBQWhCLENBQWdDdkosU0FBaEMsQ0FBdEI7QUFDQSxvQkFBSXdKLFNBQVNGLGdCQUFnQnBMLG9CQUFVeEIsSUFBVixDQUFlVCxJQUEvQixDQUFiO0FBQ0Esb0JBQUlvSCxXQUFXaUcsZ0JBQWdCcEwsb0JBQVV4QixJQUFWLENBQWVHLFFBQS9CLENBQWY7QUFDQSxvQkFBSXlHLGlCQUFpQmdHLGdCQUFnQnBMLG9CQUFVeEIsSUFBVixDQUFlSSxlQUEvQixDQUFyQjtBQUNBLG9CQUFJLENBQUMsdUJBQVEwTSxNQUFSLEVBQWdCckcsbUJBQVNDLEtBQXpCLENBQUwsRUFBc0M7QUFDcENELHFDQUFTUyxVQUFULENBQW9CNEYsTUFBcEIsRUFBNEJuRyxRQUE1QixFQUFzQ0MsY0FBdEM7QUFDRDtBQUNGO0FBWGlELGFBRnhEO0FBZ0JELFdBakJELE1BaUJPLElBQUk4RixVQUFVLGNBQWQsRUFBOEI7QUFDbkNqRywrQkFBU3NHLGFBQVQ7QUFDQVQsbUJBQU9wQyxJQUFQLENBQVksb0JBQVosRUFBa0M7QUFDaEMseUJBQVc7QUFEcUIsYUFBbEM7QUFHRCxXQUxNLE1BS0EsSUFBSXdDLFVBQVUsWUFBZCxFQUE0QjtBQUNqQztBQUNBSixtQkFBT3BDLElBQVAsQ0FBWSxvQkFBWixFQUFrQztBQUNoQyx5QkFBVztBQURxQixhQUFsQztBQUdELFdBTE0sTUFLQSxJQUFJd0MsVUFBVSxnQkFBZCxFQUFnQztBQUNyQztBQUNBTSwwREFBNENqSSxLQUFLLENBQUwsRUFBUWtJLEtBQXBEO0FBQ0Q7QUFDRixTQWhDRDtBQWlDQVgsZUFBT1ksT0FBUCxHQUFpQixZQUFXO0FBQzFCekosa0JBQVEyRCxHQUFSLENBQVksK0NBQVo7QUFDQW9GLHFCQUFXLEtBQVg7QUFDRCxTQUhEO0FBSUFGLGVBQU9hLE9BQVAsQ0FBZWYsZUFBZWdCLFVBQTlCO0FBQ0FDLG9CQUFZLFlBQVc7QUFDckIsY0FBSSxDQUFDZixPQUFPZ0IsU0FBUixJQUFxQixDQUFDaEIsT0FBT2lCLFVBQWpDLEVBQTZDO0FBQzNDakIsbUJBQU9hLE9BQVAsQ0FBZWYsZUFBZWdCLFVBQTlCO0FBQ0Q7QUFDRixTQUpELEVBSUcsSUFKSDtBQUtEOzs7Ozs7QUExRWtCaEIsZ0IsQ0FFWmdCLFUsR0FBYSxrQjtvQkFGRGhCLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEckIsTUFBTW9CLGdDQUNGLCtFQUNBLGVBRko7O0FBSUEsTUFBSUMsZUFBZSxLQUFuQjtBQUNBLE1BQUlDLDRCQUE0QixJQUFoQzs7QUFFQTs7OztNQUdxQkMsVzs7Ozs7OzsyQ0FLUztBQUMxQixlQUFPN0MsYUFBYUEsVUFBVThDLGFBQXZCLElBQXdDLG1CQUFtQjlDLFNBQTNELElBQ0gsaUJBQWlCTyxNQURyQjtBQUVEOzs7NENBTTRCO0FBQzNCLFlBQUksQ0FBQ3NDLFlBQVlFLGtCQUFaLEVBQUwsRUFBdUM7QUFDckMsaUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QkEsb0JBQVEsS0FBUjtBQUNELFdBRk0sQ0FBUDtBQUdEO0FBQ0QsZUFBT0osWUFBWUssNEJBQVosR0FDRkMsSUFERSxDQUNHLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0IsaUJBQU8sSUFBSUosT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QixnQkFBSSxDQUFDRyxZQUFMLEVBQW1CO0FBQ2pCSCxzQkFBUSxLQUFSO0FBQ0QsYUFGRCxNQUVPO0FBQ0w7QUFDQTtBQUNBRywyQkFBYUMsV0FBYixDQUF5QkMsZUFBekIsR0FDS0gsSUFETCxDQUNVLFVBQVNJLFlBQVQsRUFBdUI7QUFDM0JaLCtCQUFlWSxpQkFBaUIsSUFBaEM7QUFDQSxvQkFBSVosWUFBSixFQUFrQjtBQUNoQkUsOEJBQVlXLDZCQUFaLENBQTBDRCxZQUExQztBQUNEO0FBQ0ROLHdCQUFRTixZQUFSO0FBQ0QsZUFQTDtBQVFEO0FBQ0YsV0FmTSxDQUFQO0FBZ0JELFNBbEJFLENBQVA7QUFtQkQ7OzsrQkFTZWMsZ0IsRUFBa0JDLFEsRUFBVTtBQUMxQyxZQUFJLENBQUNiLFlBQVlFLGtCQUFaLEVBQUwsRUFBdUM7QUFDckNwSyxrQkFBUTJELEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLGlCQUFPb0gsU0FBUyxLQUFULENBQVA7QUFDRDtBQUNEMUQsa0JBQVU4QyxhQUFWLENBQXdCYSxRQUF4QixDQUNJRixtQkFBbUJBLGdCQUFuQixHQUFzQyxZQUQxQyxFQUN3RCxJQUR4RCxFQUVLTixJQUZMLENBRVUsVUFBU0MsWUFBVCxFQUF1QjtBQUMzQlIsc0NBQTRCUSxZQUE1Qjs7QUFFQTtBQUNBUixvQ0FBMEJTLFdBQTFCLENBQXNDQyxlQUF0QyxHQUNLSCxJQURMLENBQ1UsVUFBU0ksWUFBVCxFQUF1QjtBQUMzQlosMkJBQWUsRUFBRVksaUJBQWlCLElBQW5CLENBQWY7QUFDQSxnQkFBSVosWUFBSixFQUFrQjtBQUNoQkUsMEJBQVlXLDZCQUFaLENBQTBDRCxZQUExQztBQUNEO0FBQ0QsZ0JBQUlHLFFBQUosRUFBYztBQUNaLHFCQUFPQSxTQUFTZixZQUFULENBQVA7QUFDRDtBQUNGLFdBVEw7QUFVRCxTQWhCTCxFQWlCS2lCLEtBakJMLENBaUJXLFVBQVNuTCxLQUFULEVBQWdCO0FBQ3JCRSxrQkFBUTJELEdBQVIsQ0FBWSxrQ0FBWixFQUFnRDdELEtBQWhEO0FBQ0QsU0FuQkw7QUFvQkQ7OztzQ0FNc0I7QUFDckIsWUFBTW9MLHVCQUF1QmhCLFlBQVlpQixrQkFBWixDQUErQnBCLDZCQUEvQixDQUE3QjtBQUNBLGVBQU8sSUFBSU0sT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JjLE1BQWxCLEVBQTBCO0FBQzNDO0FBQ0EsaUJBQU9uQiwwQkFBMEJTLFdBQTFCLENBQXNDVyxTQUF0QyxDQUFnRDtBQUNyREMsNkJBQWlCLElBRG9DO0FBRXJESjtBQUZxRCxXQUFoRCxFQUlGVixJQUpFLENBSUcsVUFBU0ksWUFBVCxFQUF1QjtBQUMzQixnQkFBSUEsWUFBSixFQUFrQjtBQUNoQlYsMEJBQVlXLDZCQUFaLENBQTBDRCxZQUExQztBQUNBWiw2QkFBZSxJQUFmO0FBQ0EscUJBQU9NLFFBQVFOLFlBQVIsQ0FBUDtBQUNEO0FBQ0RBLDJCQUFlLEtBQWY7QUFDQSxtQkFBT29CLFFBQVA7QUFDRCxXQVpFLEVBYUZILEtBYkUsQ0FhSSxVQUFTbEwsR0FBVCxFQUFjO0FBQ25CLG1CQUFPcUwsb0RBQWtEckwsR0FBbEQsQ0FBUDtBQUNELFdBZkUsQ0FBUDtBQWdCRCxTQWxCTSxDQUFQO0FBbUJEOzs7d0NBTXdCO0FBQ3ZCLGVBQU8sSUFBSXNLLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVjLE1BQVYsRUFBcUI7QUFDdENsQixzQkFBWXFCLG1CQUFaLEdBQWtDZixJQUFsQyxDQUF1QyxVQUFDZ0IsVUFBRCxFQUFnQjtBQUNyRCxnQkFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2YscUJBQU9sQixTQUFQO0FBQ0Q7O0FBRURMLHNDQUEwQlMsV0FBMUIsQ0FBc0NDLGVBQXRDLEdBQ0tILElBREwsQ0FDVSxVQUFTSSxZQUFULEVBQXVCO0FBQzNCLGtCQUFJQSxZQUFKLEVBQWtCO0FBQ2hCOztBQUVBLHVCQUFPQSxhQUFhYSxXQUFiLEVBQVA7QUFDRDtBQUNELHFCQUFPTCxRQUFQO0FBQ0QsYUFSTCxFQVNLSCxLQVRMLENBU1csVUFBU25MLEtBQVQsRUFBZ0I7QUFDckJzTCx5REFBeUN0TCxLQUF6QztBQUNELGFBWEwsRUFZSzBLLElBWkwsQ0FZVSxVQUFTNUssT0FBVCxFQUFrQjtBQUN0QixrQkFBSUEsT0FBSixFQUFhO0FBQ1hvSywrQkFBZSxLQUFmO0FBQ0EsdUJBQU9NLFNBQVA7QUFDRDtBQUNELHFCQUFPYyxRQUFQO0FBQ0QsYUFsQkw7QUFtQkQsV0F4QkQsRUF3QkcsVUFBQ3RMLEtBQUQsRUFBVztBQUNaLG1CQUFPc0wsUUFBUDtBQUNELFdBMUJEO0FBMkJELFNBNUJNLENBQVA7QUE2QkQ7OztxREFNcUM7QUFDcEMsZUFBTyxJQUFJZixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCLGNBQUlMLHlCQUFKLEVBQStCO0FBQzdCSyxvQkFBUUwseUJBQVI7QUFDRCxXQUZELE1BRU87QUFDTDs7QUFFQTVDLHNCQUFVOEMsYUFBVixDQUF3QnVCLGVBQXhCLEdBQTBDbEIsSUFBMUMsQ0FBK0MsVUFBQ0MsWUFBRCxFQUFrQjtBQUMvRFIsMENBQTRCUSxZQUE1QjtBQUNBSCxzQkFBUUcsWUFBUjtBQUNELGFBSEQ7QUFJRDtBQUNGLFNBWE0sQ0FBUDtBQVlEOzs7eUNBT3lCa0IsWSxFQUFjO0FBQ3RDLFlBQU1DLFVBQVUsSUFBSUMsTUFBSixDQUFXLENBQUMsSUFBSUYsYUFBYTFNLE1BQWIsR0FBc0IsQ0FBM0IsSUFBZ0MsQ0FBM0MsQ0FBaEI7QUFDQSxZQUFNNk0sU0FBUyxDQUFDSCxlQUFlQyxPQUFoQixFQUNWRyxPQURVLENBQ0YsSUFERSxFQUNJLEdBREosRUFFVkEsT0FGVSxDQUVGLElBRkUsRUFFSSxHQUZKLENBQWY7O0FBSUEsWUFBTUMsVUFBVXBFLE9BQU9xRSxJQUFQLENBQVlILE1BQVosQ0FBaEI7QUFDQSxZQUFNSSxjQUFjLElBQUlDLFVBQUosQ0FBZUgsUUFBUS9NLE1BQXZCLENBQXBCOztBQUVBLGFBQUssSUFBSUwsSUFBSSxDQUFiLEVBQWdCQSxJQUFJb04sUUFBUS9NLE1BQTVCLEVBQW9DLEVBQUVMLENBQXRDLEVBQXlDO0FBQ3ZDc04sc0JBQVl0TixDQUFaLElBQWlCb04sUUFBUUksVUFBUixDQUFtQnhOLENBQW5CLENBQWpCO0FBQ0Q7QUFDRCxlQUFPc04sV0FBUDtBQUNEOzs7MENBUzBCdEIsWSxFQUFjO0FBQ3ZDLFlBQUl0TixNQUFNc04sYUFBYXlCLE1BQWIsR0FBc0J6QixhQUFheUIsTUFBYixDQUFvQixRQUFwQixDQUF0QixHQUFzRCxFQUFoRTtBQUNBLFlBQUlDLE9BQU8xQixhQUFheUIsTUFBYixHQUFzQnpCLGFBQWF5QixNQUFiLENBQW9CLE1BQXBCLENBQXRCLEdBQW9ELEVBQS9EO0FBQ0E7QUFDQSxZQUFJRSxXQUFXQyxLQUFLN0csUUFBUUMsS0FBUixDQUFjNkcsT0FBT0MsWUFBckIsRUFBbUMsSUFBbkMsRUFBeUMsSUFBSVAsVUFBSixDQUFlN08sR0FBZixDQUF6QyxDQUFMLENBQWY7QUFDQTtBQUNBLFlBQUlxUCxZQUFZSCxLQUFLN0csUUFBUUMsS0FBUixDQUFjNkcsT0FBT0MsWUFBckIsRUFBbUMsSUFBbkMsRUFBeUMsSUFBSVAsVUFBSixDQUFlRyxJQUFmLENBQXpDLENBQUwsQ0FBaEI7QUFDQSxlQUFPO0FBQ0xNLG9CQUFVaEMsYUFBYWdDLFFBRGxCO0FBRUx0UCxlQUFLaVAsUUFGQTtBQUdMRCxnQkFBTUs7QUFIRCxTQUFQO0FBS0Q7OztvREFNb0MvQixZLEVBQWM7QUFDakQsWUFBSUEsWUFBSixFQUFrQjtBQUNoQixjQUFJaUMsdUJBQXVCM0MsWUFBWTRDLG1CQUFaLENBQWdDbEMsWUFBaEMsQ0FBM0I7QUFDQSxjQUFJbUMsNkJBQTZCbk0sS0FBS0MsU0FBTCxDQUFlZ00sb0JBQWYsQ0FBakM7QUFDQSxjQUFJRyw2QkFBNkJ4Tyw4QkFBb0JDLG1CQUFwQixDQUM3QlYsb0JBQVVsQixZQUFWLENBQXVCRyxpQkFETSxDQUFqQztBQUVBLGNBQUksQ0FBQyx1QkFBUWdRLDBCQUFSLEVBQW9DRCwwQkFBcEMsQ0FBTCxFQUFzRTtBQUNwRXZPLDBDQUFvQlUsa0JBQXBCLENBQXVDbkIsb0JBQVVsQixZQUFWLENBQXVCRyxpQkFBOUQsRUFDSStQLDBCQURKO0FBRUE3Qyx3QkFBWStDLGVBQVosQ0FBNEJGLDBCQUE1QjtBQUNEO0FBQ0Y7QUFDRjs7O3NDQU1zQm5DLFksRUFBYztBQUNuQyxZQUFJLENBQUNBLFlBQUwsRUFBbUI7QUFDakI7QUFDRDtBQUNEek0sa0NBQWdCeUYsT0FBaEIsQ0FBd0I3RixvQkFBVWhGLE9BQVYsQ0FBa0JjLHFCQUExQyxFQUNJLElBQUlzRCxxQkFBSixHQUFrQlcsR0FBbEIsQ0FBc0JDLG9CQUFVN0QsTUFBVixDQUFpQm9DLHFCQUF2QyxFQUNJc08sWUFESixDQURKLEVBRXVCO0FBQ2pCdkssa0JBQVEsS0FEUztBQUVqQkMsbUJBQVM7QUFGUSxTQUZ2QjtBQU9EOzs7Ozs7b0JBdk9rQjRKLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ByQixNQUFJZ0QsbUJBQW1CLElBQUlsRix5QkFBSixFQUF2Qjs7QUFFQTs7Ozs7Ozs7TUFPcUJtRixROzs7Ozs7O2lDQUVEaE4sTyxFQUFTO0FBQ3pCLFlBQUksQ0FBQ2hDLDBCQUFnQmdDLE9BQXJCLEVBQThCO0FBQzVCO0FBQ0Q7QUFDRGhDLGtDQUFnQmdDLE9BQWhCLEdBQTBCQSxPQUExQjtBQUNEOzs7K0JBRWVxSixLLEVBQU87QUFDckIyRCxpQkFBU0MsTUFBVCxHQUFrQjVELEtBQWxCO0FBQ0Q7Ozt3Q0FNd0JwSSxPLEVBQVM7QUFDaENqRCxrQ0FBZ0JrRCxpQkFBaEIsQ0FBa0NELE9BQWxDO0FBQ0Q7OztpREFFaUN4RCxLLEVBQU95UCxTLEVBQVc7QUFDbERsUCxrQ0FBZ0JQLEtBQWhCLEdBQXdCQSxLQUF4QjtBQUNBTyxrQ0FBZ0JOLFNBQWhCLEdBQTRCd1AsU0FBNUI7QUFDQTlOLGdDQUFjQyxPQUFkLEdBQXdCLElBQXhCO0FBQ0Q7OztnREFFZ0M1QixLLEVBQU95UCxTLEVBQVc7QUFDakRsUCxrQ0FBZ0JQLEtBQWhCLEdBQXdCQSxLQUF4QjtBQUNBTyxrQ0FBZ0JOLFNBQWhCLEdBQTRCd1AsU0FBNUI7QUFDQTlOLGdDQUFjQyxPQUFkLEdBQXdCLEtBQXhCO0FBQ0Q7OztvQ0FFb0I4TixJLEVBQU07QUFDekIzRSxpQ0FBZWdCLFVBQWYsR0FBNEIyRCxJQUE1QjtBQUNEOzs7a0NBRWtCL08sUSxFQUFVO0FBQzNCSixrQ0FBZ0JJLFFBQWhCLEdBQTJCQSxRQUEzQjtBQUNEOzs7b0NBRW9CZSxXLEVBQWE7QUFDaENuQixrQ0FBZ0JtQixXQUFoQixHQUE4QkEsV0FBOUI7QUFDRDs7O29DQUVvQmlPLFUsRUFBWTtBQUMvQkosaUJBQVNLLFdBQVQsR0FBdUJELFVBQXZCO0FBQ0Q7OztxQ0FFcUJFLFcsRUFBYTtBQUNqQ04saUJBQVNPLFlBQVQsR0FBd0JELFdBQXhCO0FBQ0Q7OztvQ0FFb0JFLFUsRUFBWTtBQUMvQlIsaUJBQVNTLFdBQVQsR0FBdUJELFVBQXZCO0FBQ0Q7Ozt1Q0FFdUJFLGEsRUFBZTtBQUNyQ1YsaUJBQVNXLGNBQVQsR0FBMEJELGFBQTFCO0FBQ0Q7OzttQ0FFbUJ2SyxTLEVBQVc7QUFDN0JOLDJCQUFTK0ssWUFBVCxDQUFzQnpLLFNBQXRCO0FBQ0Q7Ozt5Q0FFeUIvQyxZLEVBQWN5TixlLEVBQWlCO0FBQ3ZEN1Asa0NBQWdCb0MsWUFBaEIsR0FBK0JBLFlBQS9CO0FBQ0FwQyxrQ0FBZ0I0QyxhQUFoQixHQUFnQ2lOLGVBQWhDO0FBQ0Q7OztxQ0FFcUI7QUFDcEIsZUFBT2hMLG1CQUFTaUwsWUFBVCxFQUFQO0FBQ0Q7OztvQ0FFMkI7QUFDMUIsWUFBSUMsVUFBVWYsU0FBU2MsWUFBVCxFQUFkOztBQUQwQiwwQ0FBTjNNLElBQU07QUFBTkEsY0FBTTtBQUFBOztBQUUxQixhQUFLLElBQUkxQyxJQUFJLENBQWIsRUFBZ0JBLElBQUkwQyxLQUFLckMsTUFBekIsRUFBaUNMLEdBQWpDLEVBQXNDO0FBQ3BDc1Asb0JBQVVBLFFBQVE1TSxLQUFLMUMsQ0FBTCxDQUFSLENBQVY7QUFDRDtBQUNELGVBQU9zUCxPQUFQO0FBQ0Q7OztvQ0FFb0I7QUFDbkIsZUFBT2xMLG1CQUFTRSxRQUFULElBQXFCLEVBQTVCO0FBQ0Q7Ozs4Q0FFOEJYLE8sRUFBUztBQUN0Q2hELGdDQUFjNE8sdUJBQWQsQ0FBc0M1TCxPQUF0QztBQUNEOzs7aURBRWlDQSxPLEVBQVM7QUFDekNoRCxnQ0FBYzZPLDBCQUFkLENBQXlDN0wsT0FBekM7QUFDRDs7O2lEQUVpQ0EsTyxFQUFTO0FBQ3pDaEQsZ0NBQWM4TywwQkFBZCxDQUF5QzlMLE9BQXpDO0FBQ0Q7OztvREFFb0NBLE8sRUFBUztBQUM1Q2hELGdDQUFjK08sNkJBQWQsQ0FBNEMvTCxPQUE1QztBQUNEOzs7eUNBRXlCd0ksUSxFQUFVO0FBQ2xDNU0sa0NBQWdCeUYsT0FBaEIsQ0FBd0I3RixvQkFBVWhGLE9BQVYsQ0FBa0JZLFFBQTFDLEVBQ0UsSUFBSXdELHFCQUFKLEdBQ0NXLEdBREQsQ0FDS0Msb0JBQVU3RCxNQUFWLENBQWlCbUMsZ0JBRHRCLEVBQ3dDLEtBRHhDLENBREYsRUFFa0Q7QUFDOUNnRSxrQkFBUSxLQURzQztBQUU5Q0MsbUJBQVMsSUFGcUM7QUFHOUNULG9CQUFVLGtCQUFVQSxTQUFWLEVBQW9CO0FBQzVCLGdCQUFJc0osa0JBQWtCaEwsMEJBQWdCaUwsZUFBaEIsQ0FBZ0N2SixTQUFoQyxDQUF0QjtBQUNBLGdCQUFJME8sWUFBWXBRLDBCQUFnQnFRLGlCQUFoQixDQUFrQ3JGLGVBQWxDLENBQWhCO0FBQ0EsZ0JBQUlvRixTQUFKLEVBQWU7QUFDYnZMLGlDQUFTUyxVQUFULENBQ0UwRixnQkFBZ0JwTCxvQkFBVXhCLElBQVYsQ0FBZVQsSUFBL0IsQ0FERixFQUVFcU4sZ0JBQWdCcEwsb0JBQVV4QixJQUFWLENBQWVHLFFBQS9CLENBRkYsRUFHRXlNLGdCQUFnQnBMLG9CQUFVeEIsSUFBVixDQUFlSSxlQUEvQixDQUhGO0FBSUQ7QUFDRCxnQkFBSW9PLFFBQUosRUFBYztBQUNaQSx1QkFBU3dELFNBQVQ7QUFDRDtBQUNGO0FBZjZDLFNBRmxEO0FBb0JEOzs7NEJBRVlwUCxNLEVBQVFzUCxjLEVBQWdCMUQsUSxFQUFVO0FBQzdDO0FBQ0EsWUFBSSxPQUFPNUwsTUFBUCxLQUFrQixVQUF0QixFQUFrQztBQUNoQzRMLHFCQUFXNUwsTUFBWDtBQUNBc1AsMkJBQWlCLEVBQWpCO0FBQ0F0UCxtQkFBUyxJQUFUO0FBQ0QsU0FKRCxNQUlPLElBQUksUUFBT0EsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUFsQixJQUE4QkEsV0FBVyxJQUF6QyxJQUNQQSxXQUFXbEIsU0FEUixFQUNtQjtBQUN4QjhNLHFCQUFXMEQsY0FBWDtBQUNBQSwyQkFBaUJ0UCxNQUFqQjtBQUNBQSxtQkFBUyxJQUFUO0FBQ0QsU0FMTSxNQUtBLElBQUksT0FBT3NQLGNBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDL0MxRCxxQkFBVzBELGNBQVg7QUFDQUEsMkJBQWlCLEVBQWpCO0FBQ0Q7QUFDRHRRLGtDQUFnQmdCLE1BQWhCLEdBQXlCQSxNQUF6QjtBQUNBLFlBQUk0TCxRQUFKLEVBQWM7QUFDWm9DLG1CQUFTZ0IsdUJBQVQsQ0FBaUNwRCxRQUFqQztBQUNEOztBQUVEL0gsMkJBQVNRLFFBQVQsR0FBb0IsWUFBVTtBQUM1QmpFLGtDQUFjbVAsK0JBQWQ7QUFDRCxTQUZEOztBQUlBLFlBQUlwTixPQUFPLElBQUluRSxxQkFBSixHQUNOVyxHQURNLENBQ0ZDLG9CQUFVN0QsTUFBVixDQUFpQmUsZUFEZixFQUNnQzJGLEtBQUtDLFNBQUwsQ0FBZTROLGNBQWYsQ0FEaEMsRUFFTjNRLEdBRk0sQ0FFRkMsb0JBQVU3RCxNQUFWLENBQWlCaUIsT0FGZixFQUV3QjRDLG9CQUFVZCxNQUFWLENBQWlCQyxNQUZ6QyxFQUdOWSxHQUhNLENBR0ZDLG9CQUFVN0QsTUFBVixDQUFpQmtCLE1BSGYsRUFHdUIyQyxvQkFBVWQsTUFBVixDQUFpQkMsTUFIeEMsRUFJTlksR0FKTSxDQUlGQyxvQkFBVTdELE1BQVYsQ0FBaUJtQixJQUpmLEVBSXFCMEMsb0JBQVVkLE1BQVYsQ0FBaUJDLE1BSnRDLEVBS05ZLEdBTE0sQ0FLRkMsb0JBQVU3RCxNQUFWLENBQWlCb0IsUUFMZixFQUt5QnlDLG9CQUFVZCxNQUFWLENBQWlCQyxNQUwxQyxFQU1OWSxHQU5NLENBTUZDLG9CQUFVN0QsTUFBVixDQUFpQlMsV0FOZixFQU00QndTLFNBQVNTLFdBQVQsSUFBd0JWLGlCQUFpQjVFLEVBTnJFLEVBT054SyxHQVBNLENBT0ZDLG9CQUFVN0QsTUFBVixDQUFpQlUsY0FQZixFQU8rQixDQUFDdVMsU0FBU1csY0FBVCxJQUEyQixFQUE1QixFQUFnQ25PLFFBQWhDLEVBUC9CLEVBUU43QixHQVJNLENBUUZDLG9CQUFVN0QsTUFBVixDQUFpQlcsWUFSZixFQVE2QnFTLGlCQUFpQmpGLE9BUjlDLEVBU05uSyxHQVRNLENBU0ZDLG9CQUFVN0QsTUFBVixDQUFpQlksZUFUZixFQVNnQ29TLGlCQUFpQi9FLE9BQWpCLENBQXlCeEksUUFBekIsRUFUaEMsRUFVTjdCLEdBVk0sQ0FVRkMsb0JBQVU3RCxNQUFWLENBQWlCZ0IsTUFWZixFQVV1QjZDLG9CQUFVZCxNQUFWLENBQWlCQyxNQVZ4QyxFQVdOWSxHQVhNLENBV0ZDLG9CQUFVN0QsTUFBVixDQUFpQmEsV0FYZixFQVc0Qm9TLFNBQVNLLFdBQVQsSUFDNUJOLGlCQUFpQmpGLE9BRFcsU0FDQWlGLGlCQUFpQi9FLE9BWjdDLEVBYU5ySyxHQWJNLENBYUZDLG9CQUFVN0QsTUFBVixDQUFpQmMsWUFiZixFQWE2Qm1TLFNBQVNPLFlBQVQsSUFBeUIsYUFidEQsRUFjTjVQLEdBZE0sQ0FjRkMsb0JBQVU3RCxNQUFWLENBQWlCbUMsZ0JBZGYsRUFjaUMsS0FkakMsQ0FBWDs7QUFnQkE7QUFDQTtBQUNFOEIsa0NBQWdCeUYsT0FBaEIsQ0FBd0I3RixvQkFBVWhGLE9BQVYsQ0FBa0JDLEtBQTFDLEVBQWlEc0ksSUFBakQsRUFBdUQ7QUFDdkRqQixrQkFBUSxJQUQrQztBQUV2REMsbUJBQVMsSUFGOEM7QUFHdkRULG9CQUFVLGtCQUFTQSxVQUFULEVBQW1CO0FBQzNCTixvQ0FBY2tELFVBQWQsR0FBMkIsSUFBM0I7QUFDQSxnQkFBSWtNLGdCQUFnQnhRLDBCQUFnQmlMLGVBQWhCLENBQWdDdkosVUFBaEMsQ0FBcEI7QUFDQSxnQkFBSTFCLDBCQUFnQnFRLGlCQUFoQixDQUFrQ0csYUFBbEMsQ0FBSixFQUFzRDtBQUNwRHBQLHNDQUFjbUQsZUFBZCxHQUFnQyxJQUFoQzs7QUFFQSxrQkFBSW5ELHdCQUFjQyxPQUFsQixFQUEyQjtBQUN6QixvQkFBSW9QLGdCQUFnQkQsY0FBYzVRLG9CQUFVeEIsSUFBVixDQUFlRSxjQUE3QixDQUFwQjtBQUNBLG9CQUFJbVMsYUFBSixFQUFtQjtBQUNqQjVPLDBCQUFRMkQsR0FBUixDQUFZLGtDQUFnQ2lMLGFBQWhDLDZCQUNSLDhCQURKO0FBRUQ7QUFDRGpHLHlDQUFlZSxPQUFmO0FBQ0Q7O0FBRUQxRyxpQ0FBU1MsVUFBVCxDQUNJa0wsY0FBYzVRLG9CQUFVeEIsSUFBVixDQUFlVCxJQUE3QixDQURKLEVBRUk2UyxjQUFjNVEsb0JBQVV4QixJQUFWLENBQWVHLFFBQTdCLENBRkosRUFHSWlTLGNBQWM1USxvQkFBVXhCLElBQVYsQ0FBZUksZUFBN0IsQ0FISjtBQUlBcUcsaUNBQVNVLEtBQVQsR0FBaUJpTCxjQUFjNVEsb0JBQVV4QixJQUFWLENBQWVLLEtBQTdCLENBQWpCO0FBQ0QsYUFqQkQsTUFpQk87QUFDTDJDLHNDQUFjbUQsZUFBZCxHQUFnQyxLQUFoQztBQUNBTSxpQ0FBUzZMLFNBQVQ7QUFDRDtBQUNEdFAsb0NBQWN1UCxvQkFBZDtBQUNEO0FBNUJzRCxTQUF2RDtBQThCSDs7O3FDQUVxQjNQLE0sRUFBUXNQLGMsRUFBZ0IxRCxRLEVBQVU7QUFDdEQ7QUFDQSxZQUFJLE9BQU81TCxNQUFQLEtBQWtCLFVBQXRCLEVBQWtDO0FBQ2hDNEwscUJBQVc1TCxNQUFYO0FBQ0E7QUFDQXNQLDJCQUFpQixFQUFqQjtBQUNBdFAsbUJBQVMsSUFBVDtBQUNELFNBTEQsTUFLTyxJQUFJLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBbEIsSUFBOEJBLFdBQVcsSUFBekMsSUFDUEEsV0FBV2xCLFNBRFIsRUFDbUI7QUFDeEI4TSxxQkFBVzBELGNBQVg7QUFDQTtBQUNBQSwyQkFBaUJ0UCxNQUFqQjtBQUNBQSxtQkFBUyxJQUFUO0FBQ0QsU0FOTSxNQU1BLElBQUksT0FBT3NQLGNBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDL0MxRCxxQkFBVzBELGNBQVg7QUFDQTtBQUNBQSwyQkFBaUIsRUFBakI7QUFDRDtBQUNEdFEsa0NBQWdCZ0IsTUFBaEIsR0FBeUJBLE1BQXpCO0FBQ0EsWUFBSTRMLFFBQUosRUFBYztBQUNab0MsbUJBQVNnQix1QkFBVCxDQUFpQ3BELFFBQWpDO0FBQ0Q7O0FBRUR4TCxnQ0FBY2tELFVBQWQsR0FBMkIsSUFBM0I7QUFDQWxELGdDQUFjbUQsZUFBZCxHQUFnQyxJQUFoQztBQUNBLFlBQUluRCx3QkFBY0MsT0FBbEIsRUFBMkI7QUFDekJtSixtQ0FBZWUsT0FBZjtBQUNEO0FBQ0QxRywyQkFBUzZMLFNBQVQ7QUFDQXRQLGdDQUFjdVAsb0JBQWQ7QUFDRDs7OzZCQUVhO0FBQ1o7QUFDRTNRLGtDQUFnQnlGLE9BQWhCLENBQXdCN0Ysb0JBQVVoRixPQUFWLENBQWtCRSxJQUExQyxFQUFnRGdGLFNBQWhELEVBQTJEO0FBQzNEcUMsbUJBQVMsSUFEa0Q7QUFFM0RELGtCQUFRO0FBRm1ELFNBQTNEO0FBSUg7OztxQ0FFcUI7QUFDcEI7QUFDRWxDLGtDQUFnQnlGLE9BQWhCLENBQXdCN0Ysb0JBQVVoRixPQUFWLENBQWtCSyxhQUExQyxFQUF5RDZFLFNBQXpELEVBQW9FO0FBQ3BFcUMsbUJBQVMsSUFEMkQ7QUFFcEVELGtCQUFRO0FBRjRELFNBQXBFO0FBSUg7OztzQ0FFc0I7QUFDckI7QUFDRWxDLGtDQUFnQnlGLE9BQWhCLENBQXdCN0Ysb0JBQVVoRixPQUFWLENBQWtCTSxjQUExQyxFQUEwRDRFLFNBQTFELEVBQXFFO0FBQ3JFcUMsbUJBQVMsSUFENEQ7QUFFckVELGtCQUFRO0FBRjZELFNBQXJFO0FBSUg7OzttQ0FFbUI7QUFDbEI7QUFDRWxDLGtDQUFnQnlGLE9BQWhCLENBQXdCN0Ysb0JBQVVoRixPQUFWLENBQWtCTyxXQUExQyxFQUF1RDJFLFNBQXZELEVBQWtFO0FBQ2xFb0Msa0JBQVE7QUFEMEQsU0FBbEU7QUFHSDs7O29DQUVvQjtBQUNuQjtBQUNFbEMsa0NBQWdCeUYsT0FBaEIsQ0FBd0I3RixvQkFBVWhGLE9BQVYsQ0FBa0JRLFlBQTFDLEVBQXdEMEUsU0FBeEQsRUFBbUU7QUFDbkVvQyxrQkFBUTtBQUQyRCxTQUFuRTtBQUdIOzs7Z0NBRWdCbEIsTSxFQUFRO0FBQ3ZCZ08saUJBQVM0QixpQkFBVCxDQUEyQjVQLE1BQTNCO0FBQ0Q7Ozt3Q0FFd0JBLE0sRUFBUXNQLGMsRUFBZ0I7QUFDL0MsWUFBSUEsbUJBQW1CeFEsU0FBdkIsRUFBa0M7QUFDaEMsY0FBSSxRQUFPa0IsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUF0QixFQUFnQztBQUM5QnNQLDZCQUFpQnRQLE1BQWpCO0FBQ0FBLHFCQUFTbEIsU0FBVDtBQUNELFdBSEQsTUFHTyxJQUFJLE9BQU9rQixNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQ3JDYSxvQkFBUTJELEdBQVIsQ0FBWSx3REFDUixRQURKO0FBRUE7QUFDRDtBQUNGO0FBQ0Q7QUFDRXhGLGtDQUFnQnlGLE9BQWhCLENBQXdCN0Ysb0JBQVVoRixPQUFWLENBQWtCYSxtQkFBMUMsRUFDRSxJQUFJdUQscUJBQUosR0FDS1csR0FETCxDQUNTQyxvQkFBVTdELE1BQVYsQ0FBaUJlLGVBRDFCLEVBRVF3VCxpQkFBaUI3TixLQUFLQyxTQUFMLENBQWU0TixjQUFmLENBQWpCLEdBQWtEeFEsU0FGMUQsRUFHS0gsR0FITCxDQUdTQyxvQkFBVTdELE1BQVYsQ0FBaUJNLFdBSDFCLEVBR3VDMkUsTUFIdkMsQ0FERixFQUlrRDtBQUM5Q2tCLGtCQUFRO0FBRHNDLFNBSmxEO0FBT0YsWUFBSWxCLE1BQUosRUFBWTtBQUNWaEIsb0NBQWdCZ0IsTUFBaEIsR0FBeUJBLE1BQXpCO0FBQ0FYLHdDQUFvQlUsa0JBQXBCLENBQXVDbkIsb0JBQVVsQixZQUFWLENBQXVCdEMsT0FBOUQsRUFBdUU0RCwwQkFBZ0JnQixNQUF2RjtBQUNEO0FBQ0Y7Ozs0QkFFWThKLEssRUFBTzFMLEssRUFBT3lSLEksRUFBTTNRLE0sRUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUksUUFBT2QsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFqQixJQUE2QkEsVUFBVSxJQUF2QyxJQUErQ0EsVUFBVVUsU0FBN0QsRUFBd0U7QUFDdEVJLG1CQUFTZCxLQUFUO0FBQ0F5UixpQkFBTy9RLFNBQVA7QUFDQVYsa0JBQVFVLFNBQVI7QUFDRCxTQUpELE1BSU8sSUFBSSxPQUFPVixLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQ3BDYyxtQkFBUzJRLElBQVQ7QUFDQUEsaUJBQU96UixLQUFQO0FBQ0FBLGtCQUFRVSxTQUFSO0FBQ0QsU0FKTSxNQUlBLElBQUksUUFBTytRLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBaEIsSUFBNEJBLFNBQVMsSUFBckMsSUFBNkNBLFNBQVMvUSxTQUExRCxFQUFxRTtBQUMxRUksbUJBQVMyUSxJQUFUO0FBQ0FBLGlCQUFPL1EsU0FBUDtBQUNEO0FBQ0Q7QUFDRUUsa0NBQWdCeUYsT0FBaEIsQ0FBd0I3RixvQkFBVWhGLE9BQVYsQ0FBa0JJLEtBQTFDLEVBQ0UsSUFBSWdFLHFCQUFKLEdBQ0tXLEdBREwsQ0FDU0Msb0JBQVU3RCxNQUFWLENBQWlCdUIsS0FEMUIsRUFDaUN3TixLQURqQyxFQUVLbkwsR0FGTCxDQUVTQyxvQkFBVTdELE1BQVYsQ0FBaUJ3QixLQUYxQixFQUVpQzZCLFNBQVMsR0FGMUMsRUFHS08sR0FITCxDQUdTQyxvQkFBVTdELE1BQVYsQ0FBaUJzQixJQUgxQixFQUdnQ3dULElBSGhDLEVBSUtsUixHQUpMLENBSVNDLG9CQUFVN0QsTUFBVixDQUFpQkEsTUFKMUIsRUFJa0MwRyxLQUFLQyxTQUFMLENBQWV4QyxNQUFmLENBSmxDLENBREYsRUFLNkQ7QUFDekRnQyxrQkFBUTtBQURpRCxTQUw3RDtBQVFIOzs7Z0NBRWdCNE8sSyxFQUFPRCxJLEVBQU0zUSxNLEVBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsWUFBSSxRQUFPMlEsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUFoQixJQUE0QkEsU0FBUyxJQUFyQyxJQUE2Q0EsU0FBUy9RLFNBQTFELEVBQXFFO0FBQ25FSSxtQkFBUzJRLElBQVQ7QUFDQUEsaUJBQU8vUSxTQUFQO0FBQ0Q7O0FBRURFLGtDQUFnQnlGLE9BQWhCLENBQXdCN0Ysb0JBQVVoRixPQUFWLENBQWtCRyxPQUExQyxFQUNJLElBQUlpRSxxQkFBSixHQUNHVyxHQURILENBQ09DLG9CQUFVN0QsTUFBVixDQUFpQnFCLEtBRHhCLEVBQytCMFQsS0FEL0IsRUFFR25SLEdBRkgsQ0FFT0Msb0JBQVU3RCxNQUFWLENBQWlCc0IsSUFGeEIsRUFFOEJ3VCxJQUY5QixFQUdHbFIsR0FISCxDQUdPQyxvQkFBVTdELE1BQVYsQ0FBaUJBLE1BSHhCLEVBR2dDMEcsS0FBS0MsU0FBTCxDQUFleEMsTUFBZixDQUhoQyxDQURKLEVBSTZEO0FBQ3pEZ0Msa0JBQVE7QUFEaUQsU0FKN0Q7QUFPRDs7OzJDQU0yQjtBQUMxQixlQUFPNkosc0JBQVlFLGtCQUFaLEVBQVA7QUFDRDs7OzRDQU00QjtBQUMzQixlQUFPRixzQkFBWXFCLG1CQUFaLEVBQVA7QUFDRDs7O3lDQVN5QlQsZ0IsRUFBa0I7QUFDMUMsZUFBTyxJQUFJVCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVYyxNQUFWLEVBQXFCO0FBQ3RDLGNBQUlsQixzQkFBWUUsa0JBQVosRUFBSixFQUFzQztBQUNwQyxtQkFBT0Ysc0JBQVljLFFBQVosQ0FBcUJGLGdCQUFyQixFQUF1QyxVQUFDZCxZQUFELEVBQWtCO0FBQzlELGtCQUFJQSxZQUFKLEVBQWtCO0FBQ2hCLHVCQUFPTSxRQUFRLElBQVIsQ0FBUDtBQUNEO0FBQ0QscUJBQU9KLHNCQUFZZ0YsYUFBWixFQUFQO0FBQ0QsYUFMTSxDQUFQO0FBTUQsV0FQRCxNQU9PO0FBQ0wsbUJBQU85RCxPQUFPLHFDQUFQLENBQVA7QUFDRDtBQUNGLFNBWE0sQ0FBUDtBQVlEOzs7OENBTThCO0FBQzdCLGVBQU9sQixzQkFBWWlGLGVBQVosRUFBUDtBQUNEOzs7Ozs7b0JBcFlrQmhDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DYkFyRSxjO0FBQ25COzs7QUFHQSw4QkFBYztBQUFBOztBQUNaLFdBQUtlLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxXQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzhCQUlRSCxVLEVBQVk7QUFDbEI7QUFDQSxZQUFJeUYsT0FBTyxJQUFYO0FBQ0FBLGFBQUt0RixVQUFMLEdBQWtCLElBQWxCO0FBQ0F1RiwwQkFBUW5QLElBQVIsQ0FBYSxNQUFiLGVBQWdDeUosVUFBaEMsbUJBQTBELEVBQTFELEVBQ0ksVUFBUzJGLElBQVQsRUFBZTtBQUNiLGNBQUlDLFFBQVFELEtBQUtFLEtBQUwsQ0FBVyxHQUFYLENBQVo7QUFDQSxjQUFJQyxVQUFVRixNQUFNLENBQU4sQ0FBZDtBQUNBLGNBQUlHLFlBQVk5SyxTQUFTMkssTUFBTSxDQUFOLENBQVQsSUFBcUIsQ0FBckIsR0FBeUIsSUFBekM7QUFDQUgsZUFBS08sTUFBTCxHQUFjLElBQUkvRyxTQUFKLFlBQXVCZSxVQUF2QiwrQkFBMkQ4RixPQUEzRCxDQUFkO0FBQ0EsY0FBSUcsb0JBQW9CLElBQXhCO0FBQ0FSLGVBQUtPLE1BQUwsQ0FBWTNHLE1BQVosR0FBcUIsWUFBVztBQUM5Qm9HLGlCQUFLdkYsU0FBTCxHQUFpQixJQUFqQjtBQUNBdUYsaUJBQUt0RixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsZ0JBQUlzRixLQUFLcEcsTUFBVCxFQUFpQjtBQUNmb0csbUJBQUtwRyxNQUFMO0FBQ0Q7QUFDRDRHLGdDQUFvQmhHLFlBQVksWUFBVztBQUN6Q3dGLG1CQUFLTyxNQUFMLENBQVlsSixJQUFaLENBQWlCLE1BQWpCO0FBQ0QsYUFGbUIsRUFFakJpSixTQUZpQixDQUFwQjtBQUdELFdBVEQ7QUFVQU4sZUFBS08sTUFBTCxDQUFZbEcsT0FBWixHQUFzQixZQUFXO0FBQy9CMkYsaUJBQUt2RixTQUFMLEdBQWlCLEtBQWpCO0FBQ0FnRywwQkFBY0QsaUJBQWQ7QUFDQSxnQkFBSVIsS0FBSzNGLE9BQVQsRUFBa0I7QUFDaEIyRixtQkFBSzNGLE9BQUw7QUFDRDtBQUNGLFdBTkQ7QUFPQTJGLGVBQUtPLE1BQUwsQ0FBWXpHLFNBQVosR0FBd0IsVUFBU0QsS0FBVCxFQUFnQjtBQUN0QyxnQkFBSTZHLGVBQWU3RyxNQUFNOUQsSUFBTixDQUFXcUssS0FBWCxDQUFpQixHQUFqQixDQUFuQjtBQUNBLGdCQUFJTyxPQUFPbkwsU0FBU2tMLGFBQWEsQ0FBYixDQUFULENBQVg7QUFDQSxnQkFBSUMsU0FBUyxDQUFiLEVBQWdCO0FBQ2RYLG1CQUFLTyxNQUFMLENBQVlsSixJQUFaLENBQWlCLEtBQWpCO0FBQ0QsYUFGRCxNQUVPLElBQUlzSixTQUFTLENBQWIsRUFBZ0I7QUFDckIsa0JBQUlDLFlBQVlGLGFBQWEsQ0FBYixDQUFoQjtBQUNBLGtCQUFJM0ssT0FBT3ZFLEtBQUtlLEtBQUwsQ0FBV21PLGFBQWFHLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JDLElBQXRCLENBQTJCLEdBQTNCLENBQVgsQ0FBWDtBQUNBLGtCQUFJQyxlQUFlaEwsS0FBS2lMLElBQXhCO0FBQ0Esa0JBQUk5TyxPQUFPNkQsS0FBSzdELElBQWhCO0FBQ0Esa0JBQUkwTyxTQUFKLEVBQWU7QUFDYloscUJBQUtPLE1BQUwsQ0FBWWxKLElBQVosVUFBd0J1SixTQUF4QjtBQUNEO0FBQ0Qsa0JBQUlaLEtBQUtsRyxTQUFULEVBQW9CO0FBQ2xCa0cscUJBQUtsRyxTQUFMLENBQWVpSCxZQUFmLEVBQTZCN08sSUFBN0I7QUFDRDtBQUNGLGFBWE0sTUFXQSxJQUFJeU8sU0FBUyxDQUFiLEVBQWdCO0FBQ3JCL1Asc0JBQVEyRCxHQUFSLG9CQUE2QnNGLE1BQU05RCxJQUFuQztBQUNEO0FBQ0YsV0FuQkQ7QUFvQkFpSyxlQUFLTyxNQUFMLENBQVk5SSxPQUFaLEdBQXNCLFVBQVNvQyxLQUFULEVBQWdCO0FBQ3BDbUcsaUJBQUtPLE1BQUwsQ0FBWVUsS0FBWjtBQUNBLGdCQUFJakIsS0FBS3ZJLE9BQVQsRUFBa0I7QUFDaEJ1SSxtQkFBS3ZJLE9BQUwsQ0FBYW9DLEtBQWI7QUFDRDtBQUNGLFdBTEQ7QUFNRCxTQWxETCxFQWtETyxJQWxEUCxFQWtEYSxLQWxEYixFQWtEb0IsSUFsRHBCLENBa0R5QjtBQWxEekI7QUFvREQ7OzsyQkFPSW1ILEksRUFBTTlPLEksRUFBTTtBQUNmLFlBQUksQ0FBQyxLQUFLdUksU0FBVixFQUFxQjtBQUNuQjdKLGtCQUFRMkQsR0FBUixDQUFZLG9DQUFaO0FBQ0E7QUFDRDtBQUNELFlBQUkyTSxXQUFXMVAsS0FBS0MsU0FBTCxDQUFlO0FBQzVCdVAsb0JBRDRCO0FBRTVCOU87QUFGNEIsU0FBZixDQUFmO0FBSUEsYUFBS3FPLE1BQUwsQ0FBWWxKLElBQVosVUFBd0I2SixRQUF4QjtBQUNEOzs7Ozs7b0JBdEZrQnhILGM7Ozs7Ozs7O0FDdkJyQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9CQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNMQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN0QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ25CQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNEQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNaQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0dBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoibGVhbnBsdW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJMZWFucGx1bVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJMZWFucGx1bVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNmEyZmJiMjc4OWM1YzczOGVjYyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTUVUSE9EUzoge1xuICAgIFNUQVJUOiAnc3RhcnQnLFxuICAgIFNUT1A6ICdzdG9wJyxcbiAgICBBRFZBTkNFOiAnYWR2YW5jZScsXG4gICAgVFJBQ0s6ICd0cmFjaycsXG4gICAgUEFVU0VfU0VTU0lPTjogJ3BhdXNlU2Vzc2lvbicsXG4gICAgUkVTVU1FX1NFU1NJT046ICdyZXN1bWVTZXNzaW9uJyxcbiAgICBQQVVTRV9TVEFURTogJ3BhdXNlU3RhdGUnLFxuICAgIFJFU1VNRV9TVEFURTogJ3Jlc3VtZVN0YXRlJyxcbiAgICBET1dOTE9BRF9GSUxFOiAnZG93bmxvYWRGaWxlJyxcbiAgICBNVUxUSTogJ211bHRpJyxcbiAgICBTRVRfVkFSUzogJ3NldFZhcnMnLFxuICAgIEdFVF9WQVJTOiAnZ2V0VmFycycsXG4gICAgU0VUX1VTRVJfQVRUUklCVVRFUzogJ3NldFVzZXJBdHRyaWJ1dGVzJyxcbiAgICBTRVRfREVWSUNFX0FUVFJJQlVURVM6ICdzZXREZXZpY2VBdHRyaWJ1dGVzJyxcbiAgICBVUExPQURfRklMRTogJ3VwbG9hZEZpbGUnLFxuICAgIFJFR0lTVEVSX0RFVklDRTogJ3JlZ2lzdGVyRGV2aWNlJ1xuICB9LFxuXG4gIFNES19WRVJTSU9OOiAnMS4yLjQnLFxuXG4gIENMSUVOVDogJ2pzJyxcblxuICBQQVJBTVM6IHtcbiAgICBBQ1RJT046ICdhY3Rpb24nLFxuICAgIEFQUF9JRDogJ2FwcElkJyxcbiAgICBDTElFTlQ6ICdjbGllbnQnLFxuICAgIENMSUVOVF9LRVk6ICdjbGllbnRLZXknLFxuICAgIERFVklDRV9JRDogJ2RldmljZUlkJyxcbiAgICBTREtfVkVSU0lPTjogJ3Nka1ZlcnNpb24nLFxuICAgIFVTRVJfSUQ6ICd1c2VySWQnLFxuICAgIE5FV19VU0VSX0lEOiAnbmV3VXNlcklkJyxcbiAgICBERVZfTU9ERTogJ2Rldk1vZGUnLFxuICAgIFZFUlNJT05fTkFNRTogJ3ZlcnNpb25OYW1lJyxcbiAgICBTWVNURU1fTkFNRTogJ3N5c3RlbU5hbWUnLFxuICAgIFNZU1RFTV9WRVJTSU9OOiAnc3lzdGVtVmVyc2lvbicsXG4gICAgQlJPV1NFUl9OQU1FOiAnYnJvd3Nlck5hbWUnLFxuICAgIEJST1dTRVJfVkVSU0lPTjogJ2Jyb3dzZXJWZXJzaW9uJyxcbiAgICBERVZJQ0VfTkFNRTogJ2RldmljZU5hbWUnLFxuICAgIERFVklDRV9NT0RFTDogJ2RldmljZU1vZGVsJyxcbiAgICBVU0VSX0FUVFJJQlVURVM6ICd1c2VyQXR0cmlidXRlcycsXG4gICAgTE9DQUxFOiAnbG9jYWxlJyxcbiAgICBDT1VOVFJZOiAnY291bnRyeScsXG4gICAgUkVHSU9OOiAncmVnaW9uJyxcbiAgICBDSVRZOiAnY2l0eScsXG4gICAgTE9DQVRJT046ICdsb2NhdGlvbicsXG4gICAgU1RBVEU6ICdzdGF0ZScsXG4gICAgSU5GTzogJ2luZm8nLFxuICAgIEVWRU5UOiAnZXZlbnQnLFxuICAgIFZBTFVFOiAndmFsdWUnLFxuICAgIEZJTEVOQU1FOiAnZmlsZW5hbWUnLFxuICAgIFRJTUU6ICd0aW1lJyxcbiAgICBEQVRBOiAnZGF0YScsXG4gICAgVkFSUzogJ3ZhcnMnLFxuICAgIEZJTEU6ICdmaWxlJyxcbiAgICBTSVpFOiAnc2l6ZScsXG4gICAgVkFSSUFUSU9OOiAndmFyaWF0aW9uJyxcbiAgICBIQVNIOiAnaGFzaCcsXG4gICAgRU1BSUw6ICdlbWFpbCcsXG4gICAgVkFSSUFCTEVTOiAndmFycycsXG4gICAgUEFSQU1TOiAncGFyYW1zJyxcbiAgICBJTkNMVURFX0RFRkFVTFRTOiAnaW5jbHVkZURlZmF1bHRzJyxcbiAgICBXRUJfUFVTSF9TVUJTQ1JJUFRJT046ICd3ZWJQdXNoU3Vic2NyaXB0aW9uJ1xuICB9LFxuXG4gIEtFWVM6IHtcbiAgICBJU19SRUdJU1RFUkVEOiAnaXNSZWdpc3RlcmVkJyxcbiAgICBMQVRFU1RfVkVSU0lPTjogJ2xhdGVzdFZlcnNpb24nLFxuICAgIFZBUlM6ICd2YXJzJyxcbiAgICBWQVJJQU5UUzogJ3ZhcmlhbnRzJyxcbiAgICBBQ1RJT05fTUVUQURBVEE6ICdhY3Rpb25NZXRhZGF0YScsXG4gICAgVE9LRU46ICd0b2tlbidcbiAgfSxcblxuICBERUZBVUxUX0tFWVM6IHtcbiAgICBDT1VOVDogJ19fbGVhbnBsdW1fdW5zeW5jZWQnLFxuICAgIElURU06ICdfX2xlYW5wbHVtX3Vuc3luY2VkXycsXG4gICAgVkFSSUFCTEVTOiAnX19sZWFucGx1bV92YXJpYWJsZXMnLFxuICAgIFZBUklBTlRTOiAnX19sZWFucGx1bV92YXJpYW50cycsXG4gICAgQUNUSU9OX01FVEFEQVRBOiAnX19sZWFucGx1bV9hY3Rpb25fbWV0YWRhdGEnLFxuICAgIFRPS0VOOiAnX19sZWFucGx1bV90b2tlbicsXG4gICAgREVWSUNFX0lEOiAnX19sZWFucGx1bV9kZXZpY2VfaWQnLFxuICAgIFVTRVJfSUQ6ICdfX2xlYW5wbHVtX3VzZXJfaWQnLFxuICAgIFBVU0hfU1VCU0NSSVBUSU9OOiAnX19sZWFucGx1bV9wdXNoX3N1YnNjcmlwdGlvbidcbiAgfSxcblxuICBWQUxVRVM6IHtcbiAgICBERVRFQ1Q6ICcoZGV0ZWN0KSdcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy5qcyIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5cbi8qKlxuICogTGVhbnBsdW0gQXJnc0J1aWxkZXIsIHVzZSB0byBjb25zdHJ1Y3QgcmVxdWVzdCBwYXlsb2FkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmdzQnVpbGRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZW1wdHkgcmVxdWVzdCBhcmd1bWVudC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJnU3RyaW5nID0gJydcbiAgICB0aGlzLmFyZ1ZhbHVlcyA9IHt9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGdpdmVuIGtleSwgdmFsdWUgdG8gdGhlIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSB2YWx1ZSBUaGUgdmFsdWUgZm9yIGdpdmVuIGtleS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYWRkKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgaWYgKHRoaXMuYXJnU3RyaW5nKSB7XG4gICAgICB0aGlzLmFyZ1N0cmluZyArPSAnJidcbiAgICB9XG4gICAgbGV0IGVuY29kZWRVcmlDb21wb25lbnQgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXG4gICAgdGhpcy5hcmdTdHJpbmcgKz0gYCR7a2V5fT0ke2VuY29kZWRVcmlDb21wb25lbnR9YFxuICAgIHRoaXMuYXJnVmFsdWVzW2tleV0gPSB2YWx1ZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvKipcbiAgICogQ2FjaGUgdGhlIGdpdmVuIGJvZHkuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW2JvZHldIEEgZ2l2ZW4gYm9keS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ8U3RyaW5nfSBSZXR1cm5zIEFyZ3NCdWlsZGVyIGlmIGJvZHkgZ2l2ZW4sIGVsc2UgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5cbiAgICovXG4gIGJvZHkoYm9keSkge1xuICAgIGlmIChib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5ID0gYm9keVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2JvZHlcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gYXR0YWNoIGdpdmVuIGFwcElkIGFuZCBhcHBLZXkgdG8gcmVxdWVzdC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBhcHBJZCBUaGUgYXBwSWQgdG8gYXR0YWNoLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNsaWVudEtleSBUaGUgYXBwS2V5IHRvIGF0dGFjaC5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYXR0YWNoQXBpS2V5cyhhcHBJZCwgY2xpZW50S2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKENvbnN0YW50cy5QQVJBTVMuQVBQX0lELCBhcHBJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVCwgQ29uc3RhbnRzLkNMSUVOVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVF9LRVksIGNsaWVudEtleSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGFyZ3VtZW50cy5cbiAgICogQHJldHVybiB7U3RyaW5nfSBBcmd1bWVudHMgc3RyaW5nLlxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJnU3RyaW5nXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBhcmd1bWVudCB2YWx1ZXMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGFyZ3VtZW50IHZhbHVlcy5cbiAgICovXG4gIGJ1aWxkRGljdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcmdWYWx1ZXNcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vTmV0d29yaydcbmltcG9ydCBMb2NhbFN0b3JhZ2VNYW5hZ2VyIGZyb20gJy4vTG9jYWxTdG9yYWdlTWFuYWdlcidcblxubGV0IGxhc3RSZXF1ZXN0VGltZSA9IHVuZGVmaW5lZFxubGV0IGNvb2xkb3duVGltZW91dCA9IG51bGxcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhbnBsdW1SZXF1ZXN0IHtcblxuICBzdGF0aWMgYXBpUGF0aCA9ICdodHRwczovL3d3dy5sZWFucGx1bS5jb20vYXBpJ1xuICBzdGF0aWMgYmF0Y2hFbmFibGVkID0gdHJ1ZVxuICBzdGF0aWMgYmF0Y2hDb29sZG93biA9IDVcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvblxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25zLnN1Y2Nlc3NcbiAgICogQHBhcmFtIG9wdGlvbnMuZXJyb3JcbiAgICogQHBhcmFtIG9wdGlvbnMucmVzcG9uc2VcbiAgICogQHBhcmFtIG9wdGlvbnMucXVldWVkXG4gICAqIEBwYXJhbSBvcHRpb25zLnNlbmROb3dcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyByZXF1ZXN0KGFjdGlvbiwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgbmV3IEFyZ3NCdWlsZGVyKClcblxuICAgIC8vIEdldCBvciBjcmVhdGUgZGV2aWNlIElEIGFuZCB1c2VyIElELlxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQgPVxuICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpIHtcbiAgICAgIGxldCBpZCA9ICcnXG4gICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgK1xuICAgICAgICAgICcwMTIzNDU2Nzg5J1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlkICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKVxuICAgICAgfVxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID0gaWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuREVWSUNFX0lELCBpZClcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QudXNlcklkKSB7XG4gICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRClcbiAgICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZCkge1xuICAgICAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkXG4gICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcblxuICAgIGxldCBhcmdzQnVpbGRlciA9IHBhcmFtc1xuICAgICAgICAuYXR0YWNoQXBpS2V5cyhMZWFucGx1bVJlcXVlc3QuYXBwSWQsIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX0lELCBMZWFucGx1bVJlcXVlc3QuZGV2aWNlSWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0lELCBMZWFucGx1bVJlcXVlc3QudXNlcklkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQUNUSU9OLCBhY3Rpb24pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5WRVJTSU9OX05BTUUsIExlYW5wbHVtUmVxdWVzdC52ZXJzaW9uTmFtZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVl9NT0RFLCBJbnRlcm5hbFN0YXRlLmRldk1vZGUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5USU1FLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpKVxuICAgIGxldCBzdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzIHx8IG9wdGlvbnMucmVzcG9uc2VcbiAgICBsZXQgZXJyb3IgPSBvcHRpb25zLmVycm9yIHx8IG9wdGlvbnMucmVzcG9uc2VcblxuICAgIGlmICghTGVhbnBsdW1SZXF1ZXN0LmFwcElkIHx8ICFMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5KSB7XG4gICAgICBsZXQgZXJyID0gJ0xlYW5wbHVtIEFwcCBJRCBhbmQgY2xpZW50IGtleSBhcmUgbm90IHNldC4gTWFrZSBzdXJlIHlvdSAnICtcbiAgICAgICAgICAnYXJlIGNhbGxpbmcgc2V0QXBwSWRGb3JEZXZlbG9wbWVudE1vZGUgb3Igc2V0QXBwSWRGb3JQcm9kdWN0aW9uTW9kZSAnICtcbiAgICAgICAgICAnYmVmb3JlIGlzc3VpbmcgQVBJIGNhbGxzLidcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgaWYgKGVycm9yKSBlcnJvcihlcnIpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmJvZHkoKSkge1xuICAgICAgTmV0d29yay5hamF4KCdQT1NUJywgYCR7TGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGh9PyR7YXJnc0J1aWxkZXIuYnVpbGQoKX1gLFxuICAgICAgICAgIHBhcmFtcy5ib2R5KCksIHN1Y2Nlc3MsIGVycm9yLCBvcHRpb25zLnF1ZXVlZClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBzZW5kTm93ID0gSW50ZXJuYWxTdGF0ZS5kZXZNb2RlIHx8IG9wdGlvbnMuc2VuZE5vdyB8fCAhTGVhbnBsdW1SZXF1ZXN0LmJhdGNoRW5hYmxlZFxuXG4gICAgbGV0IHNlbmRVbnNlbnRSZXF1ZXN0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHJlcXVlc3RzVG9TZW5kID0gTGVhbnBsdW1SZXF1ZXN0LnBvcFVuc2VudFJlcXVlc3RzKClcbiAgICAgIGlmIChyZXF1ZXN0c1RvU2VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAnZGF0YSc6IHJlcXVlc3RzVG9TZW5kXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBtdWx0aVJlcXVlc3RBcmdzID0gbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hdHRhY2hBcGlLZXlzKExlYW5wbHVtUmVxdWVzdC5hcHBJZCwgTGVhbnBsdW1SZXF1ZXN0LmNsaWVudEtleSlcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkFDVElPTiwgQ29uc3RhbnRzLk1FVEhPRFMuTVVMVEkpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVElNRSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkudG9TdHJpbmcoKS50b1N0cmluZygpKVxuICAgICAgICAgICAgLmJ1aWxkKClcbiAgICAgICAgTmV0d29yay5hamF4KCdQT1NUJywgYCR7TGVhbnBsdW1SZXF1ZXN0LmFwaVBhdGh9PyR7bXVsdGlSZXF1ZXN0QXJnc31gLCByZXF1ZXN0RGF0YSwgc3VjY2VzcywgZXJyb3IsXG4gICAgICAgICAgICBvcHRpb25zLnF1ZXVlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWFsIHdpdGggY29vbGRvd24uXG4gICAgaWYgKCFzZW5kTm93ICYmIExlYW5wbHVtUmVxdWVzdC5iYXRjaENvb2xkb3duKSB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXG4gICAgICBpZiAoIWxhc3RSZXF1ZXN0VGltZSB8fFxuICAgICAgICAgIG5vdyAtIGxhc3RSZXF1ZXN0VGltZSA+PSBMZWFucGx1bVJlcXVlc3QuYmF0Y2hDb29sZG93bikge1xuICAgICAgICBzZW5kTm93ID0gdHJ1ZVxuICAgICAgICBsYXN0UmVxdWVzdFRpbWUgPSBub3dcbiAgICAgIH0gZWxzZSBpZiAoIWNvb2xkb3duVGltZW91dCkge1xuICAgICAgICBjb29sZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvb2xkb3duVGltZW91dCA9IG51bGxcbiAgICAgICAgICBsYXN0UmVxdWVzdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICAgICAgICBzZW5kVW5zZW50UmVxdWVzdHMoKVxuICAgICAgICB9LCAoTGVhbnBsdW1SZXF1ZXN0LmJhdGNoQ29vbGRvd24gLSAobm93IC0gbGFzdFJlcXVlc3RUaW1lKSkgKiAxMDAwKVxuICAgICAgfVxuICAgIH1cblxuICAgIExlYW5wbHVtUmVxdWVzdC5zYXZlUmVxdWVzdEZvckxhdGVyKGFyZ3NCdWlsZGVyLmJ1aWxkRGljdCgpKVxuICAgIGlmIChzZW5kTm93KSB7XG4gICAgICBzZW5kVW5zZW50UmVxdWVzdHMoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBuZXR3b3JrIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIFRoZSB0aW1lb3V0IGluIHNlY29uZHMuXG4gICAqL1xuICBzdGF0aWMgc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcykge1xuICAgIE5ldHdvcmsuc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcylcbiAgfVxuXG4gIHN0YXRpYyBzYXZlUmVxdWVzdEZvckxhdGVyKGFyZ3MpIHtcbiAgICBsZXQgY291bnQgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCkgfHwgMFxuICAgIGxldCBpdGVtS2V5ID0gQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5JVEVNICsgY291bnRcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShpdGVtS2V5LCBKU09OLnN0cmluZ2lmeShhcmdzKSlcbiAgICBjb3VudCsrXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCwgY291bnQpXG4gIH1cblxuICBzdGF0aWMgcG9wVW5zZW50UmVxdWVzdHMoKSB7XG4gICAgbGV0IHJlcXVlc3REYXRhID0gW11cbiAgICBsZXQgY291bnQgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCkgfHwgMFxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgbGV0IGl0ZW1LZXkgPSBDb25zdGFudHMuREVGQVVMVF9LRVlTLklURU0gKyBpXG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVxdWVzdEFyZ3MgPSBKU09OLnBhcnNlKExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShpdGVtS2V5KSlcbiAgICAgICAgcmVxdWVzdERhdGEucHVzaChyZXF1ZXN0QXJncylcbiAgICAgIH0gY2F0Y2ggKGlnbm9yZWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgICB9XG4gICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UoaXRlbUtleSlcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3REYXRhXG4gIH1cblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vIFJlc3BvbnNlIHBhcnNpbmcgLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgc3RhdGljIG51bVJlc3BvbnNlcyhyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UucmVzcG9uc2UubGVuZ3RoXG4gIH1cblxuICBzdGF0aWMgZ2V0UmVzcG9uc2VBdChyZXNwb25zZSwgaW5kZXgpIHtcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5yZXNwb25zZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLnJlc3BvbnNlW2luZGV4XVxuICB9XG5cbiAgc3RhdGljIGdldExhc3RSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGxldCBjb3VudCA9IExlYW5wbHVtUmVxdWVzdC5udW1SZXNwb25zZXMocmVzcG9uc2UpXG4gICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgcmV0dXJuIExlYW5wbHVtUmVxdWVzdC5nZXRSZXNwb25zZUF0KHJlc3BvbnNlLCBjb3VudCAtIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGlzUmVzcG9uc2VTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiAhIXJlc3BvbnNlLnN1Y2Nlc3NcbiAgfVxuXG4gIHN0YXRpYyBnZXRSZXNwb25zZUVycm9yKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IGVycm9yID0gcmVzcG9uc2UuZXJyb3JcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGVhbnBsdW1SZXF1ZXN0LmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxubGV0IGxvY2FsU3RvcmFnZUVuYWJsZWRcbmxldCBhbHRlcm5hdGVMb2NhbFN0b3JhZ2UgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbFN0b3JhZ2VNYW5hZ2VyIHtcbiAgc3RhdGljIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZUVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV1cbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtrZXldXG4gIH1cblxuICBzdGF0aWMgc2F2ZVRvTG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWVcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZUVuYWJsZWQgPSBmYWxzZVxuICAgICAgYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgZGVsZXRlIGFsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VFbmFibGVkID0gZmFsc2VcbiAgICAgIGRlbGV0ZSBhbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVybmFsU3RhdGUge1xuICBzdGF0aWMgZGV2TW9kZSA9IGZhbHNlXG5cbiAgc3RhdGljIHZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycyA9IFtdXG4gIHN0YXRpYyBoYXNSZWNlaXZlZERpZmZzID0gZmFsc2VcblxuICBzdGF0aWMgc3RhcnRIYW5kbGVycyA9IFtdXG4gIHN0YXRpYyBoYXNTdGFydGVkID0gZmFsc2VcbiAgc3RhdGljIHN0YXJ0U3VjY2Vzc2Z1bCA9IGZhbHNlXG5cbiAgc3RhdGljIGFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0SGFuZGxlcnMucHVzaChoYW5kbGVyKVxuICAgIGlmIChJbnRlcm5hbFN0YXRlLmhhc1N0YXJ0ZWQpIHtcbiAgICAgIGhhbmRsZXIoSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBsZXQgaWR4ID0gSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcilcbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVycy5zcGxpY2UoaWR4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyU3RhcnRIYW5kbGVycygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEludGVybmFsU3RhdGUuc3RhcnRIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydEhhbmRsZXJzW2ldKEludGVybmFsU3RhdGUuc3RhcnRTdWNjZXNzZnVsKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS52YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMucHVzaChoYW5kbGVyKVxuICAgIGlmIChJbnRlcm5hbFN0YXRlLmhhc1JlY2VpdmVkRGlmZnMpIHtcbiAgICAgIGhhbmRsZXIoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgbGV0IGlkeCA9IEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcilcbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIEludGVybmFsU3RhdGUudmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLnNwbGljZShpZHgsIDEpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRyaWdnZXJWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBJbnRlcm5hbFN0YXRlLnZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyc1tpXSgpXG4gICAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnRlcm5hbFN0YXRlLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX01hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBJbnRlcm5hbFN0YXRlIGZyb20gJy4vSW50ZXJuYWxTdGF0ZSdcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IExvY2FsU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyJ1xuaW1wb3J0IExlYW5wbHVtUmVxdWVzdCBmcm9tICcuL0xlYW5wbHVtUmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyQ2FjaGUge1xuICBzdGF0aWMgZGlmZnMgPSB1bmRlZmluZWRcbiAgc3RhdGljIHZhcmlhYmxlcyA9IG51bGxcbiAgc3RhdGljIHZhcmlhbnRzID0gW11cbiAgc3RhdGljIG1lcmdlZCA9IHVuZGVmaW5lZFxuICBzdGF0aWMgb25VcGRhdGUgPSB1bmRlZmluZWRcbiAgc3RhdGljIHRva2VuID0gJydcbiAgc3RhdGljIGFjdGlvbk1ldGFkYXRhID0ge31cblxuICBzdGF0aWMgYXBwbHlEaWZmcyhkaWZmcywgdmFyaWFudHMsIGFjdGlvbk1ldGFkYXRhKSB7XG4gICAgVmFyQ2FjaGUuZGlmZnMgPSBkaWZmc1xuICAgIFZhckNhY2hlLnZhcmlhbnRzID0gdmFyaWFudHNcbiAgICBWYXJDYWNoZS5hY3Rpb25NZXRhZGF0YSA9IGFjdGlvbk1ldGFkYXRhXG4gICAgSW50ZXJuYWxTdGF0ZS5oYXNSZWNlaXZlZERpZmZzID0gdHJ1ZVxuICAgIFZhckNhY2hlLm1lcmdlZCA9IFZhckNhY2hlLm1lcmdlSGVscGVyKFZhckNhY2hlLnZhcmlhYmxlcywgZGlmZnMpXG4gICAgVmFyQ2FjaGUuc2F2ZURpZmZzKClcbiAgICBpZiAoVmFyQ2FjaGUub25VcGRhdGUpIHtcbiAgICAgIFZhckNhY2hlLm9uVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbG9hZERpZmZzKCkge1xuICAgIHRyeSB7XG4gICAgICBWYXJDYWNoZS5hcHBseURpZmZzKFxuICAgICAgICAgIEpTT04ucGFyc2UoTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBQkxFUykgfHwgbnVsbCksXG4gICAgICAgICAgSlNPTi5wYXJzZShMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFOVFMpIHx8IG51bGwpLFxuICAgICAgICAgIEpTT04ucGFyc2UoTG9jYWxTdG9yYWdlTWFuYWdlci5nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLkFDVElPTl9NRVRBREFUQSkgfHwgbnVsbCkpXG4gICAgICBWYXJDYWNoZS50b2tlbiA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlRPS0VOKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBMZWFucGx1bTogSW52YWxpZCBkaWZmczogJHtlfWApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNhdmVEaWZmcygpIHtcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShcbiAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQUJMRVMsIEpTT04uc3RyaW5naWZ5KFZhckNhY2hlLmRpZmZzIHx8IHt9KSlcbiAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZShcbiAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UUywgSlNPTi5zdHJpbmdpZnkoVmFyQ2FjaGUudmFyaWFudHMgfHwgW10pXG4gICAgKVxuICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQUNUSU9OX01FVEFEQVRBLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShWYXJDYWNoZS5hY3Rpb25NZXRhZGF0YSB8fCB7fSkpXG4gICAgTG9jYWxTdG9yYWdlTWFuYWdlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5UT0tFTiwgVmFyQ2FjaGUudG9rZW4pXG4gIH1cblxuICBzdGF0aWMgc2V0VmFyaWFibGVzKHZhcmlhYmxlcykge1xuICAgIFZhckNhY2hlLnZhcmlhYmxlcyA9IHZhcmlhYmxlc1xuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gVmFyQ2FjaGUubWVyZ2VkICE9PSB1bmRlZmluZWQgPyBWYXJDYWNoZS5tZXJnZWQgOiBWYXJDYWNoZS52YXJpYWJsZXNcbiAgfVxuXG4gIHN0YXRpYyBzZW5kVmFyaWFibGVzKCkge1xuICAgIGxldCBib2R5ID0ge31cbiAgICBib2R5W0NvbnN0YW50cy5QQVJBTVMuVkFSSUFCTEVTXSA9IFZhckNhY2hlLnZhcmlhYmxlc1xuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNFVF9WQVJTLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKS5ib2R5KEpTT04uc3RyaW5naWZ5KGJvZHkpKSwge1xuICAgICAgICAgIHNlbmROb3c6IHRydWVcbiAgICAgICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBtZXJnZUhlbHBlcih2YXJzLCBkaWZmKSB7XG4gICAgaWYgKHR5cGVvZiBkaWZmID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGlmZiA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBkaWZmID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRpZmZcbiAgICB9XG4gICAgaWYgKGRpZmYgPT09IG51bGwgfHwgZGlmZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFyc1xuICAgIH1cblxuICAgIGxldCBvYmpJdGVyYXRvciA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGYob2JqW2ldKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgLy8gVGhpcyBzZWVtcyB0byBiZSBiZXN0IHByYWN0aWNlOiBodHRwczovL2dpdGh1Yi5jb20vZXNsaW50L2VzbGludC9pc3N1ZXMvNzA3MVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZWZsZWN0XG4gICAgICAgICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGF0dHIpKSB7XG4gICAgICAgICAgICAgIGYoYXR0cilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHZhcnNJdGVyYXRvciA9IG9iakl0ZXJhdG9yKHZhcnMpXG4gICAgbGV0IGRpZmZJdGVyYXRvciA9IG9iakl0ZXJhdG9yKGRpZmYpXG5cbiAgICAvLyBJbmZlciB0aGF0IHRoZSBkaWZmcyBpcyBhbiBhcnJheSBpZiB0aGUgdmFycyB2YWx1ZSBkb2Vzbid0IGV4aXN0IHRvIHRlbGwgdXMgdGhlIHR5cGUuXG4gICAgbGV0IGlzQXJyYXkgPSBmYWxzZVxuICAgIGlmICh2YXJzID09PSBudWxsKSB7XG4gICAgICBpZiAoIShkaWZmIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgIGlzQXJyYXkgPSBudWxsXG4gICAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBpbiBkaWZmKSB7XG4gICAgICAgICAgaWYgKCFkaWZmLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0FycmF5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoISh0eXBlb2YgYXR0cmlidXRlID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGF0dHJpYnV0ZS5sZW5ndGggPCAzIHx8IGF0dHJpYnV0ZS5jaGFyQXQoMCkgIT09ICdbJyB8fFxuICAgICAgICAgICAgICBhdHRyaWJ1dGUuY2hhckF0KGF0dHJpYnV0ZS5sZW5ndGggLSAxKSAhPT0gJ10nKSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gZmFsc2VcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCB2YXJTdWJzY3JpcHQgPSBhdHRyaWJ1dGUuc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZS5sZW5ndGggLSAxKVxuICAgICAgICAgIGlmICghcGFyc2VJbnQodmFyU3Vic2NyaXB0KS50b1N0cmluZygpID09PSB2YXJTdWJzY3JpcHQpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNZXJnZSBhcnJheXMuXG4gICAgaWYgKHZhcnMgaW5zdGFuY2VvZiBBcnJheSB8fCBpc0FycmF5KSB7XG4gICAgICBsZXQgbWVyZ2VkID0gW11cbiAgICAgIHZhcnNJdGVyYXRvcihmdW5jdGlvbihhdHRyKSB7XG4gICAgICAgIG1lcmdlZC5wdXNoKGF0dHIpXG4gICAgICB9KVxuICAgICAgZGlmZkl0ZXJhdG9yKGZ1bmN0aW9uKHZhclN1YnNjcmlwdCkge1xuICAgICAgICBsZXQgc3Vic2NyaXB0ID1cbiAgICAgICAgICAgIHBhcnNlSW50KHZhclN1YnNjcmlwdC5zdWJzdHJpbmcoMSwgdmFyU3Vic2NyaXB0Lmxlbmd0aCAtIDEpKVxuICAgICAgICBsZXQgZGlmZlZhbHVlID0gZGlmZlt2YXJTdWJzY3JpcHRdXG4gICAgICAgIHdoaWxlIChzdWJzY3JpcHQgPj0gbWVyZ2VkLmxlbmd0aCkge1xuICAgICAgICAgIG1lcmdlZC5wdXNoKG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VkW3N1YnNjcmlwdF0gPSBWYXJDYWNoZS5tZXJnZUhlbHBlcihtZXJnZWRbc3Vic2NyaXB0XSwgZGlmZlZhbHVlKVxuICAgICAgfSlcbiAgICAgIHJldHVybiBtZXJnZWRcbiAgICB9XG5cbiAgICAvLyBNZXJnZSBkaWN0aW9uYXJpZXMuXG4gICAgbGV0IG1lcmdlZCA9IHt9XG4gICAgdmFyc0l0ZXJhdG9yKGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIGlmIChkaWZmW2F0dHJdID09PSBudWxsIHx8IGRpZmZbYXR0cl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZXJnZWRbYXR0cl0gPSB2YXJzW2F0dHJdXG4gICAgICB9XG4gICAgfSlcbiAgICBkaWZmSXRlcmF0b3IoZnVuY3Rpb24oYXR0cikge1xuICAgICAgbWVyZ2VkW2F0dHJdID0gVmFyQ2FjaGUubWVyZ2VIZWxwZXIodmFycyAhPT0gbnVsbCA/IHZhcnNbYXR0cl0gOiBudWxsLFxuICAgICAgICAgIGRpZmZbYXR0cl0pXG4gICAgfSlcbiAgICByZXR1cm4gbWVyZ2VkXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WYXJDYWNoZS5qcyIsIi8qKlxuICogQWpheCBmdW5jdGlvbnMgZnJvbTpcbiAqXG4gKiBQYXJzZSBKYXZhU2NyaXB0IFNES1xuICogVmVyc2lvbjogMS4xLjVcbiAqIEJ1aWx0OiBNb24gT2N0IDAxIDIwMTIgMTc6NTc6MTNcbiAqIGh0dHA6Ly9wYXJzZS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxMiBQYXJzZSwgSW5jLlxuICogVGhlIFBhcnNlIEphdmFTY3JpcHQgU0RLIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5sZXQgcmVxdWVzdFF1ZXVlID0gW11cbmxldCBuZXR3b3JrVGltZW91dFNlY29uZHMgPSAxMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gc2Vjb25kc1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYWpheCByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIFRoZSBodHRwIG1ldGhvZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG9wZW4uXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5QnVmZmVyfEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF9IGRhdGEgVGhlIGRhdGEgdG8gYmUgc2VudCBpbiBib2R5LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVycm9yIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGVycm9yLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHF1ZXVlZCBXaGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBxdWV1ZWQgb3IgaW1tZWRpYXRlbHkgc2VudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbcGxhaW5UZXh0XSBXaGV0aGVyIHRoZSByZXNwb25zZSBzaG91bGQgYmUgcmV0dXJuZWQgYXMgcGxhaW4gdGV4dCBvciBqc29uLlxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc3RhdGljIGFqYXgobWV0aG9kLCB1cmwsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yLCBxdWV1ZWQsIHBsYWluVGV4dCkge1xuICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgIGlmIChOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgICAgcmV0dXJuIE5ldHdvcmsuZW5xdWV1ZVJlcXVlc3QoYXJndW1lbnRzKVxuICAgICAgfVxuICAgICAgTmV0d29yay5ydW5uaW5nUmVxdWVzdCA9IHRydWVcbiAgICB9XG5cbiAgICAvKiogQG5hbWVzcGFjZSBYRG9tYWluUmVxdWVzdCAqKi9cbiAgICAvKiogQG5hbWVzcGFjZSBsb2NhdGlvbiAqKi9cbiAgICBpZiAodHlwZW9mIFhEb21haW5SZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonICYmIHVybC5pbmRleE9mKCdodHRwczonKSA9PT0gMCkge1xuICAgICAgICB1cmwgPSBgaHR0cDoke3VybC5zdWJzdHJpbmcoNil9YFxuICAgICAgfVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgcmV0dXJuIFJlZmxlY3QuYXBwbHkoTmV0d29yay5hamF4SUU4LCBudWxsLCBhcmd1bWVudHMpXG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZWQgPSBmYWxzZVxuXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlZCA9IHRydWVcblxuICAgICAgICBsZXQgcmVzcG9uc2VcbiAgICAgICAgbGV0IHJhbkNhbGxiYWNrID0gZmFsc2VcbiAgICAgICAgaWYgKHBsYWluVGV4dCkge1xuICAgICAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihudWxsLCB4aHIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgICByYW5DYWxsYmFjayA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJhbkNhbGxiYWNrKSB7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSwgeGhyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihyZXNwb25zZSwgeGhyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgICAgICBOZXR3b3JrLnJ1bm5pbmdSZXF1ZXN0ID0gZmFsc2VcbiAgICAgICAgICBOZXR3b3JrLmRlcXVldWVSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSlcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW4nKSAvLyBBdm9pZCBwcmUtZmxpZ2h0LlxuICAgIHhoci5zZW5kKGRhdGEpXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmICghaGFuZGxlZCkge1xuICAgICAgICB4aHIuYWJvcnQoKVxuICAgICAgfVxuICAgIH0sIG5ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDApXG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBhamF4IHJlcXVlc3QgZm9yIElFOC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBUaGUgaHR0cCBtZXRob2QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBvcGVuLlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheUJ1ZmZlcnxCbG9ifERvY3VtZW50fEZvcm1EYXRhfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHNlbnQgaW4gYm9keS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2VzcyBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlcnJvciBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBlcnJvci5cbiAgICogQHBhcmFtIHtib29sZWFufSBxdWV1ZWQgV2hldGhlciB0aGUgcmVxdWVzdCBzaG91bGQgYmUgcXVldWVkIG9yIGltbWVkaWF0ZWx5IHNlbnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGxhaW5UZXh0IFdoZXRoZXIgdGhlIHJlc3BvbnNlIHNob3VsZCBiZSByZXR1cm5lZCBhcyBwbGFpbiB0ZXh0IG9yIGpzb24uXG4gICAqL1xuICBzdGF0aWMgYWpheElFOChtZXRob2QsIHVybCwgZGF0YSwgc3VjY2VzcywgZXJyb3IsIHF1ZXVlZCwgcGxhaW5UZXh0KSB7XG4gICAgbGV0IHhkciA9IG5ldyBYRG9tYWluUmVxdWVzdCgpXG4gICAgeGRyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHJlc3BvbnNlXG4gICAgICBsZXQgcmFuQ2FsbGJhY2sgPSBmYWxzZVxuICAgICAgaWYgKHBsYWluVGV4dCkge1xuICAgICAgICByZXNwb25zZSA9IHhkci5yZXNwb25zZVRleHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhkci5yZXNwb25zZVRleHQpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKG51bGwsIHhkcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAwKVxuICAgICAgICAgIHJhbkNhbGxiYWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXJhbkNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UsIHhkcilcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApXG4gICAgICB9XG4gICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgIE5ldHdvcmsucnVubmluZ1JlcXVlc3QgPSBmYWxzZVxuICAgICAgICBOZXR3b3JrLmRlcXVldWVSZXF1ZXN0KClcbiAgICAgIH1cbiAgICB9XG4gICAgeGRyLm9uZXJyb3IgPSB4ZHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBlcnJvcihudWxsLCB4ZHIpXG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgIE5ldHdvcmsucnVubmluZ1JlcXVlc3QgPSBmYWxzZVxuICAgICAgICBOZXR3b3JrLmRlcXVldWVSZXF1ZXN0KClcbiAgICAgIH1cbiAgICB9XG4gICAgeGRyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcbiAgICB9XG4gICAgeGRyLm9wZW4obWV0aG9kLCB1cmwpXG4gICAgeGRyLnRpbWVvdXQgPSBuZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwXG4gICAgeGRyLnNlbmQoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSByZXF1ZXN0IHRvIHRoZSByZXF1ZXN0IHF1ZXVlLlxuICAgKiBAcGFyYW0ge0FyZ3VtZW50c30gcmVxdWVzdEFyZ3VtZW50cyBUaGUgcmVxdWVzdCBhcmd1bWVudHMgZnJvbSB0aGUgaW5pdGlhbCBtZXRob2QgY2FsbC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBlbnF1ZXVlUmVxdWVzdChyZXF1ZXN0QXJndW1lbnRzKSB7XG4gICAgcmVxdWVzdFF1ZXVlLnB1c2gocmVxdWVzdEFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSByZXF1ZXN0IGZyb20gdGhlIHJlcXVlc3QgcXVldWUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgZGVxdWV1ZVJlcXVlc3QoKSB7XG4gICAgbGV0IGFyZ3MgPSByZXF1ZXN0UXVldWUuc2hpZnQoKVxuICAgIGlmIChhcmdzKSB7XG4gICAgICBSZWZsZWN0LmFwcGx5KE5ldHdvcmsuYWpheCwgbnVsbCwgYXJncylcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9OZXR3b3JrLmpzIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL190b1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2VxLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmNvbnN0IGRhdGFCcm93c2VyID0gW3tcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdDaHJvbWUnLFxuICBpZGVudGl0eTogJ0Nocm9tZSdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdPbW5pV2ViJyxcbiAgdmVyc2lvblNlYXJjaDogJ09tbmlXZWIvJyxcbiAgaWRlbnRpdHk6ICdPbW5pV2ViJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ0FwcGxlJyxcbiAgaWRlbnRpdHk6ICdTYWZhcmknLFxuICB2ZXJzaW9uU2VhcmNoOiAnVmVyc2lvbidcbn0sIHtcbiAgcHJvcDogd2luZG93Lm9wZXJhLFxuICBpZGVudGl0eTogJ09wZXJhJyxcbiAgdmVyc2lvblNlYXJjaDogJ1ZlcnNpb24nXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnaUNhYicsXG4gIGlkZW50aXR5OiAnaUNhYidcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdLREUnLFxuICBpZGVudGl0eTogJ0tvbnF1ZXJvcidcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdGaXJlZm94JyxcbiAgaWRlbnRpdHk6ICdGaXJlZm94J1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ0NhbWlubycsXG4gIGlkZW50aXR5OiAnQ2FtaW5vJ1xufSwgeyAvLyBmb3IgbmV3ZXIgTmV0c2NhcGUgKDYrKVxuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ05ldHNjYXBlJyxcbiAgaWRlbnRpdHk6ICdOZXRzY2FwZSdcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdNU0lFJyxcbiAgaWRlbnRpdHk6ICdFeHBsb3JlcicsXG4gIHZlcnNpb25TZWFyY2g6ICdNU0lFJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ0dlY2tvJyxcbiAgaWRlbnRpdHk6ICdNb3ppbGxhJyxcbiAgdmVyc2lvblNlYXJjaDogJ3J2J1xufSwgeyAvLyBmb3Igb2xkZXIgTmV0c2NhcGUgKDQtKVxuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ01vemlsbGEnLFxuICBpZGVudGl0eTogJ05ldHNjYXBlJyxcbiAgdmVyc2lvblNlYXJjaDogJ01vemlsbGEnXG59XVxuXG5jb25zdCBkYXRhT1MgPSBbe1xuICBzdHJpbmc6IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgc3ViU3RyaW5nOiAnV2luJyxcbiAgaWRlbnRpdHk6ICdXaW5kb3dzJ1xufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgc3ViU3RyaW5nOiAnTWFjJyxcbiAgaWRlbnRpdHk6ICdNYWMgT1MnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnaVBob25lJyxcbiAgaWRlbnRpdHk6ICdpT1MnXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnBsYXRmb3JtLFxuICBzdWJTdHJpbmc6ICdMaW51eCcsXG4gIGlkZW50aXR5OiAnTGludXgnXG59XVxuXG4vLyBCcm93c2VyIGRldGVjdGlvbi4gU291cmNlOiBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL2RldGVjdC5odG1sXG4vKipcbiAqIEhlbHBlciBjbGFzcyB0byBkZXRlY3Qgd2hpY2ggYnJvd3NlciBjbGllbnQgaXMgdXNpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJEZXRlY3RvciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgb2JqZWN0IHdpdGggY3VycmVudCBicm93c2VyIHNldHRpbmdzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5icm93c2VyID0gdGhpcy5fc2VhcmNoU3RyaW5nKGRhdGFCcm93c2VyKSB8fCAnVW5rbm93biBCcm93c2VyJ1xuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMuX3NlYXJjaFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCkgfHxcbiAgICAgICAgdGhpcy5fc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IuYXBwVmVyc2lvbikgfHwgJ1Vua25vd24gVmVyc2lvbidcbiAgICB0aGlzLk9TID0gdGhpcy5fc2VhcmNoU3RyaW5nKGRhdGFPUykgfHwgJ1Vua25vd24gT1MnXG4gIH1cblxuICAvKipcbiAgICogTWF0Y2hlcyB0aGUgY2xpZW50J3Mgc3lzdGVtIHRvIHRoZSBwcmVkZWZpbmVkIHN5c3RlbSBsaXN0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSBvYmplY3QgdG8gc2Nhbi5cbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgZm91bmQgaWRlbnRpdHkgc3RyaW5nLlxuICAgKi9cbiAgX3NlYXJjaFN0cmluZyhkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YVN0cmluZyA9IGRhdGFbaV0uc3RyaW5nXG4gICAgICBsZXQgZGF0YVByb3AgPSBkYXRhW2ldLnByb3BcbiAgICAgIHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyA9IGRhdGFbaV0udmVyc2lvblNlYXJjaCB8fCBkYXRhW2ldLmlkZW50aXR5XG4gICAgICBpZiAoZGF0YVN0cmluZykge1xuICAgICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKGRhdGFbaV0uc3ViU3RyaW5nKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRhdGFQcm9wKSB7XG4gICAgICAgIHJldHVybiBkYXRhW2ldLmlkZW50aXR5XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIGdpdmVuIHN5c3RlbS5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFTdHJpbmcgVGhlIGRhdGEgb2JqZWN0IHRvIHNjYW4uXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGZvdW5kIG51bWJlci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZWFyY2hWZXJzaW9uKGRhdGFTdHJpbmcpIHtcbiAgICBpZiAoIWRhdGFTdHJpbmcpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBsZXQgaW5kZXggPSBkYXRhU3RyaW5nLmluZGV4T2YodGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhU3RyaW5nLnN1YnN0cmluZyhpbmRleCArIHRoaXMudmVyc2lvblNlYXJjaFN0cmluZy5sZW5ndGggKyAxKSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Jyb3dzZXJEZXRlY3Rvci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9Db25zdGFudHMnXG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSAnLi9BcmdzQnVpbGRlcidcbmltcG9ydCBTb2NrZXRJb0NsaWVudCBmcm9tICcuL1NvY2tldElvQ2xpZW50J1xuaW1wb3J0IFZhckNhY2hlIGZyb20gJy4vVmFyQ2FjaGUnXG5pbXBvcnQgTGVhbnBsdW1SZXF1ZXN0IGZyb20gJy4vTGVhbnBsdW1SZXF1ZXN0J1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYW5wbHVtU29ja2V0IHtcblxuICBzdGF0aWMgc29ja2V0SG9zdCA9ICdkZXYubGVhbnBsdW0uY29tJ1xuXG4gIHN0YXRpYyBjb25uZWN0KCkge1xuICAgIGlmICghV2ViU29ja2V0KSB7XG4gICAgICBjb25zb2xlLmxvZygnWW91ciBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IFdlYlNvY2tldHMuJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBjbGllbnQgPSBuZXcgU29ja2V0SW9DbGllbnQoKVxuICAgIGxldCBhdXRoU2VudCA9IGZhbHNlXG4gICAgY2xpZW50Lm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFhdXRoU2VudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IENvbm5lY3RlZCB0byBkZXZlbG9wbWVudCBzZXJ2ZXIuJylcbiAgICAgICAgbGV0IGFyZ3MgPSB7fVxuICAgICAgICBhcmdzW0NvbnN0YW50cy5QQVJBTVMuQVBQX0lEXSA9IExlYW5wbHVtUmVxdWVzdC5hcHBJZFxuICAgICAgICBhcmdzW0NvbnN0YW50cy5QQVJBTVMuREVWSUNFX0lEXSA9IExlYW5wbHVtUmVxdWVzdC5kZXZpY2VJZFxuICAgICAgICBjbGllbnQuc2VuZCgnYXV0aCcsIGFyZ3MpXG4gICAgICAgIGF1dGhTZW50ID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBjbGllbnQub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFNvY2tldCBlcnJvcicsIGV2ZW50KVxuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICogQHBhcmFtIGFyZ3NbXS5lbWFpbFxuICAgICAqL1xuICAgIGNsaWVudC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCwgYXJncykge1xuICAgICAgaWYgKGV2ZW50ID09PSAndXBkYXRlVmFycycpIHtcbiAgICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuR0VUX1ZBUlMsXG4gICAgICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX0RFRkFVTFRTLCBmYWxzZSksIHtcbiAgICAgICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgICAgICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdldFZhcnNSZXNwb25zZSA9IExlYW5wbHVtUmVxdWVzdC5nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJTXVxuICAgICAgICAgICAgICAgIGxldCB2YXJpYW50cyA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UU11cbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uTWV0YWRhdGEgPSBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuQUNUSU9OX01FVEFEQVRBXVxuICAgICAgICAgICAgICAgIGlmICghaXNFcXVhbCh2YWx1ZXMsIFZhckNhY2hlLmRpZmZzKSkge1xuICAgICAgICAgICAgICAgICAgVmFyQ2FjaGUuYXBwbHlEaWZmcyh2YWx1ZXMsIHZhcmlhbnRzLCBhY3Rpb25NZXRhZGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ2dldFZhcmlhYmxlcycpIHtcbiAgICAgICAgVmFyQ2FjaGUuc2VuZFZhcmlhYmxlcygpXG4gICAgICAgIGNsaWVudC5zZW5kKCdnZXRDb250ZW50UmVzcG9uc2UnLCB7XG4gICAgICAgICAgJ3VwZGF0ZWQnOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnZ2V0QWN0aW9ucycpIHtcbiAgICAgICAgLy8gVW5zdXBwb3J0ZWQgaW4gSmF2YVNjcmlwdCBTREsuXG4gICAgICAgIGNsaWVudC5zZW5kKCdnZXRDb250ZW50UmVzcG9uc2UnLCB7XG4gICAgICAgICAgJ3VwZGF0ZWQnOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ3JlZ2lzdGVyRGV2aWNlJykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICAgICAgYWxlcnQoYFlvdXIgZGV2aWNlIGhhcyBiZWVuIHJlZ2lzdGVyZWQgdG8gJHthcmdzWzBdLmVtYWlsfS5gKVxuICAgICAgfVxuICAgIH1cbiAgICBjbGllbnQub25jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBEaXNjb25uZWN0ZWQgdG8gZGV2ZWxvcG1lbnQgc2VydmVyLicpXG4gICAgICBhdXRoU2VudCA9IGZhbHNlXG4gICAgfVxuICAgIGNsaWVudC5jb25uZWN0KExlYW5wbHVtU29ja2V0LnNvY2tldEhvc3QpXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWNsaWVudC5jb25uZWN0ZWQgJiYgIWNsaWVudC5jb25uZWN0aW5nKSB7XG4gICAgICAgIGNsaWVudC5jb25uZWN0KExlYW5wbHVtU29ja2V0LnNvY2tldEhvc3QpXG4gICAgICB9XG4gICAgfSwgNTAwMClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xlYW5wbHVtU29ja2V0LmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cblxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL0NvbnN0YW50cydcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tICcuL0FyZ3NCdWlsZGVyJ1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnXG5pbXBvcnQgTG9jYWxTdG9yYWdlTWFuYWdlciBmcm9tICcuL0xvY2FsU3RvcmFnZU1hbmFnZXInXG5pbXBvcnQgTGVhbnBsdW1SZXF1ZXN0IGZyb20gJy4vTGVhbnBsdW1SZXF1ZXN0J1xuXG5jb25zdCBBUFBMSUNBVElPTl9TRVJWRVJfUFVCTElDX0tFWSA9XG4gICAgJ0JJbldQcFdudGZSMzlyZ1hTUDA0cHFkbUVkREdhNTB6NnpxYk12eHl4SkN3elhJdVNwU2g4Qzg4OC1DZko4MldFTGw3WGU4Y2pBJyArXG4gICAgJ25mQ3QtM3ZLMENpNjgnXG5cbmxldCBpc1N1YnNjcmliZWQgPSBmYWxzZVxubGV0IHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24gPSBudWxsXG5cbi8qKlxuICogUHVzaCBNYW5hZ2VyIGhhbmRsZXMgdGhlIHJlZ2lzdHJhdGlvbiBhbmQgc3Vic2NyaXB0aW9uIGZvciB3ZWIgcHVzaC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVzaE1hbmFnZXIge1xuICAvKipcbiAgICogV2hldGhlciBvciBub3Qgd2ViIHB1c2ggaXMgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIHN1cHBvcnRlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlciAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yICYmXG4gICAgICAgICdQdXNoTWFuYWdlcicgaW4gd2luZG93XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIGJyb3dzZXIgaXMgc3Vic2NyaWJlZCB0byB3ZWIgcHVzaCBub3RpZmljYXRpb25zLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBUcnVlIGlmIHN1YnNjcmliZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3Vic2NyaWJlZCgpIHtcbiAgICBpZiAoIVB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSlcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBQdXNoTWFuYWdlci5nZXRTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLyoqIEBuYW1lc3BhY2UgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyIFRoZSBwdXNoIG1hbmFnZXIgb2JqZWN0IG9mIHRoZSBicm93c2VyLiAqKi9cbiAgICAgICAgICAgICAgLyoqIEBuYW1lc3BhY2UgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbiAqKi9cbiAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpXG4gICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gc3Vic2NyaXB0aW9uICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBQdXNoTWFuYWdlci51cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpc1N1YnNjcmliZWQpXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgZm9yIFdlYlB1c2guXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICBzZXJ2aWNlV29ya2VyVXJsIFRoZSB1cmwgdGhhdCBzZXJ2ZXMgdGhlIHNlcnZpY2Ugd29ya2VyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uIHlvdXIgZG9tYWluLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAgICAgICBUaGUgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdpdGggcmVzdWx0LlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IG5vdGhpbmdcbiAgICovXG4gIHN0YXRpYyByZWdpc3RlcihzZXJ2aWNlV29ya2VyVXJsLCBjYWxsYmFjaykge1xuICAgIGlmICghUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3VwcG9ydGVkKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogUHVzaCBtZXNzYWdpbmcgaXMgbm90IHN1cHBvcnRlZC4nKVxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGZhbHNlKVxuICAgIH1cbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcbiAgICAgICAgc2VydmljZVdvcmtlclVybCA/IHNlcnZpY2VXb3JrZXJVcmwgOiAnL3N3Lm1pbi5qcycsIG51bGwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25cblxuICAgICAgICAgIC8vIFNldCB0aGUgaW5pdGlhbCBzdWJzY3JpcHRpb24gdmFsdWVcbiAgICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9ICEoc3Vic2NyaXB0aW9uID09PSBudWxsKVxuICAgICAgICAgICAgICAgIGlmIChpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICAgIFB1c2hNYW5hZ2VyLnVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBTZXJ2aWNlIFdvcmtlciBFcnJvcjogJywgZXJyb3IpXG4gICAgICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRoZSB1c2VyKGJyb3dzZXIpIHRvIHB1c2guXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIGlmIHN1YnNjcmlwdGlvbiBzdWNjZXNzZnVsLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN0YXRpYyBzdWJzY3JpYmVVc2VyKCkge1xuICAgIGNvbnN0IGFwcGxpY2F0aW9uU2VydmVyS2V5ID0gUHVzaE1hbmFnZXIudXJsQjY0VG9VaW50OEFycmF5KEFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8qKiBAbmFtZXNwYWNlIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuc3Vic2NyaWJlIFN1YnNjcmliZSB0byBwdXNoLiAqKi9cbiAgICAgIHJldHVybiBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XG4gICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZSxcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXlcbiAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgIFB1c2hNYW5hZ2VyLnVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gdHJ1ZVxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpc1N1YnNjcmliZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGBMZWFucGx1bTogRmFpbGVkIHRvIHN1YnNjcmliZSB0aGUgdXNlcjogJHtlcnJ9YClcbiAgICAgICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdGhlIHVzZXIoYnJvd3NlcikgZnJvbSBwdXNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyBpZiB1bnN1YnNjcmliZWQsIG90aGVyd2lzZSByZWplY3RzLlxuICAgKi9cbiAgc3RhdGljIHVuc3Vic2NyaWJlVXNlcigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgUHVzaE1hbmFnZXIuaXNXZWJQdXNoU3Vic2NyaWJlZCgpLnRoZW4oKHN1YnNjcmliZWQpID0+IHtcbiAgICAgICAgaWYgKCFzdWJzY3JpYmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAvKiogQG5hbWVzcGFjZSBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnVuc3Vic2NyaWJlIFVuc3Vic2NyaWJlIHRvXG4gICAgICAgICAgICAgICAgICogIHB1c2guICoqL1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoYExlYW5wbHVtOiBFcnJvciB1bnN1YnNjcmliaW5nOiAke2Vycm9yfWApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcykge1xuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBvYmplY3QgZnJvbSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFJldHVybnMgdGhlIHJlZ2lzdHJhdGlvbiBvciBudWxsLlxuICAgKi9cbiAgc3RhdGljIGdldFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbikge1xuICAgICAgICByZXNvbHZlKHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogQG5hbWVzcGFjZSBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24gUmV0cmlldmVzIHRoZSAgcHVzaCByZWdpc3RyYXRpb25cbiAgICAgICAgICogZnJvbSB0aGUgYnJvd3Nlci4gKiovXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbigpLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25cbiAgICAgICAgICByZXNvbHZlKHJlZ2lzdHJhdGlvbilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgYSBiYXNlNjQgdXJsIHN0cmluZyB0byBhbiB1aW50OCBhcnJhcnkuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gYmFzZTY0U3RyaW5nIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7VWludDhBcnJheX0gICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHN0YXRpYyB1cmxCNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gICAgY29uc3QgcGFkZGluZyA9ICc9Jy5yZXBlYXQoKDQgLSBiYXNlNjRTdHJpbmcubGVuZ3RoICUgNCkgJSA0KVxuICAgIGNvbnN0IGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKVxuICAgICAgICAucmVwbGFjZSgvLS9nLCAnKycpXG4gICAgICAgIC5yZXBsYWNlKC9fL2csICcvJylcblxuICAgIGNvbnN0IHJhd0RhdGEgPSB3aW5kb3cuYXRvYihiYXNlNjQpXG4gICAgY29uc3Qgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aClcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSlcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dEFycmF5XG4gIH1cblxuICAvKipcbiAgICogW3ByZXBhcmVTdWJzY3JpcHRpb24gZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge29iamVjdH0gc3Vic2NyaXB0aW9uIFRoZSByYXcgc3Vic2NyaXB0aW9uIGZyb20gYnJvd3Nlci5cbiAgICogQHBhcmFtICB7ZnVuY3Rpb259IHN1YnNjcmlwdGlvbi5nZXRLZXkgVGhlIHN1YnNjcmlwdGlvbiBrZXkuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc3Vic2NyaXB0aW9uLmVuZHBvaW50IFRoZSBzdWJzY3JpcHRpb24ga2V5LlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIGJlIHNlbnQgdG8gc2VydmVyLlxuICAgKi9cbiAgc3RhdGljIHByZXBhcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgbGV0IGtleSA9IHN1YnNjcmlwdGlvbi5nZXRLZXkgPyBzdWJzY3JpcHRpb24uZ2V0S2V5KCdwMjU2ZGgnKSA6ICcnXG4gICAgbGV0IGF1dGggPSBzdWJzY3JpcHRpb24uZ2V0S2V5ID8gc3Vic2NyaXB0aW9uLmdldEtleSgnYXV0aCcpIDogJydcbiAgICAvLyBub2luc3BlY3Rpb24gRVM2TW9kdWxlc0RlcGVuZGVuY2llc1xuICAgIGxldCBrZXlBc2NpaSA9IGJ0b2EoUmVmbGVjdC5hcHBseShTdHJpbmcuZnJvbUNoYXJDb2RlLCBudWxsLCBuZXcgVWludDhBcnJheShrZXkpKSlcbiAgICAvLyBub2luc3BlY3Rpb24gRVM2TW9kdWxlc0RlcGVuZGVuY2llc1xuICAgIGxldCBhdXRoQXNjaWkgPSBidG9hKFJlZmxlY3QuYXBwbHkoU3RyaW5nLmZyb21DaGFyQ29kZSwgbnVsbCwgbmV3IFVpbnQ4QXJyYXkoYXV0aCkpKVxuICAgIHJldHVybiB7XG4gICAgICBlbmRwb2ludDogc3Vic2NyaXB0aW9uLmVuZHBvaW50LFxuICAgICAga2V5OiBrZXlBc2NpaSxcbiAgICAgIGF1dGg6IGF1dGhBc2NpaVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgbmV3IHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gdGhlIExlYW5wbHVtIHNlcnZlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHN1YnNjcmlwdGlvbiBUaGUgc3Vic2NyaXB0aW9uLlxuICAgKi9cbiAgc3RhdGljIHVwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbikge1xuICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgIGxldCBwcmVwYXJlZFN1YnNjcmlwdGlvbiA9IFB1c2hNYW5hZ2VyLnByZXBhcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKVxuICAgICAgbGV0IHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocHJlcGFyZWRTdWJzY3JpcHRpb24pXG4gICAgICBsZXQgZXhpc3RpbmdTdWJzY3JpcHRpb25TdHJpbmcgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmdldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5QVVNIX1NVQlNDUklQVElPTilcbiAgICAgIGlmICghaXNFcXVhbChleGlzdGluZ1N1YnNjcmlwdGlvblN0cmluZywgcHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcpKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuUFVTSF9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgICBwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZylcbiAgICAgICAgUHVzaE1hbmFnZXIuc2V0U3Vic2NyaXB0aW9uKHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBzdWJzY3JpcHRpb24gdG8gdGhlIExlYW5wbHVtIHNlcnZlci5cbiAgICogQHBhcmFtIHtTdHJpbmcvT2JqZWN0fSBzdWJzY3JpcHRpb24gVGhlIHN1YnNjcmlwdGlvbiBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgc2V0U3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU0VUX0RFVklDRV9BVFRSSUJVVEVTLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKS5hZGQoQ29uc3RhbnRzLlBBUkFNUy5XRUJfUFVTSF9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24pLCB7XG4gICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICBzZW5kTm93OiB0cnVlXG4gICAgICAgIH1cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QdXNoTWFuYWdlci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vQ29uc3RhbnRzJ1xuaW1wb3J0IEludGVybmFsU3RhdGUgZnJvbSAnLi9JbnRlcm5hbFN0YXRlJ1xuaW1wb3J0IEFyZ3NCdWlsZGVyIGZyb20gJy4vQXJnc0J1aWxkZXInXG5pbXBvcnQgQnJvd3NlckRldGVjdG9yIGZyb20gJy4vQnJvd3NlckRldGVjdG9yJ1xuaW1wb3J0IFB1c2hNYW5hZ2VyIGZyb20gJy4vUHVzaE1hbmFnZXInXG5pbXBvcnQgTG9jYWxTdG9yYWdlTWFuYWdlciBmcm9tICcuL0xvY2FsU3RvcmFnZU1hbmFnZXInXG5pbXBvcnQgVmFyQ2FjaGUgZnJvbSAnLi9WYXJDYWNoZSdcbmltcG9ydCBMZWFucGx1bVJlcXVlc3QgZnJvbSAnLi9MZWFucGx1bVJlcXVlc3QnXG5pbXBvcnQgTGVhbnBsdW1Tb2NrZXQgZnJvbSAnLi9MZWFucGx1bVNvY2tldCdcblxubGV0IF9icm93c2VyRGV0ZWN0b3IgPSBuZXcgQnJvd3NlckRldGVjdG9yKClcblxuLyoqXG4gKiBAcHJlc2VydmUgTGVhbnBsdW0gSmF2YXNjcmlwdCBTREsuXG4gKiBDb3B5cmlnaHQgMjAxNiwgTGVhbnBsdW0sIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBZb3UgbWF5IG5vdCBkaXN0cmlidXRlIHRoaXMgc291cmNlIGNvZGUgd2l0aG91dCBwcmlvciB3cml0dGVuIHBlcm1pc3Npb25cbiAqIGZyb20gTGVhbnBsdW0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYW5wbHVtIHtcblxuICBzdGF0aWMgc2V0QXBpUGF0aChhcGlQYXRoKSB7XG4gICAgaWYgKCFMZWFucGx1bVJlcXVlc3QuYXBpUGF0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIExlYW5wbHVtUmVxdWVzdC5hcGlQYXRoID0gYXBpUGF0aFxuICB9XG5cbiAgc3RhdGljIHNldEVtYWlsKGVtYWlsKSB7XG4gICAgTGVhbnBsdW0uX2VtYWlsID0gZW1haWxcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBuZXR3b3JrIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIFRoZSB0aW1lb3V0IGluIHNlY29uZHMuXG4gICAqL1xuICBzdGF0aWMgc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcykge1xuICAgIExlYW5wbHVtUmVxdWVzdC5zZXROZXR3b3JrVGltZW91dChzZWNvbmRzKVxuICB9XG5cbiAgc3RhdGljIHNldEFwcElkRm9yRGV2ZWxvcG1lbnRNb2RlKGFwcElkLCBhY2Nlc3NLZXkpIHtcbiAgICBMZWFucGx1bVJlcXVlc3QuYXBwSWQgPSBhcHBJZFxuICAgIExlYW5wbHVtUmVxdWVzdC5jbGllbnRLZXkgPSBhY2Nlc3NLZXlcbiAgICBJbnRlcm5hbFN0YXRlLmRldk1vZGUgPSB0cnVlXG4gIH1cblxuICBzdGF0aWMgc2V0QXBwSWRGb3JQcm9kdWN0aW9uTW9kZShhcHBJZCwgYWNjZXNzS2V5KSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmFwcElkID0gYXBwSWRcbiAgICBMZWFucGx1bVJlcXVlc3QuY2xpZW50S2V5ID0gYWNjZXNzS2V5XG4gICAgSW50ZXJuYWxTdGF0ZS5kZXZNb2RlID0gZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBzZXRTb2NrZXRIb3N0KGhvc3QpIHtcbiAgICBMZWFucGx1bVNvY2tldC5zb2NrZXRIb3N0ID0gaG9zdFxuICB9XG5cbiAgc3RhdGljIHNldERldmljZUlkKGRldmljZUlkKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmRldmljZUlkID0gZGV2aWNlSWRcbiAgfVxuXG4gIHN0YXRpYyBzZXRBcHBWZXJzaW9uKHZlcnNpb25OYW1lKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnZlcnNpb25OYW1lID0gdmVyc2lvbk5hbWVcbiAgfVxuXG4gIHN0YXRpYyBzZXREZXZpY2VOYW1lKGRldmljZU5hbWUpIHtcbiAgICBMZWFucGx1bS5fZGV2aWNlTmFtZSA9IGRldmljZU5hbWVcbiAgfVxuXG4gIHN0YXRpYyBzZXREZXZpY2VNb2RlbChkZXZpY2VNb2RlbCkge1xuICAgIExlYW5wbHVtLl9kZXZpY2VNb2RlbCA9IGRldmljZU1vZGVsXG4gIH1cblxuICBzdGF0aWMgc2V0U3lzdGVtTmFtZShzeXN0ZW1OYW1lKSB7XG4gICAgTGVhbnBsdW0uX3N5c3RlbU5hbWUgPSBzeXN0ZW1OYW1lXG4gIH1cblxuICBzdGF0aWMgc2V0U3lzdGVtVmVyc2lvbihzeXN0ZW1WZXJzaW9uKSB7XG4gICAgTGVhbnBsdW0uX3N5c3RlbVZlcnNpb24gPSBzeXN0ZW1WZXJzaW9uXG4gIH1cblxuICBzdGF0aWMgc2V0VmFyaWFibGVzKHZhcmlhYmxlcykge1xuICAgIFZhckNhY2hlLnNldFZhcmlhYmxlcyh2YXJpYWJsZXMpXG4gIH1cblxuICBzdGF0aWMgc2V0UmVxdWVzdEJhdGNoaW5nKGJhdGNoRW5hYmxlZCwgY29vbGRvd25TZWNvbmRzKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LmJhdGNoRW5hYmxlZCA9IGJhdGNoRW5hYmxlZFxuICAgIExlYW5wbHVtUmVxdWVzdC5iYXRjaENvb2xkb3duID0gY29vbGRvd25TZWNvbmRzXG4gIH1cblxuICBzdGF0aWMgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS5nZXRWYXJpYWJsZXMoKVxuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhYmxlKC4uLmFyZ3MpIHtcbiAgICBsZXQgY3VycmVudCA9IExlYW5wbHVtLmdldFZhcmlhYmxlcygpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudFthcmdzW2ldXVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFxuICB9XG5cbiAgc3RhdGljIGdldFZhcmlhbnRzKCkge1xuICAgIHJldHVybiBWYXJDYWNoZS52YXJpYW50cyB8fCBbXVxuICB9XG5cbiAgc3RhdGljIGFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcikge1xuICAgIEludGVybmFsU3RhdGUuYWRkVmFyaWFibGVzQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcilcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgSW50ZXJuYWxTdGF0ZS5yZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBJbnRlcm5hbFN0YXRlLnJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgZm9yY2VDb250ZW50VXBkYXRlKGNhbGxiYWNrKSB7XG4gICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuR0VUX1ZBUlMsXG4gICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfREVGQVVMVFMsIGZhbHNlKSwge1xuICAgICAgICBxdWV1ZWQ6IGZhbHNlLFxuICAgICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgICByZXNwb25zZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgbGV0IGdldFZhcnNSZXNwb25zZSA9IExlYW5wbHVtUmVxdWVzdC5nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgIGxldCBpc1N1Y2Nlc3MgPSBMZWFucGx1bVJlcXVlc3QuaXNSZXNwb25zZVN1Y2Nlc3MoZ2V0VmFyc1Jlc3BvbnNlKTtcbiAgICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKFxuICAgICAgICAgICAgICBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSU10sXG4gICAgICAgICAgICAgIGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UU10sXG4gICAgICAgICAgICAgIGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGlzU3VjY2Vzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFydCh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzLCBjYWxsYmFjaykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VySWRcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge31cbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdvYmplY3QnICYmIHVzZXJJZCAhPT0gbnVsbCAmJlxuICAgICAgICB1c2VySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB1c2VySWRcbiAgICAgIHVzZXJJZCA9IG51bGxcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VyQXR0cmlidXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlc1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgIH1cbiAgICBMZWFucGx1bVJlcXVlc3QudXNlcklkID0gdXNlcklkXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBMZWFucGx1bS5hZGRTdGFydFJlc3BvbnNlSGFuZGxlcihjYWxsYmFjaylcbiAgICB9XG5cbiAgICBWYXJDYWNoZS5vblVwZGF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBJbnRlcm5hbFN0YXRlLnRyaWdnZXJWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMoKVxuICAgIH1cblxuICAgIGxldCBhcmdzID0gbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfQVRUUklCVVRFUywgSlNPTi5zdHJpbmdpZnkodXNlckF0dHJpYnV0ZXMpKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQ09VTlRSWSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5SRUdJT04sIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQ0lUWSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5MT0NBVElPTiwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TWVNURU1fTkFNRSwgTGVhbnBsdW0uX3N5c3RlbU5hbWUgfHwgX2Jyb3dzZXJEZXRlY3Rvci5PUylcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNZU1RFTV9WRVJTSU9OLCAoTGVhbnBsdW0uX3N5c3RlbVZlcnNpb24gfHwgJycpLnRvU3RyaW5nKCkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5CUk9XU0VSX05BTUUsIF9icm93c2VyRGV0ZWN0b3IuYnJvd3NlcilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkJST1dTRVJfVkVSU0lPTiwgX2Jyb3dzZXJEZXRlY3Rvci52ZXJzaW9uLnRvU3RyaW5nKCkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5MT0NBTEUsIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX05BTUUsIExlYW5wbHVtLl9kZXZpY2VOYW1lIHx8XG4gICAgICAgICAgICBgJHtfYnJvd3NlckRldGVjdG9yLmJyb3dzZXJ9ICR7X2Jyb3dzZXJEZXRlY3Rvci52ZXJzaW9ufWApXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfTU9ERUwsIExlYW5wbHVtLl9kZXZpY2VNb2RlbCB8fCAnV2ViIEJyb3dzZXInKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5DTFVERV9ERUZBVUxUUywgZmFsc2UpXG5cbiAgICAvLyBJc3N1ZSByZXF1ZXN0LlxuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNUQVJULCBhcmdzLCB7XG4gICAgICBxdWV1ZWQ6IHRydWUsXG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIEludGVybmFsU3RhdGUuaGFzU3RhcnRlZCA9IHRydWVcbiAgICAgICAgbGV0IHN0YXJ0UmVzcG9uc2UgPSBMZWFucGx1bVJlcXVlc3QuZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICBpZiAoTGVhbnBsdW1SZXF1ZXN0LmlzUmVzcG9uc2VTdWNjZXNzKHN0YXJ0UmVzcG9uc2UpKSB7XG4gICAgICAgICAgSW50ZXJuYWxTdGF0ZS5zdGFydFN1Y2Nlc3NmdWwgPSB0cnVlXG5cbiAgICAgICAgICBpZiAoSW50ZXJuYWxTdGF0ZS5kZXZNb2RlKSB7XG4gICAgICAgICAgICBsZXQgbGF0ZXN0VmVyc2lvbiA9IHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuTEFURVNUX1ZFUlNJT05dXG4gICAgICAgICAgICBpZiAobGF0ZXN0VmVyc2lvbikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQSBuZXdlciB2ZXJzaW9uIG9mIExlYW5wbHVtLCAke2xhdGVzdFZlcnNpb259LCBpcyBhdmFpbGFibGUuIEdvIHRvYCArXG4gICAgICAgICAgICAgICAgICAnbGVhbnBsdW0uY29tIHRvIGRvd25sb2FkIGl0LicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMZWFucGx1bVNvY2tldC5jb25uZWN0KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBWYXJDYWNoZS5hcHBseURpZmZzKFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdLFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRTXSxcbiAgICAgICAgICAgICAgc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdKVxuICAgICAgICAgIFZhckNhY2hlLnRva2VuID0gc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5UT0tFTl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bCA9IGZhbHNlXG4gICAgICAgICAgVmFyQ2FjaGUubG9hZERpZmZzKClcbiAgICAgICAgfVxuICAgICAgICBJbnRlcm5hbFN0YXRlLnRyaWdnZXJTdGFydEhhbmRsZXJzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHN0YXJ0RnJvbUNhY2hlKHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMsIGNhbGxiYWNrKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIGlmICh0eXBlb2YgdXNlcklkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJJZFxuICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkQXNzaWdubWVudFxuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fVxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJJZCA9PT0gJ29iamVjdCcgJiYgdXNlcklkICE9PSBudWxsICYmXG4gICAgICAgIHVzZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRBc3NpZ25tZW50XG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHVzZXJJZFxuICAgICAgdXNlcklkID0gbnVsbFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzXG4gICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRBc3NpZ25tZW50XG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9XG4gICAgfVxuICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSB1c2VySWRcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIExlYW5wbHVtLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGNhbGxiYWNrKVxuICAgIH1cblxuICAgIEludGVybmFsU3RhdGUuaGFzU3RhcnRlZCA9IHRydWVcbiAgICBJbnRlcm5hbFN0YXRlLnN0YXJ0U3VjY2Vzc2Z1bCA9IHRydWVcbiAgICBpZiAoSW50ZXJuYWxTdGF0ZS5kZXZNb2RlKSB7XG4gICAgICBMZWFucGx1bVNvY2tldC5jb25uZWN0KClcbiAgICB9XG4gICAgVmFyQ2FjaGUubG9hZERpZmZzKClcbiAgICBJbnRlcm5hbFN0YXRlLnRyaWdnZXJTdGFydEhhbmRsZXJzKClcbiAgfVxuXG4gIHN0YXRpYyBzdG9wKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNUT1AsIHVuZGVmaW5lZCwge1xuICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcGF1c2VTZXNzaW9uKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlBBVVNFX1NFU1NJT04sIHVuZGVmaW5lZCwge1xuICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcmVzdW1lU2Vzc2lvbigpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5SRVNVTUVfU0VTU0lPTiwgdW5kZWZpbmVkLCB7XG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcXVldWVkOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBwYXVzZVN0YXRlKCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBBbm5vdGF0b3JcbiAgICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlBBVVNFX1NUQVRFLCB1bmRlZmluZWQsIHtcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcmVzdW1lU3RhdGUoKSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEFubm90YXRvclxuICAgICAgTGVhbnBsdW1SZXF1ZXN0LnJlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUkVTVU1FX1NUQVRFLCB1bmRlZmluZWQsIHtcbiAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgc2V0VXNlcklkKHVzZXJJZCkge1xuICAgIExlYW5wbHVtLnNldFVzZXJBdHRyaWJ1dGVzKHVzZXJJZClcbiAgfVxuXG4gIHN0YXRpYyBzZXRVc2VyQXR0cmlidXRlcyh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzKSB7XG4gICAgaWYgKHVzZXJBdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgdXNlcklkID09PSAnb2JqZWN0Jykge1xuICAgICAgICB1c2VyQXR0cmlidXRlcyA9IHVzZXJJZFxuICAgICAgICB1c2VySWQgPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJJZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBzZXRVc2VyQXR0cmlidXRlcyBleHBlY3RzIGEgc3RyaW5nIG9yIGFuICcgK1xuICAgICAgICAgICAgJ29iamVjdCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TRVRfVVNFUl9BVFRSSUJVVEVTLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlVTRVJfQVRUUklCVVRFUyxcbiAgICAgICAgICAgICAgICB1c2VyQXR0cmlidXRlcyA/IEpTT04uc3RyaW5naWZ5KHVzZXJBdHRyaWJ1dGVzKSA6IHVuZGVmaW5lZClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ORVdfVVNFUl9JRCwgdXNlcklkKSwge1xuICAgICAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgICAgICB9KVxuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIExlYW5wbHVtUmVxdWVzdC51c2VySWQgPSB1c2VySWRcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW1SZXF1ZXN0LnVzZXJJZClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdHJhY2soZXZlbnQsIHZhbHVlLCBpbmZvLCBwYXJhbXMpIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgLy8gb2JqZWN0ICYmICFudWxsICYmICF1bmRlZmluZWQgLT4gcGFyYW1zXG4gICAgLy8gc3RyaW5nIC0+IGluZm8sIHBhcmFtc1xuICAgIC8vICosIG9iamVjdCAmJiAhbnVsbCAmJiAhdW5kZWZpbmVkIC0+IHZhbHVlLCBwYXJhbXNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMgPSB2YWx1ZVxuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgICAgdmFsdWUgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcyA9IGluZm9cbiAgICAgIGluZm8gPSB2YWx1ZVxuICAgICAgdmFsdWUgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbmZvID09PSAnb2JqZWN0JyAmJiBpbmZvICE9PSBudWxsICYmIGluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gaW5mb1xuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICAvLyBub2luc3BlY3Rpb24gQW5ub3RhdG9yXG4gICAgICBMZWFucGx1bVJlcXVlc3QucmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5UUkFDSyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5FVkVOVCwgZXZlbnQpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVkFMVUUsIHZhbHVlIHx8IDAuMClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkZPLCBpbmZvKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlBBUkFNUywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSksIHtcbiAgICAgICAgICBxdWV1ZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBhZHZhbmNlVG8oc3RhdGUsIGluZm8sIHBhcmFtcykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICAvLyBzdHJpbmd8bnVsbHx1bmRlZmluZWQsICogLT4gaW5mbywgcGFyYW1zXG4gICAgLy8gb2JqZWN0ICYmICFudWxsICYmICF1bmRlZmluZWQgLT4gcGFyYW1zXG4gICAgaWYgKHR5cGVvZiBpbmZvID09PSAnb2JqZWN0JyAmJiBpbmZvICE9PSBudWxsICYmIGluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gaW5mb1xuICAgICAgaW5mbyA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIExlYW5wbHVtUmVxdWVzdC5yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLkFEVkFOQ0UsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNUQVRFLCBzdGF0ZSlcbiAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5GTywgaW5mbylcbiAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuUEFSQU1TLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKSwge1xuICAgICAgICBxdWV1ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgd2ViIHB1c2ggaXMgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIHN1cHBvcnRlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpXG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB3ZWIgcHVzaCBpcyBzdWJzY3JpYmVkLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyBpZiB0cnVlLCByZWplY3RzIGlmIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzV2ViUHVzaFN1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1YnNjcmliZWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoZSBicm93c2VyIGZvciB3ZWIgcHVzaC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAgIHNlcnZpY2VXb3JrZXJVcmwgVGhlIHVybCBvbiB5b3VyIHNlcnZlciB0aGF0IGhvc3RzIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3cubWluLmpzIHNlcnZpY2Ugd29ya2VyIGpzIGZpbGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgICAgICAgICAgICAgIFJlc29sdmVzIGlmIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcndpc2UgZmFpbHMuXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXJGb3JXZWJQdXNoKHNlcnZpY2VXb3JrZXJVcmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKFB1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpKSB7XG4gICAgICAgIHJldHVybiBQdXNoTWFuYWdlci5yZWdpc3RlcihzZXJ2aWNlV29ya2VyVXJsLCAoaXNTdWJzY3JpYmVkKSA9PiB7XG4gICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFB1c2hNYW5hZ2VyLnN1YnNjcmliZVVzZXIoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdCgnTGVhbnBsdW06IFdlYlB1c2ggaXMgbm90IHN1cHBvcnRlZC4nKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgdGhlIGJyb3dzZXIgZm9ybSB3ZWIgcHVzaC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgICAgICBSZXNvbHZlcyBvbiBzdWNjZXNzLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN0YXRpYyB1bnJlZ2lzdGVyRnJvbVdlYlB1c2goKSB7XG4gICAgcmV0dXJuIFB1c2hNYW5hZ2VyLnVuc3Vic2NyaWJlVXNlcigpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bS5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vTmV0d29yaydcblxuLyoqXG4gKiBTb2NrZXQuaW8gMS4wIGNsaWVudCBjbGFzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ja2V0SW9DbGllbnQge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBuZXcgU29ja2V0SW9DbGllbnQsIG5vdCBjb25uZWN0ZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2VcbiAgICB0aGlzLmNvbm5lY3RpbmcgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3RzIHRvIHRoZSBnaXZlbiBzb2NrZXRIb3N0LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHNvY2tldEhvc3QgVGhlIGhvc3QgdG8gY29ubmVjdCB0by5cbiAgICovXG4gIGNvbm5lY3Qoc29ja2V0SG9zdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXRoaXNcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbm5lY3RpbmcgPSB0cnVlXG4gICAgUmVxdWVzdC5hamF4KCdQT1NUJywgYGh0dHBzOi8vJHtzb2NrZXRIb3N0fS9zb2NrZXQuaW8vMWAsICcnLFxuICAgICAgICBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgbGV0IHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICAgICAgbGV0IHNlc3Npb24gPSBwYXJ0c1swXVxuICAgICAgICAgIGxldCBoZWFydGJlYXQgPSBwYXJzZUludChwYXJ0c1sxXSkgLyAyICogMTAwMFxuICAgICAgICAgIHNlbGYuc29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3NzOi8vJHtzb2NrZXRIb3N0fS9zb2NrZXQuaW8vMS93ZWJzb2NrZXQvJHtzZXNzaW9ufWApXG4gICAgICAgICAgbGV0IGhlYXJ0YmVhdEludGVydmFsID0gbnVsbFxuICAgICAgICAgIHNlbGYuc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RpbmcgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKHNlbGYub25vcGVuKSB7XG4gICAgICAgICAgICAgIHNlbGYub25vcGVuKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYXJ0YmVhdEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYuc29ja2V0LnNlbmQoJzI6OjonKVxuICAgICAgICAgICAgfSwgaGVhcnRiZWF0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IGZhbHNlXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGhlYXJ0YmVhdEludGVydmFsKVxuICAgICAgICAgICAgaWYgKHNlbGYub25jbG9zZSkge1xuICAgICAgICAgICAgICBzZWxmLm9uY2xvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VQYXJ0cyA9IGV2ZW50LmRhdGEuc3BsaXQoJzonKVxuICAgICAgICAgICAgbGV0IGNvZGUgPSBwYXJzZUludChtZXNzYWdlUGFydHNbMF0pXG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gMikge1xuICAgICAgICAgICAgICBzZWxmLnNvY2tldC5zZW5kKCcyOjonKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSA1KSB7XG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlUGFydHNbMV1cbiAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2VQYXJ0cy5zbGljZSgzKS5qb2luKCc6JykpXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlRXZlbnQgPSBkYXRhLm5hbWVcbiAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBkYXRhLmFyZ3NcbiAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VJZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnNlbmQoYDY6Ojoke21lc3NhZ2VJZH1gKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZWxmLm9ubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHNlbGYub25tZXNzYWdlKG1lc3NhZ2VFdmVudCwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSA3KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTb2NrZXQgZXJyb3I6ICR7ZXZlbnQuZGF0YX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHNlbGYuc29ja2V0LmNsb3NlKClcbiAgICAgICAgICAgIGlmIChzZWxmLm9uZXJyb3IpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbmVycm9yKGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgbnVsbCwgZmFsc2UsIHRydWUgLy8gbnVsbCwgcXVldWVkLCBwbGFpblRleHRcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgZ2l2ZW4gZXZlbnQgd2l0aCBhcmd1bWVudHMgdG8gdGhlIHNlcnZlci5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIGV2ZW50LlxuICAgKiBAcGFyYW0gIHsqfSBhcmdzIEFyZ3VtZW50cyB0byBzZW5kLlxuICAgKi9cbiAgc2VuZChuYW1lLCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBTb2NrZXQgaXMgbm90IGNvbm5lY3RlZC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBhcmdzSnNvbiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWUsXG4gICAgICBhcmdzXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5zZW5kKGA1Ojo6JHthcmdzSnNvbn1gKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU29ja2V0SW9DbGllbnQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fSGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19ub2RlVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJGYWxzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=