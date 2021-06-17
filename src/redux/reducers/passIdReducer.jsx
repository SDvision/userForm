import {PASS_ID} from '../action/userTypes'

const initialState = {
    passId : ''
}

const passIdReducer = (state= initialState, action) => {
    switch(action.type){
        case PASS_ID:
            console.log("IN PASS ID REDUCER: case passID : action payload : " +action.payload)
            return{
                passId: action.payload
           }    
        default:
            console.log("IN PASS ID REDUCER: case DEFAULT : action payload : ACTION TYPE:" +action.type)
               return state
        }
}


export default passIdReducer