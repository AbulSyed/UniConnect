import { Add } from '@material-ui/icons'
import { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'
import { storage } from '../firebase/firebase'

const ChangeImageDialog = ({ imageType }) => {
	const [open, setOpen] = useState(false)
    const [file, setFile] = useState(null)

	const handleClickOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	const { state } = useContext(AuthContext)

    // upload image to firebase then get back image url
    // code reuse with modification from previous personal project https://github.com/AbulSyed/post-app/blob/master/post-client/src/store/modules/images.js
    const uploadImage = async (file, id) => {
        if(!file) return

        const filePath = `images/${id}/${file.name}${Date.now()}`
        const storageRef = storage.ref(filePath);

        try {
            const res = await storageRef.put(file)
            const url = await res.ref.getDownloadURL()
            return url
        }catch(err){
            console.log(err.message)
        }
    }

    // patch request to save image url to mongoDB
    const handleImageUpload = async (e) => {
        e.preventDefault()

        const res = await uploadImage(file, state.student._id)

        if(imageType === 'account') {
            await api.patch(`/students/${state.student._id}`, {
                studentImage: res
            })
        }else if(imageType === 'banner') {
            await api.patch(`/students/${state.student._id}`, {
                bannerImage: res
            })
        }

        window.location.reload()
    }

	return (
	<div>
		<Button color="default" onClick={handleClickOpen}>
            {
                imageType === 'account' ? <p>Change profile image</p> : <p>Change cover image</p>
            }
		</Button>
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogContent>
				<form onSubmit={ handleImageUpload }>
                    <input type="file" accept=".png,.jpeg,.jpg" onChange={ e => setFile(e.target.files[0]) } />
					<button>
						<Add />
					</button>
				</form>
			</DialogContent>
		</Dialog>
	</div>
	);
}

export default ChangeImageDialog;