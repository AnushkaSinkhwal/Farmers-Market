import React from "react";
import "../styles/AddProduct.css";
import { Link } from "react-router-dom";

function AddProduct() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="add-container">
      <div className="add-form-container">
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="add-input-form">
            {/* Product Name */}
            <div className="input-group">
              <label htmlFor="productName">Product Name:</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  placeholder="Enter product name"
                />
                <select id="category" name="category">
                  <option value="vegetable">Vegetable</option>
                  <option value="fruit">Fruit</option>
                  <option value="dairy">Dairy</option>
                </select>
              </div>
            </div>

            {/* product price */}
            <div className="input-group">
              <label htmlFor="productPrice">Product Price:</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  id="productPrice"
                  name="productPrice"
                  placeholder="Enter product price"
                />
                <select id="unit" name="unit">
                  <option value="kg">Per Kg</option>
                  <option value="item">Per item</option>
                  <option value="liter">Per liter</option>
                </select>
              </div>
            </div>

            {/* Product Image */}
            <div className="input-group">
              <label htmlFor="productImage">Product Image:</label>
              <div className="input-wrapper">
                <input
                  type="url"
                  id="productImage"
                  name="productImage"
                  placeholder="Enter product image URL"
                />
              </div>
            </div>

            {/* Product Quantity */}
            <div className="input-group">
              <label htmlFor="productQuantity">Product Quantity:</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  id="productQuantity"
                  name="productQuantity"
                  placeholder="Enter product quantity"
                />
              </div>
            </div>

            {/* Product Description */}
            <div className="input-group">
              <textarea
                id="productDescription"
                name="productDescription"
                placeholder="Enter product description"
              ></textarea>
            </div>
          </div>

          {/* Form Buttons */}
          <div className="form-buttons">
            <Link to="/FarmerDashbord">
              <button type="button">Cancel</button>
            </Link>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
