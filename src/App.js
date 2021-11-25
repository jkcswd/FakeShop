import React from "react";
import { Outlet } from "react-router";
import './App.css';
import Nav from "./components/Nav";



const App = () => {
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
