import React, { useState } from "react";
import "../styles/LoginPg.css";
import BadgeIcon from "@mui/icons-material/Badge";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";

function LoginPg() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      navigate("/adminHome");
    }
  };
  return (
    <div className="container-c">
      <div className="form-container-c">
        <div className="header-c">
          <div className="text-c">Login</div>
          <div className="underline-c"></div>
        </div>

        <form className="CustomerLogin-form-c" onSubmit={handleSubmit}>
          <div className="inputs-c">
            <div className="input-c">
              <span className="BadgeIcon-c">
                <BadgeIcon />
              </span>
              <input
                type="text"
                placeholder="First Name"
                name="FirstName"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>

            <div className="input-c">
              <span className="LockIcon-c">
                <LockIcon />
              </span>
              <input
                type="password"
                placeholder="Password"
                name="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          <div className="submit-container-c">
            <div className="submit-c">
              <Link to="/RegisterPg">
                <button type="button" name="Login">
                  Signup
                </button>
              </Link>
            </div>
            <div className="submit-c">
              <button type="submit" name="Login">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPg;
