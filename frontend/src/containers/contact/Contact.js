import React, { useContext } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
 
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p>
              {contactInfo.subtitle}
            </p>
            <div className="contact-div-main">
            <div>
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          {/* <div className="contact-image-div">
            <img
              alt="Saad Working"
              src={require("../../assets/images/contactMail.webp")}
            ></img>
            </div> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
