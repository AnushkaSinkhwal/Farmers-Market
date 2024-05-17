import React, { useState } from "react";
import Logo from "../assets/KhetiMart.png";
import CartLogo from "../assets/shopping-cart.png";
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
          <Link to="/Login">Login</Link>
          <Link to="/cart" className="cartlink">
            <img src={CartLogo} />
          </Link>
        </div>
      </div>
      <div className="rightside">
        <Link to="/FarmerRegister">Become a seller</Link>
        <Link to="/Payment">Payment</Link>
        <Link to="/Help">Help</Link>
        <Link to="/Login">Login</Link>
        <Link to="/cart" className="cartlink">
          <img src={CartLogo} />
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
