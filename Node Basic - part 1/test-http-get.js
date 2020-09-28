const https = require('https')
const url = 'https://covid19.th-stat.com/api/open/today'

https.get(url, res=> {
  res.setEncoding('utf8')
  let body = ""
  res.on("data", data => {
    body += data
  })
  res.on("end", ()=> {
    body = JSON.parse(body)
    console.log(body)
    console.log(body.NewConfirmed)
  })
})

