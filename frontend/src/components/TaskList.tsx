"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { InsertModalBtn } from "./index";
import { apiURL } from "@/constants/api";
import { Task } from "@/types/task";

const TaskList: React.FC = () => {
  const [data, setData] = useState<Task[]>([]);
  const handleGetTask = async () => {
    try {
      const response = await axios.get(`${apiURL}/get-task`);
      setData(response.data.data);
    } catch (error) {
      console.error("Error in handleGetTask:", error);
    }
  };

  const refreshTaskList = () => {
    handleGetTask();
  };

  useEffect(() => {
    handleGetTask();
  }, []);

  return (
    <React.Fragment>
      <div>
        <InsertModalBtn isInsertSuccess={refreshTaskList} />
      </div>
      <div className="w-full flex flex-col h-full text-center px-5">
        <table>
          <thead>
            <tr>
              <th>List</th>
              <th className="w-1/3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((task) => (
              <tr key={task.id}>
                <td className="text-left px-5 my-2">{task.name}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default TaskList;
