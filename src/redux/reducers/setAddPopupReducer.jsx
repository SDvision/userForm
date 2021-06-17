import { SET_ADD_POPUP } from '../action/userTypes'

const initialState = {
    showPopup : 'false'   
}

const setAddPopupReducer = (state= initialState, action) => {
    switch(action.type) {
        case SET_ADD_POPUP:
            console.log("SET_ADD_POPUP CASE called")
            return {showPopup: action.payload}
        default:
             console.log("action.type in default:" + action.types)
             console.log("DEFAULT CASE called")
            return state;
    }
}
export default setAddPopupReducer;