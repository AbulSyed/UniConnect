import '../styles/addPost.scss'
import { Add } from '@material-ui/icons'
import { useRef, useState, useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { storage } from '../firebase/firebase'
import api from '../axios/api'
import { useNavigate } from 'react-router-dom'

const AddPost = () => {
    const { state } = useContext(AuthContext)

    const navigate = useNavigate()

    const desc = useRef()
    const [file, setFile] = useState(null)

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

    const handlePostSubmit = async (e) => {
        e.preventDefault()

        const res = await uploadImage(file, state.student._id)
        await api.post('/posts', {
            studentId: state.student._id,
            text: desc.current.value,
            pictureUrl: res
        })

        navigate('/')
        window.location.reload()
    }

    return ( 
        <>
            <h1 className="heading-1">Post something!</h1>
            <form onSubmit={ handlePostSubmit }>
                <textarea required placeholder="Start typing..." ref={ desc }></textarea>
                <input type="file" accept=".png,.jpeg,.jpg" onChange={ e => setFile(e.target.files[0]) } />
                <button>
                    <Add />
                </button>
            </form>
        </>
     );
}
 
export default AddPost;