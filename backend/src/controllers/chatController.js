const Chat = require('../models/chat')

// new chat
const chat_create = async (req, res) => {
    const chat = new Chat({
        students: [req.body.dispatcherId, req.body.recipientId]
    })

    try {
        await chat.save()
        res.status(201).send(chat)
    }catch(err){
        res.status(400).send(err)
    }
}

// add a user to a chat - for group chatting
const chat_add_student = async (req, res) => {
    try {
        const chat = await Chat.findById(req.params.chatId)
        await chat.updateOne({ $push: 
            { students: req.body.recipientId }
        })

        res.status(200).send(chat)
    }catch(err){
        res.status(400).send(err)
    }
}

// get chat of a student
const chat_get = async (req, res) => {
    try {
        const chat = await Chat.find({
            students: { $in: [req.params.studentId] },
        })
        res.status(200).send(chat)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    chat_create,
    chat_add_student,
    chat_get
}