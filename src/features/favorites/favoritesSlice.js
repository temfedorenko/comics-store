import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    favoriteAdded: (state, action) => {
      state.favorites.push(action.payload);
    },
    favoriteRemoved: (state, action) => {
      state.favorites = state.favorites.filter((comic) => comic.id !== action.payload);
    },
    favoritesUpdated: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

const { reducer, actions } = favoritesSlice;

export const { favoriteAdded, favoriteRemoved, favoritesUpdated } = actions;
export default reducer;

export const favoritesSelector = (state) => state.favorites.favorites;
