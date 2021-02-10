import { 
    EDIT_INFLUENCER_REQUEST , 
    EDIT_INFLUENCER_SUCCESS, 
    EDIT_INFLUENCER_ERROR
} from './profileTypes';


const initialState ={
    loading: false,
    error: null,
    success: false
}

const editProfileReducer = (state = initialState, {type, payload}) =>{

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

export default editProfileReducer;