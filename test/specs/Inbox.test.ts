import Inbox from '../../src/Inbox'

describe(Inbox, () => {
  let inbox: Inbox
  const createRequestSpy: jest.Mock<void> = jest.fn()

  beforeEach(() => inbox = new Inbox(createRequestSpy))

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('downloadMessages', () => {
    it('fetches messages from API', () => {
      inbox.downloadMessages()

      expect(createRequestSpy).toHaveBeenCalledTimes(1)
      expect(createRequestSpy.mock.calls[0][0]).toEqual('getNewsfeedMessages')
    })

    it('triggers change handler on success', () => {
      const handler = jest.fn()

      inbox.onChanged(handler)

      mockMessages({
        '123##1': {}
      })

      expect(handler).toHaveBeenCalledTimes(1)
    })
  })

  describe('allMessages', () => {
    it('returns message objects', () => {
      mockMessages({
        '123##1': createMessage({
          deliveryTimestamp: 1585569600625,
          isRead: true,
          vars: {
            Title: "Message title",
            Subtitle: "Message subtitle",
            Image: "https://example.com/image.png",
          }
        })
      })

      const messages = inbox.allMessages()

      expect(messages.length).toEqual(1)
      expect(messages[0].id()).toEqual('123##1')
      expect(messages[0].title()).toEqual('Message title')
      expect(messages[0].subtitle()).toEqual('Message subtitle')
      expect(messages[0].imageUrl()).toEqual('https://example.com/image.png')
      expect(messages[0].isRead()).toEqual(true)
      expect(messages[0].timestamp()).toEqual(1585569600625)
    })
  })

  describe('messageIds', () => {
    it('returns all message IDs', () => {
      mockMessages({
        '123##1': {},
        '234##1': {},
        '345##1': {}
      })

      expect(inbox.messageIds()).toEqual([
        '123##1',
        '234##1',
        '345##1'
      ])
    })
  })

  describe('unreadMessages', () => {
    it('filters out read messages', () => {
      mockMessages({
        '123##1': { isRead: true },
        '234##1': { isRead: false },
        '345##1': { isRead: false }
      })

      const messages = inbox.unreadMessages()
      expect(messages.length).toEqual(2)
      expect(messages.map(x => x.id()).sort()).toEqual([
        '234##1',
        '345##1'
      ])
    })
  })

  describe('count', () => {
    it('returns message count', () => {
      mockMessages({
        '123##1': { isRead: true },
        '234##1': { isRead: false },
        '345##1': { isRead: false }
      })

      expect(inbox.count()).toEqual(3)
    })
  })

  describe('unreadCount', () => {
    it('returns unread message count', () => {
      mockMessages({
        '123##1': { isRead: true },
        '234##1': { isRead: false },
        '345##1': { isRead: false }
      })

      expect(inbox.unreadCount()).toEqual(2)
    })
  })

  describe('message', () => {
    it('returns message object for given id', () => {
      mockMessages({
        '123##1': createMessage({
          vars: {
            Title: 'Target'
          }
        }),
        '234##1': { isRead: false },
        '345##1': { isRead: false }
      })

      expect(inbox.message('123##1').title()).toEqual('Target')
    })

    it('returns null for unknown message', () => {
      mockMessages({})

      expect(inbox.message('123##1')).toEqual(null)
    })
  })

  function mockMessages(newsfeedMessages: any) {
    createRequestSpy.mockImplementationOnce(
      (method, args, options) => {
        options.response({
          success: true,
          response: [ { newsfeedMessages } ]
        })
      }
    )
    inbox.downloadMessages()
  }

  function createMessage(options: any) {
    return {
      deliveryTimestamp: options.deliveryTimestamp || Date.now(),
      isRead: options.isRead || false,
      messageData: {
        countdown: 1,
        action: "__Newsfeed Message",
        startTime: 1581339600000,
        parentCampaignId: 54321,
        vars: Object.assign({
          __name__:"__Newsfeed Message",
          Title: "Message title",
          Subtitle: "Message subtitle",
          Image: "https://example.com/image.png",
          "Open action": {"__name__":""}
        }, options.vars),
        hasImpressionCriteria: false,
        priority: 1000
      }
    }
  }
})
