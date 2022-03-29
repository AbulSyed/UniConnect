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
    }, [])

    return ( 
        <div className="chat">
            <div className="existingChats">
                {
                    chat.map(c => (
                        <div key={ c._id }>
                            <StudentChat chat={ c } />
                        </div>
                    ))
                }
            </div>
            <div className="mainChat">
                <div className="mainChatContainer">

                    <div className="mainChatMessage">
                        <div className="mainChatMessages">
                            <div className="messageImgAndText">
                                <img className="messageImage" src="https://firebasestorage.googleapis.com/v0/b/uniconnect-4d327.appspot.com/o/images%2F62421b628ebdb312b08b6005%2Fmiles.jpeg1648499623974?alt=media&token=006aa2ca-281c-44c3-aea0-5793f524549d" alt="" />
                                <span className="messageText">hi how are you</span>
                            </div>
                            <div className="messageTime">10 minutes ago</div>
                        </div>
                        <div className="mainChatMessages self">
                            <div className="messageImgAndText">
                                <img className="messageImage" src="https://firebasestorage.googleapis.com/v0/b/uniconnect-4d327.appspot.com/o/images%2F62421b628ebdb312b08b6005%2Fup.jpeg1648499631637?alt=media&token=a796ea08-ad01-4534-aca7-4b66d90672e6" alt="" />
                                <span className="messageText">i am good thanks</span>
                            </div>
                            <div className="messageTime">10 minutes ago</div>
                        </div>
                        <div className="mainChatMessages">
                            <div className="messageImgAndText">
                                <img className="messageImage" src="https://firebasestorage.googleapis.com/v0/b/uniconnect-4d327.appspot.com/o/images%2F62421b628ebdb312b08b6005%2Fmiles.jpeg1648499623974?alt=media&token=006aa2ca-281c-44c3-aea0-5793f524549d" alt="" />
                                <span className="messageText">great to hear!</span>
                            </div>
                            <div className="messageTime">10 minutes ago</div>
                        </div>
                    </div>

                    <div className="messageDiv">
                        <textarea className="messageDivInput" placeholder="Type a message..." />
                        <button className="messageDivBtn"><Send /></button>
                    </div>

                </div>
            </div>
            <div className="newChat">
                <NewChatDialog />
            </div>
        </div>
     );
}
 
export default Chat;