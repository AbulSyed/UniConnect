const Message = require('../models/message')

const messsage_create = async (req, res) => {
    const message = new Message(req.body)
  
    try {
        await message.save()
        res.status(201).send(message)
    } catch (err) {
        res.status(400).send(err)
    }
}

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