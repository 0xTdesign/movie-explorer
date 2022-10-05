import React from "react";
import "./Footer.css";
import people from "../../assets/curtains.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={people} alt="" />
        <span>&#169; Movie explorer</span>
        <span>T:design</span>
      </div>
    </footer>
  );
}
