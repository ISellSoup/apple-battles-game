const express = require('express')
const app = express()
const port = 3000
let count = 0

app.use(express.static('public'))

app.get('/', (req, res) => {
  count++
  console.log(count)
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log(count)