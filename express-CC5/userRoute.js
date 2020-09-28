const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
  res.send('No user')
})
router.get('/first',(req, res)=> {
  res.send('First User')
})

router.get('/second',(req, res)=> {
  res.send('Second User')
})

module.exports = router
