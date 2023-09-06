import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";

const TotalInvestments = () => {
  const data: any = useSelector((state) => state);

  return (
    <div>
      <Cards
        val={data.account.account}
        name="investmentbudget"
        title="Total Investments"
        color="rgb(85, 128, 156)"
      />
    </div>
  );
};

export default TotalInvestments;
