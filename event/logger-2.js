const EventEmitter = require('events');

let url = "localhost";

class Logger extends EventEmitter{
	emitev() {
		this.emit('messageLogged', {id:1, url});
	}

	log(message) {
		console.log(message);
		//this.emit('messageLogged', {id:1, url});
		this.emitev();
	}
}

module.exports = Logger;

 