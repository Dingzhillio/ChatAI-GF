import axios from "axios";
import { userService } from "./user.service";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL
    : process.env.REACT_APP_DOMAIN;

export const authService = {
  signup: async (payload) => {
    try {
      const response = await axios.post(`${baseUrl}register`, payload);
      userService.save(response.data);
      return response;
    } catch (error) {
      return false;
    }
  },
  login: async (payload) => {
    try {
      const response = await axios.post(`${baseUrl}login`, payload);
      userService.save(response.data);
      return response;
    } catch (error) {
      return false;
    }
  },
  logout: async (payload) => {
    try {
      const response = await axios.post(`${baseUrl}logout`, payload);
      userService.remove();
      return response;
    } catch (error) {
      return false;
    }
  },
  fetch: async (payload) => {
    try {
      const user_id = payload;
      const response = await axios.get(`${baseUrl}fetchUser`, {
        params: { user_id },
      });
      return response;
    } catch (error) {
      return false;
    }
  },
};
