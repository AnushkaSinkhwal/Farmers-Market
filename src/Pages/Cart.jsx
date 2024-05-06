import React, { useMemo } from "react";
import cabbage from "../assets/cabbage2.jpg";
import strawberry from "../assets/strawberry.jpg";
import cheese from "../assets/cheese.jpg";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import { useSelector } from "react-redux";

function ProductCard({
  photo_url,
  name,
  totalPrice,
  price,
  description,
  cartQuantity,
}) {
  return (
    <div className="card-cart">
      <Box component="img" src={photo_url} alt={name} className="productimge" />
      <div className="textcont">
        <h1>{name}</h1>
        <p className="price">Rs. {price}/kg</p>
        <p>{description}</p>
        <p>{cartQuantity} kg</p>
      </div>
      <div className="seperator-c"></div>
      <div className="price-card">
        <p>Rs. {totalPrice}</p>
      </div>
    </div>
  );
}

function Cart() {
  const products = useSelector((state) => state.cart?.items);
  const totalCost = products
    ?.map((product) => product?.totalPrice)
    ?.reduce((acc, currVal) => acc + currVal, 0);

  return (
    <div>
      <div className="cart-container">
        <div className="product-container">
          <h1>Item List</h1>
          <div className="items-card">
            <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {products?.map((product) => (
                <ProductCard {...product} />
              ))}
            </Box>
          </div>
        </div>

        <div className="checkoutCard">
          <div className="totalPrice">
            <h1>Your subtotal:</h1>
            <p>Rs. {totalCost}</p>
          </div>
          <div className="paymentMethod">
            <h1>Payment Method</h1>
            <p>cash on delivery</p>
            <p>Fone Pay</p>
          </div>
          <button>Procced to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
