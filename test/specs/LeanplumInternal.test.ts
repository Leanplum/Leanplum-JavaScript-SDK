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
import { APP_ID, KEY_DEV } from '../data/constants'
import { windowMock } from '../mocks/external'
import { lpRequestMock, pushManagerMock, varCacheMock } from '../mocks/internal'

jest.mock('../../src/LeanplumRequest', () => jest.fn().mockImplementation(() => lpRequestMock))
jest.mock('../../src/PushManager', () => jest.fn().mockImplementation(() => pushManagerMock))
jest.mock('../../src/VarCache', () => jest.fn().mockImplementation(() => varCacheMock))

describe(LeanplumInternal, () => {
  let lp: LeanplumInternal

  beforeEach(() => {
    lp = new LeanplumInternal(windowMock)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('track', () => {
    it('works with event name only', () => {
      lp.track('Test Event')

      const [action, args, options] = lpRequestMock.request.mock.calls[0]
      const {event, value, params, info} = args.buildDict()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      expect(action).toEqual(Constants.METHODS.TRACK)
      expect(event).toEqual('Test Event')
      expect(value).toEqual(0.0)
      expect(params).toEqual(undefined)
      expect(info).toEqual(undefined)
      expect(options).toEqual({ devMode: false, queued: true })
    })

    it('works with params', () => {
      lp.track('Test Event', { test: true })

      const [action, args, options] = lpRequestMock.request.mock.calls[0]
      const {event, value, params, info} = args.buildDict()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      expect(action).toEqual(Constants.METHODS.TRACK)
      expect(event).toEqual('Test Event')
      expect(value).toEqual(0.0)
      expect(params).toEqual(JSON.stringify({ test: true }))
      expect(info).toEqual(undefined)
      expect(options).toEqual({ devMode: false, queued: true })
    })

    it('works with value', () => {
      lp.track('Test Event', 1.23)

      const [action, args, options] = lpRequestMock.request.mock.calls[0]
      const {event, value, params, info} = args.buildDict()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      expect(action).toEqual(Constants.METHODS.TRACK)
      expect(event).toEqual('Test Event')
      expect(value).toEqual(1.23)
      expect(params).toEqual(undefined)
      expect(info).toEqual(undefined)
      expect(options).toEqual({ devMode: false, queued: true })
    })

    it('works with value and params', () => {
      lp.track('Test Event', 1.23, { test: true })

      const [action, args, options] = lpRequestMock.request.mock.calls[0]
      const {event, value, params, info} = args.buildDict()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      expect(action).toEqual(Constants.METHODS.TRACK)
      expect(event).toEqual('Test Event')
      expect(value).toEqual(1.23)
      expect(params).toEqual(JSON.stringify({ test: true }))
      expect(info).toEqual(undefined)
      expect(options).toEqual({ devMode: false, queued: true })
    })

    it('works with value, info and params', () => {
      lp.track('Test Event', 1.23, 'test', { test: true })

      const [action, args, options] = lpRequestMock.request.mock.calls[0]
      const {event, value, params, info} = args.buildDict()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      expect(action).toEqual(Constants.METHODS.TRACK)
      expect(event).toEqual('Test Event')
      expect(value).toEqual(1.23)
      expect(params).toEqual(JSON.stringify({ test: true }))
      expect(info).toEqual('test')
      expect(options).toEqual({ devMode: false, queued: true })
    })

    it('works in DEV mode', () => {
      lp.setAppIdForDevelopmentMode(APP_ID, KEY_DEV)
      lp.track('Test Event', 0.99, 'Development', { dev: true })

      const [action, args, options] = lpRequestMock.request.mock.calls[0]
      const {event, value, params, info} = args.buildDict()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      expect(action).toEqual(Constants.METHODS.TRACK)
      expect(event).toEqual('Test Event')
      expect(value).toEqual(0.99)
      expect(params).toEqual(JSON.stringify({ dev: true }))
      expect(info).toEqual('Development')
      expect(options).toEqual({ devMode: true, queued: true })
    })
  })

  describe('trackPurchase', () => {
    it('works without currency code', () => {
      lp.trackPurchase(19.99)

      const [action, args, options] = lpRequestMock.request.mock.calls[0]
      const {event, value, params} = args.buildDict()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      expect(action).toEqual(Constants.METHODS.TRACK)
      expect(event).toEqual('Purchase')
      expect(value).toEqual(19.99)
      expect(params).toEqual(undefined)
      expect(options).toEqual({ devMode: false, queued: true })
    })

    it('works with currency code', () => {
      lp.trackPurchase(19.99, 'EUR')

      const [action, args, options] = lpRequestMock.request.mock.calls[0]
      const {event, value, currencyCode} = args.buildDict()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      expect(action).toEqual(Constants.METHODS.TRACK)
      expect(event).toEqual('Purchase')
      expect(value).toEqual(19.99)
      expect(currencyCode).toEqual('EUR')
      expect(options).toEqual({ devMode: false, queued: true })
    })

    it('works with params', () => {
      lp.trackPurchase(19.99, 'EUR', { test: true })

      const [action, args, options] = lpRequestMock.request.mock.calls[0]
      const {event, value, params, currencyCode} = args.buildDict()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      expect(action).toEqual(Constants.METHODS.TRACK)
      expect(event).toEqual('Purchase')
      expect(value).toEqual(19.99)
      expect(params).toEqual(JSON.stringify({ test: true }))
      expect(currencyCode).toEqual('EUR')
      expect(options).toEqual({ devMode: false, queued: true })
    })

    it('works with custom event name', () => {
      lp.trackPurchase(19.99, 'BGN', { itemsInCart: 4 }, 'Checkout')

      const [action, args, options] = lpRequestMock.request.mock.calls[0]
      const {event, value, params, currencyCode} = args.buildDict()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      expect(action).toEqual(Constants.METHODS.TRACK)
      expect(event).toEqual('Checkout')
      expect(value).toEqual(19.99)
      expect(currencyCode).toEqual('BGN')
      expect(params).toEqual(JSON.stringify({ itemsInCart: 4 }))
      expect(options).toEqual({ devMode: false, queued: true })
    })

    it('works in DEV mode', () => {
      lp.setAppIdForDevelopmentMode(APP_ID, KEY_DEV)
      lp.trackPurchase(0.99, 'USD', { dev: true }, 'Test Purchase')

      const [action, args, options] = lpRequestMock.request.mock.calls[0]
      const {event, value, params, currencyCode} = args.buildDict()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      expect(action).toEqual(Constants.METHODS.TRACK)
      expect(event).toEqual('Test Purchase')
      expect(value).toEqual(0.99)
      expect(currencyCode).toEqual('USD')
      expect(params).toEqual(JSON.stringify({ dev: true }))
      expect(options).toEqual({ devMode: true, queued: true })
    })
  })

  describe('Variables', () => {
    describe('setVariables', () => {
      it('calls internal method', () => {
        lp.setVariables({ items: [ '1st', '2nd' ] })

        expect(varCacheMock.setVariables).toHaveBeenCalledTimes(1)
        expect(varCacheMock.setVariables).toHaveBeenLastCalledWith({ items: [ '1st', '2nd' ] })
      })
    })

    describe('getVariables', () => {
      it('calls internal method', () => {
        lp.getVariables()

        expect(varCacheMock.getVariables).toHaveBeenCalledTimes(1)
      })
    })

    describe('getVariable', () => {
      it('calls internal method', () => {
        lp.getVariable('items', 1)

        expect(varCacheMock.getVariable).toHaveBeenCalledTimes(1)
        expect(varCacheMock.getVariable).toHaveBeenLastCalledWith('items', 1)
      })
    })

    describe('addVariablesChangedHandler', () => {
      it('calls internal method', () => {
        const handler = jest.fn()

        lp.addVariablesChangedHandler(handler)

        expect(varCacheMock.addVariablesChangedHandler).toHaveBeenCalledTimes(1)
        expect(varCacheMock.addVariablesChangedHandler).toHaveBeenCalledWith(handler)
      })
    })

    describe('removeVariablesChangedHandler', () => {
      it('calls internal method', () => {
        const handler = jest.fn()

        lp.removeVariablesChangedHandler(handler)

        expect(varCacheMock.removeVariablesChangedHandler).toHaveBeenCalledTimes(1)
        expect(varCacheMock.removeVariablesChangedHandler).toHaveBeenCalledWith(handler)
      })
    })
  })

  describe('WebPush', () => {
    describe('isWebPushSupported', () => {
      it('calls internal method', () => {
        lp.isWebPushSupported()

        expect(pushManagerMock.isWebPushSupported).toHaveBeenCalledTimes(1)
      })
    })

    describe('isWebPushSubscribed', () => {
      it('calls internal method', async () => {
        await lp.isWebPushSubscribed()

        expect(pushManagerMock.isWebPushSubscribed).toHaveBeenCalledTimes(1)
      })
    })

    describe('registerForWebPush', () => {
      it('fails when WebPush is not suported', async () => {
        pushManagerMock.isWebPushSupported.mockReturnValueOnce(false)

        await expect(lp.registerForWebPush()).rejects.toEqual('Leanplum: WebPush is not supported.')

        expect(pushManagerMock.register).toHaveBeenCalledTimes(0)
      })

      it('returns `true` when already subscribed', async () => {
        pushManagerMock.isWebPushSupported.mockReturnValueOnce(true)
        pushManagerMock.register.mockImplementationOnce(async (url, callback) => callback(true))

        const result = await lp.registerForWebPush('/sw.test.js')

        expect(result).toBe(true)
        expect(pushManagerMock.register).toHaveBeenCalledTimes(1)
        expect(pushManagerMock.register.mock.calls[0][0]).toEqual('/sw.test.js')
        expect(pushManagerMock.subscribeUser).toHaveBeenCalledTimes(0)
      })

      it('returns `true` and subscribes user when not subscribed', async () => {
        pushManagerMock.isWebPushSupported.mockReturnValueOnce(true)
        pushManagerMock.register.mockImplementationOnce(async (url, callback) => callback(false))
        pushManagerMock.subscribeUser.mockReturnValueOnce(Promise.resolve(true))

        const result = await lp.registerForWebPush('/sw.test.js')

        expect(result).toBe(true)
        expect(pushManagerMock.register).toHaveBeenCalledTimes(1)
        expect(pushManagerMock.register.mock.calls[0][0]).toEqual('/sw.test.js')
        expect(pushManagerMock.subscribeUser).toHaveBeenCalledTimes(1)
      })
    })

    describe('unregisterFromWebPush', () => {
      it('calls internal method', async () => {
        await lp.unregisterFromWebPush()

        expect(pushManagerMock.unsubscribeUser).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('Misc', () => {
    describe('getVariantDebugInfo', () => {
      it('calls internal method', () => {
        lp.getVariantDebugInfo()

        expect(varCacheMock.getVariantDebugInfo).toHaveBeenCalledTimes(1)
      })
    })

    describe('clearUserContent', () => {
      it('calls internal method', () => {
        lp.clearUserContent()

        expect(varCacheMock.clearUserContent).toHaveBeenCalledTimes(1)
      })
    })
  })
})
