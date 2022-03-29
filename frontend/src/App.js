import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home'
import Signup from './views/Signup'
import Signin from './views/Signin'
import AddPost from './views/AddPost'
import Account from './views/Account'
import Search from './views/Search'
import Chat from './views/Chat'
import { useContext } from 'react';
import { Context } from './context/AuthContext';

function App() {
	const { state } = useContext(Context);

	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={ state.student ? <Home /> : <Signin /> } />
				<Route path="/signin" element={ state.student ? <Navigate to="/" /> : <Signin />} />
				<Route path="/signup" element={ state.student ? <Navigate to="/" /> : <Signup />} />
				<Route path="/addPost" element={ state.student ? <AddPost /> : <Navigate to="/" /> } />
				<Route path="/chat" element={ state.student ? <Chat /> : <Navigate to="/" /> } />
				<Route path="/account/:id" element={ state.student ? <Account /> : <Navigate to="/" /> } />
				<Route path="/search" element={ state.student ? <Search /> : <Navigate to="/" /> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
