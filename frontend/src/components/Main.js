// Components
import Post from './Post'

// Styles
import '../styles/main.scss'

import { useState, useEffect } from 'react'
import api from '../axios/api'

const Main = () => {
    const [timeline, setTimeline] = useState([])

    // get timeline post for logged in user
    const getTimeline = async () => {
        const res = await api.get('/posts/6238af302975ad5b4bca0e96')
        setTimeline(res.data)
        // setTimeline(
        //     res.data.sort((p1, p2) => {
        //       return new Date(p2.createdAt) - new Date(p1.createdAt)
        //     })
        // )
    }
    
    useEffect(() => {
        getTimeline();
    }, []);

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