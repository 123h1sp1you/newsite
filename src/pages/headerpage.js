import React from "react";
import brandlogo from "../images/brandlogo.png";
import { Link } from "react-scroll";

const HeaderPage = () => {
  return (
    <div className="header">
      <img src={brandlogo} alt="brand" className="brandpic" />
      <ul className="nav">
        <li className="nav-button">
          <Link to="Ourgoal" smooth={true} duration={500}>
            Our goals
          </Link>
        </li>

        <li className="nav-button">
          <Link to="Servicepage" smooth={true} offset={-100} duration={500}>
            Our services
          </Link>
        </li>
        <li className="nav-button">
          <Link to="Aboutpage" smooth={true} offset={-50} duration={500}>
            About
          </Link>
        </li>
      </ul>
      <button className="header-button">
        <text className="install-text">Download App</text>
      </button>
    </div>
  );
};
export default HeaderPage;
