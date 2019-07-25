import { CURRENT_USER, LOGOUT_USER } from '../actions/types'
const initialState = {}

export default (state= initialState, action) => {
    switch(action.type)
    {
        case CURRENT_USER:
            return {...state,...action.payload }   
        case LOGOUT_USER:
                return initialState
        default:
            return state;
    }
}
