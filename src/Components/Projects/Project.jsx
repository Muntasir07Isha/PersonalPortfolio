import React from 'react';
import './project.css';

import gpt3Image from '../../assets/Portfolio images/gpt3.jpg';
import weatherImage from '../../assets/Portfolio images/Weather.jpg';
import ecommerceImage from '../../assets/Portfolio images/e-commerce.jpg';
import aladin from '../../assets/Portfolio images/aladin.jpg';
import NextWealth from '../../assets/Portfolio images/NextWealthBank.png';

const projects = [
  {
    id: 1,
    title: "NextWealth Bank App",
    description: "A web app promoting public health awareness with detailed resources and an intuitive design.",
    imageUrl: NextWealth,
    link: "https://next-wealth-bank.vercel.app",
  },
  {
    id: 2,
    title: "GPT4 Visualize",
    description: "An AI visualization app showcasing the integration of GPT-4 functionalities with an interactive user interface.",
    imageUrl: gpt3Image,
    link: "https://starlit-stardust-94693d.netlify.app/",
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
