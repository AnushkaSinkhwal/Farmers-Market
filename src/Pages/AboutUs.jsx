import React from "react";
import "../styles/Aboutus.css";
// import bg from "../assets/bg-img.jpeg";

function AboutUs() {
  return (
    <div className="aboutus-section">
      <div class="container">
        <h1>About Us</h1>
        <p>
          Welcome to Kheti Mart, your one-stop destination for farm-fresh
          produce sourced directly from local farmers.
        </p>
        <p>
          At Kheti Mart, we are passionate about connecting farmers with
          consumers, ensuring fair prices for farmers and high-quality products
          for our customers. We believe in supporting local agriculture and
          promoting sustainable farming practices.
        </p>
        <p>
          Our mission is to provide you with the freshest fruits, vegetables,
          dairy products, and more, straight from the farm to your table. We
          work closely with farmers to ensure that our products meet the highest
          standards of quality and freshness.
        </p>
        <p>
          Whether you're a health-conscious consumer, a foodie looking for the
          best ingredients, or a farmer looking for a platform to sell your
          produce,Kheti Martis here for you.
        </p>
        <div class="about-image">{/* <img src={bg} /> */}</div>
        <p>
          Thank you for supporting local farmers and choosing Kheti Mart for
          your fresh produce needs.
        </p>
        <p class="quote">"Eat fresh, buy local."</p>
        <div class="signature">
          - <span>Kheti Mart Team</span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
