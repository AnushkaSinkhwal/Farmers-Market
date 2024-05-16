import React, { useState } from "react";
import "../styles/FarmerRegister.css";
import BadgeIcon from "@mui/icons-material/Badge";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function FarmerLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="farmer-container">
      <div className="farmer-form-container">
        <div className="farmer-header">
          <div className="farmer-text">Login</div>
          <div className="farmer-underline"></div>
        </div>

        <form className="farmerLogin-form" onSubmit={handleSubmit}>
          <div className="farmer-inputs">
            <div className="farmer-input">
              <span className="farmer-BadgeIcon">
                <BadgeIcon />
              </span>
              <input
                type="text"
                placeholder="Registered Name"
                name="FarmerName"
              />
            </div>

            <div className="farmer-input">
              <span className="farmer-LockIcon">
                <LockIcon />
              </span>
              <input
                type="password"
                placeholder="Password"
                name="FarmerPassword"
              />
            </div>
          </div>

          <div className="farmer-submit-container">
            <div className="farmer-submit">
              <Link to="/FarmerRegister">
                <button type="button" name="Register">
                  Register
                </button>
              </Link>
            </div>
            <div className="farmer-submit">
              <Link to="/FarmerDashbord">
                <button type="submit" name="Login">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FarmerLogin;
