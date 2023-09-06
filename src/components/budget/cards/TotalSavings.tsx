import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";

const TotalSavings = () => {
  const data: any = useSelector((state) => state);
  return (
    <div>
      <Cards
        val={data.account.account}
        name="savingsbudget"
        title="Total Savings"
        color="rgb(255, 99, 132)"
      />
    </div>
  );
};

export default TotalSavings;
