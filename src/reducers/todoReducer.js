import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_TASK:
      //return [...state, Object.assign({}, action.payload)];
      return [...state, { ...action.payload }];
    case actionTypes.REMOVE_TASK:
      return state.filter((todo) => todo.id !== action.id);
    case actionTypes.COMPLETE_TASK:
      return state.map((todo, index) => {
        if (index === action.id) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });
    default:
      return state;
  }
};
export default todoReducer;
