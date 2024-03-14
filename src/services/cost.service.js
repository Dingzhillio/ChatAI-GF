import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL
    : process.env.REACT_APP_DOMAIN;

export const costService = {
  read: async () => {
    try {
      const response = await axios.get(`${baseUrl}membership`);
      return response.data;
    } catch (error) {}
  },
  send: async (plan_id, user_id) => {
    try {
        // const userToken = userService.read()
        console.log("stripe pay ok")
        const session = await axios.get(`${baseUrl}stripe/pay`, {params: {plan_id, user_id}});
        // const session = await axios.get(`${baseUrl}fetchUser`,{params: {user_id}});
        
        console.log(session);
        return session;
    } catch (error) {
        console.log("error", error)
    }
  },
};
