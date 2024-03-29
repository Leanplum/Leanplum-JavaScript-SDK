/* eslint-disable @typescript-eslint/no-explicit-any */

import Network from '../../src/Network'
import { xhrMock } from '../mocks/external'

globalThis.XMLHttpRequest = jest.fn().mockImplementation(xhrMock) as any

describe(Network, () => {
  let network: Network

  beforeEach(() => {
    network = new Network()
  })

  it('works with queued requests', () => {
    jest.useFakeTimers()
    const success = jest.fn()
    const error = jest.fn()

    network.ajax('POST', 'http://test.com/', {}, success, error, true, true)
    network.ajax('POST', 'http://test.com/', {}, success, error, true, true)

    xhrMock.resolveRequest()
    xhrMock.resolveRequest()
    jest.runAllTimers()

    expect(success).toHaveBeenCalledTimes(2)
    expect(error).toHaveBeenCalledTimes(0)
  })

  it('stops sending requests if they are blocked', () => {
    jest.useFakeTimers()
    const success = jest.fn()
    const error = jest.fn()

    network.ajax('POST', 'http://test.com/', {}, success, error, true, true)
    xhrMock.blockRequest()
    network.ajax('POST', 'http://test.com/', {}, success, error, true, true)

    jest.runAllTimers()

    expect(success).toHaveBeenCalledTimes(0)
    expect(error).toHaveBeenCalledTimes(0)
  })
})
