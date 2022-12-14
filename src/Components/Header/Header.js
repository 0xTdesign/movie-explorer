import React from "react";
import "./Header.css";
// import logo from "../../assets/newLogo.png";

export default function Header({ handleChange, getMovie }) {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-list">
          <div className="logo">
            {/* <img className="logo-movie" src={logo} alt="" /> */}
            <h2>Movie Finder</h2>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Top Movies</a>
            </li>
          </ul>
          <form onSubmit={getMovie}>
            <input onChange={handleChange} name="title" placeholder="Name of Movie" type="text" />
            <button type="submit">Explore</button>
          </form>
        </nav>
      </div>
    </header>
  );
}
