import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Project from "./Pages/Projects/Project";
import Resume from "./Pages/Resume/Resume";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import "./style.css";
import Footer from "./Components/Navbar/Footer";

function App() {
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
