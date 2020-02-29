const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.resolve(__dirname)))
app.use('/monster-rolodex', express.static(path.resolve(__dirname, 'public/monster-rolodex/build')))

app.listen(3000, () => {
  console.log('listening on port 3000')
})