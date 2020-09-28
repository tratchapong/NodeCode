const fs = require('fs');

for (let i = 0; i < 20; i++) {

  // fs.readFile('./codecamp.txt', 'utf8', (err, data) => {
  //     console.log(data);
  //   }); 
    
  //   fs.readFile('./codecamp1.txt', 'utf8', (err, data) => {
  //     console.log(data);
  //   });
  
  const d1 = fs.readFileSync('./codecamp.txt', 'utf8')
  console.log(d1)
  const d2 = fs.readFileSync('./codecamp1.txt', 'utf8')
  console.log(d2)

}