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

import ArgsBuilder from './ArgsBuilder'
import Constants from './Constants'
import LocalStorageManager from './LocalStorageManager'
import { CreateRequestFunction } from './types/internal'

/* eslint-disable @typescript-eslint/no-explicit-any */

export default class VarCache {
  private actionMetadata: Record<string, any> = {}
  private hasReceivedDiffs = false
  private merged = undefined
  private variables: Record<string, any> = null
  private variablesChangedHandlers: Function[] = []
  private variantDebugInfo: Record<string, any> = {}

  public diffs = undefined
  public onUpdate?: () => void
  public token = ''
  public variants = []

  public constructor(
    private createRequest: CreateRequestFunction
  ) {}

  public applyDiffs(diffs, variants, actionMetadata): void {
    this.diffs = diffs
    this.variants = variants
    this.actionMetadata = actionMetadata
    this.hasReceivedDiffs = true
    this.merged = mergeHelper(this.variables, diffs)
    this.saveDiffs()
    if (this.onUpdate) {
      this.onUpdate()
    }
  }

  public loadDiffs(): void {
    try {
      this.applyDiffs(
        JSON.parse(this.loadLocal(Constants.DEFAULT_KEYS.VARIABLES) || null),
        JSON.parse(this.loadLocal(Constants.DEFAULT_KEYS.VARIANTS) || null),
        JSON.parse(this.loadLocal(Constants.DEFAULT_KEYS.ACTION_METADATA) || null)
      )
      this.token = this.loadLocal(Constants.DEFAULT_KEYS.TOKEN)
      this.variantDebugInfo = this.loadLocal(Constants.DEFAULT_KEYS.VARIANT_DEBUG_INFO)
    } catch (e) {
      console.log(`Leanplum: Invalid diffs: ${e}`)
    }
  }

  public saveDiffs(): void {
    this.saveLocal(Constants.DEFAULT_KEYS.VARIABLES, JSON.stringify(this.diffs || {}))
    this.saveLocal(Constants.DEFAULT_KEYS.VARIANTS, JSON.stringify(this.variants || []))
    this.saveLocal(Constants.DEFAULT_KEYS.ACTION_METADATA, JSON.stringify(this.actionMetadata || {}))
    this.saveLocal(Constants.DEFAULT_KEYS.VARIANT_DEBUG_INFO, JSON.stringify(this.variantDebugInfo || {}))
    this.saveLocal(Constants.DEFAULT_KEYS.TOKEN, this.token)
  }

  public getVariable(...args: (string | number)[]): any {
    let current = this.getVariables()
    if (current) {
      for (let i = 0; i < args.length; i++) {
        current = current[args[i]]
      }
    }
    return current
  }

  public getVariables(): Record<string, any> {
    return this.merged !== undefined ? this.merged : this.variables
  }

  public setVariables(variables: Record<string, any>): void {
    this.variables = variables
  }

  public addVariablesChangedHandler(handler): void {
    this.variablesChangedHandlers.push(handler)
    if (this.hasReceivedDiffs) {
      handler()
    }
  }

  public removeVariablesChangedHandler(handler): void {
    const idx = this.variablesChangedHandlers.indexOf(handler)
    if (idx >= 0) {
      this.variablesChangedHandlers.splice(idx, 1)
    }
  }

  public triggerVariablesChangedHandlers(): void {
    for (let i = 0; i < this.variablesChangedHandlers.length; i++) {
      this.variablesChangedHandlers[i]()
    }
  }

  public getVariantDebugInfo(): any {
    return this.variantDebugInfo
  }

  public setVariantDebugInfo(value: Record<string, any>): void {
    this.variantDebugInfo = value
  }

  public sendVariables(): void {
    const body = { [Constants.PARAMS.VARIABLES]: this.variables }
    const args = new ArgsBuilder().body(JSON.stringify(body)) as ArgsBuilder
    this.createRequest(Constants.METHODS.SET_VARS, args, {
      sendNow: true,
    })
  }

  public clearUserContent(): void {
    this.diffs = undefined
    this.variables = null
    this.variants = []
    this.variantDebugInfo = {}
    this.merged = undefined
  }

  private loadLocal<T>(key: string): T {
    return LocalStorageManager.getFromLocalStorage(key)
  }

  private saveLocal<T>(key: string, value: T): void {
    LocalStorageManager.saveToLocalStorage(key, value)
  }
}

function mergeHelper(vars, diff): boolean | number | string | Record<string, any> {
  if (typeof diff === 'number' || typeof diff === 'boolean' || typeof diff === 'string') {
    return diff
  }

  if (diff === null || diff === undefined) {
    return vars
  }

  const objIterator = function(obj) {
    return function iterate(f) {
      if (obj instanceof Array) {
        for (let i = 0; i < obj.length; i++) {
          f(obj[i])
        }
      } else {
        for (const attr in obj) {
          // This seems to be best practice: https://github.com/eslint/eslint/issues/7071
          // eslint-disable-next-line prefer-reflect
          if ({}.hasOwnProperty.call(obj, attr)) {
            f(attr)
          }
        }
      }
    }
  }
  const varsIterator = objIterator(vars)
  const diffIterator = objIterator(diff)

  // Infer that the diffs is an array if the vars value doesn't exist to tell us the type.
  let isArray = false
  if (vars === null) {
    if (!(diff instanceof Array)) {
      isArray = null
      for (const attribute in diff) {
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
      }
    }
  }

  // Merge arrays.
  if (vars instanceof Array || isArray) {
    const merged = []
    varsIterator(function(attr) {
      merged.push(attr)
    })
    diffIterator(function(varSubscript) {
      const subscript =
          parseInt(varSubscript.substring(1, varSubscript.length - 1))
      const diffValue = diff[varSubscript]
      while (subscript >= merged.length) {
        merged.push(null)
      }
      merged[subscript] = mergeHelper(merged[subscript], diffValue)
    })
    return merged
  }

  // Merge dictionaries.
  const merged = {}
  varsIterator(function(attr) {
    if (diff[attr] === null || diff[attr] === undefined) {
      merged[attr] = vars[attr]
    }
  })
  diffIterator(function(attr) {
    merged[attr] = mergeHelper(vars === null ? null : vars[attr] || {}, diff[attr])
  })
  return merged
}
