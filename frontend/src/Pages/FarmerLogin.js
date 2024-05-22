import React, { useState } from "react";
import "../styles/FarmerRegister.css";
import BadgeIcon from "@mui/icons-material/Badge";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function FarmerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);

    const farmer = { email, password };

    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/farmers/farmerlogin",
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
      setEmail("");
      setPassword("");
      setError(null);
      console.log("farmer logged in", json);
    }

    //save the user to localstorage
    localStorage.setItem("farmer", JSON.stringify(json));
  };

  return (
    <div className="farmer-container-fm">
      <div className="farmer-form-container-fm">
        <div className="farmer-header-fm">
          <div className="farmer-text-fm">Login</div>
          <div className="farmer-underline-fm"></div>
        </div>

        <form className="farmerLogin-form-fm" onSubmit={handleSubmit}>
          <div className="farmer-inputs-fm">
            <div className="farmer-input-fm">
              <span className="farmer-BadgeIcon-fm">
                <BadgeIcon />
              </span>
              <input
                type="text"
                placeholder="Email Address"
                name="FarmerName"
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
                name="FarmerPassword"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          <div className="farmer-submit-container-fm">
            <div className="farmer-submit-fm">
              <Link to="/FarmerRegister">
                <button type="button" name="Register">
                  Register
                </button>
              </Link>
            </div>
            <div className="farmer-submit-fm">
              <Link to="/FarmerDashbord">
                {" "}
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