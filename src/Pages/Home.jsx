import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/productSlice";
import ProductCard from "../Components/productCards"; 

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products); // Initialize products with useSelector

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        if (response.status === 200) {
          dispatch(addProducts(response.data.data));
          setLoading(false); // Set loading to false after fetching data
        } else {
          setError("Failed to fetch products.");
          setLoading(false); // Set loading to false in case of error
        }
      } catch (error) {
        setError("Error fetching products.");
        setLoading(false); // Set loading to false in case of error
      }
    };
  
    fetchProducts();
  }, [dispatch]);

  console.log("Products:", products);
  console.log("Loading:", loading);
  console.log("Error:", error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const addToCart = (product) => {
    setAddedToCart(true); // Set state to show cart message
    setTimeout(() => {
      setAddedToCart(false); // Reset state after a delay
    }, 2000);
  };

  return (
    <div>
      <div className="home-container">
         {addedToCart && ( // Show message when added to cart
          <div className="added-to-cart-message">
            Added to cart successfully!
          </div>
        )}
  
        <div>
          {/* Vegetable */}
          <div className="vegetable-container">
            <div className="product-category">
              <h1>Vegetable</h1>
              <h1>
                <Link to="/ViewVegetables" className="view-all-link">
                  View all
                </Link>
              </h1>
            </div>
            <div className="separator"></div>
            <div className="product-card">
            <Box sx={{ display: "flex", gap: "40px" }}>
              {products.filter((product) => product.category === "vegetable").map((vegetable) => (
                <ProductCard
                  key={vegetable._id} // Assuming _id is the unique identifier for each product
                  data={vegetable}
                  onAddToCart={addToCart} // Pass addToCart function to ProductCard
                />
              ))}
            </Box>
            </div>
          </div>
  
          {/* Fruit */}
          <div className="fruit-container">
            <div className="product-category">
              <h1>Fruit</h1>
              <h1>
                <Link to="/ViewFruits" className="view-all-link">
                  View all
                </Link>
              </h1>
            </div>
            <div className="separator"></div>
            <div className="product-card">
            <Box sx={{ display: "flex", gap: "40px" }}>
              {products.filter((product) => product.category === "fruits").map((fruits) => (
                <ProductCard
                  key={fruits._id} // Assuming _id is the unique identifier for each product
                  data={fruits}
                  onAddToCart={addToCart} // Pass addToCart function to ProductCard
                />
              ))}
            </Box>
            </div>
          </div>
  
          {/* Dairy */}
          <div className="dairy-container">
            <div className="product-category">
              <h1>Dairy</h1>
              <h1>
                <Link to="/ViewDairy" className="view-all-link">
                  View all
                </Link>
              </h1>
            </div>
            <div className="separator"></div>
            <div className="product-card">
            <Box sx={{ display: "flex", gap: "40px" }}>
              {products.filter((product) => product.category === "dairy").map((dairy) => (
                <ProductCard
                  key={dairy._id} // Assuming _id is the unique identifier for each product
                  data={dairy}
                  onAddToCart={addToCart} // Pass addToCart function to ProductCard
                />
              ))}
            </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  

export default Home;
