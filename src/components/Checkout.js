import React from "react";
import uniqid from 'uniqid'
import Total from "./Total";
import '../styles/Checkout.css'

const Checkout = (props) => {
  // TODO add function to add up quantities of same products
  return (
    <div className="Checkout">
      <h1>Basket</h1>
      {props.basket.map((item, index) => {
        return (
          <div className="checkout-item" key={uniqid()} > 
            <div>{item.item.title}</div>
            <div data-id={index}>
              <button onClick={props.reduceBasketAmount}>-</button>
              Quantity:{item.amount}
              <button onClick={props.increaseBasketAmount}>+</button>
            </div>
            <div>£{item.item.price * item.amount}</div>
          </div>
        )
      })}
      <Total basket={props.basket}/>
      <button className="btn">Checkout</button>
    </div>
  );
}

export default Checkout;