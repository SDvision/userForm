import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_USER,
} from './userTypes'

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get('http://localhost:3005/test')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const postUserData = (newUser) => {
  return (dispatch) => {
    console.log("postUserData called for adding new user - "+ newUser.type)
    //dispatch(postUserData())
    axios
      .post('http://localhost:3005/test', newUser )
      .then(response=>{
        console.log(response.data)
      })
  }
}

export const patchUserData = (editedUserInfo) => {
  return (dispatch) => {
    console.log("postUserData called", editedUserInfo)
    //dispatch(postUserData())
    axios
      .post('http://localhost:3005/update', editedUserInfo)
      .then(response=>{
        console.log(response.data)
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  } 
}
export const addUser = newUser => {
  return {
    type:ADD_USER,
    payload: newUser
  }
}

