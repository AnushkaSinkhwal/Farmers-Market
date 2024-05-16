import React, { useState, useEffect } from "react";
import "../styles/Home.css";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
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
