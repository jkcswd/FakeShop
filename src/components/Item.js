import React from "react";
import '../styles/Item.css'
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
      <div className="Item">
        <Link to={`/shop/${props.product.id}`}>
          <div>
            <h3>{props.product.title}</h3>
            <h4>£{props.product.price}</h4>
            <img src={props.product.image} alt={props.product.title}></img>
          </div>
        </Link>
      </div>
   
    
  );
}

export default Item;