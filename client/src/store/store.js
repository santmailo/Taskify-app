import { createStore } from "redux";

import { ADD_TASK, REMOVE_TASK, UPDATE_TASK, STATUS_TASK } from "./actionType";

const initialState = {
  tasks: [{ _id: 1, task: "sunil", status: "checked" }],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id != action.payload._id),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: tasks.map((task) => {
          if (task._id == action.payload._id) {
            console.log(task);
          }
        }),
      };
    case STATUS_TASK:
      return {
        ...state,
        tasks: tasks.map((task) => {
          if (task._id == action.payload._id) {
            task.status = action.payload.status;
          }
        }),
      };

    default:
      return state;
  }
}

const store = createStore(rootReducer);
export default store;
