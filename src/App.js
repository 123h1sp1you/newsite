import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutpage from "./pages/aboutpage";

import Enquiry from "./pages/enquiry";

import Footerpage from "./pages/footerpage";

import Forpage from "./pages/forpage";

import Headerpage from "./pages/headerpage";

import Heroimagepage from "./pages/heroimagepage";

import Heropage from "./pages/heropage";

import Ourgoal from "./pages/ourgoal";

import Servicepage from "./pages/servicepage";
import Note from "./pages/note";

//import Team from "./pages/team";

function Homepage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
