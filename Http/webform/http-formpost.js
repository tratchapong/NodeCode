// https://nodejs.org/en/knowledge/HTTP/servers/how-to-read-POST-data/

const http = require('http');
const fs = require('fs')

let postHTML = fs.readFileSync('./formpost.html')
let bodyObj = {}

http.createServer( (req, res) => {
  let body = "";
  req.on('data', (chunk) => {
    body += chunk;
  })
  req.on('end', ()=>{
    body = decodeURI(body)
    body = body.split('&')
    for(let i=0; i< body.length; i++) {
      let _data = body[i].split('=')
      bodyObj[_data[0]] = _data[1]  // {fname : 'John', lname : 'Doe'}
    }
    console.log('Body : ' + body);
    console.log('First Name : ' + bodyObj.fname);
    console.log('Last Name : ' + bodyObj.lname);
    res.writeHead(200)
    res.write('<p>'+bodyObj.fname+'</p><hr>')
    res.end(postHTML)
  })
}).listen(8080, ()=>console.log('Server start..'))