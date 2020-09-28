var fs = require('fs');
function readMessage(){
 return new Promise(function (fulfill, reject){
    fs.readFile('message.txt', 'utf8', function (err, res){
      if (err) reject(err);
      else fulfill(res);
    });
  });
}
function writeMessage(dat){
 return new Promise(function (fulfill, reject){
    fs.writeFile('out.txt', dat, function (err, res){
      if (err) reject(err);
      else fulfill(res);
    });
  });
}

async function readWrite() {
  try {
  const data = await readMessage()
  const result = await writeMessage(data)
  console.log(result)
  } catch (err) { console.log(err)}
}
readWrite()