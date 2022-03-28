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
    const { state, friend, unfriend } = useContext(AuthContext)

    // get student
    const getStudent = async (id) => {
        const res = await api.get(`/students/${id}`)
        setStudent(res.data)
    }

    useEffect(() => {
        getStudent(id)
    }, [id])

    // add/remove friends
    const handleAddRemoveFriends = async (isConnected, id) => {
        try {
            if(isConnected){
                await api.patch(`/students/remove_friend/${id}`, {
                    studentId: state.student._id
                })
                unfriend(id)
            }else{
                await api.patch(`/students/add_friend/${id}`, {
                    studentId: state.student._id
                })
                friend(id)
            }
        }catch(err){
            console.log(err)
        }
    }

    return ( 
        <>
            <div className="account">
                <div className="container">
                    <div className="accountUpper">
                        <div className="accountBanner">
                            <img className="accountBannerPic" src={ student.bannerImage } alt="" />
                            <img className="accountUserPic" src={ student.studentImage } alt="" />
                            {
                                // we dont want to allow a user to add themselves to their friends list
                                state.student._id !== id ? 
                                <>
                                {
                                    state.student.friends.includes(id) ?
                                    <Remove className="center" onClick={ () => handleAddRemoveFriends(true, id) } />
                                    :
                                    <Add className="center" onClick={ () => handleAddRemoveFriends(false, id) } />
                                }</>
                                : null
                            }

                            {
                                // we only want to show Change profile/cover image for currently logged in users
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