import React from "react";
import Loading from './Loading'

const ItemDetail = (props) => {
  const id = window.location.href.split('/shop/')[1] // Quick fix as match prop not working. TODO: Fix using match.
  const product = props.products[id -1] 
  
  return (
    <div className="ItemDetail">
      {props.loading && <Loading/>}
      {!props.loading && 
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title}/>
          <p>{product.description}</p>
          <button data-id={id -1} onClick={props.addToBasket}>Add to basket</button>
        </div>
      }
    </div>
  );
}

export default ItemDetail;