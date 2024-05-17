import React, { useState } from "react";
import "../styles/LoginPg.css";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function RegisterPg() {
  const [username,setUsername ] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [address,setAddress] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const user = {username, phoneNumber, address, email, password}
    console.log(username, phoneNumber, address, email, password)
    const response = await fetch(process.env.BACKEND_URL + '/api/users/signup', {
      method: 'POST',
      headers: {          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      const json = await response.json()
      if(!response.ok){
        setError(json.error)
      }if(response.ok){
        setUsername('')
        setEmail('')
        setPhoneNumber('')
        setPassword('')
        setAddress('')
        console.log("new user added", json)
      }
  };
  
  return (
    <div className="container">
      <div className="header">
        <div className="text">Signup</div>
        <div className="underline"></div>
      </div>

      <form className="customerRegister-form" onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <span className="BadgeIcon">
              <BadgeIcon />
            </span>
            <input type="text" placeholder="username" name="FirstName" 
            onChange={(e)=> setUsername(e.target.value)}
            value = {username}
            />
          </div>

          <div className="input">
            <span className="PhoneIcon">
              <PhoneIcon />
            </span>
            <input
              type="Contact No"
              placeholder="Phone number"
              name="Phoneno"
              onChange={(e)=> setPhoneNumber(e.target.value)}
            value = {phoneNumber}
            />
          </div>

          <div className="input">
            <span className="HomeIcon">
              <HomeIcon />
            </span>
            <input type="Address" placeholder="Address" name="Address" 
            onChange={(e)=> setAddress(e.target.value)}
            value = {address}/>
          </div>

          <div className="input">
            <span className="EmailIcon">
              <EmailIcon />
            </span>
            <input type="email" placeholder="Email Id" name="Email" 
            onChange={(e)=> setEmail(e.target.value)}
            value = {email}/>
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
            <button type="submit" name="Signup">
              Signup
            </button>
          </div>
          <div className="submit">
            <Link to="/Login">
              <button type="button" name="Login">
                Login
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterPg;