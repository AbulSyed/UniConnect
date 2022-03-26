import '../styles/search.scss';
import { Add, Remove } from '@material-ui/icons';

const Search = () => {

  return ( 
    <div className="search">
      <div className="container">
        <div className="profiles">
            <div className="profile">
                <img src="https://i.pinimg.com/originals/dd/d5/b2/ddd5b2f90e660eb4f881a59c416f3ac9.jpg" className="profile-pic" alt="" />
                <p className="name">Abul</p>
                {/* <Remove className="symbol" /> */}
                <Add className="symbol" />
            </div>
            <div className="profile">
                <img src="https://i.pinimg.com/originals/dd/d5/b2/ddd5b2f90e660eb4f881a59c416f3ac9.jpg" className="profile-pic" alt="" />
                <p className="name">Abul</p>
                {/* <Remove className="symbol" /> */}
                <Add className="symbol" />
            </div>
            <div className="profile">
                <img src="https://i.pinimg.com/originals/dd/d5/b2/ddd5b2f90e660eb4f881a59c416f3ac9.jpg" className="profile-pic" alt="" />
                <p className="name">Abul</p>
                {/* <Remove className="symbol" /> */}
                <Add className="symbol" />
            </div>
            <div className="profile">
                <img src="https://i.pinimg.com/originals/dd/d5/b2/ddd5b2f90e660eb4f881a59c416f3ac9.jpg" className="profile-pic" alt="" />
                <p className="name">Abul</p>
                {/* <Remove className="symbol" /> */}
                <Add className="symbol" />
            </div>
            <div className="profile">
                <img src="https://i.pinimg.com/originals/dd/d5/b2/ddd5b2f90e660eb4f881a59c416f3ac9.jpg" className="profile-pic" alt="" />
                <p className="name">Abul</p>
                {/* <Remove className="symbol" /> */}
                <Add className="symbol" />
            </div>
        </div>
      </div>
    </div>
   );
}
 
export default Search;