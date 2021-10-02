import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "api";
export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/get-user`;
export const LOGIN_URL = `${API_URL}/auth/login`;

export function login(username, password) {
  return axios.post(LOGIN_URL, { username, password });
}

export function getUserByToken() {
  return axios.get(GET_USER_BY_ACCESSTOKEN_URL);
}