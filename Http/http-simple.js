const http = require('http')

http.createServer( (req,res) => {
  console.log(req.headers)
  res.writeHead(200,{
    'content-type' : 'text/html'
  })
  for(let i=1; i<=3; i++)
    res.write(`<h${i}>Hello ${i}</h${i}>`)
}).listen(8080, ()=> console.log('Start Server...') )
