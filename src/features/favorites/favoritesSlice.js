import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((comic) => comic.id !== action.payload);
    },
  },
});

const { reducer, actions } = favoritesSlice;

export const { addToFavorites, removeFromFavorites } = actions;
export default reducer;

export const favoritesSelector = (state) => state.favorites.favorites;
