import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from './Cart/cartReducer'
import AuthReducer from './Auth/AuthReducer';
import influencerProfileReducer from './Influencer/profile/profileReducer';



const persistConfig = {
    key: "cart",
    storage,
    whiteList: ["cart","user"],
  };

const rootReducer = combineReducers({
    cart : cartReducer,
    auth: AuthReducer,
    influencerProfile : influencerProfileReducer
})

export default persistReducer(persistConfig, rootReducer);