import clevertap from 'clevertap-web-sdk'
import { MigrationState } from '../../src/types/internal'
import MigrationManager from '../../src/MigrationManager'
import StorageManager from '../../src/StorageManager'
import ArgsBuilder from '../../src/ArgsBuilder'
import { migrationResponses } from '../data/responses'

const LEANPLUM = migrationResponses.LP;
const DUPLICATE = migrationResponses.DUPLICATE;
const CLEVERTAP = migrationResponses.CLEVERTAP;

describe(MigrationManager, () => {
  let createRequest: jest.Mock
  let manager: MigrationManager

  beforeEach(() => {
    localStorage.clear()
    createRequest = jest.fn().mockImplementation((_, __, options) => options?.response())
    manager = new MigrationManager(createRequest)
  })

  afterEach(() => jest.clearAllMocks())

  describe('getState', () => {
    it('fetches migration state with getMigrateState', () => {
      manager.getState();

      expect(createRequest).toHaveBeenCalledWith('getMigrateState', expect.anything(), {
        sendNow: true,
        response: expect.any(Function)
      })
    })

    it('saves migration state to local storage', () => {
      jest.spyOn(StorageManager, 'save').mockImplementationOnce(() => {})

      setMigrationState(LEANPLUM)

      expect(StorageManager.save).toHaveBeenCalled()
      expect(StorageManager.save).toHaveBeenCalledWith('__leanplum_migration_state', JSON.stringify(LEANPLUM.response[0]))
    })

    it('loads migration state from cache upon init', () => {
      setMigrationState(LEANPLUM)

      manager = new MigrationManager(createRequest)

      manager.getState((state: MigrationState) => {
        expect(createRequest).toHaveBeenCalledTimes(1)
        expect(state).toEqual(MigrationState.LEANPLUM)
      });

    })
  })

  describe('verifyState', () => {
    it('fetches new migration state if the sha differs', () => {
      setMigrationState(LEANPLUM)

      manager.verifyState('different-sha')

      expect(createRequest).toHaveBeenCalledTimes(1)
      expect(createRequest).toHaveBeenCalledWith('getMigrateState', expect.anything(), {
        sendNow: true,
        response: expect.any(Function)
      })
    })

    it('does not perform fetch if the sha matches', () => {
      setMigrationState(LEANPLUM)

      const sha = LEANPLUM.response[0].sha256

      manager.verifyState(sha)

      expect(createRequest).toHaveBeenCalledTimes(1)
    })
  })

  describe('duplicateRequest', () => {
    it('adds ct parameter when duplicating requests', () => {
      setMigrationState(DUPLICATE)

      const args = new ArgsBuilder()

      const suppress = manager.duplicateRequest('start', args, {})

      expect(args.buildDict().ct).toBe(true)
      expect(suppress).toBe(false)
    })

    it('does not add ct parameter by default', () => {
      setMigrationState(LEANPLUM)

      const args = new ArgsBuilder()

      const suppress = manager.duplicateRequest('start', args, {})

      expect(args.buildDict().ct).toBeUndefined()
      expect(suppress).toBe(false)
    })

    it('does not crash when request has no args', () => {
      setMigrationState(DUPLICATE)

      const suppress = manager.duplicateRequest('getNewsfeedMessages', undefined, {})

      expect(suppress).toBe(false)
    })

    it('returns true if request should be suppressed', () => {
      setMigrationState(CLEVERTAP)

      const args = new ArgsBuilder()

      const suppress = manager.duplicateRequest('start', args, {})

      expect(suppress).toBe(true)
    })

    it('sends request to clevertap if mode is duplicate', () => {
      setMigrationState(DUPLICATE)

      jest.spyOn(clevertap.event, 'push')

      const args = new ArgsBuilder()
        .add('event', 'View Product')
        .add('value', 5.0)
        .add('info', 'test')
        .add('params', JSON.stringify({ param1: 'value1' }))

      manager.duplicateRequest('track', args, {})

      expect(clevertap.event.push).toHaveBeenCalledTimes(1)
      expect(clevertap.event.push).toHaveBeenCalledWith(
        'View Product',
        {
          param1: "value1",
          value: 5.0,
          info: "test"
        }
      )
    })

    it('does not send request to clevertap if mode is lp-only', () => {
      setMigrationState(LEANPLUM)

      jest.spyOn(clevertap.event, 'push')

      const args = new ArgsBuilder()
        .add('event', 'View Product')
        .add('value', 5.0)
        .add('info', 'test')
        .add('params', JSON.stringify({ param1: 'value1' }))

      const suppress = manager.duplicateRequest('track', args, {})

      expect(suppress).toBe(false)
      expect(clevertap.event.push).toHaveBeenCalledTimes(0)
    })

    it('does not send engagement events', () => {
      setMigrationState(DUPLICATE)

      jest.spyOn(clevertap.event, 'push')

      const args = new ArgsBuilder()
        .add('event', 'View Product')
        .add('messageId', '123')
        .add('params', JSON.stringify({ param1: 'value1' }))

      manager.duplicateRequest('track', args, {})

      expect(clevertap.event.push).toHaveBeenCalledTimes(0)
    })

    it('encodes array parameters', () => {
      setMigrationState(DUPLICATE)

      jest.spyOn(clevertap.event, 'push')

      const args = new ArgsBuilder()
        .add('event', 'Add to cart')
        .add('params', JSON.stringify({
          arr: [ 'item1', 'item2' ]
        }))

      manager.duplicateRequest('track', args, {})

      expect(clevertap.event.push).toHaveBeenCalledTimes(1)
      expect(clevertap.event.push).toHaveBeenCalledWith(
        'Add to cart',
        {
          arr: '[item1,item2]'
        }
      )
    })

    it('tracks purchases as charged event', () => {
      setMigrationState(DUPLICATE)

      jest.spyOn(clevertap.event, 'push')

      const args = new ArgsBuilder()
        .add('event', 'Purchase')
        .add('value', 8.0)
        .add('currencyCode', 'PHP')

      manager.duplicateRequest('track', args, { isPurchase: true })

      expect(clevertap.event.push).toHaveBeenCalledTimes(1)
      expect(clevertap.event.push).toHaveBeenCalledWith(
        'Charged',
        {
          value: 8.0,
          currencyCode: 'PHP'
        }
      )
    })

    it(`prefixes state changes with 'state_'`, () => {
      setMigrationState(DUPLICATE)

      jest.spyOn(clevertap.event, 'push')

      const args = new ArgsBuilder()
        .add('state', 'level')
        .add('value', 10)
        .add('params', JSON.stringify({
          'location': 'castle'
        }))

      manager.duplicateRequest('advance', args, {})

      expect(clevertap.event.push).toHaveBeenCalledTimes(1)
      expect(clevertap.event.push).toHaveBeenCalledWith(
        'state_level',
        {
          value: 10,
          location: 'castle'
        }
      )
    })

    it(`sends user attributes with profilePush`, () => {
      setMigrationState(DUPLICATE)

      jest.spyOn(clevertap.profile, 'push')

      const args = new ArgsBuilder()
        .add('userAttributes', JSON.stringify({
          'age': 42,
          'interests': ['jumping','running']
        }))

      manager.duplicateRequest('setUserAttributes', args, {})

      expect(clevertap.profile.push).toHaveBeenCalledTimes(1)
      expect(clevertap.profile.push).toHaveBeenCalledWith({
        Site: {
          age: 42,
          interests: '[jumping,running]'
        }
      })
    })

    it(`uses attribute mapping from migration state`, () => {
      setMigrationState(DUPLICATE)

      jest.spyOn(clevertap.profile, 'push')

      const args = new ArgsBuilder()
        .add('userAttributes', JSON.stringify({
          'name1': 'foo'
        }))

      manager.duplicateRequest('setUserAttributes', args, {})

      expect(clevertap.profile.push).toHaveBeenCalledTimes(1)
      expect(clevertap.profile.push).toHaveBeenCalledWith({
        Site: {
          'ct-name1': 'foo'
        }
      })
    })

    it(`sets user ids with onUserLogin`, () => {
      setMigrationState(DUPLICATE)

      jest.spyOn(clevertap.profile, 'push')
      jest.spyOn(clevertap.onUserLogin, 'push')

      const args = new ArgsBuilder()
        .add('newUserId', 'jeff42')

      manager.duplicateRequest('setUserAttributes', args, {})

      expect(clevertap.profile.push).toHaveBeenCalledTimes(0)
      expect(clevertap.onUserLogin.push).toHaveBeenCalledTimes(1)
      expect(clevertap.onUserLogin.push).toHaveBeenCalledWith({
        Site: {
          'Identity': 'jeff42',
          'tz': expect.any(String)
        }
      })
    })

    it(`sends user attributes along with login`, () => {
      setMigrationState(DUPLICATE)

      jest.spyOn(clevertap.profile, 'push')
      jest.spyOn(clevertap.onUserLogin, 'push')

      const args = new ArgsBuilder()
        .add('newUserId', 'jeff42')
        .add('userAttributes', JSON.stringify({ name: 'Jeff' }))

      manager.duplicateRequest('setUserAttributes', args, {})

      expect(clevertap.profile.push).toHaveBeenCalledTimes(0)
      expect(clevertap.onUserLogin.push).toHaveBeenCalledTimes(1)
      expect(clevertap.onUserLogin.push).toHaveBeenCalledWith({
        Site: {
          'Identity': 'jeff42',
          'name': 'Jeff',
          'tz': expect.any(String)
        }
      })
    })

    it(`sends onUserLogin on start when device is not anonymous`, () => {
      localStorage.setItem('__leanplum_device_id', 'd1')
      localStorage.setItem('__leanplum_user_id', 'u1')
      manager = new MigrationManager(createRequest)

      setMigrationState(DUPLICATE)

      jest.spyOn(clevertap.onUserLogin, 'push')

      const args = new ArgsBuilder()

      manager.duplicateRequest('start', args, {})

      expect(clevertap.onUserLogin.push).toHaveBeenCalledTimes(1)
      expect(clevertap.onUserLogin.push).toHaveBeenCalledWith({
        Site: {
          'Identity': 'u1',
          'tz': expect.any(String)
        }
      })
    })

    it(`sends onUserLogin on start with userId parameter`, () => {
      localStorage.setItem('__leanplum_device_id', 'anon1')
      localStorage.setItem('__leanplum_user_id', 'anon1')
      manager = new MigrationManager(createRequest)

      setMigrationState(DUPLICATE)

      jest.spyOn(clevertap.onUserLogin, 'push')

      const args = new ArgsBuilder()
      args.add('userId', 'john')

      manager.duplicateRequest('start', args, {})

      expect(clevertap.onUserLogin.push).toHaveBeenCalledTimes(1)
      expect(clevertap.onUserLogin.push).toHaveBeenCalledWith({
        Site: {
          'Identity': 'john',
          'tz': expect.any(String)
        }
      })
    })
  })

  function setMigrationState(state: Object): void {
    createRequest.mockImplementationOnce((_, __, options) => options.response(state))

    manager.getState();
  }
})

