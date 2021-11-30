import React from "react";
import '../styles/Total.css'

const Total = (props) => {
  return (
    <div className="Total">
      Total:£{
        props.basket.reduce((sum,item) => {
          return sum += item.item.price * item.amount
        },0)
      }
    </div>
  )
}

export default Total;