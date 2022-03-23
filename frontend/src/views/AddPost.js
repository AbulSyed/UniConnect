// Components
import { Add } from '@material-ui/icons'

// Styles
import '../styles/addPost.scss'

const AddPost = () => {
    return ( 
        <>
            <h1 className="heading-1">Post something!</h1>
            <form>
                <textarea required placeholder="Start typing..."></textarea>
                <input type="file" />
                <button>
                    <Add />
                </button>
            </form>
        </>
     );
}
 
export default AddPost;