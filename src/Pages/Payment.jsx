import React from "react";
import cod from "../assets/cod.jpeg";
import fonepay from "../assets/fonepay.jpeg";
import "../styles/Payment.css";

function Payment() {
  return (
    <div className="payment-container">
      <h1>How to pay</h1>
      <div className="payment-m-c">
        <div className="cod-card">
          <img className="cod-pm" src={cod}></img>
          <p>Cash On Delivery</p>
        </div>
        <div className="fonep-card">
          <img className="cod-pm" src={fonepay}></img>
          <p>Fone Pay</p>
        </div>
      </div>

      <div className="seperator"></div>
    </div>
  );
}

export default Payment;
