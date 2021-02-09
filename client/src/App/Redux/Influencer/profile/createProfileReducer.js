import {
    CREATE_INFLUENCER_REQUEST, 
    CREATE_INFLUENCER_SUCCESS, 
    CREATE_INFLUENCER_ERROR
} from './profileTypes';


const initialState = {
    success: false,
    loading: false,
    error: false

}

export const createInfluencerReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case CREATE_INFLUENCER_REQUEST:
            return{
                loading : true
            }
        case  CREATE_INFLUENCER_SUCCESS:
            return{
                loading : false,
                success: true,
            }
        case  CREATE_INFLUENCER_ERROR:
            return{
                loading : false,
                error: payload
            }
        default: return state
    }
}