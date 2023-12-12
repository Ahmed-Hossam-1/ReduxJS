import { createStore, applyMiddleware } from "redux";
import rootReducer from "../redux/rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
