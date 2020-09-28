const http = require('http');
const concat = require('concat-stream');
const qs = require('querystring');
http.createServer((request, response) => {
  concat(request, buffer => {
    const data = qs.parse(buffer.toString());
    console.log('Data: ', data);
  });
}).listen(8080)
