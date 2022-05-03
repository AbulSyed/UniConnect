import '../styles/events.scss'
import Button from '@material-ui/core/Button'
import { useState, useContext, useEffect } from 'react'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'
import CreateEventDialog from './CreateEventDialog'
import ShowEventDialog from './ShowEventDialog'

const Events = () => {
    const [events, setEvents] = useState([])
    const { state, joinEvent } = useContext(AuthContext)

    // getting all events
    const getEvents = async () => {
        try {
            const res = await api.get(`/events/`)
            setEvents(res.data)
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

    const handleClick = async (id) => {
        try {
            // add event to student events array
            await api.patch(`/students/add_event/${id}`, {
                studentId: state.student._id
            })
            joinEvent(id)
            // add student to events model
            await api.patch(`/events/attend/${id}`, {
                studentName: state.student.name,
                studentImage: state.student.studentImage,
            })

            window.location.reload()
        }catch(err) {
            console.log(err)
        }
    }

    return ( 
        <>
            <div className="eventHeader">
                <h1>Events</h1>
                <CreateEventDialog />
            </div>
            {   events.length ? 
                events.map(event => (
                    <div className="eventCard" key={ event._id }>
                        <div className="cardHeader">
                            <h4>{ event.title }</h4>
                            <p>{ event.desc }</p>
                            <p>Organised by <b>{ event.organiser }</b></p>
                        </div>
                        <div className="cardCenter">
                            <Button variant="outlined" color="primary" disabled={ state.student.name == event.organiser || state.student.events.includes(event._id) } onClick={ () => handleClick(event._id) }>Join</Button>
                            <ShowEventDialog event={ event } />
                        </div>
                    </div>
                ))
                : <p className="altText">No events organised</p>
            }
        </>
     );
}
 
export default Events;