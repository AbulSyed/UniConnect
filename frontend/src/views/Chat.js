import '../styles/chat.scss'
import { useState, useContext, useEffect } from 'react'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'
import NewChatDialog from '../components/NewChatDialog'
import AddUserChat from '../components/AddUserChat'
import { Send } from '@material-ui/icons'
import StudentChat from '../components/StudentChat'
import { formatDistanceToNow } from 'date-fns'

/*

    A online tutorial was followed to help write the code to get this page working

    Link to online tutorial: https://www.youtube.com/watch?v=HggSXt1Hzfk&t
    GitHub link: https://github.com/safak/youtube/blob/chat-app/client/src/pages/messenger/Messenger.jsx

    This tutorial was followed as a guidance and heavy modifications were made

    Close to all the code written in this page is different to the code written in the tutorial

*/

const Chat = () => {
    const { state } = useContext(AuthContext)
    const [chat, setChat] = useState([])
    const [currChat, setCurrChat] = useState(null)
    const [msgs, setMsgs] = useState([])
    const [newMsg, setNewMsg] = useState('')

    // get all chats for logged in user
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

    // get messages for a chat
    const getMsgs = async () => {
        try {
            const res = await api.get(`/messages/${currChat._id}`)
            setMsgs(res.data)
        } catch (err) {
            console.log(err)            
        }
    }

    useEffect(() => {
        getMsgs()
    }, [currChat?._id])

    // send a message
    const handleSend = async () => {
        // save to db
        const res = await api.post('/messages', {
            chatId: currChat._id,
            dispatcherId: state.student._id,
            messageContent: newMsg
        })
        // update user interface
        setMsgs([...msgs, res.data])
        setNewMsg('')
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
                                    msgs.map(message => (
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
                                <textarea className="messageDivInput" placeholder="Type a message..." onChange={ e => setNewMsg(e.target.value) } value={ newMsg } />
                                <AddUserChat message={ "+" } chat={ currChat } />
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