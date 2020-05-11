import { combineReducers } from "redux";
import { reducer as todoReducer } from "../containers/TodoList/store";

export default combineReducers({
  todo: todoReducer
});
