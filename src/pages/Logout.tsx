import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";

const Logout = () => {
  const auth: string | unknown = useSelector<Auth>((state) => state.auth);

  return (
    <div>{auth ? JSON.parse(localStorage.removeItem("data") || "{}") : ""}</div>
  );
};

export default Logout;
