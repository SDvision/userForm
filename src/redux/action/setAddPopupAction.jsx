import { SET_ADD_POPUP } from './userTypes'

export const setAddPopup = (showPopup) => {
    console.log("setAddPopup in action OF NEW ACTIONNN -" + showPopup);
    return {
      type: SET_ADD_POPUP,
      payload: showPopup
    }
};
