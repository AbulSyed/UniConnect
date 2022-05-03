/*

	Code modified from an existing dialog template from Material UI
	
	-> https://mui.com/material-ui/react-dialog/

	Lines 20, 25-27, 61-67, 83-84 were reused. Everything else is code written by the author

*/

import '../styles/newChatDialog.scss'
import React, { useState, useEffect, useContext } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'

const AddUserChat = ({ message, chat }) => {
  const [open, setOpen] = useState(false)
  const [friends, setFriends] = useState([])

  const { state } = useContext(AuthContext)

  const handleClickOpen = () => {
    setOpen(true)
  };

  // add user to chat (API req) when modal is closed
  const handleClose = async (recipientId) => {
    if(state.student._id && typeof recipientId == 'string'){
        await api.patch(`chat/add/${chat._id}`, {
          "recipientId": recipientId
        })
    }
    setOpen(false)
    if(state.student._id && typeof recipientId == 'string'){
        window.location.reload();
    }
  }

  // get user friends to display in modal
  const getFriends = async () => {
    try {
        const res = await api.get(`/students/friends/${state.student._id}`)
        setFriends(res.data)
    }catch(err){
        console.log(err)
    }
  }

  useEffect(() => {
    getFriends()
  }, [state.student._id])

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        { message }
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <ul className="list">
            <p className="listText">Click friend, to add to the chat.</p>
            {
              friends.length ? <>

                { friends.map(friends => (
                  <li key={ friends._id } className="listItem" onClick={() => handleClose(friends._id)}>
                    <img className="listItemImg" src={ friends.studentImage } alt="" />
                    <span>{ friends.name }</span>
                  </li>
                )) }

              </> : <p className="listText">Add friends first, before you can chat.</p>
            }
          </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddUserChat;