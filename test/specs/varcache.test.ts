import VarCache from '../../src/VarCache'

describe(VarCache, () => {
  it('gets set variables', () => {
    const cache = new VarCache()

    cache.setVariables({ foo: 1 })

    expect(cache.getVariables()).toEqual({ foo: 1 })
  })

  it('gets merged variables', () => {
    const cache = new VarCache()
    cache.setVariables({ foo: 1 })

    cache.applyDiffs({ foo: 2 }, null, null)

    expect(cache.getVariables()).toEqual({ foo: 2 })
  })

  describe('applyDiffs', () => {
    it('updates variables', () => {
      const cache = new VarCache()

      cache.setVariables({ foo: 1 })
      cache.applyDiffs({ foo: 2 }, null, null)

      expect(cache.getVariables()).toEqual({ foo: 2 })
    })

    it('merges dictionaries', () => {
      const cache = new VarCache()

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
      const cache = new VarCache()

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
