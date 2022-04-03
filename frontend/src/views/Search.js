import '../styles/search.scss';
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import api from '../axios/api'
import { Context as AuthContext } from '../context/AuthContext'

const Search = () => {
	const [students, setStudents] = useState([])
	const { state } = useContext(AuthContext)

	// get all registered students on app
	const getAllStudents = async () => {
		try {
			const res = await api.get('/students')
			setStudents(res.data)
		}catch(err) {
			console.log(err)
		}
	}

	// remove current logged in student from all students
	const filteredStudents = students.filter(student => student._id !== state.student._id)

	useEffect(() => {
		getAllStudents()
	}, [])

	return ( 
		<div className="search">
		<div className="search-container">
			<div className="profiles">
				{
					filteredStudents.map(student => (
						<Link to={ `/account/${student._id}` } className="profile" key={ student._id }>
							<img src={ student.studentImage } className="profile-pic" alt="" />
							<p className="name">{ student.name }</p>
						</Link>
					))
				}
			</div>
		</div>
		</div>
	);
}
 
export default Search;