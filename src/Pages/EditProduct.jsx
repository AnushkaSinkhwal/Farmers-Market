import React from "react";
import "../styles/EditProduct.css";
import { Link } from "react-router-dom";

function EditProduct() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="edit-container">
      <div className="edit-form-container">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="edit-input-form">
            {/* Product Name */}
            <div className="edit-input-group">
              <label htmlFor="productName">Product Name:</label>
              <select id="category" name="category">
                <option value="Product Name">Product Name</option>
              </select>
            </div>

            {/* New Name */}
            <div className="edit-input-group">
              <label htmlFor="newName">New Name:</label>
              <input
                type="text"
                id="newName"
                name="newName"
                placeholder="New Product Name"
              />
            </div>

            {/* Product Price */}
            <div className="edit-input-group">
              <label htmlFor="productPrice">Product Price:</label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                placeholder="Product Price"
              />
              <select id="unit" name="unit">
                <option value="kg">Per Kg</option>
                <option value="item">Per item</option>
                <option value="liter">Per liter</option>
              </select>
            </div>

            {/* Product Image */}
            <div className="edit-input-group">
              <label htmlFor="productImage">Product Image:</label>
              <input
                type="url"
                id="productImage"
                name="productImage"
                placeholder="Product Image URL"
              />
            </div>

            {/* Product Quantity */}
            <div className="edit-input-group">
              <label htmlFor="productQuantity">Product Quantity:</label>
              <input
                type="number"
                id="productQuantity"
                name="productQuantity"
                placeholder="Product Quantity"
              />
            </div>

            {/* Product Description */}
            <div className="edit-input-group">
              <textarea
                id="productDescription"
                name="productDescription"
                placeholder="Product Description"
              ></textarea>
            </div>
          </div>

          {/* Form Buttons */}
          <div className="edit-form-buttons">
            <div className="edit-submit">
              <Link to="/FarmerDashbord">
                <button type="button">Cancel</button>
              </Link>
            </div>
            <div className="edit-submit">
              <button type="submit">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
