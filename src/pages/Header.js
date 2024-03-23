import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Kira's Flower Shop</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" className="header-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/productdetail" className="header-link">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="header-link">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
