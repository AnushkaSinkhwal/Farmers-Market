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
      <div className="cod-des-card">
        <h1>Cash On Delivery - Pay When You Receive</h1>
        <p>
          At Kheti Mart, we understand that convenience and trust are essential
          when it comes to shopping online. That's why we offer Cash on Delivery
          (COD) as a payment option for our customers. With Cash on Delivery,
          you have the flexibility to pay for your fresh produce order when it
          arrives at your doorstep.
          <br />
          <br />
          1. Place Your Order: Browse through our wide selection of farm-fresh
          fruits, vegetables, and more on our website. Once you've chosen your
          items, proceed to checkout.
          <br />
          2. Choose Cash on Delivery: During checkout, select the Cash on
          Delivery option as your preferred payment method. <br />
          3. Receive Your Order: Our friendly delivery team will bring your
          order directly to your doorstep at the scheduled time. You'll receive
          your items neatly packed and ready for consumption. <br />
          4. Pay on Delivery: When your order arrives, you can pay the total
          amount in cash to the delivery person. No need to worry about online
          transactions or credit cards – simply hand over the cash, and your
          transaction is complete!
        </p>
      </div>
      <div className="seperator"></div>

      <div className="Fone-des-card">
        <h1>Fone Pay - Scan and pay</h1>
        <p>
          At Kheti Mart, we're committed to providing you with easy and secure
          payment options for your online purchases. That's why we offer Fone
          Pay as a convenient way to pay for your fresh produce orders.
          <br />
          <br />
          Fone Pay is a mobile payment solution that allows you to make payments
          directly from your smartphone. It's fast, secure, and easy to use,
          making it an ideal option for shopping on-the-go.
        </p>
        <div className="seperator"></div>

        <h1>How to do Fone Pay</h1>
        <p>
          Step 1: Login to your mobile banking app. <br />
          Step 2: Swipe right to open QR Scan or tap on the ‘QR Scan’ option.
          <br />
          Step 3: Scan the QR Code. <br />
          Step 4: Enter the amount to pay and other necessary details. <br />
          Step 5: Check the details and tap on “Confirm”. <br />
          Step 6: Enter transaction PIN or use your biometric to execute the
          payment.
        </p>
      </div>

      <div className="last">
        <h1>Happy Payment!!</h1>
      </div>
    </div>
  );
}

export default Payment;
