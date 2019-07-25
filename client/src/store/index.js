import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const reduxDevTools =  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
    
const middlewares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares) ( createStore);

export const store = createStoreWithMiddleware(reducers, reduxDevTools);
