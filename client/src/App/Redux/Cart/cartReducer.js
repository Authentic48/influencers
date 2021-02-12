import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./cartTypes";

const initialState={
    carts:[],
}


const cartReducer = (state = initialState, {type,payload})=>{
  switch(type){
      case ADD_CART_ITEM:
        return {
          ...state,
          carts: addItemToCart(state.carts, payload),
        };
      case REMOVE_CART_ITEM:
        return {
          ...state,
          carts: state.carts.filter(
            (cartItem) => cartItem._id !== payload
          ),
  
        }
      
      default: return state
  }
}



export default  cartReducer


 const addItemToCart = (cartItems, cartItemToAdd) => {
  // the Item is not new and it is exist in the Cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToAdd._id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === cartItemToAdd._id
        ? { ...cartItem }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd}];
};