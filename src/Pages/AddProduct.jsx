import React, { useState, useEffect } from 'react';
import "../styles/AddProduct.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

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

  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Reset form data on successful submission
        setFormData({
          productName: "",
          category: "",
          productPrice: "",
          unit: "",
          productImage: "",
          productQuantity: "",
          productDescription: "",
        });
        console.log("Product added successfully!");
        fetchProducts();
      } else {
        console.error("Failed to add product.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data.data);
      } else {
        console.error("Failed to fetch products.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Fetch initial list of products when component mounts
    fetchProducts();
  }, []);

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
                  onChange={handleInputChange}
                  value={formData.productName}
                />
                <select id="category" name="category" 
                  onChange={handleInputChange}
                  value={formData.category} >
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
                  onChange={handleInputChange}
                  value={formData.productImage}
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
                  onChange={handleInputChange}
                  value={formData.productQuantity}
                />
              </div>
            </div>

            {/* Product Description */}
            <div className="input-group">
              <textarea
                id="productDescription"
                name="productDescription"
                placeholder="Enter product description"
                onChange={handleInputChange}
                value={formData.productDescription}
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
