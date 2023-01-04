import { configureStore } from "@reduxjs/toolkit";
import comicsReducer from "../features/comics/comicsSlice";
import selectedComicReducer from "../features/selectedComic/selectedComicSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    comics: comicsReducer,
    selectedComic: selectedComicReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});
