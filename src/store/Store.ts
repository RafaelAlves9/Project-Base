import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootReducer } from "./CombineReducers";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export type AppDispatch = typeof store.dispatch;

export default store;
