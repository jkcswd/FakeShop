import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import ItemDetail from "./components/ItemDetail";

const App = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/', {mode:'cors'})
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  const addToBasket = (e) => {
    setBasket([...basket, products[e.target.dataset.id]])
  }

  return (
    // Routes are in this file to allow props to be passed from state to child components while using <Outlet/>.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout basketSize={basket.length}/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop products={products} loading={loading}/>}/>
          <Route 
            path="shop/:id" 
            element={<ItemDetail products={products} loading={loading} addToBasket={addToBasket}/>}
          />
          <Route path="checkout" element={<Checkout basket={basket}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const Layout = (props) => {
  return (
    <div className="App">
      <header>
        <Nav basketSize={props.basketSize}/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>Made by James Spencer</footer>
    </div>
  );
}

export default App;
