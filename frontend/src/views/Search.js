import '../styles/search.scss';

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../axios/api'

const Search = () => {
	const [students, setStudents] = useState([])

	const getAllStudents = async () => {
		try {
			const res = await api.get('/students')
			setStudents(res.data)
		}catch(err) {
			console.log(err)
		}
	}

	useEffect(() => {
		getAllStudents()
	}, [])

	return ( 
		<div className="search">
		<div className="search-container">
			<div className="profiles">
				{
					students.map(student => (
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