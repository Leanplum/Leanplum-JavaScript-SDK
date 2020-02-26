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

  it('applyDiffs merges missing server variables', () => {
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
