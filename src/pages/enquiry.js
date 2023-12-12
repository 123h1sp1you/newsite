import React from "react";
import family from "../images/family.png";
import mobilebg from "../images/mobilebg.png";
import bg from "../images/bg.png";

const Enquiry = () => {
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

  const imagebg2 = {
    background: `url(${mobilebg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 578,
    display: "flex",    
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  };

  return (
    <div className="forwho">
      <text className="forwhoheader"> Who is Hospiyou for?</text>
      <text className="exist">We exist for everyone in the world</text>
      <div className="bg1">
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
      <div className="bg2">
        <div style={imagebg2}>
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
    </div>
  );
};
export default Enquiry;
