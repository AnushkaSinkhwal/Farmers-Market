import React, { useState, useEffect } from "react";
import "../styles/EditProduct.css";
import { Link } from "react-router-dom";
import axios from "axios";

function EditProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    productPrice: "",
    unit: "",
    productImage: "",
    productQuantity: "",
    productDescription: "",
  });
  const [productNames, setProductNames] = useState([]);

  useEffect(() => {
    // Fetch product names from the backend API
    const fetchProductName = async () => {
      try { const response = await axios.get("/api/productName");
        setProductNames(response.data.productName);
      } catch (error) {
        console.error('Error fetching product names:', error);
      }
    };
    fetchProductName();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/products/update', formData);

      if (response.status === 200) {
        console.log('Product updated successfully');
        setFormData({
          productName: "",
          category: "",
          productPrice: "",
          unit: "",
          productImage: "",
          productQuantity: "",
          productDescription: "",
        });
    } else {
      console.error('Error updating product:');
    }
    }catch (error){
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  

  return (
    <div className="edit-container">
      <div className="edit-form-container">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="edit-input-form">
            {/* Product Name */}
            <div className="edit-input-group">
              <label htmlFor="productName">Product Name:</label>
              <select id="productName" name="productName" onChange={handleInputChange} value={formData.productName}>
              <option value="">--Select--</option>
                {productNames.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>

              <select id="category" name="category"
              onChange={handleInputChange}
              value={formData.category} >
              <option value="Select">--Select--</option>
                <option value="vegetable">Vegetable</option>
                <option value="fruit">Fruit</option>
                <option value="dairy">Dairy</option>
              </select>
            </div>

            {/* Product Price */}
            <div className="edit-input-group">
              <label htmlFor="productPrice">Product Price:</label>
              <div className="input-wrapper"></div>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                placeholder="Product Price"
                onChange={handleInputChange}
                value={formData.productPrice}
              />
              <select id="unit" name="unit"
                onChange={handleInputChange}
                value={formData.unit}>
              <option value="categoryOption">--Select--</option>
                <option value="kg">Per Kg</option>
                <option value="item">Per item</option>
                <option value="liter">Per liter</option>
              </select>
            </div>

            {/* Product Image */}
            <div className="edit-input-group">
              <label htmlFor="productImage">Product Image:</label>
              <div className="input-wrapper">
              <input
                type="url"
                id="productImage"
                name="productImage"
                placeholder="Product Image URL"
                onChange={handleInputChange}
                value={formData.productImage}
              />
            </div>
            </div>

            {/* Product Quantity */}
            <div className="edit-input-group">
              <label htmlFor="productQuantity">Product Quantity:</label>
              <div className="input-wrapper">
              <input
                type="number"
                id="productQuantity"
                name="productQuantity"
                placeholder="Product Quantity"
                onChange={handleInputChange}
                value={formData.productQuantity}
              />
            </div>
            </div>

            {/* Product Description */}
            <div className="edit-input-group">
              <textarea
                id="productDescription"
                name="productDescription"
                placeholder="Product Description"
                onChange={handleInputChange}
                value={formData.productDescription}
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
