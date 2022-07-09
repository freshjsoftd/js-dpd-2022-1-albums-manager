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
      <div className="header">
        <ul>
          <li>
            <NavLink to='/albums'>Albums</NavLink>
          </li>
          <li>
            <NavLink to='/users' activeClassName='selected'>Users</NavLink>
          </li>
          <li>
            <NavLink to='/' activeClassName='selected'>Home</NavLink>
          </li>
        </ul>
      </div>
			<Switch>
				<Route path='/albums'>
					<Albums />
				</Route>
				<Route path='/users'>
					<Users />
				</Route>
				<Route path='/' exact>
					<div>Home</div>
				</Route>
				<Route path='*'>
					<Redirect to='/users'></Redirect>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
