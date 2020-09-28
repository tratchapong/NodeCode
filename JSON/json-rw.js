// download data from
// https://www.learningcontainer.com/sample-json-file/
// เลือกไฟล์ "Sample JSON file with multiple records download"

const fs = require('fs')
let data, jsobj, users, newdata

data = fs.readFileSync('./sample.json')
jsobj = JSON.parse(data)
users = jsobj.users

users.map( x => {
  x.phoneNumber = x.userId.toString().repeat(7)
  if (x.lastName === 'mac') x.lastName = 'Apple' 
  console.log(`${x.firstName} : ${x.lastName}`)
})

newdata = JSON.stringify(jsobj)
fs.writeFileSync('./output.json',newdata)
console.log('Save output.json OK')




