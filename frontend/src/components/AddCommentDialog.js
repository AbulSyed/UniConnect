import { Add, AddComment } from '@material-ui/icons'
import { useRef, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import '../styles/commentDialog.scss'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'

const AddCommentDialog = ({ id }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	const { state } = useContext(AuthContext)

	const comment = useRef()

	// api request to add comment
	const handleCommentSubmit = async (e) => {
		e.preventDefault()

		await api.post(`/posts/comments/${id}`, {
			comment: comment.current.value,
			id: state.student._id
		})

		handleClose()

		window.location.reload()
	}

	return (
	<div>
		<Button color="default" onClick={handleClickOpen}>
			<AddComment />
		</Button>
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogContent>
				<form onSubmit={ handleCommentSubmit }>
					<input type="text" required placeholder="comment" className="commentInput" ref={ comment } />
					<button>
						<Add />
					</button>
				</form>
			</DialogContent>
		</Dialog>
	</div>
	);
}

export default AddCommentDialog;