import { GET_NEWS, ADD_NEWS, LOGOUT_USER } from '../actions/types';

const initialData = [
    
];
export default (state=initialData, action) => {

    switch(action.type)
    {
        case GET_NEWS:return action.payload    
        case ADD_NEWS : return [...state,action.payload]
        case LOGOUT_USER: return initialData
        default:
            return state;
    }

};