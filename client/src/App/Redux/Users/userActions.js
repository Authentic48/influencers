import axios from 'axios';
import {
    GET_USERS_REQUEST, 
    GET_USERS_ERROR, 
    GET_USERS_SUCCESS, 
  DELETE_USERS_REQUEST, 
  DELETE_USERS_SUCCESS, 
  DELETE_USERS_ERROR
} from './userType';


export const getUsers = () => async(dispatch, getState) =>{
    try {
        dispatch({type : GET_USERS_REQUEST})
        const {auth: { currentUser }} = getState()

        const config ={
            headers:{
                Authorization: `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.get('/api/users/', config)
        console.log(data)
        dispatch({type: GET_USERS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: GET_USERS_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const deleteUser = (id) => async(dispatch, getState) =>{
    try {
        dispatch({type : DELETE_USERS_REQUEST})
        const {auth: { currentUser }} = getState()

        const config ={
            headers:{
                Authorization: `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.delete(`/api/users/${id}`, config)
        console.log(data)
        dispatch({type: DELETE_USERS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: DELETE_USERS_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}
