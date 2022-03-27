// Material icons
import { Delete, ThumbUp } from '@material-ui/icons'

// Styles
import '../styles/post.scss'

import { useState, useEffect, useContext } from 'react'
import api from '../axios/api'
import { formatDistanceToNow } from 'date-fns'
import { Link } from 'react-router-dom'
import { Context as AuthContext } from '../context/AuthContext'

const Post = ({ post }) => {
    const [student, setStudent] = useState([])
    const [thumbsUp, setThumbsUp] = useState(post.thumbsUp.length)
    const [isThumbsUp, setIsThumbsUp] = useState(false)

    // get student
    const getStudent = async () => {
        const res = await api.get(`/students/${post.studentId}`)
        setStudent(res.data)
    }
    
    useEffect(() => {
        getStudent()
    }, [])

    const { state } = useContext(AuthContext)

    // like/dislike a post
    const handleThumbsUp = async () => {
        await api.patch(`/posts/${post._id}/like`, { studentId: state.student._id })
        setThumbsUp(isThumbsUp ? thumbsUp - 1 : thumbsUp + 1)
        setIsThumbsUp(!isThumbsUp);
    }

    return ( 
        <div className="post">
            <div className="post-toolbar">
                <div className="img-name">
                    <Link to={ `/account/${student._id}` }>
                        <img src={ student.studentImage } className="postFormImg" alt="" />
                    </Link>
                    <h3 className="posted-by">{ student.name }</h3>
                </div>
                <p className="postDate">{ formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }) }</p>
                {/* show delete icon, only if users owns the post */}
                {
                    state.student._id === post.studentId ? 

                    <div className="delete">
                        <Delete />
                    </div> : null
                }
            </div>
            <hr />
            <p className="post-text">{ post.text }</p>
            {
                post.pictureUrl ? <img src={ post.pictureUrl } alt="" className="post-photo" /> : null
            }
            <div className="post-footer">
                <div className="like">
                    <ThumbUp onClick={ handleThumbsUp } color={ isThumbsUp ? 'primary' : 'action' } />
                </div>
                <p>{ thumbsUp } people like</p>
            </div>
        </div>
     );
}
 
export default Post;