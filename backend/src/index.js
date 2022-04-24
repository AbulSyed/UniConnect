const express = require('express')
const cors = require('cors')
require('./database/db')
const studentRoute = require('./routes/studentRoute')
const postRoute = require('./routes/postRoute')
const chatRoute = require('./routes/chatRoute')
const messageRoute = require('./routes/messageRoute')
const eventRoute = require('./routes/eventRoute')

// initializing express server
const app = express()
const port = process.env.PORT

// parse incoming JSON
app.use(express.json())
app.use(cors())
// register routes
app.use('/api', studentRoute)
app.use('/api', postRoute)
app.use('/api', chatRoute)
app.use('/api', messageRoute)
app.use('/api', eventRoute)

app.listen(port, () => {
  console.log('Server up on port:', port)
})