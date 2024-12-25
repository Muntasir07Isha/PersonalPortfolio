import React from 'react'
import './skills.css'
import { FaHtml5, FaCss3, FaReact, FaJs, FaNodeJs, FaPython, FaDatabase,FaGithub } from 'react-icons/fa';
import { SiCsharp, SiFirebase, SiTypescript, SiDotnet, SiBootstrap, SiSass, SiMongodb, SiGithubcopilot } from 'react-icons/si'


const skillsData = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3 /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'C#', icon: <SiCsharp /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'GitHub Copilot', icon: <SiGithubcopilot /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: '.NET', icon: <SiDotnet /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Sass', icon: <SiSass /> },
  { name: 'MongoDB', icon: <SiMongodb /> },

];




const Skills = () => {
  return (
    <div  className='skills-container'>
      <h2 className='section-title'>Technologies and Tools I have used</h2>
      <div className="skills-list">
          {skillsData.map((skill,index)=>(
            <div className='skill' key={index} > 
            {skill.icon}
            <span className='skill-name'>{skill.name}</span>

            </div>
          ))}



      </div>
    </div>
  )
}

export default Skills