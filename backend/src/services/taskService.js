import axios from "axios";

export const checkExisted = async (inputName) => {
  try {
    const response = await axios.get("http://localhost:8081/list");
    const data = response.data;
    const exist = data.some((task) => task.name == inputName);
    return exist;
  } catch (error) {
    console.log(error);
  }
};
