const express = require('express')
const app = express()
const port = 3000
const birds = require('./router/birds')
const items = require('./router/items')

app.use('/birds', birds)

app.use('/items', items)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
