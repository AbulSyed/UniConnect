import '../styles/commentDialog.scss'
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const ShowCommentDialog = ({ commentsLength, comments }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	return (
	<div>
		<Button color="default" onClick={handleClickOpen}>
            {
                commentsLength === 0 ? <p>No comments</p> : <p>View comments</p>
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
                    { comments.map(comment => (
                    <li key={ Math.random() } className="comment">
                        <span><strong>{ comment.name }</strong></span>
                        <img className="user-img" src={ comment.studentImage } alt="" />
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