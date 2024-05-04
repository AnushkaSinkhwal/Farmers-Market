import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/CustomerList">Customer List</Link>
      <Link to="/AddCustomer">Add Customer</Link>
      <Link to="/EditCustomer">Edit Customer</Link>
      <Link to="/CustomerOrder">Order</Link>
      <Link to="/FarmerList">Farmer List</Link>
      <Link to="/AddFarmer">Add Farmer</Link>
      <Link to="/EditFarmer">Edit Farmer</Link>
    </div>
  );
}

export default Navbar;
