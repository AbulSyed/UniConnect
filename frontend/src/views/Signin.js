import '../styles/auth.scss'
import { Input } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useRef, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const Signin = () => {
    const { state, signin } = useContext(AuthContext);

    const email = useRef()
    const password = useRef()

    const handleSignin = async (e) => {
        e.preventDefault()
        // dispatching signin action
        await signin(email.current.value, password.current.value)
    }

    return ( 
        <div className="auth">
            <div className="top">
                <div className="logo">
                    <img alt="UniConnect" src={ require('../logo/logo.png') } />
                </div>
                <h1 className="title">Web application connecting like-minded students</h1>
            </div>
            <form onSubmit={ handleSignin }>
                <input type="email" required placeholder="email" ref={ email } />
                <input type="password" required placeholder="password" ref={ password } />
                <div className="err">{ state.errMsg }</div>
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