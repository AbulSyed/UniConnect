// Material icons
import { Search, Forum, AccountBox, ExitToApp } from '@material-ui/icons'

// Styles
import '../styles/nav.scss'

const Nav = () => {
    return ( 
        <div className="nav">
            <div>
                <img className="logo" alt="UniConnect" src={ require('../logo/logo2.png') } />
            </div>
            <div className="search">
                <div className="search-icon">
                    <Search />
                </div>
            </div>
            <ul className="other">
                <li><Forum /></li>
                <li><AccountBox /></li>
                <li><ExitToApp /></li>
            </ul>
        </div>
     );
}
 
export default Nav;