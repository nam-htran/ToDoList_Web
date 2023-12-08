import axios from "axios";
import uniqid from "uniqid";
import { checkExisted } from "../services/taskService.js";
import apiUrl from "../constants/api.js";

export const addTaskAPI = async (name) => {
  try {
    if (!name) {
      return {
        status: "failed",
        message: "You are not input yet",
      };
    }
    const exist = await checkExisted(name);
    if (!exist) {
      await axios.post(apiUrl, {
        name: name,
        id: uniqid(),
      });
      return {
        status: "success",
        message: "Tasked added",
      };
    } else {
      return {
        status: "failed",
        message: "Task already existed",
      };
    }
  } catch (error) {
    console.error("Error in addTaskAPI", error);
    return {
      status: "error",
      message: "An error occurred in the API",
    };
  }
};

export const getTaskAPI = async () => {
  try {
    const response = await axios.get(apiUrl);
    return {
      status: "success",
      data: response.data,
    };
  } catch (error) {
    console.error("Error in getTaskAPI", error);
    return {
      status: "error",
      message: "An error occurred in the API",
    };
  }
};
