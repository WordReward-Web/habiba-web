"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCartContent: false,
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    closeCartContentAction: (state, { payload }) => {
      state.showCartContent = false;
    },
    showCartContentAction: (state, { payload }) => {
      state.showCartContent = true;
    },
  },
});

export default canvasSlice.reducer;
export const { closeCartContentAction, showCartContentAction } =
  canvasSlice.actions;
