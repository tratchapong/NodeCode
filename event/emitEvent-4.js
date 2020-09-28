const EventEmitter = require('events');
const emit1 = new EventEmitter();

function onesec() {
    setInterval( ()=> {
        emit1.emit('1sec', {id:1})
    }, 1000)
}

function twosec() {
    setInterval( ()=> {
        emit1.emit('2sec', {id:2})
    }, 2000)
}

function linesec() {
    setInterval( ()=> {
        emit1.emit('linesec', {id:3})
    }, 200)
}

linesec()
onesec()
twosec()
emit1.on('1sec', (e)=> {
    console.log(e.id + ' second event emit')
})
emit1.on('2sec', (e)=> {
    console.log(e.id + ' second event emit')
})
emit1.on('linesec', (e)=> {
    console.log('-----')
})

