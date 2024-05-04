import React, { useState, useEffect } from "react";
import "../styles/EditProduct.css";
import { Link } from "react-router-dom";

function EditProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    newName: "",
    productPrice: "",
    unit: "",
    productImage: "",
    productQuantity: "",
    productDescription: "",
  });
  const [productNames, setProductNames] = useState([]);

  useEffect(() => {
    fetchProductNames();
  }, []);

  
  const fetchProductNames = async () => {
    try {
      const response = await fetch("/api/products/names");
      if (!response.ok) {
        throw new Error("Failed to fetch product names");
      }
      const data = await response.json();
      setProductNames(data.productNames);
    } catch (error) {
      console.error("Error fetching product names:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/products/update/${formData.productName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      console.log('Product updated successfully');

      fetchProductNames();
    
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleChange = (event) => {
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
              <select id="productName" name="productName" onChange={handleChange} value={formData.productName}>
                <option value="">--Select--</option>
                {productNames.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
            </div>

            {/* New Name */}
            <div className="edit-input-group">
              <label htmlFor="newName">New Name:</label>
              <input
                type="text"
                id="newName"
                name="newName"
                value={formData.newName}
                onChange={handleChange}
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
                value={formData.productPrice}
                onChange={handleChange}
                placeholder="Product Price"
              />
              <select id="unit" name="unit" value={formData.unit} onChange={handleChange}>
                <option value="">--Select--</option>
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
                value={formData.productImage}
                onChange={handleChange}
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
                value={formData.productQuantity}
                onChange={handleChange}
                placeholder="Product Quantity"
              />
            </div>

            {/* Product Description */}
            <div className="edit-input-group">
              <textarea
                id="productDescription"
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
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
