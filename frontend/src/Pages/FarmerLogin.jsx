import React, { useState } from "react";
import "../styles/FarmerRegister.css";
import BadgeIcon from "@mui/icons-material/Badge";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";

function FarmerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/api/farmers/farmerlogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Login failed");
      }

      const data = await response.json();
      console.log(data);
      // Save any necessary data to state or context
      navigate("/FarmerDashboard");
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
    }
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
                placeholder="Email address"
                name="FarmerEmail"
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

          {error && <div className="farmer-error-fm">{error}</div>}

          <div className="farmer-submit-container-fm">
            <div className="farmer-submit-fm">
              <Link to="/FarmerRegister-fm">
                <button type="button" name="Register">
                  Register
                </button>
              </Link>
            </div>
            <div className="farmer-submit-fm">
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

export default FarmerLogin;
