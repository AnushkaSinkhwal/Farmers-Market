import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box"; // Import Box from MUI
import Modal from "@mui/material/Modal"; // Import Modal from MUI
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon from MUI
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../styles/CheckoutForm.css";

function CheckoutForm({ products }) {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    paymentMethod: "", // Add payment method field
  });

  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/submit-form",
        formData
      );
      console.log("Form submitted:", formData);
      // Reset form fields after submission
      setFormData({
        fullName: "",
        address: "",
        phoneNumber: "",
        paymentMethod: "",
      });
      setShowSuccessModal(true);
      setOrderPlaced(true); // Set orderPlaced to true after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal when close button is clicked
  };

  return (
    <div className="checkout-container-cf">
      <h2>Checkout</h2>
      {orderPlaced ? (
        <p>Your order has been successfully placed!</p>
      ) : (
        <form className="checkout-form-cf" onSubmit={handleSubmit}>
          <label className="checkout-label-cf">
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="checkout-label-cf">
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label className="checkout-label-cf">
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label className="checkout-label-cf">
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
          <div className="delivery-charge-cf">
            <p>Delivery Charge: RS. 10{deliveryCharge}</p>
          </div>
          <button className="submit-button-cf" type="submit">
            Submit
          </button>
        </form>
      )}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        className={handleCloseModal}
      >
        <Box className="modal-box-cf">
          <div className="modal-header-cf">
            <div className="title-cf">
              <CheckCircleIcon />
              <span>Confirmation</span>
            </div>
            <CloseIcon className="close-icon-cf" onClick={handleCloseModal} />
          </div>
          <div className="description-cf">
            <span>Successfully submitted form for placing order</span>
          </div>
          <div className="button-container-cf">
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CheckoutForm;
