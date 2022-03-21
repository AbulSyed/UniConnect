const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

/*

	NOTE: CODE IN LINES 61-88

	The code written below has been modified and reused from a previous API I built: https://github.com/AbulSyed/TaskManagerAPI/blob/main/src/models/user.js

*/

// hashing password before it's saved in database
studentSchema.pre('save', async function(next){
	if(this.isModified('password')){
	  this.password = await bcryptjs.hash(this.password, 8)
	}

	next()
})

// generating jwt to be used on frontend
studentSchema.methods.generateJwt = async function(){
	const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET)
	return token
}

// returning student object if exists & correct password is supplied
studentSchema.statics.findStudent = async (email, password) => {
	const student = await Student.findOne({ email })
	if(!student){
	  throw new Error('Invalid user credentials')
	}

	const validPassword = await bcryptjs.compare(password, student.password)
	if(!validPassword){
	  throw new Error('Invalid user credentials')
	}

	return student
}

const Student = mongoose.model('student', studentSchema)

module.exports = Student