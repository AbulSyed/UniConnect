import '../styles/home.scss'
import Main from '../components/Main'
import RightBar from '../components/RightBar'

const Home = () => {
    return ( 
        <>
            <div className="body">
                <Main />
                <RightBar />
            </div>
        </>
     );
}
 
export default Home;