import React from "react";
import Kayla from "./image/kayla.jpeg";
import Klrg from "./image/klrg.jpeg";
import Kost from "./image/kost.jpeg";
import Saya from "./image/saya.jpeg";
import rb from "./image/IMG_0385.png";
import gn from "./image/gunung.png";
import pt from "./image/pantai.png";
import org from "./image/org.png";

const Gallery = () => {
    return(
        <main>
        <div id="Galeri">
          <h1>My Galery</h1>
          <div className="bg">
            <div className="foto">
              <div className="show">
                <img src={Kayla} alt="Kayla" />
              </div>
              <div className="show">
                <img src={Klrg} alt="Klrg" />
              </div>
              <div className="show">
                <img src={Kost} alt="Kost" />
              </div>
              <div className="show">
                <img src={Saya} alt="Saya" />
              </div>
              <div className="show">
                <img src={gn} alt="Gunung" />
              </div>
              <div className="show">
                <img src={pt} alt="Pantai" />
              </div>
              <div className="show">
                <img src={org} alt="Orang" />
              </div>
              <div className="show">
                <img src={rb} alt="Rice Bowl" />
              </div>
            </div>
          </div>
        </div>
        </main>
    )
}

export default Gallery;