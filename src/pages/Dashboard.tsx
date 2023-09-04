import React from "react";
import Sidebar from "../components/Sidebar";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Main from "../components/main/Main";

const Dashboard = () => {
  return (
    <div className="">
      <Row sm={12}>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9}>
          <Main />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
