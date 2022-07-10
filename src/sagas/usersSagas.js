import { put } from 'redux-saga/effects';
import {
	fetchAllUsersError,
	fetchAllUsersRequest,
	fetchAllUsersSuccess,
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
