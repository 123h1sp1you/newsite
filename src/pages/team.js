import React from "react";
import akomas from "../images/akomas.png";
//import arabman from "../images/arabman.png";
import oneguy from "../images/oneguy.png";
import birthright from "../images/birthright.png";
import gentlesoul from "../images/gentlesoul.jpg";
//import ifeanyi from "../images/ifeanyi.png";
import ndu from "../images/ndu.png";
import njgodswill from "../images/njgodswill.png";
//import vianney from "../images/vianney.png";
import seyi from "../images/seyi.png";
import philip from "../images/philip.png";
import allwell from "../images/allwell.png";
import tomiwa from "../images/tomiwa.png";

const team = () => {
  return (
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
  );
};

export default team;
