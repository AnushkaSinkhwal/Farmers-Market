import React from "react";
import "../styles/DeleteProduct.css";

function DeleteProduct() {
  return (
    <div className="deletePg">
      <div className="delete-container">
        {/* Product Selection */}
        <div className="delete-inputs">
          <div className="del-input">
            <label htmlFor="productName">Product Name:</label>
            <select id="Name" name="name">
              <option value="nameDropdown">Drop Down</option>
              {/* Add options dynamically here if needed */}
            </select>
          </div>
        </div>

        {/* Delete Buttons */}
        <div className="del-button">
          <div className="del-sub">
            <button type="button">Cancel</button>
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
