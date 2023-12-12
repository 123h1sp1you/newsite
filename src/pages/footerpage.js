import React from "react";
import apple from "../images/apple-icon.png";
import android from "../images/playstore-icon.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import youtube from "../images/youtube.png";
import facebook from "../images/facebook.png";
import email from "../images/email.png";
import brandlogo from "../images/brandlogo.svg";

const footerpage = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
      <div className="firstdiv">
        <img src={brandlogo} alt="brand" className="brandpic" />
        <div className="logo-container">
          <button className="logo-div">
            <img src={twitter} alt="logo1" className="logo-style" />
          </button>
          <button className="logo-div">
            <img src={instagram} alt="logo2" className="logo-style" />
          </button>
          <button className="logo-div">
            <img src={linkedin} alt="logo3" className="logo-style" />
          </button>
          <button className="logo-div">
            <img src={youtube} alt="logo4" className="logo-style" />
          </button>
          <button className="logo-div">
            <img src={facebook} alt="logo5" className="logo-style" />
          </button>
          <button className="logo-div">
            <img src={email} alt="logo6" className="logo-style" />
          </button>
        </div>
      </div>
      <div className="footer-download_pc">
        <text className="footerdownloadtext_pc">Download App</text>
        <div className="footer-install_pc">
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
      </div>
      <div className="below-social">
        <div className="second-div">
          <div className="legal-div">
            <text className="Legal-text">Legal</text>
            <text className="deletion">Request deletion of account</text>
          </div>
          <div className="TC">
            <text className="TC-text">Terms & conditions</text>
            <text className="medpract">For medical practitioners</text>
            <text className="individual">For individuals</text>
          </div>
        </div>
        <div className="third-div">
          <text className="support-text">Support</text>
          <text className="support-text2">Hospiyou for doctors</text>
          <text className="support-text2">Contact Us</text>
          <text className="support-text2">Investors</text>
        </div>
        <div className="footer-download">
          <text className="footerdownloadtext">Download App</text>
          <div className="footer-install">
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
      </div>
    </div>
  );
};
export default footerpage;
