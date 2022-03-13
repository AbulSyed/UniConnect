// Material icons
import { Delete, ThumbUp } from '@material-ui/icons'

// Styles
import '../styles/post.scss'

const Post = () => {
    return ( 
        <div className="post">
            <div className="post-toolbar">
                <div className="img-name">
                    <img src="https://i.pinimg.com/originals/dd/d5/b2/ddd5b2f90e660eb4f881a59c416f3ac9.jpg" className="postFormImg" alt="" />
                    <h3 className="posted-by">Abul</h3>
                </div>
                <p className="postDate">Posted 5 days ago</p>
                <div className="delete">
                    <Delete />
                </div>
            </div>
            <hr />
            <p className="post-text">description</p>
            <img src="https://cdn.vox-cdn.com/thumbor/5Hb6FQvZOhL6rWxfsNOKIt6og_E=/0x0:1920x1280/1400x1400/filters:focal(0x0:1920x1280):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46580794/milesmorales.0.0.jpeg" alt="" className="post-photo" />
            <div className="post-footer">
                <div className="like">
                    <ThumbUp />
                </div>
                <p>1 person liked</p>
            </div>
        </div>
     );
}
 
export default Post;