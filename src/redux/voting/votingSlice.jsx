import { createSlice } from "@reduxjs/toolkit";
import {} from "./planningOperations";

const votingInitialState = {
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
    // builder.addCase(addTrainingConfig.fulfilled, (state, { payload }) => {
    //   state.startDate = payload.startDate;
    //   state.endDate = payload.endDate;
    //   state.stats = payload.stats;
    // });
  },
});

export const votingReduser = votingSlice.reducer;
export const { addToLikes } = votingSlice.actions;
