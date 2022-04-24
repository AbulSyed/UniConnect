import { Add } from '@material-ui/icons'
import { useRef, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import '../styles/createEventDialog.scss'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'

const CreateEventDialog = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	const { state } = useContext(AuthContext)

	const title = useRef()
	const desc = useRef()
	const location = useRef()
	const time = useRef()
	const date = useRef()

	// api create an event
	const handleCreateSubmit = async (e) => {
		e.preventDefault()

        await api.post(`/events/${state.student.name}`, {
            title: title.current.value,
            desc: desc.current.value,
            location: location.current.value,
            time: time.current.value,
            date: date.current.value,
        })

		handleClose()

		window.location.reload()
	}

	return (
	<div>
		<Button size="small" variant="outlined" color="primary" onClick={handleClickOpen}>
            Create
		</Button>
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
            
		>
			<DialogContent className="dialogWrapper">
				<form onSubmit={ handleCreateSubmit }>
					<input type="text" required placeholder="title" className="eventInput" ref={ title } />
					<input type="text" required placeholder="desc" className="eventInput" ref={ desc } />
					<input type="text" required placeholder="location" className="eventInput" ref={ location } />
					<input type="text" required placeholder="time" className="eventInput" ref={ time } />
					<input type="text" required placeholder="date" className="eventInput" ref={ date } />
					<button>
						<Add />
					</button>
				</form>
			</DialogContent>
		</Dialog>
	</div>
	);
}

export default CreateEventDialog;