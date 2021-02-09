import { 
    USER_LOGIN_ERROR, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS,
    USER_REGISTER_ERROR, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS,
    USER_LOGOUT, 
} from "./AuthTypes";



const initialState ={
    isAuthenticate: false,
    currentUser: null,
    loading: false,
    error: null,
    registerError: null
}

const AuthReducer = (state = initialState, {type, payload}) =>{

    switch(type){
        case USER_LOGIN_REQUEST:
            return{
                loading : true,
                error : null
            }
        case USER_LOGIN_SUCCESS:
            return{
                loading: false,
                isAuthenticated: true,
                currentUser: payload
            }
        case USER_LOGIN_ERROR:
            return{
                loading: false,
                error: payload
            }
        case USER_LOGOUT:
            return{
                loading: false,
                isAuthenticated: false,
                currentUser: null
            }
        case USER_REGISTER_REQUEST:
            return{
                loading : true,
            }
        case USER_REGISTER_SUCCESS:
            return{
                loading: false,
                isAuthenticated: true,
                currentUser: payload
            }
        case USER_REGISTER_ERROR:
            return{
                loading: false,
                registerError: payload
            }
        default: return state
    }
}

export default AuthReducer;