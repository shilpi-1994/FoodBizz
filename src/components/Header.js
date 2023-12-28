import React from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={APP_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login">Login</button>
        </ul>
      </div>
    </div>
  );
};
