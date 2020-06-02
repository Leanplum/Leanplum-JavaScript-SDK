import EventEmitter from '../../src/EventEmitter'
import Messages from '../../src/Messages'

describe(Messages, () => {
  let events: EventEmitter
  let messages: Messages
  let showMessage: jest.Mock

  beforeEach(() => {
    events = new EventEmitter()
    messages = new Messages(events, jest.fn(), jest.fn())
    showMessage = jest.fn()

    events.on('showMessage', showMessage)
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
      events.emit('previewRequest', MESSAGE)

      expect(showMessage).toHaveBeenCalledTimes(1)

      expect(showMessage).toHaveBeenCalledWith({
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

      events.emit('filesReceived', {
        [fileName]: { '': { servingUrl: fileUrl } }
      })

      events.emit('previewRequest', {
        messageId: 123,
        action: {
          '__file__CSS File': fileName
        }
      })

      expect(showMessage.mock.calls[0][0].message).toEqual(
        expect.objectContaining({
          'CSS File URL': fileUrl
        })
      )
    })

    it('resolves colors to hex', () => {
      events.emit('previewRequest', {
        messageId: 123,
        action: {
          'Red Color': -65536,
          'Green Color': -16711936,
          'White Color': -1
        }
      })

      const message = showMessage.mock.calls[0][0].message
      expect(message).toHaveProperty('Red Color', 'rgba(255,0,0,1)')
      expect(message).toHaveProperty('Green Color', 'rgba(0,255,0,1)')
      expect(message).toHaveProperty('White Color', 'rgba(255,255,255,1)')
    })
  })
})
