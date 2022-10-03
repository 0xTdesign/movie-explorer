import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="" alt="" />
        </div>
        <nav className="nav-list">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Top Movies</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
