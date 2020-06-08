import LeanplumSocket from '../../src/LeanplumSocket'
import EventEmitter from '../../src/EventEmitter'

describe(LeanplumSocket, () => {
  let events, socket, createRequest

  beforeEach(() => {
    createRequest = jest.fn()
    events = new EventEmitter()
    socket = new LeanplumSocket({} as any, createRequest, jest.fn(), events)
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
})
