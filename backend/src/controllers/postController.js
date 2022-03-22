const Post = require('../models/post')
const Student = require('../models/student')

// main business logic here in controller

// create a post
const post_create = async (req, res) => {
    // create new instance of post
    const post = new Post(req.body)

    try {
        // saving to db
        await post.save()
        res.status(201).send(post)
    }catch(err){
        res.status(400).send(err)
    }
}

// deleting a post
const post_delete = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).send('Post deleted')
    }catch(err){
        res.status(400).send(err)
    }
}

// get all posts by user to be displayed on user account
const post_account = async (req, res) => {
    try {
        const posts = await Post.find({ studentId: req.params.id })
        res.status(200).send(posts)
    }catch(err){
        res.status(400).send(err)
    }
}

module.exports = {
    post_create,
    post_delete,
    post_account,
}