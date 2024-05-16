import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/SideNavbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Sidenavbar() {
  const [customerDropdownVisible, setCustomerDropdownVisible] = useState(false);
  const [farmerDropdownVisible, setFarmerDropdownVisible] = useState(false);

  const toggleCustomerDropdown = () => {
    setCustomerDropdownVisible(!customerDropdownVisible);
  };

  const toggleFarmerDropdown = () => {
    setFarmerDropdownVisible(!farmerDropdownVisible);
  };

  return (
    <div className="sidnav-container">
      <Link to="/" className="dashboard-link">
        Dashboard
      </Link>

      <button className="CustomerBtn" onClick={toggleCustomerDropdown}>
        Customer <ArrowDropDownIcon />
      </button>
      <div
        className={
          customerDropdownVisible
            ? "customerDropdown active"
            : "customerDropdown"
        }
      >
        <Link to="/CustomerList">Customer List</Link>
        <Link to="/AddCustomer">Add Customer</Link>
        <Link to="/EditCustomer">Edit Customer</Link>
        <Link to="/CustomerOrder">Customer Order</Link>
      </div>

      <button className="FarmersBtn" onClick={toggleFarmerDropdown}>
        Farmers <ArrowDropDownIcon />
      </button>
      <div
        className={
          farmerDropdownVisible ? "FarmerDropdown active" : "FarmerDropdown"
        }
      >
        <Link to="/FarmerList">Farmer List</Link>
        <Link to="/AddFarmer">Add Farmer</Link>
        <Link to="/EditFarmer">Edit Farmer</Link>
      </div>
    </div>
  );
}

export default Sidenavbar;
