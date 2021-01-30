import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./cartTypes";


export const addItemToCart = user =>({
    type :ADD_CART_ITEM,
    payload: user
})




export const removeItemCart = user =>({
    type :REMOVE_CART_ITEM,
    payload: user
})

