import React from "react";
import "./App.css";
import brandlogo from "./images/brandlogo.svg";
import apple from "./images/apple-icon.png";
import android from "./images/playstore-icon.png";
import list from "./images/list.svg";
import family from "./images/family.png";
import hero_image_pc from "./images/hero_image_pc.png";
import bg from "./images/bg.png";
import docs from "./images/docs.png";
import purple from "./images/purple.png";
import iphone15 from "./images/iphone15.svg";
import akomas from "./images/akomas.png";
//import arabman from "./images/arabman.png";
import oneguy from "./images/oneguy.png";
import birthright from "./images/birthright.png";
import gentlesoul from "./images/gentlesoul.jpg";
//import ifeanyi from "./images/ifeanyi.png";
import ndu from "./images/ndu.png";
import njgodswill from "./images/njgodswill.png";
//import vianney from "./images/vianney.png";
import seyi from "./images/seyi.png";
import philip from "./images/philip.png";
import allwell from "./images/allwell.png";
import tomiwa from "./images/tomiwa.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import youtube from "./images/youtube.png";
import facebook from "./images/facebook.png";
import email from "./images/email.png";
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
        <img src={brandlogo} alt="brand" className="brandpic" />
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
        <img src={hero_image_pc} className="hero_image_pc" alt="hero_image" />
      </div>
      <div className="forwho">
        <text className="forwhoheader">Who is Hospiyou for?</text>
        <text className="exist">We exist for everyone in the world</text>
        <div style={imagebg}>
          <div className="whodivtwo">
            <img src={family} className="fapng" alt="fam" />
            <div className="detaildiv">
              <text className="foryou">For you and your family</text>
              <text className="details">
                Our AI-powered telemedicine application allows you to take
                medical tests and have remote consultations with local and
                international doctors, all from the comfort of your home
              </text>
            </div>
          </div>
        </div>
      </div>
      <div className="fordiv">
        <div className="practitioner">
          <text className="for">For medical practioners</text>
          <text className="empower">
            Empower your practice with cutting-edge technology. Join Hospiyou to
            connect with patients globally, offer support remotely, and enhance
            your medical services through innovative features.
          </text>
          <img src={docs} className="docstyle" alt="docsalt" />
        </div>
        <div className="facility">
          <text className="for">For medical facilities</text>
          <text className="empower">
            Transforming healthcare delivery. Streamline operations, connect
            with patients seamlessly, and provide unparalleled services with our
            comprehensive platform.
          </text>
          <img src={docs} className="docstyle" alt="docsalt" />
        </div>
      </div>
      <div className="whygeneral">
        <div className="whycarediv">
          <text className="whycare">Why do we care?</text>
          <text className="believe">
            We believe in accessible and quality healthcare for everyone. Our
            mission is to revolutionize the health industry, bridging the gap
            between patients and practitioners globally
          </text>
          <div className="goaldiv">
            <text className="goalheader">Our goal</text>
            <text className="set">
              We aim to set a new standard for accessible and efficient
              healthcare
            </text>
          </div>
        </div>
        <img src={purple} className="purple-style" alt="purplealt" />
      </div>
      <div className="services">
        <text className="unique">Our unique services</text>
        <text className="following">
          Following the launch of our mobile app, here are some unique services
          we offer
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
      <div className="humans">
        <text className="of">Humans of Hospiyou</text>
        <text classname="behind">Meet the amazing team behind Hospiyou</text>
        <div className="team">
          <div className="teamdivone">
            <img src={njgodswill} alt="pic1" className="pictures" />
            <img src={akomas} alt="pic2" className="pictures" />
            <img src={allwell} alt="pic3" className="pictures" />
            <img src={philip} alt="pic4" className="pictures" />
            <img src={seyi} alt="pic5" className="pictures" />
            <img src={birthright} alt="pic6" className="pictures" />
            <img src={ndu} alt="pic7" className="pictures" />
            <img src={tomiwa} alt="pic8" className="pictures" />
            <img src={gentlesoul} alt="pic9" className="pictures" />
            <img src={oneguy} alt="pic10" className="pictures" />
          </div>
          <div className="teamdivtwo"></div>
        </div>
      </div>
      <div className="about">
        <text className="abouthospiyou">About Hospiyou</text>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ID2nMc0kA-o?si=fiJrW8I8KWD9WOTb"
          title="Everything about Hospiyou"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="footer">
        <div className="firstdiv">
          <img src={brandlogo} alt="brand" className="brandpic" />
          <div className="logo-container">
            <div className="logo-div">
              <img src={twitter} alt="logo1" className="logo-style" />
            </div>
            <div className="logo-div">
              <img src={instagram} alt="logo2" className="logo-style" />
            </div>
            <div className="logo-div">
              <img src={linkedin} alt="logo3" className="logo-style" />
            </div>
            <div className="logo-div">
              <img src={youtube} alt="logo4" className="logo-style" />
            </div>
            <div className="logo-div">
              <img src={facebook} alt="logo5" className="logo-style" />
            </div>
            <div className="logo-div">
              <img src={email} alt="logo6" className="logo-style" />
            </div>
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
        <div className="third-div"></div>
      </div>
    </div>
  );
}
