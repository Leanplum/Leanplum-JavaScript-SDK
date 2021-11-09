import LeanplumSocket from '../../src/LeanplumSocket'
import EventEmitter from '../../src/EventEmitter'
import VarCache from '../../src/VarCache'
import { varCacheMock } from '../mocks/internal'

jest.mock('../../src/SocketIoClient');
jest.mock('../../src/VarCache', () => jest.fn().mockImplementation(() => varCacheMock))

describe(LeanplumSocket, () => {
  let events, socket, createRequest, varCache

  beforeEach(() => {
    createRequest = jest.fn()
    varCache = new VarCache(createRequest)
    events = new EventEmitter()
    socket = new LeanplumSocket(varCache, createRequest, (r) => r.response[0], events)
    socket.connect()
    jest.spyOn(socket.socketClient, 'send')
  })

  const MESSAGE = {
    messageId: 12345,
    isRooted: true,
    action: {
      __name__: "Custom",
    }
  }

  it('emits previewRequest on "trigger" messages', () => {
    const handler = jest.fn()
    events.on('previewRequest', handler)

    socket.onMessageReceived('trigger', [ MESSAGE ])

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(MESSAGE)
  })

  it('sends a getVars request when on "updateVars" messages', () => {
    socket.onMessageReceived('updateVars', [ MESSAGE ])

    expect(createRequest).toHaveBeenCalledTimes(1)
    const [action, args] = createRequest.mock.calls[0]
    expect(action).toEqual('getVars')
    expect(args.buildDict().includeDefaults).toBe(false)
  })

  it('applies variable diffs on "updateVars" messages', () => {
    socket.onMessageReceived('updateVars', [ MESSAGE ])

    const resolveRequest = createRequest.mock.calls[0][2].response
    resolveRequest({
      response: [{
        success: true,
        vars: { foo: 1 },
        variants: {},
        actionMetadata: {}
      }],
    })

    expect(varCacheMock.applyDiffs).toHaveBeenCalledTimes(1)
  })

  it('sends a setVars request on "getActions" messages', () => {
    varCacheMock.sendActions.mockReturnValue(true)

    socket.onMessageReceived('getActions', [])

    expect(varCacheMock.sendActions).toHaveBeenCalledTimes(1)
    expect(socket.socketClient.send).toHaveBeenCalledTimes(1);
    expect(socket.socketClient.send).toHaveBeenCalledWith('getContentResponse', { updated: true });
  })
})
