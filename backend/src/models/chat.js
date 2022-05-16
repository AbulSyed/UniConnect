const mongoose = require('mongoose')

/*

    A online tutorial as a guidance to help write the code in this file
    Close to all the code written in this file is different to the code written in the tutorial

    Link to online tutorial: https://www.youtube.com/watch?v=HggSXt1Hzfk&t
    GitHub link: https://github.com/safak/youtube/blob/chat-app/api/models/Conversation.js

*/

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