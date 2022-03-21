const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

// student route endpoints
router.post('/student/signup', studentController.student_signup)
router.post('/student/signin', studentController.student_signin)

module.exports = router