import axios from 'axios';

import { UPLOAD_PHOTO_REQUEST, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_ERROR} from './PhotosType'

export const uploadFile = (image) => async(dispatch) =>{
    try {
        dispatch({type : UPLOAD_PHOTO_REQUEST})
        const { data } = await axios.post('/api/upload',image)
        console.log(data)
        dispatch({type: UPLOAD_PHOTO_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: UPLOAD_PHOTO_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}