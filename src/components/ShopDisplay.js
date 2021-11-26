import React from "react";
import Item from "./Item";
import '../styles/ShopDisplay.css'

const ShopDisplay = (props) => {
  return (
    <div className="ShopDisplay">
      {props.products.map(product => {
        return (
          <Item key={product.id} product={product}/>
        )
      })}
    </div>
  );
}

export default ShopDisplay;