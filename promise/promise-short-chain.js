// console.log('1')
// setTimeout( () => { console.log('2') }, 1000 )
// console.log('3')

// console.log('1')
// setTimeout( () => { console.log('2') }, 1000  )
// console.log('3')

console.log('1')
new Promise( rs => 
  setTimeout( () => {
    console.log('2')
    rs()
  },1000)).then( () => {
    new Promise( rs => 
      setTimeout( () => {
        console.log('3')
        rs()
      },1000)).then( () => {
      setTimeout( () => console.log('4'), 1000)
  })
  })

// const pm = new Promise( (rs,rj)=> {
//   console.log('xxx')
//   setTimeout( () => { 
//     console.log('2')
//     rs()
//   },1000)
// })


// pm.then( ()=> console.log('3'))
