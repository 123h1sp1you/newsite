import React from "react";
import "./App.css";
import brandlogo from "./images/brandlogo.svg";
import apple from "./images/apple-icon.png";
import android from "./images/playstore-icon.png";
import holdphone from "./images/holdphone.svg";
import hero_image_pc from "./images/hero_image_pc.png";
import bg from "./images/bg.png";
// import bg_mobile from "./images/bg.png";
import family from "./images/family.svg";

export default function App() {

  const imagebg = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 624,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  };

  return (
    <div className="container">
      <div className="header">
        <img src={brandlogo} alt="brand" />
        <ul className="nav">
          <li className="nav-button">Our goals</li>
          <li className="nav-button">Our services</li>
          <li className="nav-button">About</li>
        </ul>
      </div>
      <div className="hero">
        <text className="tagline">
          Making quality healthcare available for everyone
        </text>
        <text className="welcometext">
          Welcome to Hospiyou, where quality healthcare meets you wherever you
          are
        </text>
        <div className="downloaddiv">
          <button className="downloadbutton">
            <img src={apple} alt="appleicon" className="icon-style" />
            <text className="downloadtext">Get app on Apple store</text>
          </button>
          <button className="downloadbutton">
            <img src={android} alt="playstoreicon" className="icon-style" />
            <text className="downloadtext">Get app on Play store</text>
          </button>
        </div>
      </div>
      <div className="hero_image">
        <img src={hero_image_pc} className="hero_image_pc" alt="hero-image" />
      </div>
      <div className="forwho">
        <div>
          <text className="forwhoheader">Who is Hospiyou for?</text>
        </div>
        <div style={imagebg}>
          <div></div>
        </div>
      </div>
    </div>
  );
}

/* <div className="navbar-container">
        <button className="navbar-button">
          <h5 className="navbarbutton-title">Download</h5>
        </button>
      </div>
      <div className="hero">
        <h3 className="making">
          Making quality healthcare available for everyone
        </h3>
        <h5 className="welcome">
          Welcome to Hospiyou, where quality healthcare meets you wherever you
          are
        </h5>
        </div>
        <div className="download-buttons">
          <div>
          <button className="store-button">
            <img src={android} alt="icon" className="icon-style" />
            <h5 className="button-title">Get app on Play Store</h5>
          </button>
          </div>
          <div>
          <button className="store-button">
            <img src={apple} alt="icon-two" className="icon-style" />
            <h5 className="button-title">Get app on Apple store</h5>
          </button>
          </div>
          <div>
          <img src={holdphone} alt="phone" className="holdphone-style" />
          </div>
        </div>
        <div>
        <h2 className="who">Who is Hospiyou for?</h2>
        <h5 className="exist">We exist for everyone in the world</h5>
        </div>
        <div className="dummy-bg">
          <h3 className="foryou">For you and your family</h3>
          <h6 className="explanation">
            For you and your family Our AI-powered telemedicine application
            allows you to take medical tests and have remote consultations with
            local and international doctors, all from the comfort of your home
          </h6>
          <img src={family} alt="famtwo" className="family-style" />
        </div>
      </div>
    </div> */
