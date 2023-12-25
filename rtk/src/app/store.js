import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../feature/cake/cakeSlice";
import userReduceer from "../feature/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    user: userReduceer,
  },
});

export default store;
