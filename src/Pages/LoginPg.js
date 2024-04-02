import React, { useState } from "react";
import "../styles/LoginPg.css";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

function LoginPg() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action === "Sign Up" ? "Sign Up" : "Login"}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <span className="BadgeIcon">
            <BadgeIcon />
          </span>
          <input type="text" placeholder="FIrst Name" />
        </div>
        {action === "Sign Up" && (
          <>
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
          </>
        )}

        <div className="input">
          <span className="LockIcon">
            <LockIcon />
          </span>
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginPg;
