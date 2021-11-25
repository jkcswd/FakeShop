import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route/>
            <Route/>
            <Route/>
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
