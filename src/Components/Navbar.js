import React, { useState } from "react";
import Logo from "../assets/KhetiMart.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenlinks] = useState(false);

  const toggleNavbar = () => {
    setOpenlinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="Leftside" id={openLinks ? "open" : "close"}>
        <Link to="/" className="logoLink">
          <img src={Logo} />
        </Link>
        <div className="hiddenLinks">
          <Link to="/FarmerRegister">Become a seller</Link>
          <Link to="/Payment">Payment</Link>
          <Link to="/Help">Help</Link>
          <Link to="/Login">Login&Signup</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="rightside">
        <Link to="/FarmerRegister">Become a seller</Link>
        <Link to="/Payment">Payment</Link>
        <Link to="/Help">Help</Link>
        <Link to="/Login">Login&Signup</Link>
        <Link to="/cart">Cart</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
