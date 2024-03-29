/*

	Code modified from an existing dialog template from Material UI
	
	-> https://mui.com/material-ui/react-dialog/

	Lines 18-26, 33-40, 57-58 were reused. Everything else is code written by the author

*/

import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import '../styles/showEventDialog.scss'

const ShowEventDialog = ({ event }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	return (
	<div className="showEventDialog">
		<Button size="small" variant="outlined" color="primary" onClick={handleClickOpen}>
            View event details
		</Button>
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
            
		>
			<DialogContent className="showEventWrapper">
                <h4>{ event.title }</h4>
                <p>{ event.desc }</p>
                <p>Organised by <b>{ event.organiser }</b></p>
                <p>Location: <b>{ event.location }</b></p>
                <p>Time: <b>{ event.time }pm</b> - Date <b>{ event.date }</b></p>
                <p>Attendees</p>
                <div className="attendees">
                    {
                        event.attendees.map(attendee => (
                            <div key={ attendee.studentName +  Date.now() }>
                                <div>{ attendee.studentName }</div>
                                <img src={ attendee.studentImage } alt="" className="studentImaeg" />
                            </div>
                        ))
                    }
                </div>
			</DialogContent>
		</Dialog>
	</div>
	);
}

export default ShowEventDialog;