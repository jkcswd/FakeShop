import React from "react";

const ShopDisplay = (props) => {
  return (
    <div className="ShopDisplay">
      {props.products.map(product => {
        return (
          <p>{product.title}</p>
        )
      })}
    </div>
  );
}

export default ShopDisplay;