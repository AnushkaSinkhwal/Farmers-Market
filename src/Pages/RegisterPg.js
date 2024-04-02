import React, { useState } from "react";
import "../styles/LoginPg.css";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function RegisterPg() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="header">
        <div className="text">Signup</div>
        <div className="underline"></div>
      </div>

      <form className="customerRegister-form" onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <span className="BadgeIcon">
              <BadgeIcon />
            </span>
            <input type="text" placeholder="FIrst Name" />
          </div>

          <div className="input">
            <span className="PhoneIcon">
              <PhoneIcon />
            </span>
            <input type="Contact No" placeholder="Phone number" />
          </div>

          <div className="input">
            <span className="HomeIcon">
              <HomeIcon />
            </span>
            <input type="Address" placeholder="Address" />
          </div>

          <div className="input">
            <span className="EmailIcon">
              <EmailIcon />
            </span>
            <input type="email" placeholder="Email Id" />
          </div>

          <div className="input">
            <span className="LockIcon">
              <LockIcon />
            </span>
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className="submit-container">
          <div className="submit">
            <button type="button">Signup</button>
          </div>
          <div className="submit">
            <Link to="/Login">
              <button className="button">Login</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterPg;
