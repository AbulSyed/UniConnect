const express = require('express')
require('./database/db')
const studentRoute = require('./routes/studentRoute')
const postRoute = require('./routes/postRoute')

// initializing express server
const app = express()
const port = process.env.PORT

// parse incoming JSON
app.use(express.json())
// register routes
app.use('/api', studentRoute)
app.use('/api', postRoute)

app.listen(port, () => {
  console.log('Server up on port:', port)
})