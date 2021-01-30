import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./cartTypes";

const initialState={
    carts:[],
}


const cartReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case ADD_CART_ITEM:
            const item = payload

            const existItem = state.carts.find((x) => x.id === item.id)
      
            if (existItem) {
              return {
                ...state,
                carts: state.carts.map((x) =>
                  x.id === existItem.id ? item : x
                ),
              }
            } else {
              return {
                ...state,
                carts: [...state.carts, item],
              }
            }
        case REMOVE_CART_ITEM:
          return {
            ...state,
            carts: state.carts.filter((x) => x.id !== payload),
          }
       
        default: return state
    }
}


export default  cartReducer