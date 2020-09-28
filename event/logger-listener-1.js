const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', (e) => {
console.log(`Listener called with ID: ${e.id} and Name : ${e.url}`);
});

const logger = require('./logger-1');
logger.log('Hi from listener');


// Listener:emitter.on didn't run due to seperate EventEmitter's instance between 'logger-1.js' and './logger-listenner-1.js'
