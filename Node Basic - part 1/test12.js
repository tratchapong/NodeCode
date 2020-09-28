function showText(text, time) {
  return new Promise( (rs, rj) => {
    setTimeout( () => {
      console.log(text)
      rs()
    },time)
  })
}

showText('1', 1000)
.then ( ()=> { return showText('2', 1000) })
.then ( ()=> { return showText('3', 1000) })
.then ( ()=> { return showText('4', 1000) })
.then ( ()=> console.log('Done'))

// ReFactor from above

// function showText(text, time) {
//   return new Promise( rs => {
//     console.log(text)
//     setTimeout( () => rs() ,time)
//   })
// }

// showText('1', 1000)
// .then ( ()=> showText('2', 1000) )
// .then ( ()=> showText('3', 1000) )
// .then ( ()=> showText('4', 1000) )
// .then ( ()=> console.log('Done'))

