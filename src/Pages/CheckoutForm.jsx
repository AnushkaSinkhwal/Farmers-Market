import React, { useState, useEffect } from "react";
import axios from "axios";import Box from "@mui/material/Box"; // Import Box from MUI
import Modal from "@mui/material/Modal"; // Import Modal from MUI
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon from MUI
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Import CheckCircleIcon from MUI
import "../styles/CheckoutForm.css";

function CheckoutForm({ products }) {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    paymentMethod: "", // Add payment method field
  });

  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const baseURL = "http://localhost:8000/submit-form";

  useEffect(() => {
    calculateSubtotal();
  }, [products]);

  const calculateSubtotal = () => {
    if (products && products.length > 0) {
      let total = 0;
      products.forEach((product) => {
        total += product.price * product.quantity;
      });
      setSubtotal(total);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/submit-form", formData);
      console.log("Form submitted:", formData);
      // Reset form fields after submission
      setFormData({
        fullName: "",
        address: "",
        paymentMethod: "",
      });
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {orderPlaced ? (
        <p>Your order has been successfully placed!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Payment Method:
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Credit Card">Credit Card</option>
              {/* Add more payment methods as needed */}
            </select>
          </label>
          <div>
            <p>Delivery Charge: $ 15{deliveryCharge}</p>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
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
            <span>successfully submitted form for placing order</span>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CheckoutForm;
