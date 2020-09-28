//  https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server


const http = require('http');
const fs = require('fs')
const url = require('url')
const formBody = require('body/form')

http.createServer((req,res) => {
  let filename = ''
  let q = url.parse(req.url, true)
  if (q.pathname === '/')
    { filename = './public/index.html' }
  else  { filename = './public' + q.pathname +'.html' }
  console.log(`Request URL is ${req.url}`)
  console.log(`Path name is ${q.pathname}`)
  console.log(`File name is ${filename}`)
  fs.readFile(filename, (err, data) => {
    if (err) { 
      res.writeHead(404,{'Content-Type': 'text/html'})
      return( res.end('File not Found 404'))
    }
    // res.writeHead(200,{'Content-Type': 'text/html; charset=utf8'})
    res.write(data)
    // return ( res.end())
  })
  if (req.method === 'POST') {  
    formBody(req, res, (err, body) => {
      // res.setHeader('content-type', 'text/html; charset=utf8')
      res.writeHead(200,{'Content-Type': 'text/html; charset=utf8'})
     for (let key in body)
       res.write(`<p> ${key} : ${body[key]} </p>`)
     return (res.write('<p>ขอบคุณสำหรับข้อมูล</p>') )
    })
  }
}).listen(8080, (err) => {
  console.log('Server start...')
})
