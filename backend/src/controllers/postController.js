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

        if(post.likes.includes(req.body.studentId)){
            // remove student id to post likes array
            await post.updateOne({ $pull: 
                { likes: req.body.studentId }
            })
            res.status(200).send('Disliked')
        }else{
            // add student id to post likes array
            await post.updateOne({ $push: 
                { likes: req.body.studentId }
            })
            res.status(200).send('Liked')
        }
    } catch (err) {
        res.status(400).send(err)
    }
}

// get timeline posts - (current student posts + other student posts that you are friends with)
const post_timeline = async (req, res) => {
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

module.exports = {
    post_create,
    post_delete,
    post_account,
    post_like,
    post_timeline
}