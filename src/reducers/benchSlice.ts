import { createSlice } from "@reduxjs/toolkit";
import initialState from "../reducers/initialData"

export const cardSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    switchToOverview(state) {
      state.currentCards = state.defaultCards.slice(0,4)
    },
    switchToTraffic(state) {
      state.currentCards = state.defaultCards.slice(4,8)
    },
    switchToPerformance(state) {
      state.currentCards = state.defaultCards.slice(8,12)
    },
    initData(state, action) {
      state.defaultCards = action.payload;
    }
  },
});


export const { switchToOverview, switchToTraffic, switchToPerformance, initData } = cardSlice.actions;
export default cardSlice.reducer;
