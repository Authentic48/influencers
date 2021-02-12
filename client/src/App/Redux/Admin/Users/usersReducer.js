import {
    GET_USER_BY_ID_ERROR, 
    GET_USER_BY_ID_REQUEST, 
    GET_USER_BY_ID_SUCCESS,
    ADMIN_UPDATE_REQUEST,
  ADMIN_UPDATE_SUCCESS,
  ADMIN_UPDATE_ERROR
} from './usersType'


const initialState ={
    user: null,
    loading: false,
    error: null,
    success: null
}

export const userReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case GET_USER_BY_ID_REQUEST:
            return{
                loading: true
            }
        case GET_USER_BY_ID_SUCCESS:
            return{
                loading : false,
                user : payload 
            }
        case GET_USER_BY_ID_ERROR:
            return{
                loading : false,
                error : payload
            }
        default: return state
    }
}


export const adminUpdateUserReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ADMIN_UPDATE_REQUEST:
            return{
                loading: true
            }
        case ADMIN_UPDATE_SUCCESS:
            return{
                loading : false,
                success: true
            }
        case ADMIN_UPDATE_ERROR:
            return{
                loading : false,
                error : payload
            }
        default: return state
    }
}
