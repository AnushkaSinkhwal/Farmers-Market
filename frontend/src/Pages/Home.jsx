import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/productSlice";
import ProductCard from "../Components/productCard";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { vegetables, fruits, dairy } = products;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const jsonResponse = await fetch("http://localhost:8000/api/products");
        const response = await jsonResponse.json();
        if (response?.data) {
          dispatch(addProducts(response.data));
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
  }, [dispatch]);

  const handleSearch = () => {
    setIsSearching(true);
    // Perform search functionality with searchValue

    // search for the text in the product name or description
    const searchResults = products.filter(
      (product) =>
        product.productName.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.productDescription
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    );

    setProducts(searchResults); // Update the products with the search results

    // Reset the search value
    setSearchValue("");

    setTimeout(() => {
      setIsSearching(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  const addToCart = (product) => {
    setAddedToCart(true); // Set state to show cart message
    setTimeout(() => {
      setAddedToCart(false); // Reset state after a delay
    }, 2000);
  };

  const filterProductsByCategory = (category) => {
    return products
      .filter((product) => product.category === category)
      .slice(0, 4);
  };

  return (
    <div>
      <div className="home-container">
        {addedToCart && ( // Show message when added to cart
          <div className="added-to-cart-message">
            Added to cart successfully!
          </div>
        )}

        {/* Pop-up card */}
        {isSearching && (
          <div className="searching-popup-card">
            <div className="popup-content">
              <p>We are searching...</p>
            </div>
          </div>
        )}

        <div>
          {/* Vegetable */}
          <div className="vegetable-container">
            <div className="product-category">
              <h1>Vegetable</h1>
              <h1>
                <Link to="/viewall/vegetable" className="view-all-link">
                  View all
                </Link>
              </h1>
            </div>
            <div className="separator"></div>
            <div className="product-card">
              <Box sx={{ display: "flex", gap: "40px" }}>
                {filterProductsByCategory("vegetable").map((vegetable) => (
                  <ProductCard
                    key={vegetable.id}
                    data={vegetable}
                    onAddToCart={addToCart}
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
                <Link to="/viewall/fruit" className="view-all-link">
                  View all
                </Link>
              </h1>
            </div>
            <div className="separator"></div>
            <div className="product-card">
              <Box sx={{ display: "flex", gap: "40px" }}>
                {filterProductsByCategory("fruit").map((fruit) => (
                  <ProductCard
                    key={fruit.id}
                    data={fruit}
                    onAddToCart={addToCart}
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
                <Link to="/viewall/dairy" className="view-all-link">
                  View all
                </Link>
              </h1>
            </div>
            <div className="separator"></div>
            <div className="product-card">
              <Box sx={{ display: "flex", gap: "40px" }}>
                {filterProductsByCategory("dairy").map((dairy) => (
                  <ProductCard
                    key={dairy.id}
                    data={dairy}
                    onAddToCart={addToCart}
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
