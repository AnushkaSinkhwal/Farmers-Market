import React from "react";
import "../styles/AddProduct.css";
function AddProduct() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="add-container">
      <div className="add-form-container">
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="add-input-form">
            <div className="NameCategory">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Product Name"
              />

              <select id="category" name="category">
                <option value="vegetable">Vegetable</option>
                <option value="fruit">Fruit</option>
                <option value="dairy">Dairy</option>
              </select>
            </div>
            <div className="priceContent">
              <label htmlFor="productPrice">Product Price</label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                placeholder="Product Price"
              />

              <select id="category" name="category">
                <option value="vegetable">Per Kg</option>
                <option value="fruit">per item</option>
                <option value="dairy">Per liter</option>
              </select>
            </div>

            <div>
              <label htmlFor="productImage">Product Image</label>
              <input
                type="url"
                id="productImage"
                name="productImage"
                placeholder="Product Image URL"
              />
            </div>
            <div>
              <label htmlFor="productQuantity">Product Quantity</label>
              <input
                type="number"
                id="productQuantity"
                name="productQuantity"
                placeholder="Product Quantity"
              />
            </div>
            <div className="add-description">
              <textarea
                id="productDescription"
                name="productDescription"
                placeholder="Product Description"
              ></textarea>
            </div>
          </div>
          <div className="form-buttons">
            <button type="cancle">Cancle</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
