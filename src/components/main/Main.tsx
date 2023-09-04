import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "./style.css";
import BalanceCard from "../budget/cards/BalanceCard";
import TotalSavings from "../budget/cards/TotalSavings";
import TotalExpenses from "../budget/cards/TotalExpenses";
import TotalInvestments from "../budget/cards/TotalInvestments";
import TransactionsForm from "../transactions/TransactionsForm";
import TransactionsTracker from "../transactions/TransactionsTracker";

const Main = () => {
  return (
    <div className="main">
      <Row className="budget">
        <Col sm={3}>
          <BalanceCard />
        </Col>
        <Col sm={3}>
          <TotalSavings />
        </Col>
        <Col sm={3}>
          <TotalExpenses />
        </Col>
        <Col sm={3}>
          <TotalInvestments />
        </Col>
      </Row>
      <hr />
      <Row className="trans">
        <Col sm={4}>
          <TransactionsForm />
        </Col>
        <Col sm={4}>
          <TransactionsTracker />
        </Col>
        <Col sm={4}>
          <TransactionsTracker />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
