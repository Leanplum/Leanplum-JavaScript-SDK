/* eslint-disable @typescript-eslint/no-explicit-any */

import LeanplumRequest from '../../src/LeanplumRequest'
import LocalStorageManager from '../../src/LocalStorageManager'
import Constants from '../../src/Constants'
import Network from '../../src/Network'
import ArgsBuilder from  '../../src/ArgsBuilder'

describe(LeanplumRequest, () => {
  let request: LeanplumRequest
  let lsGetSpy: jest.SpyInstance
  let network: Network
  const APP_ID = 'app_123'
  const SECRET = 'prod_234'

  function requestInstance(network: Network) {
    request = new LeanplumRequest(network)
    request.appId = APP_ID
    request.clientKey = SECRET
  }

  beforeEach(() => {
    network = new Network();
    jest.spyOn(network, 'ajax')
    requestInstance(network)
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('userId resolution', () => {
    beforeEach(() => {
      lsGetSpy = jest.spyOn(LocalStorageManager, 'getFromLocalStorage').mockReturnValue(undefined)
    })

    afterEach(() => {
      lsGetSpy.mockRestore()
    })

    it('returns instance userId, when available', () => {
      request.userId = 'IN123'

      expect(request.userId).toBe('IN123')
      expect(lsGetSpy).toHaveBeenCalledTimes(0)
    })

    it('returns userId from localStorage, when no instance value', () => {
      lsGetSpy.mockReturnValueOnce('LS123')

      expect(request.userId).toBe('LS123')
      expect(lsGetSpy).toHaveBeenCalledTimes(1)
    })

    it('returns deviceId, when no instance and localStorage value', () => {
      request.deviceId = 'DE123'

      expect(request.userId).toBe('DE123')
      expect(lsGetSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('file URL resolution', () => {
    it('resolves file urls', () => {
      const filename = 'image.png'
      const version = Constants.SDK_VERSION

      const url = request.getFileUrl(filename)

      expect(url).toEqual(`https://api.leanplum.com/api?appId=${APP_ID}&client=js&clientKey=${SECRET}&sdkVersion=${version}&action=downloadFile&filename=${filename}`)
    })

    it('returns empty string for empty filenames', () => {
      expect(request.getFileUrl('')).toEqual('')
    })
  })

  describe('batching', () => {
    beforeEach(() => {
      request.batchEnabled = true
      request.batchCooldown = 4
    })

    const args = (id: number) => new ArgsBuilder().add('id', id)

    it('batches requests when batchCooldown is set', () => {
      request.request('track', null, { queued: true });
      expect(network.ajax).toHaveBeenCalledTimes(1)

      request.request('track', null, { queued: true });
      request.request('track', null, { queued: true });
      request.request('track', null, { queued: true });
      expect(network.ajax).toHaveBeenCalledTimes(1)

      jest.advanceTimersByTime(4000)
      expect(network.ajax).toHaveBeenCalledTimes(2)
    })

    it('does not batch requests in development mode', () => {
      request.request('track', null, { queued: true, devMode: true });
      expect(network.ajax).toHaveBeenCalledTimes(1)

      request.request('track', null, { queued: true, devMode: true });
      expect(network.ajax).toHaveBeenCalledTimes(2)
    })

    it('can send requests immediately, if necessary', () => {
      request.request('track', null, { queued: true });
      expect(network.ajax).toHaveBeenCalledTimes(1)

      request.request('track', null, { queued: true });
      request.request('track', null, { queued: true, sendNow: true });
      expect(network.ajax).toHaveBeenCalledTimes(2)
    })

    it('persists requests between reloads', () => {
      request.request('track', args(1), { queued: true })
      expect(network.ajax).toHaveBeenCalledTimes(1)

      request.request('track', args(2), { queued: true })
      jest.clearAllTimers()
      expect(network.ajax).toHaveBeenCalledTimes(1)

      requestInstance(network)
      request.request('track', args(3), { queued: true })
      expect(network.ajax).toHaveBeenCalledTimes(2)
      expect(network.ajax).toHaveBeenCalledWith(
        'POST',
        expect.stringContaining('api'),
        expect.stringMatching(/"id":2.*"id":3/),
        undefined,
        undefined,
        expect.anything()
      )
    })

    it('immediately sends requests with body', () => {
      // special handling, used for sending variables
      request.request('track', args(1), { queued: true })
      expect(network.ajax).toHaveBeenCalledTimes(1)

      const requestArgs = args(2).body('{"name":"value"}')
      request.request('sendVars', requestArgs, { queued: true })
      expect(network.ajax).toHaveBeenCalledTimes(2)
    })

    it('refuses to send requests withoout appId or clientKey', () => {
      const error = jest.fn()
      delete request.appId
      jest.spyOn(console, 'error').mockImplementationOnce(() => {})

      request.request('track', null, { error })

      expect(error).toHaveBeenCalledTimes(1)
    })
  })
})
