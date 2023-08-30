import { createSlice } from "@reduxjs/toolkit";
import { getImages, getImgByBreed } from "./votingOperations";

const votingInitialState = {
  image: [],
  likes: [],
  favorite: [],
  dislakes: [],
};

const votingSlice = createSlice({
  name: "voting",
  initialState: votingInitialState,
  reducers: {
    addToLikes(state, { payload }) {
      state.likes.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getImages.fulfilled, (state, { payload }) => {
      state.image = payload;
    });
    builder.addCase(getImgByBreed.fulfilled, (state, { payload }) => {
      state.image = payload;
    });
  },
});

export const votingReducer = votingSlice.reducer;
export const { addToLikes } = votingSlice.actions;
