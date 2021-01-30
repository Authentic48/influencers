import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import {composeWithDevTools} from 'redux-devtools-extension'

import {persistStore} from 'redux-persist'

import RootReducer from "./RootReducer";

const middleWare = [thunk];

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleWare))) 

export const persistor  = persistStore(store)