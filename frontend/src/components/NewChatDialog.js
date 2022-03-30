import React, { useState, useEffect, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import '../styles/newChatDialog.scss'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext';

const NewChatDialog = ({ message }) => {
  const [open, setOpen] = useState(false);
  const [friends, setFriends] = useState([]);

  const { state } = useContext(AuthContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async (id) => {
    // console.log(id)
    setOpen(false);
  };

  const getFriends = async () => {
    try {
        const res = await api.get(`/students/connections/${state.student._id}`);
        setFriends(res.data);
    }catch(err){
        console.log(err)
    }
  }

  useEffect(() => {
    getFriends();
  }, [state.student._id]);

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
            <p className="listText">Click friend, to start a new chat.</p>
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

export default NewChatDialog;