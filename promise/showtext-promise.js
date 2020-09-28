function showText (text, time) {
  return new Promise( (rsv,rj) => {
    console.log(text)
    setTimeout(() => {
      rsv()
    },time)
  })
}

showText('a',1000)
.then ( ()=> showText('b',500))
.then ( ()=> showText('c',200))
.then ( ()=> console.log('Done.'))


// showText('a',1000)
// .then ( ()=> { return showText('b',500) })
// .then ( ()=> { return showText('c',200) })
// .then ( ()=> console.log('Done.'))


