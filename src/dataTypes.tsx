export interface Auth {
  auth: boolean;
}
export interface User {
  msg: string;
  name: string;
  email: string;
  user: User;
}
export interface Budget {
  _id: string;
  email: string;
  totalAmount: number;
  expenseBudget: number;
  investmentBudget: number;
  budget: Budget;
}
export interface Account {
  _id: string;
  email: string;
  totalSavings: number;
  totalExpense: number;
  totalInvestment: number;
  account: Account;
}
