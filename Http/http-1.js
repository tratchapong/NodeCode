const http = require('http');
const url = require('url');
// const services = require('../services')

const server = http.createServer();
server.on('request', (req, res) => {
    console.log('มีการติดต่อเข้ามาจาก...');
    console.log(req.headers);
    console.log('--------------');
    const parasedUrl = url.parse(req.url, true);
    console.log('--------------');
    console.log(parasedUrl);
    console.log('--------------');
    if(req.method === "GET" && parasedUrl.pathname === "/Home") {
        console.log(parasedUrl.query);
        let { name } = parasedUrl.query;
        console.log(`Welcome to Home, ${name}`);
    }
    if(req.method === "GET" && parasedUrl.pathname === "/Square") {
        console.log(parasedUrl.query);
        let { number } = parasedUrl.query;
        // result = ~~number * 2;
        console.log(`Square of ${number} is ${~~number * 2}`);
    }
});

server.listen(8080);
