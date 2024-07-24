import { ADD_TASK, REMOVE_TASK, UPDATE_TASK, STATUS_TASK } from "./actionType";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const removeTask = (task) => {
  return {
    type: REMOVE_TASK,
    payload: task,
  };
};

export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
    payload: task,
  };
};
export const updateStatus = (task) => {
  return {
    type: STATUS_TASK,
    payload: task,
  };
};
