import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
 
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div " >
        <p className="footer-text">
          {emoji("Made with ❤️ by Sudheer, Syed, Swapnil, Saranya & Jatindra")}
        </p>
       
      </div>
    </Fade>
  );
}
