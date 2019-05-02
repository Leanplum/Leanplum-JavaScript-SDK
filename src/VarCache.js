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
import InternalState from './InternalState'
import ArgsBuilder from './ArgsBuilder'
import LocalStorageManager from './LocalStorageManager'
import LeanplumRequest from './LeanplumRequest'

export default class VarCache {
  static diffs = undefined
  static variables = null
  static variants = []
  static variantDebugInfo = {}
  static merged = undefined
  static onUpdate = undefined
  static token = ''
  static actionMetadata = {}
  static messagesView = undefined
  static messagesViewPerSession = []

  static applyDiffs(diffs, variants, actionMetadata) {
    VarCache.diffs = diffs
    VarCache.variants = variants
    VarCache.actionMetadata = actionMetadata
    InternalState.hasReceivedDiffs = true
    VarCache.merged = VarCache.mergeHelper(VarCache.variables, diffs)
    VarCache.saveDiffs()
    if (VarCache.onUpdate) {
      VarCache.onUpdate()
    }
  }

  static loadDiffs() {
    try {
      VarCache.applyDiffs(
          JSON.parse(LocalStorageManager.getFromLocalStorage(
              Constants.DEFAULT_KEYS.VARIABLES) || null),
          JSON.parse(LocalStorageManager.getFromLocalStorage(
              Constants.DEFAULT_KEYS.VARIANTS) || null),
          JSON.parse(LocalStorageManager.getFromLocalStorage(
              Constants.DEFAULT_KEYS.ACTION_METADATA) || null))
      VarCache.token = LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.TOKEN)
      VarCache.variantDebugInfo = LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.VARIANT_DEBUG_INFO)
    } catch (e) {
      console.log(`Leanplum: Invalid diffs: ${e}`)
    }
  }

  static saveDiffs() {
    LocalStorageManager.saveToLocalStorage(
        Constants.DEFAULT_KEYS.VARIABLES, JSON.stringify(VarCache.diffs || {}))
    LocalStorageManager.saveToLocalStorage(
        Constants.DEFAULT_KEYS.VARIANTS, JSON.stringify(VarCache.variants || [])
    )
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.ACTION_METADATA,
        JSON.stringify(VarCache.actionMetadata || {}))
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.VARIANT_DEBUG_INFO,
        JSON.stringify(VarCache.variantDebugInfo || {}))
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.TOKEN, VarCache.token)
  }

  /**
   * record view message in local storage and  in memory (aka session)
   * @param messageId
   */
  static addMessageView(messageId){
    const messageView = VarCache.getMessagesView()[messageId]
    if (messageView === undefined){
      VarCache.messagesView[messageId] = []
    }
    const messageViewPerSession =VarCache.messagesViewPerSession[messageId] || []

    const now = Date.now()
    messageViewPerSession.push({t:now})
    VarCache.messagesView[messageId].push({t:now})
    LocalStorageManager.saveToLocalStorage(Constants.DEFAULT_KEYS.MESSAGE_VIEW,JSON.stringify(
      VarCache.messagesView || {}))
  }



  /**
   * get an object containing all the messageViews with messageId as key, per session or from start
   * @param session {Boolean | undefined}
   * @returns {Object}
   */
  static getMessagesView(session){
    if(session){
      return VarCache.messagesViewPerSession
    }
    if(VarCache.messagesView === undefined){
      VarCache.messagesView = JSON.parse(
        LocalStorageManager.getFromLocalStorage(Constants.DEFAULT_KEYS.MESSAGE_VIEW) || '{}')
    }
    return VarCache.messagesView
  }

  /**
   * get all view for a given message either form the start or per session
   * @param {string} messageId
   * @param {boolean | undefined} session
   * @returns {*|Array}
   */
  static getMessageView(messageId, session){
    return VarCache.getMessagesView(session)[messageId] || []
  }
  static setVariables(variables) {
    VarCache.variables = variables
  }

  static getVariables() {
    return VarCache.merged !== undefined ? VarCache.merged : VarCache.variables
  }

  static getVariantDebugInfo() {
    return VarCache.variantDebugInfo
  }

  static sendVariables() {
    let body = {}
    body[Constants.PARAMS.VARIABLES] = VarCache.variables
    LeanplumRequest.request(Constants.METHODS.SET_VARS,
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
        merged[subscript] = VarCache.mergeHelper(merged[subscript], diffValue)
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
      merged[attr] = VarCache.mergeHelper(vars !== null ? vars[attr] : null,
          diff[attr])
    })
    return merged
  }

  static clearUserContent() {
    VarCache.diffs = undefined
    VarCache.variables = null
    VarCache.variants = []
    VarCache.variantDebugInfo = {}
    VarCache.merged = undefined
  }

}
