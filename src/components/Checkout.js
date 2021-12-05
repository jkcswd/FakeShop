import React from "react";
import uniqid from 'uniqid'
import Total from "./Total";
import '../styles/Checkout.css'

const Checkout = (props) => {
  // TODO add function to add up quantities of same products
  return (
    <div className="Checkout">
      <h1>Basket</h1>
      <table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {props.basket.map((item, index) => {
            return (
              <tr key={uniqid()} > 
                <td>{item.item.title}</td>
                <td data-id={index}>
                  <button className="btn" onClick={props.reduceBasketAmount}>-</button>
                  {item.amount}
                  <button className="btn" onClick={props.increaseBasketAmount}>+</button>
                </td>
                <td>£{item.item.price * item.amount}</td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">TOTAL</td>
            <td><Total basket={props.basket}/></td>
          </tr> 
        </tfoot>       
      </table>
      <button className="btn">Checkout</button>
    </div>
  );
}

export default Checkout;