import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';

const App = () => {
  // Routes are in this file to allow props to be passed from state to child components while using <Outlet/>.
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/')
    const products = response.json()
    setProducts(products)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop products={products}/>}/>
          <Route path="checkout" element={<Checkout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const Layout = () => {
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>Made by James Spencer</footer>
    </div>
  );
}

export default App;
