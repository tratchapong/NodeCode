const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function() {
console.log('Listener called');
});

function emitev() {
    emitter.emit('messageLogged');
 }

setInterval(()=> emitev(), 1000)


