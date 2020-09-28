const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const fs = require('fs')

app.set('view engine', 'ejs')
let data = JSON.parse(fs.readFileSync('./sample.json'))
users = data.users

app.use('/dosearch',express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('showdata', {users:users})
})

app.post('/dosearch', (req, res) => {
  console.log(req.body)
  // res.send(users.filter( x => x.firstName.includes(req.body.firstname)))
  if (req.body.firstname === '*')
    return res.render('showdata', {users:users})
  result = users.filter( x => x.firstName.includes(req.body.firstname))
  res.render('showdata', {users:result})
})

app.listen(3000, (req, res)=> console.log('Server start..'))