import React from "react";
import apple from "../images/apple-icon.png";
import android from "../images/playstore-icon.png";
import list from "../images/list.svg";
import iphone15 from "../images/iphone15.svg";

const servicepage = () => {
  return (
    <div className="services">
      <text className="unique">Our unique services</text>
      <text className="following">
        Following the launch of our mobile app, here are some unique services we
        offer
      </text>
      <div className="downloaddivtwo">
        <button className="downloadbutton">
          <img src={apple} alt="appleicon" className="icon-style" />
          <text className="downloadtext">Get app on Apple store</text>
        </button>
        <button className="downloadbutton">
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
        <img className="list" src={list} alt="list_alt" />
      </div>
    </div>
  );
};
export default servicepage;
