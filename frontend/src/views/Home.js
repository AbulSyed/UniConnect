// Components
import Nav from '../components/Nav'
import Main from '../components/Main'
import Connections from '../components/Connections'

// Styles
import '../styles/home.scss'

const Home = () => {
    return ( 
        <>
            <Nav />
            <div className="body">
                <Main />
                <Connections />
            </div>
        </>
     );
}
 
export default Home;