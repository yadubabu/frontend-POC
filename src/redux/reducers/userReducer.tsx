import { User } from "../../dataTypes";

const initialValue = {
  user: "",
};
type Users = {
  type: string;
  payload: User;
};
export type UserAction = Users;
const userReducer = (state = initialValue.user, action: UserAction) => {
  if (action.type === "SET_USER") {
    return action.payload;
  } else {
    return state;
  }
};
export default userReducer;
