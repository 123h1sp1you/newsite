import React from "react";
import hand from "../images/hand.svg";

const Pop = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <img src={hand} alt="hand_alt" />

      <div className="modalRight">
        <button className="closeBtn" onClick={onClose}></button>
      </div>
    </div>
  );
};

export default Pop;
