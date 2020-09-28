const fs = require('fs')

const getFile = (fileName) => {
  return new Promise((resolve, reject) => { 
    // if (fileName.toString()==='f02.txt') reject('Error from f02')
    fs.readFile(fileName, (err, data) => resolve(data) )
 } )
}

getFile('./start.txt')
.then(data => {
  console.log(`${data}`) 
  return getFile(`${data}`) })
.then(data => {
  console.log(`${data}`) 
  return getFile(`${data}`) })  
.then(data => {
  console.log(`${data}`) 
  return getFile(`${data}`) })
.then(data => {
    console.log(`${data}`) })
.catch(err => {
  console.log('Error : '+ err)
})


