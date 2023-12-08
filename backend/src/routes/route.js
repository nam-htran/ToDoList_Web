import {
  addTaskController,
  getTaskController,
} from "../controller/actionController.js";

export const initWebRoute = (router, app) => {
  router.post("/api/add-task", addTaskController);
  router.get("/api/get-task", getTaskController);
  return app.use("/", router);
};
