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

import Constants from './Constants'
import isEqual from 'lodash/isEqual'
import LocalStorageManager from './LocalStorageManager'

export default class VarCache {
  static diffs = undefined
  static variables = undefined
  static variants = []
  static hasReceivedDiffs = false
  static merged = undefined
  static onUpdate = undefined
  static token = ''
  static actionMetadata = {}

  static applyDiffs(diffs, variants, actionMetadata) {
    VarCache.diffs = diffs
    VarCache.variants = variants
    VarCache.actionMetadata = actionMetadata
    VarCache.hasReceivedDiffs = true
    VarCache.merged = VarCache.mergeHelper(VarCache.variables, diffs)
    VarCache.saveDiffs()
    if (onUpdate) {
      onUpdate()
    }
  }

  static loadDiffs() {
    try {
      Leanplum.applyDiffs(
          JSON.parse(LocalStorageManager.getFromLocalStorage(
              Constants.DEFAULT_KEYS.VARIABLES) || null),
          JSON.parse(LocalStorageManager.getFromLocalStorage(
              Constants.DEFAULT_KEYS.VARIANTS) || null),
          JSON.parse(LocalStorageManager.getFromLocalStorage(
              Constants.DEFAULT_KEYS.ACTION_METADATA) || null))
      VarCache.token = LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.TOKEN)
    } catch (e) {
      console.log(`Leanplum: Invalid diffs: ${e}`)
    }
  }

  static saveDiffs() {
    LocalStorageManager.saveToLocalStorage(
        Constants.DEFAULT_KEYS.VARIABLES, JSON.stringify(VarCache.diffs || {}))
    LocalStorageManager.saveToLocalStorage(
        Constants.DEFAULT_KEYS.VARIANTS, JSON.stringify(_variants || [])
    )
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.ACTION_METADATA,
        JSON.stringify(_actionMetadata || {}))
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.TOKEN, _token)
  }

  static setVariables(variables) {
    _variables = variables
  }

  static getVariables() {
    return _merged !== undefined ? _merged : _variables
  }

  static sendVariables() {
    let body = {}
    body[Constants.PARAMS.VARIABLES] = Leanplum._variables
    Leanplum._request(Constants.METHODS.SET_VARS,
        new ArgsBuilder().body(JSON.stringify(body)), {
          sendNow: true
        })
  }

  static mergeHelper(vars, diff) {
    if (typeof diff === 'number' || typeof diff === 'boolean' || typeof diff === 'string') {
      return diff
    }
    if (diff === null || diff === undefined) {
      return vars
    }

    let objIterator = function(obj) {
      return function(f) {
        if (obj instanceof Array) {
          for (let i = 0; i < obj.length; i++) {
            f(obj[i])
          }
        } else {
          for (let attr in obj) {
            // This seems to be best practice: https://github.com/eslint/eslint/issues/7071
            // eslint-disable-next-line prefer-reflect
            if ({}.hasOwnProperty.call(obj, attr)) {
              f(attr)
            }
          }
        }
      }
    }
    let varsIterator = objIterator(vars)
    let diffIterator = objIterator(diff)

    // Infer that the diffs is an array if the vars value doesn't exist to tell us the type.
    let isArray = false
    if (vars === null) {
      if (!(diff instanceof Array)) {
        isArray = null
        for (let attribute in diff) {
          if (!diff.hasOwnProperty(attribute)) {
            continue
          }
          if (isArray === null) {
            isArray = true
          }
          if (!(typeof attribute === 'string')) {
            isArray = false
            break
          }
          if (attribute.length < 3 || attribute.charAt(0) !== '[' ||
              attribute.charAt(attribute.length - 1) !== ']') {
            isArray = false
            break
          }
          let varSubscript = attribute.substring(1, attribute.length - 1)
          if (!parseInt(varSubscript).toString() === varSubscript) {
            isArray = false
            break
          }
        }
      }
    }

    // Merge arrays.
    if (vars instanceof Array || isArray) {
      let merged = []
      varsIterator(function(attr) {
        merged.push(attr)
      })
      diffIterator(function(varSubscript) {
        let subscript =
            parseInt(varSubscript.substring(1, varSubscript.length - 1))
        let diffValue = diff[varSubscript]
        while (subscript >= merged.length) {
          merged.push(null)
        }
        merged[subscript] = Leanplum._mergeHelper(merged[subscript], diffValue)
      })
      return merged
    }

    // Merge dictionaries.
    let merged = {}
    varsIterator(function(attr) {
      if (diff[attr] === null || diff[attr] === undefined) {
        merged[attr] = vars[attr]
      }
    })
    diffIterator(function(attr) {
      merged[attr] = Leanplum._mergeHelper(vars !== null ? vars[attr] : null,
          diff[attr])
    })
    return merged
  }
}
