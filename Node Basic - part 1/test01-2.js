const os = require('os');

tmem = Intl.NumberFormat().format(os.totalmem());
fmem = Intl.NumberFormat().format(os.freemem());
umem = Intl.NumberFormat().format( os.totalmem() - os.freemem());
console.log(`Computer : ${os.hostname()}`);
console.log(`Total Ram = ${tmem} and Free Memory = ${fmem}` );
console.log(`Usage = ${umem}`);



