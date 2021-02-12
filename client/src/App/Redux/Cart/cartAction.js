import axios from 'axios'
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./cartTypes";


export const addToCart = (id) => async (dispatch) => {
    const { data } = await axios.get(`/api/influencers/profile/${id}`)
    console.log(data)
    dispatch({
      type: ADD_CART_ITEM,
      payload: data.influencer
    })
}


export const removeItemCart = user =>({
    type : REMOVE_CART_ITEM,
    payload: user
})

