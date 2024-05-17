import React, { useState } from "react";
import "../styles/LoginPg.css";
import BadgeIcon from "@mui/icons-material/Badge";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function LoginPg() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password)
  };
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <form className="CustomerLogin-form" onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <span className="BadgeIcon">
              <BadgeIcon />
            </span>
            <input type="text" placeholder="username" name="FirstName" onChange={(e)=> setUsername(e.target.value)}
            value = {username}/>
          </div>

          <div className="input">
            <span className="LockIcon">
              <LockIcon />
            </span>
            <input type="password" placeholder="Password" name="Password" 
            onChange={(e)=> setPassword(e.target.value)}
            value = {password}/>
          </div>
        </div>

        <div className="submit-container">
          <div className="submit">
            <Link to="/RegisterPg">
              <button type="button" name="Login">
                Signup
              </button>
            </Link>
          </div>
          <div className="submit">
            <button type="submit" name="Login">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPg;
