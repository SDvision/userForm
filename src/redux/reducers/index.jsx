import { combineReducers } from 'redux'
import userReducer from './userReducer'
import setScreenReducer from './setScreenReducer'
import setUpdatePopupReducer from './setUpdatePopupReducer'
import setAddPopupReducer from './setAddPopupReducer'
import passIdReducer from './passIdReducer'

let reducer = combineReducers({ userData: userReducer, setScreen: setScreenReducer, showUpdatePopup: setUpdatePopupReducer,
                                showAddPopup: setAddPopupReducer, passId: passIdReducer});

export default reducer;