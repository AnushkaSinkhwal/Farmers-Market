import React, { useState, useEffect } from 'react';
import "../styles/DeleteProduct.css";
import { Link } from "react-router-dom";


function DeleteProduct() {
  const [productNames, setProductNames] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    // Fetch product names from the backend API
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
    fetchProductNames();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/products/${selectedProduct}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log(`Product ${selectedProduct} deleted successfully`);
        // Refresh product names after deletion
        setProductNames(productNames.filter(name => name !== selectedProduct));
        setSelectedProduct('');
      } else {
        console.error(`Failed to delete product ${selectedProduct}`);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <div className="deletePg">
      <div className="delete-container">
        <div className="delete-inputs">
          <div className="del-input">
            <label htmlFor="productName"> Product Name</label>
            <select id="Name" name="name"
            onChange={handleSelectChange} 
            value={selectedProduct}>
              <option value="nameDropdown">Drop Down</option>
            </select>
            <select id="category" name="category">
              <option value="categoryOption">--Select--</option>
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
            <button type="submit" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
