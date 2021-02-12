import { 
    EDIT_INFLUENCER_REQUEST , 
    EDIT_INFLUENCER_SUCCESS, 
    EDIT_INFLUENCER_ERROR,
    DELETE_INFLUENCER_REQUEST, 
  DELETE_INFLUENCER_SUCCESS, 
  DELETE_INFLUENCER_ERROR
} from './profileTypes';

const initialState ={
    loading: false,
    error: null,
    success: false,
}

export const editProfileReducer = (state = initialState, {type, payload}) =>{

    switch(type){
        case EDIT_INFLUENCER_REQUEST:
            return{
                loading : true
            }
        case EDIT_INFLUENCER_SUCCESS:
            return{
                loading: false,
                success : true,
            }
        case EDIT_INFLUENCER_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return state
    }
}





export const deleteProfileReducer = (state = {loading: false, success: false, error: null}, {type, payload}) =>{

    switch(type){
        case DELETE_INFLUENCER_REQUEST:
            return{
                loading : true
            }
        case DELETE_INFLUENCER_SUCCESS:
            return{
                loading: false,
                success : true,
            }
        case DELETE_INFLUENCER_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return state
    }
}


