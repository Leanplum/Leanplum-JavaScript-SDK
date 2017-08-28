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
  string: navigator.platform,
  subString: 'Linux',
  identity: 'Linux'
}]

// Browser detection. Source: http://www.quirksmode.org/js/detect.html
class BrowserDetector {
  constructor() {
    this.browser = this.searchString(dataBrowser) ||
        'An unknown browser'
    this.version = this.searchVersion(navigator.userAgent) ||
        this.searchVersion(navigator.appVersion) || 'an unknown version'
    this.OS = this.searchString(dataOS) || 'an unknown OS'
  }

  searchString(data) {
    for (let i = 0; i < data.length; i++) {
      let dataString = data[i].string
      let dataProp = data[i].prop
      this.versionSearchString = data[i].versionSearch || data[i].identity
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1)
          return data[i].identity
      } else if (dataProp)
        return data[i].identity
    }
  }

  searchVersion(dataString) {
    if (!dataString) {
      return
    }
    let index = dataString.indexOf(this.versionSearchString)
    if (index == -1) {
      return
    }
    return parseFloat(dataString.substring(index +
        this.versionSearchString.length + 1))
  }
}

module.exports = BrowserDetector
