const http = require('http')
const fs = require('fs')
let filename = ''

function renderHTML(filename, req, res){
  fs.readFile(filename, (err, data) => {
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write(data)
  })
}
http.createServer( (req, res) => {
  if (req.url === '/')
   return renderHTML('./index.html', req, res)
  
  res.writeHead(404, {'content-type' : 'text/html'})
  res.end('File not found')
  

}).listen(8080, ()=>console.log('Server start...'))