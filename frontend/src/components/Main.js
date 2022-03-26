// Components
import Post from './Post'

// Styles
import '../styles/main.scss'

import { useState, useEffect, useContext } from 'react'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'

const Main = ({ id }) => {
    const [timeline, setTimeline] = useState([])

    const { state } = useContext(AuthContext)

    // get timeline post for logged in user
    const getTimeline = async (id) => {
        const res = id ?
        await api.get(`/posts/account/${id}`) :
        await api.get(`/posts/${state.student._id}`)
        setTimeline(res.data)
        // setTimeline(
        //     res.data.sort((p1, p2) => {
        //       return new Date(p2.createdAt) - new Date(p1.createdAt)
        //     })
        // )
    }
    
    useEffect(() => {
        getTimeline(id)
    }, [id])

    return ( 
        <div className="main">
            <div className="container">
                { timeline.map(post => (
                    <Post key={ post._id } post={ post } />
                )) }
            </div>
        </div>
     );
}
 
export default Main;