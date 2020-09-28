const http = require('http')
let debody = ''
let dataObj = {}

http.createServer( (req, res) => {
  let body = [], data
  req.on('data', chunk => {
    body.push(chunk)
  }).on('end', ()=> {
    debody = decodeURI(body)
    console.log(debody)
    debody = debody.split('&')
    for(let i=0; i< debody.length; i++) {
      let _data = debody[i].split('=')
      dataObj[_data[0]] = _data[1]
    }
    console.log(debody)
    console.log(dataObj)
    res.writeHead(200,{'Content-type' : 'text/html;charset="utf8" '})
    for (let key in dataObj)
      res.write(`<p> ${key} : ${dataObj[key]}</p>`)
    res.write('<hr><p>ขอบคุณสำหรับข้อมูล</p>') 
    res.end()   
  })
}).listen(8080, ()=> console.log('Server start...'))

