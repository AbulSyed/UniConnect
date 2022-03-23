// Material icons
import { Delete, ThumbUp } from '@material-ui/icons'

// Styles
import '../styles/post.scss'

import { useState, useEffect } from 'react'
import api from '../axios/api'
import { formatDistanceToNow } from 'date-fns'

const Post = ({ post }) => {
    const [student, setStudent] = useState([])
    const [likes, setLikes] = useState(post.likes.length);

    // get student
    const getStudent = async () => {
        const res = await api.get(`/students/${post.studentId}`)
        setStudent(res.data)
    }
    
    useEffect(() => {
        getStudent();
    }, []);

    return ( 
        <div className="post">
            <div className="post-toolbar">
                <div className="img-name">
                    <img src={ student.studentImage } className="postFormImg" alt="" />
                    <h3 className="posted-by">{ student.name }</h3>
                </div>
                <p className="postDate">{ formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }) }</p>
                <div className="delete">
                    <Delete />
                </div>
            </div>
            <hr />
            <p className="post-text">{ post.text }</p>
            <img src={ post.pictureUrl } alt="" className="post-photo" />
            <div className="post-footer">
                <div className="like">
                    <ThumbUp />
                </div>
                <p>{ likes } people like</p>
            </div>
        </div>
     );
}
 
export default Post;