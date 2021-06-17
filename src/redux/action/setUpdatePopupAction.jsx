import { SET_UPDATE_POPUP } from './userTypes'

export const setUpdatePopup = (showPopup) => {
    console.log("setUpdatePopup in action OF NEW ACTIONNN -" + showPopup);
    return {
      type: SET_UPDATE_POPUP,
      payload: showPopup
    }
};

