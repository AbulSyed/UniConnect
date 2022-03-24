// Components
import Main from '../components/Main';
import Bio from '../components/Bio';
import { Collections } from '@material-ui/icons';

// Styles
import '../styles/account.scss'

import { useState, useEffect } from 'react'
import api from '../axios/api'
import { useParams } from 'react-router-dom';

const Account = () => {
    const [student, setStudent] = useState([])
    const { id } = useParams();

    // get student
    const getStudent = async (id) => {
        const res = await api.get(`/students/${id}`)
        setStudent(res.data)
    }

    useEffect(() => {
        getStudent(id)
    }, [id])

    return ( 
        <>
            <div className="account">
                <div className="container">
                    <div className="accountUpper">
                        <div className="accountBanner">
                            <img className="accountBannerPic" src={ student.bannerImage } alt="" />
                            <img className="accountUserPic" src={ student.studentImage } alt="" />
                            <Collections className="uploadIcon" />
                        </div>
                        <div className="accountUser">
                            <h3 className="accountUserName">{ student.name }</h3>
                        </div>
                    </div>
                    <div className="accountLower">
                        <Main id={ id } />
                        <Bio student={ student } />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Account;