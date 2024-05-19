import React from "react";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({ data, onAddToCart }) => {
  const { _id, productName, category, productPrice, unit, productImage, productQuantity, productDescription } = data || {};

  const handleAddToCart = () => {
    onAddToCart(data);
  };

  return (
    <div className="card" onClick={data.onClick}>
      <Box
        component="img"
        src={productImage}
        alt={productName}
        className="productimg"
      />
      <h1>{productName}</h1>
      <p className="price">Rs.{productPrice}</p>
      <p className="description">{productDescription}</p>
      <button onClick={handleAddToCart}>
        View Details <FavoriteBorderIcon />
      </button>
    </div>
  );
};

export default ProductCard;
