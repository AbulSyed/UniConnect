const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

// post route endpoints
// localhost:8080/api/posts
router.post('/posts', postController.post_create)
router.delete('/posts/:id', postController.post_delete)
router.patch('/posts/:id/like', postController.post_like)
router.get('/posts/:id', postController.post_get)
router.get('/posts/feed/:id', postController.post_feed)
router.get('/posts/account/:id', postController.post_account)
router.post('/posts/comments/:id', postController.post_comment_create)

module.exports = router