import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import axios from "axios";
import { loginApi } from "../redux/apis";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import { Auth } from "../dataTypes";

const Login = () => {
  const auth = useSelector<Auth>((state) => state.auth);
  const [msg, setMsg] = useState("");
  const { register, handleSubmit } = useForm();
  const submitHandle = async (data: any) => {
    const { email, password } = data;
    if (email === "" || password === "") {
    }
    await axios
      .post(loginApi, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("data", JSON.stringify(res.data));
        setMsg(res.data.msg);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="sm-12 login" id="login">
      {!auth ? (
        <>
          <Form
            className="m-5 p-3 loginForm"
            onSubmit={handleSubmit(submitHandle)}
          >
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  {...register("email")}
                  type="email"
                  placeholder="Enter your Email"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Col sm="12" className="center">
                <Form.Control
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </Col>
            </Form.Group>
          </Form>{" "}
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Login;
