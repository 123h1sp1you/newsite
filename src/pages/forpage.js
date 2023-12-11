import React from "react";
import docs from "../images/docs.png";

const forpage = () => {
  return (
    <div className="fordiv">
      <div className="practitioner">
        <text className="for">For medical practioners</text>
        <text className="empower">
          Empower your practice with cutting-edge technology. Join Hospiyou to
          connect with patients globally, offer support remotely, and enhance
          your medical services through innovative features.
        </text>
        <img src={docs} className="docstyle" alt="docsalt" />
      </div>
      <div className="facility">
        <text className="for">For medical facilities</text>
        <text className="empower">
          Transforming healthcare delivery. Streamline operations, connect with
          patients seamlessly, and provide unparalleled services with our
          comprehensive platform.
        </text>
        <img src={docs} className="docstyle" alt="docsalt" />
      </div>
    </div>
  );
};
export default forpage;
