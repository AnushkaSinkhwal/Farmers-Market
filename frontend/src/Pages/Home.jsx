import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Box from "@mui/material/Box";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const jsonResponse = await fetch('http://localhost:5000/api/products');
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

  const addToCart = (product) => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const filterProductsByCategory = (category) => {
    return products.filter((product) => product.category === category).slice(0, 4);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setIsSearching(true);

    // Simulating search delay
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  const categories = [
    { name: "Vegetable", key: "vegetable" },
    { name: "Fruit", key: "fruit" },
    { name: "Dairy", key: "dairy" },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="home-container">
      {addedToCart && (
        <div className="added-to-cart-message">Added to cart successfully!</div>
      )}

      {isSearching && (
        <div className="searching-popup-card">
          <div className="popup-content">
            <p>We are searching...</p>
          </div>
        </div>
      )}

      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search for products..."
        className="search-input"
      />

      {categories.map((category) => (
        <div key={category.key} className={`${category.key}-container`}>
          <div className="product-category">
            <h1>{category.name}</h1>
            <h1>
              <Link to={`/viewall/${category.key}`} className="view-all-link">
                View all
              </Link>
            </h1>
          </div>
          <div className="separator"></div>
          <div className="product-card">
            <Box sx={{ display: "flex", gap: "40px" }}>
              {filterProductsByCategory(category.key).map((product) => (
                <ProductCard
                  key={product.id}
                  data={product}
                  onAddToCart={addToCart}
                />
              ))}
            </Box>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
