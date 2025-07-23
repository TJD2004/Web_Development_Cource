const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  //res.sendFile('..dummy.html', {root:_dirname});
  res.send("Get a Get Request");
})
// define the about route
router.post('/post', (req, res) => {
  res.json({x:1, y:2, z:3});
})

router.put('/put', (req, res) => {
    res.send("Get a put Request");
})

router.delete('/delete', (req, res) => {
    res.send("Get a Delete Request");
})

module.exports = router