const http = require('http')

http.createServer( (req,res) => {
  // const { headers, method, url } = req;
  // console.log(headers, method, url )
  for (let key in req)
    console.log(key)
  res.writeHead(200,{'content-type' : 'text/plain'})
  res.end('good bye')
}).listen(8080)

// https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

