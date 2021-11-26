import React from "react";
import '../styles/Item.css'

const Item = (props) => {
  return (
    <div className="Item">
      <h3>{props.product.title}</h3>
      <h4>£{props.product.price}</h4>
      <img src={props.product.image} alt={props.product.title}></img>
    </div>
  );
}

export default Item;