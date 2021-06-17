import { PASS_ID } from './userTypes'

export const passingId = (userId) => {
    console.log("passID action :::::::: " + userId);
    return{
      type: PASS_ID,
      payload: userId
    }
  }