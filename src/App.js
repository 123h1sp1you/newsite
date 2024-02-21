import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import Enquiry from "./pages/Enquiry";
import FooterPage from "./pages/FooterPage";
import ForPage from "./pages/ForPage";
import HeaderPage from "./pages/HeaderPage";
import HeroImagePage from "./pages/HeroImagePage";
import HeroPage from "./pages/HeroPage";
import ServicePage from "./pages/ServicePage";
import OurGoal from "./pages/OurGoal";
import Note from "./pages/Note";


//import Team from "./pages/team";

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
