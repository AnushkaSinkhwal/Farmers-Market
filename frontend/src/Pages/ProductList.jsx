import React, { useEffect } from "react";
import "../styles/Productlist.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductList() {
  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "/api/products"
        );
        if (response.ok) {
          const json = await response.json();
          setProducts(json);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  console.log("products: ", products);

  //delete product
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + `/api/products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setProducts(products.filter((product) => product._id !== id));
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
                    <button onClick={() => handleDelete(product._id)}>
                      Delete
                    </button>
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
