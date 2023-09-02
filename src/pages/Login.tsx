import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import axios from "axios";
import { loginApi } from "../redux/apis";

const Login = () => {
  const [msg, setMsg] = useState("");
  const { register, handleSubmit } = useForm();
  const submitHandle = async (data: any) => {
    const { email, password } = data;
    console.log(email);

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
      {msg === "Successfully Login" ? (
        <>{(window.location.href = "/dashboard")}</>
      ) : (
        ""
      )}
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Login Here</Card.Title>
          <Form onSubmit={handleSubmit(submitHandle)}>
            <Row>
              <Col sm={12} className="m-2 ">
                <Form.Control
                  type="email"
                  {...register("email")}
                  placeholder="Enter Email"
                />
              </Col>
              <Col sm={12} className="m-2">
                <Form.Control
                  type="password"
                  {...register("password")}
                  placeholder="Enter Password"
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12} className="m-2">
                <Form.Control
                  className="text-success"
                  type="submit"
                  value="Login"
                />
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
