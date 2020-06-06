import EventEmitter from '../../src/EventEmitter'
import Messages from '../../src/Messages'

describe(Messages, () => {
  let events: EventEmitter
  let messages: Messages
  let showMessage: jest.Mock
  let createRequest: jest.Mock
  let navigationChange: jest.Mock

  beforeEach(() => {
    events = new EventEmitter()
    createRequest = jest.fn().mockImplementation((m, e, options) => options?.response())
    messages = new Messages(events, createRequest)

    navigationChange = jest.fn()
    showMessage = jest.fn()
    events.on('showMessage', showMessage)
    events.on('navigationChange', navigationChange)
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

  describe('in-app messages', () => {
    it('does not trigger actions without whenTriggers', () => {
      events.emit('messagesReceived', {
        "123": {
          countdown: 0,
          action: "Open URL",
          startTime: 1587034800000,
          parentCampaignId: 456,
          vars: {
            __name__:"Open URL",
            URL:"https://example.com/dismiss"
          },
          priority: 1000
        }
      })

      expect(showMessage).not.toHaveBeenCalled()
    })

    it('triggers showMessage for messages at start', () => {
      events.emit('messagesReceived', {
        "123": {
          countdown: 1,
          action: "Confirm",
          startTime: 1587034800000,
          parentCampaignId: 456,
          whenTriggers: {
            verb: "OR",
            children: [
              { subject: "start", objects: [], verb: "", secondaryVerb: "=" }
            ]
          },
          vars: {
            __name__:"Confirm",
            Title: "Please confirm",
            Message: "Ready?",
            "Cancel text":"No",
            "Accept text":"Yes",
            "Accept action": { }
          },
          priority:1000
        }
      })

      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('triggers showMessage for chained message', () => {
      events.emit('messagesReceived', {
        "123": {
          countdown: 1,
          action: "Confirm",
          whenTriggers: {
            children: [
              { subject:"start", objects:[], verb:"", secondaryVerb:"="}
            ],
            verb: "OR"
          },
          startTime: 1587034800000,
          parentCampaignId: 456,
          vars: {
            __name__: "Confirm",
            Title: "Please confirm",
            Message:"Ready?",
            "Cancel text": "No",
            "Accept text": "Yes",
            "Accept action": {
              "Chained message": "234",
              __name__:"Chain to Existing Message"
            }
          },
          priority: 1000
        },
        "234": {
          countdown: 1,
          action: "Confirm",
          startTime: 1587034800000,
          parentCampaignId: 456,
          vars: {
            __name__: "Confirm",
            Title: "Confirm again",
            Message:"Ready?",
            "Cancel text": "No",
            "Accept text": "Yes",
          },
          priority: 1000
        }
      })

      // trigger accept action
      showMessage.mock.calls[0][0].context.runActionNamed('Accept action')

      expect(showMessage).toHaveBeenCalledTimes(2)
      const secondMessage = showMessage.mock.calls[1][0].message
      expect(secondMessage).toHaveProperty('__name__', 'Confirm')
      expect(secondMessage).toHaveProperty('Title', 'Confirm again')
    })

    it('triggers chained message action', () => {
      events.emit('messagesReceived', {
        "123": {
          countdown: 1,
          action: "Confirm",
          whenTriggers: {
            children: [
              { subject:"start", objects:[], verb:"", secondaryVerb:"="}
            ],
            verb: "OR"
          },
          startTime: 1587034800000,
          parentCampaignId: 456,
          vars: {
            __name__: "Confirm",
            Title: "Please confirm",
            Message:"Ready?",
            "Cancel text": "No",
            "Accept text": "Yes",
            "Accept action": {
              "Chained message": "234",
              __name__:"Chain to Existing Message"
            }
          },
          priority: 1000
        },
        "234": {
          countdown: 1,
          action: "Open URL",
          startTime: 1587034800000,
          parentCampaignId: 456,
          vars: {
            __name__: "Open URL",
            URL:"https://example.com/success"
          },
          priority: 1000
        }
      })

      // trigger accept action
      showMessage.mock.calls[0][0].context.runActionNamed('Accept action')

      expect(showMessage).toHaveBeenCalledTimes(1)
      expect(navigationChange).toHaveBeenCalledTimes(1)
      expect(navigationChange).toHaveBeenCalledWith("https://example.com/success")
    })
  })

  describe('shouldShowMessage', () => {
    it('is false for messagges without triggers', () => {
      const result = messages.shouldShowMessage({ })
      expect(result).toBeFalsy()
    })

    it('is false for messages outside the active period', () => {
      const now = Date.now()
      const result = messages.shouldShowMessage({
        startTime: now + 10,
        endTime: now + 20,
        whenTriggers: {
          verb: "OR",
          children: [
            { subject: "start", objects: [], verb: "", secondaryVerb: "=" }
          ]
        }
      })
      expect(result).toBeFalsy()
    })
  })

  describe('prioritization', () => {
    it('chooses one in-app message to show', () => {
      events.emit('messagesReceived', {
        "123": {
          countdown: 1,
          action: "Confirm",
          startTime: 1587034800000,
          parentCampaignId: 456,
          whenTriggers: {
            verb: "OR",
            children: [
              { subject: "start", objects: [], verb: "", secondaryVerb: "=" }
            ]
          },
          vars: { __name__:"Confirm", },
          priority: 1000
        },
        "456": {
          countdown: 1,
          action: "Confirm",
          startTime: 1587034800000,
          parentCampaignId: 456,
          whenTriggers: {
            verb: "OR",
            children: [
              { subject: "start", objects: [], verb: "", secondaryVerb: "=" }
            ]
          },
          vars: { __name__:"Confirm", },
          priority: 1000
        }
      })

      expect(showMessage).toHaveBeenCalledTimes(1)
    })
  })
})
