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
const sinon = require('sinon')

const APP_ID = 'app_BWTRIgOs0OoevDfSsBtabRiGffu5wOFU3mkxIxA7NBs'
const KEY_DEV = 'dev_Bx8i3Bbz1OJBTBAu63NIifr3UwWqUBU5OhHtywo58RY'
const KEY_PROD = 'prod_A1c7DfHO6XTo2BRwzhkkXKFJ6oaPtoMnRA9xpPSlx74'

const startResponse = require('./responses/start.json')
const successResponse = require('./responses/success.json')
const LEANPLUM_PATH = '../../dist/leanplum.js'

global.WebSocket = undefined

// Mocking Requests
let xhr

// Test data
const userId = (Math.random() * 100000000).toFixed(0)
const userAttributes = {
  gender: 'female',
  age: 27
}

let Leanplum = require(LEANPLUM_PATH)

/**
 * Extracts the leanplum action type from a request.
 * @param  {Object} request The request payload.
 * @return {String} The action name.
 */
function getAction(request) {
  let requestBody = JSON.parse(request.requestBody)
  let action = requestBody.data[0].action
  return action
}

/**
 * Intercept the next request.
 * @param  {Function} callback The callback to be called on interception.
 */
function interceptRequest(callback) {
  xhr = sinon.useFakeXMLHttpRequest()
  xhr.onCreate = function (req) {
    // Wait for request to populate correctly.
    setTimeout(function () {
      callback(req)
    }, 0)
  }
}

/**
 * Sets the app id based on the provided mode.
 * @param {String} mode The Leanplum mode.
 */
function setAppId(mode) {
  if (mode === testModes.DEV) {
    Leanplum.setAppIdForDevelopmentMode(APP_ID, KEY_PROD)
  } else {
    Leanplum.setAppIdForProductionMode(APP_ID, KEY_DEV)
  }
}

const testModes = {
  PROD: 0,
  DEV: 1
}

describe('Test VarCache', () => {
  before(() => {
  })

  after(() => {
    // xhr.restore()
  })

  beforeEach(() => {
    Leanplum = require(LEANPLUM_PATH)
    setAppId(testModes['PROD'])
  })

  afterEach(() => {
    requests = []
    assert.equal(requests.length, 0)
    delete require.cache[require.resolve(LEANPLUM_PATH)]
  })

  it('test simple', (done) => {
    return done()
  })
})
