// Components
import Main from '../components/Main';
import Bio from '../components/Bio';
import ChangeImageDialog from '../components/ChangeImageDialog'
import { Add, Remove } from '@material-ui/icons'

// Styles
import '../styles/account.scss'

import { useContext, useState, useEffect } from 'react'
import api from '../axios/api'
import { useParams } from 'react-router-dom';
import { Context as AuthContext } from '../context/AuthContext'

const Account = () => {
    const [student, setStudent] = useState([])
    const { id } = useParams();
    const { state } = useContext(AuthContext)

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
                            <Add className="center" />
                            {/* <Remove className="center" /> */}
                            {
                                state.student._id === id ? 
                                <>
                                    <ChangeImageDialog imageType={ 'account' } />
                                    <ChangeImageDialog imageType={ 'banner' } />
                                </>
                                :
                                null
                            }
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