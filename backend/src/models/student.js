const mongoose = require('mongoose')

// creating student user object to be stored in the database

const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    studentImage: {
      type: String,
      default: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
    },
    bannerImage: {
      type: String,
      default: 'https://www.sportanddev.org/sites/default/files/styles/spor_banner_cropped_style/public/default_images/default-organization-cover_1.png?itok=uhQ_5F9k'
    },
    friends: {
      type: Array,
      default: []
    },
    bio: {
      type: String,
      default: ''
    },
    university: {
      type: String,
      default: ''
    },
    course: {
      type: String,
      default: ''
    },
    hobby: {
      type: String,
      default: ''
    }
  }, {
    timestamps: true
})

const student = mongoose.model('student', studentSchema)

module.exports = student