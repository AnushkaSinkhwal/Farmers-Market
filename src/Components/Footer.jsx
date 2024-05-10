import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div id="footer" class="footer">
      <div className="km-card">
        <h1>Kheti Mart</h1>
        <Link to="/AboutUs">About Us</Link>
        <p>Terms and condition</p>
      </div>

      <div className="payments-card">
        <h1>Payment Method</h1>
        <p>Cash on delivery</p>
        <p>Fone Pay</p>
      </div>
    </div>
  );
}

export default Footer;
