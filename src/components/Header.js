import React from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={APP_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <div>Online status: {onlineStatus ? "✅" : "🔴"}</div>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button className="login">Login</button>
        </ul>
      </div>
    </div>
  );
};
