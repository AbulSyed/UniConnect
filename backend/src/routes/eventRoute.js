const express = require('express')
const router = express.Router()
const eventController = require('../controllers/eventController')

// event route endpoints
// localhost:8080/api/posts
router.post('/events/:id', eventController.event_create)
router.patch('/events/attend/:id', eventController.event_attend)
router.get('/events', eventController.event_get_all)

module.exports = router