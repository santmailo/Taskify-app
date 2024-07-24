/* eslint-disable react/prop-types */
// import React from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Task({ task, deleteTask, taskStatus }) {
  const [isChecked, setIsChecked] = useState(false);
  // console.log(isChecked);

  return (
    <div className="w-full border border-black flex justify-between items-center p-2 bg-slate-400 task-radius ">
      <input
        type="checkbox"
        className="h-[20px] w-[20px] "
        checked={task.status}
        onChange={() => {
          setIsChecked(!isChecked);
          taskStatus(task, !isChecked);
        }}
      />
      <p
        className={`w-6/12 overflow-x-hidden ${
          task.status ? "line-through" : ""
        }`}
      >
        {task.todo}
      </p>
      <p className="w-2/12">{task.status ? "Completed" : "Pending"}</p>
      <div className="w-2/12 flex justify-between ">
        {/* <span>
                <FontAwesomeIcon icon={faEdit} />
              </span> */}
        <span onClick={() => deleteTask(task)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
      </div>
    </div>
  );
}

export default Task;
