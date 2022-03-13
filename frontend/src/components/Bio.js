import { Edit } from '@material-ui/icons';

// Styles
import '../styles/bio.scss'

const Bio = () => {
    return ( 
        <div className="bio">
            <Edit className="edit" />
            <p>Bio: Hi I'm Abul and I like playing video games</p>    
            <p>University: City University of London</p>    
            <p>Course: Computer Science</p>    
            <p>Hobby: Joggin</p>    
        </div>
        // <div className="bio-form">
        //     <form className="form">
        //         <input type="text" placeholder="Bio" />
        //         <input type="text" placeholder="University" />
        //         <input type="text" placeholder="Course" />
        //         <input type="text" placeholder="Hobby" />
        //         <button className="postFormBtn" type="submit">Save</button>
        //     </form>
        // </div>
     );
}
 
export default Bio;