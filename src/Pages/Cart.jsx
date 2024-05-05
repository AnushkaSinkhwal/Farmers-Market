import React from "react";
import cabbage from "../assets/cabbage2.jpg";
import strawberry from "../assets/strawberry.jpg";
import cheese from "../assets/cheese.jpg";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function ProductCard({
  imgSrc,
  title,
  price,
  quantity,
  description,
  totalPrice,
}) {
  return (
    <div className="card">
      <Box component="img" src={imgSrc} alt={title} className="productimg" />
      <div class>
        <h1>{title}</h1>
        <p className="price">{price}</p>
        <p>{description}</p>
        <p>{quantity}</p>
      </div>
      <div className="price-card">
        <p>{totalPrice}</p>
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div>
      <div className="cart-container">
        <div className="product container">
          <h1>Item List</h1>
          <Box sx={{ display: "flex", gap: "40px" }}>
            <ProductCard
              imgSrc={cabbage}
              title="Fress Cabbage"
              price="Rs.249"
              description="Enjoy the crisp and refreshing taste of our cabbage, packed with nutrients and versatile enough for salads, stir-fries, and more"
              totalPrice="Total Price: Rs. 498"
            />
          </Box>
        </div>

        <div className="checkoutCard">
          <div className="totalPrice">
            <h1>Your subtotal:</h1>
            <p>Rs. 650</p>
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
