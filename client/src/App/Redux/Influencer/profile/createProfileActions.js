import axios from 'axios'
import {
    CREATE_INFLUENCER_REQUEST, 
    CREATE_INFLUENCER_SUCCESS, 
    CREATE_INFLUENCER_ERROR
} from './profileTypes';

export const createProfile = (values) => async(dispatch, getState) =>{
    try {
        dispatch({type : CREATE_INFLUENCER_REQUEST})
        const {auth: { currentUser }} = getState()

        const config ={
            headers:{
                Authorization: `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.post('/api/influencers/profile/create', values, config)
        console.log(data)
        dispatch({type: CREATE_INFLUENCER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: CREATE_INFLUENCER_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}