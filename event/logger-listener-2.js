// const EventEmitter = require('events');
const Logger = require('./logger-2');
const logger = new Logger();

    logger.on('messageLogged', (e) => {
    console.log(`Listener called with ID: ${e.id} and URL : ${e.url}`);
    });
logger.log('Hi from listener : ');


