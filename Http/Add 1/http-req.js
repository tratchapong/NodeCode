const http = require('http')
const server = http.createServer()

server.on('request', (req, res) =>{
  let {httpVersion, method, url} = req
  
  console.log(req.headers)
  console.log(httpVersion)
  console.log(method)
  console.log(url)
})

server.listen(8080)

























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