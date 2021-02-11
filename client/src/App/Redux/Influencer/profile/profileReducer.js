import {
    GET_INFLUENCER_ERROR, 
    GET_INFLUENCER_REQUEST, 
    GET_INFLUENCER_SUCCESS, 
  GET_SINGLE_INFLUENCER_REQUEST, 
  GET_SINGLE_INFLUENCER_SUCCESS, 
  GET_SINGLE_INFLUENCER_ERROR
} from './profileTypes';



const initialState ={
    loading: false,
    error: null,
    influencer: null,
    singleInfluencerLoading: false,
    singleInfluencerError: false,
    influencerById : null,
    otherInfluencer: null,
}


const  influencerProfileReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case GET_INFLUENCER_REQUEST:
            return{
                loading: true
            }
        case GET_INFLUENCER_SUCCESS:
          
            return{
                loading: false,
                influencer: payload.influencers,
                pages: payload.pages,
                page: payload.page
            }
        case  GET_INFLUENCER_ERROR:
            return{
                loading: false,
                error: payload
            }
        case GET_SINGLE_INFLUENCER_REQUEST :
            return{
                singleInfluencerLoading : true
            }
        case GET_SINGLE_INFLUENCER_SUCCESS:
            return{
                singleInfluencerLoading: false,
                influencerById: payload.influencer,
                otherInfluencer : payload.otherInfluencers,
            }
        case GET_SINGLE_INFLUENCER_ERROR:
            return{
                singleInfluencerLoading: false,
                singleInfluencerError: payload.influencer,

            }
        default: return state
    }
}

export default influencerProfileReducer