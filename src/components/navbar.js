import React from "react";
import './css/custom.css'
import Lg from "./image/lg.png"


const navbar = () => {
  return (
    <header>
        <ul class="navbar-router">
        <label class="salam">
          <img src={Lg}/>
        </label>
        <div className="navbar">
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Gallery">Galery</a></li>
          <li><a href="/Contact">Contact</a></li>
          </div>
        </ul>
    </header>
  );
};

export default navbar;
