import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer" className="bg-warning">
      <div className="footer-con text-white">
        <p>Help & Information</p>
        <a href="#payment-method">Payment Methods</a>
        <a href="#track-order">Track Order</a>
        <a href="#return-refund">Return & Refund</a>
        <a href="#guarantee">Guarantee</a>
      </div>
      <div className="footer-con text-white">
        <p>About Shop</p>
        <a href="#about-us">About Us</a>
        <a href="#careers">Careers</a>
        <a href="#policies">Policies</a>
        <a href="#affiliates">Affiliates</a>
      </div>
      <div className="footer-con text-white">
        <p>Connect With Us</p>
      </div>
    </div>
  );
};

export default Footer;
