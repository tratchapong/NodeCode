//--- Callback : start
const fs = require('fs')

fs.readFile('start.txt', 'utf-8', (err, data) => {
  console.log(data)
  fs.readFile(`${data}`, 'utf-8', (err, data) => {
    console.log(data)
    fs.readFile(`${data}`, 'utf-8', (err, data) => {
      console.log(data)
      fs.readFile(`${data}`, 'utf-8', (err, data) => {
         console.log(data)
    	})
    })
  })
})
//--- Callback : end

//-------------------

//--- Promise : start

// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, data) => resolve(data) )
//   })
// }

// getFile('./start.txt')
// .then(data => {
//   console.log(`${data}`) 
//   return getFile(`${data}`) })
//   .then(data => {
//   console.log(`${data}`) 
//   return getFile(`${data}`) })  
//   .then(data => {
//   console.log(`${data}`) 
//   return getFile(`${data}`) })  

//--- Promise : end

//-------------------

//--- async/await : start (use promise producer-code : function getFile )

// (async () => {
//  let data = await getFile('./start.txt');
//  console.log(`${data}`)
//  data1 = await getFile(data);
//  console.log(`${data1}`)
//  data2 = await getFile(data1);
//  console.log(`${data2}`)
//  data3 = await getFile(data2);
//  console.log(`${data3}`)
//  }) ();

//--- async/await : end