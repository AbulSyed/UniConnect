// Components
import { Input } from '@material-ui/icons'
import { Link } from 'react-router-dom'

// Styles
import '../styles/signup.scss'

const Signup = () => {
    return ( 
        <div className="signup">
            <div className="top">
                <div className="logo">
                    <img alt="UniConnect" src={ require('../logo/logo2.png') } />
                </div>
                <h1 className="title">Web application connecting like-minded students</h1>
            </div>
            <form>
                <input type="text" required placeholder="name" className="signupInput" />
                <input type="email" required placeholder="email" className="signupInput" />
                <input type="password" required placeholder="password" className="signupInput" />
                <button>
                    <Input />
                </button>
            </form>
            <div className="bottom">
                <p>Already registered? <strong><Link to="/signin" className="link">Sign In</Link></strong></p>
            </div>
        </div>
     );
}
 
export default Signup;