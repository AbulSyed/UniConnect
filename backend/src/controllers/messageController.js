const Message = require('../models/message')
const Student = require('../models/student')

// create a new message
const messsage_create = async (req, res) => {
    try {
        const student = await Student.findById(req.body.dispatcherId)
        // appending studentImage to each message
        const message = new Message({
            ...req.body,
            studentImage: student.studentImage
        })

        await message.save()
        res.status(201).send(message)
    } catch (err) {
        res.status(400).send(err)
    }
}

// getting messages
const message_get = async (req, res) => {
    try {
        const msgs = await Message.find({
            chatId: req.params.chatId,
        })
        res.status(200).send(msgs)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    messsage_create,
    message_get
}