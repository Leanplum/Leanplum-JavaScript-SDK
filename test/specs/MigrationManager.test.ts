import { MigrationState } from '../../src/types/internal'
import MigrationManager from '../../src/MigrationManager'
import StorageManager from '../../src/StorageManager'

const LP_STATE = {
  "response": [
    {
      "sha256": "ded4fc0d016a7f1f89b97a8c2d2962712a8ee8c3c25ab8618123e5fc17c62674",
      "success": true,
      "state": "NONE",
      "sdk": "lp",
      "api": {
        "profile": "lp",
        "events": "lp"
      }
    }
  ]
};

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

      createRequest.mockImplementationOnce((_, __, options) => options.response(LP_STATE))

      manager.getState();

      expect(StorageManager.save).toHaveBeenCalled()
      expect(StorageManager.save).toHaveBeenCalledWith('__leanplum_migration_state', JSON.stringify(LP_STATE.response[0]))
    })

    it('loads migration state from cache upon init', () => {
      createRequest.mockImplementationOnce((_, __, options) => options.response(LP_STATE))

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
      createRequest.mockImplementationOnce((_, __, options) => options.response(LP_STATE))

      manager.getState();

      manager.verifyState('different-sha')

      expect(createRequest).toHaveBeenCalledTimes(2)
      expect(createRequest).toHaveBeenCalledWith('getMigrateState', null, {
        sendNow: true,
        response: expect.any(Function)
      })
    })

    it('does not perform fetch if the sha matches', () => {
      createRequest.mockImplementationOnce((_, __, options) => options.response(LP_STATE))

      manager.getState();

      const sha = LP_STATE.response[0].sha256

      manager.verifyState(sha)

      expect(createRequest).toHaveBeenCalledTimes(1)
    })
  })
})

