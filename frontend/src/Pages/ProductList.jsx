import React from "react";
import "../styles/Productlist.css";

import { Link } from "react-router-dom";

function ProductList() {
  const product = [
    { id: 1, name: "apple", category: "Fruit" },
    { id: 2, name: "cabbage", category: "vegetable" },
    { id: 3, name: "cheese", category: "dairy" },
  ];

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
            {product.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td className="options">
                  <Link to="/EditProduct" className="link-button">
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
