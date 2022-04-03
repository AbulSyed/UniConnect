import '../styles/home.scss'
import Main from '../components/Main'
import Connections from '../components/Connections'

const Home = () => {
    return ( 
        <>
            <div className="body">
                <Main />
                <Connections />
            </div>
        </>
     );
}
 
export default Home;