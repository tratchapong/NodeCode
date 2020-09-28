const EventEmitter = require('events')

module.exports = class Em1 extends EventEmitter{
  constructor() {
    super()
    this.emit1()
  }

  emit1() {
    setInterval( ()=> this.emit('onesec', 11111), 1000)
  }
  emit2() {
    setInterval( ()=> this.emit('twosec', 22222), 2000)
  }
}

// module.exports = Em1
