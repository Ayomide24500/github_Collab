import React, { useState } from "react";
import { createTask } from "../Api/Api";
import { NavLink } from "react-router-dom";

const TaskBox = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState();

  const handlecreateTask = () => {
    createTask({ taskName, description }).then((res: any) => {
      setState(res?.data?.data);
      return res.data;
    });
  };

  return (
    <div className="border w-[30%] h-[300px] my-4 shadow-md rounded-md flex flex-col px-4 gap-3 justify-center items-center">
      TaskName:
      <input
        type="text"
        placeholder="Edit the project name here..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="h-[50px] w-[50%] outline-none border-none pl-5"
      />
      Description:
      <input
        type="text"
        placeholder="Edit the project name here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="h-[50px] w-[50%] outline-none border-none pl-5"
      />
      <NavLink to="/about">
        <button
          className="py-5 px-8 bg-pink-500 rounded-md"
          onClick={handlecreateTask}
        >
          Create Task
        </button>
      </NavLink>
    </div>
  );
};

export default TaskBox;
