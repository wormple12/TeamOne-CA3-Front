import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ loggedIn }) => {
  const userHeaders = loggedIn ? (
    <li>
      <NavLink activeClassName="active" to="/starWars">
        Star Wars
      </NavLink>
    </li>
  ) : (
    <li>
        <NavLink activeClassName="active" to="/createUser">
          Create User
        </NavLink>
      </li>
  );
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
      
      {userHeaders}
    </ul>
  );
};

export default Header;
