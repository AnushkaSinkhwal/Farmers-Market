import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "../styles/Home.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/productSlice";

const baseURL = "http://localhost:8000";

function ProductCard(props) {
  const handleAddToCart = () => {
    if (typeof props.onAddToCart === "function") {
      props.onAddToCart(props.data);
    } else {
      console.error("onAddToCart is not a function");
    }
  };

  return (
    <div className="card" onClick={props.data.onClick}>
      <Box
        component="img"
        src={props.data.photo_url}
        alt={props.data.name}
        className="productimg"
      />
      <h1>{props.data.name}</h1>
      <p className="price">Rs.{props.data.price}</p>
      <p className="description">{props.data.description}</p>
      <button onClick={handleAddToCart}>
        Add to Cart <FavoriteBorderIcon />
      </button>
    </div>
  );
}

function Customer() {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const products = useSelector((state) => state.product.products);
  const { vegetables, fruits, dairy } = products;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vegetablesResponse = await axios.get(`${baseURL}/api/vegetables`);
        if (vegetablesResponse.data) {
          dispatch(addProducts({ vegetables: vegetablesResponse.data }));
        }
      } catch (error) {
        console.error("Error fetching vegetables:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fruitsResponse = await axios.get(`${baseURL}/api/fruits`);
        if (fruitsResponse.data) {
          dispatch(addProducts({ fruits: fruitsResponse.data }));
        }
      } catch (error) {
        console.error("Error fetching fruits:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dairyResponse = await axios.get(`${baseURL}/api/dairy`);
        if (dairyResponse.data) {
          dispatch(addProducts({ dairy: dairyResponse.data }));
        }
      } catch (error) {
        console.error("Error fetching dairy products:", error);
      }
    };

    fetchData();
  }, []);

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
  const AddToCart = (product) => {
    console.log("Adding product to cart:", product);
    dispatch(AddToCart(product));
    navigate("/cart");

    setAddedToCart(true); // Set state to show cart message
    setTimeout(() => {
      setAddedToCart(false); // Reset state after a delay
    }, 2000);
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

        {/* Vegetable */}
        <div className="vegetable-container">
          <div className="product-category">
            <h1>Vegetable</h1>
            <h1>
              <Link to="/vegetables" className="view-all-link">
                View all
              </Link>
            </h1>
          </div>
          <div className="separator"></div>
          <div className="product-card">
            <Box sx={{ display: "flex", gap: "40px" }}>
              {vegetables?.slice(0, 4)?.map((vegetable) => (
                <ProductCard
                  data={{
                    ...vegetable,
                    onClick: () =>
                      navigate(
                        `/productDetailedView/vegetables/${vegetable.id}`
                      ),
                  }}
                />
              ))}
            </Box>
          </div>
        </div>

        {/* Fruits */}
        <div className="fruit-container">
          <div className="product-category">
            <h1>Fruit</h1>
            <h1>
              <Link to="/fruits" className="view-all-link">
                View all
              </Link>
            </h1>
          </div>
          <div className="separator"></div>
          <div className="product-card">
            <Box sx={{ display: "flex", gap: "40px" }}>
              {fruits?.slice(0, 4)?.map((fruit) => (
                <ProductCard
                  data={{
                    ...fruit,
                    onClick: () =>
                      navigate(`/productDetailedView/fruits/${fruit.id}`),
                  }}
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
              <Link to="/dairy" className="view-all-link">
                View all
              </Link>
            </h1>
          </div>
          <div className="separator"></div>
          <div className="product-card">
            <Box sx={{ display: "flex", gap: "40px" }}>
              {dairy?.slice(0, 4)?.map((dairy) => (
                <ProductCard
                  data={{
                    ...dairy,
                    onClick: () =>
                      navigate(`/productDetailedView/dairy/${dairy.id}`),
                  }}
                />
              ))}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
