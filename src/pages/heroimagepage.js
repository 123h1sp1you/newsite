import React from "react";
import hero_image_pc from "../images/hero_image_pc.png";
import mobilehold from "../images/mobilehold.png";

const heroimagepage = () => {
  return (
    <div style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <div className="hero_image_pc">
        <img src={hero_image_pc} alt="hero_image" />
      </div>
      <div className="mobileholdstyle">
        <img src={mobilehold} alt="mobile-alt" style={{width: "100%", }} />
      </div>
    </div>
  );
};
export default heroimagepage;
