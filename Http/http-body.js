const http = require('http')
const formBody = require('body/form')

server = http.createServer()
  server.on ('request', (req, res) => {
  formBody(req, res, (err, body) => {
    if(err) {
      res.statusCode = 500
      return res.end('Have error...')
    } 
    res.setHeader('content-type', 'text/html; charset=utf-8')
    res.setHeader('CodeCamp', '5')
    for (let key in body)
      res.write (`<p> ${key} : ${body[key]} </p>`)
    res.end(`<p> ชื่อ ${body.fname} นามสกุล ${body.lname} </p>`)
    console.log(`ชื่อ ${body.fname} นามสกุล ${body.lname}`)
  })
})

server.listen(8080, () => console.log('Server start...'))
  


