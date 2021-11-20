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

const storageEnabled = {
  local: true,
  session: true,
}
const alternateStorage = {
  local: {},
  session: {},
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Value = any
type StorageType = 'local' | 'session'

export default class LocalStorageManager {
  static getFromLocalStorage(key: string, type: StorageType = 'local'): Value {
    if (!storageEnabled[type]) {
      return alternateStorage[type][key]
    }

    if (type === 'local') {
      return localStorage[key]
    } else {
      return sessionStorage.getItem(key)
    }
  }

  static saveToLocalStorage(key: string, value: Value, type: StorageType = 'local'): void {
    if (!storageEnabled[type]) {
      alternateStorage[type][key] = value
      return
    }

    try {
      if (type === 'local') {
        localStorage[key] = value
      } else {
        sessionStorage.setItem(key, value)
      }
    } catch (e) {
      storageEnabled[type] = false
      alternateStorage[type][key] = value
    }
  }

  static removeFromLocalStorage(key: string, type: StorageType = 'local'): void {
    if (!storageEnabled[type]) {
      delete alternateStorage[type][key]
      return
    }

    try {
      if (type === 'local') {
        localStorage.removeItem(key)
      } else {
        sessionStorage.removeItem(key)
      }
    } catch (e) {
      storageEnabled[type] = false
      delete alternateStorage[type][key]
    }
  }
}
