import React from "react";
import Navbar from "./Navbar";
import Sidenavbar from "./Sidenavbar";

const NavLayout = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo);
  return (
    <div>
      {userInfo?.role === "ADMIN" ? <Sidenavbar /> : <Navbar />}

      {children}
    </div>
  );
};

export default NavLayout;
