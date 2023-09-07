import { User } from "../../dataTypes";
import { Types } from "../enums/constants";

const initialValue = {
  msg: "",
  name: "",
  email: "",
};
type Users = {
  type: string;
  payload: User;
};
export type UserAction = Users;
const userReducer = (state = initialValue, action: UserAction) => {
  if (action.type === Types.SET_USER) {
    return { ...state, user: action.payload };
  } else {
    return state;
  }
};
export default userReducer;
