import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderPage from "./pages/Headerpage";
import HeroPage from "./pages/Heropage";
import HeroImagePage from "./pages/Heroimagepage";
import Enquiry from "./pages/Enquiry";
import ForPage from "./pages/Forpage";
import OurGoal from "./pages/ourgoal";
import ServicePage from "./pages/Servicepage";
import AboutPage from "./pages/aboutpage";
import FooterPage from "./pages/Footerpage";



function Homepage() {
  return (
    <div className="container">
      <HeaderPage />
      <HeroPage />
      <HeroImagePage />
      <Enquiry />
      <ForPage />
      <OurGoal />
      <ServicePage />
      <AboutPage />
      <FooterPage />
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
