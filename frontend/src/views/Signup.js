// Material icons
import { Input } from '@material-ui/icons'

// Styles
import '../styles/signup.scss'

import { Link } from 'react-router-dom'
import { useRef, useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const Signup = () => {
    const { signup } = useContext(AuthContext);

    const name = useRef()
    const email = useRef()
    const password = useRef()

    const handleSignup = async (e) => {
        e.preventDefault()
        // dispatching signin action
        await signup(name.current.value, email.current.value, password.current.value)
    }

    return ( 
        <div className="signup">
            <div className="top">
                <div className="logo">
                    <img alt="UniConnect" src={ require('../logo/logo2.png') } />
                </div>
                <h1 className="title">Web application connecting like-minded students</h1>
            </div>
            <form onSubmit={ handleSignup }>
                <input type="text" required placeholder="name" ref={ name } />
                <input type="email" required placeholder="email" ref={ email } />
                <input type="password" required placeholder="password" ref={ password } />
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