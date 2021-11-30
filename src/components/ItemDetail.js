import React, { useState } from "react";
import Loading from './Loading'

const ItemDetail = (props) => {
  const [amountItems, setAmountItems] = useState(0)
  const id = window.location.href.split('/shop/')[1] // Quick fix as match prop not working. TODO: Fix using {match}.
  const product = props.products[id -1] // api id starts at 1 whereas array of products is 0 indexed hence '-1'.

  const handleChange = (e) => {
    setAmountItems(e.target.value)
  }
  
  return (
    <div className="ItemDetail">
      {props.loading && <Loading/>}
      {!props.loading && 
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title}/>
          <p>{product.description}</p>
          <form className="add-to-basket" onSubmit={props.addToBasket} data-id={id - 1}>
            <label>
              Amount
              <input type="number" value={amountItems} name="Amount" onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      }
    </div>
  );
}

export default ItemDetail;