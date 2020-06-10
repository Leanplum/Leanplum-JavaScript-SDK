export default class EventEmitter {
  private handlers = [];

  on(eventName: string, callback: Function): void {
    this.handlers.push({ eventName, callback })
  }

  off(eventName: string, callback: Function): void {
    this.handlers = this.handlers.filter(
      (x) => x.eventName !== eventName || x.callback !== callback
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit(eventName: string, args?: any): void {
    this.handlers.forEach(handler => {
      if (handler.eventName === eventName) {
        handler.callback(args)
      }
    })
  }
}

