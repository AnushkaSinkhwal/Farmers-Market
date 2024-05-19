import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../styles/cart.css";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

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
  const [optionASelected, setOptionASelected] = useState(false);
  const [optionBSelected, setOptionBSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [setCheckoutClicked] = useState(false);
  const navigate = useNavigate();

  const totalCost = products.reduce((acc, product) => acc + product.totalPrice, 0)
    
  const handleProceedToCheckout = () => {
    setShowModal(true);
    setCheckoutClicked(true); 
    };
  const handleOptionAChange = () => {
    setOptionASelected(!optionASelected);
    if (optionBSelected) {
      setOptionBSelected(false);
    }
  };

  const handleOptionBChange = () => {
    setOptionBSelected(!optionBSelected);
    if (optionASelected) {
      setOptionASelected(false);
    }
  };

  return (
    <div>
      <div className="cart-container">
        <div className="product-container">
          <h1>Item List</h1>
          <div className="items-card">
            <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {products?.map((product,index) => (
                <ProductCard key={index} {...product} />
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
            <div className="checkbox-card">
              <label>
                <input
                  type="checkbox"
                  checked={optionASelected}
                  onChange={handleOptionAChange}
                />
                Cash on Delivery
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={optionBSelected}
                  onChange={handleOptionBChange}
                />
                Fone Pay
              </label>
            </div>
          </div>
        <button onClick={handleProceedToCheckout}>Proceed to checkout</button>
        </div>
      </div>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        className={"successModal"}
      >
        <Box className={"modalBox"}>
          <div className="modal-header">
            <div className="title">
              <CheckCircleIcon />
              <span>Confirmation</span>
            </div>
            <CloseIcon
              className="closeIcon"
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className="description">
            <span>fill up the checkout form for placing order</span>
          </div>
          <div className="buttonContainer">
            <button onClick={() => navigate("/CheckoutForm")}>go to checkout</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Cart;