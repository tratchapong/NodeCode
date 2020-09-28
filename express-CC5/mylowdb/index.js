const express = require('express')
const low = require('lowdb')
const fileAsync = require('lowdb/adapters/FileAsync')

const app = express()
app.use (express.static('public'))
app.use (express.json())
app.use (express.urlencoded({extended:false})) 
const adpater = new fileAsync('db.json') 
low(adpater) 
.then ( db => { app.get('/posts/:id', (req,res) => { const post = db.get('posts')
    .find ( {id : req.params.id})
    .value() 
  res.send(post)
  })
// POST /posts

app.post('/addposts', (req, res) => {
  console.log(req.body)
  db.get('posts')
    .push(req.body)
    .last()
    .assign({ id: Date.now().toString() })
    .write()
    .then(post => res.send(post))
})

return db.defaults({ posts: [] }).write()
})

app.listen(3000, ()=> console.log('server start..'))