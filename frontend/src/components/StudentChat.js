import '../styles/studentChat.scss'
import { useEffect, useContext, useState } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import api from '../axios/api'

const StudentChat = ({ chat }) => {
    const [student, setStudent] = useState([])
    const [student2, setStudent2] = useState([])
    const { state } = useContext(AuthContext)

    const friendsId = chat.students.filter(curr => curr !== state.student._id)

    const getStudent = async (id) => {
        try {
            const res = await api.get(`/students/${id}`)
            setStudent(res.data)
            console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }

    const getStudent2 = async (id) => {
        try {
            const res = await api.get(`/students/${id}`)
            setStudent2(res.data)
            console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getStudent(friendsId[0])
        getStudent2(friendsId[1])
    }, [])

    return ( 
        <div className="studentChat">
            {
                student2.length == 0 ? <>
                    <img className="studentChatImg" src={ student.studentImage } />
                    <span>{ student.name }</span>
                </> : 
                <>
                    <img className="studentChatImg" src={ student.studentImage } />
                    <img className="studentChatImg" src={ student2.studentImage } />
                    <span>{ student.name } &amp; { student2.name }</span>
                </>
            }
            
        </div>
    );
}
 
export default StudentChat;