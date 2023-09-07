import { Types } from "../enums/constants";
import { Budget } from "../../dataTypes";

const initialValue: Budget = {
  _id: "",
  email: "",
  expenseBudget: 0,
  investmentBudget: 0,
  totalAmount: 0,
};

export type BudgetAction = {
  type: string;
  payload: Budget;
};

const budgetReducer = (state = initialValue, action: BudgetAction) => {
  console.log(action.payload);

  if (action.type === Types.GET_BUDGET) {
    return { ...state, ...action.payload };
  } else {
    return state;
  }
};
export default budgetReducer;
