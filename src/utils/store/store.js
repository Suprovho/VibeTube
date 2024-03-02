import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";

const persistConfig1 = {
  key: 'videoSlice',
  storage,
};

const persistedReducer1 = persistReducer(persistConfig1, videoSlice);

const rootReducer = combineReducers({
  videos: persistedReducer1,
  app:appSlice,
  search:SearchSlice,
  chat:ChatSlice,
});


export const store=configureStore({
  reducer: rootReducer,
});

export const persistor1 = persistStore(store);

export default store;