import React, { useState } from "react";
import "../styles/FarmerRegister.css";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";

import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function FarmerRegister() {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting");
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/farmers/farmersignup", {
        fname: fullName,
        phoneNumber: contact,
        address,
        email,
        password,
      })
      .then((res) => toast.success(<div>User registered succesfully!!</div>));
  };

  return (
    <div className="farmer-container">
      <div className="farmer-form-container">
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
                required
                placeholder="Full Name/Company Name"
                name="Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="farmer-input">
              <span className="farmer-PhoneIcon">
                <PhoneIcon />
              </span>
              <input
                type="Contact No"
                placeholder="Contact number"
                required
                name="Phoneno"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div className="farmer-input">
              <span className="farmer-EmailIcon">
                <EmailIcon />
              </span>
              <input
                type="email"
                placeholder="example@gmail.com"
                name="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="farmer-input">
              <span className="farmer-LockIcon">
                <LockIcon />
              </span>
              <input
                type="password"
                placeholder="Password"
                name="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="farmer-input">
              <span className="farmer-LockIcon">
                <HomeIcon />
              </span>
              <input
                type="text"
                placeholder="Enter your address"
                name="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
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
    </div>
  );
}

export default FarmerRegister;
