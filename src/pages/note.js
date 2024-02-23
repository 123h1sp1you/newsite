import React from "react";
import Headerpage from "./Headerpage";
import Footerpage from "./Footerpage";
import bentphone from "../images/bentphone.png";
import straightphone from "../images/straightphone.png";
import { Link } from "react-router-dom";

const Note = () => {
  const handleEmailClick = () => {
    const recipientEmail = "hi@hospiyou.com"; // Replace with the desired recipient email
    const subject = "Important Information"; // Optional subject line
    const body = "Here is the email body content."; // Optional email body

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <Headerpage />
      <Link to={"/"}>Go back </Link>
      <div className="note-div">
        <div className="phone-div">
          <img className="phones" src={bentphone} alt="bentalt" />
          <img className="phones2" src={straightphone} alt="straightalt" />
        </div>
        <div className="letter-div">
          <text className="letter-header">A letter to investors</text>
          <text className="letter-content">Dear Investor,</text>
          <text className="letter-content">
            Welcome to the future of healthcare with Hospiyou, Inc. Our
            AI-powered telemedical application is poised to revolutionize the
            Health Tech industry. At Hospiyou, we’ve developed a cutting-edge
            platform that empowers users to take AI-powered medical tests and
            engage in remote consultations with healthcare professionals
            globally. Our commitment extends beyond conventional telemedicine,
            with innovative features in the pipeline including SaaS, Hospiyou
            for Medical facilities, AI-driven in-home doctor robot, Wearables,
            and more. Join us in shaping the future of accessible, efficient,
            and technologically advanced healthcare. Invest in Hospiyou, where
            innovation meets impact. For more information and details.
          </text>
          <button onClick={handleEmailClick} className="letter-button">
            <text className="letterbuttontext">Email us hi@hospiyou.com</text>
          </button>
        </div>
      </div>
      <Footerpage />
    </div>
  );
};
export default Note;
