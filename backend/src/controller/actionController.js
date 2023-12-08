import { addTaskAPI, getTaskAPI } from "../api/actionAPI.js";

const handleError = (res, response) => {
  if (response.status == "success") {
    return res.status(201).json(response);
  } else if (response.status == "failed") {
    return res.status(400).json(response);
  } else {
    return res.status(500).json(response);
  }
};

export const addTaskController = async (req, res) => {
  const name = req.body.name;
  const response = await addTaskAPI(name);
  handleError(res, response);
};

export const getTaskController = async (req, res) => {
  const response = await getTaskAPI();
  handleError(res, response);
};
