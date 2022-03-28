const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

// student route endpoints
// localhost:8080/api/students
router.post('/students/signup', studentController.student_signup)
router.post('/students/signin', studentController.student_signin)
router.get('/students', studentController.student_get_all)
router.get('/students/:id', studentController.student_get)
router.get('/students/connections/:id', studentController.student_connections_get)
router.patch('/students/:id', studentController.student_update)
router.patch('/students/add_friend/:id', studentController.student_add_friend)
router.patch('/students/remove_friend/:id', studentController.student_remove_friend)

module.exports = router