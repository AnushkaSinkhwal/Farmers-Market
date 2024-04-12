import React from "react";
import "../styles/EditProduct.css";
function EditProduct() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="Edit-container">
      <div className="Edit-form-container">
        <form className="Edit-form" onSubmit={handleSubmit}>
          <div className="Edit-input-form">
            <div className="NameCategory">
              <label htmlFor="productName">Product Name</label>
              <select id="category" name="category">
                <option value="Product Name">Product Name</option>
              </select>

              <select id="category" name="category">
                <option value="vegetable">Vegetable</option>
                <option value="fruit">Fruit</option>
                <option value="dairy">Dairy</option>
              </select>
            </div>
            <div>
              <label htmlFor="NewName">New Name</label>
              <input
                type="text"
                id="NewName"
                name="NewName"
                placeholder="New Product Name"
              ></input>
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
            <div className="description">
              <textarea
                id="productDescription"
                name="productDescription"
                placeholder="Product Description"
              ></textarea>
            </div>
          </div>
          <div className="form-buttons">
            <div className="Edit-submit">
              <button type="submit" name="cancle">
                Cancle
              </button>
            </div>

            <div className="Edit-submit">
              <button type="submit" name="add">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
