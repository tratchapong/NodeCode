// KB from 
// https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js

const http = require('http');
const fs = require('fs');

//most simple version to extract data with form POST
// http.createServer((request, response) => {
//   console.log('Now we have a http message with headers but no data yet.');
//   request.on('data', chunk => {
//     console.log('A chunk of data has arrived: ', chunk);
//   });
//   request.on('end', () => {
//     console.log('No more data');
//   })
// }).listen(8080)

// version 2 of chunk
// ------------------
// http.createServer((request, response) => {
//   const chunks = [];
//   request.on('data', chunk => chunks.push(chunk));
//   request.on('end', () => {
//     const data = Buffer.concat(chunks);
//     console.log('Data: ', data);
//   })
// }).listen(8080)

//Create Pipe version -> save to file
// http.createServer((request, response) => {
//   request.pipe(fs.createWriteStream('./request'));
// }).listen(8080)


http.createServer((req, res) => {
var POST = {};
    if (req.method == 'POST') {
        req.on('data', function(data) {
            data = data.toString();
            data = data.split('&');
            for (var i = 0; i < data.length; i++) {
                var _data = data[i].split("=");
                POST[_data[0]] = _data[1];
            }
            console.log(POST);
            res.writeHead(200,{'Content-type' : 'text/html'});
            res.write('<h3>Thank you for your information</h3>')
            res.write(POST.lname);
            res.end();
        })
    }
  }).listen(8080)