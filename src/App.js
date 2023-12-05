import React from "react";
import "./App.css";
import brandlogo from "./brandlogo.svg";
import apple from "./apple-icon.png";
import android from "./playstore-icon.png";
import holdphone from "./holdphone.svg";
import family from "./family.svg";

export default function App() {
  return (
    <div className="container">
      <div className="navbar-container">
        <img src={brandlogo} alt="brand" className="image-style" />
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
        <div className="download-buttons">
          <button className="store-button">
            <img src={android} alt="icon" className="icon-style" />
            <h5 className="button-title">Get app on Play Store</h5>
          </button>
          <button className="store-button">
            <img src={apple} alt="icon-two" className="icon-style" />
            <h5 className="button-title">Get app on Apple store</h5>
          </button>
          <img src={holdphone} alt="phone" className="holdphone-style" />
        </div>
        <h2 className="who">Who is Hospiyou for?</h2>
        <h5 className="exist">We exist for everyone in the world</h5>
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
    </div>
  );
}
