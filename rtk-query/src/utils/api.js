import axios from "axios";

export const BASE_URL = "http://localhost:3000";

export const getUsers = () => axios.get(`${BASE_URL}/users`);

export const generate = (name) => {
  return axios.post(`${BASE_URL}/users`, { name });
};
