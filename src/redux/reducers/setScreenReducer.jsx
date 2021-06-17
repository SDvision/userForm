import { SET_ACTIVE_WINDOW } from '../action/userTypes'

const initialState = {
    activeScreen: 'Welcome'    
}

const setScreenReducer = (state= initialState, action) => {
    switch(action.type) {
        case SET_ACTIVE_WINDOW:
            //console.log("SET_ACTIVE_WINDOW CASE called")
            return {activeScreen: action.payload}
        default:
            // console.log("action.type in default:" + action.types)
            // console.log("DEFAULT CASE called")
            return state;
    }
}
export default setScreenReducer;