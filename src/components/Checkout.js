import React from "react";
import uniqid from 'uniqid'

const Checkout = (props) => {
  // TODO add function to add up quantities of same products
  return (
    <div className="Checkout">
      <h1>Checkout</h1>
      {props.basket.map((item, index) => {
        return (
          <div className="checkout-item" key={uniqid()} > 
            <div>{item.item.title}</div>
            <div data-id={index}>
              <button onClick={props.reduceBasketAmount}>-</button>
              quantity:{item.amount}
              <button onClick={props.increaseBasketAmount}>+</button>
            </div>
            <div>£{item.item.price * item.amount}</div>
          </div>
        )
      })}
      <div>Total:£</div>
    </div>
  );
}

export default Checkout;