const mongoose = require('mongoose')

// creating post object to be stored in the database
const postSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  pictureUrl: {
    type: String
  },
  likes: {
    type: Array,
    default: []
  }
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post