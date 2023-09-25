import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ListClubReducer from "./getListClub/GetListClub";
import LeaguesReducer from "./getLeagues/GetLeagues"
import thunkMiddleware from "redux-thunk";
import { combineReducers } from 'redux'

const reducer = combineReducers({
  listClubReducer: ListClubReducer,
  leagues: LeaguesReducer,
  middleware: [...getDefaultMiddleware(), thunkMiddleware],
})
const store = configureStore({
  reducer,
})
export default store;