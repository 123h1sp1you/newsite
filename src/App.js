import React from "react";
import "./App.css";

import Aboutpage from "./pages/aboutpage";

import Enquiry from "./pages/enquiry";

import Footerpage from "./pages/footerpage";

import Forpage from "./pages/forpage";

import Headerpage from "./pages/headerpage";

import Heroimagepage from "./pages/heroimagepage";

import Heropage from "./pages/heropage";

import Ourgoal from "./pages/ourgoal";

import Servicepage from "./pages/servicepage";

//import Team from "./pages/team";

function App() {
  return (
    <div className="container">
      <Headerpage />
      <Heropage />
      <Heroimagepage />
      <Enquiry />
      <Forpage />
      <Ourgoal />
      <Servicepage />
      {/* <Team /> */}
      <Aboutpage />
      <Footerpage />
    </div>
  );
}

export default App;
