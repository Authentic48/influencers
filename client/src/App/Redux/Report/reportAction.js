import axios from 'axios'
import {
  CREATE_REPORT_ERROR,
  CREATE_REPORT_REQUEST, 
  CREATE_REPORT_SUCCESS
} from './reportTypes';

export const createReport = ({infName, description, influencer}) => async(dispatch, getState) =>{
    try {
        dispatch({type : CREATE_REPORT_REQUEST})
        const {auth: { currentUser }} = getState()

        const config ={
            headers:{
                Authorization: `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.post('/api/reports/create/', {infName, description, influencer}, config)
        console.log(data)
        dispatch({type: CREATE_REPORT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: CREATE_REPORT_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}