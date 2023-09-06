import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { Account, Budget } from "../../../dataTypes";

const TotalExpenses = () => {
  const data: any = useSelector((state) => state);

  return (
    <div>
      <Cards
        name="expensebudget"
        title="Total Expenses"
        color="rgb(255, 205, 86)"
      />
    </div>
  );
};

export default TotalExpenses;
