import * as actions from "./actionTypes";
import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: actions.FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: actions.FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: actions.FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        const users = data.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};
