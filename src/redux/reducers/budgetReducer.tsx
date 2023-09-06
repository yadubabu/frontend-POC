import { Types } from "../enums/constants";
import { Budget } from "../../dataTypes";

const initialValue = {
  budget: {},
};

type Budgets = {
  type: string;
  payload: Budget;
};
export type BudgetAction = Budgets;
const budgetReducer = (state = initialValue, action: BudgetAction) => {
  console.log(action.payload);

  if (action.type === Types.GET_BUDGET) {
    return { ...state, budget: action.payload };
  } else {
    return state;
  }
};
export default budgetReducer;
