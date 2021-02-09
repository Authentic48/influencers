import axios from 'axios';

import {
    GET_INFLUENCER_ERROR, 
    GET_INFLUENCER_REQUEST, 
    GET_INFLUENCER_SUCCESS, 
  GET_SINGLE_INFLUENCER_REQUEST, 
  GET_SINGLE_INFLUENCER_SUCCESS, 
  GET_SINGLE_INFLUENCER_ERROR
} from './profileTypes';

export const getInfluencer = () => async (dispatch)=>{
    try {
        dispatch({type: GET_INFLUENCER_REQUEST})

        const { data } = await axios.get('/api/influencers')
        console.log(data);

        dispatch({type: GET_INFLUENCER_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({
            type: GET_INFLUENCER_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getInfluencerById = (id) => async (dispatch)=>{
    try {
        dispatch({type: GET_SINGLE_INFLUENCER_REQUEST})

        const { data } = await axios.get(`/api/influencers/profile/${id}`)
        console.log(data);

        dispatch({type: GET_SINGLE_INFLUENCER_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({
            type: GET_SINGLE_INFLUENCER_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}