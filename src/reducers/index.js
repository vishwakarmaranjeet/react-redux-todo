import { combineReducers } from "redux";
import todo from "./todoReducer";
import counter from "./counterReducer";
import show from "./showHide";

export default combineReducers({
  todo,
  counter,
  show,
});
