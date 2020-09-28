const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users
let listcounter = 0

app.use('/list', (req, res, next) => {
  listcounter++
  console.log('Request number :' + listcounter)
  next()
})

app.get('/list', (req, res) => {
  res.send(users)
})

app.get('/search', (req, res) => {
  res.send(users.find( x=> x.firstName===req.query.uname))
})

app.get('/users/:uid', (req, res)=> {
  console.log(req.params.uid.length)
  res.send(users[parseInt(req.params.uid)-1])
})

app.get('/username/:uname', (req,res) => {
  res.send(users.find( x=> x.firstName===req.params.uname))
})


app.get('/listname', (req, res) => {
  let outHTML ='<ol>'
  users.forEach( x=> {
    outHTML += `<li> ${x.firstName} ${x.lastName} <b> ${x.emailAddress}</b> </li>`
  })
  outHTML += '</ol>'
  res.send(outHTML)
})

app.get('/showuser', (req, res) => {
  let outHTML = `<style> 
    table, th, td {
    border: 1px dashed grey;
    border-collapse: collapse;
    padding : 5px;
  }
  </style>`
  outHTML +=`<table>`
  outHTML += `<tr>`
  for (let key in users[0])
    outHTML += `<th> ${key} </th>`
  outHTML += `</tr>`

  users.forEach( x=> {
    outHTML += `<tr>`
    for(let key in x)
      outHTML += `<td> ${x[key]} </td>`
    outHTML += '</tr>'
  })
  outHTML += '</table>'
  res.send(outHTML)
})

app.listen(3000, ()=>console.log('server start..'))
