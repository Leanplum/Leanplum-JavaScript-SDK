import Constants from './Constants';

class ArgsBuilder {
  constructor() {
    this.argString = '';
    this.argValues = {};
  }

  add(key, value) {
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

  body(body) {
    if (body) {
      this._body = body;
      return this;
    }
    return this._body;
  };

  attachApiKeys(appId, clientKey) {
    return this.add(Constants.PARAMS.APP_ID, appId)
      .add(Constants.PARAMS.CLIENT, Constants.CLIENT)
      .add(Constants.PARAMS.CLIENT_KEY, clientKey);
  };

  build() {
    return this.argString;
  };

  buildDict() {
    return this.argValues;
  };
};

module.exports = ArgsBuilder;
