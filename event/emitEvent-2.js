const EventEmitter = require('events');
const emit1 = new EventEmitter();
const emit2 = new EventEmitter();


emit2.on('messageLogged', function() {
console.log('Listener called');
});

function emitev() {
    emit1.emit('messageLogged');
 }

setInterval(emitev, 1000)


// Seperate instance for testing listener(emit2) can know event from 'emit1' [Answer : No]