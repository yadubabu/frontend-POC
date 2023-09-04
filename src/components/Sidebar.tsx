import React from "react";
import { useSelector } from "react-redux";
import { User } from "../dataTypes";

const Sidebar = () => {
  const user: any = useSelector<User>((state) => state.user);

  return (
    <div className="sidebar">
      {/* Hello !! {JSON.parse(user).name.toUpperCase()} */}
    </div>
  );
};

export default Sidebar;
