import React from "react";
import { useEffect, useState } from "react";
import TaskBox from "./Taskbox";
import { viewTask } from "../Api/Api";

const About = () => {
  const [tasks, setTasks] = useState([{}]);

  useEffect(() => {
    viewTask().then((res) => {
      setTasks(res);
    });
  }, [tasks]);

  return (
    <div>
      <div>
        <div className="bg-orange-500 w-full h-[calc(100vh-70px)] flex justify-center items-center flex-col gap-4">
          <h1 className="text-2xl font-bold mb-4">Task List</h1>
          <div className="py-4 px-4 flex gap-4 flex-wrap shadow-white shadow-lg">
            {tasks &&
              tasks?.map((task: any) => (
                <div className="h-[300px] w-[300px] bg-pink-300">
                  <div className="p-4 shadow-md rounded-md w-[100%] bg-white text-black font-bold">
                    <div className="mb-4 w-[100%]">
                      <label className="block text-gray-600 font-semibold mb-2">
                        Task Name:
                      </label>
                      <p>"{task.taskName}"</p>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2">Description To:</label>
                      <p>"{task.description}"</p>
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-2">
                        Date:
                      </label>
                      <p className="text-gray-800">
                        {new Date().getDate()}/{new Date().getMonth()}/
                        {new Date().getFullYear()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
