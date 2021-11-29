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
    const response = await fetch('https://fakestoreapi.com/products/', {mode:'cors'});
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }

  const addToBasket = (e) => {
    e.preventDefault()

    const amount = e.target.elements[0].value
    const item = {
      item:products[e.target.dataset.id],
      amount:amount
    }

    setBasket([...basket, item]);
  }

  const removeFromBasket = (e) => {
    setBasket(basket.filter((_, index) => index !== parseInt(e.target.dataset.index)))
  }

  const reduceBasket = () => {

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
          <Route path="checkout" element={<Checkout basket={basket} removeFromBasket={removeFromBasket}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
