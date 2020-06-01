import LeanplumSocket from '../../src/LeanplumSocket'
import EventEmitter from '../../src/EventEmitter'

describe(LeanplumSocket, () => {
  let events, socket;

  beforeEach(() => {
    events = new EventEmitter()
    socket = new LeanplumSocket({} as any, jest.fn(), jest.fn(), events)
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
})
