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

import clevertap from 'clevertap-web-sdk'
import LeanplumInternal from '../../src/LeanplumInternal'
import { startResponse, migrationResponses } from '../data/responses'
import { windowMock } from '../mocks/external'
import { lpRequestMock, mockNextResponse, varCacheMock } from '../mocks/internal'

jest.mock('../../src/LeanplumRequest', () => jest.fn().mockImplementation((events) => {
  Object.assign(lpRequestMock, { events })
  return lpRequestMock
}))
jest.mock('../../src/VarCache', () => jest.fn().mockImplementation(() => varCacheMock))

const subscription: PushSubscription = {
  getKey: jest.fn(() => new ArrayBuffer(0)),
  endpoint: '',
  expirationTime: Date.now() + 10000,
  options: {
    applicationServerKey: new ArrayBuffer(0),
    userVisibleOnly: true
  },
  toJSON: () => ({ endpoint: '' }),
  unsubscribe: jest.fn()
}
const pushManager: PushManager = {
  getSubscription: jest.fn(() => Promise.resolve(subscription)),
  subscribe: jest.fn(() => Promise.resolve(subscription)),
  permissionState: jest.fn()
}
const sw: Partial<ServiceWorkerRegistration> = {
  pushManager
}

Object.defineProperty(window.navigator, 'serviceWorker', {
  writable: false,
  value: {
    getRegistration: jest.fn().mockReturnValue(sw),
    register: jest.fn().mockReturnValue(sw),
    pushManager: jest.fn().mockReturnValue(pushManager)
  }
});

Object.defineProperty(window, 'PushManager', {
  writable: false,
  value: pushManager
});

describe('Integration Tests', () => {
  let lp: LeanplumInternal

  beforeEach(() => {
    localStorage.clear()
    jest.spyOn(clevertap.notifications, 'push');
    lp = new LeanplumInternal(windowMock)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('calls variable changed callback after start', (done) => {
    const userId = '123'
    const variables = {
      gender: 'female',
      age: 27
    }

    mockNextResponse(startResponse)
    mockNextResponse(migrationResponses.LP)

    lp.setVariables(variables)
    lp.addVariablesChangedHandler(() => {
      expect(lp.getVariables().gender).toBe(variables.gender)
      expect(lp.getVariables().age).toBe(variables.age)
    })
    lp.start(userId, {}, (success) => {
      expect(success).toBe(true)
      return done(success ? null : success)
    })
  })

  it('pushes notification token when registering with LP', async (done) => {
    mockNextResponse(migrationResponses.DUPLICATE)
    mockNextResponse(startResponse)

    lp.start(async () => {
      await lp.registerForWebPush('/sw.test.js')

      // expect ct push to be registered, too
      expect(clevertap.notifications.push).toHaveBeenCalled()

      done()
    })

  })

  it('pushes previously registered notification token', (done) => {
    mockNextResponse(migrationResponses.LP)
    mockNextResponse(startResponse)

    lp.start(async function f() {
      await lp.registerForWebPush('/sw.test.js')

      lp.removeStartResponseHandler(f)

      // no sync while in lp mode
      expect(clevertap.notifications.push).toHaveBeenCalledTimes(0)

      // server config changes
      mockNextResponse({
        response: [{
          success: true,
        }],
        migrateState: {
          sha256: 'changed-sha' // triggers config refresh
        }
      })
      mockNextResponse(migrationResponses.DUPLICATE)
      mockNextResponse(startResponse)
      lp.track('some-event')
      lpRequestMock.events.emit('migrateStateReceived', 'changed-sha');


      // expect ct push to register with next start
      lp.start()

      setTimeout(() => {
        expect(clevertap.notifications.push).toHaveBeenCalledTimes(1)

        done()
      }, 1000)
    })
  })
})
