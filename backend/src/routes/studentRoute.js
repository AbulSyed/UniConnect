const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

// student route endpoints
router.get('/', studentController.student_get)

module.exports = router