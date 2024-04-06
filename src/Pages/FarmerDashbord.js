import { Category } from "@mui/icons-material";
import React from "react";
import "../styles/FarmerDashbord.css";
import prdImg from "../assets/Cabbage.jpg";
function FarmerDashbord() {
  return (
    <div className="dashbord-container">
      <div className="categories">
        <h1>Category</h1>
        <h2>Vegetable</h2>
        <h2>Fruits</h2>
        <h2>Dairy</h2>
      </div>

      <div className="product-listings">
        <ima src={prdImg} />
      </div>
    </div>
  );
}

export default FarmerDashbord;
