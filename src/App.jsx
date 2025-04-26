import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import Projects from "./components/Project";
import Career from "./components/Career";
import Education from "./components/Education";

function App() {
  return (
    <div id="container">
      <div className="main">
        <Navbar />
        <FrontPage />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="career">
        <Career />
      </div>
      <div id="education">
        <Education />
      </div>
    </div>
  );
}

export default App;
