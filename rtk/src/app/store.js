import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../feature/cake/cakeSlice";
import userReduceer from "../feature/user/userSlice";
import { createLogger } from "redux-logger";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    user: userReduceer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(createLogger),
});

export default store;
