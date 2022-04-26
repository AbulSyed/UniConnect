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
    } catch (err) {
        res.status(400).send(err)
    }
}

// deleting a post
const post_delete = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(204).send('Post deleted')
    } catch (err) {
        res.status(400).send(err)
    }
}

// liking and unliking a post
const post_like = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if(post.thumbsUp.includes(req.body.studentId)){
            // remove student id to post thumbsUp array
            await post.updateOne({ $pull: 
                { thumbsUp: req.body.studentId }
            })
            res.status(200).send('Disliked')
        }else{
            // add student id to post thumbsUp array
            await post.updateOne({ $push: 
                { thumbsUp: req.body.studentId }
            })
            res.status(200).send('Liked')
        }
    } catch (err) {
        res.status(400).send(err)
    }
}

// get feed - (current student posts + other student posts that you are friends with)
const post_feed = async (req, res) => {
    try {
        // get the students posts
        const student = await Student.findById(req.params.id)
        const studentPosts = await Post.find({ studentId: req.params.id })

        // get posts of friends
        const postOfFriends = await Promise.all(
            student.friends.map(curr => {
                return Post.find({ studentId: curr })
            })
        )
        res.status(200).send(studentPosts.concat(...postOfFriends))
    } catch (err) {
        res.status(400).send(err)
    }
}

// get all posts by user to be displayed on user account
const post_account = async (req, res) => {
    try {
        const posts = await Post.find({ studentId: req.params.id })
        res.status(200).send(posts)
    } catch (err) {
        res.status(400).send(err)
    }
}

// add comment
const post_comment_create = async (req, res) => {
    try {
        const student = await Student.findById(req.body.id)
        const post = await Post.findById(req.params.id)

        await post.updateOne({ $push: {
            comments: {
                comment: req.body.comment,
                id: student._id,
                name: student.name,
                studentImage: student.studentImage
            }
        } })
        res.status(200).send('Comment added')
    } catch (err) {
        res.status(400).send(err)
    }
}

// get comments for a post
const post_comment_get = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        res.status(200).send(post.comments)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    post_create,
    post_delete,
    post_account,
    post_like,
    post_feed,
    post_comment_create,
    post_comment_get
}