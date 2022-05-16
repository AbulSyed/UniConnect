const mongoose = require('mongoose')

/*

    A online tutorial as a guidance to help write the code in this file
    Close to all the code written in this file is different to the code written in the tutorial

    Link to online tutorial: https://www.youtube.com/watch?v=HggSXt1Hzfk&t
    GitHub link: https://github.com/safak/youtube/blob/chat-app/api/models/Message.js

*/

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
  },
  studentImage: {
    type: String
  }
}, {
  timestamps: true
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message