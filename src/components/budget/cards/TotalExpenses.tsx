import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { Account, Budget } from "../../../dataTypes";

const TotalExpenses = () => {
  const budget: any = useSelector<Budget>((state) => state.budget.budget);
  const account: any = useSelector<Account>((state) => state.account.account);

  return (
    <div>
      <Cards
        val={account.totalExpense}
        name="expensebudget"
        title="Total Expenses"
        color="rgb(255, 205, 86)"
      />
    </div>
  );
};

export default TotalExpenses;
