import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import axios, { AxiosResponse, AxiosError } from "axios";
import { User } from "../../dataTypes";
import { getTransApi, addTransApi } from "../../redux/apis";

const TransactionsForm = () => {
  const [msg, setMsg] = useState("");
  let user: any = JSON.parse(sessionStorage.getItem("data") || "{}");
  const { register, handleSubmit, resetField } = useForm();
  const submitTrans = async (data: any) => {
    const { name, type, amount, transdate } = data;
    await axios
      .post(`${addTransApi}`, {
        email: user.email,
        name,
        type,
        amount,
        transdate,
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      {msg === "Transaction added" ? (
        <>
          {setTimeout(() => {
            window.location.href = "/dashboard";
          }, 2000)}
        </>
      ) : (
        ""
      )}
      <h3>Transactions</h3>
      <form id="form" onSubmit={handleSubmit(submitTrans)}>
        <div>
          <div>
            <input
              type="text"
              placeholder="Salary,House,Rent,SIP"
              className="form-control m-1"
              {...register("name")}
            />
          </div>
          <select className="form-control m-1" {...register("type")}>
            <option value="Select categoery">Select</option>
            <option value="investment">Investment</option>
            <option value="expense">Expense</option>
            <option value="savings">Savings</option>
          </select>
          <div className="input-group">
            <input
              type="number"
              placeholder="Amount"
              className="form-control m-1"
              {...register("amount")}
            />
          </div>
          <div>
            <input
              type="date"
              {...register("transdate")}
              className="form-control m-1"
            />
          </div>

          <div className="btn btn-sm d-flex">
            <button className="btn btn-success m-1">Make Transaction</button>
            {/* <button className="btn btn-primary" onClick={goHistory}>History</button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransactionsForm;
