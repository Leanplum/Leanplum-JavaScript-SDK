import MigrationManager, { MigrationState } from '../../src/MigrationManager'
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

  describe('fetchState', () => {
    it('fetches migration state with getMigrateState', () => {
      manager.fetchState();

      expect(createRequest).toHaveBeenCalledWith('getMigrateState', null, {
        sendNow: true,
        response: expect.any(Function)
      })
    })

    it('saves migration state to local storage', () => {
      jest.spyOn(StorageManager, 'save').mockImplementationOnce(() => {})

      createRequest.mockImplementationOnce((_, __, options) => options.response(LP_STATE))

      manager.fetchState();

      expect(StorageManager.save).toHaveBeenCalled()
      expect(StorageManager.save).toHaveBeenCalledWith('__leanplum_migration_state', JSON.stringify({
        state: 'lp',
        sha256: LP_STATE.response[0].sha256
      }))
    })

    it('loads migration state from cache upon init', () => {
      createRequest.mockImplementationOnce((_, __, options) => options.response(LP_STATE))

      manager.fetchState();

      manager = new MigrationManager(createRequest)

      expect(createRequest).toHaveBeenCalledTimes(1)
      expect(manager.getState()).toEqual(MigrationState.LEANPLUM)
    })
  })
})

