import {
    CREATE_REPORT_ERROR,
    CREATE_REPORT_REQUEST, 
    CREATE_REPORT_SUCCESS,
    GET_REPORT_SUCCESS,
    GET_REPORT_REQUEST,
    GET_REPORT_ERROR
  } from './reportTypes';
  
  
const initialState = {
    loading: false,
    success : false,
    error : null,
    reports: null,
}

export const reportReducer = (state = initialState, { type, payload} ) =>{
    switch(type) {
        case CREATE_REPORT_REQUEST : 
            return{
                loading : true
            }
        case CREATE_REPORT_SUCCESS:
            return{
                loading : false,
                success: true,
            }
        case CREATE_REPORT_ERROR:
            return{
                loading : false,
                error: payload
            }
        default: return state
    }
}



export const getReportReducer = (state = initialState, { type, payload} ) =>{
    switch(type) {
        case GET_REPORT_REQUEST : 
            return{
                loading : true
            }
        case GET_REPORT_SUCCESS:
            return{
                loading : false,
                reports: payload
            }
        case GET_REPORT_ERROR:
            return{
                loading : false,
                error: payload
            }
        default: return state
    }
}