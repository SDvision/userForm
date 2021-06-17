import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER,
  } from '../action/userTypes.jsx'
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      case ADD_USER:
        return {
          loading: false,
          users: state.users.concat(action.payload),
          error:''
        } 

      default: return state
    }
  }
  
  export default userReducer;
  