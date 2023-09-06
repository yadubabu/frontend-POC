const initialValue = {
  auth: false,
};
type Auth = {
  type: string;
  payload: boolean;
};
export type AuthAction = Auth;
const authReducer = (state = initialValue, action: AuthAction) => {
  if (action.type === "SET_AUTH") {
    return { ...state, auth: action.payload };
  } else {
    return state;
  }
};
export default authReducer;
