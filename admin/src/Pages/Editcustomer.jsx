import React from "react";
import "../Style/AddCustomer.css";

function Editcustomer() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCancel = () => {};

  return (
    <div className="Container">
      <div className="form-container">
        <div className="header">
          <div className="text">Edit Customer Information</div>
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
                Edit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Editcustomer;
