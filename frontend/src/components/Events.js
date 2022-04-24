import '../styles/events.scss'
import Button from '@material-ui/core/Button'
import { useState, useContext, useEffect } from 'react'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'
import CreateEventDialog from './CreateEventDialog'

const Events = () => {
    const [events, setEvents] = useState([])
    const { state } = useContext(AuthContext)

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
                            <p>{ event.location }</p>
                            <p>Time <b>{ event.time }pm</b> - Date <b>{ event.date }</b></p>
                            <Button variant="outlined" color="primary">Join</Button>
                        </div>
                    </div>
                ))
                : <p className="altText">No events organised</p>
            }
        </>
     );
}
 
export default Events;