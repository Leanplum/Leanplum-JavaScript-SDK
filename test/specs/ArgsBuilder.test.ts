import ArgsBuilder from '../../src/ArgsBuilder'

describe(ArgsBuilder, () => {
  let builder: ArgsBuilder

  beforeEach(() => {
    builder = new ArgsBuilder()
  })

  describe('add / build', () => {
    it('adds string value', () => {
      builder.add('action', 'start')

      expect(builder.build()).toEqual('action=start')
    })

    it('joins values with ampersand', () => {
      builder.add('action', 'start')
      builder.add('timestamp', 12345)

      expect(builder.build()).toEqual('action=start&timestamp=12345')
    })

    it('URL encodes values', () => {
      builder.add('eventName', 'Track Event')

      expect(builder.build()).toEqual('eventName=Track%20Event')
    })

    it('adds array values', () => {
      builder.add('newsfeedMessages', ['123##1', '234##2'])

      expect(builder.build()).toEqual('newsfeedMessages=["123##1","234##2"]')
    })
  })
})
