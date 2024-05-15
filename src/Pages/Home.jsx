import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import "../styles/Home.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/productSlice";

function ProductCard(props) {
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
      <button onClick={props.data.onClick}>
        View Details <FavoriteBorderIcon />
      </button>
    </div>
  );
}

function Customer() {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const products = useSelector((state) => state.product.products);
  const { vegetables, fruits, dairy } = products;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("vegetables.json").then((resp) => {
      if (resp?.data) {
        dispatch(addProducts(resp?.data));
      }
    });
  }, []);

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
    <div>
      <div className="home-container">
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
              <Link to="/ViewFruits" className="view-all-link">
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
              <Link to="/ViewDairy" className="view-all-link">
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
