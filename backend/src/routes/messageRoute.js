const express = require('express')
const router = express.Router()
const messageController = require('../controllers/messageController')

// post route endpoints
// localhost:8080/api/message
router.post('/messages', messageController.messsage_create)
router.get('/messages/:chatId', messageController.message_get)

module.exports = router