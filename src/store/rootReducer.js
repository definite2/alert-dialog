//src/store/rootReducer.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { errorSlice } from "./error/slice";

export const rootRecucer = combineReducers({
  error: errorSlice.reducer,
  //other reducers here
});
export const store = configureStore({
  reducer: rootRecucer,
  devTools: process.env.NODE_ENV !== "production",
});
