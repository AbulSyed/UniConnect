import '../styles/rightbar.scss'
import Connections from './Connections'
import Events from './Events'

const Rightbar = () => {

    return ( 
        <div className="rightbar">
            <div className="rightbarContainer">
                {/* component located on right side of home page */}
                <Connections />
                <Events />
            </div>
        </div>
     );
}
 
export default Rightbar;