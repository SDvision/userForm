import { SET_UPDATE_POPUP } from '../action/userTypes'

const initialState = {
    showPopup : 'false'   
}

const setUpdatePopupReducer = (state= initialState, action) => {
    switch(action.type) {
        case SET_UPDATE_POPUP:
            console.log("SET_UPDATE_POPUP CASE called")
            return {showPopup: action.payload}
        default:
             console.log("action.type in default:" + action.types)
             console.log("DEFAULT CASE called")
            return state;
    }
}
export default setUpdatePopupReducer;