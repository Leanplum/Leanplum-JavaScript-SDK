export const windowMock: Window = {
  navigator: {
    userAgent: 'TestAgent',
  },
} as Window

const xhrQueue = []

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
      xhrQueue.push(this)
    }),
    setRequestHeader: jest.fn(),
  }
}

xhrMock.resolveRequest = function() {
  const xhr = xhrQueue.shift()
  if (xhr) {
    xhr.onreadystatechange()
    jest.runAllTimers()
  }
}

xhrMock.blockRequest = function() {
  const xhr = xhrQueue.shift()
  if (xhr) {
    xhr.status = 0
    xhr.onerror()
    jest.runAllTimers()
  }
}
