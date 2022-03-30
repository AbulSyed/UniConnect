import '../styles/chat.scss'

import { useState, useContext, useEffect } from 'react'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'
import NewChatDialog from '../components/NewChatDialog'
import { Send } from '@material-ui/icons'
import StudentChat from '../components/StudentChat'

const Chat = () => {
    const { state } = useContext(AuthContext)
    const [chat, setChat] = useState([])
    const [currChat, setCurrChat] = useState(null)
    const [messages, setMessages] = useState([])

    const getChat = async () => {
        try {
            const res = await api.get(`/chat/${state.student._id}`)
            setChat(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getChat()
    }, [state.student._id])

    const getMessages = async () => {
        try {
            const res = await api.get(`/messages/${currChat._id}`)
            setMessages(res.data)
        } catch (err) {
            console.log(err)            
        }
    }

    useEffect(() => {
        getMessages()
    }, [currChat?._id])

    // const getStudent = async () => {
    //     try {
    //         const res = await api.get(`students/${id}`)
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }

    return ( 
        <div className="chat">
            <div className="existingChats">
                {
                    chat.map(c => (
                        <div key={ c._id } onClick={ () => setCurrChat(c) } >
                            <StudentChat chat={ c } />
                        </div>
                    ))
                }
            </div>
            <div className="mainChat">
                <div className="mainChatContainer">

                    {
                        currChat ? <>

                            <div className="mainChatMessage">
                                {
                                    messages.map(message => (
                                        <div className={ message.dispatcherId == state.student._id ? 'mainChatMessages self' : 'mainChatMessages' }>
                                            <div className="messageImgAndText">
                                                <img className="messageImage" src="https://firebasestorage.googleapis.com/v0/b/uniconnect-4d327.appspot.com/o/images%2F62421b628ebdb312b08b6005%2Fmiles.jpeg1648499623974?alt=media&token=006aa2ca-281c-44c3-aea0-5793f524549d" alt="" />
                                                <span className="messageText">{ message.messageContent }</span>
                                            </div>
                                            <div className="messageTime">{ message.createdAt }</div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="messageDiv">
                                <textarea className="messageDivInput" placeholder="Type a message..." />
                                <button className="messageDivBtn"><Send /></button>
                            </div>

                        </>
                        :
                        <div className="newChatDialog">
                            <NewChatDialog message={ "Open a chat or start a new chat" } />
                        </div>
                    }

                </div>
            </div>
            <div className="newChat">
                {
                    currChat ? <NewChatDialog message={ "Start a new chat" } /> : null
                }
            </div>
        </div>
     );
}
 
export default Chat;