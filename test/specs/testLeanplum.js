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
const forceContentUpdateResponse = require('./responses/forceContentUpdate.json')
const messages = require('./responses/messages.json')
const badLimitMessages = require('./responses/badLimitsMessages')
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
  xhr.onCreate = function(req) {
    // Wait for request to populate correctly.
    setTimeout(function() {
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

Object.keys(testModes).forEach((mode) => {
  describe(mode + ' mode:', () => {
    describe('Test start methods.', () => {
      before(() => {
      })

      after(() => {
        xhr.restore()
      })

      beforeEach(() => {
        Leanplum = require(LEANPLUM_PATH)
        setAppId(testModes[mode])
      })

      afterEach(() => {
        requests = []
        assert.equal(requests.length, 0)
        delete require.cache[require.resolve(LEANPLUM_PATH)]
      })

      it('start', (done) => {
        interceptRequest((request) => {
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(startResponse))
        })
        Leanplum.start(userId, userAttributes, (success) => {
          assert.equal(success, true)
          return done(success ? null : success)
        })
      })

      it('startFromCache', (done) => {
        Leanplum.startFromCache(userId, userAttributes, (success) => {
          assert.equal(success, true)
          return done(success ? null : success)
        })
      })

      it('stop', () => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          assert.equal(getAction(request), 'stop')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
        })
        Leanplum.stop()
      })
    })

    describe('Test action methods.', () => {
      before((done) => {
        Leanplum = require(LEANPLUM_PATH)
        interceptRequest((request) => {
          assert.isNotNull(request)
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(startResponse))
        })
        setAppId(testModes[mode])
        Leanplum.setRequestBatching(false)
        Leanplum.start(userId, userAttributes, (success) => {
          assert.equal(success, true)
          requests = []
          return done(success ? null : success)
        })
      })

      after(() => {
        xhr.restore()
        delete require.cache[require.resolve(LEANPLUM_PATH)]
      })

      beforeEach(() => {
      })

      afterEach(() => {
        requests = []
      })

      it('pauseSession', (done) => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          assert.equal(getAction(request), 'pauseSession')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.pauseSession()
      })

      it('resumeSession', (done) => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          assert.equal(getAction(request), 'resumeSession')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.resumeSession()
      })

      it('pauseState', (done) => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          assert.equal(getAction(request), 'pauseState')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.pauseState()
      })

      it('resumeState', (done) => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          assert.equal(getAction(request), 'resumeState')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.resumeState()
      })

      it('setUserAttributes', (done) => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          assert.equal(getAction(request), 'setUserAttributes')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.setUserAttributes(userId, userAttributes)
      })

      it('trackMessage', (done) => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          let json = JSON.parse(request.requestBody).data[0]
          assert.equal(getAction(request), 'track')
          assert.equal(json.messageId, '123')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.trackMessage('Accept', '123')
      })

      it('track', (done) => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          assert.equal(getAction(request), 'track')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.track()
      })

      it('advanceTo', (done) => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          assert.equal(getAction(request), 'advance')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.advanceTo()
      })

      it('verifyDefaultApiPath', (done) => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          assert.include(request.url, 'https://www.leanplum.com/api')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.track()
      })

      it('setApiPath', (done) => {
        const newApiPath = 'http://leanplum-staging.appspot.com/api'
        interceptRequest((request) => {
          assert.isNotNull(request)
          assert.include(request.url, newApiPath)
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.setApiPath(newApiPath)
        Leanplum.track()
      })

      it('setUserAttributes', (done) => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          let json = JSON.parse(request.requestBody).data[0]
          assert.equal(getAction(request), 'setUserAttributes')
          assert.equal(json.newUserId, 'u1')
          assert.equal(JSON.parse(json.userAttributes).gender,
              userAttributes.gender)
          assert.equal(JSON.parse(json.userAttributes).age,
              userAttributes.age)
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.setUserAttributes('u1', userAttributes)
      })

      it('getFileUrl', () => {
        const url = Leanplum.getFileUrl('testImage.png')
        assert.equal(url.includes('action=downloadFile'), true)
        assert.equal(url.includes('filename=testImage.png'), true)
      })

      it('setRequestBatching', (done) => {
        Leanplum.setRequestBatching(true, 5)
        let count = 0
        interceptRequest((request) => {
          assert.isNotNull(request)
          // console.log(request);
          count++
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
        })

        setTimeout(function() {
          assert.equal(count, testModes[mode] === testModes.DEV ? 2 : 1)
          done()
        }, 10)

        Leanplum.track()
        Leanplum.advanceTo()
      })
    })

    describe('Test variable changed callback after start.', () => {
      before(() => {
      })

      after(() => {
        xhr.restore()
      })

      beforeEach(() => {
        Leanplum = require(LEANPLUM_PATH)
        setAppId(testModes[mode])
      })

      afterEach(() => {
        requests = []
        assert.equal(requests.length, 0)
        delete require.cache[require.resolve(LEANPLUM_PATH)]
      })

      it('setVariable', (done) => {
        interceptRequest((request) => {
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(startResponse))
        })
        Leanplum.setVariables(userAttributes)
        Leanplum.addVariablesChangedHandler(() => {
          assert.equal(Leanplum.getVariables().gender, userAttributes.gender)
          assert.equal(Leanplum.getVariables().age, userAttributes.age)
        })
        Leanplum.start(userId, userAttributes, (success) => {
          assert.equal(success, true)
          return done(success ? null : success)
        })
      })
    })

    describe('Test addStartResponseHandler callback after start.', () => {
      before(() => {
      })

      after(() => {
        xhr.restore()
      })

      beforeEach(() => {
        Leanplum = require(LEANPLUM_PATH)
        setAppId(testModes[mode])
      })

      afterEach(() => {
        requests = []
        assert.equal(requests.length, 0)
        delete require.cache[require.resolve(LEANPLUM_PATH)]
      })

      it('test addStartResponseHandler', (done) => {
        interceptRequest((request) => {
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(startResponse))
        })
        Leanplum.addStartResponseHandler(() => {
          return done()
        })
        Leanplum.start()
      })
    })

    describe('Web push.', () => {
      it('test isWebPushSupported', (done) => {
        assert(!Leanplum.isWebPushSupported())
        done()
      })

      it('test isWebPushSubscribed', async () => {
        let subscribed
        try {
          subscribed = await Leanplum.isWebPushSubscribed()
        } catch (e) {
          console.log(e)
        }
        assert(!subscribed)
      })

      it('test isWebPushSupported', async () => {
        try {
          await Leanplum.registerForWebPush()
        } catch (e) {
          assert(e)
        }
      })
    })

    describe('Test forceContentUpdate.', () => {
      before(() => {
      })

      after(() => {
        xhr.restore()
      })

      beforeEach(() => {
        Leanplum = require(LEANPLUM_PATH)
        setAppId(testModes[mode])
      })

      afterEach(() => {
        requests = []
        assert.equal(requests.length, 0)
        delete require.cache[require.resolve(LEANPLUM_PATH)]
      })

      it('forceContentUpdate', (done) => {
        interceptRequest((request) => {
          assert.isNotNull(request)
          assert.equal(getAction(request), 'getVars')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.forceContentUpdate()
      })
    })

    describe('Test variable changed callback after forceContentUpdate.', () => {
      before(() => {
      })

      after(() => {
        xhr.restore()
      })

      beforeEach(() => {
        Leanplum = require(LEANPLUM_PATH)
        setAppId(testModes[mode])
      })

      afterEach(() => {
        requests = []
        assert.equal(requests.length, 0)
        delete require.cache[require.resolve(LEANPLUM_PATH)]
      })

      it('test setVariable forceContentUpdate', (done) => {
        interceptRequest((request) => {
          if (getAction(request) == 'getVars'){
            request.respond(200, {
              'Content-Type': 'application/json'
            }, JSON.stringify(forceContentUpdateResponse))
          } else {
              request.respond(200, {
                'Content-Type': 'application/json'
              }, JSON.stringify(startResponse))
            }
          })
        Leanplum.setVariables(userAttributes)
        Leanplum.start()
        var isVariablesChangedFromStart = true
        let vars = forceContentUpdateResponse.response[0].vars
        Leanplum.addVariablesChangedHandler(() => {
          if(isVariablesChangedFromStart) {
            isVariablesChangedFromStart = false;
            assert.equal(Leanplum.getVariables().gender, userAttributes.gender)
            assert.equal(Leanplum.getVariables().age, userAttributes.age)
          } else {
            assert.equal(Leanplum.getVariables().gender, vars.gender)
            assert.equal(Leanplum.getVariables().age, vars.age)
            return done()
          }

          Leanplum.forceContentUpdate();
        })
      })
    })

    describe('Test callback in forceContentUpdate.', () => {
      before(() => {
      })

      after(() => {
        xhr.restore()
      })

      beforeEach(() => {
        Leanplum = require(LEANPLUM_PATH)
        setAppId(testModes[mode])
      })

      afterEach(() => {
        requests = []
        assert.equal(requests.length, 0)
        delete require.cache[require.resolve(LEANPLUM_PATH)]
      })

      it('test callback success forceContentUpdate', (done) => {
        interceptRequest((request) => {
          if (getAction(request) == 'getVars'){
            request.respond(200, {
              'Content-Type': 'application/json'
            }, JSON.stringify(forceContentUpdateResponse))
          } else {
              request.respond(200, {
                'Content-Type': 'application/json'
              }, JSON.stringify(startResponse))
            }
          })
        Leanplum.setVariables(userAttributes)
        Leanplum.start()
        let vars = forceContentUpdateResponse.response[0].vars

        Leanplum.forceContentUpdate(function(success) {
            assert.equal(success, true)
            assert.equal(Leanplum.getVariables().gender, vars.gender)
            assert.equal(Leanplum.getVariables().age, vars.age)
            return done()
        });
      })

      it('test callback error response forceContentUpdate', (done) => {
        interceptRequest((request) => {
          if (getAction(request) == 'getVars'){
            request.respond(500, {
              'Content-Type': 'application/json'
            })
          } else {
              request.respond(200, {
                'Content-Type': 'application/json'
              }, JSON.stringify(startResponse))
            }
          })

        Leanplum.start()

        Leanplum.forceContentUpdate(function(success) {
            assert.equal(success, false)
            return done()
        });
      })

      it('test callback response success:false forceContentUpdate', (done) => {
        interceptRequest((request) => {
          if (getAction(request) == 'getVars'){
            request.respond(200, {
              'Content-Type': 'application/json'
            }, JSON.stringify({"response": [{"success": false}]}))
          } else {
              request.respond(200, {
                'Content-Type': 'application/json'
              }, JSON.stringify(startResponse))
            }
          })

        Leanplum.start()

        Leanplum.forceContentUpdate(function(success) {
            assert.equal(success, false)
            return done()
        });
      })
    })
    describe('Test filtering messages @filterMessages', () => {
      it('should return an empty  array if no event is defined', () => {
        const filteredMessages = Leanplum.getFilteredResults(messages)
        expect(filteredMessages).to.be.an('array')
        expect(filteredMessages).to.be.empty
      })
      it('should return an empty array if messages is empty', () =>{
        const filteredMessages = Leanplum.getFilteredResults([])
        expect(filteredMessages).to.be.an('array')
        expect(filteredMessages).to.be.empty
      })
      it('should return an empty array if messages is null', () =>{
        const filteredMessages = Leanplum.getFilteredResults(null)
        expect(filteredMessages).to.be.an('array')
        expect(filteredMessages).to.be.empty
      })
      it('should return an array of messages if event is defined and match a message trigger', () => {
        const filteredMessages = Leanplum.getFilteredResults(messages,'start')
        expect(filteredMessages).to.be.an('array')
        assert.isAbove(filteredMessages.length,0)

      })
      it('should return an array of messages if event is defined and match at least one message trigger', () => {
        const filteredMessages = Leanplum.getFilteredResults(messages,['dummy','resume'])
        expect(filteredMessages).to.be.an('array')
        assert.isAbove(filteredMessages.length,0)

      })
      it('should not generate error if trigger verb is wrongly defined', () => {
        const filteredMessages = Leanplum.getFilteredResults(messages,'start','unknown')
        expect(filteredMessages).to.be.an('array')
      })
      it('should not generate error if limit verb is wrongly defined', () => {
        const filteredMessages = Leanplum.getFilteredResults(badLimitMessages,'start')
        expect(filteredMessages).to.be.an('array')
      })
    })
  })
})
