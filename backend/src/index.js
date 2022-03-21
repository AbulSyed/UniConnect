const express = require('express')
require('./database/db')
const studentRoute = require('./routes/studentRoute')

// initializing express server
const app = express()
const port = process.env.PORT

// parse incoming JSON
app.use(express.json())
app.use('/api', studentRoute)

app.listen(port, () => {
  console.log('Server up on port:', port)
})