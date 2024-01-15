import React, { useState } from "react";
import apple from "../images/apple-icon.png";
import android from "../images/playstore-icon.png";
import Pop from "../pages/Pop";

const Heropage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="hero">
      <text className="tagline">
        Making quality healthcare available for everyone
      </text>
      <text className="welcometext">
        Welcome to Hospiyou, where quality healthcare meets you wherever you are
      </text>
      <div className="downloaddiv">
        <button onClick={() => setOpenModal(true)} className="downloadbutton">
          <img src={apple} alt="appleicon" className="icon-style" />
          <text className="downloadtext">Get app on Apple store</text>
        </button>
        <button onClick={() => setOpenModal(true)} className="downloadbutton">
          <img src={android} alt="playstoreicon" className="icon-style" />
          <text className="downloadtext">Get app on Play store</text>
        </button>
        <Pop open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
};
export default Heropage;
