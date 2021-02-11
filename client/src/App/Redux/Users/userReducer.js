
import {
    GET_USERS_REQUEST, 
    GET_USERS_ERROR, 
    GET_USERS_SUCCESS, 
  DELETE_USERS_REQUEST, 
  DELETE_USERS_SUCCESS, 
  DELETE_USERS_ERROR
} from './userType';


const usersState ={
    loading: false,
    error: null,
    users: null,
}

export const usersReducer = (state = usersState, {type, payload}) =>{
    switch(type){
        case GET_USERS_REQUEST:
            return{
                loading: true
            }
        case GET_USERS_SUCCESS:
            return{
                loading : false,
                users : payload 
            }
        case GET_USERS_ERROR:
            return{
                loading : false,
                error : payload
            }
        default: return state
    }
}


const deleteUserState ={
    loading: false,
    success: false,
    error: null
}

export const deleteUserReducer = (state = deleteUserState, {type, payload}) =>{
    switch(type){
        case DELETE_USERS_REQUEST:
            return{
                loading: true
            }
        case DELETE_USERS_SUCCESS:
            return{
                loading : false,
                success: true
            }
        case DELETE_USERS_ERROR:
            return{
                loading : false,
                error : payload
            }
        default: return state
    }
}