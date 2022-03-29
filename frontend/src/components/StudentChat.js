import '../styles/studentChat.scss'

import { useEffect, useContext, useState } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import api from '../axios/api'

const StudentChat = ({ chat }) => {
    const [student, setStudent] = useState([])
    const { state } = useContext(AuthContext)

    const friendId = chat.students.find(curr => curr !== state.student._id)

    const getStudent = async (id) => {
        try {
            const res = await api.get(`/students/${id}`)
            setStudent(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getStudent(friendId)
    }, [])

    return ( 
        <div className="studentChat">
            <img className="studentChatImg" src={ student.studentImage } />
            <span>{ student.name }</span>
        </div>
    );
}
 
export default StudentChat;