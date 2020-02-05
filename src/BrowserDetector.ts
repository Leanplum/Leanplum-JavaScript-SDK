/*
 *
 *  Copyright 2020 Leanplum Inc. All rights reserved.
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
const dataBrowser = [{
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
  prop: (window as any).opera,
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
}]

const dataOS = [{
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
  string: navigator.userAgent,
  subString: 'Android',
  identity: 'Android'
}, {
  string: navigator.platform,
  subString: 'Linux',
  identity: 'Linux'
}]

// Browser detection. Source: http://www.quirksmode.org/js/detect.html
/**
 * Helper class to detect which browser client is using.
 */
export default class BrowserDetector {
  browser: string
  version: number | string
  OS: string
  versionSearchString: string

  /**
   * Initializes the object with current browser settings.
   */
  constructor() {
    this.browser = this._searchString(dataBrowser) || 'Unknown Browser'
    this.version = this._searchVersion(navigator.userAgent) ||
        this._searchVersion(navigator.appVersion) || 'Unknown Version'
    this.OS = this._searchString(dataOS) || 'Unknown OS'
  }

  /**
   * Matches the client's system to the predefined system list.
   * @param {object} data The data object to scan.
   * @return {string} The found identity string.
   */
  _searchString(data) {
    for (let i = 0; i < data.length; i++) {
      let dataString = data[i].string
      let dataProp = data[i].prop
      this.versionSearchString = data[i].versionSearch || data[i].identity
      if (dataString) {
        if (dataString.indexOf(data[i].subString) !== -1) {
          return data[i].identity
        }
      } else if (dataProp) {
        return data[i].identity
      }
    }
  }

  /**
   * Finds the current version of the given system.
   * @param {object} dataString The data object to scan.
   * @return {number} The found number.
   * @private
   */
  _searchVersion(dataString) {
    if (!dataString) {
      return -1
    }
    let index = dataString.indexOf(this.versionSearchString)
    if (index === -1) {
      return -1
    }
    return parseFloat(dataString.substring(index + this.versionSearchString.length + 1))
  }
}
