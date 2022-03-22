const Post = require('../models/post')
const Student = require('../models/student')

// main business logic here in controller

// create a post
const post_create = async (req, res) => {
    const post = new Post(req.body)

    try {
        await post.save()
        res.status(201).send(post)
    }catch(err){
        res.status(400).send(err)
    }
}

module.exports = {
    post_create,
}