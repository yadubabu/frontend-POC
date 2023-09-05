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
const accountReducer = (
  state = initialValue.account,
  action: AccountAction
) => {
  console.log(action.payload);

  if (action.type === Types.GET_ACC) {
    return { ...state, account: action.payload };
  } else {
    return state;
  }
};
export default accountReducer;
