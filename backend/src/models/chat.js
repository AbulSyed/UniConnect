const mongoose = require('mongoose')

// creating chat object to be stored in the database
const chatSchema = new mongoose.Schema({
  students: {
    type: Array,
    unique: true
  }
}, {
  timestamps: true
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat