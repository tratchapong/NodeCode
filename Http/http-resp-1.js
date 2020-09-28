const http = require('http')

http.createServer( (req, res) => {
  res.writeHead(200, {
    'content-type' : 'text/plain',
    'CodeCamp' : '5'
  })
  res.end("Hi")
})
.listen(8080)
