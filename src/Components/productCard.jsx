import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={props.data.onClick}>
      <Box
        component="img"
        src={props.data.productImage}
        alt={props.data.productName}
        className="productimg"
      />
      <h1>{props.data.productName}</h1>
      <p className="price">Rs.{props.data.productPrice}</p>
      <p className="description">{props.data.productDescription}</p>
      <button
        onClick={() =>
          navigate(
            `/productDetailedView/${props?.data?.category}/${props?.data?._id}`
          )
        }
      >
        View Details
      </button>
    </div>
  );
}

export default ProductCard;
