import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ loggedIn }) => {
  const userHeaders = loggedIn ? (
    <div>
      <li>
        <NavLink activeClassName="active" to="/starWars">
          Star Wars
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/logout">
          Log Out
        </NavLink>
      </li>
    </div>
  ) : (
    <div>
      <li>
        <NavLink activeClassName="active" to="/createUser">
          Create User
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/login">
          Log In
        </NavLink>
      </li>
    </div>
  );
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      {userHeaders}
    </ul>
  );
};

export default Header;
