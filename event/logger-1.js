const EventEmitter = require('events');
const emitter = new EventEmitter();

let url = "localhost";

function log(message) {
	console.log(message);
	emitev();
}

function emitev() {
    emitter.emit('messageLogged', {id:1, url});
 }

module.exports.log = log;

 