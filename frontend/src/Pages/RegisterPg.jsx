import React, { useState } from "react";
import "../styles/LoginPg.css";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function RegisterPg() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { username, phoneNumber, address, email, password };
    console.log(username, phoneNumber, address, email, password);
    const response = await fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setUsername("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setAddress("");
      console.log("new user added", json);
    }
  };
  return (
    <div className="Container-c">
      <div className="form-container-c">
        <div className="header-c">
          <div className="text-c">Signup</div>
          <div className="underline-c"></div>
        </div>

        <form className="customerRegister-form-c" onSubmit={handleSubmit}>
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
              <span className="PhoneIcon-c">
                <PhoneIcon />
              </span>
              <input
                type="Contact No"
                placeholder="Phone number"
                name="Phoneno"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </div>

            <div className="input-c">
              <span className="HomeIcon-c">
                <HomeIcon />
              </span>
              <input
                type="Address"
                placeholder="Address"
                name="Address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>

            <div className="input-c">
              <span className="EmailIcon-c">
                <EmailIcon />
              </span>
              <input
                type="email"
                placeholder="Email Id"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
              <button type="submit" name="Signup">
                Signup
              </button>
            </div>
            <div className="submit-c">
              <Link to="/Login">
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

export default RegisterPg;
