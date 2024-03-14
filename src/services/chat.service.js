import axios from "axios";
import { userService } from "./user.service";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL
    : process.env.REACT_APP_DOMAIN;

export const chatService = {
    create: async (payload) => {
        try{
            const response = await axios.post(`${baseUrl}chat/create`, payload)
            if(response.status === 200){
                return true
            } else {
                return false
            }
        } catch (error) {
            return false;
        }
    },
    fetch: async (user_id, cht_id) => {
        try{
            const payload = {user_id, cht_id}
            const response = await axios.post(`${baseUrl}chat/fetch`, payload);
            if(response.status === 200) {
                return response
            } else {
                return false
            }
        } catch (error) {
            return false;
        }
    },
    botRes: async (payload) => {
        try{
            const response = await axios.post(`${baseUrl}chat/bot`, payload)
            if(response.status === 200) {
                return response;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    },
    getVoice: async (voice_id, text) => {
        try{
            console.log(voice_id);
            const payload = {voice_id , text}
            const response = await axios.post(`${baseUrl}voice`, payload)
            if(response){
                return response;
            } else {
                return false;
            }
        } catch (error) {
            return false
        }
    },
    paymentBill: async (billTime) => {
        try{
            const time = Math.floor(billTime);
            const user = userService.read();
            const user_id = user.data._id;
            const payload = {user_id, time};
            const response = await axios.post(`${baseUrl}count`, payload);
            if(response.status === 200){
                return true;
            } else {
                return false;
            }

        } catch (error) {

        }
    }
}