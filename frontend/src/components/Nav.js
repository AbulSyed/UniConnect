// Material icons
import { Search, CameraAlt, Forum, AccountBox, ExitToApp } from '@material-ui/icons'
import { Link } from "react-router-dom"

// Styles
import '../styles/nav.scss'

const Nav = () => {
    return ( 
        <div className="nav">
            <Link to="/">
                <img className="logo" alt="UniConnect" src={ require('../logo/logo2.png') } />
            </Link>
            <div className="search">
                <div className="search-icon">
                    <Link to="/search" className="link">
                        <Search />
                    </Link>
                </div>
            </div>
            <ul className="other">
                <li><Link to="/addPost" className="link"><CameraAlt /></Link></li>
                <li><Link to="/" className="link"><Forum /></Link></li>
                <li><Link to="/account/1" className="link"><AccountBox /></Link></li>
                <li><Link to="/signin" className="link"><ExitToApp /></Link></li>
            </ul>
        </div>
     );
}
 
export default Nav;