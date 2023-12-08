import axios from "axios";
import uniqid from "uniqid";
import { checkExisted } from "../services/taskService.js";

export const addTaskAPI = async (name) => {
  try {
    const exist = await checkExisted(name);
    if (exist == false) {
      await axios.post(databaseURL, {
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
    console.log(error);
    return {
      status: "error",
      message: "Have error in API",
    };
  }
};

export const getTaskAPI = async () => {
  try {
    const response = await axios.get(databaseURL);
    return {
      status: "success",
      data: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Have error in API",
    };
  }
};
