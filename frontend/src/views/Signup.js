// Components
import { Input } from '@material-ui/icons'

// Styles
import '../styles/signup.scss'

const Signup = () => {
    return ( 
        <div class="signup">
            <div class="top">
                <div className="logo">
                    <img alt="UniConnect" src={ require('../logo/logo2.png') } />
                </div>
                <h1 className="title">Web application connecting like-minded individuals</h1>
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
                <p>Already registered? Sign In</p>
            </div>
        </div>
     );
}
 
export default Signup;