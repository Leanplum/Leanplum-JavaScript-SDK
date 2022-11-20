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

      expect(createRequest).toHaveBeenCalledWith('getMigrateState', null, {
        sendNow: true,
        response: expect.any(Function)
      })
    })

    it('saves migration state to local storage', () => {
      jest.spyOn(StorageManager, 'save').mockImplementationOnce(() => {})

      createRequest.mockImplementationOnce((_, __, options) => options.response(LEANPLUM))

      manager.getState();

      expect(StorageManager.save).toHaveBeenCalled()
      expect(StorageManager.save).toHaveBeenCalledWith('__leanplum_migration_state', JSON.stringify(LEANPLUM.response[0]))
    })

    it('loads migration state from cache upon init', () => {
      createRequest.mockImplementationOnce((_, __, options) => options.response(LEANPLUM))

      manager.getState();

      manager = new MigrationManager(createRequest)

      manager.getState((state: MigrationState) => {
        expect(createRequest).toHaveBeenCalledTimes(1)
        expect(state).toEqual(MigrationState.LEANPLUM)
      });

    })
  })

  describe('verifyState', () => {
    it('fetches new migration state if the sha differs', () => {
      createRequest.mockImplementationOnce((_, __, options) => options.response(LEANPLUM))

      manager.getState();

      manager.verifyState('different-sha')

      expect(createRequest).toHaveBeenCalledTimes(2)
      expect(createRequest).toHaveBeenCalledWith('getMigrateState', null, {
        sendNow: true,
        response: expect.any(Function)
      })
    })

    it('does not perform fetch if the sha matches', () => {
      createRequest.mockImplementationOnce((_, __, options) => options.response(LEANPLUM))

      manager.getState();

      const sha = LEANPLUM.response[0].sha256

      manager.verifyState(sha)

      expect(createRequest).toHaveBeenCalledTimes(1)
    })
  })

  describe('modifyRequest', () => {
    it('adds ct parameter when duplicating requests', () => {
      createRequest.mockImplementationOnce((_, __, options) => options.response(DUPLICATE))

      manager.getState();

      const args = new ArgsBuilder()

      const suppress = manager.duplicateRequest('start', args, {})

      expect(args.buildDict().ct).toBe(true)
      expect(suppress).toBe(false)
    })

    it('does not add ct parameter by default', () => {
      createRequest.mockImplementationOnce((_, __, options) => options.response(LEANPLUM))

      manager.getState();

      const args = new ArgsBuilder()

      const suppress = manager.duplicateRequest('start', args, {})

      expect(args.buildDict().ct).toBeUndefined()
      expect(suppress).toBe(false)
    })

    it('returns true if request should be suppressed', () => {
      createRequest.mockImplementationOnce((_, __, options) => options.response(CLEVERTAP))

      manager.getState();

      const args = new ArgsBuilder()

      const suppress = manager.duplicateRequest('start', args, {})

      expect(suppress).toBe(true)
    })

  })
})

