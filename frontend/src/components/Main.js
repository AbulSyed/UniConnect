// Components
import PostForm from './PostForm'
import Post from './Post'

// Styles
import '../styles/main.scss'

const Main = () => {
    return ( 
        <div className="main">
            <div className="container">
                <PostForm />
                <Post />
            </div>
        </div>
     );
}
 
export default Main;