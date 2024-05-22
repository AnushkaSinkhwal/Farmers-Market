import React, { useState, useEffect } from "react";
import "../styles/EditProduct.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function EditProduct(props) {
  const { id } = useParams();
  const navigation = useNavigate();
  const [product, setProduct] = useState({
    _id: "",
    productName: "",
    category: "",
    productPrice: "",
    unit: "",
    productImage: "",
    productQuantity: "",
    productDescription: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  //get product by id
  useEffect(() => {
    // Fetch product by id
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + `/api/products/${id}`
        );
        const data = await response.json();
        setProduct(data.data); // Set the initial state with the received data
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  // handle update
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + `/api/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      console.log("response: ", response);
      if (response.ok) {
        navigation("/ProductList");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="edit-container">
      <div className="edit-form-container">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="edit-input-form">
            {/* Product Name */}
            <div className="edit-input-group">
              <label htmlFor="name">Product Name:</label>
              <input
                type="text"
                id="name"
                name="productName"
                placeholder="Product Name"
                value={product.productName}
                onChange={handleChange}
              />
            </div>

            {/* Product Price */}
            <div className="edit-input-group">
              <label htmlFor="productPrice">Product Price:</label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                placeholder="Product Price"
                value={product.productPrice}
                onChange={handleChange}
              />
              <select
                id="unit"
                name="unit"
                value={product.unit}
                onChange={handleChange}
              >
                <option value="categoryOption">--Select--</option>
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
                placeholder="Product Image URL"
                value={product.productImage}
                onChange={handleChange}
              />
            </div>

            {/* Product Quantity */}
            <div className="edit-input-group">
              <label htmlFor="productQuantity">Product Quantity:</label>
              <input
                type="number"
                id="productQuantity"
                name="productQuantity"
                placeholder="Product Quantity"
                value={product.productQuantity}
                onChange={handleChange}
              />
            </div>

            {/* Product Description */}
            <div className="edit-input-group">
              <textarea
                id="productDescription"
                name="productDescription"
                placeholder="Product Description"
                value={product.productDescription}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Form Buttons */}
          <div className="edit-form-buttons">
            <div className="edit-submit">
              <Link to="/ProductList">
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
