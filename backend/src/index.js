const express = require('express')
require('./database/db')

// initializing express server
const app = express()
const port = process.env.PORT

// parse incoming JSON
app.use(express.json())

app.listen(port, () => {
  console.log('Server up on port:', port)
})