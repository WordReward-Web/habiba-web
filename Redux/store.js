"use client";

import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
});

// Create the Redux store
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
