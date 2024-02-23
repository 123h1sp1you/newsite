import React from "react";
import brandlogo from "../images/brandlogo.png";
import { HashLink } from "react-router-hash-link";

const HeaderPage = () => {
  return (
    <div className="header">
      <img src={brandlogo} alt="brand" className="brandpic" />
      <ul className="nav">
        <li className="nav-button">
          <HashLink smooth to="/#goals">
            Our goals
          </HashLink>
        </li>

        <li className="nav-button">
          <HashLink smooth to="/#services">
            Our services
          </HashLink>
        </li>
        <li className="nav-button">
        <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>
      </ul>
      <button className="header-button">
        <text className="install-text">Download App</text>
      </button>
    </div>
  );
};
export default HeaderPage;
