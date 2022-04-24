import '../styles/connections.scss'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'

const Connections = () => {
    const { state } = useContext(AuthContext)
    const [connections, setConnections] = useState([])

    const getConnections = async () => {
        try {
            const res = await api.get(`/students/friends/${state.student._id}`)
            setConnections(res.data)
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getConnections()
    }, [])

    return ( 
        <>
            <h1 className="heading">Friends</h1>
            <ul className="connectionsList">
                {   connections.length ? 
                    connections.map(connection => (
                        <Link key={ connection._id } to={ `/account/${connection._id}` } className="link">
                            <li className="connectionItem">
                                <img className="connectionImg" src={ connection.studentImage } alt="" />
                                <span className="connectionName">{ connection.name }</span>
                            </li>
                        </Link>
                    ))
                    : <p className="altText">No friends</p>
                }
            </ul>
        </>
     );
}
 
export default Connections;