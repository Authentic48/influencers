import { UPLOAD_PHOTO_REQUEST, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_ERROR} from './PhotosType'



const initialState ={
    loading: false,
    photo: null,
    error: null
}


const PhotoReducer  = (state = initialState, {type, payload}) =>{
    switch(type){
        case UPLOAD_PHOTO_REQUEST:
            return{
                loading: true
            }
        case UPLOAD_PHOTO_SUCCESS:
            return{
                loading : false,
                photo: payload,
            }
        case UPLOAD_PHOTO_ERROR:
            return{
                loading  : false,
                error: payload
            }
        default: return state
    }
}

export default  PhotoReducer;