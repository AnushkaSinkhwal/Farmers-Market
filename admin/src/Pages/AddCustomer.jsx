import React, { useState } from "react";
import "../Style/AddCustomer.css";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function AddCustomer() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
  };

  const handleCancel = () => {
    // Add logic to handle cancel action
  };

  return (
    <div className="Container">
      <div className="form-container">
        <div className="header">
          <div className="text">Add Customer</div>
          <div className="underline"></div>
        </div>

        <form className="customerRegister-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <div className="inputid">
                <p>First Name:</p>
              </div>
              <input type="text" name="FirstName" />
            </div>

            <div className="input">
              <div className="inputid">
                <p>Phone No:</p>
              </div>
              <input type="Contact No" name="Phoneno" />
            </div>

            <div className="input">
              <div className="inputid">
                <p>Address:</p>
              </div>

              <input type="Address" name="Address" />
            </div>

            <div className="input">
              <div className="inputid">
                <p>Email:</p>
              </div>

              <input type="email" name="Email" />
            </div>

            <div className="input">
              <div className="inputid">
                <p>Password:</p>
              </div>

              <input type="password" name="Password" />
            </div>
          </div>

          <div className="submit-container">
            <div className="submit">
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <div className="submit">
              <button type="submit" name="Edit">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;
