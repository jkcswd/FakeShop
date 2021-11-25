import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import PrimaryLayout from "./components/PrimaryLayout";


const App = () => {
  return (
    <BrowserRouter>
      <PrimaryLayout />
    </BrowserRouter>
  );
}

export default App;
