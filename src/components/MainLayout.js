import React from "react";
import { Outlet } from "react-router";
import Nav from "./Nav";
import '../styles/MainLayout.css'


const MainLayout = (props) => {
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


export default MainLayout;