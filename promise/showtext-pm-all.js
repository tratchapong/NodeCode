
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pmRandom() {
  return new Promise( (rsv,rj) => {
    let n = getRandom(0,9)
    if(n>2) rsv(n)
    else rj(n)
  })
}

const pm1 = pmRandom()
const pm2 = pmRandom()
const pm3 = pmRandom()

// const pm2 = new Promise( (rsv,rj) => {
//   let n = getRandom(0,9)
//   if(n>5) rsv(n) 
//   else rj(n)
// })
// const pm3 = new Promise( (rsv,rj) => {
//   let n = getRandom(0,9)
//   if(n>5) rsv(n) 
//   else rj(n)
// })

    
Promise.all([pm1,pm2,pm3]).then( (res) => {
  console.log('Solved all')
  console.log(res)
}).catch( err => {
  console.log('not Passed')
  console.log(err)
})
