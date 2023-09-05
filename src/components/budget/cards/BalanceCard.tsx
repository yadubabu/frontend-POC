import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { Budget } from "../../../dataTypes";

const BalanceCard = () => {
  const budget: any = useSelector<Budget>((state) => state.budget.budget);
  console.log(budget);

  return (
    <div>
      <Cards
        val={budget.totalAmount}
        name="setbudget"
        title="Available Balance"
        color="lightgreen"
      />
    </div>
  );
};

export default BalanceCard;
