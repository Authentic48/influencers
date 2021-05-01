import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./Cart/cartReducer";
import AuthReducer from "./Auth/AuthReducer";
import influencerProfileReducer from "./Influencer/profile/profileReducer";
import { createInfluencerReducer } from "./Influencer/profile/createProfileReducer";
import {
  editProfileReducer,
  deleteProfileReducer,
} from "./Influencer/profile/editProfileReducer";
import { usersReducer, deleteUserReducer } from "./Users/userReducer";
import { reportReducer, getReportReducer } from "./Report/reportReducer";
import PhotoReducer from "./Influencer/photos/PhotoReducer";
import {
  userReducer,
  adminUpdateUserReducer,
} from "./Admin/Users/usersReducer";
import { CreateOrderReducer } from "./Orders/orderReducer";

const persistConfig = {
  key: "cart",
  storage,
  whiteList: ["cart", "user"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: AuthReducer,
  influencerProfile: influencerProfileReducer,
  createInfluencer: createInfluencerReducer,
  editProfile: editProfileReducer,
  deleteProfile: deleteProfileReducer,
  users: usersReducer,
  user: userReducer,
  adminUpdateUser: adminUpdateUserReducer,
  deleteUser: deleteUserReducer,
  report: reportReducer,
  reports: getReportReducer,
  photos: PhotoReducer,
  createOrder: CreateOrderReducer,
});

export default persistReducer(persistConfig, rootReducer);
