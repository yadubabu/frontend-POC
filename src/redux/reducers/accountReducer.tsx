import { Types } from "../enums/constants";
import { Account } from "../../dataTypes";

const initialValue = {
  account: {},
};

type Accounts = {
  type: string;
  payload: Account;
};
export type AccountAction = Accounts;
const accountReducer = (state = initialValue, action: AccountAction) => {
  console.log(action.payload);

  if (action.type === Types.GET_ACCOUNT) {
    return { ...state, account: action.payload };
  } else {
    return state;
  }
};
export default accountReducer;
