const express = require('express')
// const ejs = require('ejs')
const fs = require('fs')

users = (JSON.parse(fs.readFileSync('./output.json'))).users
// data = fs.readFileSync('./output.json')
// data = JSON.parse(data)
// users = data.users

// console.log(users)
const app = express()
app.set('view engine', 'ejs')

// app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.render('hello')
})

app.get('/users', (req, res) => {
  res.render('users', {users : users})
})

app.get('/edit/:id', (req, res) => {
  res.render('edit', {user : users.find( x => x.userId === parseInt(req.params.id) )})
})

app.post('/edituser', (req, res) => {
  n = users.findIndex( x => x.userId === parseInt(req.body.userid) )
  users[n].firstName = req.body.firstname
  users[n].lastName = req.body.lastname,
  users[n].phoneNumber = req.body.phone,
  users[n].emailAddress = req.body.email

  res.redirect('users')
})

app.get('/add', (req, res) => {
  res.render('add', {users : users})
})

app.post('/adduser', (req, res) => {
  // console.log(req.body)
  delete req.body.submit
  // console.log(req.body)
  users = [...users,{ 
    userId : users[users.length - 1].userId +1, 
    firstName : req.body.firstname,
    lastName : req.body.lastname,
    phoneNumber : req.body.phone,
    emailAddress : req.body.email
  }]
  // console.log(users)
  res.render('users',{users:users})
})

app.get('/save', (req, res) => {
  let data = { users : [...users]}
  fs.writeFileSync('./output.json', JSON.stringify(data))
  // res.send('Saving data to output.json file')
  res.redirect('/users')
})

app.get('/delete/:id', (req, res) => {
  id = parseInt(req.params.id)
  // console.log(id)
  // console.log(users.findIndex( x => x.userId === id))
  let d = users.findIndex( x => x.userId === id)
  users.splice(d, 1)
  res.redirect('/users')
})

app.listen(3000, ()=> console.log('Server start..'))