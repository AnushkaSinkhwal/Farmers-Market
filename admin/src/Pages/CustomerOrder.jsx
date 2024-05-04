import React, { useState, useEffect } from "react";
import "../Style/customerOrder.css";

function CustomerOrder() {
  return (
    <div className="info-container">
      <h2>Customer Order Information</h2>
      <div className="seperator"></div>
      <div className="infos">
        <p>Order no: </p>
        <p>Delivery address: </p>
        <p>Contact: </p>
        <p>Customer name:</p>
        <p>Category:</p>
        <p>Quantity: </p>
        <p>Total: </p>
        <p>Status: </p>
      </div>
    </div>
  );
}

export default CustomerOrder;
