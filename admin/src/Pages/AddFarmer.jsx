import React, { useState } from "react";
import "../Style/AddFarmer.css";
import { Link } from "react-router-dom";
function AddFarmer() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="farmer-container">
      <div className="farmer-form-container">
        <div className="farmer-header">
          <div className="farmer-text">Register seller</div>
          <div className="farmer-underline"></div>
        </div>
        <form className="farmerRegister-form" onSubmit={handleSubmit}>
          <div className="farmer-inputs">
            <div className="farmer-input">
              <div className="holderid">
                <p>Company/Full Name</p>
              </div>
              <input type="text" name="Name" />
            </div>

            <div className="farmer-input">
              <div className="holderid">
                <p>Contact number</p>
              </div>
              <input type="Contact No" name="Phoneno" />
            </div>

            <div className="farmer-input">
              <div className="holderid">
                <p>Email Id</p>
              </div>
              <input type="email" name="Email" />
            </div>

            <div className="farmer-input">
              <div className="holderid">
                <p>Password</p>
              </div>
              <input type="password" name="Password" />
            </div>
          </div>

          <div className="farmer-submit-container">
            <div className="farmer-submit">
              <button type="submit" name="Register">
                Cancel
              </button>
            </div>
            <div className="farmer-submit">
              <button type="button" name="Login">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFarmer;
