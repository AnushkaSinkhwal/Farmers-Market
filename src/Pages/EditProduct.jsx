import React, { useState, useEffect } from "react";
import "../styles/EditProduct.css";
import { Link , useParams } from "react-router-dom";

function EditProduct() {
  const { productId } = useParams();
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    productPrice: "",
    unit: "",
    productImage: "",
    productQuantity: "",
    productDescription: "",
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch  (`http://localhost:8000/api/products/${productId}`);
        if (response.ok){
          const data =  await response.json()
          setFormData(data)
        }else{
          throw new Error('failed to fetch data')
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productId)
      });

      if (response.status === 200) {
        console.log('Product updated successfully');
        
    } else {
      console.error('Error updating product:');
    }
    }catch (error){
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  

  return (
    <div className="edit-container">
      <div className="edit-form-container">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="edit-input-form">
            {/* Product Name */}
            <div className="edit-input-group">
              <label htmlFor="productName">Product Name:</label>
              <div className="input-wrapper">
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Product Name"
                onChange={handleInputChange}
                value={formData.productName}
              />
            </div>
            </div>

            <select id="category" name="category" 
                  onChange={handleInputChange}
                  value={formData.category} >
                  <option value="Select">--Select--</option>
                  <option value="vegetable">Vegetable</option>
                  <option value="fruit">Fruit</option>
                  <option value="dairy">Dairy</option>
                </select>

            {/* product price */}
            <div className="edit-input-group">
              <label htmlFor="productPrice">Product Price:</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  name="productPrice"
                  placeholder="edit product price"
                  value={formData.productPrice}
                  onChange={handleInputChange}
                  />
              </div>
            </div>

            <select id="unit" name="unit"
                value={formData.unit}
                onChange={handleInputChange}>
                  <option value="categoryOption">--Select--</option>
                  <option value="kg">Per Kg</option>
                  <option value="item">Per item</option>
                  <option value="liter">Per liter</option>
                </select>
    
            {/* Product Image */}
            <div className="edit-input-group">
              <label htmlFor="productImage">Product Image:</label>
              <div className="input-wrapper">
                <input
                  type="url"
                  name="productImage"
                  placeholder="edit product image URL"
                  value={formData.productImage}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Product Quantity */}
            <div className="edit-input-group">
              <label htmlFor="productQuantity">Product Quantity:</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  name="productQuantity"
                  placeholder="edit product quantity"
                  value={formData.productQuantity}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Product Description */}
            <div className="edit-input-group">
            <input
                  type="text"
                  name="productDescription"
                  placeholder="edit product description"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                />
            </div>
          </div>

          {/* Form Buttons */}
          <div className="edit-form-buttons">
            <Link to="/FarmerDashbord">
             <button type="button">Cancel</button>
            </Link>
            <button type="submit">update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
