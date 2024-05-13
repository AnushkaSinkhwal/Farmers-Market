import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/productSlice";


function ProductCard(props) {
  const handleAddToCart = () => {
    if (typeof props.onAddToCart === 'function') {
      props.onAddToCart(props.data);
    } else {
      console.error("onAddToCart is not a function");
    }
  };

  console.log("Fetched products inside ProductCard:", props.data);


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

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { vegetables, fruits, dairy } = products;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        if (response.status === 200) {
          dispatch(addProducts(response.data.data));
          setProducts(response.data.data);
          const farmersData = response.data.data;
          console.log(farmersData)
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

  console.log("Products:", products);

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
  const addToCart = (product) => {
    setAddedToCart(true); // Set state to show cart message
    setTimeout(() => {
      setAddedToCart(false); // Reset state after a delay
    }, 2000);
  };
  const filterProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
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
  
        <div>
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
                <Link to="/fruits" className="view-all-link">
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
                <Link to="/dairy" className="view-all-link">
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
