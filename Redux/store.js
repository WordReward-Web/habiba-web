"use client";

import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import canvasSlice from "./slices/canvasSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  canvas: canvasSlice,
});

// Create the Redux store
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
