import React from "react";
import Loading from "./Loading";
import ShopDisplay from "./ShopDisplay";
import '../styles/Shop.css'

const Shop = (props) => {
  // Conditional rendering used for loading screen while awaiting API data.
  return (
    <div className="Shop">
      {props.loading && <Loading/>} 
      {!props.loading && <ShopDisplay products={props.products}/>}
    </div>
  );
}

export default Shop;