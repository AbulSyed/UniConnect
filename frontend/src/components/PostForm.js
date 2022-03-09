// Material icons
import { Collections } from '@material-ui/icons'

// Styles
import '../styles/postform.scss'

const PostForm = () => {
    return ( 
        <div className="postForm">
            <div className="container">
                <div className="postFormUpper">
                    <img src="https://i.pinimg.com/originals/dd/d5/b2/ddd5b2f90e660eb4f881a59c416f3ac9.jpg" className="postFormImg" alt="" />
                    <input placeholder="Start typing..." className="postFormInput" />
                </div>
                <hr className="postFormHr" />
                <div className="postFormLower">
                    <label htmlFor="file" className="postFormLabel">
                        <Collections htmlColor="purple" className="postFormGallery" />
                        <span className="postFormHeading">Click to upload a photo</span>
                        {/* <input style={{ display: 'none' }} type="file" id="file"accept=".png,.jpeg,.jpg" onChange={ e => setFile(e.target.files[0]) } /> */}
                    </label>
                    <button className="postFormBtn">Share</button>
                </div>
            </div>
        </div>
     );
}
 
export default PostForm;