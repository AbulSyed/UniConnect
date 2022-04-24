const mongoose = require('mongoose')

// creating event object to be stored in the database
const eventSchema = new mongoose.Schema({
  organiser: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  attendees: {
    type: Array,
    default: []
  }
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event