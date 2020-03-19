import BrowserDetector from '../../src/BrowserDetector'

describe(BrowserDetector, () => {
  it('reports Android OS and browser on Android devices', () => {
    const detector = createDetector({
      // http://useragentstring.com/index.php?id=18495
      userAgent: 'Mozilla/5.0 (Linux; U; Android 2.3.3; de-ch; HTC Desire Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      platform: 'Linux armv7l',
      vendor: 'Google Inc.'
    })

    expect(detector.OS).toEqual('Android')
    expect(detector.browser).toEqual('Android Browser')
    expect(detector.version).toEqual(4.0)
  })

  it('reports unknown browsers', () => {
    const detector = createDetector({
      userAgent: 'foo',
      platform: 'bar',
      vendor: 'baz'
    })

    expect(detector.OS).toEqual('Unknown OS')
    expect(detector.browser).toEqual('Unknown Browser')
    expect(detector.version).toEqual('Unknown Version')
  })

  it('reports Chrome on Windows', () => {
    const detector = createDetector({
      // http://useragentstring.com/index.php?id=19919
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
      platform: 'Windows 10',
      vendor: ''
    })

    expect(detector.OS).toEqual('Windows')
    expect(detector.browser).toEqual('Chrome')
    expect(detector.version).toEqual(70)
  })

  it('reports Safari on MacOS', () => {
    const detector = createDetector({
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Safari/605.1.15',
      platform: 'MacIntel',
      vendor: 'Apple Computer, Inc.'
    })

    expect(detector.OS).toEqual('Mac OS')
    expect(detector.browser).toEqual('Safari')
    expect(detector.version).toEqual(13)
  })

  it('reports Firefox on MacOS', () => {
    const detector = createDetector({
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0) Gecko/20100101 Firefox/74.0',
      platform: 'MacIntel',
      vendor: ''
    })

    expect(detector.OS).toEqual('Mac OS')
    expect(detector.browser).toEqual('Firefox')
    expect(detector.version).toEqual(74)
  })

  interface DetectorProps {
    userAgent?: string,
    platform?: string,
    vendor?: string,
    opera?: boolean
  }

  function createDetector({ userAgent, platform, vendor }: DetectorProps): BrowserDetector {
    return new BrowserDetector({
      navigator: {
        platform,
        userAgent,
        vendor
      },
      opera: undefined
    } as any)
  }
})

