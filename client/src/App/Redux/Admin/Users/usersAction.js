import axios from 'axios';

import {
    GET_USER_BY_ID_ERROR, 
    GET_USER_BY_ID_REQUEST, 
    GET_USER_BY_ID_SUCCESS,
    ADMIN_UPDATE_REQUEST,
  ADMIN_UPDATE_SUCCESS,
  ADMIN_UPDATE_ERROR
} from './usersType'



export const getUserById = (id) => async(dispatch, getState) =>{
    try {
        dispatch({type : GET_USER_BY_ID_REQUEST})
        const {auth: { currentUser }} = getState()

        const config ={
            headers:{
                Authorization: `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.get(`/api/users/${id}`, config)
        console.log(data)
        dispatch({type: GET_USER_BY_ID_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: GET_USER_BY_ID_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const AdminUpdateUser = (id, values) => async(dispatch, getState) =>{
    try {
        dispatch({type : ADMIN_UPDATE_REQUEST})
        const {auth: { currentUser }} = getState()

        const config ={
            headers:{
                Authorization: `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.put(`/api/users/${id}`,values, config)
        console.log(data)
        dispatch({type: ADMIN_UPDATE_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: ADMIN_UPDATE_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}
