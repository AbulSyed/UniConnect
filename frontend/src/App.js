import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home'
import Signup from './views/Signup'
import Signin from './views/Signin'
import AddPost from './views/AddPost'
import Account from './views/Account'
import Search from './views/Search'

function App() {
  return (
    <BrowserRouter>
		<Nav />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/signin" element={<Signin />} />
			<Route path="/addPost" element={<AddPost />} />
			{/* <Route path="/messenger" element={<Messenger />} /> */}
			<Route path="/account/:id" element={<Account />} />
			<Route path="/search" element={<Search />} />
		</Routes>
    </BrowserRouter>
  );
}

export default App;
