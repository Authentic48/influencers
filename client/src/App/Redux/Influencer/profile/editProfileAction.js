import axios from 'axios'


import { 
    EDIT_INFLUENCER_REQUEST , 
    EDIT_INFLUENCER_SUCCESS, 
    EDIT_INFLUENCER_ERROR,
    DELETE_INFLUENCER_REQUEST, 
  DELETE_INFLUENCER_SUCCESS, 
  DELETE_INFLUENCER_ERROR
} from './profileTypes';




export const editProfile = (values, id) => async(dispatch, getState) =>{
    try {
        dispatch({type : EDIT_INFLUENCER_REQUEST})
        const {auth: { currentUser }} = getState()

        const config ={
            headers:{
                Authorization: `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.put(`/api/influencers/profile/${id}`, values, config)
        console.log(data)
        dispatch({type: EDIT_INFLUENCER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: EDIT_INFLUENCER_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const deleteProfile = (id) => async(dispatch, getState) =>{
    try {
        dispatch({type : DELETE_INFLUENCER_REQUEST})
        const {auth: { currentUser }} = getState()

        const config ={
            headers:{
                Authorization: `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.delete(`/api/influencers/profile/${id}`, config)
        console.log(data)
        dispatch({type: DELETE_INFLUENCER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: DELETE_INFLUENCER_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}