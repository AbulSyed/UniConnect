// Components
import Main from '../components/Main';
import Bio from '../components/Bio';
import { Collections } from '@material-ui/icons';

// Styles
import '../styles/account.scss'

const Account = () => {
    return ( 
        <>
            <div className="account">
                <div className="container">
                    <div className="accountUpper">
                        <div className="accountCover">
                            <img className="accountCoverPic" src="https://i.pinimg.com/originals/dd/d5/b2/ddd5b2f90e660eb4f881a59c416f3ac9.jpg" alt="" />
                            <img className="accountUserPic" src="https://timelinecovers.pro/facebook-cover/download/photography-city-lights-facebook-cover.jpg" alt="" />
                            <Collections className="uploadIcon" />
                        </div>
                        <div className="accountUser">
                            <h3 className="accountUserName">Abul Syed</h3>
                        </div>
                    </div>
                    <div className="accountLower">
                        <Main />
                        <Bio />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Account;