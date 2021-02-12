
import {
    CREATE_REPORT_ERROR,
    CREATE_REPORT_REQUEST, 
    CREATE_REPORT_SUCCESS
  } from './reportTypes';

  
const initialState = {
    loading: false,
    success : false,
    error : null
}

const reportReducer = (state = initialState, { type, payload} ) =>{
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

export default reportReducer;