import Constants from '../../src/Constants'
import LocalStorageManager from '../../src/LocalStorageManager'
import PushManager from '../../src/PushManager'

describe(PushManager, () => {
  let pushManager: PushManager
  const createRequestSpy: jest.Mock<() => void> = jest.fn()

  beforeEach(() => {
    pushManager = new PushManager(createRequestSpy)
  })

  afterEach(() => {
    createRequestSpy.mockClear()
  })

  describe('isWebPushSupported', () => {
    let windowMock: jest.SpyInstance<Window & typeof globalThis, []>

    beforeAll(() => {
      windowMock = jest.spyOn(globalThis, 'window', 'get')
    })

    afterAll(() => {
      windowMock.mockReset()
    })

    it('returns `false` when navigator is undefined', () => {
      windowMock.mockReturnValue({ PushManager: {} } as any)

      expect(pushManager.isWebPushSupported()).toBeFalsy()
    })

    it('returns `false` when serviceWorker is undefined', () => {
      windowMock.mockReturnValue({ navigator: {}, PushManager: {} } as any)

      expect(pushManager.isWebPushSupported()).toBeFalsy()
    })

    it('returns `false` when PushManager is undefined', () => {
      windowMock.mockReturnValue({ navigator: { serviceWorker: {} } } as any)

      expect(pushManager.isWebPushSupported()).toBeFalsy()
    })

    it('returns `true` when supported', () => {
      windowMock.mockReturnValue({
        navigator: {
          serviceWorker: {}
        },
        PushManager: {}
      } as any)

      expect(pushManager.isWebPushSupported()).toBeTruthy()
    })
  })

  describe('isWebPushSubscribed', () => {
    let windowMock: jest.SpyInstance<Window & typeof globalThis, []>

    beforeAll(() => {
      windowMock = jest.spyOn(globalThis, 'window', 'get')
    })

    afterAll(() => {
      windowMock.mockReset()
    })

    it('returns `false` when Web Push is not supported', async () => {
      windowMock.mockReturnValue({} as any)

      expect(await pushManager.isWebPushSubscribed()).toBeFalsy()
    })

    it('returns `false` with no registration', async () => {
      windowMock.mockReturnValue({
        navigator: {
          serviceWorker: {
            getRegistration: () => null
          }
        },
        PushManager: {}
      } as any)

      expect(await pushManager.isWebPushSubscribed()).toBeFalsy()
    })

    it('returns `false` with no subscription', async () => {
      windowMock.mockReturnValue({
        navigator: {
          serviceWorker: {
            getRegistration: () => ({
              pushManager: {
                getSubscription: () => null
              }
            })
          }
        },
        PushManager: {}
      } as any)

      expect(await pushManager.isWebPushSubscribed()).toBeFalsy()
    })

    it('returns `true` when there is subscription', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            getRegistration: () => ({
              pushManager: {
                getSubscription: () => ({
                  endpoint: 'test'
                })
              }
            })
          }
        },
        PushManager: {}
      } as any)

      expect(await pushManager.isWebPushSubscribed()).toBeTruthy()
      expect(createRequestSpy).toHaveBeenCalledTimes(1)
    })

    it('updates subscription on server with new subscription', async () => {
      let subscription: any = null
      const registration = {
        pushManager: {
          getSubscription: () => subscription,
          subscribe: () => subscription
        }
      }

      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            getRegistration: () => registration,
            register: () => registration
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))

      subscription = {
        endpoint: 'old_subscription'
      }

      await pushManager.subscribeUser()

      subscription = {
        endpoint: 'new_subscription'
      }

      await pushManager.isWebPushSubscribed()

      expect(createRequestSpy).toHaveBeenCalledTimes(2)
    })
  })

  describe('register', () => {
    let windowMock: jest.SpyInstance<Window & typeof globalThis, []>
    const callback = jest.fn()

    beforeAll(() => {
      windowMock = jest.spyOn(globalThis, 'window', 'get')
    })

    afterAll(() => {
      windowMock.mockReset()
    })

    afterEach(() => {
      LocalStorageManager.removeFromLocalStorage(Constants.DEFAULT_KEYS.PUSH_SUBSCRIPTION)
      callback.mockClear()
    })

    it('calls callback with `false` when Web Push is not supported', async () => {
      windowMock.mockReturnValue({} as any)

      jest.spyOn(console, 'log').mockImplementationOnce(() => {})
      await pushManager.register('', callback)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith(false)
    })

    it('calls callback with `false` when there is an error', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: null // cause an exception
            })
          }
        },
        PushManager: {}
      } as any)

      jest.spyOn(console, 'log').mockImplementationOnce(() => {})
      await pushManager.register('', callback)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith(false)
    })

    it('calls callback with `false` when not subscribed', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => null
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', callback)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith(false)
    })

    it('calls callback with `true` when subscribed', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => ({
                  endpoint: 'test'
                })
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', callback)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith(true)
    })

    it('uses default SW URL when empty provided', async () => {
      const register = jest.fn().mockReturnValue({
        pushManager: {
          getSubscription: () => null
        }
      })
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', callback)

      expect(register).toHaveBeenCalledTimes(1)
      expect(register).toHaveBeenCalledWith('/sw.min.js', null)
    })

    it('does not update subscription on server when not subscribed', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => null
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))

      expect(createRequestSpy).toHaveBeenCalledTimes(0)
    })

    it('updates subscription on server when subscribed', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => ({
                  endpoint: 'test'
                })
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))

      expect(createRequestSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('subscribeUser', () => {
    let windowMock: jest.SpyInstance<Window & typeof globalThis, []>

    beforeAll(() => {
      windowMock = jest.spyOn(globalThis, 'window', 'get')
    })

    afterAll(() => {
      windowMock.mockReset()
    })

    afterEach(() => {
      LocalStorageManager.removeFromLocalStorage(Constants.DEFAULT_KEYS.PUSH_SUBSCRIPTION)
    })

    it('throws error when error occurs', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => null,
                subscribe: undefined // cause an exception
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))

      await expect(pushManager.subscribeUser()).rejects.toThrowError()
    })

    it('throws error when not subscribed', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => null,
                subscribe: () => null
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))

      await expect(pushManager.subscribeUser()).rejects.toThrowError()
    })

    it('returns `true` on success', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => null,
                subscribe: () => ({
                  endpoint: 'test'
                })
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))

      expect(await pushManager.subscribeUser()).toBe(true)
    })

    it('does not update subscription on server when not subscribed', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => null,
                subscribe: () => null
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))
      await pushManager.subscribeUser().catch(() => { /* noop - expected */ })

      expect(createRequestSpy).toHaveBeenCalledTimes(0)
    })

    it('updates subscription on server when subscribed', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => null,
                subscribe: () => ({
                  endpoint: 'test'
                })
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))
      await pushManager.subscribeUser()

      expect(createRequestSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('unsubscribeUser', () => {
    let windowMock: jest.SpyInstance<Window & typeof globalThis, []>

    beforeAll(() => {
      windowMock = jest.spyOn(globalThis, 'window', 'get')
    })

    afterAll(() => {
      windowMock.mockReset()
    })

    afterEach(() => {
      LocalStorageManager.removeFromLocalStorage(Constants.DEFAULT_KEYS.PUSH_SUBSCRIPTION)
    })

    it('throws error when error occurs', async () => {
      let subscriptionValues: any[] = [null, { endpoint: 'test' }, {}]

      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => subscriptionValues.shift()
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))

      await expect(pushManager.unsubscribeUser()).rejects.toThrowError()
    })

    it('throws error when no subscription', async () => {
      let subscriptionValues: any[] = [null, { endpoint: 'test' }, null]

      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => subscriptionValues.shift()
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))

      await expect(pushManager.unsubscribeUser()).rejects.toThrowError()
    })

    it('resolves when not subscribed', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => null
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))

      await expect(pushManager.unsubscribeUser()).resolves.not.toThrowError()
    })

    it('resolves when unsubscribe was successful', async () => {
      windowMock.mockReturnValue({
        atob,
        btoa,
        navigator: {
          serviceWorker: {
            register: () => ({
              pushManager: {
                getSubscription: () => ({
                  endpoint: 'test',
                  unsubscribe: () => Promise.resolve(true)
                })
              }
            })
          }
        },
        PushManager: {}
      } as any)

      await pushManager.register('', (x) => Promise.resolve(x))

      await expect(pushManager.unsubscribeUser()).resolves.not.toThrowError()
    })
  })
})
