import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/AddCustomer.css";

function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/users/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error("Failed to fetch user");
        }
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        // Handle success
        navigate("/CustomerList");
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleCancel = () => {
    navigate("/CustomerList");
  };

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
                <p>Username:</p>
              </div>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <div className="inputid">
                <p>Phone No:</p>
              </div>
              <input
                type="text"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <div className="inputid">
                <p>Address:</p>
              </div>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <div className="inputid">
                <p>Email:</p>
              </div>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <div className="inputid">
                <p>Password:</p>
              </div>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
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

export default EditCustomer;
