import React from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.css'

const Nav = (props) => {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/checkout">Basket ({props.basketSize})</Link>
    </div>
  );
}

export default Nav;
