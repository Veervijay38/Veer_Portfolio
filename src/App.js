import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Project from "./Pages/Projects/Project";
import Resume from "./Pages/Resume/Resume";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import "./style.css";
import Footer from "./Components/Navbar/Footer";
import ReactGA from "react-ga";

const trackingId = "UA-194287070-1";
ReactGA.initialize(trackingId);
function App() {
  useEffect(() => {
    // This will trigger the first pageview event when the component mounts
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <React.Fragment>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
