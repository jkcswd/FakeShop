import React from "react";

const Total = (props) => {
  return (
    <div className="Total">
      £{
        props.basket.reduce((sum,item) => {
          return sum += item.item.price * item.amount
        },0)
      }
    </div>
  )
}

export default Total;