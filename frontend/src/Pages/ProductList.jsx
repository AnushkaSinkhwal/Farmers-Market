import React, { useEffect, useState } from "react";
import "../styles/Productlist.css";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (response.ok) {
          const json = await response.json();
          setProducts(Array.isArray(json) ? json : []);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/deleteProduct/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      setError(error.message);
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="list-container">
      <h2>Product Listings</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.category}</td>
                  <td className="options">
                    <Link to={`/EditProduct/${product._id}`} className="link-button">
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => deleteProduct(product._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              !isLoading && <tr><td colSpan="4">No products found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
