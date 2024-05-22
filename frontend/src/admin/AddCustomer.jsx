import React, { useState } from "react";
import "../styles/AddCustomer.css";
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
    <div className="Container-admin">
      <div className="form-container-admin">
        <div className="header-admin">
          <div className="text-admin">Add Customer</div>
          <div className="underline-admin"></div>
        </div>

        <form className="customerRegister-form-admin" onSubmit={handleSubmit}>
          <div className="inputs-admin">
            <div className="input-admin">
              <div className="inputid-admin">
                <p>First Name:</p>
              </div>
              <input type="text" name="FirstName" />
            </div>

            <div className="input-admin">
              <div className="inputid-admin">
                <p>Phone No:</p>
              </div>
              <input type="Contact No" name="Phoneno" />
            </div>

            <div className="input-admin">
              <div className="inputid-admin">
                <p>Address:</p>
              </div>

              <input type="Address" name="Address" />
            </div>

            <div className="input-admin">
              <div className="inputid-admin">
                <p>Email:</p>
              </div>

              <input type="email" name="Email" />
            </div>

            <div className="input-admin">
              <div className="inputid-admin">
                <p>Password:</p>
              </div>

              <input type="password" name="Password" />
            </div>
          </div>

          <div className="submit-container-admin">
            <div className="submit-admin">
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <div className="submit-admin">
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
