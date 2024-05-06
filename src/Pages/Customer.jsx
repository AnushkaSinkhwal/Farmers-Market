import { Link } from "react-router-dom";
import React from "react";
import cabbage from "../assets/cabbage2.jpg";
import strawberry from "../assets/strawberry.jpg";
import cheese from "../assets/cheese.jpg";
import "../styles/Home.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import Box from "@mui/material/Box";

function ProductCard({ imgSrc, title, price, description }) {
  return (
    <div className="card">
      <Link to="/ProductDetailedView">
        <Box component="img" src={imgSrc} alt={title} className="productimg" />
        <h1>{title}</h1>
        <p className="price">{price}</p>
        <p>{description}</p>
        <Link to="/cart">
          <button>
            Add to Cart <FavoriteBorderIcon />
          </button>
        </Link>
      </Link>
    </div>
  );
}

function Customer() {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    // Perform search functionality with searchValue
    console.log("Searching for:", searchValue);

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

  return (
    <div>
      <div className="home-container">
        {/* The search*/}
        <div className="Search-container">
          <h1>Order Now!</h1>
          <div className="searchNbtn">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Enter product name"
                name="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyPress}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        {/* Pop-up card */}
        {isSearching && (
          <div className="searching-popup-card">
            <div className="popup-content">
              <p>We are searching...</p>
            </div>
          </div>
        )}

        {/* Vegetable */}
        <div className="vegetable-container">
          <div className="product-category">
            <h1>Vegetable</h1>
            <h1>
              <Link to="/vegetable" className="view-all-link">
                View all
              </Link>
            </h1>
          </div>
          <div className="separator"></div>
          <div className="product-card">
            <Box sx={{ display: "flex", gap: "40px" }}>
              <ProductCard
                imgSrc={cabbage}
                title="Fresh Cabbage"
                price="Rs.249"
                description="Enjoy the crisp and refreshing taste of our cabbage, packed with nutrients and versatile enough for salads, stir-fries, and more"
              />
              <ProductCard
                imgSrc={cabbage}
                title="Fresh Cabbage"
                price="Rs.249"
                description="Enjoy the crisp and refreshing taste of our cabbage, packed with nutrients and versatile enough for salads, stir-fries, and more"
              />
              <ProductCard
                imgSrc={cabbage}
                title="Fresh Cabbage"
                price="Rs.249"
                description="Enjoy the crisp and refreshing taste of our cabbage, packed with nutrients and versatile enough for salads, stir-fries, and more"
              />
              <ProductCard
                imgSrc={cabbage}
                title="Fresh Cabbage"
                price="Rs.249"
                description="Enjoy the crisp and refreshing taste of our cabbage, packed with nutrients and versatile enough for salads, stir-fries, and more"
              />
            </Box>
          </div>
        </div>

        {/* Fruits */}
        <div className="fruit-container">
          <div className="product-category">
            <h1>Fruit</h1>
            <h1>
              <Link to="/vegetable" className="view-all-link">
                View all
              </Link>
            </h1>
          </div>
          <div className="separator"></div>
          <div className="product-card">
            <Box sx={{ display: "flex", gap: "40px" }}>
              <ProductCard
                imgSrc={strawberry}
                title="Strawberry"
                price="Rs. 800"
                description="Experience the sweetness of freshly picked strawberries with our succulent and juicy strawberry, perfect for adding a burst of flavor to your favorite desserts and snacks"
              />
              <ProductCard
                imgSrc={strawberry}
                title="Strawberry"
                price="Rs. 800"
                description="Experience the sweetness of freshly picked strawberries with our succulent and juicy strawberry, perfect for adding a burst of flavor to your favorite desserts and snacks"
              />
              <ProductCard
                imgSrc={strawberry}
                title="Strawberry"
                price="Rs. 800"
                description="Experience the sweetness of freshly picked strawberries with our succulent and juicy strawberry, perfect for adding a burst of flavor to your favorite desserts and snacks"
              />
              <ProductCard
                imgSrc={strawberry}
                title="Strawberry"
                price="Rs. 800"
                description="Experience the sweetness of freshly picked strawberries with our succulent and juicy strawberry, perfect for adding a burst of flavor to your favorite desserts and snacks"
              />
            </Box>
          </div>
        </div>

        {/* Dairy */}
        <div className="dairy-container">
          <div className="product-category">
            <h1>Dairy</h1>
            <h1>
              <Link to="/vegetable" className="view-all-link">
                View all
              </Link>
            </h1>
          </div>
          <div className="separator"></div>
          <div className="product-card">
            <Box sx={{ display: "flex", gap: "40px" }}>
              <ProductCard
                imgSrc={cheese}
                title="Cheddar Cheese"
                price="$19.99"
                description="Indulge in the rich and creamy flavor of our cheddar cheese, crafted with the finest ingredients for a delightful culinary experience"
              />
              <ProductCard
                imgSrc={cheese}
                title="Cheddar Cheese"
                price="Rs. 650"
                description="Indulge in the rich and creamy flavor of our cheddar cheese, crafted with the finest ingredients for a delightful culinary experience"
              />
              <ProductCard
                imgSrc={cheese}
                title="Cheddar Cheese"
                price="Rs. 650"
                description="Indulge in the rich and creamy flavor of our cheddar cheese, crafted with the finest ingredients for a delightful culinary experience"
              />
              <ProductCard
                imgSrc={cheese}
                title="Cheddar Cheese"
                price="Rs. 650"
                description="Indulge in the rich and creamy flavor of our cheddar cheese, crafted with the finest ingredients for a delightful culinary experience"
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
