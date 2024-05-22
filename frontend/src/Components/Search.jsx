import React, { useState, useEffect } from "react";
import "../styles/Home.css";

function Search(props) {
  let products = props.products;
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

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

    products = searchResults; // Update the products with the search results

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
}

export default Search;
