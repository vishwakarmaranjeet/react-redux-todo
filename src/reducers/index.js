import { combineReducers } from "redux";
import todo from "./todoReducer";
import counter from "./counterReducer";
export default combineReducers({
  todo,
  counter,
});
