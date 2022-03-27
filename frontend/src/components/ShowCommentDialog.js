import { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import '../styles/commentDialog.scss'
import { Context as AuthContext } from '../context/AuthContext'

const ShowCommentDialog = ({ comments, post }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	const { state } = useContext(AuthContext)

	return (
	<div>
		<Button color="default" onClick={handleClickOpen}>
            {
                comments === 0 ? <p>No comments</p> : <p>View comments</p>
            }
		</Button>
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogContent>
                <ul className="comments">
                    { post.comments.map(comment => (
                    <li key={ Math.random() } className="comment">
                        <span><strong>{ state.student.name }</strong></span>
                        <img className="user-img" src={ state.student.studentImage } alt="" />
                        <span>{ comment.comment }</span>
                    </li>
                    )) }
                </ul>
			</DialogContent>
		</Dialog>
	</div>
	);
}

export default ShowCommentDialog;