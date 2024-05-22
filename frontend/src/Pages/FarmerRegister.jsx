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
  const [fname, setFname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const farmer = { fname, phoneNumber, email, password };
    console.log(fname, phoneNumber, email, password);

    const response = await fetch(
      "http://localhost:5000/api/farmers/farmersignup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(farmer),
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setFname("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setError(null);
      console.log("new farmer added", json);
    }
  };

  return (
    <div className="farmer-container-fm">
      <div className="farmer-form-container-fm">
        <div className="farmer-header-fm">
          <div className="farmer-text-fm">Register as a seller</div>
          <div className="farmer-underline-fm"></div>
        </div>
        <form className="farmerRegister-form-fm" onSubmit={handleSubmit}>
          <div className="farmer-inputs-fm">
            <div className="farmer-input-fm">
              <span className="farmer-BadgeIcon-fm">
                <BadgeIcon />
              </span>
              <input
                type="text"
                required
                placeholder="Full Name/Company Name"
                name="Name"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
              />
            </div>

            <div className="farmer-input-fm">
              <span className="farmer-PhoneIcon-fm">
                <PhoneIcon />
              </span>
              <input
                type="Contact No"
                placeholder="Contact number"
                required
                name="Phoneno"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </div>

            <div className="farmer-input-fm">
              <span className="farmer-EmailIcon-fm">
                <EmailIcon />
              </span>
              <input
                type="email"
                placeholder="example@gmail.com"
                name="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="farmer-input-fm">
              <span className="farmer-LockIcon-fm">
                <LockIcon />
              </span>
              <input
                type="password"
                placeholder="Password"
                name="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="farmer-input-fm">
              <span className="farmer-LockIcon-fm">
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

          <div className="farmer-submit-container-fm">
            <div className="farmer-submit-fm">
              <button type="submit" name="Register">
                Register
              </button>
            </div>
            <div className="farmer-submit-fm">
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
