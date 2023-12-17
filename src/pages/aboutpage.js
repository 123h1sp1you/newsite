import React from "react";

const aboutpage = () => {
  return (
    <div className="about">
      <text className="abouthospiyou">About Hospiyou</text>
      <div className="YTdiv">
        <iframe
          className="YTdiv"
          src="https://www.youtube.com/embed/ID2nMc0kA-o?si=fiJrW8I8KWD9WOTb"
          title="Everything about Hospiyou"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
export default aboutpage;
