const http = require('http')
// const server = http.createServer()

// server.on('request', (req,res) => {
//   console.log('Have request coming...')
// })
// server.listen(8080)


http.createServer( (req, res) => {
  console.log(req.headers)
  res.writeHead(200, { 'content-type' : 'text/html; charset="utf8" '})
  res.write('Hello, world  ')
  res.write('สวัสดีชาวโลก')
  res.end()
}).listen(8080)
