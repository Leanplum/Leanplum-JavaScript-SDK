import VarCache from '../../src/VarCache'

describe(VarCache, () => {
  let cache: VarCache;

  beforeEach(() => {
    cache = new VarCache(() => {})
  })

  it('gets set variables', () => {
    cache.setVariables({ foo: 1 })

    expect(cache.getVariables()).toEqual({ foo: 1 })
  })

  it('gets merged variables', () => {
    cache.setVariables({ foo: 1 })

    cache.applyDiffs({ foo: 2 }, null, null)

    expect(cache.getVariables()).toEqual({ foo: 2 })
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
  })
})
