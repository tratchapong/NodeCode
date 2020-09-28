const EventEmitter = require('events');
const emit1 = new EventEmitter();

// emit1.on('messageLogged', function(e) {
    emit1.on('messageLogged', (e) => {
console.log(`Listener called with ID: ${e.id} and Name : ${e.name}`);
});

function emitev() {
    emit1.emit('messageLogged', {id:1, name:'RT'});
 }

setInterval(emitev, 1000)

// send argument with event emitter
