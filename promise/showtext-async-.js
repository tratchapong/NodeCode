function showText (text, time) {
  return new Promise( (rsv,rj) => {
    console.log(text)
    if (text == 'R') rj('Dont use R')
    setTimeout(() => {
      rsv()
    },time)
  })
}

(async () => {
try {  
const p1 = await showText('X',500)
const p2 = await showText('X',500)
const p3 = await showText('R',1000)
}catch(err) {
  console.log(`Error : ${err}`)
}
}) ()

// async function runText() {
//   try {
//     await showText('A',1000)
//     await showText('B',500)
//     await showText('C',200)
//   }catch (err){
//     console.log(err)
//   }
// }
// runText();



// showText('a',1000)
// .then ( ()=> showText('b',500))
// .then ( ()=> showText('c',200))
// .then ( ()=> console.log('Done.'))


// showText('a',1000)
// .then ( ()=> { return showText('b',500) })
// .then ( ()=> { return showText('c',200) })
// .then ( ()=> console.log('Done.'))


