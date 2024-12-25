import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/hero/Hero';
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import Education from './Components/Education/Education';
import Certification from './Components/Certification/Certification';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="projects">
        <Project />
      </div>

      <div id="education">
        <Education />
      </div>
      <div id="certification">
        <Certification />
        <div id="skills">
        <Skills />
      </div>

      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
