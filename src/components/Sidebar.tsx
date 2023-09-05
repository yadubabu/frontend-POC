import React from "react";
import { useSelector } from "react-redux";
import { User } from "../dataTypes";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Auth } from "../dataTypes";

import "./style.css";

const Sidebar = () => {
  const user: any = useSelector<User>((state) => state.user.user);

  return (
    <div className="sidebar">
      <h5>
        Welcome!
        {/* {user.name} */}
      </h5>
      <Nav className="sideNavs flex-column align-items-center justify-content-center my-5">
        <Nav.Link href="/budget/setbudget">Set Budget</Nav.Link>
        <Nav.Link href="/budget/savingsbudget">Total-Savings</Nav.Link>
        <Nav.Link href="/budget/expensebudget">Total-Expenses</Nav.Link>
        <Nav.Link href="/budget/investmentbudget">Total-Investments</Nav.Link>
        <Nav.Link href="/transactions/tracker">Transactions-Tracker</Nav.Link>
        <Nav.Link href="/transactions/add">Add-Transactions</Nav.Link>
        <Nav.Link href="/transactions/edit">Transactions-History</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
