/*
 *  Copyright 2020 Leanplum Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at:
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

interface StringMatchingEntry {
  string: string;
  subString: string;
  identity: string;
  versionSearch?: string;
  prop?: any;
}

interface PropMatchingEntry {
  prop: any;
  identity: string;
  versionSearch?: string;
}

// Browser detection. Source: http://www.quirksmode.org/js/detect.html
/**
 * Helper class to detect which browser client is using.
 */
export default class BrowserDetector {
  private versionSearchString: string

  public browser: string
  public version: number | string
  public OS: string

  /**
   * Initializes the object with current browser settings.
   */
  constructor(wnd: Window) {
    this.browser = this.searchString(this.getBrowserData(wnd)) || 'Unknown Browser'
    this.version = (
      this.searchVersion(navigator.userAgent) ||
      this.searchVersion(navigator.appVersion) ||
      'Unknown Version'
    )
    this.OS = this.searchString(this.getOSData(wnd)) || 'Unknown OS'
  }

  /**
   * Matches the client's system to the predefined system list.
   * @param {object} data The data object to scan.
   * @return {string} The found identity string.
   */
  private searchString(data) {
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
  private searchVersion(dataString) {
    if (!dataString) {
      return -1
    }
    let index = dataString.indexOf(this.versionSearchString)
    if (index === -1) {
      return -1
    }
    return parseFloat(dataString.substring(index + this.versionSearchString.length + 1))
  }

  private getBrowserData(wnd: Window): Array<StringMatchingEntry | PropMatchingEntry> {
    return [
      {
        string: wnd.navigator.userAgent,
        subString: 'Chrome',
        identity: 'Chrome'
      },
      {
        string: wnd.navigator.userAgent,
        subString: 'OmniWeb',
        identity: 'OmniWeb',
        versionSearch: 'OmniWeb/'
      },
      {
        string: wnd.navigator.vendor,
        subString: 'Apple',
        identity: 'Safari',
        versionSearch: 'Version'
      },
      {
        prop: (wnd as any).opera,
        identity: 'Opera',
        versionSearch: 'Version'
      },
      {
        string: wnd.navigator.vendor,
        subString: 'iCab',
        identity: 'iCab'
      },
      {
        string: wnd.navigator.vendor,
        subString: 'KDE',
        identity: 'Konqueror'
      },
      {
        string: wnd.navigator.userAgent,
        subString: 'Firefox',
        identity: 'Firefox'
      },
      {
        string: wnd.navigator.vendor,
        subString: 'Camino',
        identity: 'Camino'
      },
      { // for newer Netscape (6+)
        string: wnd.navigator.userAgent,
        subString: 'Netscape',
        identity: 'Netscape'
      },
      {
        string: wnd.navigator.userAgent,
        subString: 'MSIE',
        identity: 'Explorer',
        versionSearch: 'MSIE'
      },
      {
        string: wnd.navigator.userAgent,
        subString: 'Gecko',
        identity: 'Mozilla',
        versionSearch: 'rv'
      },
      { // for older Netscape (4-)
        string: wnd.navigator.userAgent,
        subString: 'Mozilla',
        identity: 'Netscape',
        versionSearch: 'Mozilla'
      }
    ]
  }

  private getOSData(wnd: Window): Array<StringMatchingEntry> {
    return [
      {
        string: wnd.navigator.platform,
        subString: 'Win',
        identity: 'Windows'
      },
      {
        string: wnd.navigator.platform,
        subString: 'Mac',
        identity: 'Mac OS'
      },
      {
        string: wnd.navigator.userAgent,
        subString: 'iPhone',
        identity: 'iOS'
      },
      {
        string: wnd.navigator.userAgent,
        subString: 'Android',
        identity: 'Android'
      },
      {
        string: wnd.navigator.platform,
        subString: 'Linux',
        identity: 'Linux'
      }
    ]
  }
}
