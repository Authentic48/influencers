import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from './Cart/cartReducer'
import AuthReducer from './Auth/AuthReducer';
import influencerProfileReducer from './Influencer/profile/profileReducer';
import {createInfluencerReducer} from './Influencer/profile/createProfileReducer';
import editProfileReducer from './Influencer/profile/editProfileReducer';
import {usersReducer, deleteUserReducer} from './Users/userReducer';



const persistConfig = {
    key: "cart",
    storage,
    whiteList: ["cart","user"],
  };

const rootReducer = combineReducers({
    cart : cartReducer,
    auth: AuthReducer,
    influencerProfile : influencerProfileReducer,
    createInfluencer : createInfluencerReducer,
    editProfile : editProfileReducer,
    users: usersReducer,
    deleteUser : deleteUserReducer
})

export default persistReducer(persistConfig, rootReducer);