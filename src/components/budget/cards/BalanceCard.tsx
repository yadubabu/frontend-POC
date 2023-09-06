import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { Budget } from "../../../dataTypes";

const BalanceCard = () => {
  const totalAmount: any = useSelector<Budget>(
    (state) => state.budget.budget.totalAmount
  );
  console.log(totalAmount);

  return (
    <div>
      <Cards
        val={totalAmount}
        name="setbudget"
        title="Available Balance"
        color="lightgreen"
      />
    </div>
  );
};

export default BalanceCard;
