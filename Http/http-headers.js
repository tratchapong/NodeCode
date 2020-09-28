const http = require('http')

http.createServer( (req,res) => {
  console.log(req.headers)
  res.writeHead(200,{ 
    'content-type' : 'text/html',
  })
  res.write('<h3>Hello, all</h3>')
  for (const prop in req.headers) {
    // res.write('<p>' + prop + ':' + req.headers[prop] + '</p>')
    res.write(`<p><b> ${prop} </b> : ${req.headers[prop]} </p>`)
  }
  res.write('<hr>')
  res.write('<p> URL from header is \"' + req.url + '\"</p>')
  res.write('<hr>')
  res.end('Good Bye')
  
}).listen(8080, () => {
  console.log('server start...')
})