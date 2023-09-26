import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ListClubReducer from "./getListClub/GetListClub";
import LeaguesReducer from "./getLeagues/GetLeagues"
import Club from "./getClub/GetClub"
import thunkMiddleware from "redux-thunk";
import { combineReducers } from 'redux'

const reducer = combineReducers({
  listClubReducer: ListClubReducer,
  leagues: LeaguesReducer,
  club: Club,
  middleware: [...getDefaultMiddleware(), thunkMiddleware],
})
const store = configureStore({
  reducer,
})
export default store;