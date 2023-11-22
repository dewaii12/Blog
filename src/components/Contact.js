import React from "react";
import ig from "./image/instagram.png";
import email from "./image/email.png";
import gt from "./image/github (1).png";
import fb from "./image/facebook.png";
import lk from "./image/linkedin.png";

const Contact = () =>{
    return(
        <main>
      <div id="Contact">
        <h1>Contact Me</h1>
      <a href="https://www.instagram.com/aii_._"><img src={ig} alt="instagram"></img></a>
        <a href="mailto:deewiips12@upi.edu"><img src={email} alt="email"></img></a>
        <a href="https://github.com/dewaii12"><img src={gt} alt="github"></img></a>
        <a href="https://www.facebook.com/dewipermata.suci.9?mibextid=LQQJ4d"><img src={fb} alt="facebook"></img></a>
        <a href="https://www.linkedin.com/in/b-dewi-permata-suci-473b682a0/"><img src={lk} alt="linkedin"></img></a>
      </div>
        </main>
    )
}

export default Contact;