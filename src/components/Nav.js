import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}

export default Nav;