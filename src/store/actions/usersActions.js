import ACTION_TYPES from './actionTypes';

// Get all
export const fetchAllUsersAction = () => ({
  type: ACTION_TYPES.GET_USERS_ACTION
})
export const fetchAllUsersRequest = () => ({
  type: ACTION_TYPES.GET_USERS_REQUEST
})
export const fetchAllUsersSuccess = (payload) => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  payload
})
export const fetchAllUsersError = (payload) => ({
  type: ACTION_TYPES.GET_USERS_ERROR,
  payload
})
// Create
export const createUserAction = (payload) => ({
  type: ACTION_TYPES.POST_USER_ACTION,
  payload
})
export const createUserRequest = () => ({
  type: ACTION_TYPES.POST_USER_REQUEST
})
export const createUserSuccess = (payload) => ({
  type: ACTION_TYPES.POST_USER_SUCCESS,
  payload
})
export const createUserError = (payload) => ({
  type: ACTION_TYPES.POST_USER_ERROR,
  payload
})
// Update
export const updateUserAction = (payload) => ({
  type: ACTION_TYPES.PUT_USER_ACTION,
  payload
})
export const updateUserRequest = () => ({
  type: ACTION_TYPES.PUT_USER_REQUEST
})
export const updateUserSuccess = (payload) => ({
  type: ACTION_TYPES.PUT_USER_SUCCESS,
  payload
})
export const updateUserError = (payload) => ({
  type: ACTION_TYPES.PUT_USER_ERROR,
  payload
})
// delete
export const deleteUserAction = (payload) => ({
  type: ACTION_TYPES.DELETE_USER_ACTION,
  payload
})
export const deleteUserRequest = () => ({
  type: ACTION_TYPES.DELETE_USER_REQUEST
})
export const deleteUserSuccess = (payload) => ({
  type: ACTION_TYPES.PDELETE
})
export const deleteUserError = (payload) => ({
  type: ACTION_TYPES.DELETE_USER_ERROR,
  payload
})
 