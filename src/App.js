import './App.css';
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	// Link,
	Switch,
	Redirect,
} from 'react-router-dom';
import Albums from './components/Albums/Albums';
import Users from './components/Users/Users';

function App() {
	return (
		<Router>
			<div className='container'>
				<ul>
					<li>
						<NavLink to='/albums'>Albums</NavLink>
					</li>
					<li>
						<NavLink to='/users' activeClassName='selected'>
							Users
						</NavLink>
					</li>
					<li>
						<NavLink to='/' activeClassName='selected'>
							Home
						</NavLink>
					</li>
				</ul>

				<Switch>
					<Route path='/albums' component={Albums}>
						{/* <Albums /> */}
					</Route>
					<Route path='/users'>
						<Users />
					</Route>
					<Route path='/' exact>
						Home
					</Route>
					<Route path='*'>
						<Redirect to='/users'></Redirect>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
