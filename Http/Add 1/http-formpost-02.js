const http = require('http')
const fs = require('fs')
let myform = ''

function renderHTML(filename, req, res) {
  fs.readFile(filename, (err,data) => {
    myform = data
    res.writeHead(200, {'content-type' : 'text/html; charset=utf8'})
    res.write(data)
    res.end()
  })
}

http.createServer( (req,res) => {
  let body = ''
  if(req.url === '/')
    return renderHTML('./formpost.html',req, res)
  
  if(req.url=== '/getdata' && req.method == 'POST') {
    req.on('data', chunk => {
      body += chunk
    })
    req.on('end', () => {
      console.log(body)
      res.writeHead(200, {'content-type' : 'text/html; charset=utf8'})
      res.write(body + '<hr>')
      res.end(myform)
    })
  }
  else {
  res.writeHead(404, {'content-type' : 'text/html'})
  return res.end('File not found')
  }

}).listen(8080, ()=> console.log('Server start..'))