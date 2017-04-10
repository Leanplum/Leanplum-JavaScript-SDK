let _requestQueue = [];
let _networkTimeoutSeconds = 10;

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
class Request {
  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  static setNetworkTimeout(seconds) {
    _networkTimeoutSeconds = seconds;
  };

  static ajax(method, url, data, success, error, queued, plainText) {
    if (queued) {
      if (Request._runningRequest) {
        // eslint-disable-next-line prefer-rest-params
        return Request._enqueueRequest(arguments);
      }
      Request._runningRequest = true;
    }

    if (typeof(XDomainRequest) !== 'undefined') {
      if (location.protocol === 'http:' && url.indexOf('https:') == 0) {
        url = 'http:' + url.substring(6);
      }
      // eslint-disable-next-line prefer-rest-params
      return Request._ajaxIE8.apply(null, arguments);
    }

    let handled = false;

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (handled) {
          return;
        }
        handled = true;

        let response;
        let ranCallback = false;
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
          Request._runningRequest = false;
          Request._dequeueRequest();
        }
      }
    };
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'text/plain'); // Avoid pre-flight.
    xhr.send(data);
    setTimeout(function() {
      if (!handled) {
        xhr.abort();
      }
    }, _networkTimeoutSeconds * 1000);
  };

  static _ajaxIE8(method, url, data, success, error, queued, plainText) {
    let xdr = new XDomainRequest();
    xdr.onload = function() {
      let response;
      let ranCallback = false;
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
        Request._runningRequest = false;
        Request._dequeueRequest();
      }
    };
    xdr.onerror = xdr.ontimeout = function() {
      setTimeout(function() {
        if (error) {
          error(null, xdr);
        }
      }, 0);
      if (queued) {
        Request._runningRequest = false;
        Request._dequeueRequest();
      }
    };
    xdr.onprogress = function() {};
    xdr.open(method, url);
    xdr.timeout = _networkTimeoutSeconds * 1000;
    xdr.send(data);
  };

  static _enqueueRequest(args) {
    _requestQueue.push(args);
  };

  static _dequeueRequest() {
    let args = _requestQueue.shift();
    if (args) {
      Request.ajax.apply(null, args);
    }
  };
}

module.exports = Request;
