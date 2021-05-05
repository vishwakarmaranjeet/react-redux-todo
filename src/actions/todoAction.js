import * as actionTypes from "./actionTypes";

export const createTodo = (todo) => {
  return {
    type: actionTypes.CREATE_NEW_TASK,
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: actionTypes.REMOVE_TASK,
    id: id,
  };
};
export const completeTodo = (id) => {
  return {
    type: actionTypes.COMPLETE_TASK,
    id: id,
  };
};
