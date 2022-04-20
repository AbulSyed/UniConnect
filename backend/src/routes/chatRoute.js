const express = require('express')
const router = express.Router()
const chatController = require('../controllers/chatController')

// post route endpoints
// localhost:8080/api/chat
router.post('/chat', chatController.chat_create)
router.patch('/chat/add/:chatId', chatController.chat_add_student)
router.get('/chat/:studentId', chatController.chat_get)

module.exports = router