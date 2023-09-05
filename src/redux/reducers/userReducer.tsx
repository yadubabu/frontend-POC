import { User } from "../../dataTypes";

const initialValue = {
  user: {},
};
type Users = {
  type: string;
  payload: User;
};
export type UserAction = Users;
const userReducer = (state = initialValue.user, action: UserAction) => {
  console.log(action.payload);

  if (action.type === "SET_USER") {
    return { ...state, user: action.payload };
  } else {
    return state;
  }
};
export default userReducer;
