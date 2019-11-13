import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/login">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
