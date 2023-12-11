import React from "react";
import hero_image_pc from "../images/hero_image_pc.png";
import mobilehold from "../images/mobilehold.png";

const heroimagepage = () => {
  return (
    <div>
      <div className="hero_image">
        <img src={hero_image_pc} className="hero_image_pc" alt="hero_image" />
      </div>
      <img src={mobilehold} className="mobileholdstyle" alt="mobile-alt" />
    </div>
  );
};
export default heroimagepage;
