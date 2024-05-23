import { Category } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ProductCard from "../Components/productCard";
import "../styles/viewAllcategory.css";
import { Box } from "@mui/material";

const ViewAllProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const jsonResponse = await fetch(
          'http://localhost:5000/api/products'
        );
        const response = await jsonResponse.json();
        console.log("response: ", response);
        if (response && category) {
          const filterdData = response?.filter(
            (item) => item?.category === category
          );
          setProducts(filterdData || []);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchProducts();

  
  }, [category]);
  console.log("products: ", products);
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

    setProducts(searchResults) // Update the products with the search results

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

  return (
    <div className="view-all-container">
      <h1>All {category}s</h1>
      <div className="seperator" />
      <div className="home-container">
      {" "}
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
    </div>
  );
      <div className="product-grid">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
        </Box>
      </div>
    </div>
  );
};

export default ViewAllProducts;
