import { Edit } from '@material-ui/icons';

// Styles
import '../styles/bio.scss'

import { useState } from 'react'
import api from '../axios/api';

const Bio = ({ student }) => {
    const [editClicked, setEditClicked] = useState(false);
    const [bio, setBio] = useState('');
    const [university, setUniversity] = useState('');
    const [course, setCourse] = useState('');
    const [hobby, setHobby] = useState('');

    // when icon button pressed on bio data, form pops up
    const handleEditClicked = () => {
        setEditClicked(true)
        setBio(student.bio)
        setUniversity(student.university)
        setCourse(student.course)
        setHobby(student.hobby)
    }

    // api req to update students bio & hide form
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const updatedBio = {
            bio,
            university,
            course,
            hobby
        }
        student.bio = updatedBio.bio
        student.university = updatedBio.university
        student.course = updatedBio.course
        student.hobby = updatedBio.hobby
        await api.patch(`/students/${student._id}`, updatedBio)
        setEditClicked(false)
    }

    return ( 
        <>
            {
                editClicked ? 
                <div className="bio-form">
                    <form className="form">
                        <input type="text" placeholder="Bio" value={ bio } onChange={ e => setBio(e.target.value) }/>
                        <input type="text" placeholder="University" value={ university } onChange={ e => setUniversity(e.target.value) }/>
                        <input type="text" placeholder="Course" value={ course } onChange={ e => setCourse(e.target.value) }/>
                        <input type="text" placeholder="Hobby" value={ hobby } onChange={ e => setHobby(e.target.value) }/>
                        <button className="postFormBtn" type="submit" onClick={ handleFormSubmit }>Save</button>
                    </form>
                </div>
                :
                <div className="bio">
                    <Edit className="edit" onClick={ handleEditClicked } />
                    <p>Bio: { student.bio }</p>
                    <p>University: { student.university }</p>
                    <p>Course: { student.course }</p>
                    <p>Hobby: { student.hobby }</p>
                </div>
            }
        </>
     );
}
 
export default Bio;