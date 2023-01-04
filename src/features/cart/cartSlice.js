import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((comic) => comic.id !== action.payload);
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

const { reducer, actions } = cartSlice;

export const { addToCart, removeFromCart, setCart } = actions;
export default reducer;

export const cartSelector = (state) => state.cart.cart;
