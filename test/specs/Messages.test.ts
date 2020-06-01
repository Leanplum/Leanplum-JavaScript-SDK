import EventEmitter from '../../src/EventEmitter'
import Messages from '../../src/Messages'

describe(Messages, () => {
  let events: EventEmitter
  let messages: Messages

  beforeEach(() => {
    events = new EventEmitter()
    messages = new Messages(events, jest.fn(), jest.fn())
  })

  const MESSAGE = {
    messageId: 12345,
    isRooted: true,
    action: {
      __name__: 'Custom',

      Title: 'Title text'
    }
  }

  describe('message preview', () => {
    it('triggers a "showMessage" after receiving a preview request', () => {
      const handler = jest.fn()
      events.on('showMessage', handler)

      events.emit('previewRequest', MESSAGE)

      expect(handler).toHaveBeenCalledTimes(1)

      expect(handler).toHaveBeenCalledWith({
        isPreview: true,
        message: {
          messageId: MESSAGE.messageId,
          ...MESSAGE.action
        },
        context: {
          track: expect.any(Function),
          runActionNamed: expect.any(Function),
          runTrackedActionNamed: expect.any(Function)
        }
      })
    })

    it('resolves file references', () => {
      const fileName = 'lp_public_sf_ui_font.css'
      const fileUrl = 'https://example.com/styles.css'

      const handler = jest.fn()
      events.on('showMessage', handler)
      events.emit('filesReceived', {
        [fileName]: { '': { servingUrl: fileUrl } }
      })

      events.emit('previewRequest', {
        messageId: 123,
        action: {
          '__file__CSS File': fileName
        }
      })

      expect(handler.mock.calls[0][0].message).toEqual(
        expect.objectContaining({
          'CSS File URL': fileUrl
        })
      )
    })
  })
})
