import Constants from '../../src/Constants'
import LocalStorageManager from '../../src/LocalStorageManager'
import VarCache from '../../src/VarCache'

describe(VarCache, () => {
  let cache: VarCache
  const createRequestSpy: jest.Mock<() => void> = jest.fn()

  beforeEach(() => {
    cache = new VarCache(createRequestSpy)
  })

  describe('applyDiffs', () => {
    it('updates variables', () => {
      cache.setVariables({ foo: 1 })
      cache.applyDiffs({ foo: 2 }, null, null)

      expect(cache.getVariables()).toEqual({ foo: 2 })
    })

    it('merges dictionaries', () => {
      cache.setVariables({ rootVar: { clientVar: 1 } })
      cache.applyDiffs({ rootVar: { serverVar: 1 } }, null, null)

      expect(cache.getVariables()).toEqual({
        rootVar: {
          clientVar: 1,
          serverVar: 1
        }
      })
    })

    it('merges missing diff dictionaries', () => {
      cache.setVariables({ clientVar: 1 })
      cache.applyDiffs({ serverVar: { nestedServerVar: 1 } }, null, null)

      expect(cache.getVariables()).toEqual({
        clientVar: 1,
        serverVar: {
          nestedServerVar: 1
        }
      })
    })

    it('calls update callback when defined', () => {
      const callback = jest.fn()

      cache.onUpdate = callback
      cache.setVariables({ foo: 1 })
      cache.applyDiffs({ foo: 2 }, null, null)

      expect(callback).toHaveBeenCalledTimes(1)
    })
  })

  describe('loadDiffs', () => {
    let spy: jest.Mocked<LocalStorageManager>

    beforeEach(() => {
      spy = jest.spyOn(LocalStorageManager, 'getFromLocalStorage')
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('loads data from local storage', () => {
      cache.loadDiffs()

      expect(spy).toHaveBeenCalledTimes(5)
      expect(spy).toHaveBeenCalledWith(Constants.DEFAULT_KEYS.VARIABLES)
      expect(spy).toHaveBeenCalledWith(Constants.DEFAULT_KEYS.VARIANTS)
      expect(spy).toHaveBeenCalledWith(Constants.DEFAULT_KEYS.ACTION_METADATA)
      expect(spy).toHaveBeenCalledWith(Constants.DEFAULT_KEYS.TOKEN)
      expect(spy).toHaveBeenCalledWith(Constants.DEFAULT_KEYS.VARIANT_DEBUG_INFO)
    })
  })

  describe('saveDiffs', () => {
    let spy: jest.Mocked<LocalStorageManager>

    beforeEach(() => {
      spy = jest.spyOn(LocalStorageManager, 'saveToLocalStorage')
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('saves data to local storage', () => {
      cache.setVariables({ foo: 1 })
      cache.applyDiffs({ bar: 2 }, ['one', 'two'], { meta: 'data' })
      cache.setVariantDebugInfo({ test: true })
      cache.token = 't0k3n'

      // Clear the mocks because `saveDiffs()` is called intenally by `applyDiffs()`.
      jest.clearAllMocks()
      cache.saveDiffs()

      expect(spy).toHaveBeenCalledTimes(5)
      expect(spy).toHaveBeenNthCalledWith(1, Constants.DEFAULT_KEYS.VARIABLES, JSON.stringify({ bar: 2 }))
      expect(spy).toHaveBeenNthCalledWith(2, Constants.DEFAULT_KEYS.VARIANTS, JSON.stringify(['one', 'two']))
      expect(spy).toHaveBeenNthCalledWith(3, Constants.DEFAULT_KEYS.ACTION_METADATA, JSON.stringify({ meta: 'data' }))
      expect(spy).toHaveBeenNthCalledWith(4, Constants.DEFAULT_KEYS.VARIANT_DEBUG_INFO, JSON.stringify({ test: true }))
      expect(spy).toHaveBeenNthCalledWith(5, Constants.DEFAULT_KEYS.TOKEN, 't0k3n')
    })
  })

  describe('variables', () => {
    it('returns `null` when the variables are not set', () => {
      expect(cache.getVariables()).toEqual(null)
    })

    it('returns the variables when they are set', () => {
      cache.setVariables({ foo: 1 })

      expect(cache.getVariables()).toEqual({ foo: 1 })
    })

    it('returns merged variables when present', () => {
      cache.setVariables({ foo: 1 })
      cache.applyDiffs({ foo: 2 }, null, null)

      expect(cache.getVariables()).toEqual({ foo: 2 })
    })
  })

  describe('variableChangedHandlers', () => {
    it('adds handler', () => {
      const handler = jest.fn()

      cache.addVariablesChangedHandler(handler)

      const handlers = cache.getVariablesChangedHandlers()

      expect(handlers.length).toBe(1)
      expect(handlers[0]).toBe(handler)
    })

    it('calls handler after addition when there are diffs', () => {
      const handler = jest.fn()

      cache.setVariables({ foo: 1 })
      cache.applyDiffs({ bar: 2 }, null, null)
      cache.addVariablesChangedHandler(handler)

      expect(handler).toHaveBeenCalledTimes(1)
    })

    it('removes handler', () => {
      const handler = jest.fn()

      cache.addVariablesChangedHandler(jest.fn())
      cache.addVariablesChangedHandler(handler)
      cache.addVariablesChangedHandler(jest.fn())
      cache.removeVariablesChangedHandler(handler)

      const handlers = cache.getVariablesChangedHandlers()

      expect(handlers.length).toBe(2)
      expect(handlers.find((x) => x === handler)).toBe(undefined)
    })

    it('triggers handlers', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()
      const handler3 = jest.fn()

      cache.addVariablesChangedHandler(handler1)
      cache.addVariablesChangedHandler(handler2)
      cache.addVariablesChangedHandler(handler3)
      cache.triggerVariablesChangedHandlers()

      expect(handler1).toHaveBeenCalledTimes(1)
      expect(handler2).toHaveBeenCalledTimes(1)
      expect(handler3).toHaveBeenCalledTimes(1)
    })

    it('returns handlers', () => {
      cache.addVariablesChangedHandler(jest.fn())
      cache.addVariablesChangedHandler(jest.fn())
      cache.addVariablesChangedHandler(jest.fn())

      const handlers = cache.getVariablesChangedHandlers()

      expect(handlers.length).toBe(3)
    })
  })

  describe('variantDebugInfo', () => {
    it('returns empty object by default', () => {
      expect(cache.getVariantDebugInfo()).toEqual({})
    })

    it('returns correct value when updated', () => {
      const dbgInfo1 = { test: 'This is test.', isTest: true }
      cache.setVariantDebugInfo(dbgInfo1)
      expect(cache.getVariantDebugInfo()).toBe(dbgInfo1)

      const dbgInfo2 = { ...dbgInfo1, isTest: false, isProd: true }
      cache.setVariantDebugInfo(dbgInfo2)
      expect(cache.getVariantDebugInfo()).toBe(dbgInfo2)
    })
  })

  describe('sendVariables', () => {
    it('clears user content', () => {
      const vars = { foo: 'bar' }
      const data = { [Constants.PARAMS.VARIABLES]: vars }

      cache.setVariables(vars)
      cache.sendVariables()

      expect(createRequestSpy).toHaveBeenCalledTimes(1)
      expect(createRequestSpy.mock.calls[0][0]).toEqual(Constants.METHODS.SET_VARS)
      expect(createRequestSpy.mock.calls[0][1].body()).toEqual(JSON.stringify(data))
      expect(createRequestSpy.mock.calls[0][2].sendNow).toEqual(true)
    })
  })

  describe('clearUserContent', () => {
    it('clears user content', () => {
      cache.setVariables({ foo: 1 })
      cache.applyDiffs({ bar: 2 }, [ 1, 2, 3 ], null)
      cache.setVariantDebugInfo({ test: true })

      cache.clearUserContent()

      expect(cache.getVariables()).toEqual(null)
      expect(cache.variants).toEqual([])
      expect(cache.getVariantDebugInfo()).toEqual({})
      expect(cache.diffs).toEqual(undefined)
    })
  })
})
