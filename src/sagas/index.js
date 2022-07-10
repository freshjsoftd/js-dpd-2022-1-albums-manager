import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from '../store/actions/actionTypes'
import { getAllUsers } from "./usersSagas";


function* rootSaga(){
  yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, getAllUsers)
}

export default rootSaga;