import EventEmitter from '../../src/EventEmitter'

describe(EventEmitter, () => {
  let events: EventEmitter

  beforeEach(() => {
    events = new EventEmitter()
  })

  it('triggers attached handlers', () => {
    const handler = jest.fn()
    events.on('one', handler)

    events.emit('one', { arg: 1 })

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith({ arg: 1 })
  })

  it('filters events by name', () => {
    const handler = jest.fn()
    events.on('two', handler)

    events.emit('one', { arg: 1 })

    expect(handler).toHaveBeenCalledTimes(0)
  })

  it('allows handlers to be removed', () => {
    const handler = jest.fn()
    events.on('one', handler)
    events.off('one', handler)

    events.emit('one', { arg: 1 })

    expect(handler).toHaveBeenCalledTimes(0)
  })
})
