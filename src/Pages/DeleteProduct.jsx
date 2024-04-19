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
          </div>
        </div>
        <div className="del-button">
          <div className="del-sub">
            <Link to="/FarmerDashbord">
              <button type="button">Cancel</button>
            </Link>
          </div>
          <div className="del-sub">
            <button type="button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
