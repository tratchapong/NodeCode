const http = require('http')
function app(req, res){
  console.log('Incoming request...')
  console.log(req.url)
  res.writeHead(200, {'content-type' : 'text/html'})
  res.write('Hello, World')
  res.end()
}
http.createServer(app).listen(8080, ()=> console.log('Server start...'))

// const http = require('http')
// http.createServer( (req, res) => {
//   console.log('request coming..')
//   res.writeHead(200, {'Content-type' : 'text/html'})
//   res.write('Hello, world')
//   res.end()
// }).listen(8080)
