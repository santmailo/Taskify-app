import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Task from "./components/Task";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // when adding text into input
  function onTaskInputChange(e) {
    setTask(e.target.value);
  }

  //getting data in this function
  async function getTasks() {
    axios
      .get("https://taskify-app-ldrc.onrender.com/api/todos")
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
        // setError(error);
        // setLoading(false);
      });
  }

  // when sumbmitting form
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://taskify-app-ldrc.onrender.com/api/todos", {
        todo: task,
        status: false,
      });
      getTasks();
    } catch (error) {
      console.error("There was an error making the POST request!", error);
    }
  }

  // to delete the task
  async function deleteTask(todo) {
    // setLoading(true);
    try {
      await axios.delete(
        `https://taskify-app-ldrc.onrender.com/api/todos/${todo._id}`
      );
    } catch (error) {
      console.error("There was an error making the DELETE request!", error);
    }
    getTasks();
  }

  // change status of the task
  async function taskStatus(todo, checked) {
    try {
      const res = await axios.put(
        `https://taskify-app-ldrc.onrender.com/api/todos/${todo._id}`,
        {
          status: checked,
        }
      );
      console.log(res.data, "updated successfully");
    } catch (error) {
      console.error("There was an error making the PUT request!", error);
    }
    getTasks();
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className=" w-screen h-screen  bg-red-400 flex flex-col items-center">
      <div className=" flex justify-center font-bold text-6xl m-10 ">
        <h1>Taskify</h1>
      </div>
      <div className="w-4/6 h-4/6  flex flex-col gap-5 ">
        <form
          action=""
          method="post"
          className="flex justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="taskInput"
            id="taskInput"
            className="w-4/5
            border
            border-black h-[40px] left-rounded-50 pl-[20px] pr-[20px] bg-grey-200"
            placeholder="What do you need to do"
            onChange={(e) => onTaskInputChange(e)}
          />
          <input
            type="submit"
            value="Add Task"
            className="w-1/5 border border-black h-[40px] bg-green-600 text-white font-semibold right-rounded-50  "
          />
        </form>

        <div className="p-2 overflow-scroll overflow-x-hidden flex flex-col gap-2 ">
          {tasks.map((task) => {
            return (
              <Task
                task={task}
                deleteTask={deleteTask}
                key={task._id}
                taskStatus={taskStatus}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
