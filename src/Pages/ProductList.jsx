import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/Productlist.css";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        if (response.status === 200) {
          const simplifiedProducts = response.data.data.map(product => ({
            _id: product._id,
            productName: product.productName,
            category: product.category
          }));
          setProducts(simplifiedProducts);
        } else {
          setError("Failed to fetch products.");
        }
      } catch (error) {
        setError("Error fetching products.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/products/${_id}`);
      if (response.status === 200) {
        // Remove the deleted product from the products list
        setProducts(products.filter(product => product._id !== _id));
        console.log("Product deleted successfully");
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  

  return (
    <div className="list-container">
      <h2>Product Listings</h2>
      <div className="tableC">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product._id}</td>
                <td>{product.productName}</td>
                <td>{product.category}</td>
                <td className="options">
                  <Link to= "/EditProduct" className="link-button">
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;