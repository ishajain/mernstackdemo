import { combineReducers } from 'redux'
import { reducer  as formReducer} from 'redux-form'
import newsReducer from './newsReducer'
import userReducer from './userReducer'

export default combineReducers({
    form : formReducer,
    news: newsReducer,
    user: userReducer
})

