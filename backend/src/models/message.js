const mongoose = require('mongoose')

// creating message object to be stored in the database
const messageSchema = new mongoose.Schema({
  chatId: {
    type: String
  },
  dispatcherId: {
    type: String
  },
  messageContent: {
    type: String
  }
}, {
  timestamps: true
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message