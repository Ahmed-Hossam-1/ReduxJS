import * as actions from "./actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case actions.FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
