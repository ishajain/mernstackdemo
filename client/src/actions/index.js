
import axios from 'axios'
import { ADD_NEWS, GET_NEWS, CURRENT_USER , LOGOUT_USER} from './types';

export const addNews = (news,token) => async dispatch =>{
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` 
  }
  
  const response = await axios.post("/news/new",news,{headers})
  const newNews = response.data
  
  dispatch({
    type: ADD_NEWS,
    payload: newNews
  });
}

export const getNews = (token) => async dispatch => {
  
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` 
  }
  
    
    const response = await axios.get("/news",{ headers })
    const news = response.data.data
    
    dispatch({
        
            type: GET_NEWS,
            payload : news
        
    })
    
}

export const loginUser = ({ email , password}) => async dispatch => {

  const response = await axios.post("/user/login",{email, password})
  const userDetails = response.data

  dispatch({
        
    type: CURRENT_USER,
    payload : userDetails

})



}

export const createUser = ({ name, email , password}) => async dispatch => {

  const response = await axios.post("/user/register",{name, email, password})
  const userDetails = response.data
  dispatch({
        
    type: CURRENT_USER,
    payload : userDetails

})



}

export const logoutUser = () =>  {
  return {
    type: LOGOUT_USER
  }    
}
