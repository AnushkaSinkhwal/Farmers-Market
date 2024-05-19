import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import "../styles/ViewAllcategory.css";
import Search from "../Components/Search";

function ProductCardViewfruits(props) {
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

function ViewFruits() {
  const fruits = useSelector((state) => state.product.products.fruits);
  const navigate = useNavigate();

  return (
    <div className="view-all-container">
      <h1>All Fruits</h1>
      <div className="seperator" />
      <Search />
      <div className="product-grid">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {fruits.map((fruit) => (
            <ProductCardViewfruits
              key={fruit.id}
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
  );
}

export default ViewFruits;