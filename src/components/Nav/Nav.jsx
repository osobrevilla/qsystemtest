import "./Nav.css";

import { NavLink } from "react-router-dom";
import React from "react";
const Nav = () => (
  <nav>
    <ul className="nav">
      <li>
        <NavLink to="/review">Review</NavLink>
      </li>
      <li>
        <NavLink to="/requests">Request</NavLink>
      </li>
      <li>
        <NavLink to="/schemes/1">Manage</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
