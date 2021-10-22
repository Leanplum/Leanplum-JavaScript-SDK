import Constants from '../../src/Constants'
import LocalStorageManager from '../../src/LocalStorageManager'
import VarCache from '../../src/VarCache'

const DEFAULT_ACTIONS = {
  "DefaultAction": {
    "kind": 3,
    "values": {
      "Message": {
        "Color": 4278190080,
        "Text": "Tap OK to receive important notifications from our app."
      },
      "Background image": "",
      "Layout": {
        "Height": 250,
        "Width": 300
      },
      "Cancel action": {
        "__name__": ""
      },
      "Background color": 4294967295,
    },
    "options": null,
    "kinds": {
      "Message": "GROUP",
      "Message.Color": "COLOR",
      "Cancel action": "ACTION",
      "Background image": "FILE",
      "Layout": "GROUP",
      "Message.Text": "TEXT",
      "Background color": "COLOR",
      "Layout.Height": "NUMBER",
      "Layout.Width": "NUMBER"
    }
  }
};

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
      expect(spy).toHaveBeenCalledWith(Constants.DEFAULT_KEYS.ACTION_DEFINITIONS)
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
      cache.applyDiffs({ bar: 2 }, ['one', 'two'], { meta: {} })
      cache.setVariantDebugInfo({ test: true })
      cache.token = 't0k3n'

      // Clear the mocks because `saveDiffs()` is called intenally by `applyDiffs()`.
      jest.clearAllMocks()
      cache.saveDiffs()

      expect(spy).toHaveBeenCalledTimes(5)
      expect(spy).toHaveBeenNthCalledWith(1, Constants.DEFAULT_KEYS.VARIABLES, JSON.stringify({ bar: 2 }))
      expect(spy).toHaveBeenNthCalledWith(2, Constants.DEFAULT_KEYS.VARIANTS, JSON.stringify(['one', 'two']))
      expect(spy).toHaveBeenNthCalledWith(3, Constants.DEFAULT_KEYS.ACTION_DEFINITIONS, JSON.stringify({ meta: {} }))
      expect(spy).toHaveBeenNthCalledWith(4, Constants.DEFAULT_KEYS.VARIANT_DEBUG_INFO, JSON.stringify({ test: true }))
      expect(spy).toHaveBeenNthCalledWith(5, Constants.DEFAULT_KEYS.TOKEN, 't0k3n')
    })
  })

  describe('getVariable', () => {
    it('returns `null` when the variables are not set', () => {
      expect(cache.getVariable('items')).toEqual(null)
    })

    it('returns the whole variables object without parameters', () => {
      cache.setVariables({ items: { qty: 4 } })

      expect(cache.getVariable()).toEqual({ items: { qty: 4 } })
    })

    it('returns single root variable', () => {
      cache.setVariables({ items: { qty: 4 } })

      const result = cache.getVariable('items')

      expect(result).toEqual({ qty: 4 })
    })

    it('returns single nested variable', () => {
      cache.setVariables({ items: { qty: 4 } })

      const result = cache.getVariable('items', 'qty')

      expect(result).toEqual(4)
    })

    it('returns single variable from array', () => {
      cache.setVariables({ items: ['one', 'two'] })

      const result = cache.getVariable('items', 1)

      expect(result).toEqual('two')
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
      cache.triggerVariablesChangedHandlers()

      expect(handler).toHaveBeenCalledTimes(1)
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

      cache.triggerVariablesChangedHandlers()

      expect(handler).toHaveBeenCalledTimes(0)
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
    afterEach(() => {
      jest.clearAllMocks()
    })

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

    it('sends custom action definitions', () => {
      const CUSTOM_TEMPLATE = {
        "kind": 3,
        "options": null,
        "values": {
          "Message": {
            "Color": 4278190080,
            "Text": "Example message"
          },
          "Dismiss action": ''
        },
        "kinds": {
          "Message": "group",
          "Message.Color": "color",
          "Message.Text": "string",
          "Dismiss action": "action",
        }
      };

      cache.applyDiffs(
        {},
        {},
        DEFAULT_ACTIONS
      )
      cache.registerActionDefinition({
        name: 'Custom Template',
        args: [
          {
            name: 'Message',
            type: 'group',
            value: [
              { name: 'Color', type: 'color', value: 4278190080 },
              { name: 'Text', type: 'string', value: 'Example message' },
            ]
          },
          { name: 'Dismiss action', type: 'action', value: '' },
        ]
      });

      cache.sendActions()

      expect(createRequestSpy).toHaveBeenCalledTimes(1)
      expect(createRequestSpy.mock.calls[0][0]).toEqual(Constants.METHODS.SET_VARS)
      expect(createRequestSpy.mock.calls[0][1].body()).toEqual(JSON.stringify({
        [Constants.PARAMS.ACTION_DEFINITIONS]: {
          ...{
            "DefaultAction": {
              "kind": 3,
              "values": {
                "Message": {
                  "Color": 4278190080,
                  "Text": "Tap OK to receive important notifications from our app."
                },
                "Background image": "",
                "Layout": {
                  "Height": 250,
                  "Width": 300
                },
                "Cancel action": "",
                "Background color": 4294967295,
              },
              "options": null,
              "kinds": {
                "Message": "group",
                "Message.Color": "color",
                "Cancel action": "action",
                "Background image": "file",
                "Layout": "group",
                "Message.Text": "text",
                "Background color": "color",
                "Layout.Height": "number",
                "Layout.Width": "number"
              }
            }
          },
          'Custom Template': CUSTOM_TEMPLATE
        }
      }))
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
