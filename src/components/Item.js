import React from "react";
import '../styles/Item.css'
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
      <div className="Item">
        <Link to={`/shop/${props.product.id}`}>
          <div className="card">
            <img src={props.product.image} alt={props.product.title}/>
            <div className="info"> 
              <h3>{props.product.title}</h3>
              <h4>£{props.product.price}</h4>
            </div>
          </div>
        </Link>
      </div>
  );
}

export default Item;