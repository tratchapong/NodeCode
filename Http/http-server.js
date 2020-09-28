const http = require('http')

function index(req, res) {
  console.log('come to /')
  res.writeHead(200)
  res.end('Hello, World')
}

function home(req, res) {
  console.log('come to /home')
  res.writeHead(200)
  res.end('Welcome home')
}

http.createServer( (req, res) => {
  if (req.url === '/')
    return index(req, res)
  if (req.url === '/home')
    return home(req, res)
    
  res.writeHead(404)
  res.write(`${req.url} ${http.STATUS_CODES[404]} \n`)
  res.write('Something went wrong!!!')
  res.end()
})
.listen(8080, () => {
  console.log('Server start...')
})
