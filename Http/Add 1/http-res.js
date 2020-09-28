const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200,{
    'content-type' : 'text/html',
    'Codecamp' : 'five'
  })
  res.write('This is response message..\n')
  res.write('from your local server')
  res.end('<H2> Good bye </H2>')
}).listen(8080, ()=> {console.log('Server start...')})

























// const http = require('http')

// let self = http.createServer( (req,res) => {
//   let {url, method, headers} = req
//   console.log(self.address())
//   console.log(url)
//   console.log(method)
//   console.log(headers['user-agent'])
//   // console.log(req.headers.cache-control)
//   // console.log(req.headers["user-agent"])
//   // console.log('------')
//   // console.log(req.method)
//   // console.log('------')
//   // console.log(req.url)
// }).listen(8080)