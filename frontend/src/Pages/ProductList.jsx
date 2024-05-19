import React, { useEffect } from "react";
import "../styles/Productlist.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductList() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const jsonResponse = await fetch(
          process.env.REACT_APP_BACKEND_URL + "/api/products"
        );
        const response = await jsonResponse.json();
        if (response?.data) {
          setProducts(response.data);
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
  console.log("products: ", products);

  return (
    <div className="list-container">
      <h2>Product Listings</h2>
      <div className="tableC">
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
            {products &&
              products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.category}</td>
                  <td className="options">
                    <Link
                      to={`/EditProduct/${product._id}`}
                      className="link-button"
                    >
                      <button>Edit</button>
                    </Link>
                    <button>Delete</button>
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
