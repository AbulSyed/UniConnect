import '../styles/main.scss'
import Post from './Post'
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
        await api.get(`/posts/feed/${state.student._id}`)
        setTimeline(
            // ordering of posts (latest first)
            res.data.sort((post1, post2) => {
              return new Date(post2.createdAt) - new Date(post1.createdAt)
            })
        )
    }
    
    useEffect(() => {
        getTimeline(id)
    }, [id])

    return ( 
        <div className="main">
            <div className="container">
                { timeline.length ? timeline.map(post => (
                    <Post key={ post._id } post={ post } />
                ))
                :
                <p>Feed is empty</p>
                }
            </div>
        </div>
     );
}
 
export default Main;