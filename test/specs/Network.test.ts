/* eslint-disable @typescript-eslint/no-explicit-any */

import Network from '../../src/Network'
import { xhrMock } from '../mocks/external'

globalThis.XMLHttpRequest = jest.fn().mockImplementation(xhrMock) as any

describe(Network, () => {
  let network: Network

  beforeEach(() => {
    network = new Network()
  })

  it('works with queued requests', (done) => {
    const success = jest.fn()
    const error = jest.fn()

    network.ajax('POST', 'http://test.com/', {}, success, error, true, true)
    network.ajax('POST', 'http://test.com/', {}, success, error, true, true)

    setTimeout(() => {
      expect(success).toHaveBeenCalledTimes(2)
      expect(error).toHaveBeenCalledTimes(0)
      done()
    }, 1000)
  })
})
