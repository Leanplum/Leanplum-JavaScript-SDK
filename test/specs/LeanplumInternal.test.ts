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

/* eslint-disable @typescript-eslint/no-explicit-any */

import Constants from '../../src/Constants'
import LeanplumInternal from '../../src/LeanplumInternal'
import { APP_ID, KEY_DEV } from '../data/constants'
import { windowMock } from '../mocks/external'
import { lpRequestMock, lpSocketMock, mockNextResponse, pushManagerMock, varCacheMock } from '../mocks/internal'

jest.mock('../../src/LeanplumRequest', () => jest.fn().mockImplementation(() => lpRequestMock))
jest.mock('../../src/LeanplumSocket', () => jest.fn().mockImplementation(() => lpSocketMock))
jest.mock('../../src/PushManager', () => jest.fn().mockImplementation(() => pushManagerMock))
jest.mock('../../src/VarCache', () => jest.fn().mockImplementation(() => varCacheMock))

describe(LeanplumInternal, () => {
  let lp: LeanplumInternal

  beforeEach(() => {
    lp = new LeanplumInternal(windowMock)
  })

  afterEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
  })

  describe('start', () => {
    it('passes available message IDs to API', () => {
      const inbox = lp.inbox()
      lpRequestMock.request.mockImplementationOnce(
        (method, args, options) => {
          options.response({
            success: true,
            response: [ { newsfeedMessages: {
              '123##1': {},
              '234##1': {},
            } } ],
          })
        }
      )
      inbox.downloadMessages()

      lp.start()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(2)
      const [method, args] = lpRequestMock.request.mock.calls[1]
      const { newsfeedMessages } = args.buildDict()
      expect(method).toBe('start')
      expect(newsfeedMessages).toEqual(['123##1', '234##1'])
    })

    it('synchronizes message inbox, if requested by API', () => {
      mockNextResponse({
        response: [{
          success: true,
          syncNewsfeed: true,
        }],
      })
      lp.start()

      expect(lpRequestMock.request).toHaveBeenCalledTimes(2)
      const [method] = lpRequestMock.request.mock.calls[1]
      expect(method).toEqual('getNewsfeedMessages')
    })

    it('works in DEV mode', () => {
      lp.setAppIdForDevelopmentMode(APP_ID, KEY_DEV)
      mockNextResponse({ response: [{ success: true }] })

      lp.start()

      expect(lpSocketMock.connect).toHaveBeenCalledTimes(1)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [cahe, auth, createRequest, getLastResponse] = lpSocketMock.connect.mock.calls[0]

      createRequest(expect.any(String), expect.any(Object), expect.any(Object))
      getLastResponse({ response: [] })

      expect(lpRequestMock.request).toHaveBeenCalledTimes(2)
      expect(lpRequestMock.getLastResponse).toHaveBeenCalledTimes(2)
    })

    describe('useSessionLength', () => {
      it('starts a new session if there is no stored session', () => {
        jest.spyOn(Date, 'now').mockImplementation(() => 0)

        lp.useSessionLength(2)
        mockNextResponse({ response: [{ success: true }] })
        lp.start()

        expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      })

      it('retries to start session, if start call fails', () => {
        let currentTime = 0
        jest.spyOn(Date, 'now').mockImplementation(() => currentTime)

        lp.useSessionLength(2)
        mockNextResponse({ response: [{ success: false }] })
        lp.start()

        currentTime = 100
        mockNextResponse({ response: [{ success: true }] })
        lp.start()

        expect(lpRequestMock.request).toHaveBeenCalledTimes(2)
      })

      it('resumes sessions if session is active', () => {
        let currentTime = 0
        jest.spyOn(Date, 'now').mockImplementation(() => currentTime)
        lp.useSessionLength(2)

        mockNextResponse({ response: [{ success: true }] })
        lp.start()

        currentTime = 1000
        lp.start()

        expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      })

      it('starts a new session if session length has expired', () => {
        let currentTime = 0
        jest.spyOn(Date, 'now').mockImplementation(() => currentTime)

        lp.useSessionLength(2)

        mockNextResponse({ response: [{ success: true }] })
        lp.start()

        currentTime = 2001
        mockNextResponse({ response: [{ success: true }] })
        lp.start()

        expect(lpRequestMock.request).toHaveBeenCalledTimes(2)
      })

      it('continues session on each start call', () => {
        let currentTime = 0
        jest.spyOn(Date, 'now').mockImplementation(() => currentTime)

        lp.useSessionLength(2)

        mockNextResponse({ response: [{ success: true }] })
        lp.start()

        currentTime = 1999
        mockNextResponse({ response: [{ success: true }] })
        lp.start()

        currentTime = 3998
        mockNextResponse({ response: [{ success: true }] })
        lp.start()

        expect(lpRequestMock.request).toHaveBeenCalledTimes(1)
      })

      it('continues session on successfull track', () => {
        let currentTime = 0
        jest.spyOn(Date, 'now').mockImplementation(() => currentTime)
        lp.useSessionLength(2)

        mockNextResponse({ response: [{ success: true }] })
        lp.start()

        currentTime = 1000
        mockNextResponse({ response: [{ success: true }] })
        lp.track('Test')

        currentTime = 2000
        lp.start()

        expect(lpRequestMock.request).toHaveBeenCalledTimes(2)
      })

      it('destroys active session on stop', () => {
        let currentTime = 0
        jest.spyOn(Date, 'now').mockImplementation(() => currentTime)
        lp.useSessionLength(2)

        mockNextResponse({ response: [{ success: true }] })
        lp.start()

        currentTime = 500
        mockNextResponse({ response: [{ success: true }] })
        lp.stop()

        currentTime = 1000
        mockNextResponse({ response: [{ success: true }] })
        lp.start()

        expect(lpRequestMock.request).toHaveBeenCalledTimes(3)
      })
    })
  })

  describe('startFromCache', () => {
    it('works in DEV mode', () => {
      lp.setAppIdForDevelopmentMode(APP_ID, KEY_DEV)
      mockNextResponse({ response: [{ success: true }] })

      lp.start()

      expect(lpSocketMock.connect).toHaveBeenCalledTimes(1)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [cahe, auth, createRequest, getLastResponse] = lpSocketMock.connect.mock.calls[0]

      createRequest(expect.any(String), expect.any(Object), expect.any(Object))
      getLastResponse({ response: [] })

      expect(lpRequestMock.request).toHaveBeenCalledTimes(2)
      expect(lpRequestMock.getLastResponse).toHaveBeenCalledTimes(2)
    })
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
      expect(options.devMode).toEqual(false);
      expect(options.queued).toEqual(true);
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
      expect(options.devMode).toEqual(false);
      expect(options.queued).toEqual(true);
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
      expect(options.devMode).toEqual(false);
      expect(options.queued).toEqual(true);
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
      expect(options.devMode).toEqual(false);
      expect(options.queued).toEqual(true);
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
      expect(options.devMode).toEqual(false);
      expect(options.queued).toEqual(true);
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
      expect(options.devMode).toEqual(true);
      expect(options.queued).toEqual(true);
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
      expect(options.devMode).toEqual(false);
      expect(options.queued).toEqual(true);
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
      expect(options.devMode).toEqual(false);
      expect(options.queued).toEqual(true);
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
      expect(options.devMode).toEqual(false);
      expect(options.queued).toEqual(true);
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
      expect(options.devMode).toEqual(false);
      expect(options.queued).toEqual(true);
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
      expect(options.devMode).toEqual(true);
      expect(options.queued).toEqual(true);
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
      it('calls internal method', async() => {
        await lp.isWebPushSubscribed()

        expect(pushManagerMock.isWebPushSubscribed).toHaveBeenCalledTimes(1)
      })
    })

    describe('registerForWebPush', () => {
      it('fails when WebPush is not suported', async() => {
        pushManagerMock.isWebPushSupported.mockReturnValueOnce(false)

        await expect(lp.registerForWebPush()).rejects.toEqual('Leanplum: WebPush is not supported.')

        expect(pushManagerMock.register).toHaveBeenCalledTimes(0)
      })

      it('returns `true` when already subscribed', async() => {
        pushManagerMock.isWebPushSupported.mockReturnValueOnce(true)
        pushManagerMock.register.mockImplementationOnce(async(url, scope, callback) => callback(true))

        const result = await lp.registerForWebPush('/sw.test.js')

        expect(result).toBe(true)
        expect(pushManagerMock.register).toHaveBeenCalledTimes(1)
        expect(pushManagerMock.register.mock.calls[0][0]).toEqual('/sw.test.js')
        expect(pushManagerMock.subscribeUser).toHaveBeenCalledTimes(0)
      })

      it('returns `true` and subscribes user when not subscribed', async() => {
        pushManagerMock.isWebPushSupported.mockReturnValueOnce(true)
        pushManagerMock.register.mockImplementationOnce(async(url, scope, callback) => callback(false))
        pushManagerMock.subscribeUser.mockReturnValueOnce(Promise.resolve(true))

        const result = await lp.registerForWebPush('/sw.test.js')

        expect(result).toBe(true)
        expect(pushManagerMock.register).toHaveBeenCalledTimes(1)
        expect(pushManagerMock.register.mock.calls[0][0]).toEqual('/sw.test.js')
        expect(pushManagerMock.subscribeUser).toHaveBeenCalledTimes(1)
      })

      it('uses previously set web push options', async() => {
        pushManagerMock.isWebPushSupported.mockReturnValueOnce(true)
        const serviceWorkerUrl = '/lp-sw.min.js'
        const scope = '/shop/'

        lp.setWebPushOptions({ serviceWorkerUrl, scope })

        await lp.registerForWebPush()

        const registerCall = pushManagerMock.register.mock.calls[0]
        expect(registerCall[0]).toEqual(serviceWorkerUrl)
        expect(registerCall[1]).toEqual({ scope })
      })
    })

    describe('unregisterFromWebPush', () => {
      it('calls internal method', async() => {
        await lp.unregisterFromWebPush()

        expect(pushManagerMock.unsubscribeUser).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('inbox', () => {
    it('returns inbox', () => {
      const inbox = lp.inbox()

      expect(inbox).toBeDefined()
    })

    it('returns the same instance every time', () => {
      const inbox = lp.inbox()

      expect(lp.inbox()).toBe(inbox)
    })

    it('tracks triggered actions', () => {
      windowMock.location = { assign: jest.fn() } as any

      mockNextResponse({ response: [{ success: true }] })
      lp.onInboxAction('123', {
        __name__: 'Open URL',
        URL: 'https://example.com',
      })

      expect(lpRequestMock.request).toHaveBeenCalledTimes(1)

      expect(getRequestData(lpRequestMock.request.mock.calls[0])).toEqual({
        action: 'track',
        messageId: '123',
        event: 'Open'
      })
    })

    it('tracks app functions from campaign', () => {
      mockMessageCache({
        '12345': {
          action: 'Open URL',
          parentCampaignId: '999',
          vars: {
            __name__: 'Open URL',
            URL: 'https://example.com',
          },
        },
      })
      windowMock.location = { assign: jest.fn() } as any

      mockNextResponse({ response: [{ success: true }] })
      mockNextResponse({ response: [{ success: true }] })
      lp.onInboxAction('123', {
        parentCampaignId: '999',
        __name__: 'Open URL',
        URL: 'https://example.com',
      })

      expect(lpRequestMock.request).toHaveBeenCalledTimes(2)
      expect(getRequestData(lpRequestMock.request.mock.calls[0])).toEqual({
        action: 'track',
        messageId: '123',
        event: 'Open'
      })
      expect(getRequestData(lpRequestMock.request.mock.calls[1])).toEqual({
        action: 'track',
        messageId: '12345'
      })
    })

    // required for tracking impressions properly
    it('tracks before navigating away', () => {
      mockMessageCache({
        '12345': {
          action: 'Open URL',
          parentCampaignId: '999',
          vars: {
            __name__: 'Open URL',
            URL: 'https://example.com',
          },
        },
      })
      windowMock.location = { assign: jest.fn() } as any

      mockNextResponse({ response: [{ success: true }] })

      let resolveTrackRequest;
      lpRequestMock.request.mockImplementationOnce(
        (method, args, options) => resolveTrackRequest = options.response
      )
      lp.onInboxAction('123', {
        parentCampaignId: '999',
        __name__: 'Open URL',
        URL: 'https://example.com',
      })

      expect(windowMock.location.assign).toHaveBeenCalledTimes(0)

      resolveTrackRequest({ response: [ { success: true } ] })

      expect(windowMock.location.assign).toHaveBeenCalledTimes(1)
    })

    it('tracks chained actions', () => {
      mockMessageCache({
        '12345': {
          action: 'Open URL',
          parentCampaignId: '999',
          vars: {
            __name__: 'Open URL',
            URL: 'https://example.com',
          },
        },
      })

      mockNextResponse({ response: [{ success: true }] })
      mockNextResponse({ response: [{ success: true }] })
      windowMock.location = { assign: jest.fn() } as any
      lp.onInboxAction('123', {
        parentCampaignId: '999',
        __name__: 'Chain to Existing Message',
        'Chained message': '12345',
      })

      expect(lpRequestMock.request).toHaveBeenCalledTimes(2)
      expect(getRequestData(lpRequestMock.request.mock.calls[0])).toEqual({
        action: 'track',
        messageId: '123',
        event: 'Open',
      })
      expect(getRequestData(lpRequestMock.request.mock.calls[1])).toEqual({
        action: 'track',
        messageId: '12345',
        event: 'View',
      })
    })

    // required for tracking impressions properly
    it('tracks chained messages before navigating away', () => {
      mockMessageCache({
        '12345': {
          action: 'Open URL',
          parentCampaignId: '999',
          vars: {
            __name__: 'Open URL',
            URL: 'https://example.com',
          },
        },
      })

      mockNextResponse({ response: [{ success: true }] })
      let resolveTrackRequest;
      lpRequestMock.request.mockImplementationOnce(
        (method, args, options) => resolveTrackRequest = options.response
      )
      windowMock.location = { assign: jest.fn() } as any
      lp.onInboxAction('123', {
        parentCampaignId: '999',
        __name__: 'Chain to Existing Message',
        'Chained message': '12345',
      })

      expect(windowMock.location.assign).toHaveBeenCalledTimes(0)

      resolveTrackRequest({ response: [ { success: true } ] })

      expect(windowMock.location.assign).toHaveBeenCalledTimes(1)
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

  function getRequestData(request: any): any {
    const [action, args] = request
    const {messageId, event} = args.buildDict()
    return {
      action,
      messageId,
      event
    }
  }

  function mockMessageCache(messages: any): void {
    mockNextResponse({
      response: [{
        success: true,
        messages,
      }],
    })
    lp.start()
    lpRequestMock.request.mockClear()
  }
})
