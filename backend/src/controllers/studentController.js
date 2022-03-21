const Student = require('../models/student')

const student_signup = async (req, res) => {
    // creating new instance of student from form fields
    const student = new Student(req.body)

    try {
        // saving student object and sending back student with jwt
        await student.save()
        const jwt = await student.generateJwt()
        res.status(201).send({ student, jwt })
    }catch(err){
        res.status(400).send(err)
    }
}

const student_signin = async (req, res) => {
    const { email, password } = req.body

    try {
        // if student exists and password matches, student object will be sent back to frontend along with jwt
        const student = await Student.findStudent(email, password)
        const jwt = await student.generateJwt()
        res.status(200).send({ student, jwt })
      }catch(err){
        res.status(400).send(err.message)
    }
}

module.exports = {
    student_signup,
    student_signin,
}