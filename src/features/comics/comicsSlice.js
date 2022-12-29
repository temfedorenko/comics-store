import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComics } from "../../api/api";

const initialState = {
  comics: [],
  status: "idle",
};

export const fetchComics = createAsyncThunk("comics/fetchComics", async () => {
  return await getComics();
});

const comicsSlice = createSlice({
  name: "comics",
  initialState,
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

export default reducer;

export const comicsSelector = (state) => state.comics.comics;
