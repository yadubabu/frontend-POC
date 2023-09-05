import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import budgetReducer from "./budgetReducer";
import accountReducer from "./accountReducer";
const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  budget: budgetReducer,
  account: accountReducer,
});

export default reducers;
