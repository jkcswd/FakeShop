import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import ItemDetail from "./components/ItemDetail";
import MainLayout from "./components/MainLayout";

const App = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [loading, setLoading] = useState(true); // For rendering loading screen

  useEffect(() =>{
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    // As amount of data for all products is small so fetch all at initial load of website.
    const response = await fetch('https://fakestoreapi.com/products/', {mode:'cors'});
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }

  const addToBasket = (e) => {
    e.preventDefault() // To prevent refresh of page on click.

    const amount = parseInt(e.target.elements[0].value)
    const item = {
      item:products[e.target.dataset.id],
      amount:amount
    }

    setBasket([...basket, item]);
  }

  const reduceBasketAmount = (e) => {
    // clone array, modify then set state is easiest way modify by index as assigning array is a reference not a copy.
    const newBasket = [...basket];
    newBasket[parseInt(e.target.parentElement.dataset.id)].amount -= 1;
    setBasket(newBasket)
  }

  const increaseBasketAmount = (e) => {
    const newBasket = [...basket];
    newBasket[parseInt(e.target.parentElement.dataset.id)].amount += 1;
    setBasket(newBasket)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout basketSize={basket.length}/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop products={products} loading={loading}/>}/>
          <Route 
            path="shop/:id" 
            element={<ItemDetail products={products} loading={loading} addToBasket={addToBasket}/>}
          />
          <Route path="checkout" element={
            <Checkout 
              basket={basket} 
              reduceBasketAmount={reduceBasketAmount} 
              increaseBasketAmount={increaseBasketAmount}
            />
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
