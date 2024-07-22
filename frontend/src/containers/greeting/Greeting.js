import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

import emoji from "react-easy-emoji";


export default function Greeting() {

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1>
                {" "}{greeting.title}{" "}
                <span className=".wave-emoji">{emoji("💇💅")}</span>
              </h1>
              <p>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                
                <Button text="New User"
                
                  href="/create-customers" />
                  
                  
                <Button
                  text="Existing User"
                
                  href="/login-customer"
                />
                <Button text="Admin Login"
   
                  href="/login-admin" />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="saad sitting on table"
              src={require("../../assets/images/logo3.png")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
