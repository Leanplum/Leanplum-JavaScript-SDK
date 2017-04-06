/**
 * @preserve Leanplum Javascript SDK v1.1.10.
 * Copyright 2016, Leanplum, Inc. All rights reserved.
 *
 * You may not distribute this source code without prior written permission from Leanplum.
 */
(function() {
  var exports = {};
  var _ = function() {};

  if (!this['Leanplum']) {
    this['Leanplum'] = exports;
  }

  var API_PATH = 'https://www.leanplum.com/api';
  var SOCKET_HOST = 'dev.leanplum.com';
  var SDK_VERSION = '1.1.10';
  var CLIENT = 'js';
  var NETWORK_TIMEOUT_SECONDS = 10;

  var METHODS = {
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
  };

  var PARAMS = {
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
  };

  var KEYS = {
    IS_REGISTERED: 'isRegistered',
    LATEST_VERSION: "latestVersion",
    VARS: 'vars',
    VARIANTS: 'variants',
    ACTION_METADATA: 'actionMetadata',
    TOKEN: 'token'
  };

  var DEFAULT_KEYS = {
    COUNT: "__leanplum_unsynced",
    ITEM: "__leanplum_unsynced_",
    VARIABLES: "__leanplum_variables",
    VARIANTS: "__leanplum_variants",
    ACTION_METADATA: "__leanplum_action_metadata",
    TOKEN: "__leanplum_token",
    DEVICE_ID: "__leanplum_device_id",
    USER_ID: "__leanplum_user_id"
  };

  var VALUES = {
    DETECT: '(detect)'
  };

  var Leanplum = {
    _checkForUpdatesInDevelopmentMode: true,
    _requestQueue: [],
    _variablesChangedHandlers: [],
    _variants: [],
    _startHandlers: [],
    _actionMetadata: {},
    _token: '',
    _batchEnabled: true,
    _batchCooldown: 5
  };

  exports['setApiPath'] = function(apiPath) {
    if (!apiPath || apiPath.isEmpty()) {
      return;
    }
    API_PATH = apiPath;
  };

  exports['setEmail'] = function(email) {
    Leanplum._email = email;
  };

  exports['setUpdateCheckingEnabledInDevelopmentMode'] = function(enabled) {
    Leanplum._checkForUpdatesInDevelopmentMode = enabled;
  };

  exports['setNetworkTimeout'] = function(seconds) {
    NETWORK_TIMEOUT_SECONDS = seconds;
  };

  exports['setAppIdForDevelopmentMode'] = function(appId, accessKey) {
    Leanplum._appId = appId;
    Leanplum._clientKey = accessKey;
    Leanplum._devMode = true;
  };

  exports['setAppIdForProductionMode'] = function(appId, accessKey) {
    Leanplum._appId = appId;
    Leanplum._clientKey = accessKey;
    Leanplum._devMode = false;
  };

  exports['setSocketHost'] = function(host) {
    SOCKET_HOST = host;
  };

  exports['setDeviceId'] = function(deviceId) {
    Leanplum._deviceId = deviceId;
  };

  exports['setAppVersion'] = function(versionName) {
    Leanplum._versionName = versionName;
  };

  exports['setDeviceName'] = function(deviceName) {
    Leanplum._deviceName = deviceName;
  };

  exports['setDeviceModel'] = function(deviceModel) {
    Leanplum._deviceModel = deviceModel;
  };

  exports['setSystemName'] = function(systemName) {
    Leanplum._systemName = systemName;
  };

  exports['setSystemVersion'] = function(systemVersion) {
    Leanplum._systemVersion = systemVersion;
  };

  exports['setVariables'] = function(variables) {
    Leanplum._variables = variables;
  };

  exports['setRequestBatching'] = function(batchEnabled, cooldownSeconds) {
    Leanplum._batchEnabled = batchEnabled;
    Leanplum._batchCooldown = cooldownSeconds;
  };

  exports['getVariables'] = function(variables) {
    return Leanplum._merged !== undefined ? Leanplum._merged : Leanplum._variables;
  };

  exports['getVariable'] = function(args) {
    var current = exports['getVariables']();
    for (var i = 0; i < arguments.length; i++) {
      current = current[arguments[i]];
    }
    return current;
  };

  exports['getVariants'] = function() {
    return Leanplum._variants || [];
  };

  exports['addStartResponseHandler'] = function(handler) {
    Leanplum._startHandlers.push(handler);
    if (Leanplum._hasStarted) {
      handler(Leanplum._startSuccessful);
    }
  };

  exports['addVariablesChangedHandler'] = function(handler) {
    Leanplum._variablesChangedHandlers.push(handler);
    if (Leanplum._hasReceivedDiffs) {
      handler();
    }
  };

  exports['removeStartResponseHandler'] = function(handler) {
    var idx = Leanplum._startHandlers.indexOf(handler);
    if (idx >= 0) {
      Leanplum._startHandlers.splice(idx, 1);
    }
  };

  exports['removeVariablesChangedHandler'] = function(handler) {
    var idx = Leanplum._variablesChangedHandlers.indexOf(handler);
    if (idx >= 0) {
      Leanplum._variablesChangedHandlers.splice(idx, 1);
    }
  };

  exports['start'] = function(userId, userAttributes, callback) {
    // Overloads.
    if (typeof(userId) == 'function') {
      callback = userId;
      userAttributes = {};
      userId = null;
    } else if (typeof(userId) == 'object' && userId !== null && userId !== undefined) {
      callback = userAttributes;
      userAttributes = userId;
      userId = null;
    } else if (typeof(userAttributes) == 'function') {
      callback = userAttributes;
      userAttributes = {};
    }
    Leanplum._userId = userId;
    if (callback) {
      exports['addStartResponseHandler'](callback);
    }

    // Issue request.
    Leanplum.request(METHODS.START,
      new ArgsBuilder()
      .add(PARAMS.USER_ATTRIBUTES, JSON.stringify(userAttributes))
      .add(PARAMS.COUNTRY, VALUES.DETECT)
      .add(PARAMS.REGION, VALUES.DETECT)
      .add(PARAMS.CITY, VALUES.DETECT)
      .add(PARAMS.LOCATION, VALUES.DETECT)
      .add(PARAMS.SYSTEM_NAME, Leanplum._systemName || BrowserDetect.OS)
      .add(PARAMS.SYSTEM_VERSION, "" + (Leanplum._systemVersion || ""))
      .add(PARAMS.BROWSER_NAME, BrowserDetect.browser)
      .add(PARAMS.BROWSER_VERSION, "" + BrowserDetect.version)
      .add(PARAMS.LOCALE, VALUES.DETECT)
      .add(PARAMS.DEVICE_NAME, Leanplum._deviceName || (BrowserDetect.browser + ' ' + BrowserDetect.version))
      .add(PARAMS.DEVICE_MODEL, Leanplum._deviceModel || 'Web Browser')
      .add(PARAMS.INCLUDE_DEFAULTS, false)
      // TODO: referer
      , {
        queued: true,
        sendNow: true,
        response: function(response) {
          Leanplum._hasStarted = true;
          var startResponse = Leanplum._getLastResponse(response);
          if (Leanplum._isResponseSuccess(startResponse)) {
            Leanplum._startSuccessful = true;

            if (Leanplum._devMode) {
              var latestVersion = startResponse[KEYS.LATEST_VERSION];
              if (latestVersion) {
                console.log("A newer version of Leanplum, " + latestVersion + ", is available. " +
                  "Go to leanplum.com to download it.");
              }
              if (WebSocket) {
                Leanplum._socketIOConnect();
              } else {
                console.log("Your browser doesn't support WebSockets.");
              }
            }

            Leanplum.setContent(
              startResponse[KEYS.VARS],
              startResponse[KEYS.VARIANTS],
              startResponse[KEYS.ACTION_METADATA]);
            Leanplum._token = startResponse[KEYS.TOKEN];
          } else {
            Leanplum._startSuccessful = false;
            Leanplum.loadDiffs();
          }
          for (var i = 0; i < Leanplum._startHandlers.length; i++) {
            Leanplum._startHandlers[i](Leanplum._startSuccessful);
          }
        }
      }
    );
  };

  exports['startFromCache'] = function(userId, userAttributes, callback) {
    // Overloads.
    if (typeof(userId) == 'function') {
      callback = userId;
      userAttributes = {};
      userId = null;
    } else if (typeof(userId) == 'object' && userId !== null && userId !== undefined) {
      callback = userAttributes;
      userAttributes = userId;
      userId = null;
    } else if (typeof(userAttributes) == 'function') {
      callback = userAttributes;
      userAttributes = {};
    }
    Leanplum._userId = userId;
    if (callback) {
      exports['addStartResponseHandler'](callback);
    }

    Leanplum._hasStarted = true;
    Leanplum._startSuccessful = true;
    if (Leanplum._devMode) {
      if (WebSocket) {
        Leanplum._socketIOConnect();
      } else {
        console.log("Your browser doesn't support WebSockets.");
      }
    }
    Leanplum.loadDiffs();
    for (var i = 0; i < Leanplum._startHandlers.length; i++) {
      Leanplum._startHandlers[i](Leanplum._startSuccessful);
    }
  };

  Leanplum._socketIOConnect = function() {
    var client = new SocketIOClient();
    var authSent = false;
    client.onopen = function() {
      if (!authSent) {
        console.log('Leanplum: Connected to development server.');
        var args = {};
        args[PARAMS.APP_ID] = Leanplum._appId;
        args[PARAMS.DEVICE_ID] = Leanplum._deviceId;
        client.emit('auth', args);
        authSent = true;
      }
    };
    client.onerror = function(event) {
      console.log('Leanplum: Socket error', event);
    }
    client.onmessage = function(event, args) {
      if (event == 'updateVars') {
        Leanplum.request(METHODS.GET_VARS,
          new ArgsBuilder()
          .add(PARAMS.INCLUDE_DEFAULTS, false), {
            queued: false,
            sendNow: true,
            response: function(response) {
              var getVarsResponse = Leanplum._getLastResponse(response);
              var values = getVarsResponse[KEYS.VARS];
              var variants = getVarsResponse[KEYS.VARIANTS];
              var actionMetadata = getVarsResponse[KEYS.ACTION_METADATA];
              if (!_.isEqual(values, Leanplum._diffs)) {
                Leanplum.setContent(values, variants, actionMetadata);
              }
            }
          }
        );
      } else if (event == 'getVariables') {
        Leanplum.sendVariables();
        client.emit('getContentResponse', {
          'updated': true
        });
      } else if (event == 'getActions') {
        // Unsupported in JavaScript SDK.
        client.emit('getContentResponse', {
          'updated': false
        });
      } else if (event == 'registerDevice') {
        alert('Your device has been registered to ' + args[0]['email'] + '.');
      }
    };
    client.onclose = function() {
      console.log('Leanplum: Disconnected to development server.');
      authSent = false;
    };
    client.connect();
    setInterval(function() {
      if (!client.connected && !client.connecting) {
        client.connect();
      }
    }, 5000);
  };

  exports['stop'] = function() {
    Leanplum.request(METHODS.STOP, undefined, {
      sendNow: true,
      queued: true
    });
  };

  exports['pauseSession'] = function() {
    Leanplum.request(METHODS.PAUSE_SESSION, undefined, {
      sendNow: true,
      queued: true
    });
  };

  exports['resumeSession'] = function() {
    Leanplum.request(METHODS.RESUME_SESSION, undefined, {
      sendNow: true,
      queued: true
    });
  };

  exports['pauseState'] = function() {
    Leanplum.request(METHODS.PAUSE_STATE, undefined, {
      queued: true
    });
  };

  exports['resumeState'] = function() {
    Leanplum.request(METHODS.RESUME_STATE, undefined, {
      queued: true
    });
  };

  exports['setUserId'] = function(userId) {
    exports['setUserAttributes'](userId);
  };

  exports['setUserAttributes'] = function(userId, userAttributes) {
    if (userAttributes === undefined) {
      if (typeof userId == 'object') {
        userAttributes = userId;
        userId = undefined;
      } else if (typeof userId != 'string') {
        console.log('Leanplum: setUserAttributes expects a string or an object');
        return;
      }
    }
    Leanplum.request(METHODS.SET_USER_ATTRIBUTES,
      new ArgsBuilder()
      .add(PARAMS.USER_ATTRIBUTES,
        userAttributes ? JSON.stringify(userAttributes) : undefined)
      .add(PARAMS.NEW_USER_ID, userId), {
        queued: true
      });
    if (userId) {
      Leanplum._userId = userId;
      Leanplum._saveToLocalStorage(DEFAULT_KEYS.USER_ID, Leanplum._userId);
    }
  };

  exports['track'] = function(event, value, info, params) {
    // Overloads.
    // object && !null && !undefined -> params
    // string -> info, params
    // *, object && !null && !undefined -> value, params
    if (typeof(value) == 'object' && value !== null && value !== undefined) {
      params = value;
      info = undefined;
      value = undefined;
    } else if (typeof(value) == 'string') {
      params = info;
      info = value;
      value = undefined;
    } else if (typeof(info) == 'object' && info !== null && info !== undefined) {
      params = info;
      info = undefined;
    }

    Leanplum.request(METHODS.TRACK,
      new ArgsBuilder()
      .add(PARAMS.EVENT, event)
      .add(PARAMS.VALUE, value || 0.0)
      .add(PARAMS.INFO, info)
      .add(PARAMS.PARAMS, JSON.stringify(params)), {
        queued: true
      });
  };

  exports['advanceTo'] = function(state, info, params) {
    // Overloads.
    // string|null|undefined, * -> info, params
    // object && !null && !undefined -> params
    if (typeof(info) == 'object' && info !== null && info !== undefined) {
      params = info;
      info = undefined;
    }

    Leanplum.request(METHODS.ADVANCE,
      new ArgsBuilder()
      .add(PARAMS.STATE, state)
      .add(PARAMS.INFO, info)
      .add(PARAMS.PARAMS, JSON.stringify(params)), {
        queued: true
      });
  };

  // Leanplum utility methods.

  Leanplum.setContent = function(diffs, variants, actionMetadata) {
    Leanplum._diffs = diffs;
    Leanplum._variants = variants;
    Leanplum._actionMetadata = actionMetadata;
    Leanplum._hasReceivedDiffs = true;
    Leanplum._merged = Leanplum.mergeHelper(Leanplum._variables, diffs);
    Leanplum.saveDiffs();
    for (var i = 0; i < Leanplum._variablesChangedHandlers.length; i++) {
      Leanplum._variablesChangedHandlers[i]();
    }
  };

  Leanplum.mergeHelper = function(vars, diff) {
    if (typeof diff == 'number' || typeof diff == 'boolean' || typeof diff == 'string') {
      return diff;
    }
    if (diff === null || diff === undefined) {
      return vars;
    }

    var objIterator = function(obj) {
      return function(f) {
        if (obj instanceof Array) {
          for (var i = 0; i < obj.length; i++) {
            f(obj[i]);
          }
        } else {
          for (var attr in obj) {
            f(attr);
          }
        }
      };
    };
    var varsIterator = objIterator(vars);
    var diffIterator = objIterator(diff);

    // Infer that the diffs is an array if the vars value doesn't exist to tell us the type.
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
          if (!("" + parseInt(varSubscript)) == varSubscript) {
            isArray = false;
            break;
          }
        }
      }
    }

    // Merge arrays.
    if (vars instanceof Array || isArray) {
      var merged = [];
      varsIterator(function(attr) {
        merged.push(attr);
      });
      diffIterator(function(varSubscript) {
        var subscript = parseInt(varSubscript.substring(1, varSubscript.length - 1));
        var diffValue = diff[varSubscript];
        while (subscript >= merged.length) {
          merged.push(null);
        }
        merged[subscript] = Leanplum.mergeHelper(merged[subscript], diffValue);
      });
      return merged;
    }

    // Merge dictionaries.
    var merged = {};
    varsIterator(function(attr) {
      if (diff[attr] === null || diff[attr] === undefined) {
        merged[attr] = vars[attr];
      }
    });
    diffIterator(function(attr) {
      merged[attr] = Leanplum.mergeHelper(vars != null ? vars[attr] : null, diff[attr]);
    });
    return merged;
  };

  Leanplum.sendVariables = function() {
    var body = {};
    body[PARAMS.VARIABLES] = Leanplum._variables;
    Leanplum.request(METHODS.SET_VARS,
      new ArgsBuilder().body(JSON.stringify(body)), {
        sendNow: true
      });
  };

  Leanplum.loadDiffs = function() {
    try {
      Leanplum.setContent(
        JSON.parse(Leanplum._getFromLocalStorage(DEFAULT_KEYS.VARIABLES) || null),
        JSON.parse(Leanplum._getFromLocalStorage(DEFAULT_KEYS.VARIANTS) || null),
        JSON.parse(Leanplum._getFromLocalStorage(DEFAULT_KEYS.ACTION_METADATA) || null));
      Leanplum._token = Leanplum._getFromLocalStorage(DEFAULT_KEYS.TOKEN);
    } catch (e) {
      console.log('Leanplum: Invalid diffs: ' + e);
    }
  };

  Leanplum.saveDiffs = function() {
    Leanplum._saveToLocalStorage(DEFAULT_KEYS.VARIABLES, JSON.stringify(Leanplum._diffs || {}));
    Leanplum._saveToLocalStorage(
      DEFAULT_KEYS.VARIANTS, JSON.stringify(Leanplum._variants || [])
    );
    Leanplum._saveToLocalStorage(DEFAULT_KEYS.ACTION_METADATA,
      JSON.stringify(Leanplum._actionMetadata || {}));
    Leanplum._saveToLocalStorage(DEFAULT_KEYS.TOKEN, Leanplum._token);
  };

  Leanplum._saveRequestForLater = function(args) {
    var count = Leanplum._getFromLocalStorage(DEFAULT_KEYS.COUNT) || 0;
    var itemKey = DEFAULT_KEYS.ITEM + count;
    Leanplum._saveToLocalStorage(itemKey, JSON.stringify(args));
    count++;
    Leanplum._saveToLocalStorage(DEFAULT_KEYS.COUNT, count);
  };

  Leanplum._popUnsentRequests = function() {
    var requestData = [];
    var count = Leanplum._getFromLocalStorage(DEFAULT_KEYS.COUNT) || 0;
    Leanplum._removeFromLocalStorage(DEFAULT_KEYS.COUNT);
    for (var i = 0; i < count; i++) {
      var itemKey = DEFAULT_KEYS.ITEM + i;
      try {
        var requestArgs = JSON.parse(Leanplum._getFromLocalStorage(itemKey));
        requestData.push(requestArgs);
      } catch (e) {}
      Leanplum._removeFromLocalStorage(itemKey);
    }
    return requestData;
  };

  Leanplum.request = function(action, params, options) {
    options = options || {};
    params = params || new ArgsBuilder();

    // Get or create device ID and user ID.
    if (!Leanplum._deviceId) {
      Leanplum._deviceId = Leanplum._getFromLocalStorage(DEFAULT_KEYS.DEVICE_ID);
    }
    if (!Leanplum._deviceId) {
      var id = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 16; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      Leanplum._deviceId = id;
      Leanplum._saveToLocalStorage(DEFAULT_KEYS.DEVICE_ID, id);
    }
    if (!Leanplum._userId) {
      Leanplum._userId = Leanplum._getFromLocalStorage(DEFAULT_KEYS.USER_ID);
      if (!Leanplum._userId) {
        Leanplum._userId = Leanplum._deviceId;
      }
    }
    Leanplum._saveToLocalStorage(DEFAULT_KEYS.USER_ID, Leanplum._userId);

    var argsBuilder = params
      .attachApiKeys()
      .add(PARAMS.SDK_VERSION, SDK_VERSION)
      .add(PARAMS.DEVICE_ID, Leanplum._deviceId)
      .add(PARAMS.USER_ID, Leanplum._userId)
      .add(PARAMS.ACTION, action)
      .add(PARAMS.VERSION_NAME, Leanplum._versionName)
      .add(PARAMS.DEV_MODE, Leanplum._devMode)
      .add(PARAMS.TIME, "" + (new Date().getTime() / 1000));
    var success = options.success || options.response;
    var error = options.error || options.response;

    if (!Leanplum._appId || !Leanplum._clientKey) {
      var err = 'Leanplum App ID and client key are not set. Make sure you are calling setAppIdForDevelopmentMode or setAppIdForProductionMode before issuing API calls.';
      console.error(err);
      if (error) error(err);
      return;
    }

    if (params.body()) {
      Leanplum._ajax('POST', API_PATH + '?' + argsBuilder.build(), params.body(), success, error, options.queued);
      return;
    }

    var sendNow = (Leanplum._devMode || options.sendNow || !Leanplum._batchEnabled);

    var sendUnsentRequests = function() {
      var requestsToSend = Leanplum._popUnsentRequests();
      if (requestsToSend.length > 0) {
        var requestData = JSON.stringify({
          'data': requestsToSend
        });
        var multiRequestArgs = new ArgsBuilder()
          .attachApiKeys()
          .add(PARAMS.SDK_VERSION, SDK_VERSION)
          .add(PARAMS.ACTION, METHODS.MULTI)
          .add(PARAMS.TIME, "" + (new Date().getTime() / 1000))
          .build();
        Leanplum._ajax('POST', API_PATH + '?' + multiRequestArgs, requestData, success, error, options.queued);
      }
    }

    // Deal with cooldown.
    if (!sendNow && Leanplum._batchCooldown) {
      var now = new Date().getTime() / 1000;
      if (!Leanplum._lastRequestTime || now - Leanplum._lastRequestTime >= Leanplum._batchCooldown) {
        sendNow = true;
        Leanplum._lastRequestTime = now;
      } else {
        if (!Leanplum._cooldownTimeout) {
          Leanplum._cooldownTimeout = setTimeout(function() {
            Leanplum._cooldownTimeout = null;
            Leanplum._lastRequestTime = new Date().getTime() / 1000;
            sendUnsentRequests();
          }, (Leanplum._batchCooldown - (now - Leanplum._lastRequestTime)) * 1000);
        }
      }
    }

    Leanplum._saveRequestForLater(argsBuilder.buildDict());
    if (sendNow) {
      sendUnsentRequests();
    }
  };

  ////////////////// Response parsing ////////////////// 

  Leanplum._numResponses = function(response) {
    if (!response || !response['response']) {
      return 0;
    }
    return response['response'].length;
  };

  Leanplum._getResponseAt = function(response, index) {
    if (!response || !response['response']) {
      return null;
    }
    return response['response'][index];
  };

  Leanplum._getLastResponse = function(response) {
    var count = Leanplum._numResponses(response);
    if (count > 0) {
      return Leanplum._getResponseAt(response, count - 1);
    } else {
      return null;
    }
  };

  Leanplum._isResponseSuccess = function(response) {
    if (!response) {
      return false;
    }
    return response['success'] ? true : false;
  };

  Leanplum._getResponseError = function(response) {
    if (!response) {
      return null;
    }
    var error = response['error'];
    if (!error) {
      return null;
    }
    return error['message'];
  };

  Leanplum._localStorageEnabled = undefined;
  Leanplum._alternateLocalStorage = {};

  Leanplum._getFromLocalStorage = function(key) {
    if (Leanplum._localStorageEnabled === false) {
      return Leanplum._alternateLocalStorage[key];
    }
    return localStorage[key];
  };

  Leanplum._saveToLocalStorage = function(key, value) {
    if (Leanplum._localStorageEnabled === false) {
      Leanplum._alternateLocalStorage[key] = value;
      return;
    }
    try {
      localStorage[key] = value;
    } catch (e) {
      Leanplum._localStorageEnabled = false;
      Leanplum._saveToLocalStorage(key, value);
    }
  };

  Leanplum._removeFromLocalStorage = function(key) {
    if (Leanplum._localStorageEnabled === false) {
      delete Leanplum._alternateLocalStorage[key];
      return;
    }
    try {
      localStorage.removeItem(key);
    } catch (e) {
      Leanplum._localStorageEnabled = false;
      Leanplum._removeFromLocalStorage(key);
    }
  };

  ////////////////// Args builder ////////////////// 

  var ArgsBuilder = function() {
    this.argString = '';
    this.argValues = {};
  };
  ArgsBuilder.prototype.add = function(key, value) {
    if (typeof(value) === 'undefined') {
      return this;
    }
    if (this.argString) {
      this.argString += '&';
    }
    this.argString += key + '=' + encodeURIComponent(value);
    this.argValues[key] = value;
    return this;
  };
  ArgsBuilder.prototype.body = function(body) {
    if (body) {
      this._body = body;
      return this;
    }
    return this._body;
  };
  ArgsBuilder.prototype.attachApiKeys = function(argsBuilder) {
    return this.add(PARAMS.APP_ID, Leanplum._appId)
      .add(PARAMS.CLIENT, CLIENT)
      .add(PARAMS.CLIENT_KEY, Leanplum._clientKey);
  };
  ArgsBuilder.prototype.build = function() {
    return this.argString;
  };
  ArgsBuilder.prototype.buildDict = function() {
    return this.argValues;
  };

  ////////////////// Socket IO ////////////////// 

  var SocketIOClient = function() {
    this.connected = false;
    this.connecting = false;
  };
  SocketIOClient.prototype.emit = function(name, args) {
    this.socket.send('5:::' + JSON.stringify({
      'name': name,
      'args': args
    }));
  };
  SocketIOClient.prototype.connect = function() {
    var self = this;
    self.connecting = true;
    Leanplum._ajax('POST', "https://" + SOCKET_HOST + "/socket.io/1", "", function(line) {
      var parts = line.split(':');
      var session = parts[0];
      var heartbeat = parseInt(parts[1]) / 2 * 1000;
      self.socket = new WebSocket("wss://" + SOCKET_HOST + "/socket.io/1/websocket/" + session);
      var heartbeatInterval = null;
      self.socket.onopen = function() {
        self.connected = true;
        self.connecting = false;
        if (self.onopen) {
          self.onopen();
        }
        heartbeatInterval = setInterval(function() {
          self.socket.send("2:::");
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
        var parts = event.data.split(':');
        var code = parseInt(parts[0]);
        if (code == 2) {
          self.socket.send('2::');
        } else if (code == 5) {
          var messageId = parts[1];
          var data = JSON.parse(parts.slice(3).join(':'));
          var event = data['name'];
          var args = data['args'];
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
    }, null, false /* queued */ , true /* plainText */ );
  };

  ////////////////// AJAX ////////////////// 

  /*
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
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
   * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
   * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
   * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */

  Leanplum._ajaxIE8 = function(method, url, data, success, error, queued, plainText) {
    var xdr = new XDomainRequest();
    xdr.onload = function() {
      var response;
      var ranCallback = false;
      if (plainText) {
        response = xdr.responseText;
      } else {
        try {
          response = JSON.parse(xdr.responseText);
        } catch (e) {
          setTimeout(function() {
            if (error) {
              error(null, xdr);
            }
          }, 0);
          ranCallback = true;
        }
      }
      if (!ranCallback) {
        setTimeout(function() {
          if (success) {
            success(response, xdr);
          }
        }, 0);
      }
      if (queued) {
        Leanplum._runningRequest = false;
        Leanplum._dequeueRequest();
      }
    };
    xdr.onerror = xdr.ontimeout = function() {
      setTimeout(function() {
        if (error) {
          error(null, xdr);
        }
      }, 0);
      if (queued) {
        Leanplum._runningRequest = false;
        Leanplum._dequeueRequest();
      }
    };
    xdr.onprogress = function() {};
    xdr.open(method, url);
    xdr.timeout = NETWORK_TIMEOUT_SECONDS * 1000;
    xdr.send(data);
  };

  Leanplum._enqueueRequest = function(args) {
    Leanplum._requestQueue.push(args);
  };

  Leanplum._dequeueRequest = function() {
    var args = Leanplum._requestQueue.shift();
    if (args) {
      Leanplum._ajax.apply(null, args);
    }
  };

  Leanplum._ajax = function(method, url, data, success, error, queued, plainText) {
    if (queued) {
      if (Leanplum._runningRequest) {
        return Leanplum._enqueueRequest(arguments);
      }
      Leanplum._runningRequest = true;
    }

    if (typeof(XDomainRequest) !== "undefined") {
      if (location.protocol === 'http:' && url.indexOf('https:') == 0) {
        url = 'http:' + url.substring(6);
      }
      return Leanplum._ajaxIE8.apply(null, arguments);
    }

    var handled = false;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (handled) {
          return;
        }
        handled = true;

        var response;
        var ranCallback = false;
        if (plainText) {
          response = xhr.responseText;
        } else {
          try {
            response = JSON.parse(xhr.responseText);
          } catch (e) {
            setTimeout(function() {
              if (error) {
                error(null, xhr);
              }
            }, 0);
            ranCallback = true;
          }
        }

        if (!ranCallback) {
          if (xhr.status >= 200 && xhr.status < 300) {
            setTimeout(function() {
              if (success) {
                success(response, xhr);
              }
            }, 0);
          } else {
            setTimeout(function() {
              if (error) {
                error(response, xhr);
              }
            }, 0);
          }
        }

        if (queued) {
          Leanplum._runningRequest = false;
          Leanplum._dequeueRequest();
        }
      }
    };
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "text/plain"); // avoid pre-flight.
    xhr.send(data);
    setTimeout(function() {
      if (!handled) {
        xhr.abort();
      }
    }, NETWORK_TIMEOUT_SECONDS * 1000);
  };

  //     Underscore.js 1.4.2
  //     http://underscorejs.org
  //     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
  //     Underscore may be freely distributed under the MIT license.

  // Extend a given object with all the properties in passed-in object(s).
  _.iextend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    });
    return obj;
  };

  _.isFunction = function(obj) {
    return typeof obj === 'function';
  };

  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = Object.prototype.toString.call(a);
    if (className != Object.prototype.toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
        // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
          a.global == b.global &&
          a.multiline == b.multiline &&
          a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0,
      result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor,
        bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
          _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Browser detection. Source: http://www.quirksmode.org/js/detect.html
  var BrowserDetect = {
    init: function() {
      this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
      this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
      this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function(data) {
      for (var i = 0; i < data.length; i++) {
        var dataString = data[i].string;
        var dataProp = data[i].prop;
        this.versionSearchString = data[i].versionSearch || data[i].identity;
        if (dataString) {
          if (dataString.indexOf(data[i].subString) != -1)
            return data[i].identity;
        } else if (dataProp)
          return data[i].identity;
      }
    },
    searchVersion: function(dataString) {
      if (!dataString) {
        return;
      }
      var index = dataString.indexOf(this.versionSearchString);
      if (index == -1) {
        return;
      }
      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [{
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome"
    }, {
      string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb"
    }, {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version"
    }, {
      prop: window.opera,
      identity: "Opera",
      versionSearch: "Version"
    }, {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab"
    }, {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror"
    }, {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox"
    }, {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino"
    }, { // for newer Netscapes (6+)
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape"
    }, {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE"
    }, {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv"
    }, { // for older Netscapes (4-)
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla"
    }],
    dataOS: [{
      string: navigator.platform,
      subString: "Win",
      identity: "Windows"
    }, {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac OS"
    }, {
      string: navigator.userAgent,
      subString: "iPhone",
      identity: "iOS"
    }, {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux"
    }]

  };
  BrowserDetect.init();

}).call(this);
