const Event = require('../models/event')

// main business logic here in controller

// creating a event
const event_create = async (req, res) => {
    const event = new Event({
        organiser: req.params.id,
        ...req.body,
        attendees: req.params.id
    })

    try {
        await event.save()
        res.status(200).send(event)
    }catch(err) {
        res.status(400).send()
    }
}

// if users wants to attend event, we add their id to the attendees array
const event_attend = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)

        if(event.attendees.includes(req.body.studentId)){
            // remove student id from event attendees array
            await event.updateOne({ $pull: 
                { attendees: req.body.studentId }
            })
            res.status(200).send('Remove attendence')
        }else{
            // add student id to event attendees array
            await event.updateOne({ $push: 
                { attendees: req.body.studentId }
            })
            res.status(200).send('Added attendence')
        }
    }catch(err) {
        res.status(400).send()
    }
}

// getting all events
const event_get_all = async (req, res) => {
    try {
        // getting all events
        const events = await Event.find({})
        res.status(200).send(events)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {
    event_create,
    event_attend,
    event_get_all,
}