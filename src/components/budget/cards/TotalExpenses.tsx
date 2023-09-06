import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { Account, Budget } from "../../../dataTypes";

const TotalExpenses = () => {
  const totalExpense: any = useSelector<Account>(
    (state) => state.account.account.totalExpense
  );
  return (
    <div>
      <Cards
        val={totalExpense}
        name="expensebudget"
        title="Total Expenses"
        color="rgb(255, 205, 86)"
      />
    </div>
  );
};

export default TotalExpenses;
