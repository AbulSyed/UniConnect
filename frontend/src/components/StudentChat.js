import '../styles/studentChat.scss'
import { useEffect, useContext, useState } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import api from '../axios/api'

const StudentChat = ({ chat }) => {
    const [students, setStudents] = useState([])
    const { state } = useContext(AuthContext)

    const friendsId = chat.students.filter(curr => curr !== state.student._id)

    const getStudent = async (friendsId) => {
        try {
            // if there is a groupchat
            if(friendsId.length > 1) {
                const students = []
                for (let i = 0; i < friendsId.length; i++) {
                    const el = friendsId[i];
                    const res = await api.get(`/students/${el}`)
                    students.push(res.data)
                }
                setStudents(students)
            }else {
                const res = await api.get(`/students/${friendsId}`)
                setStudents(res.data)
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getStudent(friendsId)
    }, [])

    return ( 
        <div className="studentChat">
            {
                // if the chat has 3 or more users
                students.length > 1 ?

                <>
                    {
                        students.map(student => (
                            <>
                                <img className="studentChatImg" src={ student.studentImage } />
                                <span>{ student.name }</span>
                            </>
                        ))
                    }
                </> :
                // if the chat has only 2 users
                <>
                    <img className="studentChatImg" src={ students.studentImage } />
                    <span>{ students.name }</span>
                </>
            }
        </div>
    );
}
 
export default StudentChat;