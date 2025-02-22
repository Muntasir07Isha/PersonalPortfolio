import React from 'react';
import './project.css';

import weatherImage from '../../assets/Portfolio_images/Weather.jpg';
import ecommerceImage from '../../assets/Portfolio_images/e-commerce.jpg';
import aladin from '../../assets/Portfolio_images/aladin.jpg';
import NextWealth from '../../assets/Portfolio_images/NextWealthBank.png';
import aiDrawRecognitionImage from '../../assets/Portfolio_images/ai-draw-image.jpg'
const projects = [

  {
    id: 1,
    title: "AI Draw Recognition",
    description: "A real-time AI-powered drawing recognition app utilizing Google's Gemini Flash API. The app allows users to sketch on a canvas, instantly analyzing and predicting the drawn object with high accuracy. Built with React, Node.js, and TypeScript, it demonstrates cutting-edge AI inference and interactive AI-based sketch recognition.",
    imageUrl: aiDrawRecognitionImage,  
    link: "https://ai-draw-recognition-app.vercel.app", 
  },
  {
    id: 2,
    title: "NextWealth Bank App",
    description: "NextWealth Bank App: A modern banking web application featuring real-time transaction functionality and an AI-powered chatbot for seamless user interaction. Designed for a smooth and intuitive user experience with cutting-edge technology.",
    imageUrl: NextWealth,
    link: "https://next-wealth-bank.vercel.app",
  },
  {
    id: 3,
    title: "WeatherApp",
    description: "A weather forecasting app providing real-time weather updates and a visually engaging user interface.",
    imageUrl: weatherImage,
    link: "https://weather2024-dusky.vercel.app",
  },
  {
    id: 4,
    title: "E-Commerce (Color Rendering Products)",
    description: "A modern e-commerce web app that allows users to view and purchase products with advanced color rendering functionality.",
    imageUrl: ecommerceImage,
    link: "https://thunderous-douhua-3925ed.netlify.app/",
  },
  
  {
    id: 5,
    title: "Restaurant",
    description: "A demo restaurant website showcasing a clean, professional layout for menu and contact details.",
    imageUrl: aladin,
    link: "https://666091d3b58c8f462fbc8de6--resturantdemomunta.netlify.app/",
  },
];

const Project = () => {
  return (
    <div className="header-banner">
      <h1 className="banner">Projects</h1>
      <div className="project-list-container">
        <h2 className="h2-text">Web Apps</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
              </a>
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
