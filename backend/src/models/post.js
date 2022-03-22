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
  // student id will be stored in thumbsUp array, if they like a post
  thumbsUp: {
    type: Array,
    default: []
  }
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post