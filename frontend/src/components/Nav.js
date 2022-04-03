import '../styles/nav.scss'
import { Search, CameraAlt, Forum, AccountBox, ExitToApp } from '@material-ui/icons'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const Nav = () => {
    const { state, signout } = useContext(AuthContext)

    const handleSignout = () => {
        signout()
    }

    return ( 
        <div className="nav">
            <Link to="/">
                <img className="logo" alt="UniConnect" src={ require('../logo/logo2.png') } />
            </Link>
            {/* if student is logged in, show all other nav links else hide */}
            {
            
            state.student ? <>

            <div className="search">
                <div className="search-icon">
                    <Link to="/search" className="link">
                        <Search />
                    </Link>
                </div>
            </div>
            <ul className="other">
                <li><Link to="/addPost" className="link"><CameraAlt /></Link></li>
                <li><Link to="/chat" className="link"><Forum /></Link></li>
                <li><Link to={ `/account/${state.student._id}` } className="link"><AccountBox /></Link></li>
                <li onClick={ handleSignout }><ExitToApp /></li>
            </ul> </> : null

            }
        </div>
     );
}
 
export default Nav;