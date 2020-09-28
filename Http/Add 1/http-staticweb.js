const http = require('http')
const fs = require('fs')
const url = require('url');

function renderHTML(filename, req, res) {
  fs.readFile(filename, (err,data) => {
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write(data)
    res.end()
  })
}

http.createServer( (req, res) => {
  let purl = url.parse(req.url, true)
 
  if(req.url === '/') 
  return renderHTML('./index.html', req, res)
  
  if(req.url === '/form')
  return renderHTML('./form.html', req, res)
  
  if(req.url === '/formget')
  return renderHTML('./formget.html', req, res)
  
  if(purl.pathname === '/getdata') {
    res.writeHead(200, {'content-type' : 'text/html'})
    console.log(purl)
    for (let k in purl.query)
      res.write('<p>'+ k + '=' + purl.query[k]+'</p>')
    return res.end()
  }
  
  res.writeHead(404, {'content-type' : 'text/html'})
  res.write('file not found')
  res.end()

}).listen(8080, ()=> console.log('Server start...'))