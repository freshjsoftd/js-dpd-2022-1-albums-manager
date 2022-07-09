import React from 'react'
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import UserAlbums from './UserAlbums';
import UserForm from './UserForm';
import UsersList from './UsersList';
import AlbumPhotos from '../Albums/AlbumPhotos';

function Users() {

  const {url, path} = useRouteMatch();
  return (
    <>
    <nav>
      <NavLink to={`${url}/add`}>Add</NavLink>
    </nav>
    <Switch>
      <Route path={`${path}`} exact>
        <UsersList/>
      </Route>
      <Route path={`${path}/add/:id`}>
        <UserForm/>
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