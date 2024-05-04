import React, { useState } from 'react';
import "../styles/AddProduct.css";
import { Link } from "react-router-dom";

function AddProduct() { 
  const [formData, setFormData] = useState({
  productName: "",
  category: "",
  productPrice: "",
  unit: "",
  productImage: "",
  productQuantity: "",
  productDescription: "",
});

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const formDataObject = {
      productName: formData.productName,
      category: formData.category,
      productPrice: parseFloat(formData.productPrice),
      unit: formData.unit,
      productImage: formData.productImage,
      productQuantity: parseInt(formData.productQuantity),
      productDescription: formData.productDescription,
    };

    const response = await fetch("http://localhost:8000/api/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.error("Page not found.");
      } else {
        console.error("Failed to add product. Status:", response.status);
      }
      return;
    }

    setFormData({
      productName: "",
      category: "Select",
      productPrice: "",
      unit: "categoryOption",
      productImage: "",
      productQuantity: "",
      productDescription: "",
    });

    console.log("Product added successfully!");
  } catch (error) {
    console.error("Network error:", error);
  }
};

const handleInputChange = (event) => {
  const { name, value } = event.target;
  if (name === 'category' || name === 'unit') {
    setFormData({ ...formData, [name]: value === 'Select' || value === 'categoryOption' ? '' : value });
  } else {
    setFormData({ ...formData, [name]: value });
  }
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
                  <option value="Select">--Select--</option>
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
                  <option value="categoryOption">--Select--</option>
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