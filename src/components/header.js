import React from "react";
import { NavLink } from "react-router-dom";

const header = () => (
  <header>
    <h1>BookStore CMS</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Books</NavLink>
        </li>
        <li>
          <NavLink to="/category">Categories</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default header;
