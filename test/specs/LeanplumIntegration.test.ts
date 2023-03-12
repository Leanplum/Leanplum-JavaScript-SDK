import clevertap from 'clevertap-web-sdk'
import LeanplumInternal from '../../src/LeanplumInternal'
import { startResponse, migrationResponses } from '../data/responses'
import { windowMock } from '../mocks/external'
import { networkMock, mockNextNetworkRequest, lpSocketMock, varCacheMock } from '../mocks/internal'

jest.mock('../../src/SocketIoClient', () => jest.fn().mockImplementation(() => lpSocketMock))
jest.mock('../../src/Network', () => jest.fn().mockImplementation(() => networkMock))
jest.mock('../../src/VarCache', () => jest.fn().mockImplementation(() => varCacheMock))

const subscription: PushSubscription = {
  getKey: jest.fn(() => new ArrayBuffer(0)),
  endpoint: '',
  expirationTime: Date.now() + 10000,
  options: {
    applicationServerKey: new ArrayBuffer(0),
    userVisibleOnly: true
  },
  toJSON: () => ({ endpoint: '' }),
  unsubscribe: jest.fn()
}
const pushManager: PushManager = {
  getSubscription: jest.fn(() => Promise.resolve(subscription)),
  subscribe: jest.fn(() => Promise.resolve(subscription)),
  permissionState: jest.fn()
}
const sw: Partial<ServiceWorkerRegistration> = {
  pushManager
}

Object.defineProperty(window.navigator, 'serviceWorker', {
  writable: false,
  value: {
    getRegistration: jest.fn().mockReturnValue(sw),
    register: jest.fn().mockReturnValue(sw),
    pushManager: jest.fn().mockReturnValue(pushManager)
  }
});

Object.defineProperty(window, 'PushManager', {
  writable: false,
  value: pushManager
});

describe('Integration Tests', () => {
  let lp: LeanplumInternal

  beforeEach(() => {
    localStorage.clear()
    jest.spyOn(clevertap.notifications, 'push');
    lp = new LeanplumInternal(windowMock)
    lp.setAppIdForDevelopmentMode('app_123', 'dev_123')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('calls variable changed callback after start', (done) => {
    const userId = '123'
    const variables = {
      gender: 'female',
      age: 27
    }

    mockNextNetworkRequest(migrationResponses.LP)
    mockNextNetworkRequest(startResponse)

    lp.setVariables(variables)
    lp.addVariablesChangedHandler(() => {
      expect(lp.getVariables().gender).toBe(variables.gender)
      expect(lp.getVariables().age).toBe(variables.age)
    })
    lp.start(userId, {}, (success) => {
      expect(success).toBe(true)
      return done(success ? null : success)
    })
  })

  it('pushes previously registered notification token', (done) => {
    mockNextNetworkRequest(migrationResponses.LP)
    mockNextNetworkRequest(startResponse)

    lp.start(async function f() {
      await lp.registerForWebPush('/sw.test.js')

      lp.removeStartResponseHandler(f)

      // no sync while in lp mode
      expect(clevertap.notifications.push).toHaveBeenCalledTimes(0)

      // server config changes
      mockNextNetworkRequest({
        response: [{
          success: true,
        }],
        migrateState: {
          sha256: 'ct81dc2ba80cbf55b1977a51d12c69d8696cf549926b7a71e95f0321879faf1a' // triggers config refresh
        }
      })
      mockNextNetworkRequest(migrationResponses.CLEVERTAP)
      lp.track('some-event')

      mockNextNetworkRequest(startResponse)

      // expect ct push to register with next start
      lp.start()

      await new Promise(r => setTimeout(r, 100));

      expect(clevertap.notifications.push).toHaveBeenCalledTimes(1)
      done()
    })
  })

  it('pushes events to CT after migrating mid-session', async () => {
    jest.spyOn(clevertap.event, 'push')
    jest.spyOn(clevertap.onUserLogin, 'push')
    mockNextNetworkRequest(migrationResponses.LP)
    mockNextNetworkRequest(startResponse)
    const userId = 'jon'

    lp.start(userId)


    // migration state LP -> DUPLICATE after session start

    const successResponse = {
      response: [{ success: true }],
      migrateState: {
        sha256: migrationResponses.DUPLICATE.response[0].sha256
      }
    }
    mockNextNetworkRequest(successResponse)
    mockNextNetworkRequest(migrationResponses.DUPLICATE)
    mockNextNetworkRequest(successResponse)

    await sleep(100)

    lp.track('some-event')
    lp.track('duplicated-event')

    await sleep(100)

    expect(clevertap.onUserLogin.push).toHaveBeenCalledWith({
      Site: {
        Identity: 'jon',
        tz: expect.any(String)
      }
    })
    expect(clevertap.event.push)
      .toHaveBeenCalledWith('duplicated-event', {})
  })
})

function sleep(ms = 100) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
