import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import Search from "../Components/Search";
import "../styles/ViewAllcategory.css";
import ProductCard from "../Components/productCards";
import { addToCart as addToCartAction } from "../store/cartSlice";

function ViewDairy() {
  const dairy = useSelector((state) => state.product.products.dairy);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const [error, setError] = useState(null);
  const [ products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/dairy");
        if (response.status === 200) {
          setProducts(response.data.data);
        } else {
          setError("Failed to fetch dairy products.");
        }
      } catch (error) {
        setError("Error fetching dairy products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    dispatch(addToCartAction(product));
    setAddedToCart(true); 
    setTimeout(() => {
      setAddedToCart(false); 
      navigate(`/cart/${product._id}`);
    }, 2000);
    console.log(product)      
  };

  const filterProductsByCategory = (category) => {
    return products.filter((product) => product.category === dairy);
  };

  return (
    <div className="view-all-container">
      <h1>All Dairy Products</h1>
      <div className="seperator" />
      <Search />
      <div className="product-grid">
       <div className="product-card">
              {filterProductsByCategory("Dairy").map((Dairy) => (
                <ProductCard
                key={dairy._id}
                data={{
                  _id: dairy._id,
                  productName: dairy.productName,
                  category: dairy.category,
                  productPrice: dairy.productPrice,
                  unit: dairy.unit,
                  productImage: dairy.productImage,
                  productQuantity: dairy.productQuantity,
                  productDescription: dairy.productDescription
                }}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
      </div>
    </div>
  );
}

export default ViewDairy;