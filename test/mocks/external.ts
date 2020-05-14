export const windowMock: Window = {
  navigator: {
    userAgent: 'TestAgent',
  },
} as Window

export const xhrMock = function(): Partial<XMLHttpRequest> {
  return {
    readyState: 4,
    status: 200,
    abort: jest.fn(),
    onreadystatechange: jest.fn(),
    open: jest.fn(function(method) {
      if (typeof method !== 'string' || !['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'].includes(method)) {
        throw new Error(`'${method}' is not a valid HTTP method.`)
      }
    }),
    send: jest.fn(function() {
      setTimeout(() => {
        this.onreadystatechange()
      }, 100)
    }),
    setRequestHeader: jest.fn(),
  }
}
