// Material icons
import { Search, Chat, Person, ExitToApp } from '@material-ui/icons'

// Styles
import '../styles/nav.css'

const Nav = () => {
    return ( 
        <div className="nav">
            <div className="logo">
                <span className="uni">Uni</span><span className="connect">Connect</span>
            </div>
            <div className="search">
                <div className="search-icon">
                    <Search />
                </div>
            </div>
            <ul className="other">
                <li><Chat /></li>
                <li><Person /></li>
                <li><ExitToApp /></li>
            </ul>
        </div>
     );
}
 
export default Nav;