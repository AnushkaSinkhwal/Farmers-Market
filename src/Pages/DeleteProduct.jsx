import React from "react";
import "../styles/DeleteProduct.css";
import { Link } from "react-router-dom";
function DeleteProduct() {
  return (
    <div className="deletePg">
      <div className="delete-container">
        <div className="delete-inputs">
          <div className="del-input">
            <label htmlFor="productName"> Product Name</label>
            <select id="Name" name="name">
              <option value="nameDropdown">Drop Down</option>
            </select>
            <select id="category" name="category">
              <option value="vegetable">Vegetable</option>
              <option value="fruit">Fruit</option>
              <option value="dairy">Dairy</option>
            </select>
          </div>
        </div>
        <div className="del-button">
          <div className="del-sub">
            <Link to="/FarmerDashbord">
              <button type="button">Cancel</button>
            </Link>
          </div>
          <div className="del-sub">
            <button type="submit">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
