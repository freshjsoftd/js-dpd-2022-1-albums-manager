import ACTION_TYPES from "../actions/actionTypes";


const initialState = {
  users: [],
  isFetching: false,
  error: null
}
const usersReducer = (state= initialState, {type, payload}) => { 
  switch(type) {
    case ACTION_TYPES.GET_USERS_SUCCESS: return {...state, users: payload, isFetching: false};
    case ACTION_TYPES.GET_USERS_REQUEST: return {...state, isFetching: true};
    case ACTION_TYPES.GET_USERS_ERROR: return {...state, isFetching: false, error: payload};

    case ACTION_TYPES.POST_USER_SUCCESS: return {...state, users: [...state.users, payload], isFetching: false};
    case ACTION_TYPES.POST_USER_REQUEST: return {...state, isFetching: true};
    case ACTION_TYPES.POST_USER_ERROR: return {...state, isFetching: false, error: payload};

    case ACTION_TYPES.PUT_USER_SUCCESS: return {...state, 
            users: state.users.map((user) => {
              return user.id === payload.id ? payload : user;
            }), 
            isFetching: false};
    case ACTION_TYPES.PUT_USER_REQUEST: return {...state, isFetching: true};
    case ACTION_TYPES.PUT_USER_ERROR: return {...state, isFetching: false, error: payload};

    case ACTION_TYPES.DELETE_USER_SUCCESS: return {...state, 
            users: state.users.filter((user) => user.id !== payload), 
            isFetching: false};
    case ACTION_TYPES.DELETE_USER_REQUEST: return {...state, isFetching: true};
    case ACTION_TYPES.DELETE_USER_ERROR: return {...state, isFetching: false, error: payload};
    default: return state;
  }
  
 }

 export default usersReducer;