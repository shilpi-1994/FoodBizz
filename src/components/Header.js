import { React, useContext } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg m-2">
      <div className="logoContainer">
        <img className="w-32" src={APP_LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-4">
          <li className="px-4">
            <div>Online status: {onlineStatus ? "✅" : "🔴"}</div>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="login">
            Login -{" "}
            <span className="font-extrabold uppercase">{loggedInUser}</span>
          </button>
        </ul>
      </div>
    </div>
  );
};
