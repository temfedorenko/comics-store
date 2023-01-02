import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { getComics } from "../../api/api";

const initialState = {
  comics: [],
  status: "idle",
  filter: "All",
};

export const fetchComics = createAsyncThunk("comics/fetchComics", async () => {
  return await getComics();
});

const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    filterChanged: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComics.fulfilled, (state, action) => {
        state.status = "idle";
        state.comics = action.payload;
      })
      .addCase(fetchComics.rejected, (state) => {
        state.status = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = comicsSlice;

export const { filterChanged } = actions;

export default reducer;

export const filterSelector = createSelector(
  (state) => state,
  (state) => state.comics.filter
);

export const comicsSelector = createSelector(
  (state) => state.comics.comics,
  (state) => state.comics.filter,
  (comics, filter) => {
    if (filter === "All") {
      return comics;
    }

    return comics.filter((comic) => comic.format === filter);
  }
);
