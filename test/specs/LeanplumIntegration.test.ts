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

import Constants from '../../src/Constants'
import LeanplumInternal from '../../src/LeanplumInternal'
import { startResponse } from '../data/responses'
import { windowMock } from '../mocks/external'
import { lpRequestMock, mockNextResponse, varCacheMock } from '../mocks/internal'

jest.mock('../../src/LeanplumRequest', () => jest.fn().mockImplementation(() => lpRequestMock))
jest.mock('../../src/VarCache', () => jest.fn().mockImplementation(() => varCacheMock))

describe('Integration Tests', () => {
  let lp: LeanplumInternal

  beforeEach(() => {
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
})
