import React, { useState } from "react";
import "../styles/FarmerRegister.css";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function FarmerLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="farmer-container">
      <div className="farmer-header">
        <div className="farmer-text">Register as a seller</div>
        <div className="farmer-underline"></div>
      </div>
      <form className="farmerRegister-form" onSubmit={handleSubmit}>
        <div className="farmer-inputs">
          <div className="farmer-input">
            <span className="farmer-BadgeIcon">
              <BadgeIcon />
            </span>
            <input
              type="text"
              placeholder="Company Name/Your Name"
              name="Name"
            />
          </div>

          <div className="farmer-input">
            <span className="farmer-PhoneIcon">
              <PhoneIcon />
            </span>
            <input
              type="Contact No"
              placeholder="Phone number"
              name="Phoneno"
            />
          </div>

          <div className="farmer-input">
            <span className="farmer-HomeIcon">
              <HomeIcon />
            </span>
            <input type="Address" placeholder="Address" name="Address" />
          </div>

          <div className="farmer-input">
            <span className="farmer-EmailIcon">
              <EmailIcon />
            </span>
            <input type="email" placeholder="Email Id" name="Email" />
          </div>

          <div className="farmer-input">
            <span className="farmer-LockIcon">
              <LockIcon />
            </span>
            <input type="password" placeholder="Password" name="Password" />
          </div>
        </div>

        <div className="farmer-submit-container">
          <div className="farmer-submit">
            <button type="submit" name="Register">
              Register
            </button>
          </div>
          <div className="farmer-submit">
            <Link to="/FarmerLogin">
              <button type="button" name="Login">
                Login
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FarmerLogin;
