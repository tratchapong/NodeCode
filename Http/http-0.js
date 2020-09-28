const http = require('http');
const server = http.createServer();

// server.on('request',(req,res) => {
//   console.log('new request come..');
//   console.log(req.headers);
//   console.log('----------');
//   console.log(req);

// });

// server.listen(3000);

http.createServer((req,res) => {
  console.log(req.headers);
  console.log(req.url);
  console.log('----------')
  // res.writeHead(200, {'Content-type' : 'text/html'})
  res.write('Welcome to the Node.js')
  res.end('Bye..')
}).listen(8080, (err) => {
  if (err) console.log('server problem')
  console.log('Server start...')
})