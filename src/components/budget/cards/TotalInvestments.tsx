import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { Account } from "../../../dataTypes";

const TotalInvestments = () => {
  const totalInvestment: any = useSelector<Account>(
    (state) => state.account.account.totalInvestment
  );
  return (
    <div>
      <Cards
        val={totalInvestment}
        name="investmentbudget"
        title="Total Investments"
        color="rgb(85, 128, 156)"
      />
    </div>
  );
};

export default TotalInvestments;
