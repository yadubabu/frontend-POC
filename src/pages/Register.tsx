import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import axios from "axios";
import { registerApi } from "../redux/apis";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";

const Register = () => {
  const auth = useSelector<Auth>((state) => state.auth);
  const [msg, setMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const submitHandle = async (data: any) => {
    const { name, email, password, confirmpassword, pancard, phone } = data;
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === "" ||
      pancard === "" ||
      phone === ""
    ) {
      setMsg("All fields are mandatory");
    } else if (password.length < 6 || password.length > 10) {
      setMsg("Password should be 6 characters");
    } else if (password !== confirmpassword) {
      setMsg("password and confirmPassword should be equal");
    }
    const response = await axios.post(`${registerApi}`, {
      name,
      email,
      password,
      confirmpassword,
      pancard,
      phone,
    });
    if (response) {
      setMsg("Successfully Registered");
    }
  };

  return (
    <div id="login">
      <span className="text-success h4"> {msg}</span>
      {msg === "Successfully Registered" ? (
        <>
          {setTimeout(() => {
            window.location.href = "/login";
          }, 2000)}
        </>
      ) : (
        ""
      )}
      {!auth && (
        <>
          <Form className="m-3 p-5" onSubmit={handleSubmit(submitHandle)}>
            <Form.Group
              as={Row}
              className="mb-3 m-2"
              controlId="formPlaintextName"
            >
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  {...register("name")}
                  type="text"
                  placeholder="Enter your name"
                />
                <small className="text-danger"></small>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 m-2"
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
                <small className="text-danger"></small>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 m-2"
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
                <small className="text-danger">
                  {/* {errors?.password && errors.password?.message} */}
                </small>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 m-2"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Confirm Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  {...register("confirmpassword")}
                  type="password"
                  placeholder="Enter your confirm password"
                />
                <small className="text-danger">
                  {/* {errors?.password && errors.password?.message} */}
                </small>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 m-2"
              controlId="formPlaintextPancard"
            >
              <Form.Label column sm="2">
                Pancard
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  {...register("pancard")}
                  type="text"
                  placeholder="Enter your Pancard nunber"
                />
                <small className="text-danger">
                  {/* {errors?.password && errors.password?.message} */}
                </small>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 m-2"
              controlId="formPlainNumberPhone"
            >
              <Form.Label column sm="2">
                Phone
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  {...register("phone")}
                  type="number"
                  placeholder="Enter your Phone"
                />
                <small className="text-danger"></small>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 m-2"
              controlId="formPlaintextPassword"
            >
              <Col sm="3" className="mb-2">
                <Form.Control
                  className="logBtn btn btn-warning"
                  type="submit"
                  value="Register"
                />
              </Col>
            </Form.Group>
          </Form>{" "}
        </>
      )}
    </div>
  );
};

export default Register;
