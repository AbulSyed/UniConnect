const Student = require('../models/student')

// main business logic here in controller

const student_signup = async (req, res) => {
    // creating new instance of student from form fields
    const student = new Student(req.body)

    try {
        // saving student object and sending back to client
        await student.save()
        res.status(201).send(student)
    } catch (err) {
        res.status(400).send(err)
    }
}

const student_signin = async (req, res) => {
    const { email, password } = req.body

    try {
        // if student email exists and password matches, student object will be sent back to frontend
        const student = await Student.findStudent(email, password)
        res.status(200).send(student)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

const student_get_all = async (req, res) => {
    try {
        // getting all students
        const students = await Student.find({})
        res.status(200).send(students)
    } catch (err) {
        res.status(500).send(err)
    }
}

const student_get = async (req, res) => {
    try {
        // getting student by id
        const student = await Student.findById(req.params.id)
        res.status(200).send(student)
    } catch (err) {
        res.status(500).send(err)
    }
}

// get friends of a user using their user id
const student_friends_get = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        const allFriends = await Promise.all(
            student.friends.map((id) => {
                return Student.findById(id)
            })
        )
        let friendList = []
        allFriends.map(friend => {
            // only getting relevant info
            const { _id, name, studentImage } = friend
            friendList.push({ _id, name, studentImage })
        })
        res.status(200).send(friendList)
    } catch(err){
        res.status(400).send(err)
    }
}

const student_update = async (req, res) => {
    try {
        // updating student by id
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(201).send(student)
    } catch (err) {
        res.status(400).send(err)
    }
}

const student_add_friend = async (req, res) => {
    try {
        // current student id to be passed in body of request
        const student = await Student.findById(req.body.studentId)

        // add user to friends array if not already in there
        if(!student.friends.includes(req.params.id)){
            await student.updateOne({ $push: {
                friends: req.params.id
            } })
            res.status(200).send('Friend added')
        }
    } catch (err) {
        res.status(400).send(err)
    }
}

const student_remove_friend = async (req, res) => {
    try {
        // current student id to be passed in body of request
        const student = await Student.findById(req.body.studentId)

        // remove user from friends array if it exists there
        if(student.friends.includes(req.params.id)){
            await student.updateOne({ $pull: {
                friends: req.params.id
            } })
            res.status(200).send('Friend removed')
        }
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    student_signup,
    student_signin,
    student_get_all,
    student_get,
    student_friends_get,
    student_update,
    student_add_friend,
    student_remove_friend
}