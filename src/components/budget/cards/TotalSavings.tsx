import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { Budget, Account } from "../../../dataTypes";

const TotalSavings = () => {
  const budget: any = useSelector<Budget>((state) => state.budget.budget);

  const account: any = useSelector<Account>((state) => state.account.account);
  const data: any = useSelector((state) => state);
  console.log(data.account);
  console.log(data.budget);
  console.log(data.user);
  console.log(data.auth);

  return (
    <div>
      <Cards
        val={account.totalSavings}
        name="savingsbudget"
        title="Total Savings"
        color="rgb(255, 99, 132)"
      />
    </div>
  );
};

export default TotalSavings;
