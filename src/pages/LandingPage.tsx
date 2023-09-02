import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { budgetContent } from "../data/content";
import "./style.css";
import homeImg from "../assets/home1.jpg";

const LandingPage = () => {
  return (
    <div className="land">
      <Image className="landImg" src={homeImg} fluid />
      <div className="landModal">
        <p className="h2 text-light">Start Your </p>
        <p className="title text-warning">FINANCIAL FUTURE PLAN</p>
        <p className="text-light content">{budgetContent}</p>
        <a href="/login">
          <Button className="m-3" variant="warning">
            Login
          </Button>{" "}
        </a>
        <a href="/register">
          <Button variant="warning">Register</Button>{" "}
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
