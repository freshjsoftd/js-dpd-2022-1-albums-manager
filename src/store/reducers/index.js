import { combineReducers } from 'redux';

import usersReducer from './usersReducer'
import albumsReducer from './albumsReducer'
import photosReducer from './photosReducer'

export default combineReducers({
  usersList: usersReducer,
  albumsList: albumsReducer,
  photosList: photosReducer,
})