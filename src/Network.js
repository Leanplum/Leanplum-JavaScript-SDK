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

let requestQueue = []
let networkTimeoutSeconds = 10

export default class Network {
  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  static setNetworkTimeout(seconds) {
    networkTimeoutSeconds = seconds
  }

  /**
   * Make an ajax request.
   * @param {string} method The http method.
   * @param {string} url The url to open.
   * @param {String|ArrayBuffer|Blob|Document|FormData} data The data to be sent in body.
   * @param {function} success A callback function to be called on success.
   * @param {function} error A callback function to be called on error.
   * @param {boolean} queued Whether the request should be queued or immediately sent.
   * @param {boolean} [plainText] Whether the response should be returned as plain text or json.
   * @return {*}
   */
  static ajax(method, url, data, success, error, queued, plainText) {
    if (queued) {
      if (Network.runningRequest) {
        // eslint-disable-next-line prefer-rest-params
        return Network.enqueueRequest(arguments)
      }
      Network.runningRequest = true
    }

    /** @namespace XDomainRequest **/
    /** @namespace location **/
    if (typeof XDomainRequest !== 'undefined') {
      if (location.protocol === 'http:' && url.indexOf('https:') === 0) {
        url = `http:${url.substring(6)}`
      }
      // eslint-disable-next-line prefer-rest-params
      return Reflect.apply(Network.ajaxIE8, null, arguments)
    }

    let handled = false

    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (handled) {
          return
        }
        handled = true

        let response
        let ranCallback = false
        if (plainText) {
          response = xhr.responseText
        } else {
          try {
            response = JSON.parse(xhr.responseText)
          } catch (e) {
            setTimeout(function() {
              if (error) {
                error(null, xhr)
              }
            }, 0)
            ranCallback = true
          }
        }

        if (!ranCallback) {
          if (xhr.status >= 200 && xhr.status < 300) {
            setTimeout(function() {
              if (success) {
                success(response, xhr)
              }
            }, 0)
          } else {
            setTimeout(function() {
              if (error) {
                error(response, xhr)
              }
            }, 0)
          }
        }

        if (queued) {
          Network.runningRequest = false
          Network.dequeueRequest()
        }
      }
    }
    xhr.open(method, url, true)
    xhr.setRequestHeader('Content-Type', 'text/plain') // Avoid pre-flight.
    xhr.send(data)
    setTimeout(function() {
      if (!handled) {
        xhr.abort()
      }
    }, networkTimeoutSeconds * 1000)
  }

  /**
   * Make an ajax request for IE8.
   * @param {string} method The http method.
   * @param {string} url The url to open.
   * @param {String|ArrayBuffer|Blob|Document|FormData} data The data to be sent in body.
   * @param {function} success A callback function to be called on success.
   * @param {function} error A callback function to be called on error.
   * @param {boolean} queued Whether the request should be queued or immediately sent.
   * @param {boolean} plainText Whether the response should be returned as plain text or json.
   */
  static ajaxIE8(method, url, data, success, error, queued, plainText) {
    let xdr = new XDomainRequest()
    xdr.onload = function() {
      let response
      let ranCallback = false
      if (plainText) {
        response = xdr.responseText
      } else {
        try {
          response = JSON.parse(xdr.responseText)
        } catch (e) {
          setTimeout(function() {
            if (error) {
              error(null, xdr)
            }
          }, 0)
          ranCallback = true
        }
      }
      if (!ranCallback) {
        setTimeout(function() {
          if (success) {
            success(response, xdr)
          }
        }, 0)
      }
      if (queued) {
        Network.runningRequest = false
        Network.dequeueRequest()
      }
    }
    xdr.onerror = xdr.ontimeout = function() {
      setTimeout(function() {
        if (error) {
          error(null, xdr)
        }
      }, 0)
      if (queued) {
        Network.runningRequest = false
        Network.dequeueRequest()
      }
    }
    xdr.onprogress = function() {
    }
    xdr.open(method, url)
    xdr.timeout = networkTimeoutSeconds * 1000
    xdr.send(data)
  }

  /**
   * Adds the request to the request queue.
   * @param {Arguments} requestArguments The request arguments from the initial method call.
   * @private
   */
  static enqueueRequest(requestArguments) {
    requestQueue.push(requestArguments)
  }

  /**
   * Removes the request from the request queue.
   * @private
   */
  static dequeueRequest() {
    let args = requestQueue.shift()
    if (args) {
      Reflect.apply(Network.ajax, null, args)
    }
  }
}
