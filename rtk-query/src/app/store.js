import { configureStore } from "@reduxjs/toolkit";
import userReduceer from "../feature/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReduceer,
  },
});

export default store;
