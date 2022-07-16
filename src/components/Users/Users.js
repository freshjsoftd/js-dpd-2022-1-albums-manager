import React, { useEffect } from 'react'
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import UserAlbums from './UserAlbums';
import UserForm from './UserForm';
import UsersList from './UsersList';
import AlbumPhotos from '../Albums/AlbumPhotos';
import { fetchAllUsersAction } from '../../store/actions/usersActions'
// import dataService from '../../data-service';
import { useDispatch, useSelector } from 'react-redux';

const styles= {
  fontSize: '30px',
  margin: 'auto',
}

function Users() {

  // const [users, setUsers] = useState([]);
  const dispatch = useDispatch()
  const {usersList: {users}} = useSelector(state => state);


  useEffect(() => {
    dispatch(fetchAllUsersAction())
  }, [dispatch])
  // useEffect(() => {
  //   dataService.get('/users')
  //   .then(({data}) => setUsers(data))
  //   .catch((error) => console.log(error))
  // }, [])

  const {url, path} = useRouteMatch();
  return (
    <>
    <nav>
      <NavLink to={`${url}/add`} style={styles}>Add</NavLink>
    </nav>
    <Switch>
      <Route path={`${path}`} exact>
        <UsersList users={users}/>
      </Route>
      <Route path={`${path}/add/:id`}>
        <UserForm users={users}/>
      </Route>
      <Route path={`${path}/add/`}>
        <Redirect to={`${path}/add/:id`}>
        <UserForm/>
        </Redirect>
      </Route>
      <Route path={`${path}/:id`}>
        <UserAlbums />
      </Route>
      <Route path={`${path}/album/:id`}>
        <AlbumPhotos />
      </Route>

    </Switch>
    </>
  )
}

export default Users