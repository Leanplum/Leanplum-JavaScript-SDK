export const windowMock: Window = {
  navigator: {
    userAgent: 'TestAgent',
  },
} as Window

const queue = []

export function resolveRequest() {
  const request = queue.shift()
  request.onreadystatechange()
  jest.runAllTimers()
}

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
      queue.push(this)
    }),
    setRequestHeader: jest.fn(),
  }
}
