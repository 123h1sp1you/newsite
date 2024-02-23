import React from "react";
import purple from "../images/purple.png";
import purplemobile from "../images/purple-mobile.png";

const OurGoal = () => {
  return (
    <div id="goals" className="whygeneral">
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
            We aim to set a new standard for accessible and efficient healthcare
          </text>
        </div>
      </div>
      <img src={purple} className="purple-style" alt="purplealt" />
      <img src={purplemobile} className="purple-mobile" alt="purplephonealt" />
    </div>
  );
};
export default OurGoal;
