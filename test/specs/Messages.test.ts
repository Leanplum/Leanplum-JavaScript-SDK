import EventEmitter from '../../src/EventEmitter'
import Messages from '../../src/Messages'
import LocalStorageManager from '../../src/LocalStorageManager'

describe(Messages, () => {
  let events: EventEmitter
  let messages: Messages
  let showMessage: jest.Mock
  let createRequest: jest.Mock
  let navigationChange: jest.Mock

  beforeEach(() => {
    localStorage.clear()
    events = new EventEmitter()
    createRequest = jest.fn().mockImplementation((m, e, options) => options?.response())
    messages = new Messages(events, createRequest)

    navigationChange = jest.fn()
    showMessage = jest.fn()
    events.on('showMessage', showMessage)
    events.on('navigationChange', navigationChange)
  })

  afterEach(() => jest.clearAllMocks())

  const MESSAGE = {
    messageId: 12345,
    isRooted: true,
    action: {
      __name__: 'Custom',

      Title: 'Title text'
    }
  }

  const TRIGGER_ON_START = {
    verb: "OR",
    children: [ { subject: "start" } ]
  }

  describe('in-app messages', () => {
    it('does not trigger actions without whenTriggers', () => {
      events.emit('messagesReceived', {
        "123": {
          vars: {
            __name__:"Open URL",
            URL:"https://example.com/dismiss"
          }
        }
      })

      expect(showMessage).not.toHaveBeenCalled()
    })

    it('triggers showMessage for chained message', () => {
      events.emit('messagesReceived', {
        "123": {
          action: "Confirm",
          whenTriggers: TRIGGER_ON_START,
          parentCampaignId: 456,
          vars: {
            __name__: "Confirm",
            "Accept action": {
              "Chained message": "234",
              __name__:"Chain to Existing Message"
            }
          },
        },
        "234": {
          action: "Confirm",
          parentCampaignId: 456,
          vars: {
            __name__: "Confirm",
            Title: "Confirm again",
          },
        }
      })

      events.emit('start')

      expect(showMessage).toHaveBeenCalledTimes(1)

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
          action: "Confirm",
          whenTriggers: TRIGGER_ON_START,
          parentCampaignId: 456,
          vars: {
            __name__: "Confirm",
            Title: "Please confirm",
            "Accept action": {
              "Chained message": "234",
              __name__:"Chain to Existing Message"
            }
          },
        },
        "234": {
          action: "Open URL",
          parentCampaignId: 456,
          vars: {
            __name__: "Open URL",
            URL:"https://example.com/success"
          },
        }
      })

      events.emit('start')

      // trigger accept action
      showMessage.mock.calls[0][0].context.runActionNamed('Accept action')

      expect(showMessage).toHaveBeenCalledTimes(1)
      expect(navigationChange).toHaveBeenCalledTimes(1)
      expect(navigationChange).toHaveBeenCalledWith("https://example.com/success")
    })

    it('tracks actions', () => {
      events.emit('messagesReceived', {
        "123": {
          action: "Confirm",
          whenTriggers: TRIGGER_ON_START,
          parentCampaignId: 456,
          vars: {
            __name__: "Confirm",
            "Accept action": {
              "Chained message": "234",
              __name__:"Chain to Existing Message"
            }
          },
        },
        "234": {
          action: "Open URL",
          parentCampaignId: 456,
          vars: {
            __name__: "Open URL",
            URL:"https://example.com/success"
          }
        }
      })

      events.emit('start')

      // trigger accept action
      showMessage.mock.calls[0][0].context.runTrackedActionNamed('Accept action')

      expect(createRequest).toHaveBeenCalledTimes(2)
      const [action, args] = createRequest.mock.calls[0]
      expect(action).toEqual('track')
      expect(args.buildDict().messageId).toBe("123")

      expect(navigationChange).toHaveBeenCalledTimes(1)
      expect(navigationChange).toHaveBeenCalledWith("https://example.com/success")
    })

    it('applies defaults from action definition', () => {
      const actionDefinitions = {
        Confirm: {
          "kind": 3,
          "kinds": {
            "Title": "GROUP",
            "Title.Text": "TEXT",
            "ShowButton": "BOOLEAN"
          },
          values: {
            ShowButton: true,
            Title: {
              Text: "LeanplumSample"
            }
          }
        }
      }
      events.emit('messagesReceived', {
        "123": {
          action: "Confirm",
          whenTriggers: TRIGGER_ON_START,
          parentCampaignId: 456,
          vars: {
            __name__: "Confirm",
            ShowButton: false
          },
        },

        actionDefinitions
      })

      events.emit('start')

      const message = showMessage.mock.calls[0][0].message
      expect(message).toHaveProperty('Title.Text', 'LeanplumSample')
      expect(message).toHaveProperty('ShowButton', false)
    })
  })

  describe('prioritization', () => {
    it('chooses one in-app message to show', () => {
      events.emit('messagesReceived', {
        "123": {
          action: "Confirm",
          parentCampaignId: 456,
          whenTriggers: TRIGGER_ON_START,
          vars: { __name__:"Confirm", },
          priority: 1000
        },
        "456": {
          action: "Confirm",
          parentCampaignId: 456,
          whenTriggers: TRIGGER_ON_START,
          vars: { __name__:"Confirm", },
          priority: 1000
        }
      })
      events.emit('start')

      expect(showMessage).toHaveBeenCalledTimes(1)
    })
  })

  const MESSAGE_WITH_EVENT_TRIGGER = {
    countdown: 1,
    action: "Confirm",
    startTime: 1587034800000,
    parentCampaignId: 456,
    whenTriggers: {
      verb: "OR",
      children: [ {
        subject: "event",
        verb: "triggers",
        noun: "Add to cart",
        objects: [],
        secondaryVerb: "="
      } ]
    },
    vars: { __name__:"Confirm", }
  }

  describe('triggers', () => {
    it('triggers messages on event triggers', () => {
      events.emit('messagesReceived', { "123": MESSAGE_WITH_EVENT_TRIGGER })

      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('track', { eventName: 'Add to cart' })

      expect(showMessage).toHaveBeenCalledTimes(1)
      const message = showMessage.mock.calls[0][0].message
      expect(message.messageId).toEqual("123")
    })

    it('triggers messages on event with parameters', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenTriggers: {
          verb: "OR",
          children: [
            {
              subject: "event",
              objects: [
                "category",
                "Shoes"
              ],
              verb: "triggersWithParameter",
              noun: "Purchase",
              secondaryVerb: "="
            }
          ],
        },
      } })

      events.emit('track', { eventName: 'Purchase' })

      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('track', { eventName: 'Purchase', params: { category: 'shoes' } })

      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('ignores type on event parameters', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenTriggers: {
          verb: "OR",
          children: [
            {
              subject: "event",
              objects: [
                "category",
                "1"
              ],
              verb: "triggersWithParameter",
              noun: "Purchase",
              secondaryVerb: "="
            }
          ],
        },
      } })

      events.emit('track', { eventName: 'Purchase' })

      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('track', { eventName: 'Purchase', params: { category: 1 } })

      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('triggers messages on user attribute changes', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenTriggers: {
          verb: "OR",
          children: [
            {
              subject: "userAttribute",
              verb: "changes",
              noun: "email"
            }
          ],
        },
      } })

      events.emit('setUserAttribute', { name: 'User' })

      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('setUserAttribute', { email: 'user@example.com' })

      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('triggers messages on user attribute changes to value', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenTriggers: {
          verb: "OR",
          children: [
            {
              subject: "userAttribute",
              verb: "changesTo",
              noun: "email",
              objects: [
                "maintenance@example.com",
                "Admin@Example.Com"
              ]
            }
          ],
        },
      } })

      events.emit('setUserAttribute', { email: 'user@example.com' })

      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('setUserAttribute', { email: 'admin@example.com' })

      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('triggers messages on user attribute changes to null', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenTriggers: {
          verb: "OR",
          children: [
            {
              subject: "userAttribute",
              verb: "changesTo",
              noun: "email",
              objects: [
                null
              ]
            }
          ],
        },
      } })

      events.emit('setUserAttribute', { email: 'user@example.com' })
      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('setUserAttribute', { email: null })
      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('triggers messages on resume', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenTriggers: {
          verb: "OR",
          children: [ { subject: "resume", } ],
        },
      } })

      events.emit('resume')

      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('triggers resume messages on start', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenTriggers: {
          verb: "OR",
          children: [ { subject: "resume", } ],
        },
      } })

      events.emit('start')

      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('triggers messages on state changes', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenTriggers: {
          verb: "OR",
          children: [ {
            subject: "state",
            verb: "triggers",
            noun: "level2"
          } ],
        },
      } })

      events.emit('advanceState', { state: 'level1' })
      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('advanceState', { state: 'level2' })
      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('triggers messages on state changes with parameters', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenTriggers: {
          verb: "OR",
          children: [ {
            subject: "state",
            noun: "level2",
            verb: "triggersWithParameter",
            objects: [ "room", "two" ],
            secondaryVerb: "="
          } ],
        },
      } })

      events.emit('advanceState', { state: 'level2', params: { room: "one" } })
      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('advanceState', { state: 'level2', params: { room: "two" } })
      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('ignores the type of triggerWithParameter', () => {
      // because the dashboard always serializes strings
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenTriggers: {
          verb: "OR",
          children: [ {
            subject: "state",
            noun: "level2",
            verb: "triggersWithParameter",
            objects: [ "room", "2" ],
            secondaryVerb: "="
          } ],
        },
      } })

      events.emit('advanceState', { state: 'level2', params: { room: 1 } })
      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('advanceState', { state: 'level2', params: { room: 2 } })
      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('ignores the case of triggerWithParameter', () => {
      // to match the behavior of other SDKs
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenTriggers: {
          verb: "OR",
          children: [ {
            subject: "state",
            noun: "level2",
            verb: "triggersWithParameter",
            objects: [ "room", "TWO" ],
            secondaryVerb: "="
          } ],
        },
      } })

      events.emit('advanceState', { state: 'level2', params: { room: "one" } })
      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('advanceState', { state: 'level2', params: { room: "two" } })
      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('does not trigger messages if trigger event does not match', () => {
      events.emit('messagesReceived', { "123": MESSAGE_WITH_EVENT_TRIGGER })

      events.emit('start', { success: true })

      expect(showMessage).toHaveBeenCalledTimes(0)
    })

    it('does not show message if trigger event does not match', () => {
      events.emit('messagesReceived', { "123": MESSAGE_WITH_EVENT_TRIGGER })

      events.emit('track', { eventName: 'Checkout' })

      expect(showMessage).toHaveBeenCalledTimes(0)
    })

    it('does not show messages without triggers', () => {
      const message = { ...MESSAGE_WITH_EVENT_TRIGGER }
      delete message.whenTriggers
      events.emit('messagesReceived', { "123": message })

      events.emit('track', { eventName: 'Add to cart' })

      expect(showMessage).toHaveBeenCalledTimes(0)
    })

    it('does not trigger messages outside the active period', () => {
      const now = Date.now()
      const message = {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        startTime: now + 10,
        endTime: now + 20
      }
      events.emit('messagesReceived', { "123": message })

      events.emit('track', { eventName: 'Add to cart' })

      expect(showMessage).toHaveBeenCalledTimes(0)
    })
  })

  describe('limits', () => {
    it('honors limitSession', () => {
      const message = {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenLimits: {
          verb: "AND",
          children: [
            { subject: "times", verb: "limitSession", noun: 1 }
          ],
        },
      }
      events.emit('messagesReceived', { "123": message })

      events.emit('track', { eventName: 'Add to cart' })
      // track impression
      showMessage.mock.calls[0][0].context.track()

      events.emit('track', { eventName: 'Add to cart' })

      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('honors onNthOccurrence', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenLimits: {
          verb: "AND",
          children: [
            { subject: "onNthOccurrence", verb: "", noun: 3 }
          ],
        },
      } })

      events.emit('track', { eventName: 'Add to cart' }) // 1
      events.emit('track', { eventName: 'Add to cart' }) // 2

      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('track', { eventName: 'Add to cart' }) // 3

      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('honors everyNthOccurrence', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenLimits: {
          verb: "AND",
          children: [
            { subject: "everyNthOccurrence", verb: "", noun: 2 }
          ],
        },
      } })

      events.emit('track', { eventName: 'Add to cart' }) // 1
      expect(showMessage).toHaveBeenCalledTimes(0)

      events.emit('track', { eventName: 'Add to cart' }) // 2
      expect(showMessage).toHaveBeenCalledTimes(1)

      events.emit('track', { eventName: 'Add to cart' }) // 3
      expect(showMessage).toHaveBeenCalledTimes(1)

      events.emit('track', { eventName: 'Add to cart' }) // 4
      expect(showMessage).toHaveBeenCalledTimes(2)
    })

    it('resets session limits on next start', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenLimits: {
          verb: "AND",
          children: [
            { subject: "times", verb: "limitSession", noun: 1 }
          ],
        },
      } })

      events.emit('track', { eventName: 'Add to cart' })
      showMessage.mock.calls[0][0].context.track() // track impression
      events.emit('start') // new session
      events.emit('track', { eventName: 'Add to cart' })

      expect(showMessage).toHaveBeenCalledTimes(2)
    })


    // whenLimits format for "X in Y" occurrences:
    //   noun - amount of allowed occurrences
    //   verb - time unit (limitSession|limitSecond|limitMinute|limitHour...)
    //   objects[0] - number of time units
    //   => `noun` in `objects[0]` `verb`, e.g. "limit to 2 occurrences in 5 minutes"

    const SECOND = 1000
    const MINUTE = 60*SECOND
    const HOUR = 60*MINUTE

    it('honors аn "X times in Y minutes" limit', () => {
      let now = 0
      jest.spyOn(Date, 'now').mockImplementation(() => now)

      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenLimits: {
          verb: "AND",
          children: [
            { subject: "times", objects: [1], verb: "limitMinute", noun: 1}
          ],
        },
      } })

      events.emit('track', { eventName: 'Add to cart' })
      expect(showMessage).toHaveBeenCalledTimes(1)
      showMessage.mock.calls[0][0].context.track()

      now = MINUTE - 1
      events.emit('track', { eventName: 'Add to cart' })
      expect(showMessage).toHaveBeenCalledTimes(1)

      now = MINUTE + 1
      events.emit('track', { eventName: 'Add to cart' })
      expect(showMessage).toHaveBeenCalledTimes(2)
    })

    it('honors аn "X times in Y hours" limit', () => {
      let now = 0
      jest.spyOn(Date, 'now').mockImplementation(() => now)

      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenLimits: {
          verb: "AND",
          children: [
            { subject: "times", objects: [2], verb: "limitHour", noun: 1}
          ],
        },
      } })

      events.emit('track', { eventName: 'Add to cart' })
      expect(showMessage).toHaveBeenCalledTimes(1)
      showMessage.mock.calls[0][0].context.track()

      now = 2*HOUR - 1
      events.emit('track', { eventName: 'Add to cart' })
      expect(showMessage).toHaveBeenCalledTimes(1)

      now = 2*HOUR + 1
      events.emit('track', { eventName: 'Add to cart' })
      expect(showMessage).toHaveBeenCalledTimes(2)
    })

    it('honors аn "X times in Y seconds" limit', () => {
      let now = 0
      jest.spyOn(Date, 'now').mockImplementation(() => now)

      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenLimits: {
          verb: "AND",
          children: [
            { subject: "times", objects: [1], verb: "limitSecond", noun: 2}
          ],
        },
      } })

      events.emit('track', { eventName: 'Add to cart' })
      expect(showMessage).toHaveBeenCalledTimes(1)
      showMessage.mock.calls[0][0].context.track()

      now = SECOND - 1

      events.emit('track', { eventName: 'Add to cart' })
      expect(showMessage).toHaveBeenCalledTimes(2)
      showMessage.mock.calls[1][0].context.track()

      events.emit('track', { eventName: 'Add to cart' })
      expect(showMessage).toHaveBeenCalledTimes(2)

      now = SECOND + 1

      events.emit('track', { eventName: 'Add to cart' })
      expect(showMessage).toHaveBeenCalledTimes(3)
    })

    it('honrs limitUser', () => {
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenLimits: {
          verb: "AND",
          children: [
            {
              subject: "times",
              objects: [],
              verb: "limitUser",
              noun: 2,
              secondaryVerb: "="
            }
          ]
        }
      } })

      events.emit('track', { eventName: 'Add to cart' })
      showMessage.mock.calls[0][0].context.track()
      events.emit('track', { eventName: 'Add to cart' })
      showMessage.mock.calls[0][0].context.track()
      events.emit('track', { eventName: 'Add to cart' })
      expect(showMessage).toHaveBeenCalledTimes(2)
    })
  })

  describe('persistence', () => {
    it('persists message cache', () => {
      const now = Date.now()

      jest.spyOn(LocalStorageManager, 'saveToLocalStorage').mockImplementation(() => {})
      const message = {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenLimits: {
          verb: "AND",
          children: [ { subject: "times", verb: "limitSession", noun: 1 } ],
        },
      }
      events.emit('messagesReceived', { "123": message })

      expect(LocalStorageManager.saveToLocalStorage).toHaveBeenCalled()
      expect(LocalStorageManager.saveToLocalStorage).toHaveBeenCalledWith('__leanplum_message_cache', JSON.stringify({ '123': message }))
    })

    it('loads messages from localStorage', () => {
      jest.spyOn(LocalStorageManager, 'getFromLocalStorage').mockImplementation(
        (key) => {
          if (key === '__leanplum_message_cache') {
            return JSON.stringify({
              "123": {
                ...MESSAGE_WITH_EVENT_TRIGGER,
                whenLimits: {
                  verb: "AND",
                  children: [ { subject: "times", verb: "limitSession", noun: 1 } ],
                },
              }
            })
          }
        }
      )

      events.emit('resume')

      events.emit('track', { eventName: 'Add to cart' })

      expect(showMessage).toHaveBeenCalledTimes(1)
    })

    it('persists message occurrences', () => {
      const now = Date.now()

      jest.spyOn(LocalStorageManager, 'saveToLocalStorage').mockImplementation(() => {})
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenLimits: {
          verb: "AND",
          children: [ { subject: "times", verb: "limitSession", noun: 1 } ],
        },
      } })

      events.emit('track', { eventName: 'Add to cart' })
      showMessage.mock.calls[0][0].context.track()

      expect(LocalStorageManager.saveToLocalStorage).toHaveBeenCalled()
      expect(LocalStorageManager.saveToLocalStorage).toHaveBeenCalledWith('__leanplum_message_occurrences', JSON.stringify({
        session: { '123': 1 },
        triggers: { '123': [ now ] },
        occurrences: { '123': [ now ] },
      }))
    })

    it('persists trigger occurrences, even if message limits are enforced', () => {
      const now = Date.now()

      jest.spyOn(LocalStorageManager, 'saveToLocalStorage').mockImplementation(() => {})
      events.emit('messagesReceived', { "123": {
        ...MESSAGE_WITH_EVENT_TRIGGER,
        whenLimits: {
          verb: "AND",
          children: [ { subject: "times", verb: "limitSession", noun: 0 } ],
        },
      } })

      events.emit('track', { eventName: 'Add to cart' })

      expect(LocalStorageManager.saveToLocalStorage).toHaveBeenCalled()
      expect(LocalStorageManager.saveToLocalStorage).toHaveBeenCalledWith('__leanplum_message_occurrences', JSON.stringify({
        session: {},
        triggers: { '123': [ now ] },
        occurrences: {},
      }))
    })

    it('loads message occurrences from localStorage', () => {
      const now = Date.now()

      jest.spyOn(LocalStorageManager, 'getFromLocalStorage').mockImplementation(
        (key) => {
          if (key === '__leanplum_message_cache') {
            return JSON.stringify({
              "123": {
                ...MESSAGE_WITH_EVENT_TRIGGER,
                whenLimits: {
                  verb: "AND",
                  children: [ { subject: "times", verb: "limitSession", noun: 1 } ],
                },
              }
            })
          } else if (key === '__leanplum_message_occurrences') {
            return JSON.stringify({
              session: { '123': 1 },
              triggers: { '123': [ now ] },
              occurrences: { '123': [ now ] },
            })
          }
        }
      )

      events.emit('resume')

      events.emit('track', { eventName: 'Add to cart' })

      expect(showMessage).toHaveBeenCalledTimes(0)
    })
  })

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
