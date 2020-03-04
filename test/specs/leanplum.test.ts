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
import sinon from 'sinon'

import {
  startResponse,
  successResponse,
  forceContentUpdateResponse
} from './responses'

(global as any).WebSocket = undefined

// Test data
const APP_ID = 'app_BWTRIgOs0OoevDfSsBtabRiGffu5wOFU3mkxIxA7NBs'
const KEY_DEV = 'dev_Bx8i3Bbz1OJBTBAu63NIifr3UwWqUBU5OhHtywo58RY'
const KEY_PROD = 'prod_A1c7DfHO6XTo2BRwzhkkXKFJ6oaPtoMnRA9xpPSlx74'

const userId = (Math.random() * 100000000).toFixed(0)
const userAttributes = {
  gender: 'female',
  age: 27
}

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
let xhr
function interceptRequest(callback) {
  xhr = sinon.useFakeXMLHttpRequest()
  xhr.onCreate = function(req) {
    // Wait for request to populate correctly.
    setTimeout(function() {
      callback(req)
    }, 0)
  }
}


const testModes = {
  PROD: 0,
  DEV: 1
}

let Leanplum;

const start = (done) => {
  interceptRequest((request) => {
    expect(request).not.toBeNull()
    request.respond(200, {
      'Content-Type': 'application/json'
    }, JSON.stringify(startResponse))
  })
  Leanplum.setRequestBatching(false)
  Leanplum.start(userId, userAttributes, (success) => {
    expect(success).toBe(true)
    done && done(success ? null : success)
  })
}

function setAppId(mode) {
  if (mode === testModes.DEV) {
    Leanplum.setAppIdForDevelopmentMode(APP_ID, KEY_PROD)
  } else {
    Leanplum.setAppIdForProductionMode(APP_ID, KEY_DEV)
  }
}

Object.keys(testModes).forEach((mode) => {
  describe(mode + ' mode:', () => {
    const LEANPLUM_PATH = '../../dist/leanplum.js'

    beforeEach(() => {
      Leanplum = require(LEANPLUM_PATH)

      setAppId(testModes[mode])
    })

    afterEach(() => {
      if (xhr) {
        xhr.restore()
        xhr = null
      }
      Leanplum.__destroy()
      delete require.cache[require.resolve(LEANPLUM_PATH)]
      Leanplum = null
      localStorage.clear()
    })

    describe('Test start methods.', () => {

      it('start', (done) => {
        interceptRequest((request) => {
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(startResponse))
        })
        Leanplum.start(userId, userAttributes, (success) => {
          expect(success).toBe(true)
          done()
        })
      })

      it('startFromCache', (done) => {
        Leanplum.startFromCache(userId, userAttributes, (success) => {
          expect(success).toBe(true)
          done()
        })
      })

      it('stop', (done) => {
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          expect(getAction(request)).toBe('stop')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.stop()
      })
    })

    describe('Test action methods.', () => {
      beforeEach(start)

      it('pauseSession', (done) => {
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          expect(getAction(request)).toBe('pauseSession')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.pauseSession()
      })

      it('resumeSession', (done) => {
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          expect(getAction(request)).toBe('resumeSession')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.resumeSession()
      })

      it('pauseState', (done) => {
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          expect(getAction(request)).toBe('pauseState')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.pauseState()
      })

      it('resumeState', (done) => {
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          expect(getAction(request)).toBe('resumeState')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.resumeState()
      })

      it('setUserAttributes', (done) => {
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          expect(getAction(request)).toBe('setUserAttributes')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.setUserAttributes(userId, userAttributes)
      })

      it('track', (done) => {
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          expect(getAction(request)).toBe('track')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.track('Page View')
      })

      it('advanceTo', (done) => {
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          expect(getAction(request)).toBe('advance')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.advanceTo('Shopping Cart')
      })

      it('verifyDefaultApiPath', (done) => {
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          expect(request.url).toContain('https://www.leanplum.com/api')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.track('Page View')
      })

      it('setApiPath', (done) => {
        const newApiPath = 'http://leanplum-staging.appspot.com/api'
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          expect(request.url).toContain(newApiPath)
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })
        Leanplum.setApiPath(newApiPath)
        Leanplum.track('Page View')
      })

      it('setUserAttributes', (done) => {
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          let json = JSON.parse(request.requestBody).data[0]
          expect(getAction(request)).toBe('setUserAttributes')
          expect(json.newUserId).toBe('u1')
          expect(JSON.parse(json.userAttributes).gender).toBe(
              userAttributes.gender)
          expect(JSON.parse(json.userAttributes).age).toBe(
              userAttributes.age)
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
          done()
        })

        Leanplum.setUserAttributes('u1', userAttributes)
      })

      it('setRequestBatching', (done) => {
        Leanplum.setRequestBatching(true, 0.1)
        let count = 0
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          count++
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
        })

        Leanplum.track('Page View')
        Leanplum.advanceTo('Shopping Cart')

        setTimeout(function() {
          expect(count).toBe(testModes[mode] === testModes.DEV ? 2 : 1)
          done()
        }, 100)
      })
    })

    describe('Test variable changed callback after start.', () => {
      it('setVariable', (done) => {
        interceptRequest((request) => {
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(startResponse))
        })
        const variables = userAttributes
        Leanplum.setVariables(variables)
        Leanplum.addVariablesChangedHandler(() => {
          expect(Leanplum.getVariables().gender).toBe(variables.gender)
          expect(Leanplum.getVariables().age).toBe(variables.age)
        })
        Leanplum.start(userId, {}, (success) => {
          expect(success).toBe(true)
          return done(success ? null : success)
        })
      })
    })

    describe('Test addStartResponseHandler callback after start.', () => {
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
        expect(!Leanplum.isWebPushSupported()).toBeTruthy()
        done()
      })

      it('test isWebPushSubscribed', async () => {
        let subscribed
        try {
          subscribed = await Leanplum.isWebPushSubscribed()
        } catch (e) {
          console.log(e)
        }
        expect(!subscribed).toBeTruthy()
      })

      it('test isWebPushSupported', async () => {
        try {
          await Leanplum.registerForWebPush()
        } catch (e) {
          expect(e).toBeTruthy()
        }
      })
    })

    describe('Test forceContentUpdate.', () => {
      it('forceContentUpdate', (done) => {
        interceptRequest((request) => {
          expect(request).not.toBeNull()
          expect(getAction(request)).toBe('getVars')
          request.respond(200, {
            'Content-Type': 'application/json'
          }, JSON.stringify(successResponse))
        })
        Leanplum.forceContentUpdate(() => done())
      })
    })

    describe('Test variable changed callback after forceContentUpdate.', () => {
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
            expect(Leanplum.getVariables().gender).toBe(userAttributes.gender)
            expect(Leanplum.getVariables().age).toBe(userAttributes.age)
          } else {
            expect(Leanplum.getVariables().gender).toBe(vars.gender)
            expect(Leanplum.getVariables().age).toBe(vars.age)
            return done()
          }
        })

        Leanplum.forceContentUpdate();
      })
    })

    describe('Test callback in forceContentUpdate.', () => {
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
            expect(success).toBe(true)
            expect(Leanplum.getVariables().gender).toBe(vars.gender)
            expect(Leanplum.getVariables().age).toBe(vars.age)
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
            expect(success).toBe(false)
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
            expect(success).toBe(false)
            return done()
        });
      })
    })
  })
})
