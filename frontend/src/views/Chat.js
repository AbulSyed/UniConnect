import '../styles/chat.scss'

import { useState, useContext, useEffect } from 'react'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'
import NewChatDialog from '../components/NewChatDialog'
import { Send } from '@material-ui/icons'
import StudentChat from '../components/StudentChat'
import { formatDistanceToNow } from 'date-fns'

const Chat = () => {
    const { state } = useContext(AuthContext)
    const [chat, setChat] = useState([])
    const [currChat, setCurrChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

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

    const handleSend = async () => {
        const res = await api.post('/messages', {
            chatId: currChat._id,
            dispatcherId: state.student._id,
            messageContent: newMessage
        })
        setMessages([...messages, res.data])
        setNewMessage('')
    }

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
                                        <div className={ message.dispatcherId == state.student._id ? 'mainChatMessages' : 'mainChatMessages other' } key={ message._id }>
                                            <div className="messageImgAndText">
                                                <img className="messageImage" src={ message.studentImage } alt="" />
                                                <span className="messageText">{ message.messageContent }</span>
                                            </div>
                                            <div className="messageTime">{ formatDistanceToNow(new Date(message.createdAt), { addSuffix: true }) }</div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="messageDiv">
                                <textarea className="messageDivInput" placeholder="Type a message..." onChange={ e => setNewMessage(e.target.value) } value={ newMessage } />
                                <button className="messageDivBtn" onClick={ handleSend }><Send /></button>
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