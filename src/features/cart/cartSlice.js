import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    itemAdded: (state, action) => {
      state.cart.push(action.payload);
    },
    itemRemoved: (state, action) => {
      state.cart = state.cart.filter((comic) => comic.id !== action.payload);
    },
    cartUpdated: (state, action) => {
      state.cart = action.payload;
    },
  },
});

const { reducer, actions } = cartSlice;

export const { itemAdded, itemRemoved, cartUpdated } = actions;
export default reducer;

export const cartSelector = (state) => state.cart.cart;
