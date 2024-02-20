import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aboutpage from "./pages/Aboutpage";
import Enquiry from "./pages/Enquiry";
import Footerpage from "./pages/Footerpage";
import Forpage from "./pages/Forpage";
import Headerpage from "./pages/Headerpage";
import Heroimagepage from "./pages/Heroimagepage";
import Heropage from "./pages/Heropage";
import Servicepage from "./pages/Servicepage";
import Ourgoal from "./pages/ourgoal";
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
