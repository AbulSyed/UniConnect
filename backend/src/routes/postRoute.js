const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

// post route endpoints
// localhost:8080/api/posts
router.post('/posts', postController.post_create)
router.delete('/posts/:id', postController.post_delete)
router.get('/posts/account/:id', postController.post_account)

module.exports = router