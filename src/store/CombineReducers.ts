import { combineReducers } from "@reduxjs/toolkit";
import * as Reducers from "./reducers/imports";

export const rootReducer = combineReducers({
  loading: Reducers.loading,
  sideBar: Reducers.sideBar,
});
