import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import reposReducer from "./reposReducer";

export default combineReducers({
  usersReducer,
  reposReducer
});
