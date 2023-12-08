import axios from "axios";
import apiUrl from "../constants/api.js";

export const checkExisted = async (inputName) => {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    const exist = data.some((task) => task.name === inputName);
    return exist;
  } catch (error) {
    console.error("Error in checkExisted function:", error);
  }
};
