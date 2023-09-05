import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { Budget, Account } from "../../../dataTypes";

const TotalInvestments = () => {
  const budget: any = useSelector<Budget>((state) => state.budget.budget);
  const account: any = useSelector<Account>((state) => state.account.account);

  return (
    <div>
      <Cards
        val={account.totalInvestment}
        name="investmentbudget"
        title="Total Investments"
        color="rgb(54, 162, 235)"
      />
    </div>
  );
};

export default TotalInvestments;
