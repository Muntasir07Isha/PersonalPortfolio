import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <>
      <h2 className='navbar-header'>Muntasir</h2>
      <div className='navbar'>
        <ul className='nav-menu'>
          <li>
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="education" smooth={true} duration={500}>
              Education
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="skills" smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </li>


          
          <li>
            <ScrollLink to="certification" smooth={true} duration={500}>
              Certification
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
       
      </div>
    </>
  );
}

export default Navbar;
