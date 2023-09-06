export interface Auth {
  auth: boolean;
}
export interface Account {
  email: string;
  totalSavings: number;
  totalExpense: number;
  totalInvestment: number;
  account: Account;
}
export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  pancard: string;
  phone: number;
  user: User;
}

export interface Budget {
  _id: string;
  email: string;
  totalAmount: number;
  expensBudget: number;
  investmentBudget: number;
  budget: Budget;
}

export interface Trans {
  _id: string;
  email: string;
  name: string;
  type: string;
  amount: number;
  transdate: Date;
  trans: Trans[];
}

export interface Objects {
  type: string;
  color: string;
  percent: number;
  objects: Objects[];
}
