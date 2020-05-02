import Inbox from '../../src/Inbox'

describe(Inbox, () => {
  let inbox: Inbox
  const createRequestSpy: jest.Mock<void> = jest.fn()
  const onActionSpy: jest.Mock<void> = jest.fn();

  beforeEach(() => inbox = new Inbox(createRequestSpy, onActionSpy))

  afterEach(() => {
    sessionStorage.clear()
    jest.clearAllMocks()
  })

  describe('downloadMessages', () => {
    it('fetches messages from API', () => {
      inbox.downloadMessages()

      expect(createRequestSpy).toHaveBeenCalledTimes(1)
      expect(createRequestSpy.mock.calls[0][0]).toEqual('getNewsfeedMessages')
    })

    it('triggers change handlers', () => {
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

    it('returns an empty array if no messages are loaded', () => {
      expect(inbox.messageIds()).toEqual([])
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

  describe('read', () => {
    it('calls the markNewsfeedMessageAsRead API method', () => {
      const id = '123##1'
      mockMessages({
        [id]: { isRead: false }
      })

      inbox.read(id)

      expect(createRequestSpy).toHaveBeenCalledTimes(2)
      const markAsReadCall = createRequestSpy.mock.calls[1]
      expect(markAsReadCall[0]).toEqual('markNewsfeedMessageAsRead')
      expect(markAsReadCall[1].argValues).toEqual({
        newsfeedMessageId: id
      })
    })

    it('marks the message as read', () => {
      const id = '123##1'
      mockMessages({
        [id]: { isRead: false }
      })

      inbox.read(id)

      expect(inbox.message(id).isRead()).toBe(true)
    })

    it('triggers onChange handler', () => {
      const handler = jest.fn()
      const id = '123##1'
      mockMessages({
        [id]: { isRead: false }
      })
      inbox.onChanged(handler)

      inbox.read(id)

      expect(handler).toHaveBeenCalledTimes(1)
      expect(inbox.count()).toEqual(1)
    })

    it('does not trigger request / change handlers for missing message', () => {
      const handler = jest.fn()
      inbox.onChanged(handler)

      inbox.read('foo')

      expect(handler).not.toHaveBeenCalled()
      expect(createRequestSpy).not.toHaveBeenCalled()
    })

    it('requests execution of open action upon reading', () => {
      const openAction = {
        __name__: "Chain to Existing Message",
        "Chained message": "12345"
      }
      const id = '123##1'
      mockMessages({
        [id]: {
          isRead: false,
          messageData: {
            vars: {
              'Open action': openAction
            }
          }
        }
      })

      inbox.read(id)

      expect(onActionSpy).toHaveBeenCalledTimes(1)
      expect(onActionSpy).toHaveBeenLastCalledWith(openAction)
    })

    it('allows re-reading of messages, triggering open action', () => {
      const openAction = {
        __name__: "Open URL",
        URL: "https://example.com"
      }
      const id = '123##1'
      mockMessages({
        [id]: {
          isRead: true,
          messageData: {
            vars: {
              'Open action': openAction
            }
          }
        }
      })

      inbox.read(id)

      expect(onActionSpy).toHaveBeenCalledTimes(1)
      expect(onActionSpy).toHaveBeenLastCalledWith(openAction)
    })

    it('does not trigger request / change handlers for read message', () => {
      const handler = jest.fn()
      const id = '123##1'
      mockMessages({
        [id]: { isRead: true }
      })
      inbox.onChanged(handler)

      inbox.read(id)

      expect(createRequestSpy).toHaveBeenCalledTimes(1)
      expect(handler).not.toHaveBeenCalled()
    })
  })

  describe('delete', () => {
    it('calls the deleteNewsfeedMessage API method', () => {
      const id = '123##1'
      mockMessages({
        [id]: { isRead: true }
      })

      inbox.remove(id)

      expect(createRequestSpy).toHaveBeenCalledTimes(2)
      const markAsReadCall = createRequestSpy.mock.calls[1]
      expect(markAsReadCall[0]).toEqual('deleteNewsfeedMessage')
      expect(markAsReadCall[1].argValues).toEqual({
        newsfeedMessageId: id
      })
    })

    it('triggers onChange handler', () => {
      const handler = jest.fn()
      const id = '123##1'
      mockMessages({
        [id]: { isRead: true }
      })
      inbox.onChanged(handler)

      inbox.remove(id)

      expect(handler).toHaveBeenCalledTimes(1)
      expect(inbox.count()).toEqual(0)
    })

    it('does not trigger request / change handlers for missing message', () => {
      const handler = jest.fn()
      inbox.onChanged(handler)

      inbox.remove('foo')

      expect(handler).not.toHaveBeenCalled()
      expect(createRequestSpy).not.toHaveBeenCalled()
    })
  })

  describe('persistence', () => {
    it('stores fetched messages in session', () => {
      const messages = {
        '123##1': { foo: 'bar' }
      }
      mockMessages(messages)

      const persisted = sessionStorage.getItem('__leanplum_inbox_messages')
      expect(persisted).toEqual(JSON.stringify(messages))
    })

    it('loads messages from session', () => {
      const id = '234##1'
      const messages = {
        [id]: { foo: 'bar' }
      }
      sessionStorage.setItem('__leanplum_inbox_messages', JSON.stringify(messages))

      inbox = new Inbox(createRequestSpy, onActionSpy)

      expect(inbox.allMessages().length).toEqual(1)
    })
  })

  function mockMessages(newsfeedMessages: any) {
    createRequestSpy.mockImplementationOnce(
      (method, args, options) => {
        options.response({
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
