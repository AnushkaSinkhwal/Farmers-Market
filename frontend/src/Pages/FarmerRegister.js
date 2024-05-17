import React, { useState } from "react";
import "../styles/FarmerRegister.css";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function FarmerRegister() {
  const [fname, setFname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async(event) => {
    event.preventDefault();
    const farmer = {fname, phoneNumber, email, password}
    console.log(fname, phoneNumber, email, password)

    const response = await fetch('http://localhost:3002/api/farmers/farmersignup', {
      method: 'POST',
      headers: {          'Content-Type': 'application/json'
        },
        body: JSON.stringify(farmer)
      });
      const json = await response.json()
      if(!response.ok){
        setError(json.error)
      }if(response.ok){
        setFname('')
        setEmail('')
        setPhoneNumber('')
        setPassword('')
        setError(null)
        console.log("new farmer added", json)
      }
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
              placeholder="Full Name/Company Name"
              name="Name"
              onChange={(e)=> setFname(e.target.value)}
              value={fname}
            />
          </div>

          <div className="farmer-input">
            <span className="farmer-PhoneIcon">
              <PhoneIcon />
            </span>
            <input
              type="text"
              placeholder="Contact number"
              name="Phoneno"
              onChange={(e)=> setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>

          <div className="farmer-input">
            <span className="farmer-EmailIcon">
              <EmailIcon />
            </span>
            <input
              type="email"
              placeholder="Email Id"
              name="Email"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
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
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>

        <div className="farmer-submit-container">
          <div className="farmer-submit">
            <button type="submit" name="Register">Register</button>
          </div>
          <div className="farmer-submit">
            <Link to="/FarmerLogin">
              <button type="button" name="Login">Login</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FarmerRegister;
