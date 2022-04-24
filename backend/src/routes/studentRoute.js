const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

// student route endpoints
// localhost:8080/api/students
router.post('/students/signup', studentController.student_signup)
router.post('/students/signin', studentController.student_signin)
router.get('/students', studentController.student_get_all)
router.get('/students/:id', studentController.student_get)
router.get('/students/friends/:id', studentController.student_friends_get)
router.patch('/students/:id', studentController.student_update)
router.patch('/students/add_friend/:id', studentController.student_add_friend)
router.patch('/students/remove_friend/:id', studentController.student_remove_friend)
router.patch('/students/add_event/:id', studentController.student_add_event)

module.exports = router