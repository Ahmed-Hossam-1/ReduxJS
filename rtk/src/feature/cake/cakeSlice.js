import { createSlice } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: (state) => {
      --state.numberOfCakes;
    },
    reStock: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/order"]: (state) => {
  //     --state.numberOfCakes;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase("cake/order", (state) => {
      --state.numberOfCakes;
    });
  },
});

export const { order, reStock } = cakeSlice.actions;
export default cakeSlice.reducer;
