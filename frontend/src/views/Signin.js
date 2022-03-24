// Components
import { Input } from '@material-ui/icons'
import { Link } from 'react-router-dom'

// Styles
import '../styles/signin.scss'

const Signin = () => {
    return ( 
        <div className="signin">
            <div className="top">
                <div className="logo">
                    <img alt="UniConnect" src={ require('../logo/logo2.png') } />
                </div>
                <h1 className="title">Web application connecting like-minded students</h1>
            </div>
            <form>
                <input type="email" required placeholder="email" className="loginInput" />
                <input type="password" required placeholder="password" className="loginInput" />
                <button>
                    <Input />
                </button>
            </form>
            <div className="bottom">
                <p>New here? <strong><Link to="/signup" className="link">Sign Up</Link></strong></p>
            </div>
        </div>
     );
}
 
export default Signin;