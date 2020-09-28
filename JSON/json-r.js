const fs = require('fs')
let data, jsobj

data = fs.readFileSync('./output.json')
jsobj = JSON.parse(data)
users = jsobj.users
// console.log(users[0].firstName)


// console.log(jsobj)
users.map( x=> console.log(`${x.firstName} - ${x.lastName}`))

