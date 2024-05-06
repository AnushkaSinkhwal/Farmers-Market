import React from "react";
import "../styles/footer.css";
function Footer() {
  return (
    <div class="footer">
      <div className="km-card">
        <h1>Kheti Mart</h1>
        <p>About Us</p>
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
