import {React,  useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import dataService from '../../data-service';
import AlbumPhotos from './AlbumPhotos';
import AlbumsList from './AlbumsList';

function Albums() {

const [albums, setAlbums] = useState([]);

useEffect(() => {
  dataService.get('/albums')
  .then(({data}) => {
    setAlbums(data)
  })
  .catch((error) => console.log(error)
  )
}, []);

const {path} = useRouteMatch();


  return (
    <Switch>
      <Route path={`${path}`} exact>
        <AlbumsList albums={albums}/>
      </Route>
      <Route path={`${path}/:id`}>
        <AlbumPhotos/>
      </Route>
    </Switch>
  )
}

export default Albums