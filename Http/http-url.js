const http = require('http');
const fs = require('fs')
const url = require('url')

http.createServer((req,res) => {
  let q = url.parse(req.url, true)
  let filename = '.' + q.pathname +'.html'
  console.log(`Request URL is ${req.url}`)
  console.log(`Path name is ${q.pathname}`)
  console.log(`File name is ${filename}`)
  fs.readFile(filename, (err, data) => {
    if (err) { 
      res.writeHead(404,{'Content-Type': 'text/html'})
      return( res.end('File not Found 404'))
    }
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write(data)
    return ( res.end())
  })
}).listen(8080, (err) => {
  console.log('Server start...')
})
