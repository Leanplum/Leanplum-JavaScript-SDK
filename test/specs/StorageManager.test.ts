import StorageManager from '../../src/StorageManager'

describe(StorageManager, () => {
  let key = ''

  beforeEach(() => key = `key${Math.floor(Math.random() * 10000)}`)

  afterEach(() => {
    localStorage.clear()
    sessionStorage.clear()
    jest.resetAllMocks()
  })

  describe('localStorage', () => {
    it('retrieves key from storage', () => {
      localStorage[key] = 'foo'

      expect(StorageManager.get(key, 'local')).toEqual('foo')
    })

    it('removes key from storage', () => {
      localStorage[key] = 'foo'

      StorageManager.remove(key)

      expect(StorageManager.get(key, 'local')).toEqual(undefined)
    })

    it('falls back to alternate storage if storage is unavailable', () => {
      jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw 1 })

      expect(StorageManager.get(key, 'local')).toEqual(undefined)

      StorageManager.save(key, 'foo', 'local')

      expect(StorageManager.get(key, 'local')).toEqual('foo')
    })
  })

  describe('sessionStorage', () => {
    it('removes key from storage', () => {
      sessionStorage.setItem(key, 'foo')

      StorageManager.remove(key)

      expect(StorageManager.get(key, 'session')).toEqual(undefined)
    })

    it('falls back to alternate storage if storage is unavailable', () => {
      jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw 1 })

      expect(StorageManager.get(key, 'session')).toEqual(undefined)

      StorageManager.save(key, 'foo', 'session')

      expect(StorageManager.get(key, 'session')).toEqual('foo')
    })
  })
})
