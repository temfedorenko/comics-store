import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOneComic } from "../../api/api";

const initialState = {
  comic: {},
  status: "idle",
};

export const fetchOneComic = createAsyncThunk("selectedComic/fetchOneComic", async (comicId) => {
  return await getOneComic(comicId);
});

const selectedComicSlice = createSlice({
  name: "selectedComic",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneComic.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOneComic.fulfilled, (state, action) => {
        state.status = "idle";
        state.comic = action.payload;
      })
      .addCase(fetchOneComic.rejected, (state) => {
        state.status = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer } = selectedComicSlice;

export default reducer;

export const selectedComicSelector = (state) => state.selectedComic.comic;
