// Components
import { Add } from '@material-ui/icons'

// Styles
import '../styles/addPost.scss'

import { useRef, useState, useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const AddPost = () => {
    const { state } = useContext(AuthContext)

    const desc = useRef()
    const [file, setFile] = useState(null)

    const handlePost = async (e) => {
        e.preventDefault()

        console.log('hi')
    }

    return ( 
        <>
            <h1 className="heading-1">Post something!</h1>
            <form onSubmit={ handlePost }>
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