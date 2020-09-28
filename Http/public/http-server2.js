const http = require('http')
const fs = require('fs')
const url = require('url')
const formBody = require('body/form')

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
function form(req, res) {
  formBody(req, res, (err, body) => {
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf8'})
    for (let key in body)
    res.write(`<p> ${key} : ${body[key]} </p>`)
    res.end('<p>ขอบคุณสำหรับข้อมูล...</p>') 
  })
}

function getFile(req, res, filename) {
  fs.readFile(filename, (err, data) => {
    if(err) {
      res.writeHead(404, {'content-type' : 'text/html'})
      return(res.end('File not Found 404'))
    }
    // res.writeHead(200, {'content-type':'text/html'})
    res.end(data)
  })
}
http.createServer( (req, res) => {
  let filename = ''
  let q = url.parse(req.url, true)
  filename = './' + q.pathname
  if (req.method === 'POST')
    return form(req, res)
  if (req.url === '/')
    return getFile(req, res, './index.html')
  if (req.url === '/home')
    return home(req, res)

  return getFile(req, res, filename + '.html')
    

})
.listen(8080, () => {
  console.log('Server start...')
})
