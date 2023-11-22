import React from "react";
import Type from "./type";
import Image from "./image/foto.png";
import "./css/custom.css";

const Home = () => {
  return (
    <main>
      <div className="wrap">
        <div id="Home">
          <h1>Hai!! <br/>Saya Dewi Permata Suci</h1>
          <Type />
        </div>
        <div id="Image">
          <img src={Image} alt="Foto" />
        </div>
      </div>
    </main>
  );
};

export default Home;