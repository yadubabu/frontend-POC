import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { Account } from "../../../dataTypes";

const TotalSavings = () => {
  const totalSavings: any = useSelector<Account>(
    (state) => state.account.account.totalSavings
  );
  return (
    <div>
      <Cards
        val={totalSavings}
        name="savingsbudget"
        title="Total Savings"
        color="rgb(255, 99, 132)"
      />
    </div>
  );
};

export default TotalSavings;
