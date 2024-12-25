import React from 'react'
import './project.css'

import gpt3Image from '../../assets/Portfolio images/gpt3.jpg';
import weatherImage from '../../assets/Portfolio images/weather.jpg';
import ecommerceImage from '../../assets/Portfolio images/e-commerce.jpg';
import aladin from '../../assets/Portfolio images/aladin.jpg'
import PublicHealth from '../../assets/Portfolio images/publicHealth.jpg';

const projects = [

  {
    id:1,
    title:"E-Commerce(Color Rendering Products)",
    imageUrl:ecommerceImage,
    link:"https://thunderous-douhua-3925ed.netlify.app/"
  },


    {
      id:2,
      title:"GPT4 Visiualize",
      imageUrl: gpt3Image,
      link: "https://starlit-stardust-94693d.netlify.app/"
    },
    {
      id:3,
      title:"WeatherApp",
      imageUrl:weatherImage,
      link:"https://gorgeous-begonia-78820b.netlify.app/"
    
    },

    {
      id:4,
      title:"PublicHealth",
      imageUrl:PublicHealth,
      link:"https://whimsical-fairy-bf36b3.netlify.app"
    },



    {
      id:5,
      title:"Resturant",
      imageUrl:aladin,
      link:"https://666091d3b58c8f462fbc8de6--resturantdemomunta.netlify.app/"
    },


]


const Project = () => {
  return (
    <div  className='header-banner'>
      <h1 className='banner'>Projects</h1>
        <div className='project-list-container'>
            <h2 className='h2-text'>Web Apps</h2>
            <div className="project-list">
              {projects.map((project)=>(
                <div key={project.id} className='project-item'>
                   <a href={project.link} target='blank' rel='noopener noreferrer'>
                    <img src={project.imageUrl} alt={project.title}  className='project-image'  />  
                    
                  </a>       
                <p className='project-title'>{project.title}</p>
              </div>
              ))} 
                         
              
              
            
            
            
            </div>      
        </div>
    </div>
  )
}

export default Project