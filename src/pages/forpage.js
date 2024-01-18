import React from "react";
import docs from "../images/docs.png";
import docmobile from "../images/docmobile.png";
import bedmobile from "../images/bedmobile.png";
import facilitypic from "../images/facilitypic.png";
const forpage = () => {
  return (
    <div className="for-general">
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
            Transforming healthcare delivery. Streamline operations, connect
            with patients seamlessly, and provide unparalleled services with our
            comprehensive platform.
          </text>
          <img src={facilitypic} className="docstyle" alt="facalt" />
        </div>
      </div>
      <div className="for-mobile">
        <div className="pract-mobile">
          <text className="fortext">For medical practitioners</text>
          <text className="empower-mobile">
            Empower your practice with cutting-edge technology. Join Hospiyou to
            connect with patients globally, offer support remotely, and enhance
            your medical services through innovative features.
          </text>
          <img src={docmobile} className="doc-mobile-style" alt="docalt" />
        </div>

        <div className="med-mobile">
          <text className="fortext">For medical facilities</text>
          <text className="empower-mobile">
            Transforming healthcare delivery. Streamline operations, connect
            with patients seamlessly, and provide unparalleled services with our
            comprehensive platform.
          </text>
          <img src={bedmobile} className="doc-mobile-style" alt="bedalt" />
        </div>
      </div>
    </div>
  );
};
export default forpage;
