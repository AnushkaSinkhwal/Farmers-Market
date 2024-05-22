import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/AddFarmer.css";

function EditFarmer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [farmer, setFarmer] = useState({
    fname: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchFarmer = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/farmers/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setFarmer(data);
        } else {
          throw new Error("Failed to fetch farmer");
        }
      } catch (error) {
        console.error("Error fetching farmer:", error);
      }
    };
    fetchFarmer();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFarmer((prevFarmer) => ({
      ...prevFarmer,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/farmers/updatefarmer/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(farmer),
        }
      );
      if (response.ok) {
        // Handle success
        navigate("/FarmerList");
      } else {
        throw new Error("Failed to update farmer");
      }
    } catch (error) {
      console.error("Error updating farmer:", error);
    }
  };

  const handleCancel = () => {
    navigate("/FarmerList");
  };

  return (
    <div className="farmer-container">
      <div className="farmer-form-container">
        <div className="farmer-header">
          <div className="farmer-text">Edit Farmer's Information</div>
          <div className="farmer-underline"></div>
        </div>
        <form className="farmerRegister-form" onSubmit={handleSubmit}>
          <div className="farmer-inputs">
            <div className="farmer-input">
              <div className="holderid">
                <p>Company/Full Name</p>
              </div>
              <input
                type="text"
                name="fname"
                value={farmer.fname}
                onChange={handleChange}
              />
            </div>

            <div className="farmer-input">
              <div className="holderid">
                <p>Contact number</p>
              </div>
              <input
                type="text"
                name="phoneNumber"
                value={farmer.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="farmer-input">
              <div className="holderid">
                <p>Email Id</p>
              </div>
              <input
                type="email"
                name="email"
                value={farmer.email}
                onChange={handleChange}
              />
            </div>

            <div className="farmer-input">
              <div className="holderid">
                <p>Password</p>
              </div>
              <input
                type="password"
                name="password"
                value={farmer.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="farmer-submit-container">
            <div className="farmer-submit">
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <div className="farmer-submit">
              <button type="submit" name="Update">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditFarmer;
