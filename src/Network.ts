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

declare var XDomainRequest

export default class Network {
  private networkTimeoutSeconds: number = 10
  private requestQueue = []
  private runningRequest: boolean = false

  /**
   * Sets the network timeout.
   * @param {number} seconds The timeout in seconds.
   */
  public setNetworkTimeout(seconds: number) {
    this.networkTimeoutSeconds = seconds
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
  public ajax(method, url, data, success, error, queued, plainText?) {
    if (queued) {
      if (this.runningRequest) {
        // eslint-disable-next-line prefer-rest-params
        return this.enqueueRequest(arguments)
      }
      this.runningRequest = true
    }

    /** @namespace XDomainRequest **/
    /** @namespace location **/
    if (typeof XDomainRequest !== 'undefined') {
      if (location.protocol === 'http:' && url.indexOf('https:') === 0) {
        url = `http:${url.substring(6)}`
      }
      // eslint-disable-next-line prefer-rest-params
      return Function.prototype.apply.call(this.ajaxIE8.bind(this), null, arguments)
    }

    let handled = false

    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
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
            setTimeout(() => {
              if (error) {
                error(null, xhr)
              }
            }, 0)
            ranCallback = true
          }
        }

        if (!ranCallback) {
          if (xhr.status >= 200 && xhr.status < 300) {
            setTimeout(() => {
              if (success) {
                success(response, xhr)
              }
            }, 0)
          } else {
            setTimeout(() => {
              if (error) {
                error(response, xhr)
              }
            }, 0)
          }
        }

        if (queued) {
          this.runningRequest = false
          this.dequeueRequest()
        }
      }
    }
    xhr.open(method, url, true)
    xhr.setRequestHeader('Content-Type', 'text/plain') // Avoid pre-flight.
    xhr.send(data)
    setTimeout(() => {
      if (!handled) {
        xhr.abort()
      }
    }, this.networkTimeoutSeconds * 1000)
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
  private ajaxIE8(method, url, data, success, error, queued, plainText) {
    let xdr = new XDomainRequest()
    xdr.onload = () => {
      let response
      let ranCallback = false
      if (plainText) {
        response = xdr.responseText
      } else {
        try {
          response = JSON.parse(xdr.responseText)
        } catch (e) {
          setTimeout(() => {
            if (error) {
              error(null, xdr)
            }
          }, 0)
          ranCallback = true
        }
      }
      if (!ranCallback) {
        setTimeout(() => {
          if (success) {
            success(response, xdr)
          }
        }, 0)
      }
      if (queued) {
        this.runningRequest = false
        this.dequeueRequest()
      }
    }
    xdr.onerror = xdr.ontimeout = () => {
      setTimeout(() => {
        if (error) {
          error(null, xdr)
        }
      }, 0)
      if (queued) {
        this.runningRequest = false
        this.dequeueRequest()
      }
    }
    xdr.onprogress = () => {
    }
    xdr.open(method, url)
    xdr.timeout = this.networkTimeoutSeconds * 1000
    xdr.send(data)
  }

  /**
   * Adds the request to the request queue.
   * @param {Arguments} requestArguments The request arguments from the initial method call.
   * @private
   */
  private enqueueRequest(requestArguments) {
    this.requestQueue.push(requestArguments)
  }

  /**
   * Removes the request from the request queue.
   * @private
   */
  private dequeueRequest() {
    let args = this.requestQueue.shift()
    if (args) {
      Function.prototype.apply.call(this.ajax.bind(this), null, args)
    }
  }
}
