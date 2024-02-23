import React from "react";
import apple from "../images/apple-icon.png";
import android from "../images/playstore-icon.png";
import list from "../images/list.svg";
import iphone15 from "../images/iphone15.png";
import halfphone from "../images/halfphone.png";
import listpc from "../images/listpc.svg";

const ServicePage = () => {

  const playstoredownload = () => {
    window.location.href = "https://play.google.com/store/apps/details?id=com.hospiyou"
  }

  return (
    <div className="services">
      <text className="unique">Our unique services</text>
      <text className="following">
        Following the launch of our mobile app, here are some unique services we
        offer
      </text>
      <div className="downloaddivtwo">
        {/* <button className="downloadbutton">
          <img src={apple} alt="appleicon" className="icon-style" />
          <text className="downloadtext">Get app on Apple store</text>
        </button> */}
        <button className="downloadbutton" onClick={playstoredownload}>
          <img src={android} alt="playstoreicon" className="icon-style" />
          <text className="downloadtext">Get app on Play store</text>
        </button>
      </div>
      <div className="servicedivtwo">
        <div className="back">
          <div className="position-div">
            <img className="phone" src={iphone15} alt="phone-alt" />
          </div>
        </div>
        <div className="mobile-back">
          <div className="pos-div">
            <img className="half" src={halfphone} alt="halfalt" />
          </div>
        </div>

        <img className="list" src={list} alt="list_alt" />
        <img className="listpc" src={listpc} alt="list_pc" />
      </div>
    </div>
  );
};
export default ServicePage;
