import { put } from 'redux-saga/effects';
import {
	createUserError,
	createUserRequest,
	createUserSuccess,
	deleteUserError,
	deleteUserRequest,
	deleteUserSuccess,
	fetchAllUsersError,
	fetchAllUsersRequest,
	fetchAllUsersSuccess,
	updateUserError,
	updateUserRequest,
	updateUserSuccess,
} from '../store/actions/usersActions';

import dataService from '../data-service';

export function* getAllUsers() {
	yield put(fetchAllUsersRequest());
	try {
		const users = yield dataService.get('/users').then(({ data }) => data);
		yield put(fetchAllUsersSuccess(users));
	} catch (error) {
		yield put(fetchAllUsersError(error));
	}
}

export function* createUserSaga({payload}){
  yield put(createUserRequest());
  try {
    const newUser = yield dataService.post('/users', payload).then(({data}) => data);
    yield put(createUserSuccess(newUser))
  } catch (error) {
    yield put(createUserError(error))
  }
}
export function* updateUserSaga({payload}){
  yield put(updateUserRequest());
  try {
    const updatedUser = yield dataService.put(`/users/${payload.id}`, payload)
                              .then(({data}) => data);
    yield put(updateUserSuccess(updatedUser))
  } catch (error) {
    yield put(updateUserError(error))
  }
}
export function* deleteUserSaga({payload}){
  yield put(deleteUserRequest());
  try {
    yield dataService.delete(`/users/${payload}`);
    yield put(deleteUserSuccess(payload))
  } catch (error) {
    yield put(deleteUserError(error))
  }
}
